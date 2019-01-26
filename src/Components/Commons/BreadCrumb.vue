<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <ListFadeIn name="el-zoom-in-left" :duration="600">
      <!--如果路由表中存在cname中文名,则直接使用-->
      <!--前台列表页因为没有固定的cname,因此需要计算获得-->
      <!--详情页则直接根据获取到的文章标题作为面包屑标签-->
      <el-breadcrumb-item
          v-for="breadItem of breadList"
          :key="breadItem.name + (breadcrumbCnameFilter(breadItem) || encodeURIComponent(breadItem.cname))"
          :to="{ name: breadItem.name, params: breadItem.params }"
      >
        {{ breadItem.cname || breadcrumbCnameFilter(breadItem) || post.title }}
      </el-breadcrumb-item>
    </ListFadeIn>
  </el-breadcrumb>
</template>

<script>
import { mapState } from 'vuex';
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
    ...mapState(['breadList', 'post', 'categories']),

    breadcrumbCnameFilter () {
      return ({ list, params: { categoryName } }) => {
        let categoryCname;
        if (list) {
          /*
          * store中已存有的categories的数据
          * 跟breadItem.params里的categoryName逐项对比
          * 获得对应分类在数据库里的中文名
          */
          ([categoryCname] = this.categories.filter(({ cname, name }) => {
            return cname && name === categoryName;
          }));
          return categoryCname && categoryCname.cname;
        }
      };
    }
  },

  created () {
    //    console.log(this.categories);
  }
};
</script>
