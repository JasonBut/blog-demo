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
          align="center"
          width="680em"
          min-width="300em"
      >
      </el-table-column>
      <el-table-column
          prop="date"
          label="发布日期"
          header-align="center"
          align="center"
          min-width="100em"
      >
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: 'listUI',
  props: {
    list: Array
  },
  data () {
    return {
      formStyles: {
        background: `rgba(0,0,0,0.2)`
      }
    };
  }
};
</script>

<style lang="scss">
.el-card{
  @include content-el-card-margin
}
</style>
