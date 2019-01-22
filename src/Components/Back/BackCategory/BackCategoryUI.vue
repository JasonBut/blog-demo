<template>
  <el-card>
    <el-table :data="list">
      <el-table-column label="名称" min-width="25%">
        <template slot-scope="{ row }">
          <el-input
              v-if="editable(row)"
              :value="cname"
              @input="$emit('update:cname', $event)"
          />
          <div v-else>{{ row.cname }}</div>
        </template>
      </el-table-column>

      <el-table-column label="边栏标签" min-width="25%">
        <template slot-scope="{ row }">
          <el-input
              v-if="editable(row)"
              :value="label"
              @input="$emit('update:label', $event)"
          />
          <div v-else>{{ row.label }}</div>
        </template>
      </el-table-column>

      <el-table-column label="操作" min-width="50%">
        <template slot-scope="{ row }">
          <el-button
              size="mini"
              v-if="editable(row)"
              @click="$emit('onCancel')"
          >
            取消
          </el-button>

          <el-button
              size="mini"
              @click="$emit(( editable(row) ? 'onSave' : 'onEdit' ), row)"
              :disabled="editable(row) && !(cname && label)"
          >
            {{ editable(row) ? '保存' : '编辑' }}
          </el-button>

          <router-link :to="{ name: 'manage-posts', params: { categoryName: row.name.toLowerCase() } }">
            <el-button size="mini">
              查看文章
            </el-button>
          </router-link>

          <el-button
              size="mini"
              @click="$emit('onDelete', row)"
          >
            删除
          </el-button>
        </template>
      </el-table-column>

      <template slot="append">
        <el-button
            class="add-category"
            size="mini"
            icon="el-icon-plus"
            @click="$emit('onAdd')"
            :disabled="!!(cname && label)"
        >
          新增
        </el-button>
      </template>
    </el-table>
  </el-card>
</template>

<script>
export default {
  name: 'BackCategoryUI',
  props: {
    list: Array,
    cname: String,
    label: String,
    editable: Function
  }
};
</script>
