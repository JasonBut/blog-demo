export default {
  data () {
    return {
      paginationOptions: {
        pageSize: 5,
        currentPage: 1,
        total: null,
        data: []
      }
    };
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
