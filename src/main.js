import Vue from 'vue'
import App from './App.vue'
import router from './router'
import plugins from '@/plugins'
import '@/style/index.less'
Vue.use(plugins)

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
