<template>
  <div>
    <div class="recommend-title">热销推荐</div>
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
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data() {
    return {
      recommendList: [{ id: '0001', imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg', title: '军都山滑雪场', desc: '老北京的温柔乡，北京签到地' }, { id: '0002', imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg', title: '军都山滑雪场', desc: '老北京的温柔乡，北京签到地' }, { id: '0003', imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg', title: '军都山滑雪场', desc: '老北京的温柔乡，北京签到地' }]
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
.item
  overflow: hidden
  display: flex
  height: 1.9rem
  .item-img
    width: 1.7rem
    height: 1.7rem
    padding: 0.1rem
  .item-info
    min-width: 0
    flex: 1
    padding: 0.1rem
    .item-title
      line-height: 0.54rem
      font-size: 0.32rem
      ellipsis()
    .item-desc
      line-height: 0.4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height: 0.44rem
      margin-top: 0.16rem
      padding: 0 0.2rem
      background: #ff9300
      border-radius: 0.06rem
      color: #fff
</style>