<template>
  <div>
    <slot
        :post="post"
        :list="paginationData.list"
        :options="paginationData.options"
        :handleCurrentChange="handleCurrentChange"
    />
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions, mapMutations } from 'vuex';
import { RequestFailed, PaginationMixin } from '@/Util/mixins';
import { Types } from '@/Store';
export default {
  name: 'GetData',
  mixins: [PaginationMixin()],
  props: {
    target: {
      type: String,
      required: true
    }
  },

  computed: {
    ...mapState(['list', 'post']),
    ...mapGetters(['postFilterFromList'])
  },

  created () {
    this.requestGetData();
  },

  updated () {
    if (this.post.title) {
      document.title = `${this.post.title} - Jason's Blog`;
    }
  },

  methods: {
    ...mapActions(['getData']),
    ...mapMutations({ updateStore: Types.UPDATE_STORE }),

    async requestGetData () {
      const { $route, $router, list, getData, target } = this;
      const lowerCaseTarget = target.toLowerCase();
      const targetToPost = !!lowerCaseTarget.endsWith('post');

      // 判断store中list状态是否有数据,并根据标题判断是否博文数组
      const hasPostListInStore = !!(list.length > 0 && list[0].title);

      // 根据路由中的数据返回用于asyncFetch方法的参数
      const filter = $route.params.categoryName;
      const id = $route.params.id;

      /*
      * 如果从列表页跳转到详情页,因为state树list状态已存有博文的信息
      * 可以从list状态中直接提取,不需要向服务器发送请求
      */
      if (targetToPost && hasPostListInStore) {
        const [ data ] = this.postFilterFromList(id);
        this.updateStore({ target: 'post', data });
        await getData({ target: 'comments', id });
        return;
      }

      // 其余情况正常发送请求获取数据
      await getData({ callback: RequestFailed($router, true), target: lowerCaseTarget, id, filter });
      targetToPost && await getData({ target: 'comments', id });
    }
  }
};
</script>
