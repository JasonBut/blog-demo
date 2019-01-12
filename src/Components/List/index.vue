<template>
  <ListUI
      :list="list"
      :params="categoryName"
  />
</template>

<script>
import { mapState } from 'vuex';
import GetDataMixins from '../GetDataMixins';

export default {
  name: 'List',
  mixins: [GetDataMixins('posts')],

  props: {
    categoryName: String
  },

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
