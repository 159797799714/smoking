<template>
  <view v-if="detail" class="p-30 line-1">
    <view class="coupon-info linear-bg">
      <view class="coupon-item dis-flex flex-x-between linear-bg">
        <view class="left-box">
          <view class="col-f">
            <text class="f-32 left-own f-w">￥</text>
            <text class="f-60 f-w">{{detail.reduce_price * 100 / 100}}</text>
            <text class="f-26 m-l-10">满{{detail.min_price * 100 / 100}}减{{detail.reduce_price * 100 / 100}}</text>
          </view>
          <view class="col-13 f-24 line-44 f-w">{{detail.coupon_type.text}}</view>
          <view class="f-18 col-13 f-w">{{detail.start_time.text}}~{{detail.end_time.text}}</view>
        </view>
      </view>
    </view>
    
    <view class="m-t-15 f-26 col-9 t-c">优惠券</view>
    <view class="col-f0f f-60 t-c title">满{{detail.min_price * 100 / 100}}减{{detail.reduce_price* 100 / 100}}元券
      <view class="m-t-15 f-24 col-9 t-c">{{detail.coupon_type.text}}  仅限线下店铺使用</view>
    </view>
    <view class="f-26 col-9 line-40">使用规则</view>
    <view class="f-26 col-9 line-40">1.爱绚全系列产品（周边配件和赠品除外)满{{detail.min_price * 100 / 100}}元可以抵现</view>
    <view class="f-26 col-9 line-40">3.一笔订单只可以使用一张优惠券，不可叠加，不可兑换现金。</view>
    <view class="f-26 col-9 line-40">4.非正常渠道获得该券，取消一切核销资格。</view>
    
    <view class="f-26 col-9 line-40">使用期限</view>
    <view class="f-26 col-9 line-40">使用期限 仅限{{detail.start_time.text}}-{{detail.end_time.text}}期间有效。</view>
    
    <view class="f-26 col-9 line-40">适用门店</view>
    <view class="f-26 col-9 line-40">使用于部分门店，详情请咨询商家。 </view>
    
    <view :class="{'footer f-30 col-f t-c': true, 'b-linear-row': !isSure, 'b-33': isSure} " @click="sureUse">确认使用</view>
  </view>
</template>

<script>
  export default{
    data() {
      return {
        user_coupon_id: '',              // 用户优惠券ID
        detail: '',
        url: '',
        params: '',
        isSure: false
      }
    },
    onLoad(opt) {
      let that= this
      if(opt.params) {
        that.params= JSON.parse(opt.params)
        that.getDetail(that.params)  
      }
      that.getDetail(that.params) 
    },
    methods: {
      
      getDetail(params) {
        let that= this
        that.$httpRequest({
          url: that.$api.userCouponDetails,
          data: {
            user_coupon_id: params.user_coupon_id
          }
        }).then(res => {
          console.log(res.data.detail)
          that.detail= res.data.detail
        })
      },
      
      // 确认使用
      sureUse() {
        uni.showLoading({
          title: '兑换中'
        })
        let that= this
        if(!that.isSure) {
          that.isSure= true
          that.$httpRequest({
            url: that.$api.confirmUseCoupon,
            data: {
              user_coupon_id: that.params.user_coupon_id
            }
          }).then(res => {
            uni.hideLoading()
            uni.navigateBack({
              delta: 1,
              success: function() {
                uni.showToast({
                  title: '兑换成功'
                })
              }
            })
          })
          setTimeout(function() {
            that.isSure
          }, 500)
        }
      }
      
    }
  }
</script>

<style lang="scss" scoped>
  .line-1{
    line-height: 1;
  }
  .qrimg{
    width: 353upx;
    height: 353upx;
    margin: 49upx auto 0;
  }
  .title{
    margin: 40upx 0 190upx;
  }
  .line-40{
    line-height: 40upx;
    letter-spacing: 1upx;
  }
  .line-44{
    line-height: 44upx;
  }
  .linear-bg{
    background:linear-gradient(70deg,#1AB6FC,#525FF7,#BF23F2,#FB00F0);
  }
  .coupon-info{
    margin: 220upx 47upx 0;
    padding: 2upx;
    
  }
  .coupon-item{
    border: 20upx solid #131313;
    .left-box{
      padding: 15upx 0 15upx 40upx;
      letter-spacing: 2upx;
      line-height: 1;
      .left-own{
        margin-left: -30upx;
      }
    }
  }
  .footer{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100upx;
    line-height: 100upx;
  }
</style>
