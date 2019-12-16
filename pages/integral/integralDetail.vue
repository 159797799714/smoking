<template>
  <view class="integralDetail">
    <view class="t-r f-32 col-9" @click="goRules">积分规则</view>
    <view class="t-c f-30 col-9">当前积分</view>
    <view class="m-t-25 t-c f-44 f-w linear-word">{{detail.integral_total}}</view>
    <view class="today-experience">
      <view class="f-30 col-f">今日经验
        <text class="f-20 col-6"> (还有{{detail.today_get_integral_limit_total - detail.today_get_integral_total}}经验可获得）</text>
      </view>
      <view class="detail t-r f-24 col-90f" @click="goDetail">查看详情</view>
      <view class="progress">
        <image src="../../static/img/tabbar/index1.png" mode="widthFix" :style="{'margin-left': left}"/>
        <text class="progress-num f-24 col-f" :style="{'left': left}">{{detail.today_get_integral_total}}</text>
      </view>
    </view>
    <view class="t-c">
      <view class="sign-btn f-40 col-f">签到领积分</view>
    </view>
    
    <view class="order-main">
      <view class="tabs">
        <view v-for="(item, index) in tabs" :key="index" :class="{'tab f-32 col-9': true, 'f-40 col-f0f': tabIndex === index}" @click="selectTab(index)">{{item}}</view>
      </view>
    </view>
    
    <view class="p-left-30">
      <view v-for="(item, index) in menuList.data" :key="index" class="bar f-26 col-9">
        <text class="fl left-describe">{{item.source_describe}}</text>
        <text>积分{{item.type === 'spending'? '-' + item.integral: '+' + item.integral}}</text>
        <text class="fr">{{item.input_date}}</text>
      </view>
    </view>
    
  </view>
</template>

<script>
  export default{
    data () {
      return {
        tabs: ['收支明细', '兑换记录'],
        tabIndex: 0,
        detail: {
          integral_total: 0,
          today_get_integral_limit_total: 100,
          today_get_integral_total: 100
        },
        left: '',
        menuList: {
          total: 1,
          per_page: 15,
          current_page: 1,
          last_page: 1,
          data: []
        }
      }
    },
    onLoad () {
      this.getDetail()
      // 积分明细
      this.getParticulars()
    },
    methods: {
      getDetail() {
        let that= this,
          params= {
            url: that.$api.userIntegralDetails
          }
        that.$httpRequest(params).then(res => {
          that.detail= res.data
          that.left=  res.data.today_get_integral_total / res.data.today_get_integral_limit_total * 100 + '%'
        })
      },
      
      // 获取积分明细列表
      getParticulars() {
        let that= this,
          params= {
            url: that.$api.integralLogs,
            data: {
              type: 'all'
            }
          }
        that.$httpRequest(params).then(res => {
          console.log('积分明细', res)
          that.menuList= res.data.list
        })
      },
      
      // 获取积分明细列表
      getConvertList() {
        let that= this,
          params= {
            url: that.$api.lists,
            data: {
              dataType: 'all'
            }
          }
        that.$httpRequest(params).then(res => {
          console.log('兑换明细', res)
        })
      },
      
      goRules() {
        uni.navigateTo({
          url: './rules'
        })
      },
      goDetail() {
        uni.navigateTo({
          url: '../mine/todayExperience'
        })
      },
      selectTab(index) {
        this.tabIndex = index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .p-left-30{
    padding: 0 30upx;
  }
  .integralDetail{
    padding: 0 30upx;
    line-height: 1;
  }
  .today-experience{
    .detail{
      padding-right: 30upx;
      line-height: 42upx;
    }
    .progress{
      position: relative;
      margin: 0 30upx;
      width: calc(100% - 60upx);
      height: 11upx;
      border-radius: 4upx;
      background:linear-gradient(-90deg,rgba(12,221,254,1),rgba(66,105,248,1),rgba(146,62,244,1),rgba(236,8,241,1));
      .progress-num{
        position: absolute;
        bottom: -30upx;
      }
      &>image{
        padding: 0;
        transform: translateY(-50%);
        height: 25upx;
        width: 25upx;
      }
    }  
  }
  .sign-btn{
    display: inline-block;
    padding: 18upx 15upx;
    margin: 56upx 0 60upx;
    border-radius: 38upx;
    background:linear-gradient(-90deg,rgba(82,95,247,1),rgba(251,0,240,1));
  }
  .tabs{
    .tab{
      display: inline-block;
      width: 50%;
      text-align: center;
      line-height: 84upx;
    }
  }
  .bar{
    height: 62upx;
    width: 100%;
    text-align: left;
    line-height: 62upx;
    border-bottom: 1px solid #333;
  }
  .left-describe{
    width: 280upx;
    text-align: left;
  }
</style>
