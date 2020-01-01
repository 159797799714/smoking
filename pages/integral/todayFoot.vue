<template>
  <view class="plan">
    <view class="t-r f-32 col-9">步数规则</view>
    <view v-show="user_steps" class="progress-circle">
      <view class="small-circle b-13 col-90f">
        <view class="day t-c f-50">{{user_steps.step_count}}
          <view class="small-word f-20">
            <view>步</view>
          </view>
        </view>
      </view>
    </view>
    
    <view class="t-c f-30 col-9">读万卷书  行万里路</view>
    <view class="m-t-20 t-c f-30 col-9">加入我们  千里之行始于足下</view>
    
    <view class="m-t-30 t-c">
      <view :class="{'sign-btn f-40 col-f': true, 'b-linear-row': user_steps.is_receive < 1, 'b-9 col-13':  user_steps.is_receive > 0}" @click="receiveIntegral(user_steps.input_date, user_steps.ranking)">{{user_steps.is_receive > 0? '积分已领取': '步数领取积分'}}</view>
    </view>
    <view class="m-t-30 t-c f-30 col-6">走的越多 积分越多</view>
    
    <view class="section-title t-c f-32 col-c">今日步数排行榜</view>
    
    <view class="ranking">
      <view v-for="(item, index) in list.nowadays_list" :key="index" class="item oh">
        <view class="fl foot-user p-re">
          <text class="rank-num f-40 col-c">{{item.ranking}}</text>
          <view class="dis-inline-block p-ab user">
            <image :src="item.avatarUrl" mode="width" class="user-img"></image>
            <view class="m-t-15 user-name t-c f-24 col-9">{{item.nickName}}</view>
          </view>
        </view>
        <view class="fr foot-num f-36 col-c">{{item.step_count}}步</view>
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
        rankList: 10,
        user_steps: '',
        list: ''
      }
    },
    onLoad() {
      this.getFootDetail()
    },
    methods: {
      // 获取步数详情
      getFootDetail() {
        let that= this,
          params= {
            url: that.$api.getFootCount
          }
        that.$httpRequest(params).then(res => {
          that.user_steps= res.data.user_steps
          that.list= res.data.list
        })
      },
      
      // 领取积分
      receiveIntegral(date, ranking) {
        let that= this,
          params= {
            url: that.$api.receiveIntegral,
            data: {
              input_date: date,
              ranking: ranking
            }
          }
        // 检查是否已经领取过
        if(that.user_steps.is_receive > 0) {
          uni.showToast({
            title: '不要太贪心哦',
            icon: 'none'
          })
          return
        }
        
        that.$httpRequest(params).then(res => {
          uni.showToast({
            title: res.data,
            icon: 'none'
          })
          that.user_steps.is_receive += 1
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
        width:200upx;
        text-align: left;
        overflow: visible;
      }
      .foot-num{
        line-height: 132upx;
      }
    }
  }
</style>

