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
      component: () => import('@/Components/Back/')
    },
    {
      path: '/',
      name: 'home',
      component: () => import('@/Components/Front/'),
      children: [
        {
          path: '/',
          alias: '/about',
          name: 'about',
          component: () => import('@/Components/Front/About')
        },
        {
          path: '/:categoryName',
          name: 'postList',
          props: true,
          component: () => import('@/Components/Front/List/')
        },
        {
          path: '/:categoryName/:id',
          name: 'post',
          props: true,
          component: () => import('@/Components/Front/Post/')
        }
      ]
    }
  ]
});
