export default function (
  { pageSize, currentPage = 1 } = { pageSize: 8, currentPage: 1 }
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
            total: null,
            pageSize,
            currentPage
          }
        }
      };
    },

    watch: {
      list (newVal, oldVal) {
        if (newVal !== oldVal) {
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
