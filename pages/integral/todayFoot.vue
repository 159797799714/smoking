<template>
  <view class="plan">
    <view class="t-r f-32 col-9">步数规则</view>
    <view class="progress-circle">
      <view class="small-circle b-13 col-90f">
        <view class="day t-c f-50">12000
          <view class="small-word f-20">
            <view>步</view>
          </view>
        </view>
      </view>
    </view>
    
    <view class="t-c f-30 col-9">读万卷书  行万里路</view>
    <view class="m-t-20 t-c f-30 col-9">加入我们  千里之行始于足下</view>
    
    <view class="m-t-30 t-c">
      <view class="sign-btn f-40 col-f">步数领取积分</view>
    </view>
    <view class="m-t-30 t-c f-30 col-6">走的越多 积分越多</view>
    
    <view class="section-title t-c f-32 col-c">今日步数排行榜</view>
    
    <view class="ranking">
      <view v-for="(item, index) in rankList" :key="index" class="item oh">
        <view class="fl foot-user p-re">
          <text class="rank-num f-40 col-c">{{item + 1}}</text>
          <view class="dis-inline-block p-ab user">
            <image src="../../static/mine/card/china.png" mode="width" class="user-img"></image>
            <view class="m-t-15 user-name t-c f-24 col-9">啦啦</view>
          </view>
        </view>
        <view class="fr foot-num f-36 col-c">20000步</view>
      </view>
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
        rankList: 10
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
  .f-50{
    font-size: 50upx;
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
    background:linear-gradient(-90deg,rgba(82,95,247,1),rgba(251,0,240,1));
  }
  .section-title{
    margin: 80upx 0 52upx;
  }
  .ranking{
    padding: 0 60upx;
    .item{
      border-bottom: 1upx solid #333;
      .user-img{
        vertical-align: middle;
        height: 70upx;
        width: 70upx;
        border-radius: 100%;
      }
      .user{
        top: 0;
        bottom: 0;
        height: 110upx;
        margin: auto 0;
      }
      .rank-num{
        margin-right: 12upx;
        line-height: 132upx;
      }
      .user-name{
        width: 70upx;
        text-align: center;
        overflow: visible;
      }
      .foot-num{
        line-height: 132upx;
      }
    }
  }
</style>

