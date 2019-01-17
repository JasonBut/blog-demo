<template>
  <el-card>
    <el-table
        :data="options.data"
    >
      <el-table-column
          label="访客"
          prop="guestName"
          min-width="10%"

      >
      </el-table-column>

      <el-table-column
          label="内容"
          min-width="40%"
      >
        <template slot-scope="{ row }">
          <div v-html="htmlToText(row.content)"></div>
        </template>
      </el-table-column>

      <el-table-column
          label="日期"
          prop="date"
          min-width="15%"
      >
      </el-table-column>

      <el-table-column
          label="操作"
          min-width="15%"
      >
        <template slot-scope="maintenance">
          <el-button size="mini">查看文章</el-button>
          <el-button size="mini">编辑</el-button>
          <el-button size="mini">删除</el-button>
        </template>
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
  name: 'BackCommentsUI',
  props: {
    options: Object,
    list: Array
  },

  methods: {
    htmlToText (html) {
      return html.replace(/<.+?>/g, '');
    }
  }
};
</script>
