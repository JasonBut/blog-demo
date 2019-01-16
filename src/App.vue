<template>
  <el-container id="app">

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
</template>

<script>
import '@/Assets/style/front.scss';
export default {
  name: 'app',
  components: {
    Header: () => import('@/Components/Commons/Header.vue'),
    Aside: () => import('@/Components/Aside/index.vue'),
    Content: () => import('@/Components/Content.vue'),
    Footer: () => import('@/Components/Commons/Footer.vue')
  }
};
</script>

<style lang="scss" scoped>
#app{
  background: #0C1021 url("./Assets/bg.png");
  min-height: calc(95vh);
  margin: 1%;
  border: rgba(0,0,0,0.9) 0.5em solid;
  border-radius: 2%;
  .content{
    width: 70%;
    min-width: 40em;
    margin: 2em auto 0 auto;
    @include transparent-border(0.3, 0.5em, 2.5%);
    @include transparent-background(0.5);
    .el-main{
      float: left;
      min-width: 20em;
    }
  }
}
</style>
