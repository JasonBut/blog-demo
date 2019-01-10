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
      component: () => import('./Components/About/index.vue')
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('./Components/Programs')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('./Components/Notes')
    },
    {
      path: '/daily',
      name: 'daily',
      component: () => import('./Components/Daily')
    }
  ]
});
