<template>
  <AsideBarUI
      id="back-aside"
      :data="asideMenu"
      :default-active="currentTab"
      :to="({ name }) => ({ name })"
  />
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'BackAside',
  components: {
    AsideBarUI: () => import('@/Components/Commons/AsideBarUI')
  },
  computed: {
    ...mapState('Back', ['asideMenu']),

    // 点亮当前正在打开的边栏项label
    currentTab () {
      const { name } = this.$route;
      return ((name === 'admin') || (name === 'manage-post'))
        ? 'manage-posts'
        : name;
    }
  }
};
</script>

<style lang="scss">
#back-aside{
  background: $back-aside-background;
  height: calc(100vh);
  .el-menu-item{
    text-align: center;
    font-weight: bold;
    height: 3em;
    line-height: 3em;
    margin: 0.5em;
    border: $back-menu-item-border 0.5px solid;
    border-radius: 10px;
    @include transparent-background(0);

    &:first-child{
      margin-top: 20%;
    }

    &:hover{
      background: $back-menu-item-hover-fill;
    }
  }

  // menu 当前项颜色
  .is-active{
    color: $back-menu-item-active-color;
  }
}
</style>
