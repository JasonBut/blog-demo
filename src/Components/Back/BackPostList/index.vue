<template>
  <el-tabs v-model="currentTab" type="card">
    <el-tab-pane label="文章列表" name="post-list">
      <BackPostList/>
    </el-tab-pane>
    <el-tab-pane :label="`${ editing ? '编辑' : '发表' }文章`" name="publish">
      <Editor
          post
          id="publish"
          :amend="editing"
          :amendValue="amendValue"
          @onCancel="currentTab = 'post-list'"
          @onSubmit="handleSubmit"
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
      editing: this.editing
    };
  },
  data () {
    return {
      editing: false,
      publishing: false,
      currentTab: 'post-list',
      amendValue: Object.create(null)
    };
  },

  watch: {
    currentTab (to, from) {
      if (from === 'publish' && this.publishing) {
        this.handleCancel();
      }
      if (to === 'publish') {
        this.publishing = true;
      }
    }
  },

  methods: {
    handleEdit (post) {
      if (this.editing || this.publishing) {
        alert('正在编辑文章中，请先取消或保存再进行操作！');
        return;
      }
      this.editing = true;
      this.publishing = true;
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
      if (confirm('离开并放弃编辑文章？')) {
        this.editing = false;
        this.publishing = false;
        this.currentTab = 'post-list';
        this.amendValue = Object.create(null);
      } else {
        this.currentTab = 'publish';
      }
    },
    handleSubmit () {
      this.currentTab = 'post-list';
      this.editing = false;
      this.publishing = false;
    }
  }
};
</script>
