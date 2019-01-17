<template>
  <DataDisplayHOC target="all_comments">
    <template slot-scope="scope">
      <BackCommentsUI
          :options="scope.options"
          :list="scope.list"
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
