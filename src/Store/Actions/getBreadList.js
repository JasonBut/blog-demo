import Types from '../Types';

export default ({ commit }, route) => {
  const currentPath = route.path;
  const paths = currentPath.split('/');
  const breadList = paths.map((item, i, arr) => {
    if (i > 0 && !item) {
      return;
    }
    return i > 0
      ? (arr.slice(0, i + 1).join('/'))
      : `/`;
  });
  commit({
    type: Types.UPDATE_BREAD_LIST,
    breadList
  });
};
