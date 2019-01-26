<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <ListFadeIn name="el-zoom-in-left" :duration="600">
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
      return (breadItem) => {
        let categoryCname;
        if (breadItem.list) {
          ([categoryCname] = this.categories.filter((item) => {
            return item.cname && item.name === breadItem.params.categoryName;
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
