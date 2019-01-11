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
export default {
  name: 'Programs',
  data () {
    return {
      formStyles: {
        background: `rgba(0,0,0,0.35)`
      }
    };
  },
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
