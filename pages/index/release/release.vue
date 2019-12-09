<template>
  <view class="p-30">
    <!-- 头部 -->
    <topBar :isindex="false" :title="'文章发布'">
      <view class="col-f iconfont" @click="goIndex">&#xe61b;</view>
    </topBar>
    <view class="content">
      <input type="text" class="title f-24 col-f" placeholder="标题是吸引别人看关注 (可选可不选)" placeholder-style="color: #ccc; font-size: 24upx;" maxlength="20"/>
      <textarea  class="article-content f-24 col-f" placeholder="这一刻的分享" placeholder-style="color: #ccc; font-size: 24upx;" maxlength="200"/>
      
      <view class="img-box">
        <view v-for="(item, index) in imgArr" :key="index" class="img-item col-f0f">
          <image :src="item" mode="widthFix"></image>
          <view class="del-btn b-9 f-w col-13 f-30">+</view>
        </view>
        
        <view class="img-item col-f0f" @click="uploadImg"></view>
      </view>
      
      <view class="line-item">
        <image src="../../../static/img/tabbar/market1.png" class="icon-img" mode="widthFix"></image>
        <input type="text" placeholder="请输入参与话题" placeholder-style="color: #fff;font-size: 24upx;"/>
        <image src="../../../static/mine/mine4.png" class="fr icon-img" mode="widthFix"></image>
      </view>
      
      <view class="line-item">
        <image src="../../../static/img/tabbar/market1.png" class="icon-img" mode="widthFix"></image>
        <input type="text" placeholder="所在的位置" placeholder-style="color: #fff;font-size: 24upx;"/>
        <image src="../../../static/mine/mine4.png" class="fr icon-img" mode="widthFix"></image>
      </view>
      
      <view class="release-btn">
        <view class="btn-main">
          <text class="f-44 col-f f-w">发布</text>
        </view>
      </view>
      
    </view>  
  </view>
  
</template>

<script>
  import topBar from '../../components/topBar.vue'
  export default {
    components: {
      topBar: topBar
    },
    data () {
      return {
        imgArr: [],
        time: 0
      }
    },
    methods: {
      goIndex() {
        uni.switchTab({
          url: '../index'
        })
      },
      
      // 上传图片
      uploadImg () {
        let that= this
        let length= this.imgArr.length
        let leavelength = 3 - length
        if(leavelength > 0) {
          uni.chooseImage({
            count: leavelength, //默认9
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album'], //从相册选择
            success: function (res) {
              console.log(JSON.stringify(res.tempFilePaths))
              res.tempFilePaths.map((item, index) => {
                that.imgArr.push(item)
              })
            }
          }) 
        } else {
          uni.showToast({
            title: '最多只能传9张图片哦',
            icon: 'none'
          })
        }
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content{
    padding: 0 36upx;
    .title{
      height: 78upx;
    }
    .article-content{
      height: 215upx;
      width: 100%;
      box-sizing: border-box;
      padding: 17upx 0;
      border-bottom: 2upx solid #333;
      border-top: 2upx solid #333;
      line-height: 36upx;
    }
    .img-box{
      padding: 43upx 0 23upx;
      border-bottom: 2upx solid #333;
      .img-item{
        display: inline-block;
        height: 115upx;
        width: 115upx;
        margin: 0 23upx 20upx 0;
        border-radius: 15upx;
        border: 2upx solid #9900ff;
        overflow: hidden;
        &>image{
          width: 100%;
        }
      }
    }
    .line-item{
      padding: 40upx 0;
      line-height: 40upx;
      border-bottom: 2upx solid #333;
      .icon-img{
        display: inline-block;
        height: 40upx;
        width: 40upx;
      }
      &>input{
        display: inline-block;
        width: 460upx;
        padding: 0 20upx;
      }
    }
    .release-btn{
      position: fixed;
      bottom: 100upx;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 143upx;
      width: 143upx;
      line-height: 143upx;
      padding: 4upx;
      border-radius: 100%;
      background: linear-gradient(-70deg,rgba(26,182,252,1),rgba(82,95,247,1),rgba(191,35,242,1),rgba(251,0,240,1));
      .btn-main{
        height: 100%;
        width: 100%;
        border-radius: 100%;
        background: #131313;
        text-align: center;
      }
    }
  }
</style>
