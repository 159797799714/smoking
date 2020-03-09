<template>
  <view class="p-30">
    <view class="f-32 col-9 t-r">优惠券规则</view>
    <view v-if="swiperList && swiperList.length > 0" class="banner m-t-20">
      <banner :swiperList="swiperList"></banner>
    </view>
    <view class="tabs">
      <view v-for="(item, index) in categorys" :key="index" :class="{'tab-item t-c': true, 'f-32 col-9': item.type !== data_type, 'col-f0f f-40': item.type === data_type}" @click="selectTab(item.type, index)">{{item.name}}</view>
    </view>
    <view class="couponList">
      <view v-for="(item, index) in list" :key="index" :class="{'coupon-item dis-flex flex-x-between': true, 'linear-bg': data_type === 'not_use', 'b-6': data_type ==='is_expire', 'b-f0f': data_type === 'is_use' }">
        <view class="left-box">
          <view class="col-f">
            <text class="f-32 left-own f-w">￥</text>
            <text class="f-60 f-w">{{item.reduce_price * 100 / 100}}</text>
            <text class="f-26 m-l-10">满{{item.min_price * 100 / 100}}减{{item.reduce_price * 100 / 100}}</text>
          </view>
          <view class="col-13 f-24 line-44 f-w">{{item.coupon_type.text}}</view>
          <view class="f-18 col-13 f-w">{{item.start_time.text}}~{{item.end_time.text}}</view>
        </view>
        <view class="right-box dis-flex flex-dir-col flex-y-center flex-x-center col-f t-c" @click="getCoupon(item.user_coupon_id, data_index)">
          <view class="circle b-13 dis-flex flex-dir-col flex-x-center flex-y-center">
            <view class="f-20 col-f t-c">{{data_type === 'not_use'? '立即': '已经'}}</view>
            <view v-if="data_type === 'not_use'" class="f-20 col-f t-c">使用</view>
            <view v-else class="f-20 col-f t-c">{{data_type === 'is_use'? '使用': '过期'}}</view>
          </view>
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
        categorys: [{
          name: '未使用',
          type: 'not_use'
        }, {
          name: '已使用',
          type: 'is_use'
        }, {
          name: '已过期',
          type: 'is_expire'
        }],
        data_type: 'not_use',           // 默认选中第一个分类
        data_index: 0,                  // 默认选中第一个索引
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
      selectTab(type, index) {
        let that= this
        that.data_type= type
        that.data_index= index
        that.getCouponList(type)
      },
      
      // 优惠券列表
      getCouponList(type) {
        let that= this,
          params= {
            url: that.$api.myCoupon,
            data: {
              data_type: type?type: 'not_use'
            }
          }
        that.$httpRequest(params).then(res => {
          console.log(res)
          that.list= res.data.list
        })
      },
      
      // 领券
      getCoupon(id, index) {
        let that= this
        if(index > 0) {
          return
        }
        uni.navigateTo({
          url: './couponDetail?id=' + id
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
      min-width: 33%;
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
