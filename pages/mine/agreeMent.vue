<template>
  <view class="personal f-30">
    <navigator v-for="(item, index) in menuList" :key="index" :url="'./agreeDetail?id=' + item.category_id" class="item oh col-9">
      <text class="fl">{{item.category_name}}</text>
      <view class="fr">
        <text class="iconfont dis-inline-block rotate-180 col-90f f-26">&#xe61b;</text>
      </view>
    </navigator>
  </view>
</template>

<script>
  export default {
    data () {
      return {
        menuList: []
      }
    },
    onShow() {
      let that= this
      that.getAgreeMent()
    },
    methods:{
      getAgreeMent() {
        let that= this,
          params= {
            url: that.$api.agreementList
          }
        that.$httpRequest(params).then((res) => {
          that.menuList= res.data.list
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .personal{
    padding-top: 20upx;
    line-height: 1;
    .item{
      padding: 0 30upx;
      line-height: 83upx;
      border-bottom: 1px solid #333;
    }
  }
</style>
