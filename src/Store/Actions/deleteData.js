import Types from '../Types';
import { asyncFetch } from '@/Util';

export default ({ commit }, payload) => {
  if (!payload) {
    throw new Error(`No valid data in payload - ${payload}`);
  }
  if (!confirm('确定是否删除?')) {
    return false;
  }
  /*
  * 分类有cname值
  * 博文有title
  * 没有此两项则为评论
  */
  const { id, cname, title } = payload;
  const type = (!!cname && 'category') || (title ? 'post' : 'comment');

  try {
    commit({ type: Types.REQUESTED_START });

    // 调用封装好的axios方法去获取数据
    asyncFetch.delete({
      target: type,
      rule: id
    });
    commit({ type: Types.REQUESTED_SUCCEEDED });
    window.history.go(0);// 删除成功刷新页面
  } catch (err) {
    commit({ type: Types.REQUESTED_FAILED, err });
  }
};
