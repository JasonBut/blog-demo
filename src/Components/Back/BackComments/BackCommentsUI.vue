<template>
  <el-card>
    <el-table
        :data="options.data"
    >
      <el-table-column
          label="访客"
          prop="guestName"
          align="center"
          min-width="10%"
      >
      </el-table-column>

      <el-table-column
          label="内容"
          prop="content"
          align="center"
          min-width="40%"
      >
      </el-table-column>

      <el-table-column
          label="日期"
          prop="date"
          align="center"
          min-width="15%"
      >
      </el-table-column>

      <el-table-column
          label="操作"
          align="center"
          min-width="15%"
      >
        <template slot-scope="maintain">
          <el-button size="mini">查看文章</el-button>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        :total="options.total"
        :page-size="options.pageSize"
        :current-page="options.currentPage"
        layout="prve, pager, next"
        @current-change="$emit('onCurrentChange',$event)"
        small
    />
  </el-card>
</template>

<script>
export default {
  name: 'BackCommentsUI',
  props: {
    options: Object
  }
};
</script>
