import Vue from 'vue'
import App from './App.vue'
import router from './router.js'

Vue.config.productionTip = false

let ab = new Vue({
  render: h => h(App),
	router
}).$mount('#app')

// $route 就是当前页面的路由
// $router 就是整个项目的路由信息
console.log(ab.$route, ab.$router.options.routes)
