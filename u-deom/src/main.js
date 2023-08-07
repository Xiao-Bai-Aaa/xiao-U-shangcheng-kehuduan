import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant'; // 引入vant
import 'vant/lib/index.css'; // 引入vant样式


import * as api from "@/serve/index.js" // 引入api
Vue.prototype.$api = api // 挂载api



Vue.config.productionTip = false
Vue.use(Vant);

import "@/assets/css/reset.css" // 引入重置样式

import 'amfe-flexible' // 引入rem适配


import autoComp from "@/components/index.js"
Vue.use(autoComp) // 注册全局组件



// import com from "@/components/com/com.js" // 引入全局组件
// Vue.use(com) // 注册全局组件




new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
