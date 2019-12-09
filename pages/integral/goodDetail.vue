<template>
  <view class="detail">
    <view class="swiper-box">
      <banner :swiperList="swiperList"/>
    </view>
    
    <view class="good-info">
      <view class="good-name f-28 col-c twolist-hidden">{{detail.name}}</view>
      <view class="price m-t-10 f-24 col-f0f">积分：<text class="f-28">{{detail.price}}</text></view>
      <view class="m-t-20 point onelist-hidden">
        <text class="b-90f f-28 col-f">{{detail.sell_point}}</text>
      </view>
    </view>
    
    <view class="item oh col-9 b-20" @click="open">
      <text class="fl">商品规格</text>
      <view class="fr">
        <text class="col-90f">></text>
      </view>
    </view>
    
    <view class="item oh col-9">
      <text class="fl">商品详情</text>
      <view class="fr">
        <text class="col-90f">></text>
      </view>
    </view>
    
    <view class="good-detail">
      
    </view>
    
    <view class="p-fix buy-btn t-c f-30 col-f" @click="open">兑换商品</view>
    
    <!-- 弹窗 -->
    <uni-popup ref="popup" type="bottom">
      <view class="b-13 col-f p-30">
        <view class="popup-head">
          <view class="fl good-img">
            <image src="../../static/mine/sign_bg.png" mode="widthFix"></image>
          </view>
          <text class="f-32 col-f0f">积分4000</text>
        </view>
        <view v-for="(item, index) in specData.spec_attr" :key="index" class="norm-item">
          <view class="norm-title f-24 col-c">{{ item.group_name }}</view>
          <view class="norm-bar">
            <text v-for="(li, num) in item.spec_items" :key="num" :class="{selected: select_arr[index] === li.item_id, 'f-26 col-13 b-9': true }" @click="selectNorm(index, li, num)">{{ li.spec_value }}</text>
          </view>
        </view>
        <view class="control-num oh">
          <view class="num-title f-24 col-c">购买数量</view>
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
        swiperList: ['', ''],
        detail: {
          name: 'MOBY任天堂switch保护套ns保护壳nintendo游戏机外壳主机手柄一体s保护壳nintendo游戏机外壳主机手柄一体s保护壳nintendo游戏机外壳主机手柄一体',
          price: 70000,
          sell_point: '包邮'
        },
        specData: {
          spec_attr: [{
            group_name: '颜色',
            spec_items: [{
              item_id: 0,
              spec_value: '红'
            }, {
              item_id: 1,
              spec_value: '黄'
            }, {
              item_id: 2,
              spec_value: '蓝'
            }]
          }, {
            group_name: '尺寸',
            spec_items: [{
              item_id: 0,
              spec_value: '小'
            }, {
              item_id: 1,
              spec_value: '中'
            }, {
              item_id: 2,
              spec_value: '大'
            }]
          }]
        },
        select_arr: [0, 0],             // 选中的规格id值
        goods_num: 1,                   // 兑换的数量
      }
    },
    methods: {
      // 确认订单
      goOrder() {
        uni.navigateTo({
          url: 'order/orderSure'
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
        console.log(shu, li , num)
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
        
        console.log('选中的规格id', arr, '选中的规格名称',  arr2)
        
        let id = that.select_arr.join('_')
        
        // 图片及价钱和库存
        let obj = that.goods
        that.specData.spec_list.map((item, index) => {
          if(item.spec_sku_id === id) {
            obj.goods_price= item.form.goods_price
            obj.stock_num= item.form.stock_num
            if(item.form.image_path) {
              obj.image_path = item.form.image_path
            }
          }
        })
        that.goods = obj
      },
      // 设置商品数量
      controlNum(type) {
        if(type === '+') {
          // if(this.goods_num >= this.goods.stock_num) {
            uni.showToast({
              title: '库存不足',
              icon: 'none'
            })
            return
          // }
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
        display: flex;
        align-items: center;
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
