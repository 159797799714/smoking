<template>
  <view class="content dis-flex flex-dir-col">
    <view class="flex-box">
      <map style="width: 100%; height: 100%;" id="mymap" :latitude="detail.latitude" :longitude="detail.longitude" :markers="covers"></map>
    </view>
    <view class="store-item oh">
      <view class="fl leftBox dis-inline-block">
        <view class="oh">
          <text class="fl address col-f f-28 onelist-hidden">{{detail.shop_name}}</text>
          <text class="filter col-f f-24 b-90f">{{detail.type_name}}</text>
        </view>
        <view class="line-36 col-6 f-22 onelist-hidden">{{detail.region.city+detail.region.province+detail.region.region+detail.address}}</view>
        <view class="col-6 f-24">{{detail.shop_hours}}</view>  
        </view>
        <view class="fr rightBox dis-inline-block t-c">
          <text class="iconfont f-44 col-f">&#xe604;</text>
          <view class="m-t-10 f-22 col-f onelist-hidden">{{detail.distance_unit}}</view>
        </view>
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    data() {
      return {
        longitude: '',
        latitude: '',
        covers: [{
          latitude: '',
          longitude: '',
          iconPath: '../../static/img/icon.png',
          width: 20,
          height: 20,
          callout: {
            content: '',
            bgColor: '#131313',
            color: '#fff',
            borderRadius: 5,
            padding: 8
          }
        }],
        detail: ''
      }
    },
    onLoad(data) {
      let obj= JSON.parse(data.data)
      this.longitude= obj.longitude
      this.latitude= obj.latitude
      this.covers[0].longitude= obj.longitude
      this.covers[0].latitude= obj.latitude
      
      this.getDetail(obj)
    },
    methods: {
      getDetail(obj) {
        let that= this,
          params= {
            url: that.$api.axstoreDetail,
            data: obj
          }
        that.$httpRequest(params).then(res => {
          that.detail= res.data.detail
          that.covers[0].callout.content= res.data.detail.shop_name
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content{
    height: 100%;
    width: 100%;
    
  }
  .store-item{
    padding: 22upx 30upx 22upx 78upx;
    .leftBox{
      width: 540upx;
    }
    .rightBox{
      width: 100upx;
    }
    .address{
      display: inline-block;
      width: 400upx;
    }
    .filter{
      display: inline-block;
      padding: 3upx 10upx;
      border-radius: 16upx;
    }
  }
  
</style>
