export default function (
  { pageSize, currentPage } = { pageSize: 5, currentPage: 1 }
) {
  if (typeof pageSize !== 'number' || typeof currentPage !== 'number') {
    throw new Error(`Invalid arguments, expected Number `);
  }
  return {
    data () {
      return {
        paginationData: {
          list: [],
          options: {
            pageSize: pageSize,
            currentPage: currentPage,
            total: null
          }
        }
      };
    },

    watch: {
      list (newVal, oldVal) {
        if (newVal.length > 0 && newVal !== oldVal) {
          this.updateOptions();
        }
      }
    },

    methods: {
      updateOptions () {
        const { list, paginationData: { options } } = this;
        const { currentPage, pageSize } = options;
        options.total = list.length;
        this.paginationData.list = list.slice(
          (currentPage - 1) * pageSize,
          currentPage * pageSize
        );
      },

      handleCurrentChange (currentPage) {
        this.paginationData.options.currentPage = currentPage;
        this.updateOptions();
      }
    }
  };
} ;
