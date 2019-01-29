<template>
  <BackCategoryUI
      :list="categoryWithoutAbout"
      :editable="editable"
      v-bind.sync="categoryInfo"
      @on-delete="handleDelete"
      @on-edit="handleEdit"
      @on-save="handleSave"
      @on-cancel="handleCancel"
      @on-add="handleAdd"
  />
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { DeleteDataMixin } from '@/Util/mixins';
export default {
  name: 'BackCategory',
  mixins: [ DeleteDataMixin ],
  components: {
    BackCategoryUI: () => import('./BackCategoryUI')
  },
  data () {
    return {
      editing: '',
      categoryInfo: {
        cname: '',
        label: ''
      }
    };
  },
  computed: {
    ...mapGetters('Back', ['categoryWithoutAbout']),

    // 判断当前项id值是否正在编辑或新增的条目
    editable () {
      return (row) => (this.editing === row.id) || (row.id === null);
    }
  },
  created () {
    /*
    *  因为后台加载时在详情页已经尝试了一次获取分类列表
    *  如store中没有数据,则发送一次请求去获取列表
    */
    if (this.categoryWithoutAbout.length < 1) {
      this.getData({ target: 'categories' });
    }
  },
  methods: {
    ...mapActions(['getData', 'sendData']),

    cleanData () {
      this.editing = '';
      this.categoryInfo = {
        cname: '',
        label: ''
      };
      // 提取最后一项,如果没有id则证明是新增的项目,从列表中删除掉
      const [ lastItem ] = this.categoryWithoutAbout.slice(-1);
      (!lastItem.id) && this.categoryWithoutAbout.pop();
    },

    handleAdd () {
      if (this.editing) {
        return this.$message.error('请先完成现有的条目编辑，再进行操作！');
      }
      this.editing = 'new';
      // 往列表添加一个新项
      this.categoryWithoutAbout.push({
        id: null,
        name: '',
        cname: '',
        label: ''
      });
    },

    handleEdit (item) {
      if (this.editing) {
        return this.$message.error('请先完成现有的条目编辑，再进行操作！');
      }
      const { id, cname, label } = item;
      // 当前条目id设为editing
      this.editing = id;

      this.categoryInfo = { cname, label };
    },

    handleSave (item) {
      const { categoryInfo, categoryInfo: { cname, label } } = this;
      if (cname.length >= 6) {
        return this.$message.error('名称长度不能多于6个字符！');
      }
      if (label.length > 10) {
        return this.$message.error('边栏标签不能多于10个字符！');
      }

      // 生成payload发给sendData action
      this.sendData({
        ...categoryInfo,
        categoryId: item.id,
        name: label.toLowerCase()
      });
      this.cleanData();
    },

    handleCancel () {
      this.cleanData();
    }
  }
};
</script>
