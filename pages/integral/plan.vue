<template>
  <view class="plan">
    <view class="t-r f-32 col-9">打卡规则</view>
    <view class="progress-circle">
      <view class="small-circle b-13 col-90f">
        <view class="day t-c f-130">{{detail.clock_in_days}}
          <view class="small-word f-20">
            <view>连续</view>
            <view>DAY</view>
          </view>
        </view>
      </view>
    </view>
    
    <view class="t-c f-30 col-9">加入我们，坚持打卡</view>
    <view class="m-t-20 t-c f-30 col-9">无论是健身 戒烟 早起</view>
    
    <view class="m-t-30 t-c">
      <view :class="{'sign-btn f-40 col-f': true,'b-linear': detail.is_clock === 'no', 'b-9 col-13': detail.is_clock === 'yes'}" @click="goRelease(detail.is_clock)">{{detail.is_clock === 'yes'? '已打卡':'今日打卡' }}</view>
    </view>
    <view class="m-t-30 t-c f-30 col-6">还有{{31 - detail.clock_in_days}}天就可以领取奖励</view>
    
    <view class="section-title t-c f-32 col-c">打卡墙</view>
    <view class="article">
      <articleList :articleList="detail.list.data"/>
    </view>
  </view>
</template>

<script>
  import articleList from '../components/articleList.vue'
  export default {
    components: {
      articleList: articleList
    },
    data () {
      return {
        detail: {
          clock_in_days: 0,
          is_clock: ''
        },                 // 打卡详情
      }
    },
    onLoad() {
      this.getDetail()
    },
    methods: {
      
      getDetail() {
        let that= this
        let params = {
          url: that.$api.clockInPage
        }
        that.$httpRequest(params).then(res => {
          console.log(res)
          that.detail= res.data
          
        })
      },
      
      // 去打卡
      goRelease(status) {
        if(status === 'yes') {
          uni.showToast({
            title: '今天已经打过卡了哦',
            icon: 'none'
          })
          return
        }
        uni.navigateTo({
          url: '../index/release/release?type=Clock_in'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .plan{
    padding: 0 30upx;
    line-height: 1;
  }
  .progress-circle{
    height: 282upx;
    width: 282upx;
    padding: 25upx;
    margin: 67upx auto;
    box-sizing: border-box;
    border-radius: 100%;
    background:linear-gradient(rgba(82,95,247,1),rgba(251,0,240,1));
    .small-circle{
      position: relative;
      height: 100%;
      width: 100%;
      border-radius: 100%;
      background: #131313;
    }
  }
  .f-130{
    font-size: 130upx;
    line-height: 232upx;
  }
  .small-word{
    display: inline-block;
    line-height: 24upx;
  }
  .sign-btn{
    display: inline-block;
    padding: 18upx 15upx;
    border-radius: 38upx;
  }
  .section-title{
    margin: 80upx 0 52upx;
  }
</style>

