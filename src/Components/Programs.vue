<template>
  <el-card>
    <el-table
        :data="list"
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
export default {
  name: 'Programs',
  computed: {
    ...mapState({
      list: (state) => state.postList.reverse()
    })
  }
};
</script>

<style lang="scss">
@import "../Assets/style/style";

</style>
