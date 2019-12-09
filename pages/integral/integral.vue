<template>
  <view>
    <!-- 头部 -->
    <topBar :isindex="true"/>
    
    <view class="t-c">
      <image class="userImg" src="../../static/mine/card/china.png" mode="widthFix"></image>
    </view>
    <view class="t-c f-36 col-f">风一样的男人</view>
    <view class="menu">
      <view class="span-item col-f"  @click="navigate('../mine/member')">
        <view class="f-32 f-w linear-word">Lv{{level.num}}</view>
        <view class="m-t-20 f-26">绚等级</view>
      </view>
      <view v-for="(item, index) in spanList" :key="index" class="span-item col-f" @click="navigate(item.url)">
        <view class="num">{{item.num}}</view>
        <view class="m-t-20 f-26">{{item.name}}</view>
      </view>
    </view>
    
    <view class="good-main">
      <goodList :goodList="goodList"/>
    </view>
    
  </view>
</template>

<script>
  import topBar from '../components/topBar.vue'
  import goodList from '../components/goodList.vue'
  export default {
    components: {
      topBar: topBar,
      goodList: goodList
    },
    data () {
      return {
        level: {
          name: '绚等级',
          num: 1
        },
        spanList: [{
          name: '积分详情',
          num: '666',
          url: './integralDetail'
        }, {
          name: '习惯打卡',
          num: '666',
          url: './plan'
        }, {
          name: '行走步数',
          num: '666',
          url: './todayFoot'
        }],
        goodList: [{
          name: '金佛安工构建工具公司估计哦附近奥解耦股简爱狗狗进欧冠九宫格解耦股就',
          grade: 999
        }, {
          name: '金佛安工构建工具公司估计哦附近奥解耦股简爱狗狗进欧冠九宫格解耦股就',
          grade: 999
        }, {
          name: '金佛安工构建工具公司估计哦附近奥解耦股简爱狗狗进欧冠九宫格解耦股就',
          grade: 999
        }, {
          name: '金佛安工构建工具公司估计哦附近奥解耦股简爱狗狗进欧冠九宫格解耦股就',
          grade: 999
        }]
      }
    },
    methods: {
      navigate(url) {
        uni.navigateTo({
          url: url
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .userImg{
    display: inline-block;
    height: 114upx;
    width: 114upx;
    border-radius: 100%;
  }
  .menu{
    margin: 43upx 0 77upx;
    line-height: 1;
  }
  .span-item{
    display: inline-block;
    width: 25%;
    text-align: center;
  }
  .good-main{
    padding: 0 30upx;
  }
</style>
