<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom"
          v-for=" item in recommendList"
          :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl"
               alt=""
               class="item-img">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeWeekend',
  data() {
    return {
      recommendList: [{ id: '0001', imgUrl: 'https://imgs.qunarzz.com/sight/source/1505/aa/7baaf8a851d221.jpg_r_640x214_1431200f.jpg', title: '军都山滑雪场', desc: '老北京的温柔乡，北京签到地' }, { id: '0002', imgUrl: 'https://imgs.qunarzz.com/sight/source/1811/63/808c022b285a2c.jpg_r_640x214_ad984479.jpg', title: '军都山滑雪场', desc: '老北京的温柔乡，北京签到地' }, { id: '0003', imgUrl: 'https://imgs.qunarzz.com/sight/source/1507/de/e6ba44d61894c0.jpg_r_640x214_847324d0.jpg', title: '军都山滑雪场', desc: '老北京的温柔乡，北京签到地' }]
    }
  }

}
</script>
<style lang="stylus" scoped>
@import '~styles/mixins.styl'
.recommend-title
  margin-top: 0.2rem
  line-height: 0.8rem
  background-color: #eee
  text-indent: 0.2rem
.item-img-wrapper
  overflow: hidden
  height: 0
  padding-bottom: 33.9%
  .item-img
    width: 100%
.item-info
  padding: 0.1rem
.item-title
  line-height: 0.54rem
  font-size: 0.32rem
  ellipsis()
.item-desc
  line-height: 0.4rem
  color: #ccc
  ellipsis()
</style>