<template>
  <view class="container">
    <topBar :isindex="false">
      <view class="search col-f">
        <view class="iconfont" @click="goBack">&#xe61b;</view>
        <view class="center">
          <image :src="detail.user.avatarUrl" mode="aspectFill" class="b-9"></image>
          <text class="name onelist-hidden">{{ detail.user.nickName }}</text>
        </view>
        <button type="" plain="true" open-type="share"  class="dis-inline-block share-btn"></button>
        <text class="iconfont share-icon">&#xe6b6;</text>
        <text v-show="isAuthor" class="iconfont m-l-30" @click="deleteArticle(article_id)">&#xe613;</text>
      </view>
    </topBar>
    
    <scroll-view scroll-y="true" class="content" @scroll="onScroll">
      <view v-if="detail.articleimage.length > 0" class="banners">
        <banner :swiperList="detail.articleimage" :borderWidth="false"></banner>
      </view>
      <view class="cultureInfo col-c">
        <view v-if="detail.article_title" class="cultureTitle f-40">{{ detail.article_title }}</view>
        <view v-if="detail.subtitle" class="f-24 col-c">{{detail.subtitle}}</view>
        <view class="m-t-20 cultureTime f-24 col-6">{{ detail.input_time }}</view>
        <view class="cultureWords f-28 col-c">
          <!-- 富文本 -->
          <rich-text type="node" :nodes="strings"></rich-text>
        </view>
      </view>
      
      <!-- 评论 -->
      <view class="comment">
        <view class="total f-30 col-9">评论  ({{ detail.comments.num }})</view>
        <view v-for="(item, index) in detail.comments_show" :key="index" v-if="index < 10" :class="{ item: true, 'border-box': true, 'no-border': index === 0 }">
          <view class="writer">
            <view class="writerImg">
              <image :src="item.avatarUrl" mode=""></image>
            </view>
            <view class="writer-center">
              <view class="writer-father">
                <view class="writer-name f-26 col-6">{{ item.nickName }}</view>
                <view class="writer-speak f-28 col-c"  @click="commentComment(item.id)">{{ item.content }}<text class="f-22 col-6">{{ item.input_date }}</text></view>
                <view class="zan">
                  <text :class="{'iconfont col-6': true, 'col-f0f': item.islike === 'yes'}" @click="zanAction(item, index)">&#xe610;</text>
                  <text class="col-6">{{ item.likenum }}</text>
                </view>
              </view>
              <view v-for="(li, num) in item.replys" :key="num" v-if="num < 2 " class="writer-child">
                <image :src="li.reply_avatarUrl" class="childImg"></image>
                <view class="childCenter">
                  <view class="writer-name f-26 col-6">{{ li.reply_name }}</view>
                  <view class="writer-speak f-28 col-c">{{ li.reply_content }}<text class="f-22 col-6">{{ li.reply_input_date }}</text></view>
                </view>
                <view class="zan">
                  <text :class="{'iconfont col-6': true, 'col-f0f': li.isreplylike === 'yes'}" @click="commentZanAction(li, index, num)">&#xe610;</text>
                  <text class="col-6">{{ li.replylikenum }}</text>
                </view>
              </view>
            </view>
          </view>
        </view>
      </view>
    </scroll-view>
    
    <!-- 固定在底部评论输入框 -->
    <view v-if="!comment_id" class="speak b-13 border-box">
      <input type="text" class="b-6 col-c" v-model="speakVal" placeholder="留下你的精彩评论吧" placeholder-style="color: #ccc" @confirm="addComment"/>
      <view>
        <text :class="{'iconfont col-6': true, 'col-f0f': detail.isLike}" @click="likeArticle">&#xe610;</text>
        <text class="col-6">{{ detail.articlelike_count }}</text>
      </view>
      <view>
        <text class="iconfont f-w col-6">&#xe65b;</text>
        <text class="col-6">{{ detail.show_views }}</text>
      </view>
    </view>
    
    <view v-else class="speak b-13 border-box">
      <input type="text" class="b-6 col-c" focus="true" v-model="commentVal" placeholder="对此评论你想说 ~ " placeholder-style="color: #ccc" @confirm="addCommentReply" @blur="closeComment"/>
    </view>
  </view>
</template>

<script>
  import topBar from  "../../components/topBar.vue"
  import banner from  "../../components/banner.vue"
  
  export default {
    components: {
      topBar,
      banner
    },
    data() {
      return {
        scrollTop: 0,                   // 距滚动距离
        isHeadShow: true,               // 头部作者名
        title: '',
        article_id: '',                 // 文章ID
        isAuthor: false,                // 是否是此文章的作者
        indicatorDots: true,
        autoplay: true,
        interval: 2000,
        duration: 500,
        indicatorActiveColor: '#ffffff',
        detail: {},
        userInfo: {},
        swiperList: [],               // 轮播图
        strings: [],                  // 评论信息
        speakVal: '',                 // 我的评论value值
        commentVal: '',               // 评论回复的value值
        comment_id: '',               // 是否评论评论、默认评论文章
        sumList: {
          zanTotal: 2000,
          starTotal: 1578,
          megTotal: 1959
        }
      }
    },
    // 接受首页传递的参数
    onLoad(option) {
      this.article_id = option.article_id
      this.getDetail(this.article_id)
    },
    computed: {
      statusBarHeight() {
        return this.$store.state.statusBarHeight
      }
    },
    methods: {
      goBack() {
        uni.navigateBack({
          delta: 1
          })
      },
      onScroll(e) {
        let that = this
        if(e.detail.scrollTop > that.scrollTop && that.isHeadShow) {
          that.isHeadShow= false
        } else if(e.detail.scrollTop < that.scrollTop && !that.isHeadShow){
          that.isHeadShow= true
        }
        that.scrollTop= e.detail.scrollTop
      },
      
      // 获取文章详情
      getDetail(id) {
        let that= this
        let params = {
          url: that.$api.articleDetail,
          data: {
          article_id: id
          }
        }
        that.$httpRequest(params).then((res) => {
          that.detail = res.data.detail
          // 判断是否是作者本人
          uni.getStorage({
            key: 'user_id',
            success: function(result) {
              if(result.data === res.data.detail.user_id) {
                that.isAuthor= true
              }
            }
          })
          
          var richtext =  res.data.detail.article_content
          const regex = new RegExp('img')
          richtext= richtext.replace(regex, `img style="max-width: 100%;"`)
          that.strings = richtext
        })
      },
      // 评论点赞
      zanAction(item, index) {
        console.log('点赞', item, item.islike, index)
        let that= this
        let url = this.$api.commentUnlike
        if (item.islike === 'no') {
          url = this.$api.commentLike
        }
        let params= {
          url: url,
          data: {
            comment_id: item.id
          }
        }
        that.$httpRequest(params).then((res) => {
          console.log('成功了', res)
          switch(this.detail.comments_show[index].islike) {
            case 'yes':
              this.detail.comments_show[index].islike = 'no'
              this.detail.comments_show[index].likenum -= 1
              uni.showToast({
              	title: '取消点赞成功',
                icon: 'none'
              })
              break
            case 'no':
              this.detail.comments_show[index].islike = 'yes'
              this.detail.comments_show[index].likenum += 1
              uni.showToast({
              	title: '点赞成功',
                icon: 'none'
              })
              break
          }
        })
      },
      
      // 评论回复点赞
      commentZanAction(li, index, num) {
        console.log('点赞', li, li.isreplylike, index, num)
        let that= this
        let url = this.$api.commentreplyunlike
        if (li.isreplylike === 'no') {
          url = this.$api.commentReplyLike
        }
        let params= {
          url: url,
          data: {
            reply_id: li.id
          }
        }
        that.$httpRequest(params).then((res) => {
          console.log('成功了', res)
          switch(this.detail.comments_show[index].replys[num].isreplylike) {
            case 'yes':
              this.detail.comments_show[index].replys[num].isreplylike = 'no'
              this.detail.comments_show[index].replys[num].replylikenum -= 1
              uni.showToast({
              	title: '取消点赞成功',
                icon: 'none'
              })
              break
            case 'no':
              this.detail.comments_show[index].replys[num].isreplylike = 'yes'
              this.detail.comments_show[index].replys[num].replylikenum += 1
              uni.showToast({
              	title: '点赞成功',
                icon: 'none'
              })
              break
          }
        })
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
      
      // 分享按钮
      onShareAppMessage(res) {
        let that= this,
          params = {
            url: this.$api.articleShare,
            method: 'POST',
            data: {
              article_id: that.article_id,
              source: 'wechat'
            }
          }
        if (res.from === 'button') {// 来自页面内分享按钮
          console.log('分享按钮点击')
          that.$httpRequest(params).then((res) => {
            console.log(res)
          })
        }
        return {
          title: that.detail.article_title,
          path: '/pages/index/article/detail?article_id=' + that.article_id
        }
      },
      
      // 删除文章
      deleteArticle(article_id) {
        let that= this,
          params = {
            url: this.$api.articleDelete,
            method: 'POST',
            data: {
              article_id: that.article_id
            }
          }
        uni.showModal({
          title: '温馨提示',
          content: '确认删除此篇文章？',
          success: function (res) {
            if (res.confirm) {
              console.log('用户点击确定')
              that.$httpRequest(params).then((res) => {
                uni.showToast({
                  title: '删除成功',
                  icon: 'none',
                  success: () => {
                    uni.navigateBack({
                      delta: 1
                    })
                  }
                })
              })
            } else if (res.cancel) {
              uni.showToast({
                title: '已取消',
                icon: 'none'
              })
            }
          }
        })
      },
      
      // 发布评论
      addComment(e) {
        console.log(this.speakVal)
        let that= this,
          params= {
          url: this.$api.articleAddComment,
          data: {
            article_id: that.article_id,
            comment: e.detail.value
          },
        }
        that.$httpRequest(params).then((res) => {
          that.closeComment()
          that.getDetail(this.article_id)
          uni.showToast({
            title: '发布成功',
            icon: 'none'
          })
        })
      },
      // 评论回复
      addCommentReply(e) {
        let that= this,
          params= {
            url: this.$api.commentreply,
            data: {
              comment_id: this.comment_id,
              comment: e.detail.value
            }
          }
        that.$httpRequest(params).then((res) => {
          that.closeComment()
          that.getDetail(this.article_id)
          uni.showToast({
            title: '发布成功',
            icon: 'none'
          })
        })
      },
      // 评论评论
      commentComment(id) {
        console.log('点击了', id)
        this.comment_id= id
      },
      // 取消评论回复
      closeComment() {
        this.comment_id= ''
        this.commentVal= ''
        this.speakVal= ''
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    height: 100%;
    width: 100%;
    overflow: hidden;
  }
  .content{
    height: calc(100% - 188upx);
    overflow: hidden;
  }
  .search{
    display: flex;
    width: 100%;
    box-sizing: border-box;
    padding: 0 30upx;
    line-height: 88upx;
    align-items: center;
    .center{
      flex: 1;
      display: flex;
      margin: 0 34upx;
      align-items: center;
      &>image{
        height: 60upx;
        width: 60upx;
        margin-right: 27upx;
        border-radius: 100%;
      }
    }
    .share-btn{
      opacity: 0;
      height: 60upx;
      width: 60upx;
    }
    .share-icon{
      margin-left: -40upx;
    }
  }
  .banners{
    width: 100%;
    height: 600upx;
    border-bottom: 1px solid #333;
  }
  .cultureInfo{
    display: flex;
    flex-direction: column;
    padding: 30upx 30upx 0;
    width: 100%;
    box-sizing: border-box;
    overflow: hidden;
    .cultureTitle{
      line-height: 56upx;
    }
    .cultureTime{
      margin-bottom: 30upx;
      height: 20upx;
      line-height: 20upx;
    }
    .cultureWords{
      width: 100%;
      word-break:break-all;
      line-height: 40upx;
      image{
        max-width: 500upx;
      }
    }
  }
  .comment{
    padding: 40upx 40upx 0 35upx;
    margin: 30upx 0 99upx;
    .total{
      line-height: 34upx;
    }
    .item{
      min-height: 150upx;
      padding-top: 30upx;
      .writer{
        display: flex;
        .writerImg{
          height: 66upx;
          width: 66upx;
          border-radius: 100%;
          margin-right: 30upx;
          border: 1px solid #f5f5f5;
          overflow: hidden;
          &>image{
            height: 100%;
            width: 100%;
          }
        }
        .writer-center{
          flex: 1;
          padding-right: 70upx;
          overflow: hidden;
          .writer-father, .writer-child{
            position: relative;
            .zan{
              position: absolute;
              right: -70upx;
              top: 0;
            }
          }
          .writer-name{
            line-height: 25upx;
            margin-bottom: 20upx;
          }
          .writer-speak{
            margin-bottom: 40upx;
            line-height: 36upx;
            word-break:break-all;
            &>text{
              margin-left: 10upx;
              line-height: 36upx;
            }
          }
          .writer-child{
            display: flex;
            min-height: 150upx;
            .childImg{
              height: 44upx;
              width: 44upx;
              margin-right: 30upx;
              background: #ccc;
              border-radius: 100%;
            }
            .childCenter{
              flex: 1;
            }
            
          }
        }
        .zan{
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .iconfont{
            font-size: 36upx;
            margin: 0;
          }
          &>text{
            font-size: 20upx;
            line-height: 36upx;
          }
        }
      }
    }
    .no-border{
      border-top: 0;
    }
  }
  .speak{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 99upx;
    margin-top: 1upx;
    display: flex;
    text-align: left;
    align-items: center;
    justify-content: space-between;
    padding: 0 30upx;
    border-top: 1px solid #666;
    &>input{
      flex: 1;
      height: 40upx;
      border-radius: 20upx;
      padding: 0 17upx;
      box-sizing: border-box;
      font-size: 26upx;
      background: #666;
    }
    &>view{
      margin: 0 28upx 0;
      height: 60upx;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconfont{
        font-size: 36upx;
        line-height: 36upx;
        margin: 0;
      }
      &>text{
        font-size: 20upx;
        line-height: 25upx;
      }
    }
  }
</style>
