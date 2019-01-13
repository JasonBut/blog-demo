<template>
  <div>
    <!--<el-breadcrumb separator-class="el-icon-arrow-right">-->
      <!--<el-breadcrumb-item-->
          <!--v-for="(value,key) of toBreadCrumb($route.path)"-->
          <!--:key="`path_${key}`"-->
          <!--:to="{ path: `${key}` }"-->
      <!--&gt;-->
        <!--{{value}}-->
      <!--</el-breadcrumb-item>-->
    <!--</el-breadcrumb>-->
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'Content',
  created () {
    this.$store.getters.getBread(this.$route);
  }
};
</script>

<style lang="scss">
div{
  a{
    color: #ffffff;
  }
}
</style>
