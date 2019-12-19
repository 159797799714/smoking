<template>
  <view class="my-grade">
    <view class="t-c f-44 f-w linear-word">{{detail.level? 'Lv' + detail.level: detail.experience_total}}</view>
    <view class="today-experience m-t-20">
      <view class="f-30 col-f">今日{{type === 'integral'? '积分': '经验'}}
        <text class="f-20 col-6"> (还有{{detail.today_get_experience_limit_total - detail.today_get_experience_total}}经验可获得）</text>
      </view>
      <view class="progress">
        <view class="progress-color-item" :style="{'width': left }"></view>
        <image src="../../static/img/tabbar/index1.png" mode="widthFix"  :style="{'left': left }"/>
        <text class="progress-num f-24 col-f"  :style="{'left': left }">{{detail.today_get_experience_total}}</text>
      </view>
    </view>
    
    <view class="more-power">
      <view class="f-30 col-f">{{type === 'integral'? '积分': '经验'}}明细</view>
      <view class="open-menu">
        <view v-for="(item, index) in detail.today_experience_list" :key="index" class="bar f-26 col-9">
          <text class="fl">{{item.source_describe}}</text>
          <text>经验+{{item.add_integral}}</text>
          <text :class="{'fr': true, 'col-f0f': item.completed_num === item.limit_num}">{{item.completed_num}}/{{item.limit_num}}</text>
        </view>
        
        <view v-for="(item, index) in detail.today_integral_list" :key="index" class="bar f-26 col-9">
          <text class="fl">{{item.source_describe}}</text>
          <text>经验+{{item.add_integral}}</text>
          <text :class="{'fr': true, 'col-f0f': item.completed_num === item.limit_num}">{{item.completed_num}}/{{item.limit_num}}</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        type: 'experience',
        left: 0,           // 进度条偏移量
        detail: {
          experience_total: '',
          level: '',
          today_get_experience_limit_total: '',
          today_get_experience_total: '',
          today_experience_list: [],
          today_integral_list: []
        }
      }
    },
    onLoad(opt) {
      console.log(opt)
      if(opt.type) {
        this.type= opt.type
        uni.setNavigationBarTitle({
          title: '积分详情'
        })
      }
      this.getDetail()
    },
    methods: {
      getDetail() {
        let that= this,
          params= {
            url: that.type === 'integral' ? that.$api.userIntegralDetailsByDay: that.$api.userExperienceDetailsByDay
          }
        that.$httpRequest(params).then((res) => {
          console.log(that.type, res)
          let data= res.data
          if(that.type === 'integral') {
            that.detail.experience_total= data.integral_total
            that.detail.today_get_experience_limit_total= data.today_get_integral_limit_total
            that.detail.today_get_experience_total= data.today_get_integral_total
            that.detail.today_integral_list= data.today_integral_list
          } else {
            that.detail= res.data
          }
          that.left= that.detail.today_get_experience_total / that.detail.today_get_experience_limit_total * 100 + '%'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-grade{
    height: 100%;
    width: 100%;
    padding: 26upx 30upx 0;
    box-sizing: border-box;
    line-height: 1;
  }
  .linear-word{
    font-family:MStiffHei PRC;
  }
  .today-experience{
    .progress{
      position: relative;
      margin: 40upx 30upx 0;
      width: calc(100% - 60upx);
      height: 11upx;
      border-radius: 4upx;
      border: 1px solid #9933ff;
      .progress-color-item{
        height: 100%;
        background:linear-gradient(-90deg,rgba(12,221,254,1),rgba(66,105,248,1),rgba(146,62,244,1),rgba(236,8,241,1));
      }
      .progress-num{
        position: absolute;
        bottom: -30upx;
        transform: translateX(-12upx);
      }
      &>image{
        position: absolute;
        padding: 0;
        top: -6upx;
        transform: translateX(-12upx);
        height: 25upx;
        width: 25upx;
      }
    }  
  }
  .more-power{
    margin-top: 90upx;
    .open-menu{
      padding: 22upx 60upx 0;
      .bar{
        height: 62upx;
        width: 100%;
        text-align: center;
        line-height: 62upx;
        border-bottom: 1px solid #333;
      }
    }
  }
</style>
