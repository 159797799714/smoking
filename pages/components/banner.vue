<template>
  <view class="banner border-box" :style="borderWidth">
    <swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :circular="true"
      :indicator-active-color="indicatorActiveColor" :interval="interval" :duration="duration">
      <swiper-item v-for="(item, index) in swiperList" :key="index" @click="naviget(item.activity_link)" class="swiper-item">
        <view class="img-bg b-13">
          <image :src="item.image.file_path || item.file_path || item.image" mode="widthFix"></image>
        </view>
      </swiper-item>
    </swiper>
  </view>
</template>

<script>
  export default {
    name: 'banner',
    props: {
      swiperList: Array,
      borderWidth: {
        type: String,
        default: 'padding: 1px'
      }
    },
    data() {
      return {
        indicatorDots: false,
        autoplay: true,
        interval: 5000,
        duration: 1000,
        indicatorActiveColor: '#fff'
      }
    },
    methods: {
      // 轮播图跳转
      naviget(link) {
        // console.log(link)
        let goods = link.indexOf('goods_id=')
        let article = link.indexOf('article_id=')
        let luckydraw = link.indexOf('luckydraw_id=')
        console.log(goods, article, luckydraw)
        if(goods !== -1) {
          uni.navigateTo({
            url: '../components/goodDetail?goods_id=' + link.slice(9)
            // url: 'goodDetail' 
          })
          return
        }
        if(article !== -1) {
          uni.navigateTo({
            url: '../components/shareInfo?article_id=' + link.slice(11)
          })
          return
        }
        if(luckydraw !== -1) {
          uni.navigateTo({
            url: '../zerodraw/zerodraw?luckydraw_id=' + link.slice(13)
          })
          return
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
 .banner{
    height: 100%;
    max-height: 750upx;
    width: 100%;
    background: linear-gradient(to right,#00BFFF, #9933FF, #ff33cc);
    .swiper-item{
      height: 100%;
      width: 100%;
      .img-bg{
        position: relative;
        height: 100%;
        width: 100%;
        &>image{
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          height: 100%;
          width: 100%;
        }
      }
    }
 }
</style>
<style>
  .swiper{
    height: 100%;
    width: 100%;
  }
</style>
