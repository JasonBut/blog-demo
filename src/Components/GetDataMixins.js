import { mapActions } from 'vuex';

const getDataStrategies = function (route) {
  return {
    'posts': `${route.path.split('/')[1]}`,
    'comments': `${route.params.id}`,
    'post': `${route.params.id}`
  };
};

export default (dataType) => ({
  methods: {
    ...mapActions(['getData']),

    getData (route = this.$route) {
      const lowerCaseType = dataType.toLowerCase();
      this.$store.dispatch('getData', {
        target: lowerCaseType,
        rule: getDataStrategies(route)[lowerCaseType]
      });
    }
  },

  created () {
    this.getData();
  },

  beforeRouteUpdate (to, from, next) {
    if (to.name === from.name && to.params !== from.params) {
      this.getData(to);
      next();
    }
  }
});
