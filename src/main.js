import Vue from 'vue'
import App from './App.vue';//组件入口
import router from './router'
import store from './store'
import "@/utils/filters"
import "@/utils/cache"
import "assets/style/reset.scss"
import "assets/style/common.scss" ;
import "./assets/style/cities.css";


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
