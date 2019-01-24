export default {
  editingArticle: false, // 是否处于文章/评论编辑状态
  publishing: false, // 是否正在发表文章
  amendValue: Object.create(null), // 用来缓存要编辑的文章/评论信息
  asideMenu: [
    { name: 'home', cname: '博客首页' },
    { name: 'manage-categories', cname: '管理分类' },
    { name: 'manage-posts', cname: '我的文章' },
    { name: 'manage-comments', cname: '访客回复' }
  ]
};
