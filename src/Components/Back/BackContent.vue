<template>
  <div>
    <BreadCrumb />
    <transition name="el-fade-in-linear" mode="out-in">
      <router-view :key="$route.path" />
    </transition>
  </div>
</template>

<script>
export default {
  name: 'BackContent',
  components: {
    BreadCrumb: () => import('@/Components/Commons/BreadCrumb')
  }
};
</script>
