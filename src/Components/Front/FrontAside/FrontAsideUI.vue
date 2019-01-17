<template>
  <el-menu
      :default-active="currentTab"
      :router="true"
      id="front-aside"
      mode="vertical"
      text-color="#0F192A"
  >
    <el-menu-item
        v-for="subject of categories"
        :key="subject.path"
        :index="subject.path"
    >
      <template>
        <span>{{subject.first}}</span>
        <span>{{subject.last}}</span>
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script>
export default {
  name: 'AsideUI',
  props: {
    categories: Array,
    currentTab: String
  }
};
</script>

<style lang="scss" scoped>
#front-aside{
  position: fixed;
  width: 10em;
  border: 0;
  text-align: right;
  font-weight: bold;
  @include transparent-background(0);

  .el-menu-item{
    @include transparent-background(0.30);
    @include transparent-item-hover($front-item-hover-fill);
    @include transparent-border(0.9, 0.1em, 10px);

    span+span{
      color: $front-aside-item-second;
    }
  }
}
</style>
