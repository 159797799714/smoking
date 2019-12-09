<template>
  <view class="personal f-30">
    <image class="user-img" src="../../static/mine/card/china.png" mode="widthFix"></image> 
    <view class="word t-c col-9">个人头像</view>
    <view v-for="(item, index) in menuList" :key="index" class="item oh col-9">
      <text class="fl">{{item.title}}</text>
      <view class="fr">{{item.content}}
        <text class="col-90f">></text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        menuList: [{
          title: '用户昵称',
          content: '风一样男人'
        }, {
          title: '性别',
          content: '女'
        }, {
          title: '生日',
          content: '2019-10-10'
        }, {
          title: '个性签名',
          content: '我想像风一样自由'
        }, {
          title: '绑定手机',
          content: '110'
        }]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .personal{
    padding-top: 20upx;
    line-height: 1;
    .user-img{
      display: block;
      margin: 0 auto;
      height: 97upx;
      width: 97upx;
    }
    .word{
      padding: 16upx 0 27upx;
      border-bottom: 1px solid #333;
    }
    .item{
      padding: 0 30upx;
      line-height: 83upx;
      border-bottom: 1px solid #333;
    }
  }
</style>
