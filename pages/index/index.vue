<template>
  <view class="container">
    <!-- 头部 -->
    <topBar :isindex="true" />

    <scroll-view scroll-y="true" class="content bg-black p-30" @scrolltolower="lower">
      <view v-if="swiperList && swiperList.length > 0" class="banner-swiper bg-black">
        <banner :swiperList="swiperList"></banner>
      </view>
      <view class="topic-list dis-flex f-24 col-c">
        <navigator url="/pages/index/themes/themesCenter" class="addTopicBtn dis-inline-block">
          <view class="add-mark"></view>
          <view class="t-c line-64">添加</view>
        </navigator>
        <view class="topic">
          <view v-for="item in mythemes" :key="item" class="topic-item">
            <view class="topic-img">
              <image :src="item.image" mode=""></image>
            </view>
            <view class="t-c line-64 onelist-hidden">{{item.name}}</view>
          </view>
        </view>
      </view>
      
      <view class="TabNav dis-flex flex-x-around bg-black col-cc">
        <view v-for="(li, num) in tabList" :key="num" :class="{'item f-32 col-9': true, 'f-40 col-f0f': li.category_id === category_id }"
          @click="selectTab(li, num)">{{ li.name }}</view>
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
                  <text :class="{'search-icon': true, iconfont: true, isZan: item.islike !== 'no'}" @click="zanAction(item, index)">&#xe610;</text>
                  <text class="m-l-10 col-6">{{ item.islike_count }}</text>
                </view>  
              </view>
              
            </view>
          </view>
        </view>
        
        <view v-if="articleList.length < 1" class="null dis-flex flex-dir-col  flex-y-center">
          <view class="iconfont f-60 col-f">&#xe698;</view>
          <view class="m-t-30 col-f font-32">亲，暂无相关文章哦！</view>
        </view>

        <!-- 发布按钮 -->
        <view class="release-btn" @click="goRelease">
          <image src="../../static/img/index/release.png" mode="widthFix"></image>
        </view>
      </view>

    </scroll-view>
  </view>
</template>

<script>
  import banner from '../components/banner.vue'
  import topBar from '../components/topBar.vue'
  export default {
    components: {
      banner: banner,
      topBar: topBar
    },
    data() {
      return {
        swiperList: '', // 轮播图
        tabList: [{
          name: '发现',
          category_id: 0
        }, {
          name: '最新',
          category_id: 1
        }, {
          name: '关注',
          category_id: 2
        }],                // 菜单
        category_id: 0,    // 菜单选中
        articleList: [],   // 文章列表
        page: {
          total: 1,
          current_page: 1,
          last_page: 1,
          per_page: 15
        },
        mythemes: ''
      }
    },
    onLoad() {
      let that= this
      that.getBanner()
      that.getFindList()
    },
    onShow() {
      this.getMyTheme()
      
      let that= this,
        id= this.category_id
      that.page.current_page= 1
      that.articleList= []
      switch (id) {
        case 0:
          that.getFindList()
          break
        case 1:
          that.getNewList()
          break
        case 2:
          if(that.$store.state.token) {
            that.getFocusList()
          } else {
            this.category_id= 0
          }
          break
      }  
    },
    watch: {
      category_id (val) {
        let that= this
        that.page.current_page= 1
        that.articleList= []
        switch (val) {
          case 0:
            that.getFindList()
            break
          case 1:
            that.getNewList()
            break
          case 2:
            that.getFocusList()
            break
        }
      }
    },
    methods: {
      // 上拉加载更多
      lower() {
        let that= this,
          val= this.category_id
        if(that.page.current_page < that.page.last_page) {
          that.page.current_page += 1
          switch (val) {
            case 0:
              that.getFindList()
              break
            case 1:
              that.getNewList()
              break
            case 2:
              that.getFocusList()
              break
            default:
              break
          }  
        } else {
          uni.showToast({
          	title: '亲！没有更多数据了哦！',
            icon: 'none'
          })
        }
        
      },
      // 设置page信息
      setPage(obj) {
        let that= this
        for(let item in obj) {
          if(item !== 'data') {
            that.page.item= obj[item]
          }
        }
      },
      
      // 首页轮播图图片
      getBanner() {
        let that= this
        let params = {
          url: that.$api.homebanners
        }
        that.$httpRequest(params).then(res => {
          if(res.code === 1) {
            // 替换轮播图图片路径数据
            that.swiperList = res.data.list
          } else {
            uni.showToast({
            	title: '轮播图图片加载失败',
              icon: 'none'
            })
          }
        }, error => {
          console.log(error);
        })
      },
      
      // 发现文章列表
      getFindList() {
        let that= this
        let params = {
          url: that.$api.recomList,
          data: {
            page: that.page.current_page
          }
        }
        that.$httpRequest(params).then(res => {
          if(res.code === 1) {
            if(that.articleList.length < 1) {
              that.articleList= res.data.list.data
            } else if(that.page.current_page < res.data.list.last_page) {
              that.articleList= that.articleList.concat(res.data.list.data)
            }
            // 设置页面信息
            that.setPage(res.data.list)
          } else  {
            uni.showToast({
            	title: '发现文章列表加载失败',
              icon: 'none'
            })
          }
        })
      },
      
      // 最新文章列表
      getNewList() {
        let that= this
        let params = {
          url: that.$api.newList,
          data: {
            page: that.page.current_page
          }
        }
        that.$httpRequest(params).then(res => {
          if(res.code === 1) {
            if(that.page.current_page >= res.data.list.last_page && that.articleList.length < 1) {
              that.articleList= res.data.list.data
            } else {
              that.articleList= that.articleList.concat(res.data.list.data)
            }
            // 设置页面信息
            that.setPage(res.data.list)
          } else {
            uni.showToast({
            	title: '最新文章列表加载失败',
              icon: 'none'
            })
          }
        })
      },
      
      // 关注文章列表
      getFocusList() {
        let that= this
        let params = {
          url: that.$api.focusList,
          data: {
            page: that.page.current_page
          }
        }
        that.$httpRequest(params).then(res => {
          if(res.code === 1 ) {
            if(that.page.current_page >= res.data.list.last_page && that.articleList.length < 1) {
              that.articleList= res.data.list.data
            } else if(res.data.list){
              that.articleList= that.articleList.concat(res.data.list)
            }
            // 设置页面信息
            that.setPage(res.data.list)
          } else {
            uni.showToast({
            	title: '关注文章列表加载失败',
              icon: 'none'
            })
          }
        })
      },
      // 获取我关注的话题列表
      getMyTheme() {
        let that= this,
          params= {
            url: that.$api.myThemes
          }
        that.$httpRequest(params).then(res => {
          that.mythemes= res.data.mythemes
        })
      },
      
      // 去发表文章
      goRelease() {
        uni.navigateTo({
          url: './release/release'
        })
      },
      
      // 选择分类
      selectTab(item, index) {
        this.category_id = item.category_id
      },
      
      // 文章详情页
      goInfo(item) {
        uni.navigateTo({
          url: './article/detail?article_id=' + item
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container{
    height: 100%;
  }
  .line-64{
    line-height: 62upx;
  }
  .topic-list{
    padding: 30upx 0;
    border-bottom: 1upx solid #33CCFF;
    .addTopicBtn{
      padding: 29upx 23upx 0 16upx;
      .add-mark{
        position: relative;
        margin-bottom: 14upx;
        height: 58upx;
        width: 58upx;
        background: linear-gradient(-35deg,#EC08F1,#923EF4,#4269F8,#0CDDFE);
        &::after{
          content: '';
          height: 100%;
          width: 6upx;
          background-color: #131313;
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
        }
        &::before{
          content: '';
          width: 100%;
          height: 6upx;
          background-color: #131313;
          position: absolute;
          top: 50%;
          left: 0;
          transform: translateY(-50%);
        }
      }
    }
    .topic{
      flex: 1;
      white-space: nowrap;
      overflow: auto;
      .topic-item{
        display: inline-block;
        width: 100upx;
        margin-left: 48upx;
        .topic-img{
          height: 100upx;
          width: 100upx;
          border-radius: 100%;
          overflow: hidden;
          &>image{
            height: 100%;
            width: 100%;
          }
        }
      }
    }
  }
  
  .content {
    width: 100%;
    height: calc(100% - 88upx);
    box-sizing: border-box;
    overflow: hidden;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
      background-color: transparent;
    }
    .banner-swiper {
      padding-top: 40upx;
      height: 400upx;
      overflow: hidden;
    }

    .word-swiper {
      height: 150upx;
    }

    .TabNav {
      position: relative;
      padding: 0 30upx;
      padding-top: 48upx;

      .item {
        flex: 1;
        max-width: 138upx;
        line-height: 40upx;
        text-align: center;
        position: relative;
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
  }
  .null{
    margin-top: 50upx;
  }
  .release-btn {
    position: fixed;
    bottom: 83upx;
    right: 59upx;
    height: 94upx;
    width: 94upx;

    &>image {
      width: 100%;
      height: 100%;
    }
  }
</style>
