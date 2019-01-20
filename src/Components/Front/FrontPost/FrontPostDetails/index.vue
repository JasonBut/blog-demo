<template>
  <DataDisplayHOC target="post">
    <template slot-scope="scope">
      <PostDetailsUI :details="scope.post" />
    </template>
  </DataDisplayHOC>
</template>

<script>
import { mapMutations } from 'vuex';
import { Types } from '@/Store';
export default {
  name: 'FrontPostDetails',
  components: {
    DataDisplayHOC: () => import('@/Components/Commons/DataDisplayHOC'),
    PostDetailsUI: () => import('./FrontPostDetailsUI')
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
</script>
