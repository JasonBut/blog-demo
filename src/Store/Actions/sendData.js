import Types from '../Types';
import { asyncFetch, idGenerator } from '@/Util';

// e.g payload = {
//  data: {
//    title || guestName: String,
//    content: String,
//  }
//  isAmend: Boolean,
//  isComment: Boolean,
//  category: String, eg. 'programs'
//  postId: String, eg. '08'
// }

export default async ({ commit }, payload) => {
  if (!payload) {
    throw new Error(`No valid data in payload - ${payload}`);
  }

  const { data, category, postId, isComment, isAmend } = payload;
  const { guestName, content, title } = data;

  if (!content) {
    throw new Error(`Cannot get content in ${data}, seems it's an unexpected object`);
  }

  const fetchMode = isAmend ? 'put' : 'post'; // 判断编辑模式选择使用'POST'还是'PUT'
  const fetchTarget = isComment ? 'comment' : 'post'; // 判断要提交的内容是评论还是文章

  try {
    let latestId = null;
    let newId = null;

    commit({ type: Types.REQUESTED_START });

    if (fetchMode === 'post') {
      // 获取最新的文章/评论内容
      latestId = await asyncFetch.get({
        target: `latest_${fetchTarget}`
      });

      // 如没有返回数据,表示还没有内容
      if (latestId.length === 0) {
        latestId = [{ id: 0 }];
      }

      // 生成新id
      newId = idGenerator()(latestId[0].id).next().value;
    }

    // 上传到数据库的评论字段
    const commentOptions = { post: postId, guestName };

    // 上传到数据库的文章字段
    const postOptions = { category, title };

    // 上传到数据库的通用字段
    let fetchOptions = {
      id: newId || postId, // 如果是编辑模式,则id是原有的postId
      date: new Date().toLocaleString(),
      content
    };

    // 判断isComment将评论/博文字段混入到通用字段对象
    fetchOptions = Object.assign(
      fetchOptions,
      (isComment
        ? commentOptions
        : postOptions
      ));

    await asyncFetch[fetchMode]({
      target: fetchTarget,
      rule: isAmend ? postId : null, // 修改文章需要用原id去定位文章在数据库中的位置
      data: fetchOptions
    });

    commit({ type: Types.REQUESTED_SUCCEEDED });
    window.history.go(0); // 发布成功刷新页面
  } catch (err) {
    commit({ type: Types.REQUESTED_FAILED, err });
  }
};
