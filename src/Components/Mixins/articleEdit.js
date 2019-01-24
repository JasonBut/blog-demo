import { mapState, mapMutations } from 'vuex';
import { Types } from '@/Store/Back';

const postHooks = {
  watch: {
    // 从编辑器活动页切换回列表页会询问是否清楚数据
    currentTab (to, from) {
      !!(to === 'publish') && (this.setEditStatus('NEW'));
      !!(from === 'publish' && this.publishing) && (this.handleCancel());
    }
  },

  async beforeRouteLeave (to, from, next) {
    // 从编辑器跳转到其他页面时触发
    if (this.currentTab === 'publish' && this.publishing) {
      const confirmLeave = await this.handleCancel();
      if (!confirmLeave) {
        this.$nextTick(() => {
          next({ ...from });
        });
      } else {
        next();
      }
    }
    next();
  }
};

export default (articleType) => {
  if (!articleType) { throw new Error(`The type of article must be provided!`); }

  const type = articleType.toLowerCase();

  if (type !== 'post' && type !== 'comment') {
    throw new Error(`The type should only be 'post' or 'comment'`);
  }

  const isPost = (type === 'post');

  return {
    mixins: [ isPost ? postHooks : {} ],
    computed: {
      ...mapState('Back',
        ['editingArticle', 'publishing', 'amendValue']
      )
    },

    methods: {
      ...mapMutations('Back', {
        setEditStatus: Types.SET_EDIT_STATUS,
        updateAmendValue: Types.UPDATE_AMEND_VALUE,
        cleanAmendValue: Types.CLEAN_AMEND_VALUE
      }),

      cleanData () {
        this.setEditStatus('CANCEL');
        this.cleanAmendValue();
        !!isPost && (this.currentTab = 'post-list');
      },

      handleEdit (article) {
        if (this.editingArticle || this.publishing) {
          return this.$message.error('正在编辑文章中，请先取消或保存再进行操作！');
        }
        this.setEditStatus('EDIT');

        let payload;
        if (isPost) {
          const { id: postId, category, title, content } = article;
          payload = { postId, category, title, content };
        } else {
          const { guestName, content, post: postId, id: commentId } = article;
          payload = { guestName, content, postId, commentId };
        }

        this.$nextTick(() => {
          this.updateAmendValue(payload);
        });

        !!isPost && (this.currentTab = 'publish');
      },

      async handleCancel () {
        let confirmMsg;
        try {
          confirmMsg = await this.$confirm('确定离开并放弃正在编辑的文章？', {
            type: 'warning',
            center: true,
            title: '警告',
            confirmButtonText: '依然离开',
            cancelButtonText: '返回'
          });
          this.$nextTick(() => {
            this.cleanData();
          });
        } catch (e) {
          !!isPost && this.$nextTick(() => {
            this.currentTab = 'publish';
          });
        }
        // 返回的结果用于文章编辑时发生路由跳转的判断
        return confirmMsg;
      },

      handleSubmit () {
        this.cleanData();
      }
    }
  };
};
