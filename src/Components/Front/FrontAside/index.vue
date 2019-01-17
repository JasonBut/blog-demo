<template>
  <DataDisplayHOC target="categories">
    <AsideUI :categories="splitCategoryName" :currentTab="currentTab" />
  </DataDisplayHOC>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'FrontAside',
  components: {
    AsideUI: () => import('./FrontAsideUI'),
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC')
  },
  computed: {
    ...mapGetters(['splitCategoryName']),
    currentTab () {
      const currentCategory = this.$route.path.split('/')[1];
      return currentCategory === '/about' ? '/' : `/${currentCategory}`;
    }
  }
};
</script>
