<template>
  <view class="container">
    <!-- 头部 -->
    <topBar :isindex="true" :title="'门店'"/>
    <scroll-view scroll-y="true" class="content bg-black" @scrolltolower="lower">
      <view v-if="swiperList && swiperList.length > 0" class="banner-swiper bg-black">
        <banner :swiperList="swiperList"></banner>
      </view>
      
      <view class="condition">
        <image src="../../static/img/index/address.png" class="icon-img" mode="widthFix"></image>
        <text class="address m-l-10 col-f f-28 onelist-hidden" @click="getAddress">{{address? address: '点击选择所在位置'}}</text>
        <picker mode="region" @change="bindPickerChange" class="dis-inline-block">
          <view class="filter col-f f-24 b-90f">筛选门店</view>
        </picker>
        <text class="fr iconfont f-44 col-90f">&#xe64d;</text>
      </view>
      
      <view class="storeList">
        <view v-for="(item, index) in storeLists" :key="index" class="store-item oh" @click="goStoreDetail(item)">
          <view class="fl leftBox dis-inline-block">
            <view class="oh">
              <text class="fl address col-f f-28 onelist-hidden">{{item.shop_name}}</text>
              <text class="filter fr col-f f-24 b-90f">{{item.type_name}}</text>
            </view>
            <view class="line-36 col-6 f-22 onelist-hidden">{{item.region.city+item.region.province+item.region.region+item.address}}</view>
            <view class="col-6 f-24">{{item.shop_hours}}</view>  
          </view>
          <view class="fr rightBox dis-inline-block t-l">
            <text class="iconfont f-32 col-f">&#xe604;</text>
            <view class="m-t-10 f-22 col-f onelist-hidden">{{item.distance_unit}}</view>
          </view>
          
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
        swiperList: [],  // 轮播图
        address: '',     // 定位具体位置信息
        params: {
          longitude: '',   // 经度
          latitude: '',    // 纬度
          region: '',      // 省市区字符串逗号隔开的形式
          type: '',        // 店铺类型（如：授权店，专营店，专卖店等）
        },
        storeLists: [],    // 店铺列表
        
      }
    },
    
    onLoad() {
      this.getBanners()
    },
    onShow() {
      let that= this
      if(!that.address) {
        uni.showModal({
          title: '温馨提示',
          content: '请选择你所在的位置信息',
          success: function (res) {
            if (res.confirm) {
              that.getAddress()
            } else if (res.cancel) {
              return
            }
          }
        })
      }
    },
    methods: {
      
      // 获取位置
      getAddress() {
        let that= this
        uni.chooseLocation({
          success: function (res) {
            that.params.region= ''
            that.params.longitude= res.longitude
            that.params.latitude= res.latitude
            that.address= res.address + res.name
            // 获取附近的门店列表
            that.getStoreList()
          }
        })
      },
      // 轮播图
      getBanners() {
        let that= this,
          params= {
            url: that.$api.axhomeBanners
          }
        that.$httpRequest(params).then(res => {
          console.log(res)
          that.swiperList= res.data.list
        })
      },
      
      // 获取门店列表
      getStoreList() {
        let that= this
        if(that.params.region) {
          that.params.longitude= ''
          that.params.latitude= ''
        }
        let params= {
          url: that.$api.axstoreLists,
          data: that.params
        }
        that.$httpRequest(params).then(res => {
          if(res.data.list.length < 1) {
            uni.showToast({
              title: '亲！该地区暂时没有门店哦',
              icon: 'none'
            })
          }
          that.storeLists= res.data.list
        })
      },
      
      // 选择省市区
      bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.target.value)
        this.params.region= e.target.value.join(',')
        
        this.getStoreList()
      },
      
      // 门店详情
      goStoreDetail(item) {
        let params= {
          shop_id: item.shop_id,
          longitude: item.longitude,
          latitude: item.latitude
        }
        uni.navigateTo({
          url: 'storeDetail?data=' + JSON.stringify(params)
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
      height: 263upx;
      overflow: hidden;
    }
    .condition{
      padding: 33upx 30upx;
      line-height: 32upx;
      .icon-img{
        display: inline-block;
        height: 32upx;
        width: 24upx;
      }
    }
    .storeList{
      padding: 0 30upx 0 67upx;
      line-height: 1;
      .leftBox{
        width: 540upx;
      }
      .rightBox{
        width: 100upx;
        .iconfont{
          padding-left: 10upx;
        }
      }
      .store-item{
        padding: 22upx 0;
      }
      .filter{
        padding: 3upx 10upx;
      }
    }
    .address{
      display: inline-block;
      width: 400upx;
    }
    .filter{
      display: inline-block;
      padding: 0 10upx;
      border-radius: 16upx;
    }
  }
  .line-36{
    line-height: 36upx;
  }
</style>
<style>
picker .wx-picker-action.wx-picker-action-confirm{  
  color: #131313 !important;  
}
</style>