import Vue from 'vue'
import router from "./router/router";
import App from './App.vue';
import fastClick from 'fastclick'
import 'styles//reset.css'
import 'styles//border.css'
import 'styles//iconfont.css'



Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
