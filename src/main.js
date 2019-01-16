import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/Store';
import '@/Plugins';

Vue.config.productionTip = false;

router.beforeEach((to, from, next) => {
  store.commit('UPDATE_BREAD_LIST', to);
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
