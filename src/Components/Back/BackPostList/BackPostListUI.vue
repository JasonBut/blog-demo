<template>
  <el-card>
    <el-table :data="options.data" >
      <el-table-column
          label="分类"
          prop="category"
          min-width="5%"
      >
      </el-table-column>

      <el-table-column
          label="标题"
          prop="title"
          min-width="20%"
      >
      </el-table-column>

      <el-table-column
          label="日期"
          prop="date"
          min-width="10%"
      >
      </el-table-column>

      <el-table-column
          label="操作"
          min-width="15%"
      >
        <template slot-scope="{ row }">
          <el-button size="mini">
            <router-link :to="{ name: 'post', params: { categoryName: row.category, id: row.id } }">
              查看文章
            </router-link>
          </el-button>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini" @click="$emit('onDelete',row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        :total="options.total"
        :page-size="options.pageSize"
        :current-page="options.currentPage"
        layout="prev,pager,next"
        @current-change="$emit('onCurrentChange',$event)"
        small
    />
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
