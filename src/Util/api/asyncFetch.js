import axios from 'axios';

axios.defaults.baseURL = `http://localhost:4000/`;
axios.defaults.timeout = 2000;

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
    const response = await axios[lowerCaseMode](`${path}`, data);

    path = null; // 解除filters引用

    if (!(response.status >= 200 && response.status < 300)) {
      throw new Error(response.statusText);
    }

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
}
