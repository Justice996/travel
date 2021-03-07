<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <router-link to="/city">
      <div class="header-right">{{city}}<span class="iconfont arrow-icon">&#xe64a;</span></div>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.header
  display: flex
  height: $headerHeight
  line-height: $headerHeight
  background-color: $bgColor
  color: #fff
  .header-left
    width: 0.64rem
    float: left
    .back-icon
      text-align: center
      font-size: 0.4rem
  .header-input
    flex: 1
    height: 0.64rem
    line-height: 0.64rem
    padding-left: 0.2rem
    background-color: #fff
    margin-top: 0.12rem
    margin-left: 0.2rem
    border-radius: 0.1rem
    color: #cccccc
  .header-right
    color: #ffff
    min-width: 1.04rem
    padding: 0 0.1rem
    float: right
    text-align: center
    .arrow-icon
      margin-left: 0.06rem
      font-size: 0.24rem
</style>
