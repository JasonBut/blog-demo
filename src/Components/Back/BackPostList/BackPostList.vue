<template>
  <DataDisplayHOC target="all_posts">
    <template slot-scope="scope">
      <BackPostListUI
          :list="scope.list"
          :options="scope.options"
          @onCurrentChange="scope.handleCurrentChange"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'BackPostList',
  components: {
    BackPostListUI: () => import('./BackPostListUI'),
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC')
  }
};
</script>
