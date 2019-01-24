import Types from '../Types';
import { asyncFetch, createNewId } from '@/Util';

// e.g payload = {
// String title || guestName || cname, 文章标题 || 评论访客名 || 分类中文名,
// String content, 文章内容
// String category, 文章分类
// String postId, 文章id
// String categoryId, 分类id
// Boolean isAmend, 是否编辑
// }

export default async ({ commit, dispatch }, payload) => {
  if (!payload) {
    throw new Error(`No valid data in payload - ${payload}`);
  }

  const {
    categoryId, guestName, content, title, cname,
    category, postId, commentId, isAmend, callback
  } = payload;
  const currentId = categoryId || commentId || postId;

  if (!content && !cname) {
    throw new Error(`Invalid value from payload, seems it's an unexpected object.`);
  }

  // 判断使用'POST'还是'PUT'
  const fetchMode = isAmend || categoryId ? 'put' : 'post';

  /*
  * 鸭子类型判断需要提交的数据类型
  * 不是太稳健,但暂时想不到更好的方法去判断
  */
  const fetchTarget =
    (!!cname && 'category') ||
    (!!title && 'post') ||
    (!!guestName && 'comment');

  const reloadTarget =
    (!!cname && 'categories') ||
    (!!title && 'all_posts') ||
    (!!(guestName && isAmend) && 'all_comments') ||
    (!!guestName && 'comments');
  try {
    commit({ type: Types.REQUESTED_START });
    let newId;

    // POST请求前创建新id
    (!isAmend || !categoryId) && (newId = await createNewId(fetchTarget));

    // 评论独有属性
    const commentProps = guestName ? { post: postId, guestName } : {};

    // 文章独有属性
    const postProps = title ? { category, title } : {};

    // 文章/评论属性对象
    const articleCommonProps = {
      ...commentProps,
      ...postProps,
      date: new Date().toLocaleString(),
      content
    };

    // 分类属性对象
    const categoryProps = !!cname && payload;

    await asyncFetch[fetchMode]({
      target: fetchTarget,
      rule: (isAmend || categoryId) ? currentId : null, // 修改数据需要用原id去定位位置
      data: Object.assign({ id: newId || currentId }, (
        content ? articleCommonProps : categoryProps // 根据content是否有值去混入不同的对象
      ))
    });

    commit({ type: Types.REQUESTED_SUCCEEDED });

    // 发布后请求接口刷新页面
    await dispatch('getData', { target: reloadTarget });
  } catch (err) {
    commit({ type: Types.REQUESTED_FAILED, err });
    callback && callback();
  }
};
