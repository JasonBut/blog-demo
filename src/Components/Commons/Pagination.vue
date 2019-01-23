<template>
  <el-pagination
      :page-size="options.pageSize"
      :total="options.total"
      :current-page="options.currentPage"
      layout="prev,pager,next"
      @current-change="$emit('onCurrentChange',$event)"
      small
  />
</template>

<script>
export default {
  name: 'Pagination',
  props: {
    options: {
      type: Object,
      required: true
    }
  }
};
</script>
