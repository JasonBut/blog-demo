<template>
<div id="front">
  <el-container id="front-app">
    <el-header height="5em">
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
</div>
</template>

<script>
import '@/Assets/style/front.scss';
export default {
  name: 'Front',
  components: {
    Header: () => import('./FrontHeader.vue'),
    Aside: () => import('./FrontAside.vue'),
    Content: () => import('./FrontContent.vue'),
    Footer: () => import('../Commons/Footer.vue')
  }
};
</script>

<style lang="scss" scoped>
#front-app{
  background: $front-content-background-color url("../../Assets/bg.png");
  min-height: calc(95vh);
  margin: 1%;
  @include transparent-border(0.9,0.5em,20px);
}
.content{
  width: 70%;
  min-width: 40em;
  margin: 2em auto 0 auto;
  @include transparent-border(0.3, 0.5em, 20px);
  @include transparent-background(0.5);

  .el-main{
    float: left;
    min-width: 20em;
  }
}
</style>
