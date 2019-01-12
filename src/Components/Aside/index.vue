<template>
  <AsideUI
      :categories="categories"
      :path="$route.path"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { ACTIONS } from '@/Store/Constants';

export default {
  name: 'Aside',

  components: {
    AsideUI: () => import('./AsideUI')
  },

  computed: {
    ...mapGetters({
      categories: 'splitCategoryName'
    })
  },

  methods: {
    ...mapActions({
      getData: ACTIONS.getData
    })
  },

  created () {
    this.getData({
      type: 'categories'
    });
  }

};
</script>
