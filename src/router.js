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
      component: () => import('./Views/About')
    },
    {
      path: '/programs',
      name: 'programs',
      component: () => import('./Views/Programs')
    },
    {
      path: '/notes',
      name: 'notes',
      component: () => import('./Views/Notes')
    },
    {
      path: '/daily',
      name: 'daily',
      component: () => import('./Views/Daily')
    }
  ]
});
