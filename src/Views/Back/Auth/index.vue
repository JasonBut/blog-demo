<template>
  <div class="auth">
    <el-dialog
        :visible="true"
        :show-close="false"
        :modal="false"
        custom-class="auth-dialog"
        title="登录"
        top="30vh"
        lock-scroll
        center
    >
      <el-form ref="authLog" :model="authForm" :rules="formValidateRules" >
        <el-form-item label="账号 ：" prop="username">
          <el-input v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="密码 ：" prop="password">
          <el-input type="password" v-model="password"></el-input>
        </el-form-item>

        <p>
          <el-form-item class="auth-button-area">
            <el-button
                native-type="submit"
                @click.prevent="handleAuthSubmit($refs.authLog)"
            >
              登录
            </el-button>
          </el-form-item>

          <el-form-item class="auth-button-area">
            <el-button @click="resetAuthForm">重置</el-button>
          </el-form-item>
        </p>
      </el-form>
    </el-dialog>
  </div>
</template>

<script>
import { createNamespacedHelpers, mapState } from 'vuex';
const { mapMutations, mapActions } = createNamespacedHelpers('Back/Auth');
export default {
  name: 'index',

  computed: {
    ...mapState(['formValidateRules']),
    ...mapState('Back/Auth', ['authForm']),
    username: {
      get () { return this.authForm.username; },
      set (value) { return this.handleAuthChange({ target: 'username', value }); }
    },
    password: {
      get () { return this.authForm.password; },
      set (value) { return this.handleAuthChange({ target: 'password', value }); }
    }
  },

  created () {
    document.title = `登录后台 - Jason's Blog`;
  },

  methods: {
    ...mapMutations({
      handleAuthChange: 'AUTH_FORM_CHANGE'
    }),
    ...mapActions(['sendAuthRequest']),

    resetAuthForm () {
      this.username = this.password = '';
    },

    handleAuthSubmit (ref) {
      ref.validate((valid) => {
        if (valid) {
          const { username, password, resetAuthForm, sendAuthRequest } = this;
          sendAuthRequest({ username, password });
          resetAuthForm();
        }
      });
    }
  }
};
</script>

<style lang="scss">
.auth{
  background: $back-aside-background;
  height: calc(100vh);
  .auth-dialog{
    width: 30%;
    background: $back-content-background-color;
    box-shadow: 1em 1em 3em black;
    border-radius: 10px;
    padding: 1em;
    .el-dialog__title{
      color: $back-text-secondary;
    }
    .el-form{
      color: $back-text-secondary;
      .el-form-item__label{
        @extend .el-form;
      }
      .el-form-item__content{
        text-align: center;
      }
      .el-input{
        @extend .el-form;
        display: inline;
      }
      .el-input__inner{
        @extend .el-form;
        background: white;

        width: 80%;
      }
    }
    p{
      text-align: center;
      .auth-button-area{
        display: inline-block;
        text-align: center;
        margin: 0 1em;
        .el-button{
          color: $back-text-secondary;
        }
      }
    }
  }
}
</style>
