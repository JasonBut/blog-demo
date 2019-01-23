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
      handleEdit: this.handleEdit
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
    // 从编辑器活动页切换回列表页会询问是否清楚数据
    currentTab (to, from) {
      !!(to === 'publish') && (this.publishing = true);
      !!(from === 'publish' && this.publishing) && (this.handleCancel());
    }
  },

  beforeRouteLeave (to, from, next) {
    // 从编辑器跳转到其他页面时触发
    if (this.currentTab === 'publish' && this.publishing) {
      const confirmLeave = this.handleCancel();
      return confirmLeave ? next() : next({ ...from });
    }
    next();
  },

  methods: {
    cleanData () {
      this.currentTab = 'post-list';
      this.editing = false;
      this.publishing = false;
      this.amendValue = Object.create(null);
    },

    handleEdit (post) {
      if (this.editing || this.publishing) {
        return alert('正在编辑文章中，请先取消或保存再进行操作！');
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
      const confirmMsg = confirm('离开并放弃编辑文章？');
      confirmMsg ? (this.cleanData()) : (this.currentTab = 'publish');
      return confirmMsg;
    },

    handleSubmit () {
      this.cleanData();
    }
  }
};
</script>
