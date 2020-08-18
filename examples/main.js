import Vue from 'vue'
import App from './App.vue'
import ZXOUI from '../packages'

Vue.config.productionTip = false
Vue.use(ZXOUI)

new Vue({
  render: h => h(App)
}).$mount('#app')
