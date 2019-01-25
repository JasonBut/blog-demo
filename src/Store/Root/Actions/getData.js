import Types from '../../Types';
import { asyncFetch } from '@/Util';

const mapTarget = function (target) {
  switch (target) {
    case 'categories':
      return `categories`;

    case 'comments':
    case 'all_comments':
    case 'posts':
    case 'all_posts':
      return 'list';

    case 'post':
    case 'back_post':
      return 'post';

    default:
      return undefined;
  }
};

export default async ({ commit }, payload) => {
  if (!payload) {
    throw new Error(`Payload - ${payload} is invalid `);
  }
  const { target, callback } = payload;
  const lowerCaseTarget = target.toLowerCase();
  const targetToState = mapTarget(lowerCaseTarget);
  if (!targetToState) {
    throw new Error(`Cannot found ${targetToState} in store`);
  }
  try {
    commit({ type: Types.REQUESTED_START });
    /*
    * 由于评论列表和帖子列表共享state树中的list状态
    * 从帖子列表页进入到详情页时,由于list依然存有帖子列表的数据
    * 会造成评论列表明显的抖动,因此在发起请求时先清理原有的数据
    * 这个commit顺便也清理了帖子内容post的数据
    * 至于分类categories,由于加载后就不会变动
    * 因此即使这里加入清理也不会影响
    */
    commit({
      type: Types.UPDATE_STORE,
      target: targetToState,
      data: targetToState === 'post' ? {} : []
    });

    let data = await asyncFetch.get(payload); // 调用封装好的axios方法去获取数据

    if (!Array.isArray(data) && typeof data !== 'object') {
      throw new Error(`Wrong data returned, got ${typeof data}, expected 'Array' or 'Object'.`);
    }

    // 前台博文目标提取返回数组的首项
    if (lowerCaseTarget === 'post') {
      ([ data ] = data);
      if (!data || !data.content) {
        throw new Error(`No such post`);
      }
    }

    // 博文列表和后台评论列表倒序排列
    if (!!(lowerCaseTarget.endsWith('posts') || lowerCaseTarget.startsWith('all_')) && data.length > 0) {
      data = data.reverse();
    }

    commit({ type: Types.UPDATE_STORE, target: targetToState, data });
    commit({ type: Types.REQUESTED_SUCCEEDED });
  } catch (err) {
    commit({ type: Types.REQUESTED_FAILED, err });
    callback && callback();
  }
};
