<template>
  <EditorUI
      :id="id"
      :comment="comment"
      :amend="amend"
      :post="post"
      :form-data="formData"
      :rules="formValidateRules"
      :category="categoryWithoutAbout"
      :active.sync="active"
      v-bind.sync="formData"
      @on-publish="handlePublish"
      @on-cancel="$emit('on-cancel')"
  />
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex';
import { RequestFailed } from '@/Util/mixins';
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
      }
    };
  },

  computed: {
    ...mapState(['formValidateRules']),
    ...mapGetters('Back', ['categoryWithoutAbout'])
  },

  watch: {
    // 当父组件传入amendValue时就执行初始化将数据填入表单
    amendValue () {
      this.updateAmendToForm();
    }
  },

  created () {
    // 加载后如没有分类表数据时先发送一次查询请求
    const { comment, post, categoryWithoutAbout } = this;
    const len = categoryWithoutAbout && categoryWithoutAbout.length;
    if (!comment && !!post && len < 1) {
      this.getData({ target: 'categories' });
    }
  },

  methods: {
    ...mapActions(['getData', 'sendData']),

    updateAmendToForm () {
      let { amendValue } = this;
      if (typeof amendValue === 'object') {
        const { category: selectedCategory, ...rest } = amendValue;
        this.formData = {
          ...this.formData,
          selectedCategory,
          ...rest
        };
      }
    },

    // 发表文章/评论
    handlePublish (ref) {
      ref.validate(async (valid) => {
        let category, postId, commentId;

        if (this.comment && this.amend) {
          // 修改评论
          ({ postId, commentId } = this.amendValue);
        } else if (this.comment) {
          // 新评论
          ({ id: postId } = this.$route.params);
        } else {
          // 修改博文
          category = this.formData.selectedCategory;
          postId = this.amendValue.postId || null;
        }

        if (valid) {
          const { amend: isAmend, formData, $confirm, comment } = this;

          try {
            await $confirm('确定发表内容？', {
              title: '确认',
              confirmButtonText: '发布',
              cancelButtonText: '返回',
              center: true
            });

            await this.sendData({
              ...formData,
              isAmend,
              category,
              postId,
              commentId,
              callback: RequestFailed(this.$router)
            });

            await this.$nextTick(() => {
              this.formData = {
                selectedCategory: '',
                guestName: '',
                title: '',
                content: ''
              };
              comment && !isAmend
                ? (this.active = false)
                : (this.$once(this.$emit('on-submit')));
            });
          } catch (e) {
            return false;
          }
        }
      });
    }
  }
};
</script>
