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
          prop="title"
          label="标题"
          header-align="center"
      >
      </el-table-column>
      <el-table-column
          prop="date"
          label="发布日期"
          header-align="center"
      >
      </el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { mapState } from 'vuex';
import { Constants } from '@/Store';

export default {
  name: 'Programs',
  props: {
    categoryName: String
  },
  computed: {
    ...mapState({
      list (state) {
        return state.postList
          .filter((item) => item.category === this.categoryName)
          .reverse();
      },
      formStyles: Constants.formStyles
    })
  }
};
</script>
