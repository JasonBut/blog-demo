<template>
<div id="back">
  <el-container>
    <el-container>
      <el-aside>
        Aside
      </el-aside>
      <el-main>
        main
      </el-main>
    </el-container>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</div>
</template>

<script>
export default {
  name: 'Back',
  components: {
    Footer: () => import('../Commons/Footer.vue')
  }
};
</script>

<style lang="scss">
@import "../../Assets/style/back.scss";
</style>
