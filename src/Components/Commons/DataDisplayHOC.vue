<template>
  <div>
    <slot
        :list="list"
        :post="post"
        :options="paginationOptions"
        :handleCurrentChange="handleCurrentChange"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import { Types } from '@/Store';
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
    ...mapState(['list', 'post']),
    ...mapGetters(['postFilterFromList'])
  },

  created () {
    this.requestGetData();
  },

  methods: {
    ...mapActions(['getData']),
    ...mapMutations({
      updateStore: Types.UPDATE_STORE
    }),

    getDataStrategies (route) {
      return {
        'posts': `${route.path.split('/')[1]}`, // eg. /programs 的 programs
        'comments': `${route.params.id}`, // eg. /programs/01 的 01
        'post': `${route.params.id}` // 同上
      };
    },

    async requestGetData (route = this.$route) {
      const lowerCaseType = this.target.toLowerCase();
      const rule = this.getDataStrategies(route)[lowerCaseType];
      const hasPostListInStore = !!(this.list.length > 0 && this.list[0].title);

      /*
      * 如果从列表页跳转到详情页,因为state树中已存有博文的信息
      * 可以从list状态中直接提取,不需要向服务器发送请求
      */
      if (lowerCaseType === 'post' && hasPostListInStore) {
        const [ data ] = this.postFilterFromList(rule);
        this.updateStore({ target: 'post', data });
        return;
      }
      await this.getData({ target: lowerCaseType, rule });
    }
  }
};
</script>
