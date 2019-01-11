export default {
  splitCategoryName (state) {
    return state.categories.map((item) => {
      const name = item.name;
      const splitName = name.split('');
      const nameFirstPart = Number.parseInt(splitName.length / 2);
      const first = name.slice(0, nameFirstPart);
      const last = name.slice(nameFirstPart, splitName.length);
      return { ...item, first, last };
    });
  },

  filterPostList: (state) => (categoryName) => {
    return state.postList
      .filter((item) => item.category === categoryName)
      .reverse();
  }
};
