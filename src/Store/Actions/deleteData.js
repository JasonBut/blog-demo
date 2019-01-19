import Types from '../Types';
import { asyncFetch } from '@/Util';

export default ({ commit }, payload) => {
  if (!payload) {
    throw new Error(`No valid data in payload - ${payload}`);
  }
  if (!confirm('确定是否删除？')) {
    return false;
  }
  /*
  * cname判断可删除分类
  * title判断博文
  * guestName判断评论
  * 并且需要确保传入的payload对象格式正确
  * 必须包含上面提到的其中一项
  */
  const { id, cname, title, guestName } = payload;
  const target =
    (!!cname && 'category') ||
    (!!title && 'post') ||
    (!!guestName && 'comment');

  if (!target || !id) {
    throw new Error(`Invalid target '${target}' or id '${id}'`);
  }
  try {
    commit({ type: Types.REQUESTED_START });

    // 调用封装好的axios方法去获取数据
    asyncFetch.delete({
      target,
      rule: id
    });
    commit({ type: Types.REQUESTED_SUCCEEDED });
    window.history.go(0);// 删除成功刷新页面
  } catch (err) {
    commit({ type: Types.REQUESTED_FAILED, err });
  }
};
