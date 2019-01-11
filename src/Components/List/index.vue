<template>
  <listUI
      :list="list"
      :formStyles="formStyles"
  />
</template>

<script>
import { mapState } from 'vuex';
import { Constants } from '@/Store';

export default {
  name: 'Programs',

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
      },
      formStyles: Constants.formStyles
    })
  }
};
</script>
