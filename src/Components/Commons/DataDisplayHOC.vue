<template>
  <div>
    <slot
        :options="paginationOptions"
        :list="list"
        :postPath="$route.path"
        :handleCurrentChange="handleCurrentChange"
        :post="post"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { PaginationOptions } from '.';

export default {
  name: 'GetData',
  props: {
    target: String
  },

  mixins: [
    PaginationOptions()
  ],

  computed: {
    ...mapState(['list', 'post'])
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
  },

  created () {
    this.getData();
  }

};
</script>
