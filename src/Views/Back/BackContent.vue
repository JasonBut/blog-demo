<template>
  <div>
    <BreadCrumb />
    <transition name="el-fade-in-linear" mode="out-in" duration="500">
      <router-view
          :key="$route.name + $route.path"
          v-loading="loading"
          element-loading-spinner="el-icon-loading"
          element-loading-text="Loading..."
      />
    </transition>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'BackContent',
  components: {
    BreadCrumb: () => import('@/Components/BreadCrumb')
  },
  computed: {
    ...mapState(['loading'])
  }
};
</script>
