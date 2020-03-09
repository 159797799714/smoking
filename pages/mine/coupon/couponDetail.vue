<template>
  <view class="p-30 line-1">
    <view class="qrimg">
      <tki-qrcode
      ref="qrcode"
      :val="val"
      :size="350"
      :unit="'upx'"
      :background="'#131313'"
      :foreground="'#fff'"
      :pdground="'#fff'"
      :onval="true"
      :showLoading="true"
      :loadingText="'二维码生成中'"
      @result="makeOver" />
    </view>
    <view class="m-t-15 f-26 col-9 t-c">优惠券二维码</view>
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
  </view>
</template>

<script>
  import tkiQrcode from "../../components/qrcode/tki-qrcode.vue"
  export default{
    components: {
      tkiQrcode
    },
    data() {
      return {
        user_coupon_id: '',              // 用户优惠券ID
        detail: '',
        val: '',                       // 二维码内容
      }
    },
    onLoad(opt) {
      let that= this
      that.user_coupon_id= opt.id
      that.getDetail(opt.id)
    },
    methods: {
      
      getDetail(id) {
        let that= this,
          params= {
            url: that.$api.couponDetail,
            data: {
              user_coupon_id: id
            }
          }
        that.$httpRequest(params).then(res => {
          that.detail= res.data.detail
          that.val= res.data.detail.jump_url
          
          that.$refs.qrcode._makeCode()
        })
      },
      
      makeOver(e) {
        console.log(e)
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
</style>
