<template>
  <div>
    <slot
        :options="paginationOptions"
        :categories="categories"
        :list="list"
        :postPath="$route.path"
        :handleCurrentChange="handleCurrentChange"
        :post="post"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import PaginationOptions from './PaginationOptions';

export default {
  name: 'GetData',

  mixins: [
    PaginationOptions()
  ],

  props: {
    target: String
  },

  computed: {
    ...mapState(['list', 'post', 'categories'])
  },

  created () {
    this.getData();
  },

  methods: {
    getDataStrategies (route) {
      return {
        'posts': `${route.path.split('/')[1]}`, // eg. /programs 的 programs
        'comments': `${route.params.id}`, // eg. /programs/01 的 01
        'post': `${route.params.id}` // 同上
      };
    },

    async getData (route = this.$route) {
      const lowerCaseType = this.target.toLowerCase();
      await this.$store.dispatch('getData', {
        target: lowerCaseType,
        rule: this.getDataStrategies(route)[lowerCaseType]
      });
    }
  }

};
</script>
