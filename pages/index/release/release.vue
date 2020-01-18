<template>
  <view class="p-30">
    <!-- 头部 -->
    <topBar :isindex="false" :title="'文章发布'">
      <view class="col-f iconfont" @click="goIndex">&#xe61b;</view>
    </topBar>
    <view class="content">
      <input type="text" v-model="formData.article_title" class="title f-24 col-f" placeholder="标题是吸引别人看关注 (可选可不选)" placeholder-style="color: #ccc; font-size: 24upx;" maxlength="20"/>
      <textarea v-model="formData.article_content"  class="article-content f-24 col-f" placeholder="这一刻的分享" placeholder-style="color: #ccc; font-size: 24upx;" maxlength="200"/>
      
      <view class="img-box">
        <view v-for="(item, index) in imgArr" :key="index" class="p-re img-item col-f0f">
          <image :src="item" mode="widthFix"></image>
          <view class="del-btn b-9 f-w col-13 f-30" @click="delImg(index)">+</view>
        </view>
        
        <view class="img-item col-f0f" @click="uploadImg">
          <image src="../../../static/img/index/add.png" mode="widthFix" class="add"></image>
        </view>
      </view>
      
      <view class="line-item">
        <image src="../../../static/img/index/topic.png" class="icon-img" mode="widthFix"></image>
        <input type="text" v-model="formData.tags" placeholder="请输入参与话题" placeholder-style="color: #ccc;font-size: 24upx;" class="col-c f-24"/>
        <picker @change="bindPickerChange" :value="index"  class="fr f-40 col-9 iconfont rotate-180">&#xe61b;</picker>
      </view>
      
      <view class="line-item oh" @click="getAddress">
        <image src="../../../static/img/index/address.png" class="icon-img fl" mode="widthFix"></image>
        <text class="address fl m-l-20 col-c f-24 line-40 onelist-hidden">{{formData.address? formData.address: '所在的位置'}}</text>
        <text class="fr f-40 col-9 iconfont rotate-180">&#xe61b;</text>
      </view>
      
      <view class="release-btn" @click="releaseAction">
        <view class="btn-main">
          <text class="f-44 col-f f-w">发布</text>
        </view>
      </view>
      
    </view>  
  </view>
  
</template>

<script>
  import uploadImg from '../../../common/uploadImg.js'
  
  import topBar from '../../components/topBar.vue'
  export default {
    components: {
      topBar: topBar
    },
    data () {
      return {
        formData: {
          article_title: '',
          article_content: '',
          category_id: '',
          tags: '',
          address: '',
          address_latitude: '',
          address_longitude: '',
          uploaded: [],
          source: 'umi'
        },
        imgArr: [],
        imgUploadID: [],
        time: 0,
        lists: '',               // 请求回来的数据
        array: '',               // picker需要话题列表['啦啦啦', '哈哈哈']
        index: '',               // picker选中的话题索引值
      }
    },
    onLoad(params) {
      if(params.type) {
        this.formData.source= params.type
      }
      this.getTopicList()
    },
    methods: {
      goIndex() {
        uni.switchTab({
          url: '../index'
        })
      },
      // 获取所有话题列表
      getTopicList() {
        let that= this,
          params= {
            url: that.$api.topicAllList
          }
          that.$httpRequest(params).then(res => {
            console.log(res.data.list)
            let lists= res.data.list,
              arr= []
            that.lists= lists
            lists.map((item, index) => {
              arr.push(item.name)
            })
            that.array= arr
          })
      },
      
      // 选择话题改变
      bindPickerChange: function(e) {
        console.log('picker发送选择改变，携带值为', e.target.value)
        let index= e.target.value
        this.index = index
        this.formData.category_id= that.lists[index].category_id
      },
      
      // 获取当前位置信息
      getAddress() {
        let that= this
        uni.chooseLocation({
          success: function (res) {
            that.formData.address= res.address + res.name
            that.formData.address_latitude= res.latitude
            that.formData.address_longitude= res.longitude
          }
        })
      },
      
      // 删除图片
      delImg(index) {
        this.imgArr.splice(index, 1)
        this.formData.uploaded.splice(index, 1)
      },
      // 上传图片
      uploadImg () {
        let that= this
        let length= this.imgArr.length
        let leavelength = 9 - length
        if(leavelength > 0) {
          
          uni.chooseImage({
            count: leavelength, //默认9
            sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
            sourceType: ['album'], //从相册选择
            success: function (res) {
              
              let time= 0,
                max_time= res.tempFilePaths.length
              uni.showLoading({
                  title: '上传图片中..'
              })
              // console.log(JSON.stringify(res.tempFilePaths))
              res.tempFilePaths.map((item, index) => {
                // 上传图片
                uploadImg(item).then((res)=> {
                  time ++
                  if(time === max_time) {
                    uni.hideLoading()
                    uni.showToast({
                      title: max_time + '张图片上传成功',
                      icon: 'none'
                    })
                  }
                  that.imgArr.push(item)
                  console.log(JSON.parse(res).data.file_id)
                  that.formData.uploaded.push(JSON.parse(res).data.file_id)
                  
                })
              }, err => {
                uni.hideLoading()
                uni.showToast({
                  title: '第' + (index + 1) + '张图片上传失败',
                  icon: 'none'
                })
              })
            }
          }) 
        } else {
          uni.showToast({
            title: '最多只能传9张图片哦',
            icon: 'none'
          })
        }
      },
      // 发布文章
      releaseAction() {
        let that= this
        if(!that.formData.article_content) {
          uni.showToast({
            title: '文章内容不能为空！',
            icon: 'none'
          })
          return
        }
        uni.showLoading({
          title: '发布中'
        })
        let params= {
          url: that.$api.articleRelease,
          data: {
            formData: JSON.stringify(that.formData)
          },
          method: 'POST'
        }
        that.$httpRequest(params).then(res => {
          uni.hideLoading()
          if(res.code === 1) {
            
            uni.showToast({
              title: '发布成功,即将自动返回',
              icon: 'none'
            })
            that.goIndex()
          } else {
            uni.showToast({
              title: res.msg,
              icon: 'none'
            })
            return
          }
        })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .content{
    padding: 0 36upx;
    .title{
      height: 78upx;
    }
    .article-content{
      height: 215upx;
      width: 100%;
      box-sizing: border-box;
      padding: 17upx 0;
      border-bottom: 2upx solid #333;
      border-top: 2upx solid #333;
      line-height: 36upx;
    }
    .img-box{
      padding: 43upx 0 23upx;
      border-bottom: 2upx solid #333;
      .img-item{
        display: inline-block;
        height: 115upx;
        width: 115upx;
        margin: 0 23upx 20upx 0;
        border-radius: 15upx;
        border: 2upx solid #9900ff;
        overflow: hidden;
        &>image{
          width: 100%;
        }
        .add{
          height: 55upx;
          width: 55upx;
          margin: 30upx;
          
        }
        .del-btn{
          position: absolute;
          top: 0;
          right: 0;
          height: 40upx;
          width: 40upx;
          text-align: center;
          line-height: 40upx;
          background: #ccc;
          border-radius: 100%;
          transform: rotate(45deg);
          z-index: 1000;
        }
      }
    }
    .line-item{
      padding: 40upx 0;
      line-height: 40upx;
      border-bottom: 2upx solid #333;
      .icon-img{
        display: inline-block;
        height: 40upx;
        width: 34upx;
      }
      &>input{
        display: inline-block;
        width: 460upx;
        padding: 0 20upx;
      }
      .address{
        width: 80%;
      }
    }
    .release-btn{
      position: fixed;
      bottom: 100upx;
      left: 0;
      right: 0;
      margin: 0 auto;
      height: 143upx;
      width: 143upx;
      line-height: 143upx;
      padding: 6upx;
      border-radius: 100%;
      background: linear-gradient(-70deg,rgba(26,182,252,1),rgba(82,95,247,1),rgba(191,35,242,1),rgba(251,0,240,1));
      .btn-main{
        height: 100%;
        width: 100%;
        border-radius: 100%;
        background: #131313;
        text-align: center;
      }
    }
  }
  .line-40{
    line-height: 40upx;
  }
</style>
