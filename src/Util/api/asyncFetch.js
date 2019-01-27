import axios from 'axios';

// 用于将axios发送前或接收后的数据进行转码操作
const transformData = (data, encode = true) => {
  if (typeof data !== 'object') {
    return data;
  }

  // 判断传入的数据是否数组,生成对应的缓存类型
  const cache = Array.isArray(data) ? [] : {};

  // 根据传入的encode指令进行转码操作,进行两次是避免部分字符解析失败
  const transform = encode
    ? (item) => encodeURIComponent(encodeURIComponent(item))
    : (item) => decodeURIComponent(decodeURIComponent(item));

  for (let [key, value] of Object.entries(data)) {
    (typeof value === 'number') && (value = `${value}`);
    (typeof value === 'string') && (cache[key] = transform(value));
    (typeof value === 'object') && (cache[key] = transformData(data[key], encode));
  }
  return cache;
};

// 创建axios实例
const request = axios.create({
  baseURL: `http://localhost:4000/`,
  timeout: 2000
});

// 拦截发送前的操作
request.interceptors.request.use(
  (config) => {
    if (config.method === 'post' || config.method === 'put') {
      config.data = transformData(config.data);
    }
    return config;
  },
  (err) => Promise.reject(err)
);

// 拦截接收后的操作
request.interceptors.response.use(
  (response) => {
    if (response.data) {
      response.data = transformData(response.data, false);
    }
    return response;
  },
  (err) => Promise.reject(err)
);

// 过滤条件
const filters = ({ id, filter }, mode) => {
  // 根据请求类型mode区分返回给asyncFetch函数的条件池
  // 将不同的返回数据存在同一处, 增加独立性
  const pool = {
    post: new Map([
      [`category`, `categories`],
      [`comment`, `comments`],
      [`post`, `posts`]
    ]),

    get: new Map([
      [`categories`, `categories`],
      [`all_posts`, `posts`],
      [`all_comments`, `comments`],
      [`posts`, `posts?category=${filter}`],
      [`comments`, `comments?post=${id}`],
      [`post`, `posts?id=${id}&&category=${filter}`],
      [`back_post`, `posts/${id}`],
      [`latest_post`, `posts?_sort=id&&_order=desc&&_end=1`],
      [`latest_comment`, `comments?_sort=id&&_order=desc&&_end=1`],
      [`latest_category`, `categories?_sort=id&&_order=desc&&_end=1`]
    ]),

    put: new Map([
      [`post`, `posts/${id}`],
      [`comment`, `comments/${id}`],
      [`category`, `categories/${id}`]
    ]),

    delete: new Map([
      [`post`, `posts/${id}`],
      [`comment`, `comments/${id}`],
      [`category`, `categories/${id}`]
    ])
  };
  return pool[mode];
};

/*
 * 必须 mode = "GET" / "POST" / "PUT" axios的get/post/put方法
 * 必须 type = 读取或发送的数据的类型, 如"boards","posts"等, 详细看filters的key
 * 可选 id = 读取数据时提供的id值或其他数据值,用于filters生成路径
 * 可选 body = 发送给服务器的数据内容
 */

// 三个静态方法, 方便调用
asyncFetch.get = ({ target, id, filter }) => asyncFetch({ mode: 'GET', target, id, filter });
asyncFetch.post = ({ target, data }) => asyncFetch({ mode: 'POST', target, data });
asyncFetch.delete = ({ target, id }) => asyncFetch({ mode: 'DELETE', target, id });
asyncFetch.put = ({ target, id, data }) => asyncFetch({ mode: 'PUT', target, id, data });

export default async function asyncFetch ({ mode, target, id, filter, data }) {
  if (typeof target !== 'string') {
    throw new Error(`Invalid type: "${target}", expected 'String'`);
  }

  const lowerCaseMode = !!mode && mode.toLowerCase();

  if (!(['get', 'post', 'put', 'delete'].includes(lowerCaseMode))) {
    throw new Error(`Invalid mode : ${mode}, expected "POST", "GET", "DELETE or "PUT"`);
  }

  let path = filters({ id, filter }, lowerCaseMode).get(target.toLowerCase()); // 通过过滤函数获取路径

  if (!path) {
    throw new Error(`No path return from filter, please check the rules.`);
  }

  try {
    // 这句代码是根据传入的参数去调整axios的get/post/put方法,并填入对应路径及数据
    const response = await request[lowerCaseMode](`${path}`, data);

    path = null;

    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error(response.statusText);
    }

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}
