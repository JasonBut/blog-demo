<template>
  <div>
    <router-view />
    <router-view name="admin" />
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>
