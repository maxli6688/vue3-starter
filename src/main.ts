import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import store from './stores/vuexStore'

import './assets/main.css'
import 'ant-design-vue/dist/antd.css'; // or 'ant-design-vue/dist/antd.less'
// import DatePicker from 'ant-design-vue/lib/date-picker'; // 加载 JS
// import 'ant-design-vue/lib/date-picker/style/css'; // 加载 CSS
// // import 'ant-design-vue/lib/date-picker/style';         // 加载 LESS
const app = createApp(App)

// app.use(createPinia())
app.use(router)
app.use(store)

app.mount('#app')
