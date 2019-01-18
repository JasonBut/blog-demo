<template>
  <el-tabs v-model="currentTab" type="card">
    <el-tab-pane label="文章列表" name="post-list">
      <BackPostList />
    </el-tab-pane>
    <el-tab-pane label="发表文章" name="publish">
      <Editor id="publish" post />
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'BackList',
  components: {
    BackPostList: () => import('./BackPostList'),
    Editor: () => import('@/Components/Commons/Editor')
  },
  data () {
    return {
      currentTab: 'post-list'
    };
  }
};
</script>
