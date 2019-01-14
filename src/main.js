import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './Store';
import VueEditor from 'vue2-editor';
import '@/Plugins/element';
import '@/Assets/style/index.scss';

Vue.config.productionTip = false;
Vue.use(VueEditor);

router.beforeEach((to, from, next) => {
  store.commit('UPDATE_BREAD_LIST', to);
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
