<template>
  <view>
    <view class="container">
      <view class="row mobile col-f">
        <view class="left-box">+86</view>
        <input type="text" value="" v-model="mobile" placeholder="请输入手机号码" placeholder-style="font-size: 24upx;color: #666;" class="f-30 col-f"/>
      </view>
      <view class="row code col-f flex-x-between">
        <view class="dis-flex flex-y-center">
          <view class="left-box">验证码</view>
          <input type="text" value="" v-model="code" placeholder="请输入验证码" placeholder-style="font-size: 24upx;color: #666;" class="f-30 col-f"/>
        </view>
        <view class="code-state f-24 col-90f" @click="getCode">{{isGetCode?time: '获取验证码'}}</view>
      </view>
    </view>
     <view class="b-linear-row f-30 col-f t-c" @click="submit(mobile, code)">完成</view>
  </view>
  
</template>
<script>
  export default{
    data() {
      return {
        mobile: '',
        code: '',
        time: 60,
        isGetCode: false,
        hadGetCode: false,
        origin: ''
      }
    },
    onLoad(opt) {
      if(opt.origin) {
        this.orgin= opt.origin
      }
    },
    methods: {
      // 获取验证码
      getCode() {
        let that= this,
          isOk= (/^1[3456789]\d{9}$/.test(that.mobile));
        if(!isOk) {
          uni.showToast({
            title: '请输入正确的手机号码',
            icon: 'none'
          })
          return
        } else if(that.isGetCode) {
          uni.showToast({
            title: '验证码发送中，请稍候',
            icon: 'none'
          })
          return
        } else {
          that.isGetCode= true
          let params= {
            url: that.$api.sendcode,
            data: {
              mobile: that.mobile
            }
          }
          that.$httpRequest(params).then(res => {
            that.hadGetCode= true
            let timer= setInterval(function() {
              if(that.time > 0) {
                that.time--
              } else {
                that.isGetCode= false
                that.time= 60
                timer= null
                clearInterval(timer)
              }
            }, 1000)
          })
        }
      },
      
      // 完成
      submit(mobile, code) {
        let that= this
        if(!/^1[3456789]\d{9}$/.test(mobile)) {
          uni.showToast({
            title: '请输入正确的手机号码',
            icon: 'none'
          })
          return
        } else if(!that.hadGetCode) {
          uni.showToast({
            title: '请先获取手机验证码',
            icon: 'none'
          })
          return
        } else if(code.length < 4) {
          uni.showToast({
            title: '请输入验证码',
            icon: 'none'
          })
          return
        } else {
          let params= {
            url: that.$api.bindByMobile,
            data: {
              mobile: mobile,
              code: code
            }
          }
          that.$httpRequest(params).then(res => {
            if(res.data.is_merchant > 0) {
              uni.setStorageSync('is_merchant', true)
              uni.showModal({
                title: '系统提示',
                content: '该手机号是商家，是否跳转商家页面',
                success: function (res) {
                  if (res.confirm) {
                    uni.reLaunch({
                      url: '../partner/index'
                    })
                  } else if (res.cancel) {
                    that.getBack()
                  }
                }
              })
            } else {
              uni.showToast({
                title: '绑定成功',
                icon: 'none',
                success: () => {
                  that.getBack()
                }
              })
            }
          })
        }
      },
      
      // 判断入口
      getBack() {
        let that= this
        if(that.orgin) {
          uni.switchTab({
            url: '/pages/index/index'
          })
        } else {
          uni.navigateBack({
            delta: 1
          })
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 0upx 30upx;
    font-size: 32upx;
    .row{
      display: flex;
      align-items: center;
      line-height: 100upx;
      .left-box{
        width: 150upx;
      }
      .code-state{
        padding: 5upx 0;
        width: 170upx;
        text-align: center;
        line-height: 1;
        border: 1upx solid #666;
        border-radius: 17upx;
      }
    }
  }
  .b-linear-row{
    margin-top: 150upx;
    line-height: 100upx;
  }
</style>