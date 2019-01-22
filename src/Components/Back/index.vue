<template>
<div class="back">
  <el-container>
    <el-container>
      <el-aside width="12em">
        <Aside />
      </el-aside>
      <el-main class="back-content">
        <Content />
      </el-main>
    </el-container>
    <el-footer>
      <Footer class="back-footer" />
    </el-footer>
  </el-container>
</div>
</template>

<script>
import '@/Assets/style/back.scss';
export default {
  name: 'Back',
  components: {
    Aside: () => import('./BackAside'),
    Footer: () => import('../Commons/Footer'),
    Content: () => import('./BackContent')
  }
};
</script>
