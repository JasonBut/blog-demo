import axios from 'axios';
import { transformURICode } from '../tools';

// 创建axios实例
const request = axios.create({
  baseURL: `http://localhost:4001/`,
  timeout: 2000
});

// 拦截发送前的操作
request.interceptors.request.use(
  (config) => {
    if (config.method === 'post' || config.method === 'put') {
      config.data = transformURICode(config.data);
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// 拦截接收后的操作
request.interceptors.response.use(
  (response) => {
    if (response.data) {
      response.data = transformURICode(response.data, false);
    }
    return response;
  },
  (err) => Promise.reject(err)
);

export default request;
