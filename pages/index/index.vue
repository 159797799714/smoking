<template>
  <view class="container">
    <!-- 头部 -->
    <topBar :isindex="true" />

    <scroll-view scroll-y="true" class="content bg-black" @scrolltolower="lower">
      <view class="banner-swiper bg-black">
        <banner :swiperList="swiperList"></banner>
      </view>
      <view class="TabNav dis-flex flex-x-around bg-black col-cc">
        <view v-for="(li, num) in tabList" :key="num" :class="{'item f-32 col-9': true, 'f-40 col-f0f': li.category_id === category_id }"
          @click="selectTab(li, num)">{{ li.name }}</view>
      </view>

      <view class="section">
        <view v-if="articleList.length > 0" v-for="(item, index) in articleList" :key="index" class="culture bg-black">
          <image :src="item.articleimage[0].file_path" mode="widthFix" @click="goInfo(item.article_id)"></image>
          <view class="item-words">
            <view v-if="item.article_title" class="title f-36 col-f" @click="goInfo(item.article_id)">{{ item.article_title }}</view>
            <view v-if="item.subtitle" class="info f-24 col-6" @click="goInfo(item.article_id)">{{ item.subtitle }}</view>
            <view class="control f-24 col-6">
              <view class="look">
                <text class="search-icon iconfont">&#xe6cc;</text>
                <text>{{ item.show_views }}</text>
              </view>
              <view class="zan">
                <text :class="{'search-icon': true, iconfont: true, isZan: item.islike !== 'no'}" @click="zanAction(item, index)">&#xe63a;</text>
                <text>{{ item.islike_count }}</text>
              </view>
            </view>
          </view>
        </view>
        
        <view v-if="articleList.length < 1" class="null dis-flex flex-dir-column  flex-y-center">
          <view class="iconfont font-88 col-f">&#xe698;</view>
          <view class="col-f font-32">亲，暂无相关文章哦！</view>
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
        swiperList: [], // 轮播图
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
        }
      }
    },
    
    onLoad() {
      this.getBanner()
      this.getFindList()
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
        console.log('滚动到了底部')
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
            console.log(res.data.list)
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
            console.log('最新文章列表', res.data.list)
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
          if(res.code === 1) {
            console.log('关注文章列表', res.data.list)
            if(that.page.current_page >= res.data.list.last_page && that.articleList.length < 1) {
              that.articleList= res.data.list.data
            } else {
              that.articleList= that.articleList.concat(res.data.list.data)
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
      padding: 40upx 30upx 0 30upx;
      height: 400upx;
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

    .section {
      padding: 0 30upx;
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
        display: flex;
        justify-content: flex-end;
        line-height: 25upx;

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
