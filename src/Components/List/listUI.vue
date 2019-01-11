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
          label="标题"
          header-align="center"
          align="center"
          width="600%"
          min-width="200%"
      >
        <template slot-scope="scope">
          <router-link
              :to="`${params}/${scope.row.id}`"
          >{{ scope.row.title }}
          </router-link>
        </template>

      </el-table-column>
      <el-table-column
          prop="date"
          label="发布日期"
          header-align="center"
          align="center"
          min-width="200%"
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
    params: String
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
  @include content-el-card-margin
}
</style>
