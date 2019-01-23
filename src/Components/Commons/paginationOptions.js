export default function (
  { pageSize, currentPage } = { pageSize: 10, currentPage: 1 }
) {
  if (typeof pageSize !== 'number' || typeof currentPage !== 'number') {
    throw new Error(`Invalid arguments, expected Number `);
  }
  return {
    data () {
      return {
        paginationOptions: {
          pageSize: pageSize,
          currentPage: currentPage,
          total: null,
          data: []
        }
      };
    },

    updated () {
      this.updateOptions();
    },

    methods: {
      updateOptions () {
        const { list, paginationOptions } = this;
        const { currentPage, pageSize } = paginationOptions;
        paginationOptions.total = list.length;
        paginationOptions.data = list.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        );
      },

      handleCurrentChange (currentPage) {
        this.paginationOptions.currentPage = currentPage;
        this.updateOptions();
      }
    }
  };
} ;
