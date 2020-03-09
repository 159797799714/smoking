<template>
  <view class="main dis-flex flex-dir-col flex-y-center">
    <view class="header t-c">
      <image :src="info.logo.file_path" mode="" class="avatar dis-inline-block b-9"></image>
      <view class="m-t-20 t-c col-9 f-32">{{info.shop_name}}</view>
    </view>
    <view v-if="info.shop_name">
      <view class="row b-linear-row" @click="getCoupon">
        <view class="row-main b-13">
          <image src="../../static/img/card.png" mode="widthFix" class="fl icon"></image>
          <view class="t-c f-36 col-90f">优惠券扫码</view>
        </view>
      </view>
      <navigator url="./couponNote" class="row b-linear-row">
        <view class="row-main b-13">
          <image src="../../static/img/card.png" mode="widthFix" class="fl icon"></image>
          <view class="t-c f-36 col-90f">优惠券记录</view>
        </view>
      </navigator>
      <navigator url="./couponStatistics" class="row b-linear-row">
        <view class="row-main b-13">
          <image src="../../static/img/card.png" mode="widthFix" class="fl icon"></image>
          <view class="t-c f-36 col-90f">使用统计</view>
        </view>
      </navigator>  
    </view>
    
  </view>
</template>

<script>
  export default {
    data() {
      return {
        info: ''
      }
    },
    onLoad() {
      this.getDetail()
    },
    methods: {
      getDetail() {
        let that= this
        that.$httpRequest({url: that.$api.merchantsPage}).then(res => {
          that.info= res.data.info
        })
      },
      // 扫码
      getCoupon() {
        let that= this
        // 只允许通过相机扫码
        uni.scanCode({
          onlyFromCamera: true,
          success: function (res) {
            console.log('条码类型：' + res.scanType)
            console.log('条码内容：' + res.result)
            
            let qusIndex= res.result.indexOf('?')
            
            console.log('？索引', qusIndex)
            if(qusIndex === -1) {
              uni.showToast({
                titile: '参数错误',
                icon: 'none'
              })
              return
            }
            
            let result= res.result,
              rankArr= [],
              valueArr = [] // 逗号的索引数组
            for(let i= qusIndex; i < result.length;i++) {
              if(result.charAt(i) === '=') {
                rankArr.push(i)
              } else if(result.charAt(i) === '&') {
                valueArr.push(i)
              }
            }
            let obj = {}
            rankArr.map((item, index) => {
              let name= result.slice(valueArr[index - 1] + 1, item).trim(),
                value= value = result.slice(item + 1).trim()
              if(index === 0) {
                name = result.slice(qusIndex + 1, item).trim()
              }
              if (valueArr[index]) {
                value = result.slice(item + 1, valueArr[index]).trim()
              }
              obj[name] = value
            })
            
            console.log(obj)
            
            uni.navigateTo({
              url: './couponDetail?params=' + JSON.stringify(obj)
            })
          }
        })
        
        // uni.navigateTo({
        //   url: './couponDetail'
        // })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .main{
    height: 100%;
    width: 100%;
    .header{
      margin: 112upx 0 150upx;
      .avatar{
        height: 170upx;
        width: 170upx;
        border-radius: 100%;
      }
    }
    .row{
      margin-bottom: 50upx;
      width: 569upx;
      height: 100upx;
      padding: 2upx;
      .row-main{
        height: 100%;
        width: 100%;
        box-sizing: border-box;
        padding: 25upx;
        .icon{
          height: 50upx;
          width: 50upx;
        }
        &>view{
          line-height: 50upx;
        }
      }
    }
  }
</style>
