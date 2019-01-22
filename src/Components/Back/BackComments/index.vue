<template>
  <DataDisplayHOC target="all_comments">
    <template slot-scope="{ list, options, handleCurrentChange }">
      <BackCommentsUI
          :list="list"
          :options="options"
          @onCurrentChange="handleCurrentChange"
          @onDelete="handleDelete"
      />
    </template>
  </DataDisplayHOC>
</template>

<script>
import { DeleteDataMixin } from '@/Components/Commons';
export default {
  name: 'BackComments',
  mixins: [ DeleteDataMixin ],
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    BackCommentsUI: () => import('./BackCommentsUI')
  }
};
</script>
