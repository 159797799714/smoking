(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/components/uni-transition/uni-transition"],{"230b":function(t,n,e){"use strict";e.r(n);var r=e("3b2f"),a=e("8a1d");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("491d");var o=e("2877"),s=Object(o["a"])(a["default"],r["a"],r["b"],!1,null,null,null);n["default"]=s.exports},"3b2f":function(t,n,e){"use strict";var r=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"a",function(){return r}),e.d(n,"b",function(){return a})},"491d":function(t,n,e){"use strict";var r=e("54a4"),a=e.n(r);a.a},"54a4":function(t,n,e){},"769b":function(t,n,e){"use strict";function r(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{},r=Object.keys(e);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(e).filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.forEach(function(n){a(t,n,e[n])})}return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=r({},this.styles,{"transition-duration":this.duration/1e3+"s"}),n="";for(var e in t){var a=this.toLine(e);n+=a+":"+t[e]+";"}return n}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var n in this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===n?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[n]," ");this.$nextTick(function(){setTimeout(function(){t._animation(!0)},50)})},close:function(t){this._animation(!1)},_animation:function(t){var n=this,e=this.getTranfrom(t);for(var r in this.transform="",e)"opacity"===r?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(e[r]," ");clearTimeout(this.timer),this.timer=setTimeout(function(){t||(n.isShow=!1),n.$emit("change",{detail:n.isShow})},this.duration)},getTranfrom:function(t){var n={transform:""};return this.modeClass.forEach(function(e){switch(e){case"fade":n.opacity=t?1:0;break;case"slide-top":n.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":n.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":n.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":n.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":n.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":n.transform+="scale(".concat(t?1:1.2,") ");break}}),n},_modeClassArr:function(t){var n=this.modeClass;if("string"!==typeof n){var e="";return n.forEach(function(n){e+=n+"-"+t+","}),e.substr(0,e.length-1)}return n+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};n.default=i},"8a1d":function(t,n,e){"use strict";e.r(n);var r=e("769b"),a=e.n(r);for(var i in r)"default"!==i&&function(t){e.d(n,t,function(){return r[t]})}(i);n["default"]=a.a}}]);
;(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
    'pages/components/uni-transition/uni-transition-create-component',
    {
        'pages/components/uni-transition/uni-transition-create-component':(function(module, exports, __webpack_require__){
            __webpack_require__('543d')['createComponent'](__webpack_require__("230b"))
        })
    },
    [['pages/components/uni-transition/uni-transition-create-component']]
]);                
