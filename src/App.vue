<template>
  <transition-group name="el-fade-in-linear">
    <router-view key="frontend" />
    <router-view key="backend" name="admin" />
  </transition-group>
</template>

<script>
export default {
  name: 'app'
};
</script>
