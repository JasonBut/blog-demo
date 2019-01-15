<template>
  <div>
    <BreadCrumb />
    <transition name="el-zoom-in-left" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Content',
  components: {
    BreadCrumb: () => import('./Commons/BreadCrumb')
  }
};
</script>
