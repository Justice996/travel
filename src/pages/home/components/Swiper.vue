<template>
  <div class="wrapper">
    <swiper ref="mySwiper"
            :options="swiperOptions">
      <swiper-slide v-for="item in swiperList"
                    :key="item.id">
        <img class="swiper-img"
             :src="item.imgUrl"
             alt=""
             srcset="">
      </swiper-slide>
      <div class="swiper-pagination"
           slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeSwiper',
  data() {
    return {
      // notNextTick: true,
      swiperOptions: {
        autoplay: true,
        loop: true,
        pagination: {
          el: '.swiper-pagination'
        },
        // Some Swiper option/callback...
      },
      swiperList: [{
        id: '001',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg'
      }, {
        id: '002',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/9e/21df651e19af5d.jpg_r_640x214_3ea5bb38.jpg'
      }, {
        id: '003',
        imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg'
      }]
    }
  },
  mounted() {
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
}
</script>
<style lang="stylus" scoped>
.wrapper
  width: 100%
  background-color: #eee
  .swiper-img
    width: 100%
.swiper-container
  --swiper-pagination-color: #fff
</style>

