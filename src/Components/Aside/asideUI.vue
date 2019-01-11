<template>
  <div>
    <el-menu
        :default-active="$route.path"
        :router="true"
        mode="vertical"
        text-color="#0F192A"
    >
      <el-menu-item
          v-for="subject of splitCategoryName"
          :key="subject.path"
          :index="subject.path"
      >
        <template>
          <span>{{subject.first}}</span>
          <span>{{subject.last}}</span>
        </template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: 'asideUI',
  props: {
    category: Object,
    path: String
  }
};
</script>
