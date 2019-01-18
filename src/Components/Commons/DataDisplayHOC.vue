<template>
  <div>
    <slot
        :options="paginationOptions"
        :list="list"
        :post="post"
        :handleCurrentChange="handleCurrentChange"
    />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
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
    ...mapState(['list', 'post'])
  },

  created () {
    this.requestGetData();
  },

  methods: {
    ...mapActions(['getData']),
    getDataStrategies (route) {
      return {
        'posts': `${route.path.split('/')[1]}`, // eg. /programs 的 programs
        'comments': `${route.params.id}`, // eg. /programs/01 的 01
        'post': `${route.params.id}` // 同上
      };
    },

    async requestGetData (route = this.$route) {
      const lowerCaseType = this.target.toLowerCase();
      await this.getData({
        target: lowerCaseType,
        rule: this.getDataStrategies(route)[lowerCaseType]
      });
    }
  }

};
</script>
