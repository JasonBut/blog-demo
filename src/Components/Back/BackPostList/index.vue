<template>
  <el-tabs v-model="currentTab" type="card">
    <el-tab-pane label="文章列表" name="post-list">
      <BackPostList/>
    </el-tab-pane>
    <el-tab-pane :label="`${ editingArticle ? '编辑' : '发表' }文章`" name="publish">
      <Editor
          post
          id="publish"
          :amend="editingArticle"
          :amend-value="amendValue"
          @on-cancel="currentTab = 'post-list'"
          @on-submit="handleSubmit"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import { ArticleEdit } from '@/Components/Mixins';
export default {
  name: 'BackList',
  mixins: [ ArticleEdit('post') ],

  components: {
    BackPostList: () => import('./BackList'),
    Editor: () => import('@/Components/Commons/Editor')
  },

  provide () {
    return {
      handleEdit: this.handleEdit
    };
  },

  data () {
    return {
      currentTab: 'post-list'
    };
  }
};
</script>
