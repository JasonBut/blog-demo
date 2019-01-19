<template>
  <BackCategoryUI
      :list="categoryWithoutAbout"
      @onDelete="handleDelete"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { DeleteDataMixin } from '@/Components/Commons';
export default {
  name: 'BackCategory',
  mixins: [DeleteDataMixin],
  components: {
    BackCategoryUI: () => import('./BackCategoryUI')
  },
  computed: {
    ...mapGetters(['categoryWithoutAbout'])
  },
  created () {
    // 加载组件时如没有过滤好的分类列表,则发送一次请求获取列表
    if (this.categoryWithoutAbout.length < 1) {
      this.getData({ target: 'categories' });
    }
  },
  methods: {
    ...mapActions(['getData'])
  }
};
</script>
