<template>
  <EditorUI
      :id="id"
      :comment="comment"
      :amend="amend"
      :post="post"
      :formData="formData"
      :rules="rules"
      :categoryWithoutAbout="categoryWithoutAbout"
      :active.sync="active"
      v-bind.sync="formData"
      @onPublish="handlePublish"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  name: 'Editor',
  props: {
    id: String,
    comment: Boolean,
    amend: Boolean,
    post: Boolean
  },

  components: {
    EditorUI: () => import('./EditorUI')
  },

  data () {
    return {
      active: false,
      formData: {
        selectedCategory: '',
        guestName: '',
        title: '',
        content: ''
      },
      rules: {
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
        ]
      },
      categoryOptions: [
        { name: '项目记录', value: '/programs' },
        { name: '学习笔记', value: '/notes' },
        { name: '日常生活', value: '/daily' }
      ]
    };
  },

  computed: {
    ...mapGetters(['categoryWithoutAbout'])
  },

  created () {
    // 加载后如没有分类表数据时先发送一次查询请求
    const { post, amend, categoryWithoutAbout } = this;
    if (!!(post || amend) && categoryWithoutAbout.length < 1) {
      this.getData({ target: 'categories' });
    }
  },

  methods: {
    ...mapActions(['getData', 'sendData']),
    // 发表文章/评论
    handlePublish (ref) {
      ref.validate((valid) => {
        let [, category, postId] = this.$route.path.split('/');

        // 非评论模式更改分类名在路径中分割的位置
        if (!this.isComment) {
          category = this.formData.selectedCategory.split('/')[1];
          postId = null;
        }

        if (valid) {
          const payload = {
            isAmend: this.amend,
            isComment: this.comment,
            data: this.formData,
            category,
            postId
          };
          this.sendData(payload);
        }
      });
    }
  }
};
</script>
