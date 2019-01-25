import Types from '@/Store/Types';
import { asyncFetch } from '@/Util';

export default async ({ commit, dispatch }, payload) => {
  if (!payload) {
    throw new Error(`No valid data in payload - ${payload}`);
  }
  /*
  * cname判断展示的分类
  * title判断博文
  * guestName判断评论
  * 并且需要确保传入的payload对象格式正确
  * 必须包含上面提到的其中一项
  */
  const { id, cname, title, guestName, callback } = payload;

  const target =
    (!!cname && 'category') ||
    (!!title && 'post') ||
    (!!guestName && 'comment');

  const reloadTarget =
    (!!cname && 'categories') ||
    (!!title && 'all_posts') ||
    (!!guestName && 'all_comments');

  if (!target || !id) {
    throw new Error(`Invalid target '${target}' or id '${id}'`);
  }
  try {
    commit({ type: Types.REQUESTED_START }, { root: true });
    // 调用封装好的axios方法去获取数据
    await asyncFetch.delete({
      target,
      id
    });
    commit({ type: Types.REQUESTED_SUCCEEDED }, { root: true });
    await dispatch('getData', { target: reloadTarget }, { root: true });
  } catch (err) {
    commit({ type: Types.REQUESTED_FAILED, err }, { root: true });
    callback && callback();
  }
};
