<template>
  <el-container id="app">
    <el-header> <Header/> </el-header>
    <el-container>
      <el-aside> <Aside /> </el-aside>
      <el-main> <Content /> </el-main>
    </el-container>
    <el-footer> <Footer /> </el-footer>
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
}
</script>
