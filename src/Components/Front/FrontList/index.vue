<template>
  <DataDisplayHOC v-if="$route.name === 'post-list'" target="posts">
    <template slot-scope="{ list, post, options, handleCurrentChange }">
      <FrontListUI
          :list="list"
          :to="routeObject"
      >
        <Pagination
            slot="pagination"
            :options="options"
            @on-current-change="handleCurrentChange"
        />
      </FrontListUI>
    </template>
  </DataDisplayHOC>
  <router-view v-else />
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
    routeObject () {
      return ({ category: categoryName, id }) => ({
        name: 'post',
        params: { categoryName, id }
      });
    }
  }
};
</script>
