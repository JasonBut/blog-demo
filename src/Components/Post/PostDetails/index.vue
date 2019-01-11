<template>
  <postDetailsUI :details="postDetails" />
</template>

<script>
import { mapState } from 'vuex';
import { Constants } from '@/Store';

export default {
  name: 'postDetails',
  components: {
    postDetailsUI: () => import('./postDetailsUI')
  },

  computed: {
    ...mapState({
      list: Constants.postList
    }),

    postDetails () {
      const [post] = this.list.filter((item) => {
        return item.id === this.$route.params.id;
      });
      return post;
    }
  }
};
</script>
