<template>
  <view class="container">
    <!-- 头部 -->
    <topBar :isindex="true"/>
    
    <view class="t-c f-36 col-f">风一样的男人</view>
    <view class="t-c f-24 col-9">ID: 000000</view>
    <view class="p-re head m-t-20 oh">
      <image class="fl userImg" src="../../static/mine/card/china.png" mode="widthFix" @click="goPersonal"></image>
      <view class="m-l-10 fl oh">
        <view class="grade f-20 f-w">
          <text class="linear-word">LV1</text>
          <text class="grade-btn m-l-10 b-f0f col-f" @click="goMember">查看特权</text>
        </view>
        <view class="sign m-t-20 f-24 col-f">个性签名：越努力越幸福！</view>
      </view>
      
    </view>
    <view class="menu p-re">
      <view v-for="(item, index) in topicList" :key="index" class="span-item">
        <view class="num f-28 col-f">{{item.num}}</view>
        <view class="m-t-10 f-26 col-6">{{item.name}}</view>
      </view>
      <view class="convent">
        <view class="convent-one">
          <view class="convent-two">
          	<view class="convent-three t-c f-28 col-f0f" @click="orderDetail">兑换订单</view>
          </view>
        </view>
      </view>
    </view>
    <view class="tabBar">
      <view v-for="(item, index) in tabList" :key="index" :class="{'tabs f-32 col-f': true, 'f-40 col-f0f': tabIndex === index}" @click="selectTab(index)">{{item}}</view>
    </view>
    
    <view class="good-main">
      <articleList :articleList="articleList"/>
    </view>
  </view>
</template>

<script>
  import topBar from '../components/topBar.vue'
  import articleList from '../components/articleList.vue'
  export default {
    components: {
      topBar: topBar,
      articleList: articleList
    },
    data() {
      return {
        userinfo: {
          avatarUrl: '',
          nickName: '',
          mobile: '',
        },
        topicList: [{
          num: 1000,
          name: '关注'
        }, {
          num: 222,
          name: '收藏'
        }, {
          num: 1000,
          name: '点赞'
        }, {
          num: 222,
          name: '粉丝'
        }],
        articleList: [{
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
        }],
        tabList: ['分享', '点赞'],
        tabIndex: 0
      }
      
    },
    
    methods: {
      orderDetail() {
        uni.navigateTo({
          url: '../integral/integralDetail'
        })
      },
      goPersonal() {
        uni.navigateTo({
          url: './personal'
        })
      },
      goMember() {
        uni.navigateTo({
          url: './member'
        })
      },
      selectTab(index) {
        this.tabIndex = index
      }
      
    }
  }
</script>

<style lang="scss" scoped>
  .head{
    padding: 0 65upx;
  }
  .userImg{
    heigth: 114upx;
    width: 114upx;
    border-radius: 100%;
  }
  .grade{
    padding-top: 38upx;
    line-height: 32upx;
  }
  .grade-btn{
    heihgt: 32upx;
    padding: 0 8upx;
    border-radius: 16upx;
  }
  .sign{
    line-height: 1;
  }
  .menu{
    padding: 39upx 140upx 50upx 40upx;
    line-height: 1;
  }
  .convent{
    position: absolute;
    padding: 2upx;
    z-index: 100;
    right: 52upx;
    top: -26upx;
    box-sizing: border-box;
    height: 100upx;
    width: 100upx;
    border-radius: 100%;
    background: linear-gradient(-70deg,rgba(26,182,252,1),rgba(82,95,247,1),rgba(191,35,242,1),rgba(251,0,240,1));
    .convent-one{
      padding: 2upx;
      box-sizing: border-box;
      height: 100%;
      width: 100%;
      background: #131313;
      border-radius: 100%;
      .convent-two{
        box-sizing: border-box;
        height: 100%;
        width: 100%;
        padding: 2upx;
        background: #131313;
        background: linear-gradient(-70deg,rgba(26,182,252,1),rgba(82,95,247,1),rgba(191,35,242,1),rgba(251,0,240,1));
        border-radius: 100%;
      }
      .convent-three{
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: 17upx;
        background: #131313;
        border-radius: 100%;
      }
    }
  }
  .tabBar{
    height: 100upx;
    width: 100%;
    text-align: center;
    .tabs{
      display: inline-block;
      height: 100%;
      width: 190upx;
    }
  }
  .span-item{
    display: inline-block;
    width: 25%;
    text-align: center;
  }
  .good-main{
    padding: 0 28upx;
  }
</style>
