import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const backRoutes = {
  path: '/admin',
  meta: {
    cname: '管理后台'
  },
  component: () => import('@/Components/Back/'),
  children: [
    {
      path: 'categories',
      name: 'manage-categories',
      meta: {
        cname: '分类一览'
      },
      component: () => import('@/Components/Back/BackCategory')
    },
    {
      path: 'posts',
      alias: '/admin',
      name: 'manage-posts',
      meta: {
        cname: '所有文章'
      },
      component: () => import('@/Components/Back/BackPostList'),
      children: [
        {
          path: '/admin/posts/:id',
          name: 'manage-post',
          meta: {
            cname: null
          },
          component: () => import('@/Components/Back/BackPost')
        }
      ]
    },
    {
      path: 'comments',
      name: 'manage-comments',
      meta: {
        cname: '访客评论'
      },
      component: () => import('@/Components/Back/BackComments')
    },
    {
      path: '*',
      meta: {
        cname: '找不到页面'
      },
      component: () => import('@/Components/Commons/NotFound')
    }
  ]
};

const frontRoutes = {
  path: '/',
  component: () => import('@/Components/Front/'),
  meta: {
    cname: '首页'
  },
  children: [
    {
      path: 'about',
      alias: '/',
      name: 'home',
      meta: {
        cname: '关于我'
      },
      component: () => import('@/Components/Front/FrontAbout')
    },
    {
      path: ':categoryName',
      name: 'post-list',
      meta: {
        cname: null,
        list: true
      },
      component: () => import('@/Components/Front/FrontList'),
      children: [
        {
          path: ':id',
          name: 'post',
          meta: {
            cname: null
          },
          component: () => import('@/Components/Front/FrontPost')
        }
      ]
    },
    {
      path: '*',
      name: 'not-found',
      meta: {
        cname: '找不到页面'
      },
      component: () => import('@/Components/Commons/NotFound')
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
