<template>
  <el-card>
    <el-table :data="options.data" >
      <el-table-column
          label="标题"
          prop="title"
          min-width="10"
      >
      </el-table-column>

      <el-table-column
          label="分类"
          prop="category"
          min-width="10"
      >
      </el-table-column>

      <el-table-column
          label="内容简要"
          prop="content"
          min-width="10"
      >
      </el-table-column>

      <el-table-column
          label="日期"
          prop="date"
          min-width="10"
      >
      </el-table-column>

      <el-table-column
          label="操作"
          min-width="10"
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
  name: 'BackPostListUI',
  props: {
    options: Object
  }
};
</script>
