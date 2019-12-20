<template>
  <view class="container">
    <!-- 头部 -->
    <topBar :isindex="true"/>
    
    <view class="t-c f-36 col-f">{{userInfo.nickName}}</view>
    <view class="t-c f-24 col-9">ID: {{userInfo.mobile}}</view>
    <view class="p-re head m-t-20 oh">
      <view class="fl userImg">
        <image :src="userInfo.avatarUrl" mode="widthFix" @click="goPersonal"></image>
      </view>
      <view class="m-l-10 fl oh">
        <view class="grade f-20 f-w">
          <text class="linear-word">LV1</text>
          <text class="grade-btn m-l-10 b-f0f col-f" @click="goMember">查看特权</text>
        </view>
        <view class="sign m-t-20 f-24 col-f">个性签名：{{userInfo.sign}}</view>
      </view>
      
    </view>
    <view class="menu p-re">
      <view v-for="(item, index) in mycircle" :key="index" class="span-item">
        <view class="num f-28 col-f">{{item.num}}</view>
        <view class="m-t-10 f-26 col-6">{{item.title}}</view>
      </view>
    </view>
    <view class="tabBar">
      <view v-for="(item, index) in tabList" :key="index" :class="{'tabs f-32 col-f': true, 'f-40 col-f0f': tabIndex === index}" @click="selectTab(index)">{{item}}</view>
    </view>
    
    <view class="good-main">
      <articleList :articleList="tabIndex === 0? articleList: like_article_list"/>
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
        userInfo: {
          avatarUrl: '',
          nickName: '',
          mobile: '',
          sign: ''
        },
        mycircle: [{
          num: 0,
          name: 'focus_num',
          title: '关注'
        }, {
          num: 0,
          title: '粉丝',
          name: 'fans'
        }, {
          num: 0,
          title: '点赞',
          name: 'like_num'
        }],                               // 信息菜单栏
        articleList: '',                  // 分享文章列表
        like_article_list: '',            // 点赞文章列表
        tabList: ['分享', '点赞'],
        tabIndex: 0
      }
    },
    onLoad() {
      let that= this
      that.getDetail()
    },
    methods: {
      getDetail() {
        let that= this,
          params= {
            url: that.$api.userInfo
          }
        that.$httpRequest(params).then(res => {
          let response= res.data
          for(let item in that.userInfo) {
            that.userInfo[item]= response.userInfo[item]
          }
          console.log(response)
          that.articleList= response.article_list
          
          that.articleList= that.articleList.concat(response.article_list)
          
          that.like_article_list= response.like_article_list
          
          that.mycircle.map(item => {
            item.num= response.mycircle[item.name]
          })
        })
      },
      
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
    overflow: hidden;
    
    border-radius: 100%;
    &>image{
      height: 100%;
      width: 100%;
    }
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
    padding: 39upx 40upx 50upx;
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
    width: 33%;
    text-align: center;
  }
  .good-main{
    padding: 0 28upx;
  }
</style>
