<template>
  <el-card class="back-post">
    <DataDisplayHOC target="back_post">
      <template slot-scope="{ post, list, options, handleCurrentChange }">
          <el-card class="post-details" v-if="post.content">
            <h1>
              <router-link :to="{ name: 'post', params: { categoryName: post.category, id: post.id } }">
                {{ post.title }}
              </router-link>
            </h1>
            <hr>
            <p class="sub-message">分类：{{ post.category }}</p>
            <div v-html="post.content"></div>
            <p class="sub-message">最后更新：{{ post.date }}</p>
          </el-card>
        <el-card class="post-details" v-else>
          <p class="not-found">文章不存在</p>
        </el-card>
        <PostCommentsUI
            :list="list"
            :options="options"
            scroll
            @on-current-change="handleCurrentChange"
            @on-view-scroll="handleScrollToItem"
        />
      </template>
    </DataDisplayHOC>
  </el-card>
</template>

<script>
import { CleanPostMixins, ScrollToItem } from '@/Util/mixins';
export default {
  name: 'BackPostDetails',
  mixins: [ CleanPostMixins, ScrollToItem ],
  components: {
    DataDisplayHOC: () => import('@/Components/DataDisplayHOC'),
    PostCommentsUI: () => import('@/Components/PostCommentsUI')
  }
};
</script>

<style lang="scss">
.not-found{
  @extend .back-post;
  text-align: center;
}

.back-post{
  color: $back-text-secondary;
  margin: 2% 0;
  .sub-message{
    font-size: 0.7em;
    &:last-child{
      text-align: right;
    }
  }
  .post-details{
    @extend .back-post;
    margin: 0 !important;
    color: $back-text-primary;
    h1{
      font-size: 2em;
      margin: 0;
    }
  }
  .comment-list{
    .el-card{
      color: $back-text-secondary;
      margin: 0;
    }
  }
}
</style>
