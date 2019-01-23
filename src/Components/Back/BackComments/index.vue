<template>
  <DataDisplayHOC target="all_comments">
    <template slot-scope="{ list, options, handleCurrentChange }">
      <BackCommentsUI
          :list="list"
          @on-delete="handleDelete"
      >
        <Pagination
            slot="pagination"
            :options="options"
            @on-current-change="handleCurrentChange"
        />
      </BackCommentsUI>
    </template>
  </DataDisplayHOC>
</template>

<script>
import { DeleteDataMixin } from '@/Components/Mixins';
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
