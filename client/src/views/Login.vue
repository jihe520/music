<template>
  <el-row type="flex" justify="center" align="middle" style="height: 100vh;">
    <el-col :xs="20" :sm="16" :md="12" :lg="8" :xl="6">
      <el-card class="box-card">
        <!-- 卡片头部 -->
        <template #header>
          <div class="card-header">
            <span>Music 播放系统登录</span>
          </div>
        </template>

        <!-- 登录表单 -->
        <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="80px">
          <el-form-item label="用户名" prop="username">
            <el-input v-model="loginForm.username" placeholder="请输入用户名">
            </el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input
              type="password"
              v-model="loginForm.password"
              placeholder="请输入密码"
              @keyup.enter="submitForm('loginForm')"
            >
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')" class="submit-button">登录</el-button>
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
        password: ''
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
            const response = await login(this.loginForm.username, this.loginForm.password);
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
  background: linear-gradient(135deg, #f5f7fa, #c3cfe2); /* 渐变背景 */
}

.box-card {
  width: 400px;
  border-radius: 10px; /* 圆角 */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* 阴影 */
  animation: fadeIn 0.5s ease-in-out; /* 添加淡入动画 */
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
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.el-form-item {
  margin-bottom: 20px;
}

.submit-button {
  width: 100%;
  background-color: #409EFF;
  border-color: #409EFF;
}

.submit-button:hover {
  background-color: #66B1FF;
  border-color: #66B1FF;
}

.register-link {
  text-align: center;
}
</style>