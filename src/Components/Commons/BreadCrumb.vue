<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <ListFadeIn name="el-zoom-in-left" :duration="600">
      <el-breadcrumb-item
          v-for="item of breadList"
          :key="item || `home`"
          :to="{ path: item }"
      >
        {{ breadListFilters(item, $store) }}
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

  data () {
    return {
      pool: new Map([
        ['/', '首页'],
        ['/daily', '日常生活'],
        ['/programs', '项目记录'],
        ['/notes', '学习笔记'],
        ['/admin', `管理后台`],
        ['/admin/categories', '分类'],
        ['/admin/posts', `文章`],
        ['/admin/comments', `评论`]
      ])
    };
  },

  computed: {
    ...mapState(['breadList'])
  },

  methods: {
    breadListFilters (bread, store) {
      if (!bread) { return; }
      return this.pool.get(bread) || store.state.post.title;
    }
  }
};
</script>
