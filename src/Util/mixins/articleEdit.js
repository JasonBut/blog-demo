import { mapState, mapMutations } from 'vuex';
import { Types } from '@/Store';

const postHooks = function ({ tabDataName, editorTab }) {
  return {
    watch: {
      // 从编辑器活动页切换回列表页会询问是否清楚数据
      currentTab (to, from) {
        !!(to === editorTab) && (this.setEditStatus('NEW'));
        !!(from === editorTab && this.publishing) && (this.handleCancel());
      }
    },

    async beforeRouteLeave (to, from, next) {
      // 从编辑器跳转到其他页面时触发
      if (this[tabDataName] === editorTab && this.publishing) {
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
};

export default (articleType, options) => {
  if (!articleType) { throw new Error(`The type of article must be provided!`); }

  const type = articleType.toLowerCase();

  if (type === 'post' && !options) {
    throw new Error(`Please provide articleEdit options while editing post!`);
  }

  if (type !== 'post' && type !== 'comment') {
    throw new Error(`The type should only be 'post' or 'comment'`);
  }

  const isPost = (type === 'post');
  const { tabDataName, mainTab, editorTab } = isPost && options;

  return {
    // 如果是编辑博文,则混入相关的钩子函数
    mixins: [ isPost ? postHooks(options) : {} ],
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

      // 切换组件当前页
      toggleTab (tab) {
        this[tabDataName] = tab;
      },

      // 清理数据
      cleanData () {
        this.setEditStatus('CANCEL');
        this.cleanAmendValue();
        !!isPost && this.toggleTab(mainTab);
      },

      // 点击编辑按钮后的操作
      handleEdit (article) {
        if (this.editingArticle || this.publishing) {
          return this.$message.error('正在编辑文章中，请先取消或保存再进行操作！');
        }
        this.setEditStatus('EDIT');

        // 根据当前编辑的内容生成payload
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

        // PostList组件的活动页切换
        !!isPost && this.toggleTab(editorTab);
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
          // PostList组件的活动页切换
          !!isPost && this.$nextTick(() => {
            this.toggleTab(editorTab);
          });
        }
        // 返回的结果用于文章编辑时路由离开前的导航守卫判断
        return confirmMsg;
      },

      handleSubmit () {
        this.cleanData();
      }
    }
  };
};
