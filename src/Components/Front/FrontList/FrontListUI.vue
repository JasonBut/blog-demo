<template>
  <el-card>
    <el-table
        :data="options.data"
        border
    >
      <el-table-column
          label="标题"
          header-align="center"
          align="center"
          min-width="60%"
      >
        <template slot-scope="{ row }">
          <router-link :to="to(row)">
            {{ row.title }}
          </router-link>
        </template>

      </el-table-column>
      <el-table-column
          prop="date"
          label="发布日期"
          header-align="center"
          align="center"
          min-width="40%"
      >
      </el-table-column>
    </el-table>
    <el-pagination
        :page-size="options.pageSize"
        :total="options.total"
        :current-page="options.currentPage"
        layout="prev,pager,next"
        @current-change="$emit('onCurrentChange',$event)"
        small
    />
  </el-card>
</template>

<script>
export default {
  name: 'ListUI',
  props: {
    options: Object,
    to: Function
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

<style lang="scss" scoped>
.el-card{
  @include content-el-card-margin;
}
</style>
