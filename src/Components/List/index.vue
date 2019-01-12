<template>
  <ListUI
      :list="list(categoryName)"
      :params="categoryName"
  />
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'List',

  props: {
    categoryName: String
  },

  components: {
    ListUI: () => import('./ListUI')
  },

  computed: {
    ...mapGetters({
      list: 'filterPostList'
    })
  },

  beforeRouteUpdate (to, from, next) {
    next();
  }
};
</script>
