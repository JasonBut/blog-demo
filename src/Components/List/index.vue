<template>
  <div>
    <ListUI
        :options="paginationOptions"
        :list="list"
        :postPath="$route.path"
        @onCurrentChange="handleCurrentChange"
    />
  </div>

</template>

<script>
import { mapState } from 'vuex';
import { GetDataMixins, PaginationOptions } from '../Commons';

export default {
  name: 'List',
  mixins: [
    GetDataMixins('posts'),
    PaginationOptions
  ],

  components: {
    ListUI: () => import('./ListUI')
  },

  computed: {
    ...mapState({
      list: ({ list }) => list.reverse()
    })
  }

};
</script>
