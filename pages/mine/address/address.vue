<template>
  <view class="container">
    <view class="content p-30 border-box col-c">
      <view v-for="(item, index) in addressList" :key="index" class="item f-24" @click="editAction(item)">
        
        <view class="name-mark b-6 col-13 f-w f-36">
          {{item.name}}
        </view>
        
        <view class="row1">
          <text class="name f-30">{{ item.name }}</text>
          <text class="tel m-l-15 f-30">{{ item.phone }}</text>
        </view>
        <view class="address oh">
          <text v-if="item.address_id === default_id" class="fl m-t-10 tag b-90f">默认</text>
          <view class="detail twolist-hidden">{{ item.region.city + item.region.province + item.region.region + item.detail }}</view>
        </view>
        
        <view class="edit-btn t-c col-9 f-28">编辑</view>
        
      </view>
      <view v-if="addressList.length < 1" class="blank f-99 t-c">
        <text class="iconfont f-60">&#xe698;</text>
        <view class="m-t-30 f-32">暂无收货地址~</view>
      </view>
    </view>
    <view class="addBtn b-linear col-f t-c f-30" @click="addAction">添加新地址</view>
  </view>
</template>

<script>
  export default{
    data() {
      return {
        default_id: '',           // 默认收货地址ID
        addressList: [
          // {
          //   name: '羊羊羊',
          //   phone: '15555555555',
          //   region: '',
          //   detail: '',
          //   def: false
          // }, {
          //   name: '',
          //   phone: '',
          //   region: '',
          //   detail: '',
          //   def: false
          // }
        ]
      }
    },
    onLoad() {
      // // 获取地址列表
      // this.getAddress();
    },
    onShow() {
      // 获取地址列表
      this.getAddress();
    },
    methods: {
      // 获取收货地址列表
      getAddress() {
        let that= this,
          params= {
            url: that.$api.addressLists,
          }
        that.$httpRequest(params).then((res) => {
          if(res.code === 1) {
            this.addressList= res.data.list
            this.default_id= res.data.default_id
          } else if(res.code === 0) {
            uni.showToast({
              title: res.msg,
              icon: 'none'
            })
          } else {
            uni.showToast({
              title: '收货地址获取失败',
              icon: 'none'
            })
          }
        })
      },
      
      addAction() {
        uni.navigateTo({
          url: 'addAddress'
        })
      },
      editAction(item) {
        let isDefault= this.default_id === item.address_id
        uni.navigateTo({
          url: 'addAddress?id=' + item.address_id + '&isDefault=' + isDefault
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .container,.content{
    height: 100%;
    width: 100%;
  }
  .content{
    
    .item{
      position: relative;
      padding: 30upx 140upx 30upx 94upx;
      border-bottom: 1px solid #333;
      .name-mark{
        position: absolute;
        left: 0;
        height: 74upx;
        width: 74upx;
        border-radius: 100%;
        line-height: 74upx;
        overflow: hidden;
      }
      .edit-btn{
        position: absolute;
        right: 0;
        top: 30upx;
        width: 80upx;
        height: 90upx;
        padding-left: 30upx;
        border-left: 1upx solid #333;
        line-height: 90upx;
      }
      .row1{
        height: 32upx;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        line-height: 32upx;
      }
      .tag{
        display: inline-block;
        margin-right: 15upx;
        height: 30upx;
        width: 72upx;
        border-radius: 15upx;
        line-height: 30upx;
        text-align: center;
      }
      .address{
        padding-top: 20upx;
        line-height: 40upx;
        .detail{
          line-height: 40upx;
        }
      }
    }
    .blank{
      margin: 0 auto;
      width: 300upx;
      height: 400upx;
    }
    
  }
  .addBtn{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100upx;
    line-height: 100upx;
  }
  .m-l-15{
    margin-left: 15upx;
  }
</style>
