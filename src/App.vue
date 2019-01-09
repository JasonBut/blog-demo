<template>
  <el-container id="app">
    <el-header><Header /></el-header>
    <el-container>
      <el-aside>Aside</el-aside>
      <el-main>Main</el-main>
    </el-container>
    <el-footer>Footer</el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'app',
  components: {
    Header: () => import('./Components/Header.vue')
  }
}
</script>
