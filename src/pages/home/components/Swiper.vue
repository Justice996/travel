<template>
  <div class="wrapper">
    <swiper ref="mySwiper"
            :options="swiperOptions"
            v-if="showSwiper">
      <swiper-slide v-for="item in list"
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
  props: {
    list: Array
  },
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
      }
    }
  },
  mounted() {
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    },
    showSwiper() {
      return this.list.length
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

