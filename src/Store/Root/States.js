export default {
  categories: [],
  breadList: [],
  list: [],
  post: {},
  err: '',
  loading: false,
  formValidateRules: {
    selectedCategory: [
      { required: true, message: '请选择分组!', trigger: 'submit' }
    ],
    title: [
      { required: true, message: '请输入标题!', trigger: 'blur' },
      { min: 5, max: 30, message: '标题长度介乎于5-30个字符之间' }
    ],
    guestName: [
      { required: true, message: '请输入访客名!', trigger: 'blur' },
      { min: 3, max: 10, message: '用户名长度介乎于3-10个字符之间', trigger: 'blur' }
    ],
    content: [
      { required: true, message: '请输入内容!', trigger: 'submit' },
      { min: 15, message: '内容字数不得少于15个字符', trigger: 'blur' }
    ],
    username: [
      { required: true, message: '请输入账号！', trigger: 'submit' }
    ],
    password: [
      { required: true, message: '请输入密码！', trigger: 'submit' }
    ]
  }
};
