import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/admin',
      name: 'admin',
      props: true,
      component: () => import('@/Components/Back/'),
      children: [
        {
          path: 'categories',
          name: 'manage-categories',
          component: () => import('@/Components/Back/BackCategory')
        },
        {
          path: 'posts',
          alias: '/admin',
          name: 'manage-posts',
          component: () => import('@/Components/Back/BackPostList')
        },
        {
          path: 'posts/:id',
          name: 'manage-post',
          component: () => import('@/Components/Back/BackPost')
        },
        {
          path: 'comments',
          name: 'manage-comments',
          component: () => import('@/Components/Back/BackComments')
        }
      ]
    },
    {
      path: '/',
      component: () => import('@/Components/Front/'),
      children: [
        {
          path: '/about',
          alias: '/',
          name: 'home',
          component: () => import('@/Components/Front/FrontAbout')
        },
        {
          path: '/:categoryName',
          name: 'postList',
          props: true,
          component: () => import('@/Components/Front/FrontList')
        },
        {
          path: '/:categoryName/:id',
          name: 'post',
          props: true,
          component: () => import('@/Components/Front/FrontPost')
        }
      ]
    }
  ]
});
