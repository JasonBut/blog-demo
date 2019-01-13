import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './Store';
import '@/Plugins/element';
import '@/Assets/style/index.scss';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  store.getters.getBread(to);
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
