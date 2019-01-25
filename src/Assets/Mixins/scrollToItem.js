export default {
  methods: {
    handleScrollToItem (refs) {
      const path = this.$route.params.anchor;
      const ref = path && refs[path];
      if (Array.isArray(ref)) {
        const { 0: { $el: element } } = ref;
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }
};
