<template>
  <el-card>
    <el-table
        :data="list"
        :header-cell-style="formStyles"
        :header-row-style="formStyles"
        :row-style="formStyles"
        border
    >
      <el-table-column
          prop="title"
          label="标题"
          header-align="center"
      >
      </el-table-column>
      <el-table-column
          prop="date"
          label="发布日期"
          header-align="center"
      >
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: 'listUI',
  props: {
    list: Array,
    formStyles: Object
  }
};
</script>
