<template>
  <div class="list"
       ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
               v-for="item of hot"
               @click="handleCityClick(item.name)"
               :key="item.id">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"
           v-for="(item,key) of cities"
           :key="key"
           :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
               v-for="innerItem of item"
               @click="handleCityClick(innerItem.name)"
               :key="innerItem.id">{{innerItem.name}}</div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import Bscroll from 'better-scroll'
import { mapState, mapMutations } from 'vuex'
export default {
  name: "CityList",
  data() {
    return {
      scroll: ""
    }
  },
  computed: {
    ...mapState({ currentCity: 'city' })
  },
  props: {
    hot: Array,
    cities: Object,
    letter: String
  },
  watch: {
    letter() {
      if (this.letter) {
        const ele = this.$refs[this.letter][0]
        this.scroll.scrollToElement(ele);
      }
      console.log(this.letter);
    }
  },
  methods: {
    handleCityClick(city) {
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  mounted() {

    setTimeout(() => {
      this.scroll = new Bscroll(this.$refs.wrapper, { click: true })
    }, 1000);
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/varibles.styl'
.border-topbottom
  &:after
    border-color: #ccc
  &:before
    border-color: #ccc
.border-bottom
  &:before
    border-color: #ccc
.list
  overflow: hidden
  position: absolute
  top: 1.58rem
  left: 0
  right: 0
  bottom: 0
  .title
    line-height: 0.54rem
    background-color: #eee
    padding-left: 0.2rem
    color: #666
    font-size: 0.26rem
  .button-list
    padding: 0.1rem 0.6rem 0.1rem 0.1rem
    overflow: hidden
    .button-wrapper
      float: left
      width: 33.3%
      .button
        text-align: center
        padding: 0.1rem 0
        margin: 0.1rem
        border: 0.02rem solid #ccc
        border-radius: 0.06rem
  .item-list
    .item
      line-height: 0.76rem
      padding-left: 0.2rem
</style>