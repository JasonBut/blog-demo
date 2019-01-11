<template>
  <asideUI
      :categories="splitCategoryName"
      :path="$route.path"
  />
</template>

<script>
import { mapGetters } from 'vuex';
import { Constants } from '@/Store';

export default {
  name: 'Aside',

  components: {
    asideUI: () => import('./asideUI')
  },

  computed: {
    ...mapGetters({
      splitCategoryName: Constants.splitCategoryName
    })
  }

};
</script>
