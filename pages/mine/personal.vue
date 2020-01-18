<template>
  <view class="personal f-30">
    <image class="user-img" :src="avatarUrl" mode="widthFix"></image> 
    <view class="word t-c col-9">个人头像</view>
    <view v-for="(item, index) in menuList" :key="index" class="item oh col-9" @click="clickAction(index, item.path)">
      <text class="fl">{{item.title}}</text>
      <view class="fr">{{item.content?item.content: '无'}}
        <text class="iconfont dis-inline-block rotate-180 col-90f f-26">&#xe61b;</text>
      </view>
    </view>
    <!-- 个性签名弹窗 -->
    <uni-popup ref="popup" type="bottom">
      <view class="input-box">
        <input type="text" value="" v-model="sign" placeholder="请输入你的个性签名" focus="true" placeholder-style="color: #999"  maxlength="30" class="input" @confirm="sureEdit"/>
      </view>
    </uni-popup>
  </view>
</template>

<script>
  import uniPopup from "@/pages/components/uni-popup/uni-popup.vue"
  export default {
    components: {
      uniPopup: uniPopup
    },
    data () {
      return {
        avatarUrl: '',
        sign: '',
        menuList: [{
          title: '用户昵称',
          name: 'nickName',
          content: ''
        }, {
          title: '性别',
          name: 'gender',
          content: ''
        }, {
          title: '个性签名',
          name: 'sign',
          content: ''
        }, {
          title: '绑定手机',
          name: 'mobile',
          content: '',
          path: '/pages/login/bindTel'
        }]
      }
    },
    onShow() {
      let that= this
      that.getUserInfo()
    },
    methods:{
      getUserInfo() {
        let that= this,
          params= {
            url: that.$api.getUserInfo
          }
        that.$httpRequest(params).then((res) => {
          let info= res.data.info,
            list= that.menuList
          list.map((obj, index) => {
            obj.content= info[obj.name]
          })
          that.avatarUrl= info.avatarUrl
          that.menuList= list
        })
      },
      clickAction(index, path) {
        let that= this
        if(index === 2) {
          that.open()
        } else if(index === 3) {
          uni.navigateTo({
            url: path
          })
          return
        }
      },
      // 打开弹窗
      open(){
        this.sign= this.menuList[2].content
        // 需要在 popup 组件，指定 ref 为 popup
        this.$refs.popup.open()
        
      },
      close() {
        this.$refs.popup.close()
      },
      // 确认修改个性签名
      sureEdit() {
        let that= this,
          params= {
            url: that.$api.editSign,
            data: {
              sign: that.sign
            }
          }
        that.$httpRequest(params).then(res => {
          console.log(res)
          that.menuList[2].content= that.sign
          that.close()
        })
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
  .input-box{
    padding: 30upx 30upx;
    background-color: #333;
    .input{
      padding: 0 20upx;
      height: 40upx;
      color: #fff;
      font-size: 30upx;
      line-height: 40upx;
      background-color: #666;
      border-radius: 20upx;
    }
  }
</style>
