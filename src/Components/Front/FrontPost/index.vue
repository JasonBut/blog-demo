<template>
  <div class="post">
    <DataDisplayHOC target="post">
      <template slot-scope="{ post, list, options, handleCurrentChange }">
        <PostDetailsUI :details="post" />
        <PostCommentsUI
            :list="list"
            :options="options"
            @on-current-change="handleCurrentChange"
        />
      </template>
    </DataDisplayHOC>
    <!--如果没有返回有效文章信息,不渲染评论按钮-->
    <Editor v-if="post.content" comment />
  </div>
</template>

<script>
import { CleanPostMixins } from '@/Components/Mixins';
export default {
  name: 'FrontPost',
  mixins: [ CleanPostMixins ],

  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    PostDetailsUI: () => import('./FrontPostDetailsUI'),
    PostCommentsUI: () => import('@/Components/Commons/PostCommentsUI'),
    Editor: () => import('@/Components/Commons/Editor')
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
.post{
  margin: $front-content-el-card-margin;
}
</style>
