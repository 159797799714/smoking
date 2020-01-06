<template>
  <view class="container">
    <view class="f-34 col-f f-w t-c">深圳爱绚科技有限公司</view>
    <view class="wechatapp">
      <view class="header">
        <open-data class="" type="userAvatarUrl"></open-data>
      </view>
    </view>
    <view class="auth-title f-w f-40 col-9">申请获取以下权限</view>
    
    <!-- 登录与注册 -->
    <view v-if="!page_isBindTel">
      <view class="auth-subtitle f-30 col-6">获得你的公开信息（昵称、头像等）</view>
      <view class="dis-flex treaty">
        <checkbox-group @change="checkboxChange">
          <checkbox :value="checked" :checked="checked" color="#ff00ff"/>
        </checkbox-group>
        <view class="f-26 col-6">已经阅读并同意<text class="col-9" catchtap="goRegisterWord">《相关用户服务协议》</text></view>
      </view>
      <button class="m-t-30 login-btn b-90f col-f" open-type="getUserInfo" lang="zh_CN" @getuserinfo="authorLogin">允许</button>
      <button class="m-t-20 login-btn col-13 b-9" @click="reject">再看看</button>  
    </view>
    
    <view v-else>
      <!-- 绑定手机号码 -->
      <view class="auth-subtitle f-30 col-6">授权你的手机号码</view>
      <button class="m-t-20 login-btn b-90f col-f" open-type="getPhoneNumber" lang="zh_CN" @getphonenumber="getPhoneNumber">授权快速绑定</button>
      <button class="m-t-20 login-btn col-13 b-9" @click="reject">拒绝并返回首页</button>  
    </view>
    
    
  </view>
</template>

<script>
  export default{
    data() {
      return {
        checked: true,
        page_isBindTel: false,             // 默认是登录，false为绑定手机号
      }
    },
    methods: {
      checkboxChange(e) {
        let that= this
        that.checked= e.detail.length > 1? true: false
      },
      // 登录
      authorLogin(e) {
        let that= this
        // 同意用户协议
        if(!that.checked) {
          uni.showToast({
            title: '请阅读并勾选相关用户协议',
            icon: 'none'
          })
          return
        }
        let  params= {
            url: that.$api.login,
            method: 'POST',
            data: {
              code: '',
              user_info: e.detail.rawData,
              encrypted_data: e.detail.encryptedData,
              iv: e.detail.iv,
              signature: e.detail.signature,
              referee_id: wx.getStorageSync('referee_id')
            }
          }
          
        uni.removeStorageSync('token')
         
        // 调起登录
        uni.login({
          provider: 'weixin',
          success: function (loginRes) {
            console.log(loginRes)
            uni.showLoading({
                title: '登录中'
            })
            params.data.code= loginRes.code
            
            // 请求登录接口
            that.$httpRequest(params).then(res => {
              uni.hideLoading()
              that.$store.commit('setToken', res.data.token)
              that.$store.commit('redirectLoginPage', {status: false})
              uni.setStorageSync('token', res.data.token)
              uni.setStorageSync('user_id', res.data.user_id)
              
              let isBindPhone= res.data.mobile_isbind === 'yes'? true: false,
                page=  getCurrentPages()
              console.log(page)
              
              // 已经绑定手机号码
              if(isBindPhone) {
                uni.navigateBack({
                  delta: 1,
                  success: function() {
                    // 获取微信步数授权
                    uni.login({
                      provider: 'weixin',
                      success: function (loginRes) {
                        // 记录步数
                        let encryptedData= uni.getStorageSync('encryptedData'),
                          iv= uni.getStorageSync('iv'),
                          data= {
                          url: that.$api.setpCount,
                          method: 'POST',
                          data: {
                            encryptedData: encryptedData,
                            iv: iv,
                            code: loginRes.code
                          }
                        }
                        that.$httpRequest(data).then(res => {
                          console.log(res)
                        })
                      }
                    })
                  }
                })
              } else {
                that.page_isBindTel= true
              }
            })
          }
        })
        
      },
      reject() {
        this.$store.commit('redirectLoginPage', {status: false})
        uni.switchTab({
          url: '../index/index'
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container {
    padding: 88upx 60upx 0;
    font-size: 32upx;
  }
  
  .wechatapp {
    padding: 80upx 0 48upx;
    margin-bottom: 72upx;
    text-align: center;
  }
  
  .wechatapp .header {
    width: 190upx;
    height: 190upx;
    margin: 0 auto;
    border-radius: 50%;
    border: 2upx solid #ccc;
    overflow: hidden;
    box-shadow: 1px 0px 5px rgba(50, 50, 50, 0.3);
  }
  
  .auth-title {
    margin-bottom: 50upx;
  }
  
  .auth-subtitle {
    margin-bottom: 15upx;
  }
  .treaty{
    margin-bottom: 70upx;
  }
  .login-btn {
    border: none;
    height: 88upx;
    line-height: 88upx;
    border-radius: 999upx;
  }
  .b-cc{
    background: #ccc;
  }
  
  .login-btn::after {
    display: none;
  }
  
  .login-btn.button-hover {
    box-shadow: inset 0 5upx 30upx rgba(0, 0, 0, 0.15);
  }
  
  /*  重写 checkbox 样式  */
  /* 未选中的 背景样式 */
  
  /* #ifdef H5 */
  checkbox .uni-checkbox-input{
    position: relative;
    top: -8rpx;
     width: 24rpx; /* 背景的宽 */
     height: 24rpx; /* 背景的高 */
     background: #131313;
     border: 1px solid #666;
  }
  /* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
  checkbox .uin-checkbox-input.uin-checkbox-input-checked{
     border: 1px solid #666;
     background: #131313;
  }
  /* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
  checkbox .uni-checkbox-input.uni-checkbox-input-checked::before{
    border-radius: 50%;/* 圆角 */
    width: 24rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
    height: 24rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
    line-height: 24rpx;
    text-align: center;
    font-size: 16rpx; /* 对勾大小 30rpx */
    color: #ff00ff; /* 对勾颜色 白色 */
    background: transparent;
    transform:translate(-50%, -50%) scale(1);
    -webkit-transform:translate(-50%, -50%) scale(1);
  }
  
  /* #endif */
  
  /* #ifdef APP-PLUS || MP-WEIXIN */
  checkbox .wx-checkbox-input{
    position: relative;
    top: -8rpx;
     width: 24rpx; /* 背景的宽 */
     height: 24rpx; /* 背景的高 */
     background: #131313;
     border: 1px solid #666;
  }
  /* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
  checkbox .wx-checkbox-input.wx-checkbox-input-checked{
     border: 1px solid #666;
     background: #131313;
  }
  /* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
  checkbox .wx-checkbox-input.wx-checkbox-input-checked::before{
    border-radius: 50%;/* 圆角 */
    width: 24rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
    height: 24rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
    line-height: 24rpx;
    text-align: center;
    font-size: 16rpx; /* 对勾大小 30rpx */
    color: #ff00ff; /* 对勾颜色 白色 */
    background: transparent;
    transform:translate(-50%, -50%) scale(1);
    -webkit-transform:translate(-50%, -50%) scale(1);
  }
  
  /* #endif */
     
</style>
<style>
  /*  重写 checkbox 样式  */
  /* 未选中的 背景样式 */
  
  /* #ifdef H5 */
  checkbox .uni-checkbox-input{
    position: relative;
    top: -8rpx;
     width: 24rpx; /* 背景的宽 */
     height: 24rpx; /* 背景的高 */
     background: #131313;
     border: 1px solid #666;
  }
  /* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
  checkbox .uin-checkbox-input.uin-checkbox-input-checked{
     border: 1px solid #666;
     background: #131313;
  }
  /* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
  checkbox .uni-checkbox-input.uni-checkbox-input-checked::before{
    border-radius: 50%;/* 圆角 */
    width: 24rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
    height: 24rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
    line-height: 24rpx;
    text-align: center;
    font-size: 16rpx; /* 对勾大小 30rpx */
    color: #ff00ff; /* 对勾颜色 白色 */
    background: transparent;
    transform:translate(-50%, -50%) scale(1);
    -webkit-transform:translate(-50%, -50%) scale(1);
  }
  
  /* #endif */
  
  /* #ifdef APP-PLUS || MP-WEIXIN */
  checkbox .wx-checkbox-input{
    position: relative;
    top: -8rpx;
     width: 24rpx; /* 背景的宽 */
     height: 24rpx; /* 背景的高 */
     background: #131313;
     border: 1px solid #666;
  }
  /* 选中后的 背景样式 （红色背景 无边框 可根据UI需求自己修改） */
  checkbox .wx-checkbox-input.wx-checkbox-input-checked{
     border: 1px solid #666;
     background: #131313;
  }
  /* 选中后的 对勾样式 （白色对勾 可根据UI需求自己修改） */
  checkbox .wx-checkbox-input.wx-checkbox-input-checked::before{
    border-radius: 50%;/* 圆角 */
    width: 24rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
    height: 24rpx;/* 选中后对勾大小，不要超过背景的尺寸 */
    line-height: 24rpx;
    text-align: center;
    font-size: 16rpx; /* 对勾大小 30rpx */
    color: #ff00ff; /* 对勾颜色 白色 */
    background: transparent;
    transform:translate(-50%, -50%) scale(1);
    -webkit-transform:translate(-50%, -50%) scale(1);
  }
  
  /* #endif */
</style>
