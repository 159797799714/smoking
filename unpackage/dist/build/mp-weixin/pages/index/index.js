(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{1382:function(t,e,i){"use strict";var n=i("8603"),a=i.n(n);a.a},6047:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=function(){return i.e("pages/components/banner").then(i.bind(null,"1999"))},a=function(){return i.e("pages/components/topBar").then(i.bind(null,"0849"))},o={components:{banner:n,topBar:a},data:function(){return{swiperList:["",""],tabList:[{name:"发现",category_id:0},{name:"最新",category_id:1},{name:"关注",category_id:2}],category_id:0,cultureList:[{article_title:"发哦结构构建工具搜",subtitle:"福建傲放假哦过几年公里数佛爱干净偶估计机构案件共计国家级欧冠骄傲就",image:{file_path:i("8af3")},show_views:100,like_count:2e3},{article_title:"发哦结构构建工具搜",subtitle:"福建傲放假哦过几年公里数佛爱干净偶估计机构案件共计国家级欧冠骄傲就",image:{file_path:i("8af3")},show_views:100,like_count:2e3}]}},onLoad:function(){},methods:{goRelease:function(){t.navigateTo({url:"./release/release"})},onScroll:function(t){console.log(t)},getDefault:function(e){var i=this;this.$http({url:this.$api.articlesbycategoryid,data:{category_id:e||""},cb:function(e,n){e||1!==n.code?t.showToast({title:"文章列表获取失败",icon:"none"}):i.cultureList=n.data.list}})},getCategorylist:function(){var e=this;e.$http({data:{wxapp_id:10001,token:"b612f5e2a32d553fdaea8eeb06bc2744"},url:e.$api.categorylist,cb:function(i,n){if(i||1!==n.code)t.showToast({title:"文章分类获取失败",icon:"none"});else{var a=n.data.categoryList,o=Math.ceil(a.length/5);if(console.log(o),1===o){var c={arr:n.data.categoryList};return e.tabList.push(c),void(e.category_id=e.tabList[0].arr[0].category_id)}if(o>1){for(var r=0;r<o;r++){var s={arr:a.splice(0,5)};e.tabList.push(s)}return void(e.category_id=e.tabList[0].arr[0].category_id)}}}})},zanAction:function(e,i){var n=this;console.log(e.article_id,e.islike,i);var a=this.$api.unLike;"no"===e.islike&&(a=this.$api.like),this.$http({url:a,data:{article_id:e.article_id},cb:function(e,a){if(!e&&a)switch(n.cultureList[i].islike){case"yes":t.showToast({title:"取消点赞成功",icon:"none"}),n.cultureList[i].islike="no",n.cultureList[i].like_count-=1;break;case"no":t.showToast({title:"点赞成功",icon:"none"}),n.cultureList[i].islike="yes",n.cultureList[i].like_count+=1;break}else switch(n.cultureList[i].islike){case"yes":t.showToast({title:"取消点赞失败",icon:"none"});break;case"no":t.showToast({title:"点赞失败请重试",icon:"none"});break}}})},getBanner:function(){var e=this;this.$http({url:this.$api.index_gethomebanners,cb:function(i,n){i||1!==n.code?t.showToast({title:"轮播图图片加载失败",icon:"none"}):e.swiperList=n.data.list}})},selectTab:function(t,e){this.category_id=t.category_id},goInfo:function(e){t.navigateTo({url:"../article/detail?article_id="+e})},goSearch:function(){t.navigateTo({url:"../components/search?type=0"})}}};e.default=o}).call(this,i("543d")["default"])},7566:function(t,e,i){"use strict";i.r(e);var n=i("6047"),a=i.n(n);for(var o in n)"default"!==o&&function(t){i.d(e,t,function(){return n[t]})}(o);e["default"]=a.a},8603:function(t,e,i){},cf4d:function(t,e,i){"use strict";(function(t){i("7539"),i("921b");n(i("66fd"));var e=n(i("fe67"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,i("543d")["createPage"])},df60:function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c},a=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return a})},fe67:function(t,e,i){"use strict";i.r(e);var n=i("df60"),a=i("7566");for(var o in a)"default"!==o&&function(t){i.d(e,t,function(){return a[t]})}(o);i("1382");var c=i("2877"),r=Object(c["a"])(a["default"],n["a"],n["b"],!1,null,"059e835e",null);e["default"]=r.exports}},[["cf4d","common/runtime","common/vendor"]]]);