import { mapState, mapMutations } from 'vuex';
import { Types } from '@/Store';
export default {
  computed: {
    ...mapState(['post'])
  },

  // 离开当前详情页时清理state中post内容,避免面包屑导航中文章标题项抖动
  beforeRouteLeave (to, from, next) {
    this.updateStore({
      target: 'post',
      data: {}
    });
    next();
  },

  methods: {
    ...mapMutations({
      updateStore: Types.UPDATE_STORE
    })
  }
};
