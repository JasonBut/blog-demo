<template>
  <div>
    <el-button icon="el-icon-edit" @click="active = !active" plain>
      {{ active ? '取消' : ( comment ? '评论' : '发表' ) }}
    </el-button>

    <transition name="el-zoom-in-top">
      <el-card v-if="active">
        <VueEditor id="myEditor" v-model="value" />
        <el-button icon="el-icon-edit"  plain>
          {{ comment ? '评论发表' : '发表博文' }}
        </el-button>
      </el-card>
    </transition>

  </div>
</template>
<script>
export default {
  name: 'Editor',

  props: {
    placeholder: String,
    defaultOpen: String,
    comment: Boolean
  },

  data () {
    return {
      value: '',
      active: true,
      baseToolbar: {
        bold: true, // 粗体
        italic: true, // 斜体
        header: true, // 标题
        underline: true, // 下划线
        strikethrough: true, // 中划线
        mark: true, // 标记
        quote: true, // 引用
        ol: true, // 有序列表
        ul: true, // 无序列表
        link: true, // 链接
        imagelink: true, // 图片链接
        code: true, // code
        table: true, // 表格
        undo: true, // 上一步
        redo: true, // 下一步
        trash: true, // 清空
        save: true, // 保存（触发events中的save事件）
        alignleft: true, // 左对齐
        aligncenter: true, // 居中
        alignright: true, // 右对齐
        preview: true // 预览
      }
    };
  },
  computed: {
    fullToolbar () {
      return {
        ...this.baseToolbar,
        fullscreen: true, // 全屏编辑
        readmodel: true, // 沉浸式阅读
        htmlcode: true, // 展示html源码
        navigation: true, // 导航目录
        subfield: true, // 单双栏模式
        superscript: true, // 上角标
        subscript: true, // 下角标
        help: true // 帮助
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.el-button{
  @include button-position(80%)
}
.el-card{
  margin-top: 5%;
  #myEditor{
    @include opacity-background(0.35);
  }
  .el-button{
    @include button-position(2%)
  }
}
</style>
