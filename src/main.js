import Vue from 'vue'
import router from "./router/router";
import App from './App.vue';
import fastClick from 'fastclick'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import { Swiper as SwiperClass, Pagination, Mousewheel, Autoplay } from 'swiper/swiper.esm'
import getAwesomeSwiper from 'vue-awesome-swiper/dist/exporter'

// Swiper modules
SwiperClass.use([Pagination, Mousewheel, Autoplay])

// -------------------------------------------------

// Global use
Vue.use(getAwesomeSwiper(SwiperClass))
import 'swiper/swiper-bundle.css'


Vue.config.productionTip = false
fastClick.attach(document.body)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
