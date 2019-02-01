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
import { mapGetters, mapMutations } from 'vuex';
import { Types } from '@/Store';
import { DeleteDataMixin } from '@/Util/mixins';
export default {
  name: 'BackPostList',
  mixins: [ DeleteDataMixin ],
  components: {
    BackPostListUI: () => import('./BackListUI'),
    DataDisplayHOC: () => import('@/Components/DataDisplayHOC'),
    Pagination: () => import('@/Components/Pagination')
  },

  computed: {
    ...mapGetters('Back',
      ['postListFilters', 'postListFilterMethod']
    ),

    categoryName () {
      return this.$route.params.categoryName;
    },

    /*
    * 当从分类页跳转到详情页时
    * 路由中会带有categoryName参数
    * 根据此参数作为默认过滤项去过滤列表
    */
    tableFilterOptions () {
      const {
        categoryName,
        postListFilters,
        postListFilterMethod,
        handleFilterChange
      } = this;

      return {
        defaultValue: categoryName ? [ categoryName ] : [],
        filterOptions: postListFilters,
        method: postListFilterMethod,
        onFilterChange: handleFilterChange
      };
    }
  },

  created () {
    const { categoryName, handleFilterChange } = this;
    categoryName && handleFilterChange([ categoryName ]);
  },

  beforeDestroy () {
    // 销毁前清空filteredList状态
    this.handleFilterChange([]);
  },

  methods: {
    ...mapMutations({
      handleFilterChange: Types.FILTER_RULES_CHANGE
    })
  }
};
</script>
