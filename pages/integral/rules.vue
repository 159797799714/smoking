<template>
  <view class="rules">
    <view class="rules-main">
      <view v-for="(item, index) in rules" :key="index" class="line f-28 col-9">{{index + 1 + '.'}}{{item}}</view>
    </view>
  </view>
</template>

<script>
  export default{
    data () {
      return {
        rules: ['每个订单仅能使用一张优惠券，不兑现，不找零；',
          '每张优惠券的使用条件请查看对应其的使用说明；',
          '除非该优惠券有特殊说明，否则优惠券仅能够抵扣商品金额。',
          '请在有效期间内使用优惠券，未使用的优惠券过期后将自动作废；',
          '每个用户仅限使用一张新客户专享券',
          '优惠券最终解释权归深圳市优逸电子科技有限公司',
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
  .rules{
    padding: 58upx 30upx;
    .rules-main{
      padding: 38upx 21upx;
      height: 100%;
      border: 2upx solid #9900ff;
      border-radius: 35upx;
    }
  }
</style>
