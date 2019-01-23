<template>
  <DataDisplayHOC target="comments">
    <template slot-scope="{ list, options, handleCurrentChange }">
      <PostCommentsUI
          :list="list"
          :options="options"
          @on-current-change="handleCurrentChange"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
export default {
  name: 'FrontCommentList',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    PostCommentsUI: () => import('@/Components/Commons/PostCommentsUI')
  }
};
</script>

<style lang="scss">
.not-found{
  text-align: center;
}
.comment-list{
  .el-card{
    margin-top: 0.5em;
    color: $front-comment-color;
  }
}
</style>
