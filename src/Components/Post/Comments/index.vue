<template>
  <CommentListUI
      :options="paginationOptions"
      :list="list"
      @onCurrentChange="handleCurrentChange"
  />
</template>

<script>
import { mapState } from 'vuex';
import { GetDataMixins, PaginationOptions } from '../../Commons';

export default {
  name: 'CommentList',
  mixins: [
    GetDataMixins('comments'),
    PaginationOptions
  ],

  components: {
    CommentListUI: () => import('./CommentsUI')
  },

  computed: {
    ...mapState({
      list: 'list'
    })
  }

};
</script>
