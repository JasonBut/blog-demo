<template>
  <transition-group
      :name="name || `el-fade-in-linear`"
      :duration="duration || 600"
      leave-active-class="list-leave-active"
  >
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  name: 'list-fade-transition',
  props: {
    name: String,
    duration: Number
  }
};
</script>

<style lang="scss">
.list-leave-active{
  opacity: 0;
  position: absolute;
}
</style>
