<template>
  <view>
    <!-- 头部 -->
    <topBar :isindex="false" :title="info.user.nickName"/>
    
    <view class="info oh col-c f-26">
      <view class="leftBox fl oh">
        <image class="userImg" :src="info.user.avatarUrl" mode="widthFix"></image>
        <view class="dis-inline-block m-l-20">
          <view>绚等级 <text class="m-l-10 f-32 col-90f">Lv{{info.level}}</text></view>
          <view class="m-t-25">积分详情 <text class="m-l-10 f-32 col-f">{{info.integral}}</text></view>  
        </view>
        
      </view>
      
      <view class="fr rightBox">
        <navigator url="./plan" class="dis-inline-block t-c m-r-43">
          <image class="iconImg" src="../../static/mine/card/china.png" mode="widthFix"></image>
          <view class="m-t-20 col-f t-c">习惯打卡</view>
        </navigator>
        <navigator url="./todayFoot" class="dis-inline-block t-c">
          <image class="iconImg" src="../../static/mine/card/china.png" mode="widthFix"></image>
          <view class="m-t-20 col-f t-c">行走步数</view>
        </navigator>
      </view>
    </view>
    
    <view class="good-main">
      <goodList :goodList="goodList"/>
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
        info: {},       // 首页详情
        
        level: {
          name: '绚等级',
          num: 1
        },
        spanList: [{
          name: '积分详情',
          num: '666',
          url: './integralDetail'
        }, {
          name: '习惯打卡',
          num: '666',
          url: './plan'
        }, {
          name: '行走步数',
          num: '666',
          url: './todayFoot'
        }],
        goodList: []
      }
    },
    onLoad() {
      this.getDetail()
      
      let str= 'a: 乐乐钱, b: 快活林'
      
      for(let i= 0; i< str.length; i++) {
        console.log(str.charCodeAt(i))
      }
      
      // let str2= '{'+ str + '}'
      // console.log(str2)
      // let obj= JSON.parse(str2)
      // console.log(obj)
    },
    methods: {
      getDetail() {
        let that= this
        let params = {
          url: that.$api.integralIndex
        }
        that.$httpRequest(params).then(res => {
          console.log(res.data.info)
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
    padding: 0 50upx;
    margin-bottom: 80upx;
    line-height: 1;
    .leftBox,.rightBox{
      display: inline-block;
    }
    .leftBox{
      padding-top: 24upx;
    }
    .rightBox{
      .iconImg{
        height: 90upx;
        width: 90upx;
      }
    }
  }
  .good-main{
    padding: 0 30upx;
  }
</style>
