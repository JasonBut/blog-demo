<template>
  <DataDisplayHOC target="posts">
    <template slot-scope="{ list, options, handleCurrentChange }">
      <ListUI
          :list="list"
          :options="options"
          :to="linkGenerator"
          @onCurrentChange="handleCurrentChange"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'FrontList',
  components: {
    ListUI: () => import('./FrontListUI'),
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC')
  },
  computed: {
    linkGenerator () {
      return (item) => ({
        name: 'post',
        params: {
          categoryName: item.category,
          id: item.id
        }
      });
    }
  }
};
</script>
