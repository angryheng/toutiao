import Vue from 'vue'
import App from './App.vue'
// 加载 vant
import Vant from 'vant'
import router from './router'
import store from './store'
// 加载 vant 样式库
import 'vant/lib/index.css'

// 加载全局样式
import 'assets/style/index.less'

// 动态设置 rem 基准值
import 'utils/flexible.js'

Vue.config.productionTip = false
// 注册 vant
Vue.use(Vant)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
