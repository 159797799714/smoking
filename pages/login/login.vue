<template>
  <view class="container">
    <view class="f-34 col-f f-w t-c">爱绚</view>
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
      <button class="m-t-30 login-btn b-90f col-f" open-type="getPhoneNumber" lang="zh_CN" @getphonenumber="getPhoneNumber">授权快速绑定</button>
    </view>
    
    <!-- 弹窗 -->
    <uni-popup ref="popup" type="bottom">
      <view class="popup-main b-33 col-f f-30">
        <view class="row f-28">
          <text class="f-w">深圳市爱绚科技有限公司</text> <text class="m-l-30 col-9">申请使用</text>
        </view>
        <view class="row">你的手机号码</view>
        <view class="row">
          <text>{{mobile}}</text>
          <text class="m-l-30 col-9">微信绑定手机号码</text>
          <text class="fr iconfont col-90f">&#xe605;</text>
        </view>
        <view class="row col-6">使用其他号码</view>
        <view class="m-t-20 btn-box dis-flex flex-x-around">
          <text class="btn b-cc" @click="reject">拒绝</text>
          <text class="btn b-90f" @click="bindWechatTel">允许</text>
        </view>
      </view>
    </uni-popup>
    
  </view>
</template>

<script>
  import uniPopup from "../components/uni-popup/uni-popup.vue"
  export default{
    components: {
      uniPopup
    },
    data() {
      return {
        checked: true,
        page_isBindTel: false,             // 默认是登录，false为绑定手机号
        mobile: 18888888888,                        // 微信手机号码
      }
    },
    methods: {
      
      // 用户协议勾选
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
        let params= {
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
          
        uni.clearStorageSync()
         
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
              uni.setStorageSync('is_merchant', res.data.is_merchant)
              
              let isBindPhone= res.data.mobile_isbind === 'yes'? true: false
              
              // 已经绑定手机号码
              if(isBindPhone) {
                
                // 判断是否是商家
                if(res.data.is_merchant > 0) {
                  // 是商家
                  uni.reLaunch({
                    url: '/pages/partner/index'
                  })
                } else {
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
                }
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
      },
      
      // 解密获取手机号码
      getPhoneNumber(e) {
        console.log('获取到手机号码', e)
        let that= this,
          params= {}
        
        that.open()
        
        // uni.showLoading({
        //   title: '授权获取中'
        // })
        // 获取微信步数授权
        // uni.login({
        //   provider: 'weixin',
        //   success: function (res) {
        //     console.log(res)
        //       params= {
        //         url: that.$api.decryptByMobile,
        //         method: 'POST',
        //         data: {
        //           code: res.code,
        //           encryptedData: e.detail.encryptedData,
        //           iv: e.detail.iv
        //         }
        //       }
        //     that.$httpRequest(params).then(result => {
        //       // uni.hideLoading()
        //       that.mobile= result.data.mobile
        //       that.open()
        //     })
        //   }
        // })
        
      },
      
      // 绑定手机号码
      bindWechatTel() {
        let that= this,
          params= {
            url: that.$api.mobileBind,
            method: 'POST',
            data: {
              mobile: 15979779714
            }
          }
        that.$httpRequest(params).then(res => {
          console.log(res)
          uni.showToast({
            title: res.msg,
            success: () => {
              if(res.data.is_merchant > 0) {
                uni.redirectTo({
                  url: '/pages/partner/index'
                })
              } else {
                uni.navigateBack({
                  delta: 1
                })
              }
            }
          })
        })
      },
      
      // 打开弹窗
      open(){
        // 需要在 popup 组件，指定 ref 为 popup
        this.$refs.popup.open()
      },
      close() {
        this.$refs.popup.close()
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
  // 弹窗
  .popup-main{
    padding: 30upx 30upx 60upx;
  }
  .row{
    line-height: 80upx;
  }
  .btn{
    width: 200upx;
    line-height: 80upx;
    text-align: center;
    border-radius: 10upx;
  }
     
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
