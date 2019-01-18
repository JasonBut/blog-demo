import Types from '../Types';
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

    default:
      return 'post';
  }
};

export default async ({ commit }, payload) => {
  try {
    if (!payload) {
      throw new Error(`The payload which got ${payload} is invalid `);
    }

    const { target } = payload;
    const targetToState = mapTarget(target);

    if (!targetToState) {
      throw new Error(`Cannot found ${targetToState} in store`);
    }

    /*
    * 由于评论列表和帖子列表共享state树中的list状态
    * 从帖子列表页进入到详情页时,由于list依然存有帖子列表的数据
    * 会造成评论列表明显的抖动,因此在发起请求时先清理原有的数据
    * 这个commit顺便也清理了帖子内容post的数据
    * 至于分类categories,由于加载后就不会变动
    * 因此即使这里加入清理也不会影响
    */
    commit({ type: Types.REQUESTED_START, target: targetToState });

    let data = await asyncFetch.get(payload); // 调用封装好的axios方法去获取数据

    if (!Array.isArray(data) && typeof data !== 'object') {
      throw new Error(`Wrong data returned, got ${typeof data}, expected 'Object' or 'Array'`);
    }

    // 博文列表和后台评论列表倒序排列
    if (!!(target.indexOf('posts') > -1 || target.indexOf('all_') > -1) && data.length > 0) {
      data = data.reverse();
    }

    commit({ type: Types.UPDATE_STORE, target: targetToState, data });

    commit({ type: Types.REQUESTED_SUCCEEDED });
  } catch (err) {
    commit({ type: Types.REQUESTED_FAILED, err });
  }
};
