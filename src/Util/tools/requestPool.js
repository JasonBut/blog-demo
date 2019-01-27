// 过滤条件
export default function filters ({ id, filter }, mode) {
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
