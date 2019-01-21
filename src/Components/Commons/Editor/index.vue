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
    post: Boolean,
    amendValue: [Object, Boolean]
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
        { name: '项目记录', value: 'programs' },
        { name: '学习笔记', value: 'notes' },
        { name: '日常生活', value: 'daily' }
      ]
    };
  },

  computed: {
    ...mapGetters(['categoryWithoutAbout'])
  },

  watch: {
    // 当父组件传入amendValue时就执行初始化将数据填入表单
    amendValue () {
      !!this.amend && this.initAmendFormData();
    }
  },

  created () {
    // 加载后如没有分类表数据时先发送一次查询请求
    const { post, amend, categoryWithoutAbout } = this;
    if (!!(post || amend) && categoryWithoutAbout.length < 1) {
      this.getData({ target: 'categories' });
    }
  },

  methods: {
    ...mapActions(['getData', 'sendArticle']),

    initAmendFormData () {
      let { amendValue } = this;
      if (typeof amendValue === 'object') {
        const { category, title, content } = amendValue;
        this.formData = {
          ...this.formData,
          selectedCategory: category,
          title,
          content
        };
      }
    },

    // 发表文章/评论
    handlePublish (ref) {
      ref.validate((valid) => {
        let category, currentId;

        /*
        * 发评论时信息从路由中解构获得
        * 发博文时信息从编辑器中获得
        */
        if (this.comment) {
          ({ categoryName: category, id: currentId } = this.$route.params);
        } else {
          category = this.formData.selectedCategory;
          currentId = this.amendValue.postId || null;
        }

        if (valid) {
          const { amend: isAmend, comment: isComment, formData: data } = this;
          this.sendArticle({ isAmend, isComment, data, category, currentId });
        }
      });
    }
  }
};
</script>
