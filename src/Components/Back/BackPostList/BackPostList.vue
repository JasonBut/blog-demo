<template>
  <DataDisplayHOC target="all_posts">
    <template slot-scope="scope">
      <BackPostListUI
          :list="scope.list"
          :options="scope.options"
          @onCurrentChange="scope.handleCurrentChange"
          @onDelete="handleDelete"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
import { DeleteDataMixin } from '@/Components/Commons';
export default {
  name: 'BackPostList',
  mixins: [DeleteDataMixin],
  components: {
    BackPostListUI: () => import('./BackPostListUI'),
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC')
  }
};
</script>
