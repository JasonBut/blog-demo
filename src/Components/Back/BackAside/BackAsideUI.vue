<template>
  <el-menu
      :default-active="$route.path === '/admin' ? '/admin/posts' : $route.path"
      :router="true"
      id="back-aside"
      mode="vertical"
  >
    <el-menu-item
        v-for="tab of list"
        :key="tab.path"
        :index="tab.path"
        replace
    >
      {{ tab.cname }}
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'BackAsideUI',
  props: {
    list: Array
  }
};
</script>

<style lang="scss" scoped>
  #back-aside{
    background: $back-aside-background;
    height: calc(100vh);
    border-right: $back-aside-background;

    .el-menu-item{
      text-align: center;
      vertical-align: center;
      font-weight: bold;
      height: 5em;
      padding-top: 0.5em;
      @include transparent-background(0);

      &:first-child{
        margin-top: 20%;
      }

      &:hover{
        background: $back-menu-item-hover-fill;
      }
    }

    // menu 当前项颜色
    .is-active{
      color: $back-menu-item-active-color;
    }
  }
</style>
