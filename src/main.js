import Vue from 'vue'
import Home from '@/views/home.vue'
import router from './router'
new Vue({
  render: h => h(Home),
  router
}).$mount('#app')
