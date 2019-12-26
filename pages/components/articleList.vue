<template>
  <view>
    <!-- 空白 -->
    <view v-if="leftBox.length < 1" class="null dis-flex flex-dir-col  flex-y-center">
      <view class="iconfont f-60 col-f">&#xe698;</view>
      <view class="m-t-30 col-f font-32">亲，暂无相关文章哦！</view>
    </view>
    
    <!-- 有数据 -->
    <view class="articleList">
      <view class="leftBox">
        <view v-for="(item, index) in leftBox" :key="index" class="article-item" @click="goDetail(item.article_id)">
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
                <text class="m-l-7 f-24 col-9 onelist-hidden">{{item.articlelike_count}}</text>
              </view>
            </view>  
          </view>
        </view>
      </view>
      
      <view class="rightBox">
        <view v-for="(item, index) in rightBox" :key="index" class="article-item" @click="goDetail(item.article_id)">
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
                <text class="m-l-7 f-24 col-9 onelist-hidden">{{item.articlelike_count}}</text>
              </view>
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
      // 将列表分割成左右两边的瀑布流列表
      filterArr() {
        let list= this.articleList,
          that= this
        that.leftBox= []
        that.rightBox= [] 
        
        console.log('变化了', list)
          
        if(list.length > 0) {
          list.map((item, index) => {
            if(index % 2 === 0) {
              that.leftBox.push(item)
            } else {
              that.rightBox.push(item)
            }
          })  
        }
      },
      
      // 文章点赞
      likeArticle() {
        console.log('文章点赞')
        let that= this
        let url = this.$api.articleLike
        if (this.detail.isLike) {
          url = this.$api.articleunLike
        }
        let params= {
          url: url,
          data: {
            article_id: this.article_id
          }
        }
        that.$httpRequest(params).then((res) => {
          let isLike= that.detail.isLike,
            count= that.detail.articlelike_count
          that.detail.articlelike_count= isLike? count - 1: count + 1
          that.detail.isLike= !isLike
        })
      },
      
      goDetail(id) {
        uni.navigateTo({
          url: '../index/article/detail?article_id=' + id
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
