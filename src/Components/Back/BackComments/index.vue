<template>
  <DataDisplayHOC target="all_comments">
    <template slot-scope="{ list, options, handleCurrentChange }">
      <BackCommentsUI
          :list="list"
          @onDelete="handleDelete"
      >
        <Pagination
            slot="pagination"
            :options="options"
            @onCurrentChange="handleCurrentChange"
        />
      </BackCommentsUI>
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
    BackCommentsUI: () => import('./BackCommentsUI'),
    Pagination: () => import('@/Components/Commons/Pagination')
  }
};
</script>
