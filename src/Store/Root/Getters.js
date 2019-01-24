export default {
  // 从保存在state树中的list状态提取已有文章信息
  postFilterFromList ({ list }) {
    return (targetId) => list.filter(({ id, title }) => id === targetId && !!title);
  }
};
