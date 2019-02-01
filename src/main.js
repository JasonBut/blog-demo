import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/Store';
import 'normalize.css';
import '@/Assets/Styles/index.scss';
import '@/Plugins';

Vue.config.productionTip = false;

router.beforeEach(async (to, from, next) => {
  const { getters: { routeTitleFilter }, commit } = store;
  const { title: metaTitle } = to.meta;

  commit('UPDATE_BREAD_LIST', to); // 控制面包屑导航的显示

  // 计算标题,如路由meta中有title则优先使用,否则就计算store中侧栏的信息获取
  const title = metaTitle || routeTitleFilter(to);
  document.title = `${title || 'Welcome'} - Jason's Blog`;
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
