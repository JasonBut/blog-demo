<template>
  <BackAsideUI :list="categoryList" />
</template>

<script>
export default {
  name: 'BackAside',

  components: {
    BackAsideUI: () => import('./BackAsideUI')
  },

  data () {
    return {
      categoryList: [
        {
          name: 'home',
          cname: '博客首页',
          path: '/'
        },
        {
          name: 'categories',
          cname: '管理分类',
          path: '/admin/categories'
        },
        {
          name: 'posts',
          cname: '我的文章',
          path: '/admin/posts'
        },
        {
          name: 'comments',
          cname: '访客回复',
          path: '/admin/comments'
        }
      ]
    };
  }
};
</script>
