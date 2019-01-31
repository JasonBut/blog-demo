// 用于将axios发送前或接收后的数据进行转码操作
export default function transformData (data, encode = true) {
  if (Object.prototype.toString.call(data) !== '[object Object]') {
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
    (
      Object.prototype.toString.call(value) === '[object Object]') &&
      (cache[key] = transformData(data[key], encode)
      );
  }
  return cache;
};
