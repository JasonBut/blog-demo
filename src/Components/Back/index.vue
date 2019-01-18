<template>
<div id="back">
  <el-container>
    <el-container>
      <!--边栏-->
      <el-aside width="12em">
        <Aside />
      </el-aside>

      <!--内容-->
      <el-main>
        <Content />
      </el-main>
    </el-container>

    <!--页脚-->
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

<style lang="scss" scoped>
.el-main{
  background: $back-content-background-color;
}
</style>
