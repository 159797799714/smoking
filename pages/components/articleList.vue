<template>
  <view class="articleList">
    <view v-for="(item, index) in articleList" :key="index" class="article-item">
      <view class="article-img">
        <image :src="item.articleimage[0].file_path" mode="widthFix"></image>
      </view>
      <view class="article-info">
        <view class="article-title f-24 col-6 twolist-hidden">{{item.article_content}}</view>
        <view class="dis-flex flex-x-between flex-y-center f-24 col-f oh">
          <view class="box dis-flex flex-x-between flex-y-center">
            <image :src="item.user.avatarUrl" mode="widthFix" class="writer-img"/>
            <text class="m-l-10 f-24 col-9 onelist-hidden">{{item.user.nickName}}</text>
          </view>
          <view class="box dis-flex flex-x-between flex-y-center">
            <image src="../../static/mine/card/china.png" mode="widthFix" class="writer-img"/>
            <text class="m-l-7 f-24 col-9 onelist-hidden">{{item.islike_count}}</text>
          </view>
        </view>  
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      articleList: Array
    },
    data () {
      return {
        
      }
    }
  }
</script>

<style lang="scss" scoped>
  .articleList{
    line-height: 1;
  }
  .article-item{
    display: inline-block;
    width: calc(50% - 18upx);
    height: 510upx;
    margin-bottom: 20upx;
    border: 1upx solid #eee;
  }
  .article-item:nth-of-type(2n) {
    margin-left: 30upx;
  }
  .article-img{
    width: calc(100% - 2upx);
    height: 330upx;
    overflow: hidden;
    &>image{
      width: 100%;
    }
  }
  .article-title{
    line-height: 36upx;
    height: 72upx;
    margin-bottom: 24upx;
  }
  .article-info{
    padding: 18upx 15upx 0;
    .writer-img{
      height: 40upx;
      width: 40upx;
      border-radius: 100%;
      overflow: hidden;
    }
  }
  .box{
    line-height: 40upx;
  }
  .m-l-7{
    margin-left: 4upx;
  }
  
</style>
