<template>
  <DataDisplayHOC target="posts">
    <template slot-scope="{ options, handleCurrentChange }">
      <ListUI
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
      return ({ category, id }) => ({
        name: 'post',
        params: {
          categoryName: category,
          id
        }
      });
    }
  }
};
</script>
