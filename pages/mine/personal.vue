<template>
  <view class="personal f-30">
    <image class="user-img" :src="avatarUrl" mode="widthFix"></image> 
    <view class="word t-c col-9">个人头像</view>
    <view v-for="(item, index) in menuList" :key="index" class="item oh col-9">
      <text class="fl">{{item.title}}</text>
      <view class="fr">{{item.content}}
        <text class="iconfont dis-inline-block rotate-180 col-90f f-26">&#xe61b;</text>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        avatarUrl: '',
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
          content: ''
        }]
      }
    },
    onLoad() {
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
          console.log(res.data)
          let info= res.data.info,
            list= that.menuList
          list.map((obj, index) => {
            console.log(obj.name, info[obj.name], 'obj')
            obj.content= info[obj.name]
          })
          that.avatarUrl= info.avatarUrl
          that.menuList= list
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
</style>
