<template>
  <div
      v-loading="$store.state.loading"
      element-loading-spinner="el-icon-loading"
      element-loading-text="Loading..."
      element-loading-background="rgba(0,0,0,0.5)"
  >
    <BreadCrumb />
    <transition name="el-zoom-in-left" mode="out-in">
      <router-view :key="$route.path" />
      <router-view name="about"/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'FrontContent',
  components: {
    BreadCrumb: () => import('../Commons/BreadCrumb')
  }
};
</script>
