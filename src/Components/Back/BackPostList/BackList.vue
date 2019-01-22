<template>
  <DataDisplayHOC target="all_posts">
    <template slot-scope="{ options, handleCurrentChange }">
      <BackPostListUI
          :options="options"
          :filters="tableFilterOptions"
          @onCurrentChange="handleCurrentChange"
          @onDelete="handleDelete"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
import { mapGetters } from 'vuex';
import { DeleteDataMixin } from '@/Components/Commons';
export default {
  name: 'BackPostList',
  mixins: [ DeleteDataMixin ],
  components: {
    BackPostListUI: () => import('./BackListUI'),
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC')
  },
  computed: {
    ...mapGetters(['categoryFilters']),

    tableFilterOptions () {
      /*
      * 当从分类页跳转到详情页时
      * 路由中会带有categoryName参数
      * 根据此参数作为默认过滤项去过滤列表
      */
      const { categoryName } = this.$route.params;
      return {
        defaultValue: categoryName ? [ categoryName ] : [],
        filterOptions: this.categoryFilters,
        method (value, { category }) {
          return category === value;
        }
      };
    }
  }
};
</script>
