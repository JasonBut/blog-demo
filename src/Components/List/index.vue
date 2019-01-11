<template>
  <listUI
      :list="list"
  />
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'List',

  props: {
    categoryName: String
  },

  components: {
    listUI: () => import('./listUI')
  },

  computed: {
    ...mapState({
      list (state) {
        return state.postList
          .filter((item) => item.category === this.categoryName)
          .reverse();
      }
    })
  }
};
</script>
