<template>
  <div class="icons">
    <swiper ref="mySwiper">
      <swiper-slide v-for="(page,index) in pages"
                    :key="index">
        <div class="icon"
             v-for="item in page"
             :key="item.id">

          <div class="icon-img">
            <img :src="item.imgUrl"
                 class="icon-img-content"
                 alt="">
          </div>
          <p class="icon-desc">{{item.desc}}</p>

        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcons',
  data() {
    return {
      iconList: [{
        id: '001',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
        desc: '热门景点'
      }, {
        id: '002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/7c1e26fd490c3b65c2858fe5da96141c.png',
        desc: '滑雪运动'
      }, {
        id: '003',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/a9d33792bd961b1692638d86cf3e6b83.png',
        desc: '万龙滑雪场'
      }, {
        id: '004',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/5ffcd4a916f764f678263b27c1e2e00c.png',
        desc: '天坛公园'
      }, {
        id: '005',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/557ba25df01d7dbf1419b095a11d1319.png',
        desc: '热门景点'
      }, {
        id: '006',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/7c1e26fd490c3b65c2858fe5da96141c.png',
        desc: '滑雪运动'
      }, {
        id: '007',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/a9d33792bd961b1692638d86cf3e6b83.png',
        desc: '万龙滑雪场'
      }, {
        id: '008',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/5ffcd4a916f764f678263b27c1e2e00c.png',
        desc: '天坛公园'
      }, {
        id: '009',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/5ffcd4a916f764f678263b27c1e2e00c.png',
        desc: '天坛公园'
      }]
    }
  },
  computed: {
    pages() {
      //如果超过八个就开始轮播
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      });
      return pages;
    }
  }
}
</script>
<style lang="stylus" scoped>
@import '~styles/varibles.styl'
@import '~styles/mixins.styl'
.icons >>> .swiper-container
  height: 0
  padding-bottom: 50%
.icons
  margin-top: 0.2rem
  .icon
    position: relative
    overflow: hidden
    float: left
    width: 25%
    height: 0
    padding-bottom: 25%
    .icon-img
      position: absolute
      top: 0
      left: 0
      right: 0
      bottom: 0.44rem
      box-sizing: border-box
      padding: 0.1rem
      .icon-img-content
        display: block
        margin: 0 auto
        height: 100%
    .icon-desc
      position: absolute
      left: 0
      right: 0
      bottom: 0
      height: 0.44rem
      line-height: 0.44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>