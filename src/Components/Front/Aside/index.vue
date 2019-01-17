<template>
  <DataDisplayHOC target="categories">
    <AsideUI :categories="splitCategoryName" />
  </DataDisplayHOC>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'FrontAside',
  components: {
    AsideUI: () => import('./AsideUI'),
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC')
  },
  computed: {
    ...mapGetters(['splitCategoryName'])
  }
};
</script>
