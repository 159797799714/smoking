<template>
  <view class="col-c p-30">
    <!-- 头部 -->
    <topBar :isindex="false" :title="token?info.user.nickName: ''"/>
    <view class="swiper">
      <banner></banner>
    </view>
    
    <view class="tabBar dis-flex p-re">
      <view v-for="(item, index) in tabs" :key="index" :class="{'tab f-32 t-c': true, 'col-f0f f-40': tabIndex === index}" @click="selectTab(index)">{{item}}</view>
      <view class="slipe b-f0f p-ab" :style="slipeStyle"></view>
    </view>
    
    <!-- 热门活动 -->
    <view v-if="tabIndex === 0" class="activity">
      <view class="activity-item">
        <view class="img">
          <image src="" mode="widthFix"></image>
        </view>
        <view class="dis-flex flex-x-between">
          <view class="activity-title f-36 col-c onelist-hidden">2020深圳奶油田电音节</view>
          <view>
            <text class="iconfont f-32 col-f0f">&#xe668;</text>
            <text class="m-l-10 num f-24 col-9">2000</text>
          </view>
        </view>
      </view>
    </view>
    
    <!-- 抽奖 -->
    <view v-else-if="tabIndex === 1" class="lucky">
      <view class="class-menu dis-flex">
        <view v-for="(item, index) in classMenu" :key="index" :class="{'classBar f-28 t-c': true, 'col-f0f': classIndex === index}" @click="selectMenu(index)">{{item}}</view>
      </view>
      
      <view class="lucky-item dis-flex">
        <view class="good-img">
          <image src="../../static/img/success.png" mode="aspectFill"></image>
        </view>
        <view class="right-box dis-flex flex-dir-col flex-x-between">
          <view>
            <view class="title col-c f-28 twolist-hidden">nova 5 Pro超级夜景4800万</view>
            <view class="subtitle col-9 f-24 twolist-hidden">易烊千玺同款5G标杆麒麟990旗舰芯片超级智慧屏</view>
          </view>
          <view>
            <text class="f-34 col-f0f">￥0 抽奖</text>
            <text class="f-24 t-line col-9">原价￥1999</text>
            <view class="m-t-15 col-c f-26">2019.10.10  18:00开奖</view>
          </view>
        </view>
      </view>
      
    </view>
    
    
    <!-- 积分商城 -->
    <view v-else class="good-main">
      <goodList :goodList="goodList"/>
      
      <view v-if="goodList !== '' && goodList.length < 1" class="null dis-flex flex-dir-col  flex-y-center">
        <view class="iconfont f-60 col-f">&#xe698;</view>
        <view class="m-t-30 col-f font-32">亲，暂无可兑换商品哦！</view>
      </view>
    </view>
    
  </view>
</template>

<script>
  import topBar from '../components/topBar.vue'
  import banner from '../components/banner.vue'
  import goodList from '../components/goodList.vue'
  export default {
    components: {
      topBar: topBar,
      goodList: goodList,
      banner: banner
    },
    computed: {
      token: function() {
        return this.$store.state.token
      }
    },
    data () {
      return {
        tabs: ['热门活动', '抽奖', '积分商场'],
        tabIndex: 0,                                     // 默认选中第一个
        slipeStyle: '',
        tabWidth: '',                                    // 每一个tab的宽度
        classMenu: ['抽奖记录', '进行中', '敬请期待'],     // 抽奖分类
        classIndex: 1,                                   // 默认选中进行中
        info: {
          level: 1,
          integral: 0
        },                                               // 首页详情
        goodList: ''
      }
    },
    onShow() {
      if(!this.info.user) {
        this.getDetail()
      }
      this.setLeftStyle(this.tabIndex)
    },
    methods: {
      
      // 积分商城
      getDetail() {
        let that= this
        let params = {
          url: that.$api.integralIndex
        }
        that.$httpRequest(params).then(res => {
          that.info= res.data.info
          let list= res.data.info.goods_list.data,
            arr= []
          list.map((item, index) => {
            let obj= {}
            obj.goods_id= item.goods_id
            obj.grade= item.sku[0].goods_price
            obj.name= item.goods_name
            obj.image= item.image
            arr.push(obj)
          })
          that.goodList= arr
        })
      },
      navigate(url) {
        uni.navigateTo({
          url: url
        })
      },
      
      // 选择热门活动，抽奖，或者积分商场
      selectTab(index) {
        this.tabIndex= index
        this.setLeftStyle(index)
      },
      
      // 设置底部slipe的偏移量
      setLeftStyle(index) {
        let that= this,
          left= ''
        let query = uni.createSelectorQuery().in(this);
        query.selectAll('.tab').boundingClientRect(data => {
          if(!that.tabWidth) {
            that.tabWidth= data[index].width
          }
          left =  that.tabWidth * index + that.tabWidth / 2 - 39
          that.slipeStyle= 'left: ' + left.toFixed(0) + 'px'
        }).exec();
      },
      
      // 选择抽奖分类
      selectMenu(index) {
        this.classIndex= index
      }
    }
  }
</script>

<style lang="scss" scoped>
  .swiper{
    height: 405upx;
    width: 100%;
  }
  .tabBar{
    .tab{
      width: 33%;
      line-height: 130upx;
    }
    .slipe{
      bottom: 36upx;
      width: 78px;
      height: 2upx;
      transition: 500ms;
    }
  }
  .activity{
    .activity-item{
      margin-bottom: 20upx;
      .img{
        width: 100%;
        &>image{
          width: 100%;
        }
      }
      .activity-title{
        box-sizing: border-box;
        padding-left: 20upx;
        line-height: 95upx;
      }
    }
  }
  .class-menu{
    border-top: 1upx solid #33CCFF;
    .classBar{
      width: 33%;
      line-height: 127upx;
    }  
  }
  .lucky-item{
    height: 300upx;
    width: 100%;
    box-sizing: border-box;
    padding: 20upx;
    margin-bottom: 10upx;
    .good-img{
      margin-right: 34upx;
      height: 260upx;
      width: 260upx;
      overflow: hidden;
      &>image{
        height: 100%;
        width: 100%;
      }
    }
    .right-box{
      flex: 1;
      .subtitle{
        line-height: 36upx;
      }
    }
  }
  .good-main{
    margin-top: 40upx;
    padding: 0 30upx;
  }
</style>
