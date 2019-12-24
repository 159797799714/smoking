<template>
  <view class="articleList">
    <view class="leftBox">
      <view v-for="(item, index) in leftBox" :key="index" class="article-item">
        <view v-if="item.articleimage.length > 0" class="article-img">
          <image :src="item.articleimage[0].file_path" mode="aspectFill"></image>
        </view>
        <view class="article-info">
          <view class="article-title f-24 col-6 twolist-hidden">{{item.article_content}}</view>
          <view class="dis-flex flex-x-between flex-y-center f-24 col-f oh">
            <view class="box dis-flex flex-x-between flex-y-center">
              <image :src="item.user.avatarUrl" mode="widthFix" class="writer-img"/>
              <text class="m-l-10 f-24 col-9 onelist-hidden">{{item.user.nickName}}</text>
            </view>
            <view class="box dis-flex flex-x-between flex-y-center">
              <text :class="{'iconfont col-6 f-36': true, 'col-f0f': item.isLike}" @click="likeArticle">&#xe610;</text>
              <text class="m-l-7 f-24 col-9 onelist-hidden">{{item.islike_count}}</text>
            </view>
          </view>  
        </view>
      </view>
    </view>
    <view class="rightBox">
      <view v-for="(item, index) in rightBox" :key="index" class="article-item">
        <view v-if="item.articleimage.length > 0" class="article-img">
          <image :src="item.articleimage[0].file_path" mode="aspectFill"></image>
        </view>
        <view class="article-info">
          <view class="article-title f-24 col-6 twolist-hidden">{{item.article_content}}</view>
          <view class="dis-flex flex-x-between flex-y-center f-24 col-f oh">
            <view class="box dis-flex flex-x-between flex-y-center">
              <image :src="item.user.avatarUrl" mode="widthFix" class="writer-img"/>
              <text class="m-l-10 f-24 col-9 onelist-hidden">{{item.user.nickName}}</text>
            </view>
            <view class="box dis-flex flex-x-between flex-y-center">
              <text :class="{'iconfont col-6 f-36': true, 'col-f0f': item.isLike}" @click="likeArticle">&#xe610;</text>
              <text class="m-l-7 f-24 col-9 onelist-hidden">{{item.islike_count}}</text>
            </view>
          </view>  
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      articleList: {
        type: Array,
        default: () => {
          return []
        }
      }
    },
    data () {
      return {
        leftBox: [],
        rightBox: []
      }
    },
    watch: {
      articleList: {
        deep: true,
        handler: function () {
          this.filterArr()
        }
      }
    },
    methods: {
      filterArr() {
        let list= this.articleList,
          that= this
        list.map((item, index) => {
          if(index % 2 === 0) {
            that.leftBox.push(item)
          } else {
            that.rightBox.push(item)
          }
        })
      },
      likeArticle() {
        console.log('点赞')
      }
    }
  }
</script>

<style lang="scss" scoped>
  .articleList{
    line-height: 1;
    display: flex;
    justify-content: space-between;
    .leftBox,.rightBox{
      width: calc(50% - 8upx);
    }
  }
  .article-item{
    width: 100%;
    box-sizing: border-box;
    padding-bottom: 30upx;
    margin-bottom: 11upx;
    border: 1upx solid #999;
  }
  .article-img{
    width: 100%;
    height: 330upx;
    overflow: hidden;
    &>image{
      width: calc(100% - 2upx);
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
