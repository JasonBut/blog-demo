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
    BackPostListUI: () => import('./BackPostListUI'),
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC')
  },
  computed: {
    ...mapGetters(['categoryFilters']),
    tableFilterOptions () {
      return {
        filter: this.categoryFilters,
        method: this.filterHandler
      };
    }
  },
  methods: {
    filterHandler (value, row) {
      return row.category === value;
    }
  }
};
</script>
