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
      @onCancel="$emit('onCancel')"
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
      }
    };
  },

  computed: {
    ...mapGetters(['categoryWithoutAbout'])
  },

  watch: {
    // 当父组件传入amendValue时就执行初始化将数据填入表单
    amendValue () {
      this.updateAmendToForm();
    }
  },

  created () {
    // 加载后如没有分类表数据时先发送一次查询请求
    const { post, categoryWithoutAbout } = this;
    if (!!post && categoryWithoutAbout.length < 1) {
      this.getData({ target: 'categories' });
    }
  },

  methods: {
    ...mapActions(['getData', 'sendData']),

    updateAmendToForm () {
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
      ref.validate(async (valid) => {
        let category, postId;

        /*
        * 发评论时信息从路由中解构获得
        * 发博文时信息从编辑器中获得
        */
        if (this.comment) {
          ({ categoryName: category, id: postId } = this.$route.params);
        } else {
          category = this.formData.selectedCategory;
          postId = this.amendValue.postId || null;
        }

        if (valid) {
          const { amend: isAmend, formData } = this;

          if (!confirm('确定发表内容？')) {
            return;
          }

          await this.sendData({ ...formData, isAmend, category, postId });
          this.formData = {
            selectedCategory: '',
            guestName: '',
            title: '',
            content: ''
          };
          this.comment
            ? (this.active = false)
            : (this.$once(this.$emit('onSubmit')));
        }
      });
    }
  }
};
</script>
