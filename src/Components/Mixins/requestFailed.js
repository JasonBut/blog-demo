import { Notification } from 'element-ui';

export default (router) => {
  return () => {
    router.replace({ name: 'not-found' });
    Notification({
      type: 'waring',
      title: '连接失败',
      message: '请检查网络连接或稍后再尝试',
      duration: 3000,
      offset: 100
    });
  };
};
