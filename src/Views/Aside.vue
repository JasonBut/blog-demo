<template>
  <div>
    <el-menu mode="vertical">
      <el-menu-item index="a">
        <router-link to="/programs">
          <span>Prog</span><span>rams</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="b">
        <router-link to="notes">
          <span>No</span><span>tes</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="c">
        <router-link to="daily">
          <span>Da</span><span>ily</span>
        </router-link>
      </el-menu-item>
      <el-menu-item index="d">
        <router-link to="about">
          <span>Abou</span><span>t Me</span>
        </router-link>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'Aside'
}
</script>

<style lang="scss">
  .aside-menu-item{
    background: rgba(11,133,204,0.35);
  }
  .el-menu{
    height: 53.5em;
    background: rgba(0,0,0,0.25);
    border: 0;
    text-align: right;
    font-weight: bold;
    .el-menu-item{
      background: rgba(0,0,0,0);
      &:hover{
        @extend .aside-menu-item;
      }
      &:visited{
        @extend .aside-menu-item;
      }
      a{
        span+span{
          color: rgb(11,133,204);
        }
      }
    }
  }
</style>
