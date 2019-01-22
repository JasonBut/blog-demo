<template>
  <DataDisplayHOC target="comments">
    <template slot-scope="{ list, options, handleCurrentChange }">
      <CommentListUI
          :options="options"
          :list="list"
          @onCurrentChange="handleCurrentChange"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'FrontCommentList',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    CommentListUI: () => import('./FrontPostCommentsUI')
  }
};
</script>
