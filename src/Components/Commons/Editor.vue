<template>
  <div>
    <el-button icon="el-icon-edit" @click="active = !active" plain>
      {{ active ? '取消' : ( comment ? '评论' : '发表' ) }}
    </el-button>

    <transition name="el-zoom-in-top">
      <el-card v-if="active">
        <el-form ref="publishForm" :model="formData" :rules="rules" autofocus>

          <el-form-item v-if="!comment" prop="title">
            <el-input
                v-model="formData.title"
                placeholder="请输入标题"
            />
          </el-form-item>

          <el-form-item v-else label="访客名字 : " prop="guestName" label-width="7em" autofocus>
            <el-input
                class="name"
                v-model="formData.guestName"
                placeholder="请输入用户名"
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
export default {
  name: 'Editor',

  props: {
    id: String,
    comment: Boolean,
    amend: Boolean
  },

  data () {
    return {
      active: false,
      formData: {
        guestName: '',
        title: '',
        content: ''
      },
      rules: {
        title: [
          { required: true, message: `请输入标题!`, trigger: 'blur' },
          { min: 5, max: 30, message: `标题长度介乎于5-30个字符之间` }
        ],
        guestName: [
          { required: true, message: `请输入访客名!`, trigger: 'blur' },
          { min: 3, max: 10, message: `用户名长度介乎于3-10个字符之间`, trigger: 'blur' }
        ],
        content: [
          { required: true, message: `请输入内容!`, trigger: 'blur' },
          { min: 15, message: `内容字数不得少于15个字符`, trigger: 'blur' }
        ]
      }
    };
  },

  methods: {
    handlePublish () {
      this.$refs.publishForm.validate((valid) => {
        const [, category, postId] = this.$route.path.split('/');
        if (valid) {
          const payload = {
            isAmend: !!this.amend,
            isComment: !!this.comment,
            data: this.formData,
            category,
            postId
          };
          this.$store.dispatch('sendData', payload);
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped>
  .el-button{
    left: 80%;
  }

  .el-card{
    margin-top: 5%;
    .editor{
      @include transparent-background(0.25);
    }
    .el-button{
      left: 2%;
    }
    .el-input.name{
      width: 130px;
    }
  }
</style>
