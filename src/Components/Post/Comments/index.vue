<template>
  <DataDisplayHOC target="comments">
    <template slot-scope="scope">
      <CommentListUI
          :options="scope.options"
          :list="scope.list"
          @onCurrentChange="scope.handleCurrentChange"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'CommentList',

  components: {
    DataDisplayHOC: () => import('../../Commons/DataDisplayHOC'),
    CommentListUI: () => import('./CommentsUI')
  }
};
</script>
