<template>
  <el-tabs v-model="currentTab" type="card">
    <el-tab-pane label="文章列表" name="post-list">
      <BackPostList />
    </el-tab-pane>
    <el-tab-pane :label="`${ editing ? '编辑' : '发表' }文章`" name="publish">
      <Editor
          post
          id="publish"
          :amend="editing"
          :amendValue="editing && amendValue"
      />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'BackList',
  components: {
    BackPostList: () => import('./BackList'),
    Editor: () => import('@/Components/Commons/Editor')
  },
  provide () {
    return {
      handleEdit: this.handleEdit,
      handleCancel: this.handleCancel
    };
  },
  data () {
    return {
      editing: false,
      currentTab: 'post-list',
      amendValue: undefined
    };
  },
  methods: {
    handleEdit (post) {
      this.editing = true;
      this.currentTab = 'publish';
      const { category, title, content, id } = post;
      this.amendValue = {
        postId: id,
        category,
        title,
        content
      };
    },
    handleCancel () {
      if (confirm('确定放弃修改文章？')) {
        this.editing = false;
        this.currentTab = 'post-list';
      }
    }
  }
};
</script>
