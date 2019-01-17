<template>
  <el-card>
    <el-table
        text
        :data="list"
    >
      <el-table-column
          prop="cname"
          label="名称"
          align="center"
          min-width="25%"
      >
      </el-table-column>

      <el-table-column
          prop="name"
          label="边栏显示"
          align="center"
          min-width="25%"
      >
      </el-table-column>

      <el-table-column
          label="操作"
          align="center"
          min-width="50%"
      >
        <template slot-scope="maintain">
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
