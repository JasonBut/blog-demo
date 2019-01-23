<template>
  <div>
    <!--评论模式下才渲染此按键-->
    <el-button
        v-if="comment"
        icon="el-icon-edit"
        @click="$emit('update:active',$event = !active)"
        plain>
      {{ active ? '取消' :  '评论' }}
    </el-button>

    <transition name="el-zoom-in-top">
      <!--非文章模式下需要根据active状态判断是否渲染-->
      <el-card v-if="!!( post || amend ) || active">
        <el-form ref="publishForm" :model="formData" :rules="rules">

          <!--文章模式渲染分组选择器-->
          <el-form-item v-if="!comment" prop="selectedCategory" label="分组 ：">
            <el-select
                :value="selectedCategory"
                @input="$emit('update:selectedCategory',$event)"
                placeholder="请选择分组"
            >
              <el-option
                  v-for="option of categoryWithoutAbout"
                  :key="option.label"
                  :label="option.cname"
                  :value="option.name"
              />
            </el-select>
          </el-form-item>

          <!--文章模式渲染标题文本框-->
          <el-form-item v-if="!comment" prop="title" label="标题 ：">
            <el-input
                :value="title"
                @input="$emit('update:title',$event)"
                placeholder="请输入标题"
                autofocus
            />
          </el-form-item>

          <!--评论模式渲染访客名文本框-->
          <el-form-item v-else label="访客名字 ：" prop="guestName" autofocus>
            <el-input
                class="name"
                :value="guestName"
                @input="$emit('update:guestName',$event)"
                placeholder="请输入访客名称"
                size="small"
                autofocus
            />
          </el-form-item>

          <el-form-item prop="content">
            <VueEditor
                :id="id"
                class="editor"
                :value="content"
                @input="$emit('update:content',$event)"
            />
          </el-form-item>

          <el-form-item>
            <el-button
                icon="el-icon-edit"
                native-type="submit"
                @click.prevent="$emit('onPublish',$refs.publishForm)"
                plain
            >
              {{ amend ? '修改' : '发布' }}
            </el-button>
            <el-button
                v-if="amend || post"
                icon="el-icon-delete"
                @click="$emit('onCancel')"
                plain
            >
              放弃
            </el-button>
          </el-form-item>

        </el-form>
      </el-card>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'EditorUI',
  props: {
    id: String,
    selectedCategory: String,
    title: String,
    guestName: String,
    comment: Boolean,
    amend: Boolean,
    post: Boolean,
    active: Boolean,
    categoryWithoutAbout: Array,
    formData: {
      type: Object,
      required: true
    },
    rules: {
      type: Object,
      required: true
    },
    content: {
      type: String,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.el-button{
  left: 80%;
  @include transparent-item-hover($front-item-hover-fill);
}
.el-card{
  margin-top: 5%;
  .el-button{
    left: 2%;
  }
}

</style>
