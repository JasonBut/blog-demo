<template>
  <DataDisplayHOC target="all_comments">
    <template slot-scope="scope">
      <BackCommentsUI
          :options="scope.options"
          :list="scope.list"
          @onCurrentChange="scope.handleCurrentChange"
          @onDelete="handleDelete"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
import { DeleteDataMixin } from '@/Components/Commons';
export default {
  name: 'BackComments',
  mixins: [DeleteDataMixin],
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    BackCommentsUI: () => import('./BackCommentsUI')
  }
};
</script>
