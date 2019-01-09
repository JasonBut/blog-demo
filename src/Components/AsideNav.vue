<template>
  <div>
    <el-menu>
      <el-menu-item>
        Javascript
      </el-menu-item>
      <el-menu-item>
        React
      </el-menu-item>
      <el-menu-item>
        Vue
      </el-menu-item>
      <el-menu-item>
        CSS
      </el-menu-item>
      <el-menu-item>
        HTML5
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'AsideNav'
}
</script>

<style lang="scss">
.el-menu{
  height: 48em;
  width: 12em;
  background: #213765;
  .el-menu-item{
    color: #fffffc;
    &:hover{
      background: #2c537e;
      color: #f5d300;
    }
  }
}
</style>
