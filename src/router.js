import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      alias: '/about',
      name: 'home',
      component: () => import('@/Components/About/')
    },
    {
      path: '/:categoryName',
      name: 'postList',
      props: true,
      component: () => import('@/Components/List/')
    },
    {
      path: '/:categoryName/:id',
      name: 'post',
      props: true,
      component: () => import('@/Components/Post/')
    }
  ]
});
