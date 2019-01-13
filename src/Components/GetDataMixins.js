const getDataStrategies = function (route) {
  return {
    'posts': `${route.path.split('/')[1]}`,
    'comments': `${route.params.id}`,
    'post': `${route.params.id}`
  };
};

export default (dataType) => ({
  methods: {
    async getData (route = this.$route) {
      const lowerCaseType = dataType.toLowerCase();
      await this.$store.dispatch('getData', {
        target: lowerCaseType,
        rule: getDataStrategies(route)[lowerCaseType]
      });
    }
  },

  created () {
    this.getData();
  },

  beforeRouteUpdate (to, from, next) {
    if (to.name === from.name && to.path !== from.path) {
      this.getData(to);
      next();
    }
  }
});
