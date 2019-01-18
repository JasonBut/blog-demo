<template>
  <div>
    <BreadCrumb />
    <transition name="el-fade-in-linear" mode="out-in">
      <router-view
          :key="$route.path"
          v-loading="$store.state.loading"
          element-loading-spinner="el-icon-loading"
          element-loading-text="Loading..."
      />
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
