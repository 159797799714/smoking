(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/address/addAddress"],{"5bd5":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return a.e("pages/components/topBar").then(a.bind(null,"0849"))},s={components:{topBar:i},data:function(){return{address_id:"",isDefault:!1,title:"添加收货地址",detail:{name:"",phone:"",region:"",detail:"",tags_id:""},tags:[],cityPickerValueDefault:[0,0,1],themeColor:"#007AFF"}},onLoad:function(e){e.id&&(this.isDefault="true"===e.isDefault,this.address_id=e.id,this.title="编辑收货地址",this.getAddressDetail(e.id)),this.getTagsList()},methods:{goBack:function(){this.address_id&&this.saveAddress()},onConfirm:function(e){this.detail.region=e.label.replace(/-/g,",")},getAddressDetail:function(t){var a=this,n={url:a.$api.addressDetail,data:{address_id:t}};a.$httpRequest(n).then(function(t){1===t.code?(t.data.detail.region=t.data.detail.region.city+","+t.data.detail.region.province+","+t.data.detail.region.region,a.detail=t.data.detail):0===t.code?e.showToast({title:t.msg,icon:"none"}):e.showToast({title:"收货地址获取失败",icon:"none"})})},saveAddress:function(){var t=this,a=t.detail;a.address_id=t.address_id;var n={url:t.address_id?t.$api.editAddress:t.$api.addAddress,data:a,method:"POST"};t.$httpRequest(n).then(function(a){t.address_id?1===a.code?(e.showToast({title:"修改成功",icon:"none"}),e.navigateBack({delta:1})):0===a.code?e.showToast({title:a.msg,icon:"none"}):e.showToast({title:"修改失败，请重试",icon:"none"}):1===a.code?(e.showToast({title:"添加成功",icon:"none"}),e.navigateBack({delta:1})):0===a.code?e.showToast({title:a.msg,icon:"none"}):e.showToast({title:"添加失败，请重试",icon:"none"})})},bindPickerChange:function(e){console.log(n("picker发送选择改变，携带值为",e.target.value," at pages\\mine\\address\\addAddress.vue:187"));var t=e.detail.value.join(",");this.detail.region=t},saveAction:function(){var t=this;e.showModal({content:"确认保存？",success:function(e){e.confirm?t.saveAddress():e.cancel&&console.log(n("用户点击取消"," at pages\\mine\\address\\addAddress.vue:200"))}})},switchChange:function(t){var a=this;if(t.target.value){var n={url:a.$api.setDefault,data:{address_id:a.address_id},method:"POST"};a.$httpRequest(n).then(function(t){1===t.code?(e.showToast({title:"设置成功",icon:"none"}),a.isDefault=!0):0===t.code?e.showToast({title:t.msg,icon:"none"}):e.showToast({title:"设置失败，请重试",icon:"none"})})}else a.isDefault=!1},delAddress:function(){var t=this,a={url:t.$api.delAddress,data:{address_id:t.address_id},method:"POST"};t.$httpRequest(a).then(function(t){1===t.code?(e.showToast({title:"删除成功",icon:"none"}),e.navigateBack({delta:1})):0===t.code?e.showToast({title:t.msg,icon:"none"}):e.showToast({title:"删除失败，请重试",icon:"none"})})},getTagsList:function(){var e=this,t={url:e.$api.tagsList};e.$httpRequest(t).then(function(t){e.tags=t.data.list})},selectTag:function(e){console.log(n(e," at pages\\mine\\address\\addAddress.vue:285"));var t=this;t.detail.tags_id=e}}};t.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},"838a":function(e,t,a){"use strict";var n,i=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"b",function(){return i}),a.d(t,"c",function(){return s}),a.d(t,"a",function(){return n})},"89ed":function(e,t,a){"use strict";var n=a("fdef"),i=a.n(n);i.a},abc4:function(e,t,a){"use strict";a.r(t);var n=a("838a"),i=a("e265");for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);a("89ed");var d,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"6d2b05d8",null,!1,n["a"],d);t["default"]=c.exports},da9c:function(e,t,a){"use strict";(function(e){a("7539"),a("921b");n(a("66fd"));var t=n(a("abc4"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},e265:function(e,t,a){"use strict";a.r(t);var n=a("5bd5"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},fdef:function(e,t,a){}},[["da9c","common/runtime","common/vendor"]]]);