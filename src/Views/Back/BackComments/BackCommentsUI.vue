<template>
  <el-card>
    <el-table :data="list">
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
          sortable
      >
      </el-table-column>

      <el-table-column
          label="操作"
          min-width="15%"
      >
        <template slot-scope="{ row }">
          <router-link :to="{
            name: 'manage-post',
            params: { id: row.post, anchor: row.post + row.id }
          }">
            <el-button size="mini">查看文章</el-button>
          </router-link>
          <el-button size="mini" @click="$emit('on-edit', row)">编辑</el-button>
          <el-button size="mini" @click="$emit('on-delete',row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <slot name="pagination"></slot>
  </el-card>
</template>

<script>
export default {
  name: 'BackCommentsUI',
  props: {
    list: {
      type: Array,
      required: true
    }
  },

  methods: {
    htmlToText (html) {
      return html.replace(/<.+?>/g, '');
    }
  }
};
</script>
