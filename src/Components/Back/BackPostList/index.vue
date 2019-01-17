<template>
  <DataDisplayHOC target="all_posts">
    <template slot-scope="scope">
      <BackPostListUI
          :list="scope.list"
          :options="scope.options"
          @onCurrentChange="handleCurrentChange"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'BackList',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    BackPostListUI: () => import('./BackPostListUI')
  }
};
</script>
