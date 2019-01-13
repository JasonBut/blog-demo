import Types from '../Types';
import { asyncFetch } from '@/Util';

const targetToState = {
  categories: 'categories',
  post: 'post',
  comments: 'list',
  posts: 'list'
};

export default async ({ commit }, payload) => {
  try {
    if (!payload) {
      throw new Error(`The payload which got ${payload} is invalid `);
    }

    let { target } = payload;
    target = targetToState[target];

    if (!target) {
      throw new Error(`${target} is not a valid state`);
    }

    /*
    * 由于评论列表和帖子列表共享state树中的list状态
    * 从帖子列表页进入到详情页时,由于list依然存有帖子列表的数据
    * 会造成评论列表明显的抖动,因此在发起请求时先清理原有的数据
    * 这个commit顺便也清理了帖子内容post的数据
    * 至于分类categories,由于加载后就不会变动
    * 因此即使这里加入清理也不会影响性能
    */
    commit({ type: Types.REQUESTED_START, target });

    const data = await asyncFetch.get(payload); // 调用封装好的axios方法去获取数据

    commit({ type: Types.UPDATE_STORE, target, data });

    commit({ type: Types.REQUESTED_SUCCEEDED });
  } catch (err) {
    commit({ type: Types.REQUESTED_FAILED, err });
  }
};
