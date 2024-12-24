import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // 引入路由
import ElementPlus from 'element-plus'; // 如果你使用 Element Plus
import 'element-plus/dist/index.css';

const app = createApp(App);

app.use(router); // 使用路由
app.use(ElementPlus); // 使用 Element Plus

app.mount('#app');