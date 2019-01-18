<template>
  <DataDisplayHOC target="categories">
    <BackCategoryUI :list="categoryWithoutAbout" />
  </DataDisplayHOC>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'BackCategory',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    BackCategoryUI: () => import('./BackCategoryUI')
  },
  computed: {
    ...mapGetters(['categoryWithoutAbout'])
  }
};
</script>
