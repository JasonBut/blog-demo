<template>
  <listUI
      :list="list(categoryName)"
      :params="categoryName"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import { Constants } from '@/Store';

export default {
  name: 'List',

  props: {
    categoryName: String
  },

  components: {
    listUI: () => import('./listUI')
  },

  computed: {
    ...mapGetters({
      list: Constants.filterPostList
    })
  },

  beforeRouteUpdate (to, from, next) {
    next();
  }
};
</script>
