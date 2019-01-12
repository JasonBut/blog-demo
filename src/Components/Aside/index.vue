<template>
  <AsideUI
      :categories="categories"
      :path="$route.path"></AsideUI>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
      getData: 'getData'
    })
  },

  created () {
    this.getData({
      target: 'categories'
    });
  }

};
</script>
