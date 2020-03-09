<template>
  <view class="rules">
    <view class="rules-main col-c f-28">
      <rich-text :nodes="nodes"></rich-text>
    </view>
  </view>
</template>

<script>
  export default{
    data () {
      return {
        nodes: ''
      }
    },
    onLoad(opt) {
      console.log(opt.id)
      this.getDetail(opt.id)
    },
    methods: {
      getDetail(id) {
        let that= this,
          params= {
            url: that.$api.getAgreeContentById,
            data: {
              category_id: id
            }
          }
        that.$httpRequest(params).then(res => {
          that.nodes= res.data.content.content
        })
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
