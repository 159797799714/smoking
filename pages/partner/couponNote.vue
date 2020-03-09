<template>
  <view class="p-30 main">
    <view class="t-r">
      <text class="fl col-90f f-32" @click="goStatistics">统计></text>
      <text class="col-9 f-28">使用优惠券：{{list.length}}次</text>
    </view>
    <view class="m-t-15 col-9 f-28 t-r">2019年11月</view>
    <view v-if="list.length > 0" class="m-t-30">
      <view v-for="(item, index) in list" :key="index" class="p-re coupon-item dis-flex flex-x-between linear-bg">
        <view class="left-box">
          <view class="col-f">
            <text class="f-32 left-own f-w">￥</text>
            <text class="f-60 f-w">{{item.reduce_price * 100 / 100}}</text>
            <text class="f-26 m-l-10">满{{item.min_price * 100 / 100}}减{{item.reduce_price * 100 / 100}}</text>
          </view>
          <view class="col-13 f-24 line-44 f-w">{{item.coupon_type.text}}</view>
          <view class="f-18 col-13 f-w">{{item.start_time.text}}~{{item.end_time.text}}</view>
        </view>
       <view class="right-box dis-flex flex-dir-col flex-y-center flex-x-center col-f t-c" @click="getCoupon(item.user_coupon_id, index)">
          <view class="circle b-6 dis-flex flex-dir-col flex-x-center flex-y-center">
            <view class="f-20 col-f t-c">已经</view>
            <view class="f-20 col-f t-c">使用</view>
          </view>
        </view>
        
        <view class="num col-f f-22">兑换编号：{{item.exchange_no}}</view>
      </view>
    </view>
    
    <view v-else class="null m-t-30">
      <view class="t-c">
        <text class="iconfont f-130 col-c">&#xe698;</text>
        <view class="m-t-20 f-30 col-c">暂无记录</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default{
    data() {
      return {
        list: ''
      }
    },
    onLoad() {
      this.getDetail()
    },
    methods: {
      getDetail() {
        let that= this
        that.$httpRequest({
          url: that.$api.useCouponList
        }).then(res => {
          that.list= res.data.list
        })
      },
      goStatistics() {
        uni.navigateTo({
          url: './couponStatistics'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main{
    padding-top: 50upx;
    line-height: 1;
  }
  .coupon-item{
    border-radius: 30upx;
    margin-bottom: 60upx;
    .left-box{
      padding: 15upx 0 15upx 65upx;
      letter-spacing: 2upx;
      line-height: 1;
      .left-own{
        margin-left: -30upx;
      }
    }
    .right-box{
      position: relative;
      width: 144upx;
      border-left: 1upx dashed #131313;
      .btn{
        display: inline-block;
        margin-top: 7upx;
        line-height: 26upx;
        width: 100upx;
        border: 1upx solid #fff;
        border-radius: 13upx;
      }
      .circle{
        height: 72upx;
        width: 72upx;
        border-radius: 100%;
      }
      &:before{
        content: '';
        display: block;
        position: absolute;
        top: -6upx;
        left: -6upx;
        height: 15upx;
        width: 15upx;
        border-radius: 100%;
        background: #131313;
      }
      &:after{
        content: '';
        display: block;
        position: absolute;
        bottom: -6upx;
        left: -6upx;
        height: 15upx;
        width: 15upx;
        border-radius: 100%;
        background: #131313;
      }
    }
    .num{
      position: absolute;
      bottom: -30upx;
      left: 65upx;
    }
  }
  .null{
    padding-top: 150upx;
  }
  .linear-bg{
    background:linear-gradient(70deg,#1AB6FC,#525FF7,#BF23F2,#FB00F0);
  }
  .line-44{
    line-height: 44upx;
  }
</style>
