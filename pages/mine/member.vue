<template>
  <view v-if="detail" class="my-grade">
    <!-- 头部 -->
    <!-- <topBar :isindex="true"/> -->
    
    <!-- <view class="t-c f-30 col-f">我的会员等级</view> -->
    <view class="m-t-25 t-c f-44 f-w linear-word">Lv{{detail.level}}</view>
    <view class="m-t-25 level-column t-c">
      <view v-for="item in level" :key="item" :class="{'level-span b-33': true, 'b-linear': detail.level-1 === item , 'b-9': detail.level === item}">LV{{item + 1}}</view>
    </view>
    
    
    <view class="today-experience">
      <view class="f-30 col-f">今日经验
        <text class="f-20 col-6"> (还有{{detail.today_get_experience_limit_total-detail.today_get_experience_total}}经验可获得）</text>
      </view>
      <view class="detail t-r f-24 col-90f" @click="goDetail">查看详情</view>
      <view class="progress">
        <image src="../../static/img/tabbar/index1.png" mode="widthFix" :style="{'margin-left': left}"/>
        <text class="progress-num f-24 col-f" :style="{'left': left}">{{detail.today_get_experience_total}}</text>
      </view>
    </view>
    
    <view class="more-power">
      <view class="f-30 col-f">升级享受更多权益</view>
      <view class="open-menu">
        <view v-for="(item, index) in menuList" :key="index" class="bar">
          <image :src="item.imgUrl" mode="widthFix"></image>
          <view class="m-t-20 f-24 col-9">{{item.name}}</view>
        </view>
      </view>
    </view>
    
  </view>
</template>

<script>
  // import topBar from '../components/topBar.vue'
  export default {
    // components: {
    //   topBar: topBar
    // },
    data () {
      return {
        level: 5,
        detail: '',
        left: '',
        menuList: [{
          name: '新品尝鲜',
          imgUrl: require('@/static/img/member/item1.png')
        }, {
          name: '电音门票',
          imgUrl: require('@/static/img/member/item2.png')
        }, {
          name: '生日礼包',
          imgUrl: require('@/static/img/member/item3.png')
        }, {
          name: '专享折扣',
          imgUrl: require('@/static/img/member/item4.png')
        }, {
          name: '积分双倍',
          imgUrl: require('@/static/img/member/item5.png')
        },  {
          name: '升级礼包',
          imgUrl: require('@/static/img/member/item6.png')
        }, {
          name: '线下活动',
          imgUrl: require('@/static/img/member/item7.png')
        }, {
          name: '优享客服',
          imgUrl: require('@/static/img/member/item8.png')
        }]
      }
    },
    onLoad() {
      let that= this,
        params= {
          url: that.$api.userExperienceDetails
        }
      that.$httpRequest(params).then(res => {
        that.detail= res.data
        that.left=  res.data.today_get_experience_total / res.data.today_get_experience_limit_total * 100 + '%'
        
      })
    },
    methods: {
      goDetail() {
        uni.navigateTo({
          url: './todayExperience'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .my-grade{
    height: 100%;
    width: 100%;
    padding: 37upx 30upx 0;
    box-sizing: border-box;
    line-height: 1;
  }
  .linear-word{
    font-family:MStiffHei PRC;
  }
  .level-column{
    .level-span{
      position: relative;
      display: inline-block;
      margin-right: 33upx;
      height: 33upx;
      width: 74upx;
      color: #fff;
      font-size: 16upx;
      text-align: center;
      line-height: 33upx;
      border-radius: 5upx;
      &:after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        right: -31upx;
        margin: auto 0;
        height: 2upx;
        width: 31upx;
        background: #999;
      }
    }
    .level-span:nth-of-type(5n) {
      margin-right: 0;
      &:after{
        display: none;
      }
    }
  }
  .today-experience{
    margin-top: 75upx;
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
        padding-left: 4upx;
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
  .more-power{
    margin-top: 91upx;
    .open-menu{
      padding: 50upx 60upx 0;
      .bar{
        display: inline-block;
        height: 110upx;
        width: 25%;
        text-align: center;
        margin-bottom: 50upx;
        &>image{
          height: 60upx;
          width: 57upx;
          overflow: hidden;
        }
      }
    }
  }
</style>
