import { request, requestPool } from '../tools';
/*
 * 必须 mode = "GET" / "POST" / "PUT" / "DELETE" axios的对应方法
 * 必须 target = 读取或发送的数据的类型, 详细看requestPool的key
 * 可选 id = 读取数据时提供的id值或其他数据值,用于从requestPool生成路径
 * 可选 data = 发送给服务器的数据内容
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

  // 通过过滤函数获取路径
  let path = requestPool({ id, filter }, lowerCaseMode).get(target.toLowerCase());

  if (!path) {
    throw new Error(`No path return from filter, please check the rules.`);
  }

  try {
    // 根据传入的参数去选择get/post/put/delete方法,并填入对应路径及数据
    const response = await request[lowerCaseMode](`${path}`, data);

    path = null;

    if (!((response.status >= 200 && response.status < 300) || response.status !== 304)) {
      throw new Error(response.statusText);
    }

    return Promise.resolve(response.data);
  } catch (err) {
    return Promise.reject(err);
  }
}
