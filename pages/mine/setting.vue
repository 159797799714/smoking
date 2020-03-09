<template>
  <view class="setting">
    <view class="line b-b dis-flex flex-x-between flex-y-center" @click="goPersonal">
      <view class="userImg dis-flex flex-y-center">
        <image :src="userInfo.avatarUrl" mode=""></image>
        <view class="m-l-20 f-30 col-c">{{userInfo.nickName}}</view>
      </view>
      <text class="iconfont dis-inline-block rotate-180 f-30 col-90f">&#xe61b;</text>
    </view>
    
    <navigator v-for="(item, index) in menuLists" :key="index" :url="item.path" class="line b-b  dis-flex flex-x-between flex-y-center">
      <view class="m-l-20 f-30 col-c">{{item.name}}</view>
      <text class="iconfont dis-inline-block rotate-180 f-30 col-90f">&#xe61b;</text>
    </navigator>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        userInfo: {
          nickName: '',
          avatarUrl: ''
        },
        menuLists: [{
          name: '我的收货地址',
          path: './address/address'
        }, 
        // {
        //   name: '关于爱绚',
        //   path: ''
        // }, 
        {
          name: '用户协议',
          path: './agreeMent'
        }]
      }
    },
    onLoad(params) {
      console.log(params)
      this.userInfo= params
    },
    methods: {
      goPersonal() {
        uni.navigateTo({
          url: './personal'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .line{
    padding: 30upx;
    .userImg{
      &>image{
        height: 97upx;
        width: 97upx;
        border-radius: 100%;
        background: #ccc;
      }
    }
  }
  .b-b{
    border-bottom: 1px solid #333;
  }
</style>
