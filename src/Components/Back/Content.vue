<template>
  <div class="back-content">
    <BreadCrumb />
    <router-view />
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
