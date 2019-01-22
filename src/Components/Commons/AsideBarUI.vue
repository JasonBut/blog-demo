<template>
  <el-menu
      :default-active="defaultActive"
      :id="id"
      mode="vertical"
      class="custom-aside-bar"
  >
    <router-link
        v-for="category of data"
        :key="category.name"
        :to="to(category)"
    >
      <el-menu-item :index="category.name">
        <slot :category="category">
          {{ category.cname }}
        </slot>
      </el-menu-item>
    </router-link>
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
