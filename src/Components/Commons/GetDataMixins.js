const getDataStrategies = function (route) {
  return {
    'posts': `${route.path.split('/')[1]}`, // eg. /programs 的 programs
    'comments': `${route.params.id}`, // eg. /programs/01 的 01
    'post': `${route.params.id}` // 同上
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
