<template>
  <view class="orderSure">
    <view class="address-info oh">
      <view class="left-box fl">
        <view class="f-30 col-c line-30">{{address.name}}</view>
        <view class="m-t-30">
          <text class="tag_name b-90f col-13 f-24">{{address.tag_name}}</text>
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
        <text class="fr">更改</text>
      </view>
      
      <view class="good-detail m-t-15 oh">
        <view class="good-img fl dis-inline-block">
          <image src="../../../static/mine/card/china_bg.png" mode="aspectFill"></image>
        </view>
        <view class="info-box fl dis-inline-block">
          <view class="good-name f-24 col-c">{{good.name}}</view>
          <view>
            <text class="tag_name b-90f col-13 f-24">{{good.norm?good.norm: '默认'}}</text>
          </view>
          <view class="bottom-num oh">
            <text class="fl f-24 col-f0f">积分{{good.integral}}</text>
            <view class="fr">
              <text class="num  b-9 f-30 col-13">{{good.num}}</text>
            </view>
          </view>
        </view>
      </view>
      
      <view class="column-item f-30 col-c oh">
        <text class="fl">商品金额</text>
        <text class="fr">积分{{good.integral}}</text>
      </view>
      <view class="column-item f-30 col-c oh">
        <text class="fl">运费金额</text>
        <text class="fr">{{good.fare}}</text>
      </view>
      <view class="column-item f-30 col-c oh">
        <text class="fl">优惠金额</text>
        <text class="fr">0.00</text>
      </view>
    </view>
    
    <view class="footer b-33 f-28 col-9">
      <text class="dis-inline-block p-30">(共1件)</text>
      <text>总计： 积分7000</text>
      <text class="fr sure-btn b-linear-row f-30 col-f t-c" @click="goPuy">确认兑换</text>
    </view>
  </view>
</template>

<script>
  export default{
    data () {
      return {
        address: {
          name: '啦啦啦啦',
          tag_name: '公司',
          phone: 15999991919,
          detail: '广东省深圳市南山区粤海街道xxxxxxxxxxxxxxxxxxxxxx'
        },
        good: {
          name: '电子烟电子烟',
          norm: '黑色普通版',
          integral: 999,
          num: 1,
          fare: 100
        }
      }
    },
    methods: {
      goPuy() {
        uni.navigateTo({
          url: 'success'
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
