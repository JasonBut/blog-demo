<template>
  <AsideUI
      :categories="categories"
      :path="$route.path"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'FrontAside',

  components: {
    AsideUI: () => import('./AsideUI')
  },

  computed: {
    ...mapGetters({
      categories: 'splitCategoryName'
    })
  },

  created () {
    this.getData({
      target: 'categories'
    });
  },

  methods: {
    ...mapActions({
      getData: 'getData'
    })
  }

};
</script>
