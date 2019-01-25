import { Notification } from 'element-ui';

export default (router, isGet) => {
  return () => {
    // 获取数据失败跳转到404页面
    !!isGet && router.replace({ name: 'not-found' });
    Notification({
      type: 'waring',
      title: '连接失败',
      message: '请检查网络连接或稍后再尝试',
      duration: 3000,
      offset: 100
    });
  };
};
