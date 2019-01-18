<template>
  <div>
    <el-button v-if="comment" icon="el-icon-edit" @click="active = !active" plain>
      {{ active ? '取消' :  '评论' }}
    </el-button>

    <transition name="el-zoom-in-top">
      <el-card v-if="post || active">
        <el-form ref="publishForm" :model="formData" :rules="rules">

          <el-form-item v-if="!comment" prop="selectedCategory" label="分组 ：">
            <el-select
                v-model="formData.selectedCategory"
                placeholder="请选择分组"
            >
              <el-option
                  v-for="option of categoryWithoutAbout"
                  :key="option.name"
                  :label="option.cname"
                  :value="option.path"
              />
            </el-select>
          </el-form-item>

          <el-form-item v-if="!comment" prop="title" label="标题 ：">
            <el-input
                v-model="formData.title"
                placeholder="请输入标题"
                autofocus
            />
          </el-form-item>

          <el-form-item v-else label="访客名字 ：" prop="guestName" autofocus>
            <el-input
                class="name"
                v-model="formData.guestName"
                placeholder="请输入访客名称"
                size="small"
                autofocus
            />
          </el-form-item>

          <el-form-item prop="content">
            <VueEditor
                :id="id"
                class="editor"
                v-model="formData.content"
            />
          </el-form-item>

          <el-form-item>
            <el-button icon="el-icon-edit" native-type="submit" @click.prevent="handlePublish"  plain>
              {{ amend ? '修改' : '发布' }}
            </el-button>
          </el-form-item>
        </el-form>

      </el-card>
    </transition>

  </div>
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
    const { post, amend, categoryWithoutAbout } = this;
    if (!!(post || amend) && categoryWithoutAbout.length < 1) {
      this.getData({
        target: 'categories'
      });
    }
  },

  methods: {
    ...mapActions(['getData', 'sendData']),
    handlePublish () {
      this.$refs.publishForm.validate((valid) => {
        let [, category, postId] = this.$route.path.split('/');

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
          console.log(payload);
          this.sendData(payload);
        }
      });
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
