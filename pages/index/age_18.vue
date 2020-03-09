<template>
  <view v-if="status" class="content col-f dis-flex flex-dir-col flex-x-center flex-y-center">
    <view class="big-circle">
    	<view class="small-circle">
        <view class="third-circle">
          <view class="main p-re t-c">
            <view>温馨提示</view>
            <view class="num">18</view>
            <view class="bridge p-ab b-13"></view>
          </view>
        </view>
      </view>
    </view>
    <view class="t-c m-t-25">爱绚不服务未成年人</view>
    
    <view class="btn-row oh">
      <text class="btn fl f-34 b-90f" @click="goIndex(true)">我已满</text>
      <text class="btn fr f-34 b-90f" @click="goIndex(false)">先看看</text>
    </view>
  </view>
</template>

<script>
  export default{
    data() {
      return {
        status: false
      }
    },
    onLoad() {
      let isMajor= uni.getStorageSync('isMajor'),
        token= uni.getStorageSync('token');
        
      if(isMajor && token) {
        uni.switchTab({
          url: './index'
        })
        return
      }
      this.status= true
      
    },
    methods: {
      goIndex(status) {
        uni.setStorage({
          key: 'isMajor',
          data: status
        })
        uni.switchTab({
          url: './index'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content{
    height: 100%;
    line-height: 1;
  }
  .big-circle{
    height: 568upx;
    width: 568upx;
    margin: 0 auto;
    box-sizing: border-box;
    background:linear-gradient(199deg,rgba(251,0,240,1),rgba(51,51,255,1));
    padding: 8upx;
    border-radius: 100%;
    .small-circle{
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      padding: 40upx;
      border-radius: 100%;
      border: 28upx solid #131313;
      .third-circle{
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        border-radius: 100%;
        background: #131313;
        .main{
          display: flex;
          flex-direction: column;
          align-content: center;
          justify-content: center;
          height: 100%;
          width: 100%;
          box-sizing: border-box;
          border-radius: 100%;
          background: rgba($color: #333, $alpha: 0.2);
          line-height: 1;
          overflow: hidden;
          .num{
            font-size: 243upx;
          }
          .bridge{
            top: 50%;
            left: 0;
            transform: translateY(-50%);
            transform: rotate(25deg);
            height: 40upx;
            width: 100%;
          }
        }
      }
    }
  }
  .btn-row{
    width: 100%;
    box-sizing: border-box;
    padding: 53upx 180upx 0;
    .btn{
      display: inline-block;
      padding: 0 15upx;
      line-height: 50upx;
      border-radius: 25upx;
    }
  }
</style>
