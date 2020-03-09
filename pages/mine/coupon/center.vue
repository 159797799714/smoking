<template>
  <view class="p-30">
    <view v-if="swiperList && swiperList.length > 0" class="banner">
      <banner :swiperList="swiperList"></banner>
    </view>
    <view class="tabs">
      <view v-for="(item, index) in categorys" :key="index" :class="{'tab-item t-c': true, 'f-32 col-9': item.category_id !== id_default, 'col-f0f f-40': item.category_id === id_default}" @click="selectTab(item.category_id)">{{item.name}}</view>
    </view>
    <view class="couponList">
      <view v-for="(item, index) in list" :key="index" :class="{'coupon-item dis-flex flex-x-between': true, 'linear-bg': !item.is_receive, 'b-6': item.is_receive}">
        <view class="left-box">
          <view class="col-f">
            <text class="f-32 left-own f-w">￥</text>
            <text class="f-60 f-w">{{item.reduce_price * 100 / 100}}</text>
            <text class="f-26 m-l-10">满{{item.min_price * 100 / 100}}减{{item.reduce_price * 100 / 100}}</text>
          </view>
          <view class="col-13 f-24 line-44 f-w">{{item.coupon_type.text}}</view>
          <view v-if="item.expire_type !== 10" class="f-18 col-13 f-w">{{item.start_time.text}}~{{item.end_time.text}}</view>
        </view>
        <view class="right-box dis-flex flex-dir-col flex-y-center flex-x-center col-f t-c" @click="getCoupon(item.coupon_id, index)">
          <view class="f-24">{{item.use_integral}}积分</view>
          <view class="btn f-22 t-c">{{item.is_receive?'已兑换': '兑换'}}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  import banner from '../../components/banner.vue'
  export default{
    components: {
      banner: banner
    },
    data() {
      return {
        swiperList: '',
        categorys: '',
        id_default: '',           // 默认选中第一个分类
        list: ''
      }
    },
    onLoad() {
      this.getBanners()
      this.getCouponList()
    },
    methods: {
      
      // 获取轮播图
      getBanners() {
        let that= this,
          params= {
            url: that.$api.couponBanners
          }
        that.$httpRequest(params).then(res => {
          that.swiperList= res.data.list
        })
      },
      // 选择分类
      selectTab(id) {
        let that= this
        that.id_default= id
        that.getCouponList(id)
      },
      
      // 优惠券列表
      getCouponList(id, type) {
        let that= this,
          params= {
            url: that.$api.couponCenter,
            data: {
              category_id: id? id: '',
              type: type? type: 'all'
            }
          }
        that.$httpRequest(params).then(res => {
          if(!that.categorys) {
            that.categorys= res.data.coupons.categorys
            that.id_default= res.data.coupons.categorys[0].category_id
          }
          that.list= res.data.coupons.list
        })
      },
      
      // 领券
      getCoupon(id, index) {
        let that= this,
          params= {
            url: that.$api.receiveCoupon,
            data: {
              coupon_id: id
            }
          }
        that.$httpRequest(params).then(res => {
          that.list[index].is_receive= true
          uni.showToast({
            title: '兑换成功'
          })
        })
      }
    },
    
    
    
      
  }
</script>

<style lang="scss" scoped>
  text{
    line-height: 1;
  }
  .banner{
    height: 400upx;
    width: 100%;
  }
  .tabs{
    line-height: 140upx;
    overflow: auto;
    .tab-item{
      min-width: 25%;
      display: inline-block;
    }
  }
  .coupon-item{
    border-radius: 30upx;
    margin-bottom: 30upx;
    .left-box{
      padding: 15upx 0 15upx 40upx;
      letter-spacing: 2upx;
      line-height: 1;
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
  }
  .linear-bg{
    background:linear-gradient(70deg,#1AB6FC,#525FF7,#BF23F2,#FB00F0);
  }
  .left-own{
    margin-left: -30upx;
  }
  .line-44{
    line-height: 44upx;
  }
</style>
