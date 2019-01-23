<template>
  <DataDisplayHOC target="all_posts">
    <template slot-scope="{ list, options, handleCurrentChange }">
      <BackPostListUI
          :list="list"
          :filters="tableFilterOptions"
          @on-delete="handleDelete"
      >
        <Pagination
            slot="pagination"
            :options="options"
            @on-current-change="handleCurrentChange"
        />
      </BackPostListUI>
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
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    Pagination: () => import('@/Components/Commons/Pagination')
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
