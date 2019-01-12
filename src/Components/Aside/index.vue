<template>
  <AsideUI
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
    AsideUI: () => import('./AsideUI')
  },

  computed: {
    ...mapGetters({
      splitCategoryName: Constants.splitCategoryName
    })
  }

};
</script>
