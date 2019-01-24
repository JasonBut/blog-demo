<template>
  <AsideBarUI
      id="front-aside"
      :data="splitCategoryLabel"
      :default-active="currentCategory"
      :to="routeObject"
  >
    <template slot-scope="{ category }">
      <span>{{ category.first }}</span>
      <span>{{ category.last }}</span>
    </template>
  </AsideBarUI>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'FrontAside',
  components: {
    AsideBarUI: () => import('@/Components/Commons/AsideBarUI')
  },
  computed: {
    ...mapGetters('Front', ['splitCategoryLabel']),

    // 判断当前打开的分类区,并点亮边栏对应的item
    currentCategory () {
      const { name, params: { categoryName } } = this.$route;
      return name === 'home' || name === 'not-found' ? 'about' : categoryName;
    },

    // 边栏的路由跳转规则
    routeObject () {
      return ({ name }) => ({
        name: name === 'about' ? 'home' : 'post-list',
        params: { categoryName: name }
      });
    }
  },
  created () {
    // 加载组件时如store中没有分类列表信息才发起请求查询
    if (this.splitCategoryLabel.length < 1) {
      this.getData({ target: 'categories' });
    }
  },
  methods: {
    ...mapActions(['getData'])
  }
};
</script>

<style lang="scss">
#front-aside{
  position: fixed;
  width: 10em;
  border: 0;
  text-align: right;
  font-weight: bold;
  @include transparent-background(0);

  .el-menu-item{
    color: #0F192A;
    @include transparent-background(0.30);
    @include transparent-item-hover($front-item-hover-fill);
    @include transparent-border(0.9, 0.1em, 10px);

    span+span{
      color: $front-aside-item-second;
    }
  }

  .is-active{
    color: $front-text-primary;
  }
}
</style>
