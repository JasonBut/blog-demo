<template>
  <el-container id="app">
    <el-header height="18em">
      <Header/>
    </el-header>
    <el-container class="content">
      <el-aside width="12em">
        <Aside />
      </el-aside>
      <el-main>
        <Content />
      </el-main>
    </el-container>
    <el-footer>
      <Footer />
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'app',
  components: {
    Header: () => import('./Components/Header.vue'),
    Aside: () => import('./Components/Aside.vue'),
    Content: () => import('./Components/Content.vue'),
    Footer: () => import('./Components/Footer.vue')
  }
};
</script>

<style lang="scss">
@import "./Assets/style/style";
#app{
  .content{
    width: 70%;
    min-width: 40em;
    margin: -12em auto 0 auto;
    @include opacity-border(0.3, 0.5em, 2.5%);
    @include opacity-background(0.5);
    .el-main{
      float: left;
      min-width: 20em;
    }
  }
}
</style>
