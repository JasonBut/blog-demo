import { MessageBox, Notification } from 'element-ui';

export default async () => {
  try {
    await MessageBox.confirm('是否尝试刷新页面重试？', {
      type: 'error',
      title: '连接失败',
      confirmButtonText: '好的',
      cancelButtonText: '不了',
      center: true
    });
    await window.history.go(0);
  } catch (e) {
    await Notification({
      type: 'waring',
      title: '连接失败',
      message: '请检查网络连接或稍后再尝试',
      duration: 3000,
      offset: 100
    });
  }
};
