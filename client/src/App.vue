<template>
  <div class="app">
    <header class="header">
      <div class="logo">音乐网站</div>
      <nav class="nav">
        <router-link to="/" class="nav-item">首页</router-link>
        <router-link to="/songlist" class="nav-item">歌单</router-link>
        <router-link to="/singer" class="nav-item">歌手</router-link>
      </nav>
      <div class="user-area">
        <el-button type="primary" size="small">登录</el-button>
      </div>
    </header>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>

<script setup>
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  height: 60px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 0 20px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: #409EFF;
}

.nav {
  margin-left: 40px;
  display: flex;
  gap: 20px;
}

.nav-item {
  text-decoration: none;
  color: #333;
  font-size: 16px;
}

.nav-item:hover {
  color: #409EFF;
}

.user-area {
  margin-left: auto;
}

.main {
  margin-top: 60px;
  flex: 1;
  background-color: #f5f5f5;
}
</style>
