<template>
  <AsideNav />
</template>

<script>
export default {
  name: 'Aside',
  components: {
    AsideNav: () => import('../Components/AsideNav.vue')
  }
}
</script>
