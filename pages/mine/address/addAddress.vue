<template>
  <view class="container p-30 col-c">
    <!-- 头部 -->
    <topBar :isindex="false" :title="title">
      <view class="col-f iconfont" @click="goBack">&#xe61b;</view>
    </topBar>
    
    <view class="content border-box f-30">
      <view class="row">
        <text class="name">收货人</text>
        <view class="center dis-flex flex-y-center ">
          <input type="text" class="ipt" v-model="detail.name" placeholder="请输入收货人姓名"/>
        </view>
      </view>
      <view class="row">
        <text class="name">手机号码</text>
        <view class="center dis-flex flex-y-center ">
          <input type="text" class="ipt" v-model="detail.phone"  maxlength="11"  placeholder="请输入手机号码"/>
        </view>
      </view>
      
      <picker mode="region" @change="bindPickerChange" class="row oh">
        <text class="fl name">所在地区</text>
        <view class="fl center dis-flex flex-y-center">
          <text v-if="!detail.region" class="f-30">选择省、市、区</text>
          <text v-else class="f-30">{{ detail.region }}</text>
        </view>
      </picker>
      <view class="row">
        <text class="name">详细地址</text>
        <view class="center dis-flex flex-y-center">
          <input type="text" class="ipt" v-model="detail.detail" placeholder="请输入街道楼层等具体信息"/>
        </view>
      </view>
      <view class="row">
        <text class="name">标签</text>
        <view class="center dis-flex flex-y-center">
          <text v-for="(item, index) in tags.system_set" :key="index" :class="{'tag b-9 col-f': true, 'border-90f': detail.tags_id === item.id}" @click="selectTag(item.id)">{{ item.tags_name }}</text>
        </view>
      </view>
      <view v-if="address_id && !isDefault" class="def">
        <text>设为默认地址</text>
        <switch :checked="isDefault" style="transform:scale(0.7)" @change="switchChange" color="#9900ff" />
      </view>
      <view v-if="address_id" class="delBtn" @click="delAddress">
        <button type="warn">删除地址</button>
      </view>
      <view v-if="!address_id" class="delBtn b-linear t-c col-f" @click="saveAction">保存</view>
    </view>
  </view>
</template>

<script>
  import topBar from '../../components/topBar.vue'
  export default {
    components: {
      topBar: topBar
    },
    data() {
      return {
        address_id: '', // 传过来的地址id
        isDefault: false, // 是否默认地址
        title: '添加收货地址',
        detail: {
          name: '',
          phone: '',
          region: '',
          detail: '',
          tags_id: ''
        },
        tags: [],                   // 标签列表

        // 城市选择
        cityPickerValueDefault: [0, 0, 1],             
        themeColor: '#007AFF'
      }
    },
    onLoad(option) {
      if (option.id) {
        this.isDefault = option.isDefault === 'true' ? true : false
        this.address_id = option.id
        this.title= '编辑收货地址'
        // 获取地址详情
        this.getAddressDetail(option.id)
      }
      // 获取地址标签列表
      this.getTagsList()
    },
    methods: {
      goBack() {
        if(this.address_id) {
          // 离开页面自动保存
          this.saveAddress()   
        }
      },
      
      // 地址确定回调
      onConfirm(e) {
        this.detail.region = e.label.replace(/-/g, ',')
      },
      // 获取地址详情
      getAddressDetail(id) {
        let that = this,
          params= {
            url: that.$api.addressDetail,
            data: {
              address_id: id
            }
          }
        that.$httpRequest(params).then((res) => {
          if (res.code === 1) {
            res.data.detail.region = res.data.detail.region.city + ',' + res.data.detail.region.province + ',' +
              res.data.detail.region.region
            that.detail = res.data.detail
          } else if (res.code === 0) {
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
      // 保存或者添加收货地址
      saveAddress() {
        let that = this,
          detail = that.detail
        detail.address_id = that.address_id
        let params= {
          url: that.address_id? that.$api.editAddress: that.$api.addAddress,
          data: detail,
          method: 'POST'
        }
        that.$httpRequest(params).then((res) => {
          // 编辑地址
          if (that.address_id) {
            if (res.code === 1) {
              uni.showToast({
                title: '修改成功',
                icon: 'none'
              })
              uni.navigateBack({
                delta: 1
              })
            } else if (res.code === 0) {
              uni.showToast({
                title: res.msg,
                icon: 'none'
              })
            } else {
              uni.showToast({
                title: '修改失败，请重试',
                icon: 'none'
              })
            }
          } 
           // 添加地址
            else {
            if (res.code === 1) {
              uni.showToast({
                title: '添加成功',
                icon: 'none'
              })
              uni.navigateBack({
                delta: 1
              })
            } else if (res.code === 0) {
              uni.showToast({
                title: res.msg,
                icon: 'none'
              })
            } else {
              uni.showToast({
                title: '添加失败，请重试',
                icon: 'none'
              })
            }
          }
        })
      },
      // 选择省市区
      bindPickerChange(e) {
        console.log('picker发送选择改变，携带值为', e.target.value)
        let region = e.detail.value.join(',')
        this.detail.region = region
      },
      // 保存地址
      saveAction() {
        let that = this
        uni.showModal({
          content: '确认保存？',
          success(res) {
            if (res.confirm) {
              that.saveAddress()
            } else if (res.cancel) {
              console.log('用户点击取消')
            }
          }
        })
      },

      // 选择默认
      switchChange(e) {
        let that = this
        if (e.target.value) {
          let params= {
            url: that.$api.setDefault,
            data: {
              address_id: that.address_id
            },
            method: 'POST'
          }
          that.$httpRequest(params).then((res) => {
            if (res.code === 1) {
              uni.showToast({
                title: '设置成功',
                icon: 'none'
              })
              that.isDefault = true
            } else if (res.code === 0) {
              uni.showToast({
                title: res.msg,
                icon: 'none'
              })
            } else {
              uni.showToast({
                title: '设置失败，请重试',
                icon: 'none'
              })
            }
          })
        } else {
          that.isDefault = false
        }
      },
      // 删除地址
      delAddress() {
        let that = this,
          params= {
            url: that.$api.delAddress,
            data: {
              address_id: that.address_id
            },
            method: 'POST'
          }
        that.$httpRequest(params).then((res) => {
          if (res.code === 1) {
            uni.showToast({
              title: '删除成功',
              icon: 'none'
            })
            uni.navigateBack({
              delta: 1
            })
          } else if (res.code === 0) {
            uni.showToast({
              title: res.msg,
              icon: 'none'
            })
          } else {
            uni.showToast({
              title: '删除失败，请重试',
              icon: 'none'
            })
          }
        })
      },
      // 获取地址标签列表
      getTagsList() {
        let that= this,
          params= {
            url: that.$api.tagsList
          }
        that.$httpRequest(params).then(res => {
          that.tags= res.data.list
        })
      },
      
      // 选择标签
      selectTag(id) {
        console.log(id)
        let that= this
        that.detail.tags_id= id
      }
    }
  }
</script>

<style lang="scss" scoped>

  .content {
    padding-top: 30upx;
    .row {
      display: flex;
      height: 104upx;
      line-height: 104upx;
      border-bottom: 1px solid #333;

      .name {
        display: inline-block;
        width: 120upx;
        margin-right: 20upx;
        text-align: left;
      }

      .center {
        flex: 1;

        .ipt {
          height: 70rpx;
          width: 100%;
        }
        .tag {
          margin-right: 23upx;
          display: inline-block;
          height: 40upx;
          width: 92upx;
          text-align: center;
          line-height: 40upx;
          border-radius: 20upx;
        }
      }
    }

    .def {
      display: flex;
      justify-content: space-between;
      height: 104upx;
      line-height: 104upx;
      border-bottom: 1px solid #333;
    }

    .delBtn {
      margin-top: 100upx;
      height: 92upx;
      line-height: 92upx;
      border-radius: 10upx;
    }
    .border-90f{
      border: 1upx solid #9900ff;
      background: #131313;
    }
  }
</style>
