import Vue from 'vue';
import App from '@/App.vue';
import router from '@/router';
import store from '@/Store';
import 'normalize.css';
import '@/Assets/Styles/index.scss';
import '@/Plugins';

Vue.config.productionTip = false;

router.beforeEach(async (to, from, next) => {
  const { state: { categories }, getters: { routeTitleFilter }, commit, dispatch } = store;
  const { metaTitle } = to.meta;

  commit('UPDATE_BREAD_LIST', to); // 控制面包屑导航的显示

  // 如加载组件时路由meta没有标题,并且没有侧栏列表信息, 先进行一次加载
  if (!metaTitle && categories.length < 1) {
    await dispatch('getData', { target: 'categories' });
  }

  // 计算标题,如路由meta中有设置则优先使用,否则就计算store中侧栏的信息获取
  const title = metaTitle || routeTitleFilter(to);
  document.title = `${title || 'Welcome'} - Jason's Blog`;
  next();
});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
