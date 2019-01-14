<template>
  <div>
    <ListUI
        :options="paginationOptions"
        :list="list"
        :postPath="$route.path"
        @onCurrentChange="handleCurrentChange"
    />
  </div>

</template>

<script>
import { mapState } from 'vuex';
import { GetDataMixins, PaginationOptions } from '../Commons';

export default {
  name: 'List',
  mixins: [
    GetDataMixins('posts'),
    PaginationOptions
  ],
  data () {
    return {
      paginationOptions: {
        path: this.$route.params.categoryName,
        pageSize: 3,
        currentPage: 1,
        total: null,
        data: []
      }
    };
  },

  components: {
    ListUI: () => import('./ListUI')
  },

  computed: {
    ...mapState({
      list: ({ list }) => list.reverse()
    })
  },

  methods: {
    updateOptions () {
      const { list, paginationOptions } = this;
      const { currentPage, pageSize } = this.paginationOptions;
      paginationOptions.total = list.length;
      paginationOptions.data = list.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    },

    handleCurrentChange (currentPage) {
      this.paginationOptions.currentPage = currentPage;
      this.updateOptions();
    }
  },

  updated () {
    this.updateOptions();
  }
};
</script>
