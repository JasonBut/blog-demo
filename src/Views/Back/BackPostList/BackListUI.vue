<template>
  <el-card>
    <el-table :data="list" @filter-change="filters.onFilterChange($event.category)" >
      <el-table-column
          label="分类"
          prop="category"
          min-width="5%"
          column-key="category"
          :filters="filters.filterOptions"
          :filter-method="filters.method"
          :filtered-value="filters.defaultValue"
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
          sortable
      >
      </el-table-column>

      <el-table-column
          label="操作"
          min-width="15%"
      >
        <template slot-scope="{ row }">
          <router-link :to="{ name: 'manage-post', params: { id: row.id } }">
            <el-button size="mini">
              查看文章
            </el-button>
          </router-link>

          <el-button size="mini" @click="handleEdit(row)">编辑</el-button>
          <el-button size="mini" @click="$emit('on-delete', row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <slot name="pagination"></slot>
  </el-card>
</template>

<script>
export default {
  name: 'BackPostListUI',
  inject: ['handleEdit'], // BackPostList/index传入
  props: {
    list: {
      type: Array,
      required: true
    },
    filters: {
      type: Object,
      required: true
    }
  }
};
</script>
