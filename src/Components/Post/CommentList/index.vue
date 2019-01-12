<template>
  <CommentListUI :commentList="list" />
</template>

<script>
import { mapState } from 'vuex';
import GetDataMixins from '../../GetDataMixins';

export default {
  name: 'CommentList',
  mixins: [GetDataMixins('comments')],

  components: {
    CommentListUI: () => import('./CommentListUI')
  },

  computed: {
    ...mapState({
      list: 'list'
    })
  }

};
</script>
