<template>
  <el-menu
      :default-active="defaultActive"
      :id="id"
      router
      mode="vertical"
      class="custom-aside-bar"
  >
    <el-menu-item
        v-for="category of data"
        :key="category.name"
        :index="category.name"
        :route="to(category)"
    >
      <slot :category="category">
        {{ category.cname }}
      </slot>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AsideBarUI',
  props: {
    id: String,
    data: Array,
    defaultActive: String,
    to: Function
  }
};
</script>
