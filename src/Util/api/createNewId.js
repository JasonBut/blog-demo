import { asyncFetch } from '.';
import { idGenerator } from '../tools';

export default async (fetchTarget) => {
  let lastItem;

  // 发送请求,提取最后一项
  ([ lastItem ] = await asyncFetch.get({
    target: `latest_${fetchTarget}`
  }));

  if (lastItem && Object.prototype.toString.call(lastItem) !== '[object Object]') {
    throw new Error(`Invalid data returned from 'latest_${fetchTarget}', got '${typeof lastItem}', expected 'Object'.`);
  }

  // 如没有返回数据,表示还没有内容
  !lastItem && (lastItem = { id: '00' });

  // 获取的数据时对象但没有id项,报错
  if (!lastItem.id) {
    throw new Error(`Cannot get the latest id from 'latest_${fetchTarget}'.`);
  }

  // 生成新id
  return idGenerator()(lastItem.id).next().value;
};
