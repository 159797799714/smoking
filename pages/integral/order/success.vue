<template>
  <view class="success">
    <!-- 头部 -->
    <topBar :isindex="true"/>
    
    <view class="m-t-30 t-l p-30 f-30 col-c" @click="achieve">完成</view>
    <view class="imgBox t-c">
      <image src="../../../static/img/success.png" class="banner"></image>
      <view class="m-t-30 f-50 col-f t-c">兑换成功</view>
      <view class="m-t-30 f-28 col-9 t-c">实付7000积分</view>
      <view class="btn">
        <text class="b-90f f-30 col-c" @click="achieve">返回首页</text>
        <text class="b-90f f-30 col-c" @click="orderDetail">查看订单</text>
      </view>
    </view>
    
    <view class="footer b-linear-row t-c col-f">
      <view class="share f-30">分享有礼</view>
      <view class="f-24">(分享领积分  优惠齐分享)</view>
    </view>
  </view>
</template>

<script>
  import topBar from '../../components/topBar.vue'
  export default {
    components: {
      topBar: topBar
    },
    methods: {
      // 完成，返回首页
      achieve() {
        console.log('点击了完成')
        uni.switchTab({
          url: '../integral'
        })
      },
      orderDetail() {
        uni.navigateTo({
          url: 'orderDetail'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .success{
    line-height: 1;
    .imgBox{
      margin: 63upx auto 0;
      padding: 50upx 0 120upx;
      width: 587upx;
      border: 2upx solid #9900ff;
      border-radius: 30upx;
    }
    .banner{
      height: 393upx;
      width: 316upx;
      display: inline-block;
    }
    .btn{
      margin-top: 100upx;
      &>text{
        padding: 0 24upx;
        line-height: 38upx;
        border-radius: 19upx;
      }
      text:first-child{
        margin-right: 60upx;
      }
    }
    .footer{
      position: absolute;
      bottom: 0;
      left: 0;
      height: 100upx;
      width: 100%;
      .share{
        line-height: 40upx;
        margin-top: 12upx;
      }
    }
  }
</style>