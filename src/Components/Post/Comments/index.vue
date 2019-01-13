<template>
  <CommentListUI :commentList="list" />
</template>

<script>
import { mapState } from 'vuex';
import GetDataMixins from '../../Commons/GetDataMixins';

export default {
  name: 'CommentList',
  mixins: [GetDataMixins('comments')],

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
