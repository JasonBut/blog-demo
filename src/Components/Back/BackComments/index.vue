<template>
  <DataDisplayHOC target="all_comments">
    <template slot-scope="scope">
      <BackCommentsUI
          :list="scope.list"
          :options="scope.options"
          @onCurrentChange="scope.handleCurrentChange"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'BackComments',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    BackCommentsUI: () => import('./BackCommentsUI')
  }
};
</script>
