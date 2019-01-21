import Types from '../Types';
import { asyncFetch, idGenerator } from '@/Util';

// e.g
// {
//   id: "01",
//   label: "Programs",
//   cname: "项目记录",
//   name: "programs",
//   amend: true
// }

export default async ({ commit, dispatch }, payload) => {
  if (!payload) {
    throw new Error(`No valid data in payload - ${payload}`);
  }

  const { id: currentId, label, cname, name } = payload;

  if (!label || !cname || !name) {
    throw new Error(`Payload - ${payload} is not completed`);
  }

  // 没用当前id属性意味着是新建分类请求
  const fetchMode = currentId ? 'put' : 'post';

  try {
    let latestId = null;
    let newId = null;
    commit({ type: Types.REQUESTED_START });

    if (!currentId) {
      ([ latestId ] = await asyncFetch.get({ target: 'latest_category' }));

      if (typeof latestId !== 'object') {
        throw new Error(`Invalid data returned from 'latest_category', got ${typeof latestId}, expected 'Object'.`);
      }

      // 如没有返回数据,表示还没有内容
      if (!latestId) {
        latestId = { id: 0 };
      }

      if (!latestId.id) {
        throw new Error(`Cannot get the latest id from 'latest_category'.`);
      }

      newId = idGenerator()(latestId.id).next().value;
    }

    const data = Object.assign(payload, (currentId ? {} : { id: newId }));

    await asyncFetch[fetchMode]({
      target: 'category',
      rule: currentId,
      data
    });

    commit({ type: Types.REQUESTED_SUCCEEDED });
    dispatch('getData', { target: 'categories' });
  } catch (err) {
    commit({ type: Types.REQUESTED_FAILED, err });
    await alert(`发送请求失败，请稍后尝试！`);
    window.history.go(0);
  }
};
