<template>
  <view class="detail">
    <view class="swiper-box">
      <banner :swiperList="swiperList" :borderWidth="''"/>
    </view>
    
    <view class="good-info">
      <view class="good-name f-28 col-c twolist-hidden">{{detail.goods_name}}</view>
      <view class="price m-t-10 f-24 col-f0f">积分：<text class="f-28">{{detail.sku[0].goods_price * 100 / 100}}</text></view>
      <view class="m-t-20 point onelist-hidden">
        <text class="b-90f f-28 col-f">{{detail.selling_point}}</text>
      </view>
    </view>
    
    <view class="item oh col-9 b-20" @click="open">
      <text class="fl">商品规格</text>
      <view class="fr rotate-180">
        <text class="col-90f iconfont">&#xe61b;</text>
      </view>
    </view>
    
    <view class="item oh col-9">
      <text class="fl">商品详情</text>
      <view class="fr rotate-180">
        <text class="col-90f iconfont">&#xe61b;</text>
      </view>
    </view>
    
    <view class="good-detail">
      <!-- 富文本 -->
      <rich-text type="node" :nodes="detail.content"></rich-text>
    </view>
    
    <view class="p-fix buy-btn t-c f-30 col-f" @click="open">兑换商品</view>
    
    <!-- 弹窗 -->
    <uni-popup ref="popup" type="bottom">
      <view class="b-13 col-f p-30">
        <view class="popup-head">
          <view class="fl good-img">
            <image :src="goods.image_path" mode="widthFix"></image>
          </view>
          <text class="f-32 col-f0f">积分{{goods.goods_price * 100 / 100}}</text>
        </view>
        <view v-for="(item, index) in specData.spec_attr" :key="index" class="norm-item">
          <view class="norm-title f-24 col-c">{{ item.group_name }}</view>
          <view class="norm-bar">
            <text v-for="(li, num) in item.spec_items" :key="num" :class="{selected: select_arr[index] === li.item_id, 'f-26 col-13 b-9': true }" @click="selectNorm(index, li, num)">{{ li.spec_value }}{{li.item_id}}</text>
          </view>
        </view>
        <view class="control-num oh">
          <view class="fl num-title f-24 col-c">购买数量</view>
          <view class="sum col-6">
            <text v-if="!showPanic" class="iconfont f-24" @click="controlNum('-')">-</text>
            <text class="num b-9 f-30">{{ goods_num }}</text>
            <text v-if="!showPanic" class="iconfont f-24" @click="controlNum('+')">+</text>
          </view>
        </view>
      </view>
      <view class="buy-btn t-c f-30 col-f" @click="goOrder">确定</view>
    </uni-popup>
    
  </view>
</template>

<script>
  import banner from '../components/banner.vue'
  import uniPopup from "../components/uni-popup/uni-popup.vue"
  export default {
    components: {
      banner: banner,
      uniPopup: uniPopup
    },
    data () {
      return {
        goods_id: '',
        detail: '',                         // 商品详情
        specData: '',                       // 商品规格
        swiperList: [],
        goods: {},
        select_arr: [],             // 选中的规格id值
        select_name: [],            // 选中的名称
        goods_num: 1,                   // 兑换的数量
      }
    },
    onLoad(opt) {
      console.log(opt)
      if(!opt.goods_id) {
        return
      }
      this.goods_id= opt.goods_id
      this.getDetail(opt.goods_id)
     
    },
    methods: {
      getDetail(id) {
        let that= this
        let params = {
          url: that.$api.goodDetail,
          data: {
            goods_id: this.goods_id
          }
        }
        that.$httpRequest(params).then(res => {
          console.log(res.data)
          that.detail= res.data.detail
          that.specData= res.data.specData
          that.swiperList= res.data.detail.image
          
          // 商品详情
          var richtext =  res.data.detail.content
          const regex = new RegExp('img')
          richtext= richtext.replace(regex, `img style="max-width: 100%;"`)
          that.detail.content = richtext
          
          if(res.data.specData) {
             // 默认选中的规格，以及规格名称
            that.specData.spec_attr.map((item, index) => {
              that.select_arr.push(item.spec_items[0].item_id)
              that.select_name.push(item.spec_items[0].spec_value)
            })
            
            // 图片及价钱和库存
            let obj = {},
              id = that.select_arr.join('_')
            that.specData.spec_list.map((item, index) => {
              if(item.spec_sku_id === id) {
                obj.goods_price= item.form.goods_price
                if(item.form.image_path) {
                  obj.image_path = item.form.image_path
                  console.log(item.form.image_path)
                }
              }
            })
            that.goods = obj
          } else {
            that.select_arr.push(res.data.detail.sku[0].goods_sku_id)
            that.goods.goods_price= res.data.detail.sku[0].goods_price
            that.goods.image_path= res.data.detail.image[0].file_path
          }
        })
      },
      // 检测库存
      // detectStock() {
      //   let that= this,
      //     id = that.select_arr.join('_'),
      //     status= false
      //   let params = {
      //     url: that.$api.buyNowinventory,
      //     data: {
      //       goods_id: this.goods_id,
      //       goods_num: this.goods_num,
      //       goods_sku_id: id
      //     }
      //   }
      //   let info= that.$httpRequest(params).then(res => {
      //     if(res.code === 1) {
      //       status= true
      //       console.log('执行了1', status)
      //       return status
      //     }
      //     uni.showToast({
      //       title: res.msg,
      //       icon: 'none'
      //     })
      //   })
      //   return status
      // },
      
      // 确认订单
      goOrder() {
        // 先检测库存
        let that= this,
          id = that.select_arr.join('_')
        let params = {
          url: that.$api.buyNowinventory,
          data: {
            goods_id: this.goods_id,
            goods_num: this.goods_num,
            goods_sku_id: id
          }
        }
        that.$httpRequest(params).then(res => {
          if(res.code === 1) {
            let str= JSON.stringify(params.data)
            console.log(str)
            uni.navigateTo({
              url: 'order/orderSure?obj=' + str
            }) 
            return
          }
          uni.showToast({
            title: res.msg,
            icon: 'none'
          })
        })
        
      },
      // 打开弹窗
      open(){
        // 需要在 popup 组件，指定 ref 为 popup
        this.$refs.popup.open()
      },
      // 商品规格
      selectNorm(shu, li, num) {
        let that = this
        that.select_arr[shu] = li.item_id
        let arr = []
        let arr2 = []
        
        // 选中的规格id数组
        that.select_arr.map((item, index) => {
          if(index === shu) {
            arr.push(li.item_id)
          } else {
            arr.push(item)
          }
        })
        that.select_arr = arr
        
        // 选中的名称数组
        that.select_name.map((item, index) => {
          if(index === shu) {
            arr2.push(li.spec_value)
          } else {
            arr2.push(item)
          }
        })
        that.select_name = arr2
        
        let id = that.select_arr.join('_')
        
        // 图片及价钱和库存
        let obj = that.goods
        that.specData.spec_list.map((item, index) => {
          console.log(item, id)
          if(item.spec_sku_id === id) {
            obj.goods_price= item.form.goods_price
            obj.goods_price= item.form.goods_price
            if(item.form.image_path) {
              obj.image_path = item.form.image_path
              console.log(item.form.image_path)
            }
          }
        })
        that.goods = obj
      },
      // 设置商品数量
      controlNum(type) {
        if(type === '+') {
          if(this.goods_num >= this.goods.stock_num) {
            uni.showToast({
              title: '库存不足',
              icon: 'none'
            })
            return
          }
          this.goods_num += 1
        }
        else if(type === '-') {
          if(this.goods_num > 1) {
            this.goods_num -= 1
            return
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .detail{
    line-height: 1;
    .swiper-box{
      height: 750upx;
      width: 100%;
    }
    .good-info{
      padding: 30upx 30upx 40upx;
      border-bottom: 20upx solid #333;
      .good-name{
        line-height: 36upx;
      }
      .point{
        &>text{
          line-height: 1;
          padding: 0 13upx;
          border-radius: 18upx;
        }
      }
    }
    .item{
      padding: 0 30upx;
      line-height: 83upx;
    }
    .buy-btn{
      bottom: 0;
      left: 0;
      height: 100upx;
      width: 100%;
      line-height: 100upx;
      z-index: 10;
      background:linear-gradient(-90deg,rgba(82,95,247,1),rgba(251,0,240,1));
    }
    .norm-item{
      width: calc(100% + 10upx);
      .norm-title{
        margin-bottom: 24upx;
        line-height: 23upx;
      }
      .norm-bar{
        margin-bottom: 20upx;
        display: flex;
        flex-wrap: wrap;
        &>text{
          padding: 0 25upx;
          margin: 0 39upx 20upx 0;
          height: 50upx;
          line-height: 50upx;
          border-radius: 25upx;
          border: 2upx solid #999;
        }
      }
      .selected{
        border: 2upx solid #ff00ff!important;
        color: #ff00ff;
        background: #131313;
      }
    }
    .control-num{
      padding-bottom: 53upx;
      .num-title{
        padding: 25upx 0 33upx;
        line-height: 1;
      }
      .sum{
        float: right;
        height: 45upx;
        padding-top: 23upx;
        display: flex;
        align-items: center;
        .iconfont{
          padding: 0 15upx;
        }
        .num{
          padding: 0 35upx;
          margin: 0 19upx;
          line-height: 45upx;
        }
      }
    }
    .popup-head{
      padding: 40upx 0 53upx;
      height: 181upx;
      .good-img{
        margin-right: 18upx;
        height: 100%;
        width: 181upx;
        overflow: hidden;
        &>image{
          width: 100%;
          height: 181upx!important;
          background: #F5F5F5;
        }
      }
      &>text{
        display: block;
        padding-top: 108upx;
      }
    }
  }
  .b-20{
    border-bottom: 20upx solid #333;
  }
</style>
