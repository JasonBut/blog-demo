<template>
  <el-tabs v-if="$route.name === 'manage-posts'" v-model="currentTab" type="card">
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
  <router-view v-else />
</template>

<script>
import { ArticleEdit } from '@/Util/mixins';

// 传入Mixin的配置,内容是当前PostList组件的一些信息
const editMixinOptions = {
  tabDataName: 'currentTab',
  mainTab: 'post-list',
  editorTab: 'publish'
};

export default {
  name: 'BackList',
  mixins: [ ArticleEdit('post', editMixinOptions) ],

  components: {
    BackPostList: () => import('./BackList'),
    Editor: () => import('@/Components/Editor')
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
