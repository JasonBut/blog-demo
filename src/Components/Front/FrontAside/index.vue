<template>
  <AsideUI :categories="categories" :currentTab="currentTab" />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'FrontAside',
  components: {
    AsideUI: () => import('./FrontAsideUI')
  },
  computed: {
    ...mapGetters({
      categories: 'splitCategoryName'
    }),
    currentTab () {
      const currentCategory = this.$route.path.split('/')[1];
      return currentCategory === '/about' ? '/' : `/${currentCategory}`;
    }
  },

  created () {
    this.getData({ target: 'categories' });
  },

  methods: {
    ...mapActions({ getData: 'getData' })
  }
};
</script>
