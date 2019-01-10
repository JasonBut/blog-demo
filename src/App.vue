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
    Header: () => import('./Views/Header.vue'),
    Aside: () => import('./Views/Aside.vue'),
    Content: () => import('./Views/Content.vue'),
    Footer: () => import('./Views/Footer.vue')
  }
};
</script>

<style lang="scss">
.content{
  width: 70%;
  min-width: 55em;
  margin: -12em auto 0 auto;
  background: rgba(0,0,0,0.5);
  border: rgba(0,0,0,0.1) 0.8em solid;
}
</style>
