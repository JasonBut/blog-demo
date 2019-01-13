<template>
  <PostDetailsUI :details="post" />
</template>

<script>
import { mapState } from 'vuex';
import GetDataMixins from '../../Commons/GetDataMixins';

export default {
  name: 'postDetails',
  mixins: [GetDataMixins('post')],

  components: {
    PostDetailsUI: () => import('./PostDetailsUI')
  },

  computed: {
    ...mapState(['post'])
  }
};
</script>
