<template>
  <el-card>
    <el-table
        :data="list"
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
    <slot name="pagination"></slot>
  </el-card>
</template>

<script>
export default {
  name: 'ListUI',
  props: {
    list: {
      type: Array,
      required: true
    },
    to: {
      type: Function,
      required: true
    }
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
  margin: $front-content-el-card-margin;
}
</style>
