import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const backRoutes = {
  path: '/admin',
  name: 'admin',
  redirect: { name: 'manage-posts' },
  meta: {
    title: '管理后台'
  },
  component: () => import('@/Views/Back/'),
  children: [
    {
      path: 'categories',
      name: 'manage-categories',
      meta: {
        title: '分类一览'
      },
      component: () => import('@/Views/Back/BackCategory')
    },
    {
      path: 'posts',
      alias: '/admin',
      name: 'manage-posts',
      meta: {
        title: '所有文章'
      },
      component: () => import('@/Views/Back/BackPostList'),
      children: [
        {
          path: '/admin/posts/:id',
          name: 'manage-post',
          meta: {
            title: null
          },
          component: () => import('@/Views/Back/BackPost')
        }
      ]
    },
    {
      path: 'comments',
      name: 'manage-comments',
      meta: {
        title: '访客评论'
      },
      component: () => import('@/Views/Back/BackComments')
    },
    {
      path: '*',
      name: 'back-not-found',
      meta: {
        title: '找不到页面'
      },
      component: () => import('@/Components/NotFound')
    }
  ]
};

const frontRoutes = {
  path: '/',
  component: () => import('@/Views/Front/'),
  meta: {
    title: '首页'
  },
  children: [
    {
      path: 'about',
      alias: '/',
      name: 'home',
      meta: {
        title: '关于我'
      },
      component: () => import('@/Views/Front/FrontAbout')
    },
    {
      path: ':categoryName',
      name: 'post-list',
      meta: {
        title: null,
        list: true
      },
      component: () => import('@/Views/Front/FrontList'),
      children: [
        {
          path: ':id',
          name: 'post',
          meta: {
            title: null
          },
          component: () => import('@/Views/Front/FrontPost')
        }
      ]
    },
    {
      path: '*',
      name: 'not-found',
      meta: {
        title: '找不到页面'
      },
      component: () => import('@/Components/NotFound')
    }
  ]
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    backRoutes,
    frontRoutes
  ]
});
