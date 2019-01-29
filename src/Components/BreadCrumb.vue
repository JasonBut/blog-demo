<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <ListFadeIn name="el-zoom-in-left" :duration="600">
      <!--如果路由表中存在title中文名,则直接使用-->
      <!--前台列表页因为没有固定的title,因此需要计算获得-->
      <!--详情页则直接根据获取到的文章标题作为面包屑标签-->
      <el-breadcrumb-item
          v-for="breadItem of breadList"
          :key="breadItem.name + (routeTitleFilter(breadItem) || encodeURIComponent(breadItem.meta.title))"
          :to="{ name: breadItem.name, params: breadItem.params }"
      >
        {{ breadItem.meta.title || routeTitleFilter(breadItem) || post.title }}
      </el-breadcrumb-item>
    </ListFadeIn>
  </el-breadcrumb>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
export default {
  name: 'BreadCrumb',

  components: {
    ListFadeIn: () => import('./ListFadeIn')
  },

  filters: {
    breadItemFilter (value) {
      return value;
    }
  },

  computed: {
    ...mapState(['breadList', 'post']),
    ...mapGetters(['routeTitleFilter'])

  }
};
</script>
