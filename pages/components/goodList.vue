<template>
  <view class="goodList">
    <view v-for="(item, index) in goodList" :key="index" class="good-item b-f" @click="goDetail(item.goods_id)">
      <view class="good-img">
        <image :src="item.image[0].file_path" mode="aspectFill"></image>
      </view>
      <view class="good-info">
        <view class="m-t-30 f-24 col-6 onelist-hidden">{{item.name}}</view>
        <view class="m-t-15 f-24 col-f0f">积分 {{item.grade}}</view>  
      </view>
    </view>
  </view>
</template>

<script>
  export default {
    props: {
      goodList: Array
    },
    data () {
      return {
        
      }
    },
    methods: {
      goDetail(id) {
        uni.navigateTo({
          url: '../integral/goodDetail?goods_id=' + id
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .goodList{
    line-height: 1;
  }
  .good-item{
    display: inline-block;
    width: 338upx;
    height: 450upx;
    margin-bottom: 11upx;
  }
  .good-item:nth-of-type(2n) {
    margin-left: 12upx;
  }
  .good-img{
    width: 100%;
    height: 330upx;
    overflow: hidden;
    &>image{
      width: 100%;
    }
  }
  .good-info{
    padding: 0 15upx;
  }
  
</style>
