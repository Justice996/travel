import Vue from 'vue'
import router from "./router/router";
import App from './App.vue';
import fastClick from 'fastclick'
import './assets/styles/reset.css'
import './assets/styles/border.css'


Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
