<template>
  <transition-group name="el-fade-in-linear">
    <router-view key="backend" />
    <router-view key="frontend" name="admin" />
  </transition-group>
</template>

<script>
export default {
  name: 'app'
};
</script>
