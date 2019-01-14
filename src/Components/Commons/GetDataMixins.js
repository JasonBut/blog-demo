const getDataStrategies = function (route) {
  return {
    'posts': `${route.path.split('/')[1]}`,
    'comments': `${route.params.id}`,
    'post': `${route.params.id}`
  };
};

export default (dataType) => {
  const lowerCaseType = dataType.toLowerCase();
  return {
    methods: {
      async getData (route = this.$route) {
        await this.$store.dispatch('getData', {
          target: lowerCaseType,
          rule: getDataStrategies(route)[lowerCaseType]
        });
      }
    },

    created () {
      this.getData();
    }
  };
};
