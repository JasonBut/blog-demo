<template>
  <DataDisplayHOC target="all_posts">
    <template slot-scope="scope">
      <BackPostListUI
          :list="scope.list"
          :options="scope.options"
          :filters="tableFilterOptions"
          @onCurrentChange="scope.handleCurrentChange"
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
