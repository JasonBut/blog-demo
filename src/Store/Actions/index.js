import Types from '../Types';
import { asyncFetch } from '@/Util';

const getData = async function ({ commit }, payload) {
  try {
    if (!payload) {
      throw new Error(`The payload which got ${payload} is invalid `);
    }

    commit({ type: Types.REQUESTED_START });

    const data = await asyncFetch.get(payload);
    const typeLowerCase = payload.target;

    if (typeLowerCase === 'post') {
      await commit({
        type: Types.GET_POST,
        data
      });
    } else if (typeLowerCase !== 'categories') {
      await commit({
        type: Types.GET_LIST,
        data
      });
    } else {
      await commit({
        type: Types.GET_CATEGORIES,
        data
      });
    }

    commit({ type: Types.REQUESTED_SUCCEEDED });
  } catch (err) {
    await commit({
      type: Types.REQUESTED_FAILED,
      err
    });
  }
};

export default {
  getData
};
