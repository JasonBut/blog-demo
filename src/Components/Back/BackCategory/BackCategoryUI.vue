<template>
  <el-card>
    <el-table
        :data="list"
    >
      <el-table-column
          prop="cname"
          label="名称"
          min-width="25%"
      >
      </el-table-column>

      <el-table-column
          prop="name"
          label="边栏显示"
          min-width="25%"
      >
      </el-table-column>

      <el-table-column
          label="操作"
          min-width="50%"
      >
        <template slot-scope="maintenance">
          <el-button size="mini">查看文章</el-button>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: 'BackCategoryUI',
  props: {
    list: Array
  }
};
</script>
