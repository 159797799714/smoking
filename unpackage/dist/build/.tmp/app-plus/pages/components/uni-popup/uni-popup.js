(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/components/uni-popup/uni-popup"],{"13b1":function(t,n,e){"use strict";e.r(n);var i=e("fd94"),o=e("4532");for(var s in o)"default"!==s&&function(t){e.d(n,t,function(){return o[t]})}(s);e("39fb");var a,r=e("f0c5"),u=Object(r["a"])(o["default"],i["b"],i["c"],!1,null,"44f49917",null,!1,i["a"],a);n["default"]=u.exports},"39fb":function(t,n,e){"use strict";var i=e("f06e"),o=e.n(i);o.a},4532:function(t,n,e){"use strict";e.r(n);var i=e("7e49"),o=e.n(i);for(var s in i)"default"!==s&&function(t){e.d(n,t,function(){return i[t]})}(s);n["default"]=o.a},"7e49":function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=function(){return e.e("pages/components/uni-transition/uni-transition").then(e.bind(null,"230b"))},o={name:"UniPopup",components:{uniTransition:i},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var n=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(n.timer),n.timer=setTimeout(function(){n.$emit("change",{show:!1}),n.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};n.default=o},f06e:function(t,n,e){},fd94:function(t,n,e){"use strict";var i,o=function(){var t=this,n=t.$createElement;t._self._c},s=[];e.d(n,"b",function(){return o}),e.d(n,"c",function(){return s}),e.d(n,"a",function(){return i})}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/components/uni-popup/uni-popup-create-component',
    {
        'pages/components/uni-popup/uni-popup-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('6e42')['createComponent'](__webpack_require__("13b1"))
        })
    },
    [['pages/components/uni-popup/uni-popup-create-component']]
]);
