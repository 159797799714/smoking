<template>
  <view class="content col-c">
    <view class="theme-head dis-flex">
      <view class="author-img">
        <image src="../../../static/img/card.png" mode=""></image>
      </view>
      <view>
        <view class="f-30">sunny(小微)</view>
        <view class="f-24">电音聚集地</view>
      </view>
      <view class="f-24">
        <view class="zan dis-inline-block">
          <text :class="{'search-icon': true, 'iconfont': true, 'isZan': item.islike !== 'no'}" @click="zanAction(item, index)">&#xe610;</text>
          <text class="m-l-10 col-6">{{ item.islike_count }}</text>
        </view>
        <view>文章 2222</view>
      </view>
      <view>
        <text class="dis-inline-block b-90f f-28">已添加</text>
      </view>
    </view>
    
    <view class="section">
      <view v-if="articleList.length > 0" v-for="(item, index) in articleList" :key="index" class="culture bg-black">
        <image v-if="item.articleimage.length > 0" :src="item.articleimage[0].file_path" mode="widthFix" @click="goInfo(item.article_id)"></image>
        <view class="item-words">
          <view v-if="item.article_title" class="title f-36 col-f twolist-hidden" @click="goInfo(item.article_id)">{{ item.article_title }}</view>
          <view v-if="item.article_content" class="info f-24 col-6 twolist-hidden" @click="goInfo(item.article_id)">{{ item.article_content }}</view>
          <view class="control m-t-20 dis-flex flex-x-between flex-y-center f-24 col-6">
            
            <view class="dis-flex flex-x-between flex-y-center">
              <image :src="item.user.avatarUrl" mode="widthFix" class="writer-img"/>
              <text class="m-l-10 f-24 col-9 onelist-hidden">{{item.user.nickName}}</text>
            </view>
            <view>
              <view class="look dis-inline-block">
                <text class="search-icon iconfont">&#xe668;</text>
                <text class="m-l-10">{{ item.show_views }}</text>
              </view>
              <view class="zan dis-inline-block">
                <text :class="{'search-icon': true, 'iconfont': true, 'isZan': item.islike !== 'no'}" @click="zanAction(item, index)">&#xe610;</text>
                <text class="m-l-10 col-6">{{ item.islike_count }}</text>
              </view>  
            </view>
          </view>
        </view>
      </view>
      
      <view v-if="articleList !== '' && articleList.length < 1" class="null dis-flex flex-dir-col  flex-y-center">
        <view class="iconfont f-60 col-f">&#xe698;</view>
        <view class="m-t-30 col-f font-32">亲，暂无相关文章哦！</view>
      </view>
    </view>
  </view>
</template>

<script>
  export default{
    data() {
      return {
        articleList: '',
        theme: ''
      }
    },
    onLoad(opt) {
      console.log(opt.id)
      this.getDetail(opt.id)
    },
    methods: {
      getDetail(id) {
        let that= this,
          params= {
            url: that.$api.themeByArticleList,
            method: 'POST',
            data: {
              category_id: id
            }
          }
        that.$httpRequest(params).then(res => {
          that.theme= res.data.theme
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .author-img{
    height: 97upx;
    width: 97upx;
    border-radius: 100%;
    overflow: hidden;
    &>image{
      height: 100%;
      width: 100%;
    }
  }
  .culture {
    box-sizing: border-box;
    padding: 30upx 0;
    width: 100%;
  
    &>image {
      margin-bottom: 15upx;
      width: 100%;
    }
  
    .item-words {
      padding: 0 21upx;
  
      .title {
        padding: 0;
        margin-top: -6upx;
        margin-bottom: 17upx;
        max-height: 90upx;
        line-height: 48upx;
        overflow: hidden;
        text-overflow: ellipsis;
      }
  
      .info {
        margin-top: -6upx;
        height: 62upx;
        width: 100%;
        white-space: wrap;
        overflow: hidden;
        text-overflow: ellipsis;
        word-break: break-all;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  
    .control {
      line-height: 25upx;
      .writer-img{
        height: 40upx;
        width: 40upx;
        border-radius: 100%;
        overflow: hidden;
      }
      .look {
        height: 29upx;
      }
  
      .zan {
        height: 29upx;
        margin-left: 12upx;
      }
  
      .isZan {
        position: relative;
  
        &::before {
          content: '';
          height: 11upx;
          width: 12upx;
          position: absolute;
          bottom: 6upx;
          left: 8upx;
        }
      }
    }
  }
</style>
