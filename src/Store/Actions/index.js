import { MUTATIONS } from '@/Store/Constants';
import { asyncFetch } from '@/Util';

const getData = async function ({ commit }, payload) {
  try {
    commit({ type: MUTATIONS.FETCH_START });

    const response = await asyncFetch.get(payload);

    const { type } = payload;

    switch (type) {
      case 'categories':
        if (!response) {
          throw new Error(`No valid data return`);
        }

        await commit({
          type: MUTATIONS.GET_CATEGORIES,
          payload: response
        });
        break;
    }

    commit({ type: MUTATIONS.FETCH_SUCCESS });
  } catch (err) {
    await commit({
      type: MUTATIONS.REQUESTED_FAILED,
      err
    });
  }
};

export default {
  getData
};
