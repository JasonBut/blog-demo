<template>
  <DataDisplayHOC target="posts">
    <template slot-scope="scope">
      <ListUI
          :options="scope.options"
          :list="scope.list"
          :postPath="$route.path"
          @onCurrentChange="scope.handleCurrentChange"
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
  }
};
</script>
