<template>
  <DataDisplayHOC target="posts">
    <template slot-scope="{ list, options, handleCurrentChange }">
      <FrontListUI
          :list="list"
          :to="linkGenerator"
      >
        <Pagination
            slot="pagination"
            :options="options"
            @on-current-change="handleCurrentChange"
        />
      </FrontListUI>
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'FrontList',
  components: {
    FrontListUI: () => import('./FrontListUI'),
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    Pagination: () => import('@/Components/Commons/Pagination')
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
