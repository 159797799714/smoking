<template>
  <view>
    <!-- 头部 -->
    <topBar :isindex="false" :title="info.user.nickName"/>
    
    <view class="info oh col-c f-26">
      <view class="leftBox fl oh dis-flex flex-y-center">
        <image class="userImg" :src="info.user.avatarUrl" mode="widthFix"></image>
        <navigator url="./integralDetail" class="flex-box t-c">
          <view class="col-f f-32">{{info.integral}}</view>
          <view class="m-t-20 col-c f-26">积分</view>
        </navigator>
      </view>
      
      <view class="fr rightBox dis-flex flex-y-center">
        <navigator url="./integralDetail" class="dis-inline-block t-c m-r-43">
          <text class="btn b-90f f-26 col-c">兑换记录</text>
        </navigator>
        <navigator url="../mine/todayExperience?type=integral" class="dis-inline-block t-c">
          <text class="btn b-90f f-26 col-c">积分详情</text>
        </navigator>
      </view>
    </view>
    
    <view class="f-32 col-c t-c">积分商品</view>
    <view class="good-main">
      <goodList :goodList="goodList"/>
      
      <view v-if="goodList.length < 1" class="null dis-flex flex-dir-col  flex-y-center">
         <view class="iconfont f-60 col-f">&#xe698;</view>
         <view class="m-t-30 col-f font-32">亲，暂无可兑换商品哦！</view>
       </view>
    </view>
    
  </view>
</template>

<script>
  import topBar from '../components/topBar.vue'
  import goodList from '../components/goodList.vue'
  export default {
    components: {
      topBar: topBar,
      goodList: goodList
    },
    data () {
      return {
        info: {
          level: 1,
          integral: 0
        },       // 首页详情
        goodList: []
      }
    },
    onShow() {
      if(!this.info.user) {
        this.getDetail()
      }
    },
    methods: {
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
      }
    }
  }
</script>

<style lang="scss" scoped>
  .m-r-43{
    margin-right: 43upx;
  }
  text{
    line-height: 1;
  }
  .userImg{
    display: inline-block;
    height: 114upx;
    width: 114upx;
    border-radius: 100%;
  }
  .info{
    padding: 24upx 50upx 0;
    margin-bottom: 80upx;
    line-height: 1;
    .leftBox{
      width: 345upx;
    }
    .rightBox{
      height: 114upx;
      .btn{
        display: block;
        padding: 0 15upx;
        line-height: 35upx;
        border-radius: 18upx;
      }
    }
  }
  .good-main{
    margin-top: 40upx;
    padding: 0 30upx;
  }
</style>
