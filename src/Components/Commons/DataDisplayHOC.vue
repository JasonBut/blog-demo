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
    ...mapGetters(['postFilterFromList']),

    fetchRuleStrategies () {
      return (route) => ({
        'posts': route.params.categoryName, // eg. programs
        'comments': route.params.id, // eg. /programs/01 的 01
        'post': route.params.id // 同上
      });
    }
  },

  created () {
    this.requestGetData();
  },

  methods: {
    ...mapActions(['getData']),
    ...mapMutations({ updateStore: Types.UPDATE_STORE }),

    async requestGetData () {
      const lowerCaseTarget = this.target.toLowerCase();
      const { $route, list, fetchRuleStrategies, getData } = this;
      // 根据不同的请求目标返回asyncFetch方法的rule
      const rule = fetchRuleStrategies($route)[lowerCaseTarget];

      // 判断store中list状态是否有数据,并根据标题判断是否博文数组
      const hasPostListInStore = !!(list.length > 0 && list[0].title);

      /*
      * 如果从列表页跳转到详情页,因为state树list状态已存有博文的信息
      * 可以从list状态中直接提取,不需要向服务器发送请求
      */
      if (lowerCaseTarget === 'post' && hasPostListInStore) {
        const [ data ] = this.postFilterFromList(rule);
        this.updateStore({ target: 'post', data });
        return;
      }

      // 其余情况发送请求获取数据
      await getData({ target: lowerCaseTarget, rule });
    }
  }
};
</script>
