<template>
  <transition-group
      :name="name"
      :duration="duration"
      leave-active-class="list-leave-active"
  >
    <slot></slot>
  </transition-group>
</template>

<script>
export default {
  name: 'list-fade-transition',
  props: {
    name: {
      type: String,
      default: 'el-fade-in-linear'
    },
    duration: {
      type: Number,
      default: 600
    }
  }
};
</script>

<style lang="scss">
.list-leave-active{
  opacity: 0;
  position: absolute;
  transition: opacity 0s;
}
</style>
