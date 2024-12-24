<template>

    <el-row type="flex" justify="center" align="middle" style="height: 100vh;">
      <el-col :xs="20" :sm="16" :md="12" :lg="8" :xl="6">
        <el-card class="box-card" shadow="hover">
          <!-- 卡片头部 -->
          <template #header>
            <div class="card-header">
              <span>Music 播放系统登录</span>
            </div>
          </template>
  
          <!-- 登录表单 -->
          <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" label-position="left">
            <el-form-item label="用户名" prop="username">
              <el-input v-model="loginForm.username" placeholder="请输入用户名" clearable />
            </el-form-item>
            <el-form-item label="密码" prop="password">
              <el-input
                type="password"
                v-model="loginForm.password"
                placeholder="请输入密码"
                @keyup.enter="submitForm('loginForm')"
                clearable
              />
            </el-form-item>  
            <el-form-item>
                <el-checkbox v-model="loginForm.isAdmin">以管理员身份登录</el-checkbox>
            </el-form-item>
            <el-form-item style="text-align: center;">
              <el-button type="primary" @click="submitForm('loginForm')" class="submit-button" round>登录</el-button>
            </el-form-item>
            <el-form-item>
              <div class="register-link">
                <el-link type="primary" @click="goToRegister">没有账号？点击此处注册账号</el-link>
              </div>
            </el-form-item>
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </template>
  
  <script>
  import { login } from '../apis/authApi'; // 引入封装的 login API
  
  export default {
    data() {
      return {
        loginForm: {
          username: '',
          password: '',
          isAdmin: false
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      async submitForm(formName) {
        this.$refs[formName].validate(async (valid) => {
          if (valid) {
            try {
              const response = await login(this.loginForm.username, this.loginForm.password, this.loginForm.isAdmin);
              if (response.success) {
                this.$message.success('登录成功');
                this.$router.push('/home'); // 登录成功后跳转到主页
              } else {
                this.$message.error(response.message);
              }
            } catch (error) {
              this.$message.error('登录失败，请稍后再试');
              console.error(error);
            }
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      goToRegister() {
        this.$router.push('/register'); // 跳转到注册页面
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background: linear-gradient(135deg, #e0eafc, #cfdef3); /* 更改背景渐变 */
  }
  
  .box-card {
    width: 100%;
    max-width: 400px;
    border-radius: 15px; /* 增加圆角 */
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2); /* 增加阴影效果 */
    animation: fadeIn 0.5s ease-in-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .card-header {
    text-align: center;
    font-size: 1.8rem; /* 增加字体大小 */
    font-weight: bold;
    color: #4A4A4A; /* 更改字体颜色 */
  }
  
  .el-form-item {
    margin-bottom: 20px;
  }
  
  .submit-button {
    width: 100%;
    background-color: #409EFF;
    border-color: #409EFF;
    transition: background-color 0.3s, border-color 0.3s, transform 0.2s; /* 添加过渡效果 */
  }
  
  .submit-button:hover {
    background-color: #66B1FF;
    border-color: #66B1FF;
    transform: scale(1.05); /* 增加悬停时的缩放效果 */
  }
  
  .register-link {
    text-align: center;
  }
  </style>