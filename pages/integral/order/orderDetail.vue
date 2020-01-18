<template>
  <view v-if="detail" class="orderDetail">
    <view class="t-c f-38 col-90f">{{detail.state_text}}</view>
    
    <view class="m-t-25 t-c f-22 col-f">订单编号：{{detail.order_no}}</view>
    
    <view class="m-t-30 express t-c">
      <view class="fl express-icon">
        <image src="../../../static/img/tabbar/index1.png" mode=""></image>
      </view>
      <view class="express-info t-l f-24 col-9">
        <view class="express-detail twolist-hidden">【深圳市】快件已被签收，如有问题请联
          系快递员：蔡建彬【17756506677】               
        </view>
        <view class="express-time">2019-05-22  09:10:34</view>
      </view>
      <view class="fr left-arrow">
        <text class="iconfont rotate-180 f-20 col-c">&#xe61b;</text>
      </view>
    </view>
    
    <view v-for="item in detail.goods" :key="item" class="good-detail m-t-15 oh">
      <view class="good-img fl dis-inline-block">
        <image :src="item.image.file_path" mode="aspectFill"></image>
      </view>
      <view class="info-box fl dis-inline-block">
        <view class="good-name f-24 col-c">{{item.goods_name}}</view>
        <view>
          <text class="tag_name b-90f col-13 f-24">{{item.goods_attr?item.goods_attr: '默认'}}</text>
        </view>
        <view class="bottom-num oh">
          <text class="fl f-24 col-f0f">积分{{item.goods_price}}</text>
        </view>
        <view class="num t-r f-30 col-c">X{{item.total_num}}</view>
      </view>
    </view>
    
    <view class="column-item f-30 col-c oh">
      <text class="fl">商品金额</text>
      <text class="fr">积 分{{detail.total_price}}</text>
    </view>
    <view class="column-item f-30 col-c oh">
      <text class="fl">运费金额</text>
      <text class="fr">{{detail.express_price}}</text>
    </view>
    <view class="column-item f-30 col-c oh">
      <text class="fl">优惠金额</text>
      <text class="fr">{{detail.coupon_price}}</text>
    </view>
  </view>
</template>

<script>
  export default{
    data() {
      return {
        order_id: '',
        detail: '',
        good: {
          name: '电子烟电子烟',
          norm: '黑色普通版',
          integral: 999,
          num: 1,
          fare: 100
        }
      }
    },
    onLoad(opt) {
      this.order_id= opt.order_id
      this.getDetail(opt.order_id)
    },
    methods: {
      
      // 获取订单详情
      getDetail(id) {
        let that= this,
          params = {
            url: that.$api.orderDetail,
            data: {
              order_id: id
            }
          }
        that.$httpRequest(params).then(res => {
          console.log(res)
          that.detail= res.data.order
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .orderDetail{
    padding-top: 35upx;
    line-height: 1;
    .express{
      position: relative;
      padding: 24upx 60upx 45upx;
      .express-icon{
        display: inline-block;
        margin-top: 39upx;
        height: 50upx;
        width: 50upx;
        &>image{
          height: 100%;
          width: 100%;
        }
      }
      .express-info{
        display: inline-block;
        width: 430upx;
        line-height: 42upx;
      }
      .left-arrow{
        display: inline-block;
        position: absolute;
        top: 50%;
        right: 60upx;
        transform: translateY(-50%);
        height: 20upx;
        width: 20upx;
        &>image{
          height: 100%;
          width: 100%;
        }
      }
    }
    .good-detail{
      padding: 30upx;
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
          height: 50upx;
        }
        .tag_name{
          padding: 0 15upx;
          line-height: 38upx;
          border-radius: 19upx;
        }
        .bottom-num{
          margin: 26upx 0;
        }
        .num{
          padding-right: 90upx;
        }
      }
    }
    .column-item{
      padding: 0 30upx;
      line-height: 66upx;
    }
  }
  
</style>
