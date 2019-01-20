<template>
  <AsideBarUI
      id="back-aside"
      :data="categoryList"
      :defaultActive="currentTab"
      :to="menuLinkOption"
  />
</template>

<script>
export default {
  name: 'BackAside',
  components: {
    AsideBarUI: () => import('@/Components/Commons/AsideBarUI')
  },
  data () {
    return {
      categoryList: [
        {
          name: 'home',
          cname: '博客首页'
        },
        {
          name: 'manage-categories',
          cname: '管理分类'
        },
        {
          name: 'manage-posts',
          cname: '我的文章'
        },
        {
          name: 'manage-comments',
          cname: '访客回复'
        }
      ]
    };
  },

  computed: {
    // 点亮当前正在打开的边栏项label
    currentTab () {
      const { name } = this.$route;
      return name === 'admin' ? 'manage-posts' : name;
    },
    menuLinkOption () {
      return (category) => ({
        name: category.name === 'home' ? 'home' : category.name
      });
    }
  }
};
</script>

<style lang="scss">
#back-aside{
  background: $back-aside-background;
  height: calc(100vh);
  border-right: $back-aside-background;

  a{
    text-decoration: none;
  }

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
