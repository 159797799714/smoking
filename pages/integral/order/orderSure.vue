<template>
  <view class="orderSure">
    <view class="address-info oh">
      <view class="left-box fl">
        <view class="f-30 col-c line-30">{{address.name}}</view>
        <view class="m-t-30">
          <text v-if="address.district" class="tag_name b-90f col-13 f-24">{{address.district}}</text>
        </view>
      </view>
      <view class="right-box fl">
        <view class="col-c f-24 line-30">{{address.phone}}</view>
        <view class="detail col-c f-28 twolist-hidden">{{address.detail}}</view>
      </view>
    </view>
    <view class="good-info p-30 m-t-15">
      <view class="column-item f-30 col-c oh">
        <text class="fl">颜色规格</text>
        <text class="fr" @click="goBack">更改</text>
      </view>
      
      <view v-for="(item, index) in goods_list" :key="index" class="good-detail m-t-15 oh">
        <view class="good-img fl dis-inline-block">
          <image :src="item.image[0].file_path" mode="aspectFill"></image>
        </view>
        <view class="info-box fl dis-inline-block">
          <view class="good-name f-24 col-c">{{item.goods_name}}</view>
          <view>
            <text class="tag_name b-90f col-13 f-24">{{item.goods_sku.goods_attr?item.goods_sku.goods_attr: '默认'}}</text>
          </view>
          <view class="bottom-num oh">
            <text class="fl f-24 col-f0f">积分{{item.goods_price * 100 / 100}}</text>
            <view class="fr">
              <text class="num  b-9 f-30 col-13">{{item.total_num}}</text>
            </view>
          </view>
        </view>
      </view>
      
      <view class="column-item f-30 col-c oh">
        <text class="fl">商品总额</text>
        <text class="fr">积分{{order_total_price}}</text>
      </view>
      <view class="column-item f-30 col-c oh">
        <text class="fl">运费金额</text>
        <text class="fr">{{express_price}}</text>
      </view>
      <view class="column-item f-30 col-c oh">
        <text class="fl">优惠金额</text>
        <text class="fr">{{order_total_discount}}</text>
      </view>
    </view>
    
    <view class="footer b-33 f-28 col-9">
      <text class="dis-inline-block p-30">(共{{order_total_num}}件)</text>
      <text>总计： 积分{{order_pay_price}}</text>
      <text class="fr sure-btn b-linear-row f-30 col-f t-c" @click="goPuy">确认兑换</text>
    </view>
  </view>
</template>

<script>
  export default{
    data () {
      return {
        opt: {},              // 传递过来的商品参数
        address: {},          // 收货地址
        good: {
          name: '电子烟电子烟',
          norm: '黑色普通版',
          integral: 999,
          num: 1,
          fare: 100
        },
        goods_list: [],            // 商品列表
        order_pay_price: 0,        // 订单需支付金额
        order_total_discount: 0,   // 订单折扣优惠总额
        order_total_num: 0,        // 订单总数
        order_total_price: 0,      // 订单总金额
        express_price: 0,          // 运费
        buyStatus: false,          // 是否点击确认购买
      }
    },
    onLoad(opt) {
      console.log(opt)
      let obj= JSON.parse(opt.obj)
      this.opt= obj
      
      this.getDetail()
    },
    methods: {
      
      // 获取详情信息
      getDetail() {
        let that= this,
          obj= this.opt
        obj.delivery= 10
        let params = {
          url: that.$api.buyNow,
          data: obj
        }
        that.$httpRequest(params).then(res => {
          console.log(res)
          that.address= res.data.address
          that.goods_list= res.data.goods_list
          that.order_pay_price= res.data.order_pay_price
          that.order_total_discount= res.data.order_total_discount
          that.order_total_num= res.data.order_total_num
          that.order_total_price= res.data.order_total_price
          that.express_price= res.data.express_price
        })
      },
      
      // 确认购兑换
      goPuy() {
        uni.showLoading({
          title: '正在提交订单'
        })
        let that= this,
          obj= this.opt
        if(!this.buyStatus) {
          this.buyStatus= true
          obj.delivery= 10
          let params = {
            url: that.$api.buyNow,
            data: obj,
            method: 'POST'
          }
          that.$httpRequest(params).then(res => {
            uni.hideLoading()
            if(res.code === 1) {
              uni.navigateTo({
                url: 'success?num=' + that.order_pay_price + '&order_id=' + res.data.order_id
              })
            } else {
              uni.showToast({
                title: res.msg,
                icon: 'none'
              })
            }
          })
          setTimeout(function() {
            that.buyStatus= false
          }.bind(that), 1000)
        } else {
          uni.showToast({
            title: '请稍后再试',
            icon: 'none'
          })
        }
      },
      // 返回
      goBack() {
        uni.navigateBack({
          delta: 1
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .orderSure{
    line-height: 1;
    .address-info{
      padding: 40upx 30upx;
      border-bottom: 1upx solid #333;
      .left-box,.right-box{
        display: inline-block;
      }
      .left-box{
        .tag_name{
          padding: 0 11upx;
          border-radius: 16upx;
          line-height: 32upx;
        }
      }
      .right-box{
        max-width: 400upx;
        padding-left: 20upx;
        .detail{
          margin-top: 22upx;
          line-height: 40upx;
        }
      }
    }
    .line-30{
      line-height: 28upx;
    }
    .column-item{
      line-height: 66upx;
    }
    .good-detail{
      padding: 30upx 0;
      border-top: 1upx solid #333;
      border-bottom: 1upx solid #333;
      .good-img{
        height: 180upx;
        width: 180upx;
        overflow: hidden;
        &>image{
          width: 100%;
          height: 100%;
        }
      }
      .info-box{
        padding-left: 30upx;
        width: 500upx;
        box-sizing: border-box;
        .good-name{
          height: 70upx;
        }
        .tag_name{
          padding: 0 15upx;
          line-height: 38upx;
          border-radius: 19upx;
        }
        .bottom-num{
          margin-top: 39upx;
          .num{
            display: block;
            padding: 0 35upx;
            line-height: 45upx;
          }
        }
      }
    }
    .footer{
      position: fixed;
      bottom: 0;
      left: 0;
      height: 100upx;
      width: 100%;
      z-index: 10;
      line-height: 100upx;
      .sure-btn{
        display: block;
        height: 100upx;
        width: 217upx;
      }
    }
  }
</style>
