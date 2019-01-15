<template>
  <div>
    <el-menu
        :default-active="path"
        :router="true"
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
  </div>
</template>

<script>
export default {
  name: 'AsideUI',
  props: {
    categories: Array,
    path: String
  }
};
</script>

<style lang="scss">
  .el-menu{
    border: 0;
    text-align: right;
    font-weight: bold;
    @include transparent-background(0.25);
    @include transparent-border(0, 0, 3%);

    .el-menu-item{
      @include transparent-background(0);
      @include transparent-item-hover;
      @include transparent-border(0.9, 0.1em, 10%);

      span+span{
        color: rgb(11,133,204);
      }
    }
  }
</style>
