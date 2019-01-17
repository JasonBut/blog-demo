<template>
  <DataDisplayHOC target="categories">
    <template slot-scope="scope">
      <BackCategoryUI
          :list="categoryFilter(scope.categories)"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'BackCategory',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    BackCategoryUI: () => import('./BackCategoryUI')
  },

  computed: {
    categoryFilter () {
      return (list) => list.filter((item) => item && item.cname);
    }
  }
};
</script>
