import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { router } from './router'
import 'virtual:uno.css'

import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/reset.css';

import { pinia } from '@/store/index.ts'



const app = createApp(App);

app.use(router).use(Antd).use(pinia)


app.mount('#app');
