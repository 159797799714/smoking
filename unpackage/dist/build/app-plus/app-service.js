var __wxAppData = {};
var __wxRoute;
var __wxRouteBegin;
var __wxAppCode__ = {};
var global = {};
var __wxAppCurrentFile__;
if(typeof __WXML_GLOBAL__ !== 'undefined'){
  delete __WXML_GLOBAL__.ops_cached//remove ops_cached(v8 下会有 cache)
}
// var Component = Component || function() {};
// var definePlugin = definePlugin || function() {};
// var requirePlugin = requirePlugin || function() {};
// var Behavior = Behavior || function() {};
var $gwx;
  
/*v0.5vv_20190703_syb_scopedata*/global.__wcc_version__='v0.5vv_20190703_syb_scopedata';global.__wcc_version_info__={"customComponents":true,"fixZeroRpx":true,"propValueDeepCopy":false};
var $gwxc
var $gaic={}
$gwx=function(path,global){
if(typeof global === 'undefined') global={};if(typeof __WXML_GLOBAL__ === 'undefined') {__WXML_GLOBAL__={};
}__WXML_GLOBAL__.modules = __WXML_GLOBAL__.modules || {};
function _(a,b){if(typeof(b)!='undefined')a.children.push(b);}
function _v(k){if(typeof(k)!='undefined')return {tag:'virtual','wxKey':k,children:[]};return {tag:'virtual',children:[]};}
function _n(tag){$gwxc++;if($gwxc>=16000){throw 'Dom limit exceeded, please check if there\'s any mistake you\'ve made.'};return {tag:'wx-'+tag,attr:{},children:[],n:[],raw:{},generics:{}}}
function _p(a,b){b&&a.properities.push(b);}
function _s(scope,env,key){return typeof(scope[key])!='undefined'?scope[key]:env[key]}
function _wp(m){console.warn("WXMLRT_$gwx:"+m)}
function _wl(tname,prefix){_wp(prefix+':-1:-1:-1: Template `' + tname + '` is being called recursively, will be stop.')}
$gwn=console.warn;
$gwl=console.log;
function $gwh()
{
function x()
{
}
x.prototype = 
{
hn: function( obj, all )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && ( all || obj.__wxspec__ !== 'm' || this.hn(obj.__value__) === 'h' ) ? "h" : "n";
}
return "n";
},
nh: function( obj, special )
{
return { __value__: obj, __wxspec__: special ? special : true }
},
rv: function( obj )
{
return this.hn(obj,true)==='n'?obj:this.rv(obj.__value__);
},
hm: function( obj )
{
if( typeof(obj) == 'object' )
{
var cnt=0;
var any1=false,any2=false;
for(var x in obj)
{
any1=any1|x==='__value__';
any2=any2|x==='__wxspec__';
cnt++;
if(cnt>2)break;
}
return cnt == 2 && any1 && any2 && (obj.__wxspec__ === 'm' || this.hm(obj.__value__) );
}
return false;
}
}
return new x;
}
wh=$gwh();
function $gstack(s){
var tmp=s.split('\n '+' '+' '+' ');
for(var i=0;i<tmp.length;++i){
if(0==i) continue;
if(")"===tmp[i][tmp[i].length-1])
tmp[i]=tmp[i].replace(/\s\(.*\)$/,"");
else
tmp[i]="at anonymous function";
}
return tmp.join('\n '+' '+' '+' ');
}
function $gwrt( should_pass_type_info )
{
function ArithmeticEv( ops, e, s, g, o )
{
var _f = false;
var rop = ops[0][1];
var _a,_b,_c,_d, _aa, _bb;
switch( rop )
{
case '?:':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : rev( ops[3], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '&&':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? rev( ops[2], e, s, g, o, _f ) : wh.rv( _a );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '||':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && ( wh.hn(_a) === 'h' );
_d = wh.rv( _a ) ? wh.rv(_a) : rev( ops[2], e, s, g, o, _f );
_d = _c && wh.hn( _d ) === 'n' ? wh.nh( _d, 'c' ) : _d;
return _d;
break;
case '+':
case '*':
case '/':
case '%':
case '|':
case '^':
case '&':
case '===':
case '==':
case '!=':
case '!==':
case '>=':
case '<=':
case '>':
case '<':
case '<<':
case '>>':
_a = rev( ops[1], e, s, g, o, _f );
_b = rev( ops[2], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
switch( rop )
{
case '+':
_d = wh.rv( _a ) + wh.rv( _b );
break;
case '*':
_d = wh.rv( _a ) * wh.rv( _b );
break;
case '/':
_d = wh.rv( _a ) / wh.rv( _b );
break;
case '%':
_d = wh.rv( _a ) % wh.rv( _b );
break;
case '|':
_d = wh.rv( _a ) | wh.rv( _b );
break;
case '^':
_d = wh.rv( _a ) ^ wh.rv( _b );
break;
case '&':
_d = wh.rv( _a ) & wh.rv( _b );
break;
case '===':
_d = wh.rv( _a ) === wh.rv( _b );
break;
case '==':
_d = wh.rv( _a ) == wh.rv( _b );
break;
case '!=':
_d = wh.rv( _a ) != wh.rv( _b );
break;
case '!==':
_d = wh.rv( _a ) !== wh.rv( _b );
break;
case '>=':
_d = wh.rv( _a ) >= wh.rv( _b );
break;
case '<=':
_d = wh.rv( _a ) <= wh.rv( _b );
break;
case '>':
_d = wh.rv( _a ) > wh.rv( _b );
break;
case '<':
_d = wh.rv( _a ) < wh.rv( _b );
break;
case '<<':
_d = wh.rv( _a ) << wh.rv( _b );
break;
case '>>':
_d = wh.rv( _a ) >> wh.rv( _b );
break;
default:
break;
}
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '-':
_a = ops.length === 3 ? rev( ops[1], e, s, g, o, _f ) : 0;
_b = ops.length === 3 ? rev( ops[2], e, s, g, o, _f ) : rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) === 'h' || wh.hn( _b ) === 'h');
_d = _c ? wh.rv( _a ) - wh.rv( _b ) : _a - _b;
return _c ? wh.nh( _d, "c" ) : _d;
break;
case '!':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = !wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
case '~':
_a = rev( ops[1], e, s, g, o, _f );
_c = should_pass_type_info && (wh.hn( _a ) == 'h');
_d = ~wh.rv(_a);
return _c ? wh.nh( _d, "c" ) : _d;
default:
$gwn('unrecognized op' + rop );
}
}
function rev( ops, e, s, g, o, newap )
{
var op = ops[0];
var _f = false;
if ( typeof newap !== "undefined" ) o.ap = newap;
if( typeof(op)==='object' )
{
var vop=op[0];
var _a, _aa, _b, _bb, _c, _d, _s, _e, _ta, _tb, _td;
switch(vop)
{
case 2:
return ArithmeticEv(ops,e,s,g,o);
break;
case 4: 
return rev( ops[1], e, s, g, o, _f );
break;
case 5: 
switch( ops.length )
{
case 2: 
_a = rev( ops[1],e,s,g,o,_f );
return should_pass_type_info?[_a]:[wh.rv(_a)];
return [_a];
break;
case 1: 
return [];
break;
default:
_a = rev( ops[1],e,s,g,o,_f );
_b = rev( ops[2],e,s,g,o,_f );
_a.push( 
should_pass_type_info ?
_b :
wh.rv( _b )
);
return _a;
break;
}
break;
case 6:
_a = rev(ops[1],e,s,g,o);
var ap = o.ap;
_ta = wh.hn(_a)==='h';
_aa = _ta ? wh.rv(_a) : _a;
o.is_affected |= _ta;
if( should_pass_type_info )
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return _ta ? wh.nh(undefined, 'e') : undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return (_ta || _tb) ? wh.nh(undefined, 'e') : undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return (_ta || _tb) ? (_td ? _d : wh.nh(_d, 'e')) : _d;
}
else
{
if( _aa===null || typeof(_aa) === 'undefined' )
{
return undefined;
}
_b = rev(ops[2],e,s,g,o,_f);
_tb = wh.hn(_b) === 'h';
_bb = _tb ? wh.rv(_b) : _b;
o.ap = ap;
o.is_affected |= _tb;
if( _bb===null || typeof(_bb) === 'undefined' || 
_bb === "__proto__" || _bb === "prototype" || _bb === "caller" ) 
{
return undefined;
}
_d = _aa[_bb];
if ( typeof _d === 'function' && !ap ) _d = undefined;
_td = wh.hn(_d)==='h';
o.is_affected |= _td;
return _td ? wh.rv(_d) : _d;
}
case 7: 
switch(ops[1][0])
{
case 11:
o.is_affected |= wh.hn(g)==='h';
return g;
case 3:
_s = wh.rv( s );
_e = wh.rv( e );
_b = ops[1][1];
if (g && g.f && g.f.hasOwnProperty(_b) )
{
_a = g.f;
o.ap = true;
}
else
{
_a = _s && _s.hasOwnProperty(_b) ? 
s : (_e && _e.hasOwnProperty(_b) ? e : undefined );
}
if( should_pass_type_info )
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
_d = _ta && !_td ? wh.nh(_d,'e') : _d;
return _d;
}
}
else
{
if( _a )
{
_ta = wh.hn(_a) === 'h';
_aa = _ta ? wh.rv( _a ) : _a;
_d = _aa[_b];
_td = wh.hn(_d) === 'h';
o.is_affected |= _ta || _td;
return wh.rv(_d);
}
}
return undefined;
}
break;
case 8: 
_a = {};
_a[ops[1]] = rev(ops[2],e,s,g,o,_f);
return _a;
break;
case 9: 
_a = rev(ops[1],e,s,g,o,_f);
_b = rev(ops[2],e,s,g,o,_f);
function merge( _a, _b, _ow )
{
var ka, _bbk;
_ta = wh.hn(_a)==='h';
_tb = wh.hn(_b)==='h';
_aa = wh.rv(_a);
_bb = wh.rv(_b);
for(var k in _bb)
{
if ( _ow || !_aa.hasOwnProperty(k) )
{
_aa[k] = should_pass_type_info ? (_tb ? wh.nh(_bb[k],'e') : _bb[k]) : wh.rv(_bb[k]);
}
}
return _a;
}
var _c = _a
var _ow = true
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
_a = _b
_b = _c
_ow = false
}
if ( typeof(ops[1][0]) === "object" && ops[1][0][0] === 10 ) {
var _r = {}
return merge( merge( _r, _a, _ow ), _b, _ow );
}
else
return merge( _a, _b, _ow );
break;
case 10:
_a = rev(ops[1],e,s,g,o,_f);
_a = should_pass_type_info ? _a : wh.rv( _a );
return _a ;
break;
case 12:
var _r;
_a = rev(ops[1],e,s,g,o);
if ( !o.ap )
{
return should_pass_type_info && wh.hn(_a)==='h' ? wh.nh( _r, 'f' ) : _r;
}
var ap = o.ap;
_b = rev(ops[2],e,s,g,o,_f);
o.ap = ap;
_ta = wh.hn(_a)==='h';
_tb = _ca(_b);
_aa = wh.rv(_a);	
_bb = wh.rv(_b); snap_bb=$gdc(_bb,"nv_");
try{
_r = typeof _aa === "function" ? $gdc(_aa.apply(null, snap_bb)) : undefined;
} catch (e){
e.message = e.message.replace(/nv_/g,"");
e.stack = e.stack.substring(0,e.stack.indexOf("\n", e.stack.lastIndexOf("at nv_")));
e.stack = e.stack.replace(/\snv_/g," "); 
e.stack = $gstack(e.stack);	
if(g.debugInfo)
{
e.stack += "\n "+" "+" "+" at "+g.debugInfo[0]+":"+g.debugInfo[1]+":"+g.debugInfo[2];
console.error(e);
}
_r = undefined;
}
return should_pass_type_info && (_tb || _ta) ? wh.nh( _r, 'f' ) : _r;
}
}
else
{
if( op === 3 || op === 1) return ops[1];
else if( op === 11 ) 
{
var _a='';
for( var i = 1 ; i < ops.length ; i++ )
{
var xp = wh.rv(rev(ops[i],e,s,g,o,_f));
_a += typeof(xp) === 'undefined' ? '' : xp;
}
return _a;
}
}
}
function wrapper( ops, e, s, g, o, newap )
{
if( ops[0] == '11182016' )
{
g.debugInfo = ops[2];
return rev( ops[1], e, s, g, o, newap );
}
else
{
g.debugInfo = null;
return rev( ops, e, s, g, o, newap );
}
}
return wrapper;
}
gra=$gwrt(true); 
grb=$gwrt(false); 
function TestTest( expr, ops, e,s,g, expect_a, expect_b, expect_affected )
{
{
var o = {is_affected:false};
var a = gra( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_a )
|| o.is_affected != expect_affected )
{
console.warn( "A. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_a ) + ", " + expect_affected + " is expected" );
}
}
{
var o = {is_affected:false};
var a = grb( ops, e,s,g, o );
if( JSON.stringify(a) != JSON.stringify( expect_b )
|| o.is_affected != expect_affected )
{
console.warn( "B. " + expr + " get result " + JSON.stringify(a) + ", " + o.is_affected + ", but " + JSON.stringify( expect_b ) + ", " + expect_affected + " is expected" );
}
}
}

function wfor( to_iter, func, env, _s, global, father, itemname, indexname, keyname )
{
var _n = wh.hn( to_iter ) === 'n'; 
var scope = wh.rv( _s ); 
var has_old_item = scope.hasOwnProperty(itemname);
var has_old_index = scope.hasOwnProperty(indexname);
var old_item = scope[itemname];
var old_index = scope[indexname];
var full = Object.prototype.toString.call(wh.rv(to_iter));
var type = full[8]; 
if( type === 'N' && full[10] === 'l' ) type = 'X'; 
var _y;
if( _n )
{
if( type === 'A' ) 
{
var r_iter_item;
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
r_iter_item = wh.rv(to_iter[i]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i = 0;
var r_iter_item;
for( var k in to_iter )
{
scope[itemname] = to_iter[k];
scope[indexname] = _n ? k : wh.nh(k, 'h');
r_iter_item = wh.rv(to_iter[k]);
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env,scope,_y,global );
i++;
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < to_iter.length ; i++ )
{
scope[itemname] = to_iter[i];
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env,scope,_y,global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < to_iter ; i++ )
{
scope[itemname] = i;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
else
{
var r_to_iter = wh.rv(to_iter);
var r_iter_item, iter_item;
if( type === 'A' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = r_to_iter[i];
iter_item = wh.hn(iter_item)==='n' ? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item
scope[indexname] = _n ? i : wh.nh(i, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y = _v(key);
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'O' ) 
{
var i=0;
for( var k in r_to_iter )
{
iter_item = r_to_iter[k];
iter_item = wh.hn(iter_item)==='n'? wh.nh(iter_item,'h') : iter_item;
r_iter_item = wh.rv( iter_item );
scope[itemname] = iter_item;
scope[indexname] = _n ? k : wh.nh(k, 'h');
var key = keyname && r_iter_item ? (keyname==="*this" ? r_iter_item : wh.rv(r_iter_item[keyname])) : undefined;
_y=_v(key);
_(father,_y);
func( env, scope, _y, global );
i++
}
}
else if( type === 'S' ) 
{
for( var i = 0 ; i < r_to_iter.length ; i++ )
{
iter_item = wh.nh(r_to_iter[i],'h');
scope[itemname] = iter_item;
scope[indexname] = _n ? i : wh.nh(i, 'h');
_y = _v( to_iter[i] + i );
_(father,_y);
func( env, scope, _y, global );
}
}
else if( type === 'N' ) 
{
for( var i = 0 ; i < r_to_iter ; i++ )
{
iter_item = wh.nh(i,'h');
scope[itemname] = iter_item;
scope[indexname]= _n ? i : wh.nh(i,'h');
_y = _v( i );
_(father,_y);
func(env,scope,_y,global);
}
}
else
{
}
}
if(has_old_item)
{
scope[itemname]=old_item;
}
else
{
delete scope[itemname];
}
if(has_old_index)
{
scope[indexname]=old_index;
}
else
{
delete scope[indexname];
}
}

function _ca(o)
{ 
if ( wh.hn(o) == 'h' ) return true;
if ( typeof o !== "object" ) return false;
for(var i in o){ 
if ( o.hasOwnProperty(i) ){
if (_ca(o[i])) return true;
}
}
return false;
}
function _da( node, attrname, opindex, raw, o )
{
var isaffected = false;
var value = $gdc( raw, "", 2 );
if ( o.ap && value && value.constructor===Function ) 
{
attrname = "$wxs:" + attrname; 
node.attr["$gdc"] = $gdc;
}
if ( o.is_affected || _ca(raw) ) 
{
node.n.push( attrname );
node.raw[attrname] = raw;
}
node.attr[attrname] = value;
}
function _r( node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _rz( z, node, attrname, opindex, env, scope, global ) 
{
global.opindex=opindex;
var o = {}, _env;
var a = grb( z[opindex], env, scope, global, o );
_da( node, attrname, opindex, a, o );
}
function _o( opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _oz( z, opindex, env, scope, global )
{
global.opindex=opindex;
var nothing = {};
var r = grb( z[opindex], env, scope, global, nothing );
return (r&&r.constructor===Function) ? undefined : r;
}
function _1( opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _1z( z, opindex, env, scope, global, o )
{
var o = o || {};
global.opindex=opindex;
return gra( z[opindex], env, scope, global, o );
}
function _2( opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1( opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}
function _2z( z, opindex, func, env, scope, global, father, itemname, indexname, keyname )
{
var o = {};
var to_iter = _1z( z, opindex, env, scope, global );
wfor( to_iter, func, env, scope, global, father, itemname, indexname, keyname );
}


function _m(tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_r(tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}
function _mz(z,tag,attrs,generics,env,scope,global)
{
var tmp=_n(tag);
var base=0;
for(var i = 0 ; i < attrs.length ; i+=2 )
{
if(base+attrs[i+1]<0)
{
tmp.attr[attrs[i]]=true;
}
else
{
_rz(z, tmp,attrs[i],base+attrs[i+1],env,scope,global);
if(base===0)base=attrs[i+1];
}
}
for(var i=0;i<generics.length;i+=2)
{
if(base+generics[i+1]<0)
{
tmp.generics[generics[i]]="";
}
else
{
var $t=grb(z[base+generics[i+1]],env,scope,global);
if ($t!="") $t="wx-"+$t;
tmp.generics[generics[i]]=$t;
if(base===0)base=generics[i+1];
}
}
return tmp;
}

var nf_init=function(){
if(typeof __WXML_GLOBAL__==="undefined"||undefined===__WXML_GLOBAL__.wxs_nf_init){
nf_init_Object();nf_init_Function();nf_init_Array();nf_init_String();nf_init_Boolean();nf_init_Number();nf_init_Math();nf_init_Date();nf_init_RegExp();
}
if(typeof __WXML_GLOBAL__!=="undefined") __WXML_GLOBAL__.wxs_nf_init=true;
};
var nf_init_Object=function(){
Object.defineProperty(Object.prototype,"nv_constructor",{writable:true,value:"Object"})
Object.defineProperty(Object.prototype,"nv_toString",{writable:true,value:function(){return "[object Object]"}})
}
var nf_init_Function=function(){
Object.defineProperty(Function.prototype,"nv_constructor",{writable:true,value:"Function"})
Object.defineProperty(Function.prototype,"nv_length",{get:function(){return this.length;},set:function(){}});
Object.defineProperty(Function.prototype,"nv_toString",{writable:true,value:function(){return "[function Function]"}})
}
var nf_init_Array=function(){
Object.defineProperty(Array.prototype,"nv_toString",{writable:true,value:function(){return this.nv_join();}})
Object.defineProperty(Array.prototype,"nv_join",{writable:true,value:function(s){
s=undefined==s?',':s;
var r="";
for(var i=0;i<this.length;++i){
if(0!=i) r+=s;
if(null==this[i]||undefined==this[i]) r+='';	
else if(typeof this[i]=='function') r+=this[i].nv_toString();
else if(typeof this[i]=='object'&&this[i].nv_constructor==="Array") r+=this[i].nv_join();
else r+=this[i].toString();
}
return r;
}})
Object.defineProperty(Array.prototype,"nv_constructor",{writable:true,value:"Array"})
Object.defineProperty(Array.prototype,"nv_concat",{writable:true,value:Array.prototype.concat})
Object.defineProperty(Array.prototype,"nv_pop",{writable:true,value:Array.prototype.pop})
Object.defineProperty(Array.prototype,"nv_push",{writable:true,value:Array.prototype.push})
Object.defineProperty(Array.prototype,"nv_reverse",{writable:true,value:Array.prototype.reverse})
Object.defineProperty(Array.prototype,"nv_shift",{writable:true,value:Array.prototype.shift})
Object.defineProperty(Array.prototype,"nv_slice",{writable:true,value:Array.prototype.slice})
Object.defineProperty(Array.prototype,"nv_sort",{writable:true,value:Array.prototype.sort})
Object.defineProperty(Array.prototype,"nv_splice",{writable:true,value:Array.prototype.splice})
Object.defineProperty(Array.prototype,"nv_unshift",{writable:true,value:Array.prototype.unshift})
Object.defineProperty(Array.prototype,"nv_indexOf",{writable:true,value:Array.prototype.indexOf})
Object.defineProperty(Array.prototype,"nv_lastIndexOf",{writable:true,value:Array.prototype.lastIndexOf})
Object.defineProperty(Array.prototype,"nv_every",{writable:true,value:Array.prototype.every})
Object.defineProperty(Array.prototype,"nv_some",{writable:true,value:Array.prototype.some})
Object.defineProperty(Array.prototype,"nv_forEach",{writable:true,value:Array.prototype.forEach})
Object.defineProperty(Array.prototype,"nv_map",{writable:true,value:Array.prototype.map})
Object.defineProperty(Array.prototype,"nv_filter",{writable:true,value:Array.prototype.filter})
Object.defineProperty(Array.prototype,"nv_reduce",{writable:true,value:Array.prototype.reduce})
Object.defineProperty(Array.prototype,"nv_reduceRight",{writable:true,value:Array.prototype.reduceRight})
Object.defineProperty(Array.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_String=function(){
Object.defineProperty(String.prototype,"nv_constructor",{writable:true,value:"String"})
Object.defineProperty(String.prototype,"nv_toString",{writable:true,value:String.prototype.toString})
Object.defineProperty(String.prototype,"nv_valueOf",{writable:true,value:String.prototype.valueOf})
Object.defineProperty(String.prototype,"nv_charAt",{writable:true,value:String.prototype.charAt})
Object.defineProperty(String.prototype,"nv_charCodeAt",{writable:true,value:String.prototype.charCodeAt})
Object.defineProperty(String.prototype,"nv_concat",{writable:true,value:String.prototype.concat})
Object.defineProperty(String.prototype,"nv_indexOf",{writable:true,value:String.prototype.indexOf})
Object.defineProperty(String.prototype,"nv_lastIndexOf",{writable:true,value:String.prototype.lastIndexOf})
Object.defineProperty(String.prototype,"nv_localeCompare",{writable:true,value:String.prototype.localeCompare})
Object.defineProperty(String.prototype,"nv_match",{writable:true,value:String.prototype.match})
Object.defineProperty(String.prototype,"nv_replace",{writable:true,value:String.prototype.replace})
Object.defineProperty(String.prototype,"nv_search",{writable:true,value:String.prototype.search})
Object.defineProperty(String.prototype,"nv_slice",{writable:true,value:String.prototype.slice})
Object.defineProperty(String.prototype,"nv_split",{writable:true,value:String.prototype.split})
Object.defineProperty(String.prototype,"nv_substring",{writable:true,value:String.prototype.substring})
Object.defineProperty(String.prototype,"nv_toLowerCase",{writable:true,value:String.prototype.toLowerCase})
Object.defineProperty(String.prototype,"nv_toLocaleLowerCase",{writable:true,value:String.prototype.toLocaleLowerCase})
Object.defineProperty(String.prototype,"nv_toUpperCase",{writable:true,value:String.prototype.toUpperCase})
Object.defineProperty(String.prototype,"nv_toLocaleUpperCase",{writable:true,value:String.prototype.toLocaleUpperCase})
Object.defineProperty(String.prototype,"nv_trim",{writable:true,value:String.prototype.trim})
Object.defineProperty(String.prototype,"nv_length",{get:function(){return this.length;},set:function(value){this.length=value;}});
}
var nf_init_Boolean=function(){
Object.defineProperty(Boolean.prototype,"nv_constructor",{writable:true,value:"Boolean"})
Object.defineProperty(Boolean.prototype,"nv_toString",{writable:true,value:Boolean.prototype.toString})
Object.defineProperty(Boolean.prototype,"nv_valueOf",{writable:true,value:Boolean.prototype.valueOf})
}
var nf_init_Number=function(){
Object.defineProperty(Number,"nv_MAX_VALUE",{writable:false,value:Number.MAX_VALUE})
Object.defineProperty(Number,"nv_MIN_VALUE",{writable:false,value:Number.MIN_VALUE})
Object.defineProperty(Number,"nv_NEGATIVE_INFINITY",{writable:false,value:Number.NEGATIVE_INFINITY})
Object.defineProperty(Number,"nv_POSITIVE_INFINITY",{writable:false,value:Number.POSITIVE_INFINITY})
Object.defineProperty(Number.prototype,"nv_constructor",{writable:true,value:"Number"})
Object.defineProperty(Number.prototype,"nv_toString",{writable:true,value:Number.prototype.toString})
Object.defineProperty(Number.prototype,"nv_toLocaleString",{writable:true,value:Number.prototype.toLocaleString})
Object.defineProperty(Number.prototype,"nv_valueOf",{writable:true,value:Number.prototype.valueOf})
Object.defineProperty(Number.prototype,"nv_toFixed",{writable:true,value:Number.prototype.toFixed})
Object.defineProperty(Number.prototype,"nv_toExponential",{writable:true,value:Number.prototype.toExponential})
Object.defineProperty(Number.prototype,"nv_toPrecision",{writable:true,value:Number.prototype.toPrecision})
}
var nf_init_Math=function(){
Object.defineProperty(Math,"nv_E",{writable:false,value:Math.E})
Object.defineProperty(Math,"nv_LN10",{writable:false,value:Math.LN10})
Object.defineProperty(Math,"nv_LN2",{writable:false,value:Math.LN2})
Object.defineProperty(Math,"nv_LOG2E",{writable:false,value:Math.LOG2E})
Object.defineProperty(Math,"nv_LOG10E",{writable:false,value:Math.LOG10E})
Object.defineProperty(Math,"nv_PI",{writable:false,value:Math.PI})
Object.defineProperty(Math,"nv_SQRT1_2",{writable:false,value:Math.SQRT1_2})
Object.defineProperty(Math,"nv_SQRT2",{writable:false,value:Math.SQRT2})
Object.defineProperty(Math,"nv_abs",{writable:false,value:Math.abs})
Object.defineProperty(Math,"nv_acos",{writable:false,value:Math.acos})
Object.defineProperty(Math,"nv_asin",{writable:false,value:Math.asin})
Object.defineProperty(Math,"nv_atan",{writable:false,value:Math.atan})
Object.defineProperty(Math,"nv_atan2",{writable:false,value:Math.atan2})
Object.defineProperty(Math,"nv_ceil",{writable:false,value:Math.ceil})
Object.defineProperty(Math,"nv_cos",{writable:false,value:Math.cos})
Object.defineProperty(Math,"nv_exp",{writable:false,value:Math.exp})
Object.defineProperty(Math,"nv_floor",{writable:false,value:Math.floor})
Object.defineProperty(Math,"nv_log",{writable:false,value:Math.log})
Object.defineProperty(Math,"nv_max",{writable:false,value:Math.max})
Object.defineProperty(Math,"nv_min",{writable:false,value:Math.min})
Object.defineProperty(Math,"nv_pow",{writable:false,value:Math.pow})
Object.defineProperty(Math,"nv_random",{writable:false,value:Math.random})
Object.defineProperty(Math,"nv_round",{writable:false,value:Math.round})
Object.defineProperty(Math,"nv_sin",{writable:false,value:Math.sin})
Object.defineProperty(Math,"nv_sqrt",{writable:false,value:Math.sqrt})
Object.defineProperty(Math,"nv_tan",{writable:false,value:Math.tan})
}
var nf_init_Date=function(){
Object.defineProperty(Date.prototype,"nv_constructor",{writable:true,value:"Date"})
Object.defineProperty(Date,"nv_parse",{writable:true,value:Date.parse})
Object.defineProperty(Date,"nv_UTC",{writable:true,value:Date.UTC})
Object.defineProperty(Date,"nv_now",{writable:true,value:Date.now})
Object.defineProperty(Date.prototype,"nv_toString",{writable:true,value:Date.prototype.toString})
Object.defineProperty(Date.prototype,"nv_toDateString",{writable:true,value:Date.prototype.toDateString})
Object.defineProperty(Date.prototype,"nv_toTimeString",{writable:true,value:Date.prototype.toTimeString})
Object.defineProperty(Date.prototype,"nv_toLocaleString",{writable:true,value:Date.prototype.toLocaleString})
Object.defineProperty(Date.prototype,"nv_toLocaleDateString",{writable:true,value:Date.prototype.toLocaleDateString})
Object.defineProperty(Date.prototype,"nv_toLocaleTimeString",{writable:true,value:Date.prototype.toLocaleTimeString})
Object.defineProperty(Date.prototype,"nv_valueOf",{writable:true,value:Date.prototype.valueOf})
Object.defineProperty(Date.prototype,"nv_getTime",{writable:true,value:Date.prototype.getTime})
Object.defineProperty(Date.prototype,"nv_getFullYear",{writable:true,value:Date.prototype.getFullYear})
Object.defineProperty(Date.prototype,"nv_getUTCFullYear",{writable:true,value:Date.prototype.getUTCFullYear})
Object.defineProperty(Date.prototype,"nv_getMonth",{writable:true,value:Date.prototype.getMonth})
Object.defineProperty(Date.prototype,"nv_getUTCMonth",{writable:true,value:Date.prototype.getUTCMonth})
Object.defineProperty(Date.prototype,"nv_getDate",{writable:true,value:Date.prototype.getDate})
Object.defineProperty(Date.prototype,"nv_getUTCDate",{writable:true,value:Date.prototype.getUTCDate})
Object.defineProperty(Date.prototype,"nv_getDay",{writable:true,value:Date.prototype.getDay})
Object.defineProperty(Date.prototype,"nv_getUTCDay",{writable:true,value:Date.prototype.getUTCDay})
Object.defineProperty(Date.prototype,"nv_getHours",{writable:true,value:Date.prototype.getHours})
Object.defineProperty(Date.prototype,"nv_getUTCHours",{writable:true,value:Date.prototype.getUTCHours})
Object.defineProperty(Date.prototype,"nv_getMinutes",{writable:true,value:Date.prototype.getMinutes})
Object.defineProperty(Date.prototype,"nv_getUTCMinutes",{writable:true,value:Date.prototype.getUTCMinutes})
Object.defineProperty(Date.prototype,"nv_getSeconds",{writable:true,value:Date.prototype.getSeconds})
Object.defineProperty(Date.prototype,"nv_getUTCSeconds",{writable:true,value:Date.prototype.getUTCSeconds})
Object.defineProperty(Date.prototype,"nv_getMilliseconds",{writable:true,value:Date.prototype.getMilliseconds})
Object.defineProperty(Date.prototype,"nv_getUTCMilliseconds",{writable:true,value:Date.prototype.getUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_getTimezoneOffset",{writable:true,value:Date.prototype.getTimezoneOffset})
Object.defineProperty(Date.prototype,"nv_setTime",{writable:true,value:Date.prototype.setTime})
Object.defineProperty(Date.prototype,"nv_setMilliseconds",{writable:true,value:Date.prototype.setMilliseconds})
Object.defineProperty(Date.prototype,"nv_setUTCMilliseconds",{writable:true,value:Date.prototype.setUTCMilliseconds})
Object.defineProperty(Date.prototype,"nv_setSeconds",{writable:true,value:Date.prototype.setSeconds})
Object.defineProperty(Date.prototype,"nv_setUTCSeconds",{writable:true,value:Date.prototype.setUTCSeconds})
Object.defineProperty(Date.prototype,"nv_setMinutes",{writable:true,value:Date.prototype.setMinutes})
Object.defineProperty(Date.prototype,"nv_setUTCMinutes",{writable:true,value:Date.prototype.setUTCMinutes})
Object.defineProperty(Date.prototype,"nv_setHours",{writable:true,value:Date.prototype.setHours})
Object.defineProperty(Date.prototype,"nv_setUTCHours",{writable:true,value:Date.prototype.setUTCHours})
Object.defineProperty(Date.prototype,"nv_setDate",{writable:true,value:Date.prototype.setDate})
Object.defineProperty(Date.prototype,"nv_setUTCDate",{writable:true,value:Date.prototype.setUTCDate})
Object.defineProperty(Date.prototype,"nv_setMonth",{writable:true,value:Date.prototype.setMonth})
Object.defineProperty(Date.prototype,"nv_setUTCMonth",{writable:true,value:Date.prototype.setUTCMonth})
Object.defineProperty(Date.prototype,"nv_setFullYear",{writable:true,value:Date.prototype.setFullYear})
Object.defineProperty(Date.prototype,"nv_setUTCFullYear",{writable:true,value:Date.prototype.setUTCFullYear})
Object.defineProperty(Date.prototype,"nv_toUTCString",{writable:true,value:Date.prototype.toUTCString})
Object.defineProperty(Date.prototype,"nv_toISOString",{writable:true,value:Date.prototype.toISOString})
Object.defineProperty(Date.prototype,"nv_toJSON",{writable:true,value:Date.prototype.toJSON})
}
var nf_init_RegExp=function(){
Object.defineProperty(RegExp.prototype,"nv_constructor",{writable:true,value:"RegExp"})
Object.defineProperty(RegExp.prototype,"nv_exec",{writable:true,value:RegExp.prototype.exec})
Object.defineProperty(RegExp.prototype,"nv_test",{writable:true,value:RegExp.prototype.test})
Object.defineProperty(RegExp.prototype,"nv_toString",{writable:true,value:RegExp.prototype.toString})
Object.defineProperty(RegExp.prototype,"nv_source",{get:function(){return this.source;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_global",{get:function(){return this.global;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_ignoreCase",{get:function(){return this.ignoreCase;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_multiline",{get:function(){return this.multiline;},set:function(){}});
Object.defineProperty(RegExp.prototype,"nv_lastIndex",{get:function(){return this.lastIndex;},set:function(v){this.lastIndex=v;}});
}
nf_init();
var nv_getDate=function(){var args=Array.prototype.slice.call(arguments);args.unshift(Date);return new(Function.prototype.bind.apply(Date, args));}
var nv_getRegExp=function(){var args=Array.prototype.slice.call(arguments);args.unshift(RegExp);return new(Function.prototype.bind.apply(RegExp, args));}
var nv_console={}
nv_console.nv_log=function(){var res="WXSRT:";for(var i=0;i<arguments.length;++i)res+=arguments[i]+" ";console.log(res);}
var nv_parseInt = parseInt, nv_parseFloat = parseFloat, nv_isNaN = isNaN, nv_isFinite = isFinite, nv_decodeURI = decodeURI, nv_decodeURIComponent = decodeURIComponent, nv_encodeURI = encodeURI, nv_encodeURIComponent = encodeURIComponent;
function $gdc(o,p,r) {
o=wh.rv(o);
if(o===null||o===undefined) return o;
if(o.constructor===String||o.constructor===Boolean||o.constructor===Number) return o;
if(o.constructor===Object){
var copy={};
for(var k in o)
if(o.hasOwnProperty(k))
if(undefined===p) copy[k.substring(3)]=$gdc(o[k],p,r);
else copy[p+k]=$gdc(o[k],p,r);
return copy;
}
if(o.constructor===Array){
var copy=[];
for(var i=0;i<o.length;i++) copy.push($gdc(o[i],p,r));
return copy;
}
if(o.constructor===Date){
var copy=new Date();
copy.setTime(o.getTime());
return copy;
}
if(o.constructor===RegExp){
var f="";
if(o.global) f+="g";
if(o.ignoreCase) f+="i";
if(o.multiline) f+="m";
return (new RegExp(o.source,f));
}
if(r&&o.constructor===Function){
if ( r == 1 ) return $gdc(o(),undefined, 2);
if ( r == 2 ) return o;
}
return null;
}
var nv_JSON={}
nv_JSON.nv_stringify=function(o){
JSON.stringify(o);
return JSON.stringify($gdc(o));
}
nv_JSON.nv_parse=function(o){
if(o===undefined) return undefined;
var t=JSON.parse(o);
return $gdc(t,'nv_');
}

function _af(p, a, r, c){
p.extraAttr = {"t_action": a, "t_rawid": r };
if ( typeof(c) != 'undefined' ) p.extraAttr.t_cid = c;
}

function _ai(i,p,e,me,r,c){var x=_grp(p,e,me);if(x)i.push(x);else{i.push('');_wp(me+':import:'+r+':'+c+': Path `'+p+'` not found from `'+me+'`.')}}
function _grp(p,e,me){if(p[0]!='/'){var mepart=me.split('/');mepart.pop();var ppart=p.split('/');for(var i=0;i<ppart.length;i++){if( ppart[i]=='..')mepart.pop();else if(!ppart[i]||ppart[i]=='.')continue;else mepart.push(ppart[i]);}p=mepart.join('/');}if(me[0]=='.'&&p[0]=='/')p='.'+p;if(e[p])return p;if(e[p+'.wxml'])return p+'.wxml';}
function _gd(p,c,e,d){if(!c)return;if(d[p][c])return d[p][c];for(var x=e[p].i.length-1;x>=0;x--){if(e[p].i[x]&&d[e[p].i[x]][c])return d[e[p].i[x]][c]};for(var x=e[p].ti.length-1;x>=0;x--){var q=_grp(e[p].ti[x],e,p);if(q&&d[q][c])return d[q][c]}var ii=_gapi(e,p);for(var x=0;x<ii.length;x++){if(ii[x]&&d[ii[x]][c])return d[ii[x]][c]}for(var k=e[p].j.length-1;k>=0;k--)if(e[p].j[k]){for(var q=e[e[p].j[k]].ti.length-1;q>=0;q--){var pp=_grp(e[e[p].j[k]].ti[q],e,p);if(pp&&d[pp][c]){return d[pp][c]}}}}
function _gapi(e,p){if(!p)return [];if($gaic[p]){return $gaic[p]};var ret=[],q=[],h=0,t=0,put={},visited={};q.push(p);visited[p]=true;t++;while(h<t){var a=q[h++];for(var i=0;i<e[a].ic.length;i++){var nd=e[a].ic[i];var np=_grp(nd,e,a);if(np&&!visited[np]){visited[np]=true;q.push(np);t++;}}for(var i=0;a!=p&&i<e[a].ti.length;i++){var ni=e[a].ti[i];var nm=_grp(ni,e,a);if(nm&&!put[nm]){put[nm]=true;ret.push(nm);}}}$gaic[p]=ret;return ret;}
var $ixc={};function _ic(p,ent,me,e,s,r,gg){var x=_grp(p,ent,me);ent[me].j.push(x);if(x){if($ixc[x]){_wp('-1:include:-1:-1: `'+p+'` is being included in a loop, will be stop.');return;}$ixc[x]=true;try{ent[x].f(e,s,r,gg)}catch(e){}$ixc[x]=false;}else{_wp(me+':include:-1:-1: Included path `'+p+'` not found from `'+me+'`.')}}
function _w(tn,f,line,c){_wp(f+':template:'+line+':'+c+': Template `'+tn+'` not found.');}function _ev(dom){var changed=false;delete dom.properities;delete dom.n;if(dom.children){do{changed=false;var newch = [];for(var i=0;i<dom.children.length;i++){var ch=dom.children[i];if( ch.tag=='virtual'){changed=true;for(var j=0;ch.children&&j<ch.children.length;j++){newch.push(ch.children[j]);}}else { newch.push(ch); } } dom.children = newch; }while(changed);for(var i=0;i<dom.children.length;i++){_ev(dom.children[i]);}} return dom; }
function _tsd( root )
{
if( root.tag == "wx-wx-scope" ) 
{
root.tag = "virtual";
root.wxCkey = "11";
root['wxScopeData'] = root.attr['wx:scope-data'];
delete root.n;
delete root.raw;
delete root.generics;
delete root.attr;
}
for( var i = 0 ; root.children && i < root.children.length ; i++ )
{
_tsd( root.children[i] );
}
return root;
}

var e_={}
if(typeof(global.entrys)==='undefined')global.entrys={};e_=global.entrys;
var d_={}
if(typeof(global.defines)==='undefined')global.defines={};d_=global.defines;
var f_={}
if(typeof(global.modules)==='undefined')global.modules={};f_=global.modules || {};
var p_={}
__WXML_GLOBAL__.ops_cached = __WXML_GLOBAL__.ops_cached || {}
__WXML_GLOBAL__.ops_set = __WXML_GLOBAL__.ops_set || {};
__WXML_GLOBAL__.ops_init = __WXML_GLOBAL__.ops_init || {};
var z=__WXML_GLOBAL__.ops_set.$gwx || [];
function gz$gwx_1(){
if( __WXML_GLOBAL__.ops_cached.$gwx_1)return __WXML_GLOBAL__.ops_cached.$gwx_1
__WXML_GLOBAL__.ops_cached.$gwx_1=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-55132663'])
Z([[2,'<'],[[6],[[7],[3,'leftBox']],[3,'length']],[1,1]])
Z([3,'articleList data-v-55132663'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'leftBox']])
Z(z[3])
Z([3,'__e'])
Z([3,'article-item data-v-55132663'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'leftBox']],[1,'']],[[7],[3,'index']]],[1,'article_id']]]]]]]]]]]]]]])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'articleimage']],[3,'length']],[1,0]])
Z(z[3])
Z(z[4])
Z([[7],[3,'rightBox']])
Z(z[3])
Z(z[7])
Z(z[8])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'goDetail']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[[5],[1,'rightBox']],[1,'']],[[7],[3,'index']]],[1,'article_id']]]]]]]]]]]]]]])
Z(z[10])
})(__WXML_GLOBAL__.ops_cached.$gwx_1);return __WXML_GLOBAL__.ops_cached.$gwx_1
}
function gz$gwx_2(){
if( __WXML_GLOBAL__.ops_cached.$gwx_2)return __WXML_GLOBAL__.ops_cached.$gwx_2
__WXML_GLOBAL__.ops_cached.$gwx_2=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_2);return __WXML_GLOBAL__.ops_cached.$gwx_2
}
function gz$gwx_3(){
if( __WXML_GLOBAL__.ops_cached.$gwx_3)return __WXML_GLOBAL__.ops_cached.$gwx_3
__WXML_GLOBAL__.ops_cached.$gwx_3=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_3);return __WXML_GLOBAL__.ops_cached.$gwx_3
}
function gz$gwx_4(){
if( __WXML_GLOBAL__.ops_cached.$gwx_4)return __WXML_GLOBAL__.ops_cached.$gwx_4
__WXML_GLOBAL__.ops_cached.$gwx_4=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_4);return __WXML_GLOBAL__.ops_cached.$gwx_4
}
function gz$gwx_5(){
if( __WXML_GLOBAL__.ops_cached.$gwx_5)return __WXML_GLOBAL__.ops_cached.$gwx_5
__WXML_GLOBAL__.ops_cached.$gwx_5=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_5);return __WXML_GLOBAL__.ops_cached.$gwx_5
}
function gz$gwx_6(){
if( __WXML_GLOBAL__.ops_cached.$gwx_6)return __WXML_GLOBAL__.ops_cached.$gwx_6
__WXML_GLOBAL__.ops_cached.$gwx_6=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'!'],[[7],[3,'isindex']]])
Z([3,'p-re title t-c col-f data-v-2ad2cdcd'])
Z([[2,'+'],[[2,'+'],[1,'font-size:'],[[2,'+'],[[7],[3,'fontSize']],[1,'px']]],[1,';']])
Z([[7],[3,'title']])
})(__WXML_GLOBAL__.ops_cached.$gwx_6);return __WXML_GLOBAL__.ops_cached.$gwx_6
}
function gz$gwx_7(){
if( __WXML_GLOBAL__.ops_cached.$gwx_7)return __WXML_GLOBAL__.ops_cached.$gwx_7
__WXML_GLOBAL__.ops_cached.$gwx_7=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'showPopup']])
Z([3,'__e'])
Z([3,'uni-popup data-v-44f49917'])
Z([[4],[[5],[[4],[[5],[[5],[1,'touchmove']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'__l'])
Z(z[1])
Z([3,'data-v-44f49917'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^click']],[[4],[[5],[[4],[[5],[1,'onTap']]]]]]]]])
Z([[4],[[5],[1,'fade']]])
Z([[7],[3,'showTrans']])
Z([[7],[3,'maskClass']])
Z([3,'1'])
Z(z[4])
Z(z[1])
Z(z[6])
Z(z[7])
Z([[7],[3,'ani']])
Z(z[9])
Z([[7],[3,'transClass']])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z(z[1])
Z([3,'uni-popup__wrapper-box data-v-44f49917'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'clear']],[[4],[[5],[1,'$event']]]]]]]]]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_7);return __WXML_GLOBAL__.ops_cached.$gwx_7
}
function gz$gwx_8(){
if( __WXML_GLOBAL__.ops_cached.$gwx_8)return __WXML_GLOBAL__.ops_cached.$gwx_8
__WXML_GLOBAL__.ops_cached.$gwx_8=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'isShow']])
Z([3,'__e'])
Z([[4],[[5],[[5],[1,'uni-transition vue-ref']],[[6],[[7],[3,'ani']],[3,'in']]]])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[1,'change']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'ani'])
Z([[2,'+'],[[2,'+'],[[2,'+'],[1,'transform:'],[[7],[3,'transform']]],[1,';']],[[7],[3,'stylesObject']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_8);return __WXML_GLOBAL__.ops_cached.$gwx_8
}
function gz$gwx_9(){
if( __WXML_GLOBAL__.ops_cached.$gwx_9)return __WXML_GLOBAL__.ops_cached.$gwx_9
__WXML_GLOBAL__.ops_cached.$gwx_9=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_9);return __WXML_GLOBAL__.ops_cached.$gwx_9
}
function gz$gwx_10(){
if( __WXML_GLOBAL__.ops_cached.$gwx_10)return __WXML_GLOBAL__.ops_cached.$gwx_10
__WXML_GLOBAL__.ops_cached.$gwx_10=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container data-v-65f874f5'])
Z([3,'__l'])
Z([3,'data-v-65f874f5'])
Z([1,false])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'__e'])
Z([3,'content data-v-65f874f5'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scroll']],[[4],[[5],[[4],[[5],[[5],[1,'onScroll']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([[2,'>'],[[6],[[6],[[7],[3,'detail']],[3,'articleimage']],[3,'length']],[1,0]])
Z(z[1])
Z(z[3])
Z(z[2])
Z([[6],[[7],[3,'detail']],[3,'articleimage']])
Z([3,'2'])
Z([3,'cultureInfo col-c data-v-65f874f5'])
Z([[6],[[7],[3,'detail']],[3,'article_title']])
Z([[6],[[7],[3,'detail']],[3,'subtitle']])
Z([3,'index'])
Z([3,'item'])
Z([[6],[[7],[3,'detail']],[3,'comments_show']])
Z(z[19])
Z([[2,'<'],[[7],[3,'index']],[1,10]])
Z([3,'num'])
Z([3,'li'])
Z([[6],[[7],[3,'item']],[3,'replys']])
Z(z[24])
Z([[2,'<'],[[7],[3,'num']],[1,2]])
})(__WXML_GLOBAL__.ops_cached.$gwx_10);return __WXML_GLOBAL__.ops_cached.$gwx_10
}
function gz$gwx_11(){
if( __WXML_GLOBAL__.ops_cached.$gwx_11)return __WXML_GLOBAL__.ops_cached.$gwx_11
__WXML_GLOBAL__.ops_cached.$gwx_11=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container data-v-532ec3de'])
Z([3,'__l'])
Z([3,'data-v-532ec3de'])
Z([1,true])
Z([3,'1'])
Z([3,'__e'])
Z([3,'content bg-black data-v-532ec3de'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'lower']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([[2,'&&'],[[7],[3,'swiperList']],[[2,'>'],[[6],[[7],[3,'swiperList']],[3,'length']],[1,0]]])
Z(z[1])
Z(z[2])
Z([[7],[3,'swiperList']])
Z([3,'2'])
Z([3,'section data-v-532ec3de'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'articleList']])
Z(z[15])
Z([[2,'>'],[[6],[[7],[3,'articleList']],[3,'length']],[1,0]])
Z([3,'culture bg-black data-v-532ec3de'])
Z([[2,'>'],[[6],[[6],[[7],[3,'item']],[3,'articleimage']],[3,'length']],[1,0]])
Z([3,'item-words data-v-532ec3de'])
Z([[6],[[7],[3,'item']],[3,'article_title']])
Z([[6],[[7],[3,'item']],[3,'article_content']])
Z([[2,'<'],[[6],[[7],[3,'articleList']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_11);return __WXML_GLOBAL__.ops_cached.$gwx_11
}
function gz$gwx_12(){
if( __WXML_GLOBAL__.ops_cached.$gwx_12)return __WXML_GLOBAL__.ops_cached.$gwx_12
__WXML_GLOBAL__.ops_cached.$gwx_12=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_12);return __WXML_GLOBAL__.ops_cached.$gwx_12
}
function gz$gwx_13(){
if( __WXML_GLOBAL__.ops_cached.$gwx_13)return __WXML_GLOBAL__.ops_cached.$gwx_13
__WXML_GLOBAL__.ops_cached.$gwx_13=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-281f85a7'])
Z([1,false])
Z([3,'文章发布'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_13);return __WXML_GLOBAL__.ops_cached.$gwx_13
}
function gz$gwx_14(){
if( __WXML_GLOBAL__.ops_cached.$gwx_14)return __WXML_GLOBAL__.ops_cached.$gwx_14
__WXML_GLOBAL__.ops_cached.$gwx_14=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'detail data-v-3f16a8d0'])
Z([3,'__l'])
Z([3,'data-v-3f16a8d0'])
Z([[7],[3,'swiperList']])
Z([3,'1'])
Z(z[1])
Z([3,'data-v-3f16a8d0 vue-ref'])
Z([3,'popup'])
Z([3,'bottom'])
Z([3,'2'])
Z([[4],[[5],[1,'default']]])
Z([3,'sum col-6 data-v-3f16a8d0'])
Z([[2,'!'],[[7],[3,'showPanic']]])
Z(z[12])
})(__WXML_GLOBAL__.ops_cached.$gwx_14);return __WXML_GLOBAL__.ops_cached.$gwx_14
}
function gz$gwx_15(){
if( __WXML_GLOBAL__.ops_cached.$gwx_15)return __WXML_GLOBAL__.ops_cached.$gwx_15
__WXML_GLOBAL__.ops_cached.$gwx_15=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'data-v-1208a435'])
Z([3,'__l'])
Z(z[0])
Z([1,false])
Z([[2,'?:'],[[7],[3,'token']],[[6],[[6],[[7],[3,'info']],[3,'user']],[3,'nickName']],[1,'']])
Z([3,'1'])
Z([3,'good-main data-v-1208a435'])
Z(z[1])
Z(z[0])
Z([[7],[3,'goodList']])
Z([3,'2'])
Z([[2,'&&'],[[2,'!=='],[[7],[3,'goodList']],[1,'']],[[2,'<'],[[6],[[7],[3,'goodList']],[3,'length']],[1,1]]])
})(__WXML_GLOBAL__.ops_cached.$gwx_15);return __WXML_GLOBAL__.ops_cached.$gwx_15
}
function gz$gwx_16(){
if( __WXML_GLOBAL__.ops_cached.$gwx_16)return __WXML_GLOBAL__.ops_cached.$gwx_16
__WXML_GLOBAL__.ops_cached.$gwx_16=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'detail']],[3,'is_sign']])
})(__WXML_GLOBAL__.ops_cached.$gwx_16);return __WXML_GLOBAL__.ops_cached.$gwx_16
}
function gz$gwx_17(){
if( __WXML_GLOBAL__.ops_cached.$gwx_17)return __WXML_GLOBAL__.ops_cached.$gwx_17
__WXML_GLOBAL__.ops_cached.$gwx_17=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'detail']])
})(__WXML_GLOBAL__.ops_cached.$gwx_17);return __WXML_GLOBAL__.ops_cached.$gwx_17
}
function gz$gwx_18(){
if( __WXML_GLOBAL__.ops_cached.$gwx_18)return __WXML_GLOBAL__.ops_cached.$gwx_18
__WXML_GLOBAL__.ops_cached.$gwx_18=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'address']],[3,'district']])
})(__WXML_GLOBAL__.ops_cached.$gwx_18);return __WXML_GLOBAL__.ops_cached.$gwx_18
}
function gz$gwx_19(){
if( __WXML_GLOBAL__.ops_cached.$gwx_19)return __WXML_GLOBAL__.ops_cached.$gwx_19
__WXML_GLOBAL__.ops_cached.$gwx_19=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-22b10817'])
Z([1,true])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_19);return __WXML_GLOBAL__.ops_cached.$gwx_19
}
function gz$gwx_20(){
if( __WXML_GLOBAL__.ops_cached.$gwx_20)return __WXML_GLOBAL__.ops_cached.$gwx_20
__WXML_GLOBAL__.ops_cached.$gwx_20=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[6],[[7],[3,'detail']],[3,'list']],[3,'data']])
Z([3,'__l'])
Z([3,'data-v-ef33a7d0'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_20);return __WXML_GLOBAL__.ops_cached.$gwx_20
}
function gz$gwx_21(){
if( __WXML_GLOBAL__.ops_cached.$gwx_21)return __WXML_GLOBAL__.ops_cached.$gwx_21
__WXML_GLOBAL__.ops_cached.$gwx_21=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_21);return __WXML_GLOBAL__.ops_cached.$gwx_21
}
function gz$gwx_22(){
if( __WXML_GLOBAL__.ops_cached.$gwx_22)return __WXML_GLOBAL__.ops_cached.$gwx_22
__WXML_GLOBAL__.ops_cached.$gwx_22=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'user_steps']],[3,'step_count']])
})(__WXML_GLOBAL__.ops_cached.$gwx_22);return __WXML_GLOBAL__.ops_cached.$gwx_22
}
function gz$gwx_23(){
if( __WXML_GLOBAL__.ops_cached.$gwx_23)return __WXML_GLOBAL__.ops_cached.$gwx_23
__WXML_GLOBAL__.ops_cached.$gwx_23=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_23);return __WXML_GLOBAL__.ops_cached.$gwx_23
}
function gz$gwx_24(){
if( __WXML_GLOBAL__.ops_cached.$gwx_24)return __WXML_GLOBAL__.ops_cached.$gwx_24
__WXML_GLOBAL__.ops_cached.$gwx_24=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'__l'])
Z([3,'data-v-39169ff6 vue-ref'])
Z([3,'popup'])
Z([3,'bottom'])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_24);return __WXML_GLOBAL__.ops_cached.$gwx_24
}
function gz$gwx_25(){
if( __WXML_GLOBAL__.ops_cached.$gwx_25)return __WXML_GLOBAL__.ops_cached.$gwx_25
__WXML_GLOBAL__.ops_cached.$gwx_25=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container p-30 col-c data-v-6d2b05d8'])
Z([3,'__l'])
Z([3,'data-v-6d2b05d8'])
Z([1,false])
Z([[7],[3,'title']])
Z([3,'1'])
Z([[4],[[5],[1,'default']]])
Z([3,'content border-box f-30 data-v-6d2b05d8'])
Z([[2,'&&'],[[7],[3,'address_id']],[[2,'!'],[[7],[3,'isDefault']]]])
Z([[7],[3,'address_id']])
Z([[2,'!'],[[7],[3,'address_id']]])
})(__WXML_GLOBAL__.ops_cached.$gwx_25);return __WXML_GLOBAL__.ops_cached.$gwx_25
}
function gz$gwx_26(){
if( __WXML_GLOBAL__.ops_cached.$gwx_26)return __WXML_GLOBAL__.ops_cached.$gwx_26
__WXML_GLOBAL__.ops_cached.$gwx_26=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'content p-30 border-box col-c data-v-4ad7240a'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'addressList']])
Z(z[1])
Z([3,'__e'])
Z([3,'item f-24 data-v-4ad7240a'])
Z([[4],[[5],[[4],[[5],[[5],[1,'tap']],[[4],[[5],[[4],[[5],[[5],[[5],[1,'editAction']],[[4],[[5],[1,'$0']]]],[[4],[[5],[[4],[[5],[[4],[[5],[[5],[[5],[1,'addressList']],[1,'']],[[7],[3,'index']]]]]]]]]]]]]]]])
Z([[2,'==='],[[6],[[7],[3,'item']],[3,'address_id']],[[7],[3,'default_id']]])
Z([[2,'<'],[[6],[[7],[3,'addressList']],[3,'length']],[1,1]])
})(__WXML_GLOBAL__.ops_cached.$gwx_26);return __WXML_GLOBAL__.ops_cached.$gwx_26
}
function gz$gwx_27(){
if( __WXML_GLOBAL__.ops_cached.$gwx_27)return __WXML_GLOBAL__.ops_cached.$gwx_27
__WXML_GLOBAL__.ops_cached.$gwx_27=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'p-30 data-v-6a6b25a9'])
Z([[2,'&&'],[[7],[3,'swiperList']],[[2,'>'],[[6],[[7],[3,'swiperList']],[3,'length']],[1,0]]])
Z([3,'__l'])
Z([3,'data-v-6a6b25a9'])
Z([[7],[3,'swiperList']])
Z([3,'1'])
Z([3,'index'])
Z([3,'item'])
Z([[7],[3,'list']])
Z(z[6])
Z([[2,'!=='],[[6],[[7],[3,'item']],[3,'expire_type']],[1,10]])
})(__WXML_GLOBAL__.ops_cached.$gwx_27);return __WXML_GLOBAL__.ops_cached.$gwx_27
}
function gz$gwx_28(){
if( __WXML_GLOBAL__.ops_cached.$gwx_28)return __WXML_GLOBAL__.ops_cached.$gwx_28
__WXML_GLOBAL__.ops_cached.$gwx_28=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'#131313'])
Z([3,'__l'])
Z([3,'__e'])
Z([3,'data-v-34bd9fad vue-ref'])
Z([[4],[[5],[[4],[[5],[[5],[1,'^result']],[[4],[[5],[[4],[[5],[1,'makeOver']]]]]]]]])
Z([3,'qrcode'])
Z([3,'#fff'])
Z([3,'二维码生成中'])
Z([1,true])
Z(z[6])
Z(z[8])
Z([1,350])
Z([3,'upx'])
Z([[7],[3,'val']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_28);return __WXML_GLOBAL__.ops_cached.$gwx_28
}
function gz$gwx_29(){
if( __WXML_GLOBAL__.ops_cached.$gwx_29)return __WXML_GLOBAL__.ops_cached.$gwx_29
__WXML_GLOBAL__.ops_cached.$gwx_29=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[2,'&&'],[[7],[3,'swiperList']],[[2,'>'],[[6],[[7],[3,'swiperList']],[3,'length']],[1,0]]])
Z([3,'__l'])
Z([3,'data-v-8971450c'])
Z([[7],[3,'swiperList']])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_29);return __WXML_GLOBAL__.ops_cached.$gwx_29
}
function gz$gwx_30(){
if( __WXML_GLOBAL__.ops_cached.$gwx_30)return __WXML_GLOBAL__.ops_cached.$gwx_30
__WXML_GLOBAL__.ops_cached.$gwx_30=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'detail']])
})(__WXML_GLOBAL__.ops_cached.$gwx_30);return __WXML_GLOBAL__.ops_cached.$gwx_30
}
function gz$gwx_31(){
if( __WXML_GLOBAL__.ops_cached.$gwx_31)return __WXML_GLOBAL__.ops_cached.$gwx_31
__WXML_GLOBAL__.ops_cached.$gwx_31=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container data-v-56dd3eb4'])
Z([3,'__l'])
Z([3,'data-v-56dd3eb4'])
Z([1,true])
Z([3,'1'])
Z([[7],[3,'token']])
Z([[2,'?:'],[[2,'==='],[[7],[3,'tabIndex']],[1,0]],[[7],[3,'articleList']],[[7],[3,'like_article_list']]])
Z(z[1])
Z(z[2])
Z([3,'2'])
})(__WXML_GLOBAL__.ops_cached.$gwx_31);return __WXML_GLOBAL__.ops_cached.$gwx_31
}
function gz$gwx_32(){
if( __WXML_GLOBAL__.ops_cached.$gwx_32)return __WXML_GLOBAL__.ops_cached.$gwx_32
__WXML_GLOBAL__.ops_cached.$gwx_32=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_32);return __WXML_GLOBAL__.ops_cached.$gwx_32
}
function gz$gwx_33(){
if( __WXML_GLOBAL__.ops_cached.$gwx_33)return __WXML_GLOBAL__.ops_cached.$gwx_33
__WXML_GLOBAL__.ops_cached.$gwx_33=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_33);return __WXML_GLOBAL__.ops_cached.$gwx_33
}
function gz$gwx_34(){
if( __WXML_GLOBAL__.ops_cached.$gwx_34)return __WXML_GLOBAL__.ops_cached.$gwx_34
__WXML_GLOBAL__.ops_cached.$gwx_34=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_34);return __WXML_GLOBAL__.ops_cached.$gwx_34
}
function gz$gwx_35(){
if( __WXML_GLOBAL__.ops_cached.$gwx_35)return __WXML_GLOBAL__.ops_cached.$gwx_35
__WXML_GLOBAL__.ops_cached.$gwx_35=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'detail']])
})(__WXML_GLOBAL__.ops_cached.$gwx_35);return __WXML_GLOBAL__.ops_cached.$gwx_35
}
function gz$gwx_36(){
if( __WXML_GLOBAL__.ops_cached.$gwx_36)return __WXML_GLOBAL__.ops_cached.$gwx_36
__WXML_GLOBAL__.ops_cached.$gwx_36=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_36);return __WXML_GLOBAL__.ops_cached.$gwx_36
}
function gz$gwx_37(){
if( __WXML_GLOBAL__.ops_cached.$gwx_37)return __WXML_GLOBAL__.ops_cached.$gwx_37
__WXML_GLOBAL__.ops_cached.$gwx_37=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[7],[3,'chartData']])
Z([3,'__l'])
Z([3,'data-v-e1ebf876'])
Z([3,'1'])
})(__WXML_GLOBAL__.ops_cached.$gwx_37);return __WXML_GLOBAL__.ops_cached.$gwx_37
}
function gz$gwx_38(){
if( __WXML_GLOBAL__.ops_cached.$gwx_38)return __WXML_GLOBAL__.ops_cached.$gwx_38
__WXML_GLOBAL__.ops_cached.$gwx_38=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([[6],[[7],[3,'info']],[3,'shop_name']])
})(__WXML_GLOBAL__.ops_cached.$gwx_38);return __WXML_GLOBAL__.ops_cached.$gwx_38
}
function gz$gwx_39(){
if( __WXML_GLOBAL__.ops_cached.$gwx_39)return __WXML_GLOBAL__.ops_cached.$gwx_39
__WXML_GLOBAL__.ops_cached.$gwx_39=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
Z([3,'container data-v-10e6c2eb'])
Z([3,'__l'])
Z([3,'data-v-10e6c2eb'])
Z([1,true])
Z([3,'门店'])
Z([3,'1'])
Z([3,'__e'])
Z([3,'content bg-black data-v-10e6c2eb'])
Z([[4],[[5],[[4],[[5],[[5],[1,'scrolltolower']],[[4],[[5],[[4],[[5],[[5],[1,'lower']],[[4],[[5],[1,'$event']]]]]]]]]]])
Z([3,'true'])
Z([[2,'&&'],[[7],[3,'swiperList']],[[2,'>'],[[6],[[7],[3,'swiperList']],[3,'length']],[1,0]]])
Z(z[1])
Z(z[2])
Z([[7],[3,'swiperList']])
Z([3,'2'])
Z([[7],[3,'groups']])
})(__WXML_GLOBAL__.ops_cached.$gwx_39);return __WXML_GLOBAL__.ops_cached.$gwx_39
}
function gz$gwx_40(){
if( __WXML_GLOBAL__.ops_cached.$gwx_40)return __WXML_GLOBAL__.ops_cached.$gwx_40
__WXML_GLOBAL__.ops_cached.$gwx_40=[];
(function(z){var a=11;function Z(ops){z.push(ops)}
})(__WXML_GLOBAL__.ops_cached.$gwx_40);return __WXML_GLOBAL__.ops_cached.$gwx_40
}
__WXML_GLOBAL__.ops_set.$gwx=z;
__WXML_GLOBAL__.ops_init.$gwx=true;
var nv_require=function(){var nnm={};var nom={};return function(n){return function(){if(!nnm[n]) return undefined;try{if(!nom[n])nom[n]=nnm[n]();return nom[n];}catch(e){e.message=e.message.replace(/nv_/g,'');var tmp = e.stack.substring(0,e.stack.lastIndexOf(n));e.stack = tmp.substring(0,tmp.lastIndexOf('\n'));e.stack = e.stack.replace(/\snv_/g,' ');e.stack = $gstack(e.stack);e.stack += '\n    at ' + n.substring(2);console.error(e);}
}}}()
var x=['./pages/components/articleList.wxml','./pages/components/banner.wxml','./pages/components/circle.wxml','./pages/components/goodList.wxml','./pages/components/qrcode/tki-qrcode.wxml','./pages/components/topBar.wxml','./pages/components/uni-popup/uni-popup.wxml','./pages/components/uni-transition/uni-transition.wxml','./pages/index/age_18.wxml','./pages/index/article/detail.wxml','./pages/index/index.wxml','./pages/index/release/center.wxml','./pages/index/release/release.wxml','./pages/integral/goodDetail.wxml','./pages/integral/integral.wxml','./pages/integral/integralDetail.wxml','./pages/integral/order/orderDetail.wxml','./pages/integral/order/orderSure.wxml','./pages/integral/order/success.wxml','./pages/integral/plan.wxml','./pages/integral/rules.wxml','./pages/integral/todayFoot.wxml','./pages/login/bindTel.wxml','./pages/login/login.wxml','./pages/mine/address/addAddress.wxml','./pages/mine/address/address.wxml','./pages/mine/coupon/center.wxml','./pages/mine/coupon/couponDetail.wxml','./pages/mine/coupon/mycoupon.wxml','./pages/mine/member.wxml','./pages/mine/mine.wxml','./pages/mine/personal.wxml','./pages/mine/setting.wxml','./pages/mine/todayExperience.wxml','./pages/partner/couponDetail.wxml','./pages/partner/couponNote.wxml','./pages/partner/couponStatistics.wxml','./pages/partner/index.wxml','./pages/store/store.wxml','./pages/store/storeDetail.wxml'];d_[x[0]]={}
var m0=function(e,s,r,gg){
var z=gz$gwx_1()
var oB=_n('view')
_rz(z,oB,'class',0,e,s,gg)
var xC=_v()
_(oB,xC)
if(_oz(z,1,e,s,gg)){xC.wxVkey=1
}
var oD=_n('view')
_rz(z,oD,'class',2,e,s,gg)
var fE=_v()
_(oD,fE)
var cF=function(oH,hG,cI,gg){
var lK=_mz(z,'view',['bindtap',7,'class',1,'data-event-opts',2],[],oH,hG,gg)
var aL=_v()
_(lK,aL)
if(_oz(z,10,oH,hG,gg)){aL.wxVkey=1
}
aL.wxXCkey=1
_(cI,lK)
return cI
}
fE.wxXCkey=2
_2z(z,5,cF,e,s,gg,fE,'item','index','index')
var tM=_v()
_(oD,tM)
var eN=function(oP,bO,xQ,gg){
var fS=_mz(z,'view',['bindtap',15,'class',1,'data-event-opts',2],[],oP,bO,gg)
var cT=_v()
_(fS,cT)
if(_oz(z,18,oP,bO,gg)){cT.wxVkey=1
}
cT.wxXCkey=1
_(xQ,fS)
return xQ
}
tM.wxXCkey=2
_2z(z,13,eN,e,s,gg,tM,'item','index','index')
_(oB,oD)
xC.wxXCkey=1
_(r,oB)
return r
}
e_[x[0]]={f:m0,j:[],i:[],ti:[],ic:[]}
d_[x[1]]={}
var m1=function(e,s,r,gg){
var z=gz$gwx_2()
return r
}
e_[x[1]]={f:m1,j:[],i:[],ti:[],ic:[]}
d_[x[2]]={}
var m2=function(e,s,r,gg){
var z=gz$gwx_3()
return r
}
e_[x[2]]={f:m2,j:[],i:[],ti:[],ic:[]}
d_[x[3]]={}
var m3=function(e,s,r,gg){
var z=gz$gwx_4()
return r
}
e_[x[3]]={f:m3,j:[],i:[],ti:[],ic:[]}
d_[x[4]]={}
var m4=function(e,s,r,gg){
var z=gz$gwx_5()
return r
}
e_[x[4]]={f:m4,j:[],i:[],ti:[],ic:[]}
d_[x[5]]={}
var m5=function(e,s,r,gg){
var z=gz$gwx_6()
var aZ=_v()
_(r,aZ)
if(_oz(z,0,e,s,gg)){aZ.wxVkey=1
var t1=_mz(z,'view',['class',1,'style',1],[],e,s,gg)
var e2=_v()
_(t1,e2)
if(_oz(z,3,e,s,gg)){e2.wxVkey=1
}
var b3=_n('slot')
_(t1,b3)
e2.wxXCkey=1
_(aZ,t1)
}
aZ.wxXCkey=1
return r
}
e_[x[5]]={f:m5,j:[],i:[],ti:[],ic:[]}
d_[x[6]]={}
var m6=function(e,s,r,gg){
var z=gz$gwx_7()
var x5=_v()
_(r,x5)
if(_oz(z,0,e,s,gg)){x5.wxVkey=1
var o6=_mz(z,'view',['catchtouchmove',1,'class',1,'data-event-opts',2],[],e,s,gg)
var f7=_mz(z,'uni-transition',['bind:__l',4,'bind:click',1,'class',2,'data-event-opts',3,'modeClass',4,'show',5,'styles',6,'vueId',7],[],e,s,gg)
_(o6,f7)
var c8=_mz(z,'uni-transition',['bind:__l',12,'bind:click',1,'class',2,'data-event-opts',3,'modeClass',4,'show',5,'styles',6,'vueId',7,'vueSlots',8],[],e,s,gg)
var h9=_mz(z,'view',['catchtap',21,'class',1,'data-event-opts',2],[],e,s,gg)
var o0=_n('slot')
_(h9,o0)
_(c8,h9)
_(o6,c8)
_(x5,o6)
}
x5.wxXCkey=1
x5.wxXCkey=3
return r
}
e_[x[6]]={f:m6,j:[],i:[],ti:[],ic:[]}
d_[x[7]]={}
var m7=function(e,s,r,gg){
var z=gz$gwx_8()
var oBB=_v()
_(r,oBB)
if(_oz(z,0,e,s,gg)){oBB.wxVkey=1
var lCB=_mz(z,'view',['bindtap',1,'class',1,'data-event-opts',2,'data-ref',3,'style',4],[],e,s,gg)
var aDB=_n('slot')
_(lCB,aDB)
_(oBB,lCB)
}
oBB.wxXCkey=1
return r
}
e_[x[7]]={f:m7,j:[],i:[],ti:[],ic:[]}
d_[x[8]]={}
var m8=function(e,s,r,gg){
var z=gz$gwx_9()
return r
}
e_[x[8]]={f:m8,j:[],i:[],ti:[],ic:[]}
d_[x[9]]={}
var m9=function(e,s,r,gg){
var z=gz$gwx_10()
var bGB=_n('view')
_rz(z,bGB,'class',0,e,s,gg)
var oHB=_mz(z,'top-bar',['bind:__l',1,'class',1,'isindex',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(bGB,oHB)
var xIB=_mz(z,'scroll-view',['bindscroll',6,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var oJB=_v()
_(xIB,oJB)
if(_oz(z,10,e,s,gg)){oJB.wxVkey=1
var fKB=_mz(z,'banner',['bind:__l',11,'borderWidth',1,'class',2,'swiperList',3,'vueId',4],[],e,s,gg)
_(oJB,fKB)
}
var cLB=_n('view')
_rz(z,cLB,'class',16,e,s,gg)
var hMB=_v()
_(cLB,hMB)
if(_oz(z,17,e,s,gg)){hMB.wxVkey=1
}
var oNB=_v()
_(cLB,oNB)
if(_oz(z,18,e,s,gg)){oNB.wxVkey=1
}
hMB.wxXCkey=1
oNB.wxXCkey=1
_(xIB,cLB)
var cOB=_v()
_(xIB,cOB)
var oPB=function(aRB,lQB,tSB,gg){
var bUB=_v()
_(tSB,bUB)
if(_oz(z,23,aRB,lQB,gg)){bUB.wxVkey=1
var oVB=_v()
_(bUB,oVB)
var xWB=function(fYB,oXB,cZB,gg){
var o2B=_v()
_(cZB,o2B)
if(_oz(z,28,fYB,oXB,gg)){o2B.wxVkey=1
}
o2B.wxXCkey=1
return cZB
}
oVB.wxXCkey=2
_2z(z,26,xWB,aRB,lQB,gg,oVB,'li','num','num')
}
bUB.wxXCkey=1
return tSB
}
cOB.wxXCkey=2
_2z(z,21,oPB,e,s,gg,cOB,'item','index','index')
oJB.wxXCkey=1
oJB.wxXCkey=3
_(bGB,xIB)
_(r,bGB)
return r
}
e_[x[9]]={f:m9,j:[],i:[],ti:[],ic:[]}
d_[x[10]]={}
var m10=function(e,s,r,gg){
var z=gz$gwx_11()
var o4B=_n('view')
_rz(z,o4B,'class',0,e,s,gg)
var l5B=_mz(z,'top-bar',['bind:__l',1,'class',1,'isindex',2,'vueId',3],[],e,s,gg)
_(o4B,l5B)
var a6B=_mz(z,'scroll-view',['bindscrolltolower',5,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var t7B=_v()
_(a6B,t7B)
if(_oz(z,9,e,s,gg)){t7B.wxVkey=1
var e8B=_mz(z,'banner',['bind:__l',10,'class',1,'swiperList',2,'vueId',3],[],e,s,gg)
_(t7B,e8B)
}
var b9B=_n('view')
_rz(z,b9B,'class',14,e,s,gg)
var xAC=_v()
_(b9B,xAC)
var oBC=function(cDC,fCC,hEC,gg){
var cGC=_v()
_(hEC,cGC)
if(_oz(z,19,cDC,fCC,gg)){cGC.wxVkey=1
var oHC=_n('view')
_rz(z,oHC,'class',20,cDC,fCC,gg)
var lIC=_v()
_(oHC,lIC)
if(_oz(z,21,cDC,fCC,gg)){lIC.wxVkey=1
}
var aJC=_n('view')
_rz(z,aJC,'class',22,cDC,fCC,gg)
var tKC=_v()
_(aJC,tKC)
if(_oz(z,23,cDC,fCC,gg)){tKC.wxVkey=1
}
var eLC=_v()
_(aJC,eLC)
if(_oz(z,24,cDC,fCC,gg)){eLC.wxVkey=1
}
tKC.wxXCkey=1
eLC.wxXCkey=1
_(oHC,aJC)
lIC.wxXCkey=1
_(cGC,oHC)
}
cGC.wxXCkey=1
return hEC
}
xAC.wxXCkey=2
_2z(z,17,oBC,e,s,gg,xAC,'item','index','index')
var o0B=_v()
_(b9B,o0B)
if(_oz(z,25,e,s,gg)){o0B.wxVkey=1
}
o0B.wxXCkey=1
_(a6B,b9B)
t7B.wxXCkey=1
t7B.wxXCkey=3
_(o4B,a6B)
_(r,o4B)
return r
}
e_[x[10]]={f:m10,j:[],i:[],ti:[],ic:[]}
d_[x[11]]={}
var m11=function(e,s,r,gg){
var z=gz$gwx_12()
return r
}
e_[x[11]]={f:m11,j:[],i:[],ti:[],ic:[]}
d_[x[12]]={}
var m12=function(e,s,r,gg){
var z=gz$gwx_13()
var xOC=_mz(z,'top-bar',['bind:__l',0,'class',1,'isindex',1,'title',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(r,xOC)
return r
}
e_[x[12]]={f:m12,j:[],i:[],ti:[],ic:[]}
d_[x[13]]={}
var m13=function(e,s,r,gg){
var z=gz$gwx_14()
var fQC=_n('view')
_rz(z,fQC,'class',0,e,s,gg)
var cRC=_mz(z,'banner',['borderWidth',-1,'bind:__l',1,'class',1,'swiperList',2,'vueId',3],[],e,s,gg)
_(fQC,cRC)
var hSC=_mz(z,'uni-popup',['bind:__l',5,'class',1,'data-ref',2,'type',3,'vueId',4,'vueSlots',5],[],e,s,gg)
var oTC=_n('view')
_rz(z,oTC,'class',11,e,s,gg)
var cUC=_v()
_(oTC,cUC)
if(_oz(z,12,e,s,gg)){cUC.wxVkey=1
}
var oVC=_v()
_(oTC,oVC)
if(_oz(z,13,e,s,gg)){oVC.wxVkey=1
}
cUC.wxXCkey=1
oVC.wxXCkey=1
_(hSC,oTC)
_(fQC,hSC)
_(r,fQC)
return r
}
e_[x[13]]={f:m13,j:[],i:[],ti:[],ic:[]}
d_[x[14]]={}
var m14=function(e,s,r,gg){
var z=gz$gwx_15()
var aXC=_n('view')
_rz(z,aXC,'class',0,e,s,gg)
var tYC=_mz(z,'top-bar',['bind:__l',1,'class',1,'isindex',2,'title',3,'vueId',4],[],e,s,gg)
_(aXC,tYC)
var eZC=_n('view')
_rz(z,eZC,'class',6,e,s,gg)
var o2C=_mz(z,'good-list',['bind:__l',7,'class',1,'goodList',2,'vueId',3],[],e,s,gg)
_(eZC,o2C)
var b1C=_v()
_(eZC,b1C)
if(_oz(z,11,e,s,gg)){b1C.wxVkey=1
}
b1C.wxXCkey=1
_(aXC,eZC)
_(r,aXC)
return r
}
e_[x[14]]={f:m14,j:[],i:[],ti:[],ic:[]}
d_[x[15]]={}
var m15=function(e,s,r,gg){
var z=gz$gwx_16()
var o4C=_v()
_(r,o4C)
if(_oz(z,0,e,s,gg)){o4C.wxVkey=1
}
o4C.wxXCkey=1
return r
}
e_[x[15]]={f:m15,j:[],i:[],ti:[],ic:[]}
d_[x[16]]={}
var m16=function(e,s,r,gg){
var z=gz$gwx_17()
var c6C=_v()
_(r,c6C)
if(_oz(z,0,e,s,gg)){c6C.wxVkey=1
}
c6C.wxXCkey=1
return r
}
e_[x[16]]={f:m16,j:[],i:[],ti:[],ic:[]}
d_[x[17]]={}
var m17=function(e,s,r,gg){
var z=gz$gwx_18()
var o8C=_v()
_(r,o8C)
if(_oz(z,0,e,s,gg)){o8C.wxVkey=1
}
o8C.wxXCkey=1
return r
}
e_[x[17]]={f:m17,j:[],i:[],ti:[],ic:[]}
d_[x[18]]={}
var m18=function(e,s,r,gg){
var z=gz$gwx_19()
var o0C=_mz(z,'top-bar',['bind:__l',0,'class',1,'isindex',1,'vueId',2],[],e,s,gg)
_(r,o0C)
return r
}
e_[x[18]]={f:m18,j:[],i:[],ti:[],ic:[]}
d_[x[19]]={}
var m19=function(e,s,r,gg){
var z=gz$gwx_20()
var aBD=_mz(z,'article-list',['articleList',0,'bind:__l',1,'class',1,'vueId',2],[],e,s,gg)
_(r,aBD)
return r
}
e_[x[19]]={f:m19,j:[],i:[],ti:[],ic:[]}
d_[x[20]]={}
var m20=function(e,s,r,gg){
var z=gz$gwx_21()
return r
}
e_[x[20]]={f:m20,j:[],i:[],ti:[],ic:[]}
d_[x[21]]={}
var m21=function(e,s,r,gg){
var z=gz$gwx_22()
var bED=_v()
_(r,bED)
if(_oz(z,0,e,s,gg)){bED.wxVkey=1
}
bED.wxXCkey=1
return r
}
e_[x[21]]={f:m21,j:[],i:[],ti:[],ic:[]}
d_[x[22]]={}
var m22=function(e,s,r,gg){
var z=gz$gwx_23()
return r
}
e_[x[22]]={f:m22,j:[],i:[],ti:[],ic:[]}
d_[x[23]]={}
var m23=function(e,s,r,gg){
var z=gz$gwx_24()
var oHD=_mz(z,'uni-popup',['bind:__l',0,'class',1,'data-ref',1,'type',2,'vueId',3,'vueSlots',4],[],e,s,gg)
_(r,oHD)
return r
}
e_[x[23]]={f:m23,j:[],i:[],ti:[],ic:[]}
d_[x[24]]={}
var m24=function(e,s,r,gg){
var z=gz$gwx_25()
var cJD=_n('view')
_rz(z,cJD,'class',0,e,s,gg)
var hKD=_mz(z,'top-bar',['bind:__l',1,'class',1,'isindex',2,'title',3,'vueId',4,'vueSlots',5],[],e,s,gg)
_(cJD,hKD)
var oLD=_n('view')
_rz(z,oLD,'class',7,e,s,gg)
var cMD=_v()
_(oLD,cMD)
if(_oz(z,8,e,s,gg)){cMD.wxVkey=1
}
var oND=_v()
_(oLD,oND)
if(_oz(z,9,e,s,gg)){oND.wxVkey=1
}
var lOD=_v()
_(oLD,lOD)
if(_oz(z,10,e,s,gg)){lOD.wxVkey=1
}
cMD.wxXCkey=1
oND.wxXCkey=1
lOD.wxXCkey=1
_(cJD,oLD)
_(r,cJD)
return r
}
e_[x[24]]={f:m24,j:[],i:[],ti:[],ic:[]}
d_[x[25]]={}
var m25=function(e,s,r,gg){
var z=gz$gwx_26()
var tQD=_n('view')
_rz(z,tQD,'class',0,e,s,gg)
var bSD=_v()
_(tQD,bSD)
var oTD=function(oVD,xUD,fWD,gg){
var hYD=_mz(z,'view',['bindtap',5,'class',1,'data-event-opts',2],[],oVD,xUD,gg)
var oZD=_v()
_(hYD,oZD)
if(_oz(z,8,oVD,xUD,gg)){oZD.wxVkey=1
}
oZD.wxXCkey=1
_(fWD,hYD)
return fWD
}
bSD.wxXCkey=2
_2z(z,3,oTD,e,s,gg,bSD,'item','index','index')
var eRD=_v()
_(tQD,eRD)
if(_oz(z,9,e,s,gg)){eRD.wxVkey=1
}
eRD.wxXCkey=1
_(r,tQD)
return r
}
e_[x[25]]={f:m25,j:[],i:[],ti:[],ic:[]}
d_[x[26]]={}
var m26=function(e,s,r,gg){
var z=gz$gwx_27()
var o2D=_n('view')
_rz(z,o2D,'class',0,e,s,gg)
var l3D=_v()
_(o2D,l3D)
if(_oz(z,1,e,s,gg)){l3D.wxVkey=1
var a4D=_mz(z,'banner',['bind:__l',2,'class',1,'swiperList',2,'vueId',3],[],e,s,gg)
_(l3D,a4D)
}
var t5D=_v()
_(o2D,t5D)
var e6D=function(o8D,b7D,x9D,gg){
var fAE=_v()
_(x9D,fAE)
if(_oz(z,10,o8D,b7D,gg)){fAE.wxVkey=1
}
fAE.wxXCkey=1
return x9D
}
t5D.wxXCkey=2
_2z(z,8,e6D,e,s,gg,t5D,'item','index','index')
l3D.wxXCkey=1
l3D.wxXCkey=3
_(r,o2D)
return r
}
e_[x[26]]={f:m26,j:[],i:[],ti:[],ic:[]}
d_[x[27]]={}
var m27=function(e,s,r,gg){
var z=gz$gwx_28()
var hCE=_mz(z,'tki-qrcode',['background',0,'bind:__l',1,'bind:result',1,'class',2,'data-event-opts',3,'data-ref',4,'foreground',5,'loadingText',6,'onval',7,'pdground',8,'showLoading',9,'size',10,'unit',11,'val',12,'vueId',13],[],e,s,gg)
_(r,hCE)
return r
}
e_[x[27]]={f:m27,j:[],i:[],ti:[],ic:[]}
d_[x[28]]={}
var m28=function(e,s,r,gg){
var z=gz$gwx_29()
var cEE=_v()
_(r,cEE)
if(_oz(z,0,e,s,gg)){cEE.wxVkey=1
var oFE=_mz(z,'banner',['bind:__l',1,'class',1,'swiperList',2,'vueId',3],[],e,s,gg)
_(cEE,oFE)
}
cEE.wxXCkey=1
cEE.wxXCkey=3
return r
}
e_[x[28]]={f:m28,j:[],i:[],ti:[],ic:[]}
d_[x[29]]={}
var m29=function(e,s,r,gg){
var z=gz$gwx_30()
var aHE=_v()
_(r,aHE)
if(_oz(z,0,e,s,gg)){aHE.wxVkey=1
}
aHE.wxXCkey=1
return r
}
e_[x[29]]={f:m29,j:[],i:[],ti:[],ic:[]}
d_[x[30]]={}
var m30=function(e,s,r,gg){
var z=gz$gwx_31()
var eJE=_n('view')
_rz(z,eJE,'class',0,e,s,gg)
var oLE=_mz(z,'top-bar',['bind:__l',1,'class',1,'isindex',2,'vueId',3],[],e,s,gg)
_(eJE,oLE)
var bKE=_v()
_(eJE,bKE)
if(_oz(z,5,e,s,gg)){bKE.wxVkey=1
var xME=_mz(z,'article-list',['articleList',6,'bind:__l',1,'class',2,'vueId',3],[],e,s,gg)
_(bKE,xME)
}
else{bKE.wxVkey=2
}
bKE.wxXCkey=1
bKE.wxXCkey=3
_(r,eJE)
return r
}
e_[x[30]]={f:m30,j:[],i:[],ti:[],ic:[]}
d_[x[31]]={}
var m31=function(e,s,r,gg){
var z=gz$gwx_32()
return r
}
e_[x[31]]={f:m31,j:[],i:[],ti:[],ic:[]}
d_[x[32]]={}
var m32=function(e,s,r,gg){
var z=gz$gwx_33()
return r
}
e_[x[32]]={f:m32,j:[],i:[],ti:[],ic:[]}
d_[x[33]]={}
var m33=function(e,s,r,gg){
var z=gz$gwx_34()
return r
}
e_[x[33]]={f:m33,j:[],i:[],ti:[],ic:[]}
d_[x[34]]={}
var m34=function(e,s,r,gg){
var z=gz$gwx_35()
var oRE=_v()
_(r,oRE)
if(_oz(z,0,e,s,gg)){oRE.wxVkey=1
}
oRE.wxXCkey=1
return r
}
e_[x[34]]={f:m34,j:[],i:[],ti:[],ic:[]}
d_[x[35]]={}
var m35=function(e,s,r,gg){
var z=gz$gwx_36()
return r
}
e_[x[35]]={f:m35,j:[],i:[],ti:[],ic:[]}
d_[x[36]]={}
var m36=function(e,s,r,gg){
var z=gz$gwx_37()
var lUE=_mz(z,'circle',['Ring',0,'bind:__l',1,'class',1,'vueId',2],[],e,s,gg)
_(r,lUE)
return r
}
e_[x[36]]={f:m36,j:[],i:[],ti:[],ic:[]}
d_[x[37]]={}
var m37=function(e,s,r,gg){
var z=gz$gwx_38()
var tWE=_v()
_(r,tWE)
if(_oz(z,0,e,s,gg)){tWE.wxVkey=1
}
tWE.wxXCkey=1
return r
}
e_[x[37]]={f:m37,j:[],i:[],ti:[],ic:[]}
d_[x[38]]={}
var m38=function(e,s,r,gg){
var z=gz$gwx_39()
var bYE=_n('view')
_rz(z,bYE,'class',0,e,s,gg)
var oZE=_mz(z,'top-bar',['bind:__l',1,'class',1,'isindex',2,'title',3,'vueId',4],[],e,s,gg)
_(bYE,oZE)
var x1E=_mz(z,'scroll-view',['bindscrolltolower',6,'class',1,'data-event-opts',2,'scrollY',3],[],e,s,gg)
var o2E=_v()
_(x1E,o2E)
if(_oz(z,10,e,s,gg)){o2E.wxVkey=1
var c4E=_mz(z,'banner',['bind:__l',11,'class',1,'swiperList',2,'vueId',3],[],e,s,gg)
_(o2E,c4E)
}
var f3E=_v()
_(x1E,f3E)
if(_oz(z,15,e,s,gg)){f3E.wxVkey=1
}
o2E.wxXCkey=1
o2E.wxXCkey=3
f3E.wxXCkey=1
_(bYE,x1E)
_(r,bYE)
return r
}
e_[x[38]]={f:m38,j:[],i:[],ti:[],ic:[]}
d_[x[39]]={}
var m39=function(e,s,r,gg){
var z=gz$gwx_40()
return r
}
e_[x[39]]={f:m39,j:[],i:[],ti:[],ic:[]}
if(path&&e_[path]){
return function(env,dd,global){$gwxc=0;var root={"tag":"wx-page"};root.children=[]
var main=e_[path].f
if (typeof global==="undefined")global={};global.f=$gdc(f_[path],"",1);
try{
main(env,{},root,global);
_tsd(root)
}catch(err){
console.log(err)
}
return root;
}
}
}



__wxAppCode__['app.json']={"pages":["pages/index/age_18","pages/index/index","pages/login/login","pages/login/bindTel","pages/index/release/release","pages/index/release/center","pages/index/article/detail","pages/integral/integral","pages/integral/goodDetail","pages/integral/order/orderSure","pages/integral/order/orderDetail","pages/integral/order/success","pages/integral/plan","pages/integral/todayFoot","pages/integral/rules","pages/integral/integralDetail","pages/store/store","pages/store/storeDetail","pages/mine/mine","pages/mine/coupon/center","pages/mine/coupon/mycoupon","pages/mine/coupon/couponDetail","pages/mine/setting","pages/mine/address/address","pages/mine/address/addAddress","pages/mine/member","pages/mine/todayExperience","pages/mine/personal","pages/partner/index","pages/partner/couponDetail","pages/partner/couponNote","pages/partner/couponStatistics"],"window":{"navigationBarTextStyle":"white","backgroundColor":"#131313","navigationBarBackgroundColor":"#131313"},"tabBar":{"color":"#666","selectedColor":"#fff","backgroundColor":"#000","list":[{"pagePath":"pages/index/index","text":"社区","iconPath":"static/img/tabbar/index1.png","selectedIconPath":"static/img/tabbar/index2.png"},{"pagePath":"pages/integral/integral","text":"积分","iconPath":"static/img/tabbar/market1.png","selectedIconPath":"static/img/tabbar/market2.png"},{"pagePath":"pages/index/release/center","text":"发布","iconPath":"static/img/tabbar/release.png","selectedIconPath":"static/img/tabbar/release.png"},{"pagePath":"pages/store/store","text":"门店","iconPath":"static/img/tabbar/shopcar1.png","selectedIconPath":"static/img/tabbar/shopcar2.png"},{"pagePath":"pages/mine/mine","text":"我的","iconPath":"static/img/tabbar/mine1.png","selectedIconPath":"static/img/tabbar/mine2.png"}]},"nvueCompiler":"uni-app","renderer":"auto","splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"smoking","compilerVersion":"2.5.1","usingComponents":{}};
__wxAppCode__['app.wxml']=$gwx('./app.wxml');

__wxAppCode__['pages/components/articleList.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/components/articleList.wxml']=$gwx('./pages/components/articleList.wxml');

__wxAppCode__['pages/components/banner.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/components/banner.wxml']=$gwx('./pages/components/banner.wxml');

__wxAppCode__['pages/components/circle.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/components/circle.wxml']=$gwx('./pages/components/circle.wxml');

__wxAppCode__['pages/components/goodList.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/components/goodList.wxml']=$gwx('./pages/components/goodList.wxml');

__wxAppCode__['pages/components/qrcode/tki-qrcode.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/components/qrcode/tki-qrcode.wxml']=$gwx('./pages/components/qrcode/tki-qrcode.wxml');

__wxAppCode__['pages/components/topBar.json']={"usingComponents":{},"component":true};
__wxAppCode__['pages/components/topBar.wxml']=$gwx('./pages/components/topBar.wxml');

__wxAppCode__['pages/components/uni-popup/uni-popup.json']={"component":true,"usingComponents":{"uni-transition":"/pages/components/uni-transition/uni-transition"}};
__wxAppCode__['pages/components/uni-popup/uni-popup.wxml']=$gwx('./pages/components/uni-popup/uni-popup.wxml');

__wxAppCode__['pages/components/uni-transition/uni-transition.json']={"component":true,"usingComponents":{}};
__wxAppCode__['pages/components/uni-transition/uni-transition.wxml']=$gwx('./pages/components/uni-transition/uni-transition.wxml');

__wxAppCode__['pages/index/age_18.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/index/age_18.wxml']=$gwx('./pages/index/age_18.wxml');

__wxAppCode__['pages/index/article/detail.json']={"navigationStyle":"custom","usingComponents":{"top-bar":"/pages/components/topBar","banner":"/pages/components/banner"}};
__wxAppCode__['pages/index/article/detail.wxml']=$gwx('./pages/index/article/detail.wxml');

__wxAppCode__['pages/index/index.json']={"navigationStyle":"custom","usingComponents":{"banner":"/pages/components/banner","top-bar":"/pages/components/topBar"}};
__wxAppCode__['pages/index/index.wxml']=$gwx('./pages/index/index.wxml');

__wxAppCode__['pages/index/release/center.json']={"navigationStyle":"custom","usingComponents":{}};
__wxAppCode__['pages/index/release/center.wxml']=$gwx('./pages/index/release/center.wxml');

__wxAppCode__['pages/index/release/release.json']={"navigationStyle":"custom","usingComponents":{"top-bar":"/pages/components/topBar"}};
__wxAppCode__['pages/index/release/release.wxml']=$gwx('./pages/index/release/release.wxml');

__wxAppCode__['pages/integral/goodDetail.json']={"navigationBarTitleText":"详情","usingComponents":{"banner":"/pages/components/banner","uni-popup":"/pages/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/integral/goodDetail.wxml']=$gwx('./pages/integral/goodDetail.wxml');

__wxAppCode__['pages/integral/integral.json']={"navigationStyle":"custom","navigationBarTitleText":"积分","usingComponents":{"top-bar":"/pages/components/topBar","good-list":"/pages/components/goodList"}};
__wxAppCode__['pages/integral/integral.wxml']=$gwx('./pages/integral/integral.wxml');

__wxAppCode__['pages/integral/integralDetail.json']={"navigationBarTitleText":"积分详情","usingComponents":{}};
__wxAppCode__['pages/integral/integralDetail.wxml']=$gwx('./pages/integral/integralDetail.wxml');

__wxAppCode__['pages/integral/order/orderDetail.json']={"navigationBarTitleText":"订单详情","usingComponents":{}};
__wxAppCode__['pages/integral/order/orderDetail.wxml']=$gwx('./pages/integral/order/orderDetail.wxml');

__wxAppCode__['pages/integral/order/orderSure.json']={"navigationBarTitleText":"订单确认","usingComponents":{}};
__wxAppCode__['pages/integral/order/orderSure.wxml']=$gwx('./pages/integral/order/orderSure.wxml');

__wxAppCode__['pages/integral/order/success.json']={"navigationStyle":"custom","usingComponents":{"top-bar":"/pages/components/topBar"}};
__wxAppCode__['pages/integral/order/success.wxml']=$gwx('./pages/integral/order/success.wxml');

__wxAppCode__['pages/integral/plan.json']={"navigationBarTitleText":"打卡计划","usingComponents":{"article-list":"/pages/components/articleList"}};
__wxAppCode__['pages/integral/plan.wxml']=$gwx('./pages/integral/plan.wxml');

__wxAppCode__['pages/integral/rules.json']={"navigationBarTitleText":"积分规则说明","usingComponents":{}};
__wxAppCode__['pages/integral/rules.wxml']=$gwx('./pages/integral/rules.wxml');

__wxAppCode__['pages/integral/todayFoot.json']={"navigationBarTitleText":"今日步数","usingComponents":{"article-list":"/pages/components/articleList"}};
__wxAppCode__['pages/integral/todayFoot.wxml']=$gwx('./pages/integral/todayFoot.wxml');

__wxAppCode__['pages/login/bindTel.json']={"navigationBarTitleText":"绑定手机","usingComponents":{}};
__wxAppCode__['pages/login/bindTel.wxml']=$gwx('./pages/login/bindTel.wxml');

__wxAppCode__['pages/login/login.json']={"navigationStyle":"custom","usingComponents":{"uni-popup":"/pages/components/uni-popup/uni-popup"}};
__wxAppCode__['pages/login/login.wxml']=$gwx('./pages/login/login.wxml');

__wxAppCode__['pages/mine/address/addAddress.json']={"navigationStyle":"custom","usingComponents":{"top-bar":"/pages/components/topBar"}};
__wxAppCode__['pages/mine/address/addAddress.wxml']=$gwx('./pages/mine/address/addAddress.wxml');

__wxAppCode__['pages/mine/address/address.json']={"navigationBarTitleText":"收货地址","usingComponents":{}};
__wxAppCode__['pages/mine/address/address.wxml']=$gwx('./pages/mine/address/address.wxml');

__wxAppCode__['pages/mine/coupon/center.json']={"navigationBarTitleText":"领券中心","usingComponents":{"banner":"/pages/components/banner"}};
__wxAppCode__['pages/mine/coupon/center.wxml']=$gwx('./pages/mine/coupon/center.wxml');

__wxAppCode__['pages/mine/coupon/couponDetail.json']={"navigationBarTitleText":"使用优惠券","usingComponents":{"tki-qrcode":"/pages/components/qrcode/tki-qrcode"}};
__wxAppCode__['pages/mine/coupon/couponDetail.wxml']=$gwx('./pages/mine/coupon/couponDetail.wxml');

__wxAppCode__['pages/mine/coupon/mycoupon.json']={"navigationBarTitleText":"我的优惠券","usingComponents":{"banner":"/pages/components/banner"}};
__wxAppCode__['pages/mine/coupon/mycoupon.wxml']=$gwx('./pages/mine/coupon/mycoupon.wxml');

__wxAppCode__['pages/mine/member.json']={"navigationBarTitleText":"我的会员等级","usingComponents":{}};
__wxAppCode__['pages/mine/member.wxml']=$gwx('./pages/mine/member.wxml');

__wxAppCode__['pages/mine/mine.json']={"navigationStyle":"custom","navigationBarTitleText":"","usingComponents":{"top-bar":"/pages/components/topBar","article-list":"/pages/components/articleList"}};
__wxAppCode__['pages/mine/mine.wxml']=$gwx('./pages/mine/mine.wxml');

__wxAppCode__['pages/mine/personal.json']={"navigationBarTitleText":"个人信息","usingComponents":{}};
__wxAppCode__['pages/mine/personal.wxml']=$gwx('./pages/mine/personal.wxml');

__wxAppCode__['pages/mine/setting.json']={"navigationBarTitleText":"设置","usingComponents":{}};
__wxAppCode__['pages/mine/setting.wxml']=$gwx('./pages/mine/setting.wxml');

__wxAppCode__['pages/mine/todayExperience.json']={"navigationBarTitleText":"今日","usingComponents":{}};
__wxAppCode__['pages/mine/todayExperience.wxml']=$gwx('./pages/mine/todayExperience.wxml');

__wxAppCode__['pages/partner/couponDetail.json']={"navigationBarTitleText":"优惠券详情","usingComponents":{}};
__wxAppCode__['pages/partner/couponDetail.wxml']=$gwx('./pages/partner/couponDetail.wxml');

__wxAppCode__['pages/partner/couponNote.json']={"navigationBarTitleText":"优惠券记录","usingComponents":{}};
__wxAppCode__['pages/partner/couponNote.wxml']=$gwx('./pages/partner/couponNote.wxml');

__wxAppCode__['pages/partner/couponStatistics.json']={"navigationBarTitleText":"使用统计","usingComponents":{"circle":"/pages/components/circle"}};
__wxAppCode__['pages/partner/couponStatistics.wxml']=$gwx('./pages/partner/couponStatistics.wxml');

__wxAppCode__['pages/partner/index.json']={"navigationBarTitleText":"商家首页","usingComponents":{}};
__wxAppCode__['pages/partner/index.wxml']=$gwx('./pages/partner/index.wxml');

__wxAppCode__['pages/store/store.json']={"navigationStyle":"custom","navigationBarTitleText":"","usingComponents":{"banner":"/pages/components/banner","top-bar":"/pages/components/topBar"}};
__wxAppCode__['pages/store/store.wxml']=$gwx('./pages/store/store.wxml');

__wxAppCode__['pages/store/storeDetail.json']={"navigationBarTitleText":"门店详情","usingComponents":{}};
__wxAppCode__['pages/store/storeDetail.wxml']=$gwx('./pages/store/storeDetail.wxml');



define('common/main.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/main"],{"36c4":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o={onLaunch:function(){console.log(e("App Launch"," at App.vue:4")),plus.screen.lockOrientation("portrait-primary");var t=this;n.getSystemInfo({success:function(e){t.$store.commit("setHeight",e)}});var o=n.getStorageSync("is_merchant");console.log(e(o," at App.vue:21")),o>0&&n.reLaunch({url:"/pages/partner/index"})},onShow:function(){n.authorize({scope:"scope.werun",success:function(e){wx.getWeRunData({success:function(e){var t=e.encryptedData,o=e.iv;n.setStorage({key:"encryptedData",data:t}),n.setStorage({key:"iv",data:o})}})}})},onHide:function(){console.log(e("App Hide"," at App.vue:47"))},onTabItemTap:function(t){var n=t.index;console.log(e("点击了底部",n," at App.vue:51"))}};t.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},3858:function(e,t,n){"use strict";var o=n("91f6"),u=n.n(o);u.a},"84ba":function(e,t,n){"use strict";n.r(t);var o=n("9263");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("3858");var a,r,c,i,f=n("f0c5"),l=Object(f["a"])(o["default"],a,r,!1,null,null,null,!1,c,i);t["default"]=l.exports},9148:function(e,t,n){"use strict";(function(e){n("7539"),n("921b");var t=c(n("66fd")),o=c(n("84ba")),u=c(n("b110")),a=c(n("76f3")),r=c(n("d610"));function c(e){return e&&e.__esModule?e:{default:e}}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),o.forEach(function(t){f(e,t,n[t])})}return e}function f(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}t.default.config.productionTip=!1,t.default.prototype.$store=u.default,t.default.prototype.$httpRequest=r.default,t.default.prototype.$api=a.default,t.default.config.productionTip=!1,o.default.mpType="app";var l=new t.default(i({},o.default));e(l).$mount()}).call(this,n("6e42")["createApp"])},"91f6":function(e,t,n){},9263:function(e,t,n){"use strict";n.r(t);var o=n("36c4"),u=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=u.a}},[["9148","common/runtime","common/vendor"]]]);
});
define('common/runtime.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(function (e) {
  function n(n) {
    for (var o, r, s = n[0], i = n[1], c = n[2], u = 0, l = []; u < s.length; u++) {
      r = s[u], a[r] && l.push(a[r][0]), a[r] = 0;
    }

    for (o in i) {
      Object.prototype.hasOwnProperty.call(i, o) && (e[o] = i[o]);
    }

    g && g(n);

    while (l.length) {
      l.shift()();
    }

    return p.push.apply(p, c || []), t();
  }

  function t() {
    for (var e, n = 0; n < p.length; n++) {
      for (var t = p[n], o = !0, r = 1; r < t.length; r++) {
        var s = t[r];
        0 !== a[s] && (o = !1);
      }

      o && (p.splice(n--, 1), e = i(i.s = t[0]));
    }

    return e;
  }

  var o = {},
      r = {
    "common/runtime": 0
  },
      a = {
    "common/runtime": 0
  },
      p = [];

  function s(e) {
    return i.p + "" + e + ".js";
  }

  function i(n) {
    if (o[n]) return o[n].exports;
    var t = o[n] = {
      i: n,
      l: !1,
      exports: {}
    };
    return e[n].call(t.exports, t, t.exports, i), t.l = !0, t.exports;
  }

  i.e = function (e) {
    var n = [],
        t = {
      "pages/components/banner": 1,
      "pages/components/topBar": 1,
      "pages/components/uni-popup/uni-popup": 1,
      "pages/components/goodList": 1,
      "pages/components/articleList": 1,
      "pages/components/qrcode/tki-qrcode": 1,
      "pages/components/circle": 1,
      "pages/components/uni-transition/uni-transition": 1
    };
    r[e] ? n.push(r[e]) : 0 !== r[e] && t[e] && n.push(r[e] = new Promise(function (n, t) {
      for (var o = ({
        "pages/components/banner": "pages/components/banner",
        "pages/components/topBar": "pages/components/topBar",
        "pages/components/uni-popup/uni-popup": "pages/components/uni-popup/uni-popup",
        "pages/components/goodList": "pages/components/goodList",
        "pages/components/articleList": "pages/components/articleList",
        "pages/components/qrcode/tki-qrcode": "pages/components/qrcode/tki-qrcode",
        "pages/components/circle": "pages/components/circle",
        "pages/components/uni-transition/uni-transition": "pages/components/uni-transition/uni-transition"
      }[e] || e) + ".wxss", a = i.p + o, p = document.getElementsByTagName("link"), s = 0; s < p.length; s++) {
        var c = p[s],
            u = c.getAttribute("data-href") || c.getAttribute("href");
        if ("stylesheet" === c.rel && (u === o || u === a)) return n();
      }

      var l = document.getElementsByTagName("style");

      for (s = 0; s < l.length; s++) {
        c = l[s], u = c.getAttribute("data-href");
        if (u === o || u === a) return n();
      }

      var g = document.createElement("link");
      g.rel = "stylesheet", g.type = "text/css", g.onload = n, g.onerror = function (n) {
        var o = n && n.target && n.target.src || a,
            p = new Error("Loading CSS chunk " + e + " failed.\n(" + o + ")");
        p.request = o, delete r[e], g.parentNode.removeChild(g), t(p);
      }, g.href = a;
      var m = document.getElementsByTagName("head")[0];
      m.appendChild(g);
    }).then(function () {
      r[e] = 0;
    }));
    var o = a[e];
    if (0 !== o) if (o) n.push(o[2]);else {
      var p = new Promise(function (n, t) {
        o = a[e] = [n, t];
      });
      n.push(o[2] = p);
      var c,
          u = document.createElement("script");
      u.charset = "utf-8", u.timeout = 120, i.nc && u.setAttribute("nonce", i.nc), u.src = s(e), c = function c(n) {
        u.onerror = u.onload = null, clearTimeout(l);
        var t = a[e];

        if (0 !== t) {
          if (t) {
            var o = n && ("load" === n.type ? "missing" : n.type),
                r = n && n.target && n.target.src,
                p = new Error("Loading chunk " + e + " failed.\n(" + o + ": " + r + ")");
            p.type = o, p.request = r, t[1](p);
          }

          a[e] = void 0;
        }
      };
      var l = setTimeout(function () {
        c({
          type: "timeout",
          target: u
        });
      }, 12e4);
      u.onerror = u.onload = c, document.head.appendChild(u);
    }
    return Promise.all(n);
  }, i.m = e, i.c = o, i.d = function (e, n, t) {
    i.o(e, n) || Object.defineProperty(e, n, {
      enumerable: !0,
      get: t
    });
  }, i.r = function (e) {
    "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
      value: "Module"
    }), Object.defineProperty(e, "__esModule", {
      value: !0
    });
  }, i.t = function (e, n) {
    if (1 & n && (e = i(e)), 8 & n) return e;
    if (4 & n && "object" === typeof e && e && e.__esModule) return e;
    var t = Object.create(null);
    if (i.r(t), Object.defineProperty(t, "default", {
      enumerable: !0,
      value: e
    }), 2 & n && "string" != typeof e) for (var o in e) {
      i.d(t, o, function (n) {
        return e[n];
      }.bind(null, o));
    }
    return t;
  }, i.n = function (e) {
    var n = e && e.__esModule ? function () {
      return e["default"];
    } : function () {
      return e;
    };
    return i.d(n, "a", n), n;
  }, i.o = function (e, n) {
    return Object.prototype.hasOwnProperty.call(e, n);
  }, i.p = "/", i.oe = function (e) {
    throw console.error(e), e;
  };
  var c = global["webpackJsonp"] = global["webpackJsonp"] || [],
      u = c.push.bind(c);
  c.push = n, c = c.slice();

  for (var l = 0; l < c.length; l++) {
    n(c[l]);
  }

  var g = u;
  t();
})([]);
});
define('common/vendor.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["common/vendor"],{"0de9":function(t,e,n){"use strict";function i(t){var e=Object.prototype.toString.call(t);return e.substring(8,e.length-1)}function r(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];var r=e.map(function(t){var e=Object.prototype.toString.call(t);if("[object object]"===e.toLowerCase())try{t="---BEGIN:JSON---"+JSON.stringify(t)+"---END:JSON---"}catch(r){t="[object object]"}else if(null===t)t="---NULL---";else if(void 0===t)t="---UNDEFINED---";else{var n=i(t).toUpperCase();t="NUMBER"===n||"BOOLEAN"===n?"---BEGIN:"+n+"---"+t+"---END:"+n+"---":String(t)}return t}),a="";if(r.length>1){var o=r.pop();a=r.join("---COMMA---"),0===o.indexOf(" at ")?a+=o:a+="---COMMA---"+o}else a=r[0];return a}Object.defineProperty(e,"__esModule",{value:!0}),e.default=r},"104f":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={appid:"__UNI__182143E"};e.default=i},"2f62":function(t,e,n){"use strict";n.r(e),n.d(e,"Store",function(){return d}),n.d(e,"install",function(){return D}),n.d(e,"mapState",function(){return C}),n.d(e,"mapMutations",function(){return O}),n.d(e,"mapGetters",function(){return M}),n.d(e,"mapActions",function(){return L}),n.d(e,"createNamespacedHelpers",function(){return R});
/**
 * vuex v3.0.1
 * (c) 2017 Evan You
 * @license MIT
 */
var i=function(t){var e=Number(t.version.split(".")[0]);if(e>=2)t.mixin({beforeCreate:i});else{var n=t.prototype._init;t.prototype._init=function(t){void 0===t&&(t={}),t.init=t.init?[i].concat(t.init):i,n.call(this,t)}}function i(){var t=this.$options;t.store?this.$store="function"===typeof t.store?t.store():t.store:t.parent&&t.parent.$store&&(this.$store=t.parent.$store)}},r="undefined"!==typeof window&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function a(t){r&&(t._devtoolHook=r,r.emit("vuex:init",t),r.on("vuex:travel-to-state",function(e){t.replaceState(e)}),t.subscribe(function(t,e){r.emit("vuex:mutation",t,e)}))}function o(t,e){Object.keys(t).forEach(function(n){return e(t[n],n)})}function s(t){return null!==t&&"object"===typeof t}function l(t){return t&&"function"===typeof t.then}var c=function(t,e){this.runtime=e,this._children=Object.create(null),this._rawModule=t;var n=t.state;this.state=("function"===typeof n?n():n)||{}},u={namespaced:{configurable:!0}};u.namespaced.get=function(){return!!this._rawModule.namespaced},c.prototype.addChild=function(t,e){this._children[t]=e},c.prototype.removeChild=function(t){delete this._children[t]},c.prototype.getChild=function(t){return this._children[t]},c.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)},c.prototype.forEachChild=function(t){o(this._children,t)},c.prototype.forEachGetter=function(t){this._rawModule.getters&&o(this._rawModule.getters,t)},c.prototype.forEachAction=function(t){this._rawModule.actions&&o(this._rawModule.actions,t)},c.prototype.forEachMutation=function(t){this._rawModule.mutations&&o(this._rawModule.mutations,t)},Object.defineProperties(c.prototype,u);var h=function(t){this.register([],t,!1)};function p(t,e,n){if(e.update(n),n.modules)for(var i in n.modules){if(!e.getChild(i))return void 0;p(t.concat(i),e.getChild(i),n.modules[i])}}h.prototype.get=function(t){return t.reduce(function(t,e){return t.getChild(e)},this.root)},h.prototype.getNamespace=function(t){var e=this.root;return t.reduce(function(t,n){return e=e.getChild(n),t+(e.namespaced?n+"/":"")},"")},h.prototype.update=function(t){p([],this.root,t)},h.prototype.register=function(t,e,n){var i=this;void 0===n&&(n=!0);var r=new c(e,n);if(0===t.length)this.root=r;else{var a=this.get(t.slice(0,-1));a.addChild(t[t.length-1],r)}e.modules&&o(e.modules,function(e,r){i.register(t.concat(r),e,n)})},h.prototype.unregister=function(t){var e=this.get(t.slice(0,-1)),n=t[t.length-1];e.getChild(n).runtime&&e.removeChild(n)};var f;var d=function(t){var e=this;void 0===t&&(t={}),!f&&"undefined"!==typeof window&&window.Vue&&D(window.Vue);var n=t.plugins;void 0===n&&(n=[]);var i=t.strict;void 0===i&&(i=!1);var r=t.state;void 0===r&&(r={}),"function"===typeof r&&(r=r()||{}),this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new h(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._watcherVM=new f;var o=this,s=this,l=s.dispatch,c=s.commit;this.dispatch=function(t,e){return l.call(o,t,e)},this.commit=function(t,e,n){return c.call(o,t,e,n)},this.strict=i,m(this,r,[],this._modules.root),x(this,r),n.forEach(function(t){return t(e)}),f.config.devtools&&a(this)},g={state:{configurable:!0}};function v(t,e){return e.indexOf(t)<0&&e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function y(t,e){t._actions=Object.create(null),t._mutations=Object.create(null),t._wrappedGetters=Object.create(null),t._modulesNamespaceMap=Object.create(null);var n=t.state;m(t,n,[],t._modules.root,!0),x(t,n,e)}function x(t,e,n){var i=t._vm;t.getters={};var r=t._wrappedGetters,a={};o(r,function(e,n){a[n]=function(){return e(t)},Object.defineProperty(t.getters,n,{get:function(){return t._vm[n]},enumerable:!0})});var s=f.config.silent;f.config.silent=!0,t._vm=new f({data:{$$state:e},computed:a}),f.config.silent=s,t.strict&&T(t),i&&(n&&t._withCommit(function(){i._data.$$state=null}),f.nextTick(function(){return i.$destroy()}))}function m(t,e,n,i,r){var a=!n.length,o=t._modules.getNamespace(n);if(i.namespaced&&(t._modulesNamespaceMap[o]=i),!a&&!r){var s=P(e,n.slice(0,-1)),l=n[n.length-1];t._withCommit(function(){f.set(s,l,i.state)})}var c=i.context=_(t,o,n);i.forEachMutation(function(e,n){var i=o+n;A(t,i,e,c)}),i.forEachAction(function(e,n){var i=e.root?n:o+n,r=e.handler||e;w(t,i,r,c)}),i.forEachGetter(function(e,n){var i=o+n;S(t,i,e,c)}),i.forEachChild(function(i,a){m(t,e,n.concat(a),i,r)})}function _(t,e,n){var i=""===e,r={dispatch:i?t.dispatch:function(n,i,r){var a=k(n,i,r),o=a.payload,s=a.options,l=a.type;return s&&s.root||(l=e+l),t.dispatch(l,o)},commit:i?t.commit:function(n,i,r){var a=k(n,i,r),o=a.payload,s=a.options,l=a.type;s&&s.root||(l=e+l),t.commit(l,o,s)}};return Object.defineProperties(r,{getters:{get:i?function(){return t.getters}:function(){return b(t,e)}},state:{get:function(){return P(t.state,n)}}}),r}function b(t,e){var n={},i=e.length;return Object.keys(t.getters).forEach(function(r){if(r.slice(0,i)===e){var a=r.slice(i);Object.defineProperty(n,a,{get:function(){return t.getters[r]},enumerable:!0})}}),n}function A(t,e,n,i){var r=t._mutations[e]||(t._mutations[e]=[]);r.push(function(e){n.call(t,i.state,e)})}function w(t,e,n,i){var r=t._actions[e]||(t._actions[e]=[]);r.push(function(e,r){var a=n.call(t,{dispatch:i.dispatch,commit:i.commit,getters:i.getters,state:i.state,rootGetters:t.getters,rootState:t.state},e,r);return l(a)||(a=Promise.resolve(a)),t._devtoolHook?a.catch(function(e){throw t._devtoolHook.emit("vuex:error",e),e}):a})}function S(t,e,n,i){t._wrappedGetters[e]||(t._wrappedGetters[e]=function(t){return n(i.state,i.getters,t.state,t.getters)})}function T(t){t._vm.$watch(function(){return this._data.$$state},function(){0},{deep:!0,sync:!0})}function P(t,e){return e.length?e.reduce(function(t,e){return t[e]},t):t}function k(t,e,n){return s(t)&&t.type&&(n=e,e=t,t=t.type),{type:t,payload:e,options:n}}function D(t){f&&t===f||(f=t,i(f))}g.state.get=function(){return this._vm._data.$$state},g.state.set=function(t){0},d.prototype.commit=function(t,e,n){var i=this,r=k(t,e,n),a=r.type,o=r.payload,s=(r.options,{type:a,payload:o}),l=this._mutations[a];l&&(this._withCommit(function(){l.forEach(function(t){t(o)})}),this._subscribers.forEach(function(t){return t(s,i.state)}))},d.prototype.dispatch=function(t,e){var n=this,i=k(t,e),r=i.type,a=i.payload,o={type:r,payload:a},s=this._actions[r];if(s)return this._actionSubscribers.forEach(function(t){return t(o,n.state)}),s.length>1?Promise.all(s.map(function(t){return t(a)})):s[0](a)},d.prototype.subscribe=function(t){return v(t,this._subscribers)},d.prototype.subscribeAction=function(t){return v(t,this._actionSubscribers)},d.prototype.watch=function(t,e,n){var i=this;return this._watcherVM.$watch(function(){return t(i.state,i.getters)},e,n)},d.prototype.replaceState=function(t){var e=this;this._withCommit(function(){e._vm._data.$$state=t})},d.prototype.registerModule=function(t,e,n){void 0===n&&(n={}),"string"===typeof t&&(t=[t]),this._modules.register(t,e),m(this,this.state,t,this._modules.get(t),n.preserveState),x(this,this.state)},d.prototype.unregisterModule=function(t){var e=this;"string"===typeof t&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var n=P(e.state,t.slice(0,-1));f.delete(n,t[t.length-1])}),y(this)},d.prototype.hotUpdate=function(t){this._modules.update(t),y(this,!0)},d.prototype._withCommit=function(t){var e=this._committing;this._committing=!0,t(),this._committing=e},Object.defineProperties(d.prototype,g);var C=E(function(t,e){var n={};return $(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=this.$store.state,n=this.$store.getters;if(t){var i=F(this.$store,"mapState",t);if(!i)return;e=i.context.state,n=i.context.getters}return"function"===typeof r?r.call(this,e,n):e[r]},n[i].vuex=!0}),n}),O=E(function(t,e){var n={};return $(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.commit;if(t){var a=F(this.$store,"mapMutations",t);if(!a)return;i=a.context.commit}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),M=E(function(t,e){var n={};return $(e).forEach(function(e){var i=e.key,r=e.val;r=t+r,n[i]=function(){if(!t||F(this.$store,"mapGetters",t))return this.$store.getters[r]},n[i].vuex=!0}),n}),L=E(function(t,e){var n={};return $(e).forEach(function(e){var i=e.key,r=e.val;n[i]=function(){var e=[],n=arguments.length;while(n--)e[n]=arguments[n];var i=this.$store.dispatch;if(t){var a=F(this.$store,"mapActions",t);if(!a)return;i=a.context.dispatch}return"function"===typeof r?r.apply(this,[i].concat(e)):i.apply(this.$store,[r].concat(e))}}),n}),R=function(t){return{mapState:C.bind(null,t),mapGetters:M.bind(null,t),mapMutations:O.bind(null,t),mapActions:L.bind(null,t)}};function $(t){return Array.isArray(t)?t.map(function(t){return{key:t,val:t}}):Object.keys(t).map(function(e){return{key:e,val:t[e]}})}function E(t){return function(e,n){return"string"!==typeof e?(n=e,e=""):"/"!==e.charAt(e.length-1)&&(e+="/"),t(e,n)}}function F(t,e,n){var i=t._modulesNamespaceMap[n];return i}var I={Store:d,install:D,version:"3.0.1",mapState:C,mapMutations:O,mapGetters:M,mapActions:L,createNamespacedHelpers:R};e["default"]=I},"38a1":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADEAAAAzCAYAAAA+VOAXAAAHEElEQVRoge2Zf2xbVxXHP/c9/4jtJG660qTe2sylrIvY1A7KylSLDU2TgA0omiaMoLImITQJUP+AVQiBhCYhAf9UQgwJ8QeyBJO3IX5tQ0xMEwgjmCiIRbSjW5OXpJmTtEnzw3bs9/Pyx7PT1+TFfk6cf1C+0lOUc84993x97z3n3PdgF7vYxS6CIqXJR1OavJjSpExpcjKlySd3ai6xE05TmjwB/A0IrVM9XkqLX3V7PqXbDgHClvl1NhIgZNvndmK+rpPIFYof2VMuf8ZPFzX0E7lC8eFuz9lVErlC8UvAawPllYiffqC8ogJ/aNh1DV05E7lCMQScB74C4CgKF0buYbm3b80mXq/zoUujREyzKToPPJ3PZuztzr9tErlCcS/wAuDdJhUzFMr96YMnE8C9wPipN/91PV6v/Qzo89i9Anwun82UtxPDtkjkCsUR4HfAEY94AvhkPpv5j4/9vcBLwLBHPAp8Kp/NTG41ji2TyBWKjwLPAf0e8Z+Bx/PZzILXNqVJAaiAuP/i6GBftfKigA+DREgA5oDT+Wzm71uJZUskcoXi08D3uDUx/AT4aj6bMRuBh4ADwCDQ6x0fMc3I0cnxc1HTfFg4DhHLpMcw6orjPJnPZgo7SiJXKEaBnwJnPGILOJvPZn7cCF4AtwN34lMr1iaWUtw9MX4mUa+5lVxKoqZJj6E/ozjOd/LZjOw6iVyhOAT8BjjpEd8AnshnM683CISB9wN7gvp97/TUR/eUV74hIAKgOA7xeu2XYcs6k89m6l0jkSsUPwD8FrjDI76EeyDHGgSiwHEgFpRAE7dfmxsZvDH/XUXKAQCkJFGrXYhY5mP5bGau3fi2xS5XKH4WKK4j8DLwgIeAiptKOyYA8O7+wbcmUnc8ZSvKOABCUI3FTtiq+o9GRmuJTVciVygK4BngW+tUPwC+6S1SKU0exT3E20KPrseOTmnfDlvWAwCKbZOsVipANp/NvLLZuDUSjWxyCti7b2nx4n2XL30fOO2x1YEv5rOZn3sdpDSZBO7bLoEmFMdRRibGnorp+hMusToxXXeAr/3x5KkXgftxz+JfS2lhrZFIafIA8HvcPY2QUt41pYlDszNN37O4efyN9ZOmNHkMGOgWiSbeNzXxWH+1claRMpSslLk6OMTbh9KOFKJ5BP4NfKKUFjNNwbNNAgBSCHF5+DDleALgn8CJTQjEdoIAwDuH7nz5+sDec45Qyjf6klwePoyHAI14n4WbK2EA4fWODs7NjN49Mf4Q0MzZZj6bqXpIHAIOdzN4IaWI1+uJ5v+J+upA2LR++O7+Qb+0bZbSItJk5ttJTg8eeA44Cyw2nl+sM0l2Ie5bsHdleXBkYuyl5nNt4Lars/v2/XoTcxtuptjnfQxMCe2ukvGtBtsJbEV9HTB9VM/DTRJngVc9ymXgC6W0eMfPaUqT4ZQm9+O2FsONv4eAIdxWu9t392ncVmfZI3u1Ebfb25TSYhn4WEqTadyG7c1SWtTWe3KEEClN3oVbE0TDVjk4N/NpxZFr+xgpZdQ0a1HTaNk2rCR6X5s8kLoQkMgLuG3/MWCulBZaU3FLg9ZQaPjAVhQW+5N7gJRXDChRwzimOs6GLGUrCjFDR0j/Xq7HqF8BgpKg8cNuaNcD3bFtRaGcSOAoirpOZbQcp6rUolECt6MtUEqLTd1s2io3IYUQ1VgcKXz51oCEV6CHI6O2qix5ZfVwpBbT9QpA1DQeVKTcFyjym1htpWxLohxP9Nnq+gVYwwpwS0BLvX1/Wervv+Jj+1+gfvztt44ott0piYVWyrbbqdoT62+hLuOf+vzwnoB2fmjZjrckkdJkyFbVVqslgWsBA9lqYbxRSotKK4N2K9F2uwHziuMEObshOq0fblYba2fWjkSQ7CVjum4FialTxHSdUlpU29m1CzLQL6c6tuwx9ECBBUXEMAjqs912cYJOGrbWFmPbZSFqGMTrGxqGTdFuJTraJmHLIq7XpgG/dsOhPUHrtqXFK50QgDYkSmlhKtLp6IWvajs6cBm3afNW9JUWwyzgKvDG8GxpvpP5IED2SdRqZUfp+AuABOZxi1QPbss+BhgR0zBDtoOQDorjzONeM1dKaeFu3UKx07nak+hbra6U4wm2QARcMjVgqpQWFwGShaIn29SXSmmx5D80ONqSUBzHSdRWKccTCCmTB2dnjvuYrX1USVYrD8Ynx9fekqu2bQ4tLEyrheIjDZH3/dWRXKH40DpfQx3EDwQrZoRsm97aKpVY/J7BxYXzrWx7DP10T+MkKI5NX7WKskkrDny58WwLQfbIBcAJWxbJaoWQFSBhSUnUMOhvTSAINnzj8EPQd7GfB37UtLdCIaGHw8JSQ8JWFAHEhJRCdRzClkXUNFCcQCWmzuZ3kivAx/PZzPUgjnaxi138n+F/QmikYkJXnGIAAAAASUVORK5CYII="},"66fd":function(t,e,n){"use strict";n.r(e),function(t){
/*!
 * Vue.js v2.6.11
 * (c) 2014-2019 Evan You
 * Released under the MIT License.
 */
var n=Object.freeze({});function i(t){return void 0===t||null===t}function r(t){return void 0!==t&&null!==t}function a(t){return!0===t}function o(t){return!1===t}function s(t){return"string"===typeof t||"number"===typeof t||"symbol"===typeof t||"boolean"===typeof t}function l(t){return null!==t&&"object"===typeof t}var c=Object.prototype.toString;function u(t){return"[object Object]"===c.call(t)}function h(t){return"[object RegExp]"===c.call(t)}function p(t){var e=parseFloat(String(t));return e>=0&&Math.floor(e)===e&&isFinite(t)}function f(t){return r(t)&&"function"===typeof t.then&&"function"===typeof t.catch}function d(t){return null==t?"":Array.isArray(t)||u(t)&&t.toString===c?JSON.stringify(t,null,2):String(t)}function g(t){var e=parseFloat(t);return isNaN(e)?t:e}function v(t,e){for(var n=Object.create(null),i=t.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return e?function(t){return n[t.toLowerCase()]}:function(t){return n[t]}}v("slot,component",!0);var y=v("key,ref,slot,slot-scope,is");function x(t,e){if(t.length){var n=t.indexOf(e);if(n>-1)return t.splice(n,1)}}var m=Object.prototype.hasOwnProperty;function _(t,e){return m.call(t,e)}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var A=/-(\w)/g,w=b(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),S=b(function(t){return t.charAt(0).toUpperCase()+t.slice(1)}),T=/\B([A-Z])/g,P=b(function(t){return t.replace(T,"-$1").toLowerCase()});function k(t,e){function n(n){var i=arguments.length;return i?i>1?t.apply(e,arguments):t.call(e,n):t.call(e)}return n._length=t.length,n}function D(t,e){return t.bind(e)}var C=Function.prototype.bind?D:k;function O(t,e){e=e||0;var n=t.length-e,i=new Array(n);while(n--)i[n]=t[n+e];return i}function M(t,e){for(var n in e)t[n]=e[n];return t}function L(t){for(var e={},n=0;n<t.length;n++)t[n]&&M(e,t[n]);return e}function R(t,e,n){}var $=function(t,e,n){return!1},E=function(t){return t};function F(t,e){if(t===e)return!0;var n=l(t),i=l(e);if(!n||!i)return!n&&!i&&String(t)===String(e);try{var r=Array.isArray(t),a=Array.isArray(e);if(r&&a)return t.length===e.length&&t.every(function(t,n){return F(t,e[n])});if(t instanceof Date&&e instanceof Date)return t.getTime()===e.getTime();if(r||a)return!1;var o=Object.keys(t),s=Object.keys(e);return o.length===s.length&&o.every(function(n){return F(t[n],e[n])})}catch(c){return!1}}function I(t,e){for(var n=0;n<t.length;n++)if(F(t[n],e))return n;return-1}function j(t){var e=!1;return function(){e||(e=!0,t.apply(this,arguments))}}var N=["component","directive","filter"],B=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch"],z={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:$,isReservedAttr:$,isUnknownElement:$,getTagNamespace:R,parsePlatformTagName:E,mustUseProp:$,async:!0,_lifecycleHooks:B},W=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function H(t){var e=(t+"").charCodeAt(0);return 36===e||95===e}function U(t,e,n,i){Object.defineProperty(t,e,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var V=new RegExp("[^"+W.source+".$_\\d]");function q(t){if(!V.test(t)){var e=t.split(".");return function(t){for(var n=0;n<e.length;n++){if(!t)return;t=t[e[n]]}return t}}}var G,X="__proto__"in{},J="undefined"!==typeof window,K="undefined"!==typeof WXEnvironment&&!!WXEnvironment.platform,Q=K&&WXEnvironment.platform.toLowerCase(),Y=J&&window.navigator.userAgent.toLowerCase(),Z=Y&&/msie|trident/.test(Y),tt=(Y&&Y.indexOf("msie 9.0"),Y&&Y.indexOf("edge/")>0),et=(Y&&Y.indexOf("android"),Y&&/iphone|ipad|ipod|ios/.test(Y)||"ios"===Q),nt=(Y&&/chrome\/\d+/.test(Y),Y&&/phantomjs/.test(Y),Y&&Y.match(/firefox\/(\d+)/),{}.watch);if(J)try{var it={};Object.defineProperty(it,"passive",{get:function(){}}),window.addEventListener("test-passive",null,it)}catch(nr){}var rt=function(){return void 0===G&&(G=!J&&!K&&"undefined"!==typeof t&&(t["process"]&&"server"===t["process"].env.VUE_ENV)),G},at=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function ot(t){return"function"===typeof t&&/native code/.test(t.toString())}var st,lt="undefined"!==typeof Symbol&&ot(Symbol)&&"undefined"!==typeof Reflect&&ot(Reflect.ownKeys);st="undefined"!==typeof Set&&ot(Set)?Set:function(){function t(){this.set=Object.create(null)}return t.prototype.has=function(t){return!0===this.set[t]},t.prototype.add=function(t){this.set[t]=!0},t.prototype.clear=function(){this.set=Object.create(null)},t}();var ct=R,ut=0,ht=function(){"undefined"!==typeof SharedObject?this.id=SharedObject.uid++:this.id=ut++,this.subs=[]};function pt(t){ht.SharedObject.targetStack.push(t),ht.SharedObject.target=t}function ft(){ht.SharedObject.targetStack.pop(),ht.SharedObject.target=ht.SharedObject.targetStack[ht.SharedObject.targetStack.length-1]}ht.prototype.addSub=function(t){this.subs.push(t)},ht.prototype.removeSub=function(t){x(this.subs,t)},ht.prototype.depend=function(){ht.SharedObject.target&&ht.SharedObject.target.addDep(this)},ht.prototype.notify=function(){var t=this.subs.slice();for(var e=0,n=t.length;e<n;e++)t[e].update()},ht.SharedObject="undefined"!==typeof SharedObject?SharedObject:{},ht.SharedObject.target=null,ht.SharedObject.targetStack=[];var dt=function(t,e,n,i,r,a,o,s){this.tag=t,this.data=e,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=a,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=e&&e.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=s,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1},gt={child:{configurable:!0}};gt.child.get=function(){return this.componentInstance},Object.defineProperties(dt.prototype,gt);var vt=function(t){void 0===t&&(t="");var e=new dt;return e.text=t,e.isComment=!0,e};function yt(t){return new dt(void 0,void 0,void 0,String(t))}function xt(t){var e=new dt(t.tag,t.data,t.children&&t.children.slice(),t.text,t.elm,t.context,t.componentOptions,t.asyncFactory);return e.ns=t.ns,e.isStatic=t.isStatic,e.key=t.key,e.isComment=t.isComment,e.fnContext=t.fnContext,e.fnOptions=t.fnOptions,e.fnScopeId=t.fnScopeId,e.asyncMeta=t.asyncMeta,e.isCloned=!0,e}var mt=Array.prototype,_t=Object.create(mt),bt=["push","pop","shift","unshift","splice","sort","reverse"];bt.forEach(function(t){var e=mt[t];U(_t,t,function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];var r,a=e.apply(this,n),o=this.__ob__;switch(t){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),a})});var At=Object.getOwnPropertyNames(_t),wt=!0;function St(t){wt=t}var Tt=function(t){this.value=t,this.dep=new ht,this.vmCount=0,U(t,"__ob__",this),Array.isArray(t)?(X?t.push!==t.__proto__.push?kt(t,_t,At):Pt(t,_t):kt(t,_t,At),this.observeArray(t)):this.walk(t)};function Pt(t,e){t.__proto__=e}function kt(t,e,n){for(var i=0,r=n.length;i<r;i++){var a=n[i];U(t,a,e[a])}}function Dt(t,e){var n;if(l(t)&&!(t instanceof dt))return _(t,"__ob__")&&t.__ob__ instanceof Tt?n=t.__ob__:wt&&!rt()&&(Array.isArray(t)||u(t))&&Object.isExtensible(t)&&!t._isVue&&(n=new Tt(t)),e&&n&&n.vmCount++,n}function Ct(t,e,n,i,r){var a=new ht,o=Object.getOwnPropertyDescriptor(t,e);if(!o||!1!==o.configurable){var s=o&&o.get,l=o&&o.set;s&&!l||2!==arguments.length||(n=t[e]);var c=!r&&Dt(n);Object.defineProperty(t,e,{enumerable:!0,configurable:!0,get:function(){var e=s?s.call(t):n;return ht.SharedObject.target&&(a.depend(),c&&(c.dep.depend(),Array.isArray(e)&&Lt(e))),e},set:function(e){var i=s?s.call(t):n;e===i||e!==e&&i!==i||s&&!l||(l?l.call(t,e):n=e,c=!r&&Dt(e),a.notify())}})}}function Ot(t,e,n){if(Array.isArray(t)&&p(e))return t.length=Math.max(t.length,e),t.splice(e,1,n),n;if(e in t&&!(e in Object.prototype))return t[e]=n,n;var i=t.__ob__;return t._isVue||i&&i.vmCount?n:i?(Ct(i.value,e,n),i.dep.notify(),n):(t[e]=n,n)}function Mt(t,e){if(Array.isArray(t)&&p(e))t.splice(e,1);else{var n=t.__ob__;t._isVue||n&&n.vmCount||_(t,e)&&(delete t[e],n&&n.dep.notify())}}function Lt(t){for(var e=void 0,n=0,i=t.length;n<i;n++)e=t[n],e&&e.__ob__&&e.__ob__.dep.depend(),Array.isArray(e)&&Lt(e)}Tt.prototype.walk=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)Ct(t,e[n])},Tt.prototype.observeArray=function(t){for(var e=0,n=t.length;e<n;e++)Dt(t[e])};var Rt=z.optionMergeStrategies;function $t(t,e){if(!e)return t;for(var n,i,r,a=lt?Reflect.ownKeys(e):Object.keys(e),o=0;o<a.length;o++)n=a[o],"__ob__"!==n&&(i=t[n],r=e[n],_(t,n)?i!==r&&u(i)&&u(r)&&$t(i,r):Ot(t,n,r));return t}function Et(t,e,n){return n?function(){var i="function"===typeof e?e.call(n,n):e,r="function"===typeof t?t.call(n,n):t;return i?$t(i,r):r}:e?t?function(){return $t("function"===typeof e?e.call(this,this):e,"function"===typeof t?t.call(this,this):t)}:e:t}function Ft(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?It(n):n}function It(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function jt(t,e,n,i){var r=Object.create(t||null);return e?M(r,e):r}Rt.data=function(t,e,n){return n?Et(t,e,n):e&&"function"!==typeof e?t:Et(t,e)},B.forEach(function(t){Rt[t]=Ft}),N.forEach(function(t){Rt[t+"s"]=jt}),Rt.watch=function(t,e,n,i){if(t===nt&&(t=void 0),e===nt&&(e=void 0),!e)return Object.create(t||null);if(!t)return e;var r={};for(var a in M(r,t),e){var o=r[a],s=e[a];o&&!Array.isArray(o)&&(o=[o]),r[a]=o?o.concat(s):Array.isArray(s)?s:[s]}return r},Rt.props=Rt.methods=Rt.inject=Rt.computed=function(t,e,n,i){if(!t)return e;var r=Object.create(null);return M(r,t),e&&M(r,e),r},Rt.provide=Et;var Nt=function(t,e){return void 0===e?t:e};function Bt(t,e){var n=t.props;if(n){var i,r,a,o={};if(Array.isArray(n)){i=n.length;while(i--)r=n[i],"string"===typeof r&&(a=w(r),o[a]={type:null})}else if(u(n))for(var s in n)r=n[s],a=w(s),o[a]=u(r)?r:{type:r};else 0;t.props=o}}function zt(t,e){var n=t.inject;if(n){var i=t.inject={};if(Array.isArray(n))for(var r=0;r<n.length;r++)i[n[r]]={from:n[r]};else if(u(n))for(var a in n){var o=n[a];i[a]=u(o)?M({from:a},o):{from:o}}else 0}}function Wt(t){var e=t.directives;if(e)for(var n in e){var i=e[n];"function"===typeof i&&(e[n]={bind:i,update:i})}}function Ht(t,e,n){if("function"===typeof e&&(e=e.options),Bt(e,n),zt(e,n),Wt(e),!e._base&&(e.extends&&(t=Ht(t,e.extends,n)),e.mixins))for(var i=0,r=e.mixins.length;i<r;i++)t=Ht(t,e.mixins[i],n);var a,o={};for(a in t)s(a);for(a in e)_(t,a)||s(a);function s(i){var r=Rt[i]||Nt;o[i]=r(t[i],e[i],n,i)}return o}function Ut(t,e,n,i){if("string"===typeof n){var r=t[e];if(_(r,n))return r[n];var a=w(n);if(_(r,a))return r[a];var o=S(a);if(_(r,o))return r[o];var s=r[n]||r[a]||r[o];return s}}function Vt(t,e,n,i){var r=e[t],a=!_(n,t),o=n[t],s=Jt(Boolean,r.type);if(s>-1)if(a&&!_(r,"default"))o=!1;else if(""===o||o===P(t)){var l=Jt(String,r.type);(l<0||s<l)&&(o=!0)}if(void 0===o){o=qt(i,r,t);var c=wt;St(!0),Dt(o),St(c)}return o}function qt(t,e,n){if(_(e,"default")){var i=e.default;return t&&t.$options.propsData&&void 0===t.$options.propsData[n]&&void 0!==t._props[n]?t._props[n]:"function"===typeof i&&"Function"!==Gt(e.type)?i.call(t):i}}function Gt(t){var e=t&&t.toString().match(/^\s*function (\w+)/);return e?e[1]:""}function Xt(t,e){return Gt(t)===Gt(e)}function Jt(t,e){if(!Array.isArray(e))return Xt(e,t)?0:-1;for(var n=0,i=e.length;n<i;n++)if(Xt(e[n],t))return n;return-1}function Kt(t,e,n){pt();try{if(e){var i=e;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var a=0;a<r.length;a++)try{var o=!1===r[a].call(i,t,e,n);if(o)return}catch(nr){Yt(nr,i,"errorCaptured hook")}}}Yt(t,e,n)}finally{ft()}}function Qt(t,e,n,i,r){var a;try{a=n?t.apply(e,n):t.call(e),a&&!a._isVue&&f(a)&&!a._handled&&(a.catch(function(t){return Kt(t,i,r+" (Promise/async)")}),a._handled=!0)}catch(nr){Kt(nr,i,r)}return a}function Yt(t,e,n){if(z.errorHandler)try{return z.errorHandler.call(null,t,e,n)}catch(nr){nr!==t&&Zt(nr,null,"config.errorHandler")}Zt(t,e,n)}function Zt(t,e,n){if(!J&&!K||"undefined"===typeof console)throw t;console.error(t)}var te,ee=[],ne=!1;function ie(){ne=!1;var t=ee.slice(0);ee.length=0;for(var e=0;e<t.length;e++)t[e]()}if("undefined"!==typeof Promise&&ot(Promise)){var re=Promise.resolve();te=function(){re.then(ie),et&&setTimeout(R)}}else if(Z||"undefined"===typeof MutationObserver||!ot(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())te="undefined"!==typeof setImmediate&&ot(setImmediate)?function(){setImmediate(ie)}:function(){setTimeout(ie,0)};else{var ae=1,oe=new MutationObserver(ie),se=document.createTextNode(String(ae));oe.observe(se,{characterData:!0}),te=function(){ae=(ae+1)%2,se.data=String(ae)}}function le(t,e){var n;if(ee.push(function(){if(t)try{t.call(e)}catch(nr){Kt(nr,e,"nextTick")}else n&&n(e)}),ne||(ne=!0,te()),!t&&"undefined"!==typeof Promise)return new Promise(function(t){n=t})}var ce=new st;function ue(t){he(t,ce),ce.clear()}function he(t,e){var n,i,r=Array.isArray(t);if(!(!r&&!l(t)||Object.isFrozen(t)||t instanceof dt)){if(t.__ob__){var a=t.__ob__.dep.id;if(e.has(a))return;e.add(a)}if(r){n=t.length;while(n--)he(t[n],e)}else{i=Object.keys(t),n=i.length;while(n--)he(t[i[n]],e)}}}var pe=b(function(t){var e="&"===t.charAt(0);t=e?t.slice(1):t;var n="~"===t.charAt(0);t=n?t.slice(1):t;var i="!"===t.charAt(0);return t=i?t.slice(1):t,{name:t,once:n,capture:i,passive:e}});function fe(t,e){function n(){var t=arguments,i=n.fns;if(!Array.isArray(i))return Qt(i,null,arguments,e,"v-on handler");for(var r=i.slice(),a=0;a<r.length;a++)Qt(r[a],null,t,e,"v-on handler")}return n.fns=t,n}function de(t,e,n,r,o,s){var l,c,u,h;for(l in t)c=t[l],u=e[l],h=pe(l),i(c)||(i(u)?(i(c.fns)&&(c=t[l]=fe(c,s)),a(h.once)&&(c=t[l]=o(h.name,c,h.capture)),n(h.name,c,h.capture,h.passive,h.params)):c!==u&&(u.fns=c,t[l]=u));for(l in e)i(t[l])&&(h=pe(l),r(h.name,e[l],h.capture))}function ge(t,e,n,a){var o=e.options.mpOptions&&e.options.mpOptions.properties;if(i(o))return n;var s=e.options.mpOptions.externalClasses||[],l=t.attrs,c=t.props;if(r(l)||r(c))for(var u in o){var h=P(u),p=ye(n,c,u,h,!0)||ye(n,l,u,h,!1);p&&n[u]&&-1!==s.indexOf(h)&&a[w(n[u])]&&(n[u]=a[w(n[u])])}return n}function ve(t,e,n,a){var o=e.options.props;if(i(o))return ge(t,e,{},a);var s={},l=t.attrs,c=t.props;if(r(l)||r(c))for(var u in o){var h=P(u);ye(s,c,u,h,!0)||ye(s,l,u,h,!1)}return ge(t,e,s,a)}function ye(t,e,n,i,a){if(r(e)){if(_(e,n))return t[n]=e[n],a||delete e[n],!0;if(_(e,i))return t[n]=e[i],a||delete e[i],!0}return!1}function xe(t){for(var e=0;e<t.length;e++)if(Array.isArray(t[e]))return Array.prototype.concat.apply([],t);return t}function me(t){return s(t)?[yt(t)]:Array.isArray(t)?be(t):void 0}function _e(t){return r(t)&&r(t.text)&&o(t.isComment)}function be(t,e){var n,o,l,c,u=[];for(n=0;n<t.length;n++)o=t[n],i(o)||"boolean"===typeof o||(l=u.length-1,c=u[l],Array.isArray(o)?o.length>0&&(o=be(o,(e||"")+"_"+n),_e(o[0])&&_e(c)&&(u[l]=yt(c.text+o[0].text),o.shift()),u.push.apply(u,o)):s(o)?_e(c)?u[l]=yt(c.text+o):""!==o&&u.push(yt(o)):_e(o)&&_e(c)?u[l]=yt(c.text+o.text):(a(t._isVList)&&r(o.tag)&&i(o.key)&&r(e)&&(o.key="__vlist"+e+"_"+n+"__"),u.push(o)));return u}function Ae(t){var e=t.$options.provide;e&&(t._provided="function"===typeof e?e.call(t):e)}function we(t){var e=Se(t.$options.inject,t);e&&(St(!1),Object.keys(e).forEach(function(n){Ct(t,n,e[n])}),St(!0))}function Se(t,e){if(t){for(var n=Object.create(null),i=lt?Reflect.ownKeys(t):Object.keys(t),r=0;r<i.length;r++){var a=i[r];if("__ob__"!==a){var o=t[a].from,s=e;while(s){if(s._provided&&_(s._provided,o)){n[a]=s._provided[o];break}s=s.$parent}if(!s)if("default"in t[a]){var l=t[a].default;n[a]="function"===typeof l?l.call(e):l}else 0}}return n}}function Te(t,e){if(!t||!t.length)return{};for(var n={},i=0,r=t.length;i<r;i++){var a=t[i],o=a.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,a.context!==e&&a.fnContext!==e||!o||null==o.slot)a.asyncMeta&&a.asyncMeta.data&&"page"===a.asyncMeta.data.slot?(n["page"]||(n["page"]=[])).push(a):(n.default||(n.default=[])).push(a);else{var s=o.slot,l=n[s]||(n[s]=[]);"template"===a.tag?l.push.apply(l,a.children||[]):l.push(a)}}for(var c in n)n[c].every(Pe)&&delete n[c];return n}function Pe(t){return t.isComment&&!t.asyncFactory||" "===t.text}function ke(t,e,i){var r,a=Object.keys(e).length>0,o=t?!!t.$stable:!a,s=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(o&&i&&i!==n&&s===i.$key&&!a&&!i.$hasNormal)return i;for(var l in r={},t)t[l]&&"$"!==l[0]&&(r[l]=De(e,l,t[l]))}else r={};for(var c in e)c in r||(r[c]=Ce(e,c));return t&&Object.isExtensible(t)&&(t._normalized=r),U(r,"$stable",o),U(r,"$key",s),U(r,"$hasNormal",a),r}function De(t,e,n){var i=function(){var t=arguments.length?n.apply(null,arguments):n({});return t=t&&"object"===typeof t&&!Array.isArray(t)?[t]:me(t),t&&(0===t.length||1===t.length&&t[0].isComment)?void 0:t};return n.proxy&&Object.defineProperty(t,e,{get:i,enumerable:!0,configurable:!0}),i}function Ce(t,e){return function(){return t[e]}}function Oe(t,e){var n,i,a,o,s;if(Array.isArray(t)||"string"===typeof t)for(n=new Array(t.length),i=0,a=t.length;i<a;i++)n[i]=e(t[i],i,i,i);else if("number"===typeof t)for(n=new Array(t),i=0;i<t;i++)n[i]=e(i+1,i,i,i);else if(l(t))if(lt&&t[Symbol.iterator]){n=[];var c=t[Symbol.iterator](),u=c.next();while(!u.done)n.push(e(u.value,n.length,i++,i)),u=c.next()}else for(o=Object.keys(t),n=new Array(o.length),i=0,a=o.length;i<a;i++)s=o[i],n[i]=e(t[s],s,i,i);return r(n)||(n=[]),n._isVList=!0,n}function Me(t,e,n,i){var r,a=this.$scopedSlots[t];a?(n=n||{},i&&(n=M(M({},i),n)),r=a(n,this,n._i)||e):r=this.$slots[t]||e;var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function Le(t){return Ut(this.$options,"filters",t,!0)||E}function Re(t,e){return Array.isArray(t)?-1===t.indexOf(e):t!==e}function $e(t,e,n,i,r){var a=z.keyCodes[e]||n;return r&&i&&!z.keyCodes[e]?Re(r,i):a?Re(a,t):i?P(i)!==e:void 0}function Ee(t,e,n,i,r){if(n)if(l(n)){var a;Array.isArray(n)&&(n=L(n));var o=function(o){if("class"===o||"style"===o||y(o))a=t;else{var s=t.attrs&&t.attrs.type;a=i||z.mustUseProp(e,s,o)?t.domProps||(t.domProps={}):t.attrs||(t.attrs={})}var l=w(o),c=P(o);if(!(l in a)&&!(c in a)&&(a[o]=n[o],r)){var u=t.on||(t.on={});u["update:"+o]=function(t){n[o]=t}}};for(var s in n)o(s)}else;return t}function Fe(t,e){var n=this._staticTrees||(this._staticTrees=[]),i=n[t];return i&&!e?i:(i=n[t]=this.$options.staticRenderFns[t].call(this._renderProxy,null,this),je(i,"__static__"+t,!1),i)}function Ie(t,e,n){return je(t,"__once__"+e+(n?"_"+n:""),!0),t}function je(t,e,n){if(Array.isArray(t))for(var i=0;i<t.length;i++)t[i]&&"string"!==typeof t[i]&&Ne(t[i],e+"_"+i,n);else Ne(t,e,n)}function Ne(t,e,n){t.isStatic=!0,t.key=e,t.isOnce=n}function Be(t,e){if(e)if(u(e)){var n=t.on=t.on?M({},t.on):{};for(var i in e){var r=n[i],a=e[i];n[i]=r?[].concat(r,a):a}}else;return t}function ze(t,e,n,i){e=e||{$stable:!n};for(var r=0;r<t.length;r++){var a=t[r];Array.isArray(a)?ze(a,e,n):a&&(a.proxy&&(a.fn.proxy=!0),e[a.key]=a.fn)}return i&&(e.$key=i),e}function We(t,e){for(var n=0;n<e.length;n+=2){var i=e[n];"string"===typeof i&&i&&(t[e[n]]=e[n+1])}return t}function He(t,e){return"string"===typeof t?e+t:t}function Ue(t){t._o=Ie,t._n=g,t._s=d,t._l=Oe,t._t=Me,t._q=F,t._i=I,t._m=Fe,t._f=Le,t._k=$e,t._b=Ee,t._v=yt,t._e=vt,t._u=ze,t._g=Be,t._d=We,t._p=He}function Ve(t,e,i,r,o){var s,l=this,c=o.options;_(r,"_uid")?(s=Object.create(r),s._original=r):(s=r,r=r._original);var u=a(c._compiled),h=!u;this.data=t,this.props=e,this.children=i,this.parent=r,this.listeners=t.on||n,this.injections=Se(c.inject,r),this.slots=function(){return l.$slots||ke(t.scopedSlots,l.$slots=Te(i,r)),l.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return ke(t.scopedSlots,this.slots())}}),u&&(this.$options=c,this.$slots=this.slots(),this.$scopedSlots=ke(t.scopedSlots,this.$slots)),c._scopeId?this._c=function(t,e,n,i){var a=an(s,t,e,n,i,h);return a&&!Array.isArray(a)&&(a.fnScopeId=c._scopeId,a.fnContext=r),a}:this._c=function(t,e,n,i){return an(s,t,e,n,i,h)}}function qe(t,e,i,a,o){var s=t.options,l={},c=s.props;if(r(c))for(var u in c)l[u]=Vt(u,c,e||n);else r(i.attrs)&&Xe(l,i.attrs),r(i.props)&&Xe(l,i.props);var h=new Ve(i,l,o,a,t),p=s.render.call(null,h._c,h);if(p instanceof dt)return Ge(p,i,h.parent,s,h);if(Array.isArray(p)){for(var f=me(p)||[],d=new Array(f.length),g=0;g<f.length;g++)d[g]=Ge(f[g],i,h.parent,s,h);return d}}function Ge(t,e,n,i,r){var a=xt(t);return a.fnContext=n,a.fnOptions=i,e.slot&&((a.data||(a.data={})).slot=e.slot),a}function Xe(t,e){for(var n in e)t[w(n)]=e[n]}Ue(Ve.prototype);var Je={init:function(t,e){if(t.componentInstance&&!t.componentInstance._isDestroyed&&t.data.keepAlive){var n=t;Je.prepatch(n,n)}else{var i=t.componentInstance=Ye(t,Sn);i.$mount(e?t.elm:void 0,e)}},prepatch:function(t,e){var n=e.componentOptions,i=e.componentInstance=t.componentInstance;Dn(i,n.propsData,n.listeners,e,n.children)},insert:function(t){var e=t.context,n=t.componentInstance;n._isMounted||(Ln(n,"onServiceCreated"),Ln(n,"onServiceAttached"),n._isMounted=!0,Ln(n,"mounted")),t.data.keepAlive&&(e._isMounted?Un(n):On(n,!0))},destroy:function(t){var e=t.componentInstance;e._isDestroyed||(t.data.keepAlive?Mn(e,!0):e.$destroy())}},Ke=Object.keys(Je);function Qe(t,e,n,o,s){if(!i(t)){var c=n.$options._base;if(l(t)&&(t=c.extend(t)),"function"===typeof t){var u;if(i(t.cid)&&(u=t,t=gn(u,c),void 0===t))return dn(u,e,n,o,s);e=e||{},fi(t),r(e.model)&&en(t.options,e);var h=ve(e,t,s,n);if(a(t.options.functional))return qe(t,h,e,n,o);var p=e.on;if(e.on=e.nativeOn,a(t.options.abstract)){var f=e.slot;e={},f&&(e.slot=f)}Ze(e);var d=t.options.name||s,g=new dt("vue-component-"+t.cid+(d?"-"+d:""),e,void 0,void 0,void 0,n,{Ctor:t,propsData:h,listeners:p,tag:s,children:o},u);return g}}}function Ye(t,e){var n={_isComponent:!0,_parentVnode:t,parent:e},i=t.data.inlineTemplate;return r(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new t.componentOptions.Ctor(n)}function Ze(t){for(var e=t.hook||(t.hook={}),n=0;n<Ke.length;n++){var i=Ke[n],r=e[i],a=Je[i];r===a||r&&r._merged||(e[i]=r?tn(a,r):a)}}function tn(t,e){var n=function(n,i){t(n,i),e(n,i)};return n._merged=!0,n}function en(t,e){var n=t.model&&t.model.prop||"value",i=t.model&&t.model.event||"input";(e.attrs||(e.attrs={}))[n]=e.model.value;var a=e.on||(e.on={}),o=a[i],s=e.model.callback;r(o)?(Array.isArray(o)?-1===o.indexOf(s):o!==s)&&(a[i]=[s].concat(o)):a[i]=s}var nn=1,rn=2;function an(t,e,n,i,r,o){return(Array.isArray(n)||s(n))&&(r=i,i=n,n=void 0),a(o)&&(r=rn),on(t,e,n,i,r)}function on(t,e,n,i,a){if(r(n)&&r(n.__ob__))return vt();if(r(n)&&r(n.is)&&(e=n.is),!e)return vt();var o,s,l;(Array.isArray(i)&&"function"===typeof i[0]&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),a===rn?i=me(i):a===nn&&(i=xe(i)),"string"===typeof e)?(s=t.$vnode&&t.$vnode.ns||z.getTagNamespace(e),o=z.isReservedTag(e)?new dt(z.parsePlatformTagName(e),n,i,void 0,void 0,t):n&&n.pre||!r(l=Ut(t.$options,"components",e))?new dt(e,n,i,void 0,void 0,t):Qe(l,n,t,i,e)):o=Qe(e,n,t,i);return Array.isArray(o)?o:r(o)?(r(s)&&sn(o,s),r(n)&&ln(n),o):vt()}function sn(t,e,n){if(t.ns=e,"foreignObject"===t.tag&&(e=void 0,n=!0),r(t.children))for(var o=0,s=t.children.length;o<s;o++){var l=t.children[o];r(l.tag)&&(i(l.ns)||a(n)&&"svg"!==l.tag)&&sn(l,e,n)}}function ln(t){l(t.style)&&ue(t.style),l(t.class)&&ue(t.class)}function cn(t){t._vnode=null,t._staticTrees=null;var e=t.$options,i=t.$vnode=e._parentVnode,r=i&&i.context;t.$slots=Te(e._renderChildren,r),t.$scopedSlots=n,t._c=function(e,n,i,r){return an(t,e,n,i,r,!1)},t.$createElement=function(e,n,i,r){return an(t,e,n,i,r,!0)};var a=i&&i.data;Ct(t,"$attrs",a&&a.attrs||n,null,!0),Ct(t,"$listeners",e._parentListeners||n,null,!0)}var un,hn=null;function pn(t){Ue(t.prototype),t.prototype.$nextTick=function(t){return le(t,this)},t.prototype._render=function(){var t,e=this,n=e.$options,i=n.render,r=n._parentVnode;r&&(e.$scopedSlots=ke(r.data.scopedSlots,e.$slots,e.$scopedSlots)),e.$vnode=r;try{hn=e,t=i.call(e._renderProxy,e.$createElement)}catch(nr){Kt(nr,e,"render"),t=e._vnode}finally{hn=null}return Array.isArray(t)&&1===t.length&&(t=t[0]),t instanceof dt||(t=vt()),t.parent=r,t}}function fn(t,e){return(t.__esModule||lt&&"Module"===t[Symbol.toStringTag])&&(t=t.default),l(t)?e.extend(t):t}function dn(t,e,n,i,r){var a=vt();return a.asyncFactory=t,a.asyncMeta={data:e,context:n,children:i,tag:r},a}function gn(t,e){if(a(t.error)&&r(t.errorComp))return t.errorComp;if(r(t.resolved))return t.resolved;var n=hn;if(n&&r(t.owners)&&-1===t.owners.indexOf(n)&&t.owners.push(n),a(t.loading)&&r(t.loadingComp))return t.loadingComp;if(n&&!r(t.owners)){var o=t.owners=[n],s=!0,c=null,u=null;n.$on("hook:destroyed",function(){return x(o,n)});var h=function(t){for(var e=0,n=o.length;e<n;e++)o[e].$forceUpdate();t&&(o.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},p=j(function(n){t.resolved=fn(n,e),s?o.length=0:h(!0)}),d=j(function(e){r(t.errorComp)&&(t.error=!0,h(!0))}),g=t(p,d);return l(g)&&(f(g)?i(t.resolved)&&g.then(p,d):f(g.component)&&(g.component.then(p,d),r(g.error)&&(t.errorComp=fn(g.error,e)),r(g.loading)&&(t.loadingComp=fn(g.loading,e),0===g.delay?t.loading=!0:c=setTimeout(function(){c=null,i(t.resolved)&&i(t.error)&&(t.loading=!0,h(!1))},g.delay||200)),r(g.timeout)&&(u=setTimeout(function(){u=null,i(t.resolved)&&d(null)},g.timeout)))),s=!1,t.loading?t.loadingComp:t.resolved}}function vn(t){return t.isComment&&t.asyncFactory}function yn(t){if(Array.isArray(t))for(var e=0;e<t.length;e++){var n=t[e];if(r(n)&&(r(n.componentOptions)||vn(n)))return n}}function xn(t){t._events=Object.create(null),t._hasHookEvent=!1;var e=t.$options._parentListeners;e&&An(t,e)}function mn(t,e){un.$on(t,e)}function _n(t,e){un.$off(t,e)}function bn(t,e){var n=un;return function i(){var r=e.apply(null,arguments);null!==r&&n.$off(t,i)}}function An(t,e,n){un=t,de(e,n||{},mn,_n,bn,t),un=void 0}function wn(t){var e=/^hook:/;t.prototype.$on=function(t,n){var i=this;if(Array.isArray(t))for(var r=0,a=t.length;r<a;r++)i.$on(t[r],n);else(i._events[t]||(i._events[t]=[])).push(n),e.test(t)&&(i._hasHookEvent=!0);return i},t.prototype.$once=function(t,e){var n=this;function i(){n.$off(t,i),e.apply(n,arguments)}return i.fn=e,n.$on(t,i),n},t.prototype.$off=function(t,e){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(Array.isArray(t)){for(var i=0,r=t.length;i<r;i++)n.$off(t[i],e);return n}var a,o=n._events[t];if(!o)return n;if(!e)return n._events[t]=null,n;var s=o.length;while(s--)if(a=o[s],a===e||a.fn===e){o.splice(s,1);break}return n},t.prototype.$emit=function(t){var e=this,n=e._events[t];if(n){n=n.length>1?O(n):n;for(var i=O(arguments,1),r='event handler for "'+t+'"',a=0,o=n.length;a<o;a++)Qt(n[a],e,i,e,r)}return e}}var Sn=null;function Tn(t){var e=Sn;return Sn=t,function(){Sn=e}}function Pn(t){var e=t.$options,n=e.parent;if(n&&!e.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(t)}t.$parent=n,t.$root=n?n.$root:t,t.$children=[],t.$refs={},t._watcher=null,t._inactive=null,t._directInactive=!1,t._isMounted=!1,t._isDestroyed=!1,t._isBeingDestroyed=!1}function kn(t){t.prototype._update=function(t,e){var n=this,i=n.$el,r=n._vnode,a=Tn(n);n._vnode=t,n.$el=r?n.__patch__(r,t):n.__patch__(n.$el,t,e,!1),a(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n),n.$vnode&&n.$parent&&n.$vnode===n.$parent._vnode&&(n.$parent.$el=n.$el)},t.prototype.$forceUpdate=function(){var t=this;t._watcher&&t._watcher.update()},t.prototype.$destroy=function(){var t=this;if(!t._isBeingDestroyed){Ln(t,"beforeDestroy"),t._isBeingDestroyed=!0;var e=t.$parent;!e||e._isBeingDestroyed||t.$options.abstract||x(e.$children,t),t._watcher&&t._watcher.teardown();var n=t._watchers.length;while(n--)t._watchers[n].teardown();t._data.__ob__&&t._data.__ob__.vmCount--,t._isDestroyed=!0,t.__patch__(t._vnode,null),Ln(t,"destroyed"),t.$off(),t.$el&&(t.$el.__vue__=null),t.$vnode&&(t.$vnode.parent=null)}}}function Dn(t,e,i,r,a){var o=r.data.scopedSlots,s=t.$scopedSlots,l=!!(o&&!o.$stable||s!==n&&!s.$stable||o&&t.$scopedSlots.$key!==o.$key),c=!!(a||t.$options._renderChildren||l);if(t.$options._parentVnode=r,t.$vnode=r,t._vnode&&(t._vnode.parent=r),t.$options._renderChildren=a,t.$attrs=r.data.attrs||n,t.$listeners=i||n,e&&t.$options.props){St(!1);for(var u=t._props,h=t.$options._propKeys||[],p=0;p<h.length;p++){var f=h[p],d=t.$options.props;u[f]=Vt(f,d,e,t)}St(!0),t.$options.propsData=e}t._$updateProperties&&t._$updateProperties(t),i=i||n;var g=t.$options._parentListeners;t.$options._parentListeners=i,An(t,i,g),c&&(t.$slots=Te(a,r.context),t.$forceUpdate())}function Cn(t){while(t&&(t=t.$parent))if(t._inactive)return!0;return!1}function On(t,e){if(e){if(t._directInactive=!1,Cn(t))return}else if(t._directInactive)return;if(t._inactive||null===t._inactive){t._inactive=!1;for(var n=0;n<t.$children.length;n++)On(t.$children[n]);Ln(t,"activated")}}function Mn(t,e){if((!e||(t._directInactive=!0,!Cn(t)))&&!t._inactive){t._inactive=!0;for(var n=0;n<t.$children.length;n++)Mn(t.$children[n]);Ln(t,"deactivated")}}function Ln(t,e){pt();var n=t.$options[e],i=e+" hook";if(n)for(var r=0,a=n.length;r<a;r++)Qt(n[r],t,null,t,i);t._hasHookEvent&&t.$emit("hook:"+e),ft()}var Rn=[],$n=[],En={},Fn=!1,In=!1,jn=0;function Nn(){jn=Rn.length=$n.length=0,En={},Fn=In=!1}var Bn=Date.now;if(J&&!Z){var zn=window.performance;zn&&"function"===typeof zn.now&&Bn()>document.createEvent("Event").timeStamp&&(Bn=function(){return zn.now()})}function Wn(){var t,e;for(Bn(),In=!0,Rn.sort(function(t,e){return t.id-e.id}),jn=0;jn<Rn.length;jn++)t=Rn[jn],t.before&&t.before(),e=t.id,En[e]=null,t.run();var n=$n.slice(),i=Rn.slice();Nn(),Vn(n),Hn(i),at&&z.devtools&&at.emit("flush")}function Hn(t){var e=t.length;while(e--){var n=t[e],i=n.vm;i._watcher===n&&i._isMounted&&!i._isDestroyed&&Ln(i,"updated")}}function Un(t){t._inactive=!1,$n.push(t)}function Vn(t){for(var e=0;e<t.length;e++)t[e]._inactive=!0,On(t[e],!0)}function qn(t){var e=t.id;if(null==En[e]){if(En[e]=!0,In){var n=Rn.length-1;while(n>jn&&Rn[n].id>t.id)n--;Rn.splice(n+1,0,t)}else Rn.push(t);Fn||(Fn=!0,le(Wn))}}var Gn=0,Xn=function(t,e,n,i,r){this.vm=t,r&&(t._watcher=this),t._watchers.push(this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++Gn,this.active=!0,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new st,this.newDepIds=new st,this.expression="","function"===typeof e?this.getter=e:(this.getter=q(e),this.getter||(this.getter=R)),this.value=this.lazy?void 0:this.get()};Xn.prototype.get=function(){var t;pt(this);var e=this.vm;try{t=this.getter.call(e,e)}catch(nr){if(!this.user)throw nr;Kt(nr,e,'getter for watcher "'+this.expression+'"')}finally{this.deep&&ue(t),ft(),this.cleanupDeps()}return t},Xn.prototype.addDep=function(t){var e=t.id;this.newDepIds.has(e)||(this.newDepIds.add(e),this.newDeps.push(t),this.depIds.has(e)||t.addSub(this))},Xn.prototype.cleanupDeps=function(){var t=this.deps.length;while(t--){var e=this.deps[t];this.newDepIds.has(e.id)||e.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},Xn.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():qn(this)},Xn.prototype.run=function(){if(this.active){var t=this.get();if(t!==this.value||l(t)||this.deep){var e=this.value;if(this.value=t,this.user)try{this.cb.call(this.vm,t,e)}catch(nr){Kt(nr,this.vm,'callback for watcher "'+this.expression+'"')}else this.cb.call(this.vm,t,e)}}},Xn.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},Xn.prototype.depend=function(){var t=this.deps.length;while(t--)this.deps[t].depend()},Xn.prototype.teardown=function(){if(this.active){this.vm._isBeingDestroyed||x(this.vm._watchers,this);var t=this.deps.length;while(t--)this.deps[t].removeSub(this);this.active=!1}};var Jn={enumerable:!0,configurable:!0,get:R,set:R};function Kn(t,e,n){Jn.get=function(){return this[e][n]},Jn.set=function(t){this[e][n]=t},Object.defineProperty(t,n,Jn)}function Qn(t){t._watchers=[];var e=t.$options;e.props&&Yn(t,e.props),e.methods&&oi(t,e.methods),e.data?Zn(t):Dt(t._data={},!0),e.computed&&ni(t,e.computed),e.watch&&e.watch!==nt&&si(t,e.watch)}function Yn(t,e){var n=t.$options.propsData||{},i=t._props={},r=t.$options._propKeys=[],a=!t.$parent;a||St(!1);var o=function(a){r.push(a);var o=Vt(a,e,n,t);Ct(i,a,o),a in t||Kn(t,"_props",a)};for(var s in e)o(s);St(!0)}function Zn(t){var e=t.$options.data;e=t._data="function"===typeof e?ti(e,t):e||{},u(e)||(e={});var n=Object.keys(e),i=t.$options.props,r=(t.$options.methods,n.length);while(r--){var a=n[r];0,i&&_(i,a)||H(a)||Kn(t,"_data",a)}Dt(e,!0)}function ti(t,e){pt();try{return t.call(e,e)}catch(nr){return Kt(nr,e,"data()"),{}}finally{ft()}}var ei={lazy:!0};function ni(t,e){var n=t._computedWatchers=Object.create(null),i=rt();for(var r in e){var a=e[r],o="function"===typeof a?a:a.get;0,i||(n[r]=new Xn(t,o||R,R,ei)),r in t||ii(t,r,a)}}function ii(t,e,n){var i=!rt();"function"===typeof n?(Jn.get=i?ri(e):ai(n),Jn.set=R):(Jn.get=n.get?i&&!1!==n.cache?ri(e):ai(n.get):R,Jn.set=n.set||R),Object.defineProperty(t,e,Jn)}function ri(t){return function(){var e=this._computedWatchers&&this._computedWatchers[t];if(e)return e.dirty&&e.evaluate(),ht.SharedObject.target&&e.depend(),e.value}}function ai(t){return function(){return t.call(this,this)}}function oi(t,e){t.$options.props;for(var n in e)t[n]="function"!==typeof e[n]?R:C(e[n],t)}function si(t,e){for(var n in e){var i=e[n];if(Array.isArray(i))for(var r=0;r<i.length;r++)li(t,n,i[r]);else li(t,n,i)}}function li(t,e,n,i){return u(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=t[n]),t.$watch(e,n,i)}function ci(t){var e={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(t.prototype,"$data",e),Object.defineProperty(t.prototype,"$props",n),t.prototype.$set=Ot,t.prototype.$delete=Mt,t.prototype.$watch=function(t,e,n){var i=this;if(u(e))return li(i,t,e,n);n=n||{},n.user=!0;var r=new Xn(i,t,e,n);if(n.immediate)try{e.call(i,r.value)}catch(a){Kt(a,i,'callback for immediate watcher "'+r.expression+'"')}return function(){r.teardown()}}}var ui=0;function hi(t){t.prototype._init=function(t){var e=this;e._uid=ui++,e._isVue=!0,t&&t._isComponent?pi(e,t):e.$options=Ht(fi(e.constructor),t||{},e),e._renderProxy=e,e._self=e,Pn(e),xn(e),cn(e),Ln(e,"beforeCreate"),"mp-toutiao"!==e.mpHost&&we(e),Qn(e),"mp-toutiao"!==e.mpHost&&Ae(e),"mp-toutiao"!==e.mpHost&&Ln(e,"created"),e.$options.el&&e.$mount(e.$options.el)}}function pi(t,e){var n=t.$options=Object.create(t.constructor.options),i=e._parentVnode;n.parent=e.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,e.render&&(n.render=e.render,n.staticRenderFns=e.staticRenderFns)}function fi(t){var e=t.options;if(t.super){var n=fi(t.super),i=t.superOptions;if(n!==i){t.superOptions=n;var r=di(t);r&&M(t.extendOptions,r),e=t.options=Ht(n,t.extendOptions),e.name&&(e.components[e.name]=t)}}return e}function di(t){var e,n=t.options,i=t.sealedOptions;for(var r in n)n[r]!==i[r]&&(e||(e={}),e[r]=n[r]);return e}function gi(t){this._init(t)}function vi(t){t.use=function(t){var e=this._installedPlugins||(this._installedPlugins=[]);if(e.indexOf(t)>-1)return this;var n=O(arguments,1);return n.unshift(this),"function"===typeof t.install?t.install.apply(t,n):"function"===typeof t&&t.apply(null,n),e.push(t),this}}function yi(t){t.mixin=function(t){return this.options=Ht(this.options,t),this}}function xi(t){t.cid=0;var e=1;t.extend=function(t){t=t||{};var n=this,i=n.cid,r=t._Ctor||(t._Ctor={});if(r[i])return r[i];var a=t.name||n.options.name;var o=function(t){this._init(t)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=e++,o.options=Ht(n.options,t),o["super"]=n,o.options.props&&mi(o),o.options.computed&&_i(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,N.forEach(function(t){o[t]=n[t]}),a&&(o.options.components[a]=o),o.superOptions=n.options,o.extendOptions=t,o.sealedOptions=M({},o.options),r[i]=o,o}}function mi(t){var e=t.options.props;for(var n in e)Kn(t.prototype,"_props",n)}function _i(t){var e=t.options.computed;for(var n in e)ii(t.prototype,n,e[n])}function bi(t){N.forEach(function(e){t[e]=function(t,n){return n?("component"===e&&u(n)&&(n.name=n.name||t,n=this.options._base.extend(n)),"directive"===e&&"function"===typeof n&&(n={bind:n,update:n}),this.options[e+"s"][t]=n,n):this.options[e+"s"][t]}})}function Ai(t){return t&&(t.Ctor.options.name||t.tag)}function wi(t,e){return Array.isArray(t)?t.indexOf(e)>-1:"string"===typeof t?t.split(",").indexOf(e)>-1:!!h(t)&&t.test(e)}function Si(t,e){var n=t.cache,i=t.keys,r=t._vnode;for(var a in n){var o=n[a];if(o){var s=Ai(o.componentOptions);s&&!e(s)&&Ti(n,a,i,r)}}}function Ti(t,e,n,i){var r=t[e];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),t[e]=null,x(n,e)}hi(gi),ci(gi),wn(gi),kn(gi),pn(gi);var Pi=[String,RegExp,Array],ki={name:"keep-alive",abstract:!0,props:{include:Pi,exclude:Pi,max:[String,Number]},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var t in this.cache)Ti(this.cache,t,this.keys)},mounted:function(){var t=this;this.$watch("include",function(e){Si(t,function(t){return wi(e,t)})}),this.$watch("exclude",function(e){Si(t,function(t){return!wi(e,t)})})},render:function(){var t=this.$slots.default,e=yn(t),n=e&&e.componentOptions;if(n){var i=Ai(n),r=this,a=r.include,o=r.exclude;if(a&&(!i||!wi(a,i))||o&&i&&wi(o,i))return e;var s=this,l=s.cache,c=s.keys,u=null==e.key?n.Ctor.cid+(n.tag?"::"+n.tag:""):e.key;l[u]?(e.componentInstance=l[u].componentInstance,x(c,u),c.push(u)):(l[u]=e,c.push(u),this.max&&c.length>parseInt(this.max)&&Ti(l,c[0],c,this._vnode)),e.data.keepAlive=!0}return e||t&&t[0]}},Di={KeepAlive:ki};function Ci(t){var e={get:function(){return z}};Object.defineProperty(t,"config",e),t.util={warn:ct,extend:M,mergeOptions:Ht,defineReactive:Ct},t.set=Ot,t.delete=Mt,t.nextTick=le,t.observable=function(t){return Dt(t),t},t.options=Object.create(null),N.forEach(function(e){t.options[e+"s"]=Object.create(null)}),t.options._base=t,M(t.options.components,Di),vi(t),yi(t),xi(t),bi(t)}Ci(gi),Object.defineProperty(gi.prototype,"$isServer",{get:rt}),Object.defineProperty(gi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(gi,"FunctionalRenderContext",{value:Ve}),gi.version="2.6.11";var Oi="[object Array]",Mi="[object Object]";function Li(t,e){var n={};return Ri(t,e),$i(t,e,"",n),n}function Ri(t,e){if(t!==e){var n=Fi(t),i=Fi(e);if(n==Mi&&i==Mi){if(Object.keys(t).length>=Object.keys(e).length)for(var r in e){var a=t[r];void 0===a?t[r]=null:Ri(a,e[r])}}else n==Oi&&i==Oi&&t.length>=e.length&&e.forEach(function(e,n){Ri(t[n],e)})}}function $i(t,e,n,i){if(t!==e){var r=Fi(t),a=Fi(e);if(r==Mi)if(a!=Mi||Object.keys(t).length<Object.keys(e).length)Ei(i,n,t);else{var o=function(r){var a=t[r],o=e[r],s=Fi(a),l=Fi(o);if(s!=Oi&&s!=Mi)a!=e[r]&&Ei(i,(""==n?"":n+".")+r,a);else if(s==Oi)l!=Oi?Ei(i,(""==n?"":n+".")+r,a):a.length<o.length?Ei(i,(""==n?"":n+".")+r,a):a.forEach(function(t,e){$i(t,o[e],(""==n?"":n+".")+r+"["+e+"]",i)});else if(s==Mi)if(l!=Mi||Object.keys(a).length<Object.keys(o).length)Ei(i,(""==n?"":n+".")+r,a);else for(var c in a)$i(a[c],o[c],(""==n?"":n+".")+r+"."+c,i)};for(var s in t)o(s)}else r==Oi?a!=Oi?Ei(i,n,t):t.length<e.length?Ei(i,n,t):t.forEach(function(t,r){$i(t,e[r],n+"["+r+"]",i)}):Ei(i,n,t)}}function Ei(t,e,n){t[e]=n}function Fi(t){return Object.prototype.toString.call(t)}function Ii(t){if(t.__next_tick_callbacks&&t.__next_tick_callbacks.length){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var e=t.$scope;console.log("["+ +new Date+"]["+(e.is||e.route)+"]["+t._uid+"]:flushCallbacks["+t.__next_tick_callbacks.length+"]")}var n=t.__next_tick_callbacks.slice(0);t.__next_tick_callbacks.length=0;for(var i=0;i<n.length;i++)n[i]()}}function ji(t){return Rn.find(function(e){return t._watcher===e})}function Ni(t,e){if(!t.__next_tick_pending&&!ji(t)){if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var n=t.$scope;console.log("["+ +new Date+"]["+(n.is||n.route)+"]["+t._uid+"]:nextVueTick")}return le(e,t)}if(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG){var i=t.$scope;console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+t._uid+"]:nextMPTick")}var r;if(t.__next_tick_callbacks||(t.__next_tick_callbacks=[]),t.__next_tick_callbacks.push(function(){if(e)try{e.call(t)}catch(nr){Kt(nr,t,"nextTick")}else r&&r(t)}),!e&&"undefined"!==typeof Promise)return new Promise(function(t){r=t})}function Bi(t){var e=Object.create(null),n=[].concat(Object.keys(t._data||{}),Object.keys(t._computedWatchers||{}));return n.reduce(function(e,n){return e[n]=t[n],e},e),Object.assign(e,t.$mp.data||{}),Array.isArray(t.$options.behaviors)&&-1!==t.$options.behaviors.indexOf("uni://form-field")&&(e["name"]=t.name,e["value"]=t.value),JSON.parse(JSON.stringify(e))}var zi=function(t,e){var n=this;if(null!==e&&("page"===this.mpType||"component"===this.mpType)){var i=this.$scope,r=Object.create(null);try{r=Bi(this)}catch(s){console.error(s)}r.__webviewId__=i.data.__webviewId__;var a=Object.create(null);Object.keys(r).forEach(function(t){a[t]=i.data[t]});var o=Li(r,a);Object.keys(o).length?(Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.log("["+ +new Date+"]["+(i.is||i.route)+"]["+this._uid+"]差量更新",JSON.stringify(o)),this.__next_tick_pending=!0,i.setData(o,function(){n.__next_tick_pending=!1,Ii(n)})):Ii(this)}};function Wi(){}function Hi(t,e,n){if(!t.mpType)return t;"app"===t.mpType&&(t.$options.render=Wi),t.$options.render||(t.$options.render=Wi),"mp-toutiao"!==t.mpHost&&Ln(t,"beforeMount");var i=function(){t._update(t._render(),n)};return new Xn(t,i,R,{before:function(){t._isMounted&&!t._isDestroyed&&Ln(t,"beforeUpdate")}},!0),n=!1,t}function Ui(t,e){return r(t)||r(e)?Vi(t,qi(e)):""}function Vi(t,e){return t?e?t+" "+e:t:e||""}function qi(t){return Array.isArray(t)?Gi(t):l(t)?Xi(t):"string"===typeof t?t:""}function Gi(t){for(var e,n="",i=0,a=t.length;i<a;i++)r(e=qi(t[i]))&&""!==e&&(n&&(n+=" "),n+=e);return n}function Xi(t){var e="";for(var n in t)t[n]&&(e&&(e+=" "),e+=n);return e}var Ji=b(function(t){var e={},n=/;(?![^(]*\))/g,i=/:(.+)/;return t.split(n).forEach(function(t){if(t){var n=t.split(i);n.length>1&&(e[n[0].trim()]=n[1].trim())}}),e});function Ki(t){return Array.isArray(t)?L(t):"string"===typeof t?Ji(t):t}var Qi=["createSelectorQuery","createIntersectionObserver","selectAllComponents","selectComponent"];function Yi(t,e){var n=e.split("."),i=n[0];return 0===i.indexOf("__$n")&&(i=parseInt(i.replace("__$n",""))),1===n.length?t[i]:Yi(t[i],n.slice(1).join("."))}function Zi(t){t.config.errorHandler=function(t){var e=getApp();e&&e.onError?e.onError(t):console.error(t)};var e=t.prototype.$emit;t.prototype.$emit=function(t){return this.$scope&&t&&this.$scope["triggerEvent"](t,{__args__:O(arguments,1)}),e.apply(this,arguments)},t.prototype.$nextTick=function(t){return Ni(this,t)},Qi.forEach(function(e){t.prototype[e]=function(t){return this.$scope&&this.$scope[e]?this.$scope[e](t):"undefined"!==typeof my?"createSelectorQuery"===e?my.createSelectorQuery(t):"createIntersectionObserver"===e?my.createIntersectionObserver(t):void 0:void 0}}),t.prototype.__init_provide=Ae,t.prototype.__init_injections=we,t.prototype.__call_hook=function(t,e){var n=this;pt();var i,r=n.$options[t],a=t+" hook";if(r)for(var o=0,s=r.length;o<s;o++)i=Qt(r[o],n,e?[e]:null,n,a);return n._hasHookEvent&&n.$emit("hook:"+t,e),ft(),i},t.prototype.__set_model=function(t,e,n,i){Array.isArray(i)&&(-1!==i.indexOf("trim")&&(n=n.trim()),-1!==i.indexOf("number")&&(n=this._n(n))),t||(t=this),t[e]=n},t.prototype.__set_sync=function(t,e,n){t||(t=this),t[e]=n},t.prototype.__get_orig=function(t){return u(t)&&t["$orig"]||t},t.prototype.__get_value=function(t,e){return Yi(e||this,t)},t.prototype.__get_class=function(t,e){return Ui(e,t)},t.prototype.__get_style=function(t,e){if(!t&&!e)return"";var n=Ki(t),i=e?M(e,n):n;return Object.keys(i).map(function(t){return P(t)+":"+i[t]}).join(";")},t.prototype.__map=function(t,e){var n,i,r,a,o;if(Array.isArray(t)){for(n=new Array(t.length),i=0,r=t.length;i<r;i++)n[i]=e(t[i],i);return n}if(l(t)){for(a=Object.keys(t),n=Object.create(null),i=0,r=a.length;i<r;i++)o=a[i],n[o]=e(t[o],o,i);return n}return[]}}var tr=["onLaunch","onShow","onHide","onUniNViewMessage","onError","onLoad","onReady","onUnload","onPullDownRefresh","onReachBottom","onTabItemTap","onShareAppMessage","onResize","onPageScroll","onNavigationBarButtonTap","onBackPress","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked","onPageShow","onPageHide","onPageResize"];function er(t){var e=t.extend;t.extend=function(t){t=t||{};var n=t.methods;return n&&Object.keys(n).forEach(function(e){-1!==tr.indexOf(e)&&(t[e]=n[e],delete n[e])}),e.call(this,t)};var n=t.config.optionMergeStrategies,i=n.created;tr.forEach(function(t){n[t]=i}),t.prototype.__lifecycle_hooks__=tr}gi.prototype.__patch__=zi,gi.prototype.$mount=function(t,e){return Hi(this,t,e)},er(gi),Zi(gi),e["default"]=gi}.call(this,n("c8ba"))},"6e42":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.createApp=de,e.createComponent=Se,e.createPage=we,e.default=void 0;var i=r(n("66fd"));function r(t){return t&&t.__esModule?t:{default:t}}function a(t,e){return l(t)||s(t,e)||o()}function o(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}function s(t,e){var n=[],i=!0,r=!1,a=void 0;try{for(var o,s=t[Symbol.iterator]();!(i=(o=s.next()).done);i=!0)if(n.push(o.value),e&&n.length===e)break}catch(l){r=!0,a=l}finally{try{i||null==s["return"]||s["return"]()}finally{if(r)throw a}}return n}function l(t){if(Array.isArray(t))return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return f(t)||p(t)||h()}function h(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function p(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function f(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}var d=Object.prototype.toString,g=Object.prototype.hasOwnProperty;function v(t){return"function"===typeof t}function y(t){return"string"===typeof t}function x(t){return"[object Object]"===d.call(t)}function m(t,e){return g.call(t,e)}function _(){}function b(t){var e=Object.create(null);return function(n){var i=e[n];return i||(e[n]=t(n))}}var A=/-(\w)/g,w=b(function(t){return t.replace(A,function(t,e){return e?e.toUpperCase():""})}),S=["invoke","success","fail","complete","returnValue"],T={},P={};function k(t,e){var n=e?t?t.concat(e):Array.isArray(e)?e:[e]:t;return n?D(n):n}function D(t){for(var e=[],n=0;n<t.length;n++)-1===e.indexOf(t[n])&&e.push(t[n]);return e}function C(t,e){var n=t.indexOf(e);-1!==n&&t.splice(n,1)}function O(t,e){Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&v(e[n])&&(t[n]=k(t[n],e[n]))})}function M(t,e){t&&e&&Object.keys(e).forEach(function(n){-1!==S.indexOf(n)&&v(e[n])&&C(t[n],e[n])})}function L(t,e){"string"===typeof t&&x(e)?O(P[t]||(P[t]={}),e):x(t)&&O(T,t)}function R(t,e){"string"===typeof t?x(e)?M(P[t],e):delete P[t]:x(t)&&M(T,t)}function $(t){return function(e){return t(e)||e}}function E(t){return!!t&&("object"===typeof t||"function"===typeof t)&&"function"===typeof t.then}function F(t,e){for(var n=!1,i=0;i<t.length;i++){var r=t[i];if(n)n=Promise.then($(r));else{var a=r(e);if(E(a)&&(n=Promise.resolve(a)),!1===a)return{then:function(){}}}}return n||{then:function(t){return t(e)}}}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return["success","fail","complete"].forEach(function(n){if(Array.isArray(t[n])){var i=e[n];e[n]=function(e){F(t[n],e).then(function(t){return v(i)&&i(t)||t})}}}),e}function j(t,e){var n=[];Array.isArray(T.returnValue)&&n.push.apply(n,u(T.returnValue));var i=P[t];return i&&Array.isArray(i.returnValue)&&n.push.apply(n,u(i.returnValue)),n.forEach(function(t){e=t(e)||e}),e}function N(t){var e=Object.create(null);Object.keys(T).forEach(function(t){"returnValue"!==t&&(e[t]=T[t].slice())});var n=P[t];return n&&Object.keys(n).forEach(function(t){"returnValue"!==t&&(e[t]=(e[t]||[]).concat(n[t]))}),e}function B(t,e,n){for(var i=arguments.length,r=new Array(i>3?i-3:0),a=3;a<i;a++)r[a-3]=arguments[a];var o=N(t);if(o&&Object.keys(o).length){if(Array.isArray(o.invoke)){var s=F(o.invoke,n);return s.then(function(t){return e.apply(void 0,[I(o,t)].concat(r))})}return e.apply(void 0,[I(o,n)].concat(r))}return e.apply(void 0,[n].concat(r))}var z={returnValue:function(t){return E(t)?t.then(function(t){return t[1]}).catch(function(t){return t[0]}):t}},W=/^\$|restoreGlobal|getCurrentSubNVue|getMenuButtonBoundingClientRect|^report|interceptors|Interceptor$|getSubNVueById|requireNativePlugin|upx2px|hideKeyboard|canIUse|^create|Sync$|Manager$|base64ToArrayBuffer|arrayBufferToBase64/,H=/^create|Manager$/,U=/^on/;function V(t){return H.test(t)}function q(t){return W.test(t)}function G(t){return U.test(t)&&"onPush"!==t}function X(t){return t.then(function(t){return[null,t]}).catch(function(t){return[t]})}function J(t){return!(V(t)||q(t)||G(t))}function K(t,e){return J(t)?function(){for(var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return v(n.success)||v(n.fail)||v(n.complete)?j(t,B.apply(void 0,[t,e,n].concat(r))):j(t,X(new Promise(function(i,a){B.apply(void 0,[t,e,Object.assign({},n,{success:i,fail:a})].concat(r)),Promise.prototype.finally||(Promise.prototype.finally=function(t){var e=this.constructor;return this.then(function(n){return e.resolve(t()).then(function(){return n})},function(n){return e.resolve(t()).then(function(){throw n})})})})))}:e}var Q=1e-4,Y=750,Z=!1,tt=0,et=0;function nt(){var t=wx.getSystemInfoSync(),e=t.platform,n=t.pixelRatio,i=t.windowWidth;tt=i,et=n,Z="ios"===e}function it(t,e){if(0===tt&&nt(),t=Number(t),0===t)return 0;var n=t/Y*(e||tt);return n<0&&(n=-n),n=Math.floor(n+Q),0===n?1!==et&&Z?.5:1:t<0?-n:n}var rt={promiseInterceptor:z},at=Object.freeze({__proto__:null,upx2px:it,interceptors:rt,addInterceptor:L,removeInterceptor:R}),ot={},st=[],lt=[],ct=["success","fail","cancel","complete"];function ut(t,e,n){return function(i){return e(pt(t,i,n))}}function ht(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},r=arguments.length>4&&void 0!==arguments[4]&&arguments[4];if(x(e)){var a=!0===r?e:{};for(var o in v(n)&&(n=n(e,a)||{}),e)if(m(n,o)){var s=n[o];v(s)&&(s=s(e[o],e,a)),s?y(s)?a[s]=e[o]:x(s)&&(a[s.name?s.name:o]=s.value):console.warn("app-plus ".concat(t,"暂不支持").concat(o))}else-1!==ct.indexOf(o)?a[o]=ut(t,e[o],i):r||(a[o]=e[o]);return a}return v(e)&&(e=ut(t,e,i)),e}function pt(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];return v(ot.returnValue)&&(e=ot.returnValue(t,e)),ht(t,e,n,{},i)}function ft(t,e){if(m(ot,t)){var n=ot[t];return n?function(e,i){var r=n;v(n)&&(r=n(e)),e=ht(t,e,r.args,r.returnValue);var a=[e];"undefined"!==typeof i&&a.push(i);var o=wx[r.name||t].apply(wx,a);return q(t)?pt(t,o,r.returnValue,V(t)):o}:function(){console.error("app-plus 暂不支持".concat(t))}}return e}var dt=Object.create(null),gt=["onTabBarMidButtonTap","subscribePush","unsubscribePush","onPush","offPush","share"];function vt(t){return function(e){var n=e.fail,i=e.complete,r={errMsg:"".concat(t,":fail:暂不支持 ").concat(t," 方法")};v(n)&&n(r),v(i)&&i(r)}}gt.forEach(function(t){dt[t]=vt(t)});var yt=function(){return"function"===typeof getUniEmitter?getUniEmitter:function(){return t||(t=new i.default),t};var t}();function xt(t,e,n){return t[e].apply(t,n)}function mt(){return xt(yt(),"$on",Array.prototype.slice.call(arguments))}function _t(){return xt(yt(),"$off",Array.prototype.slice.call(arguments))}function bt(){return xt(yt(),"$once",Array.prototype.slice.call(arguments))}function At(){return xt(yt(),"$emit",Array.prototype.slice.call(arguments))}var wt=Object.freeze({__proto__:null,$on:mt,$off:_t,$once:bt,$emit:At});function St(t){return"undefined"!==typeof weex?weex.requireModule(t):__requireNativePlugin__(t)}function Tt(t){t.$processed=!0,t.postMessage=function(e){plus.webview.postMessageToUniNView({type:"UniAppSubNVue",data:e},t.id)};var e=[];if(t.onMessage=function(t){e.push(t)},t.$consumeMessage=function(t){e.forEach(function(e){return e(t)})},t.__uniapp_mask_id){var n=t.__uniapp_mask,i="0"===t.__uniapp_mask_id?{setStyle:function(t){var e=t.mask;St("uni-tabview").setMask({color:e})}}:plus.webview.getWebviewById(t.__uniapp_mask_id),r=t.show,a=t.hide,o=t.close,s=function(){i.setStyle({mask:n})},l=function(){i.setStyle({mask:"none"})};t.show=function(){s();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return r.apply(t,n)},t.hide=function(){l();for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];return a.apply(t,n)},t.close=function(){l(),e=[];for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return o.apply(t,i)}}}function Pt(t){var e=plus.webview.getWebviewById(t);return e&&!e.$processed&&Tt(e),e}var kt=Object.freeze({__proto__:null,getSubNVueById:Pt,requireNativePlugin:St}),Dt=Page,Ct=Component,Ot=/:/g,Mt=b(function(t){return w(t.replace(Ot,"-"))});function Lt(t){if(wx.canIUse("nextTick")){var e=t.triggerEvent;t.triggerEvent=function(n){for(var i=arguments.length,r=new Array(i>1?i-1:0),a=1;a<i;a++)r[a-1]=arguments[a];return e.apply(t,[Mt(n)].concat(r))}}}function Rt(t,e){var n=e[t];e[t]=n?function(){Lt(this);for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return n.apply(this,e)}:function(){Lt(this)}}Page=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("onLoad",t),Dt(t)},Component=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Rt("created",t),Ct(t)};var $t=["onPullDownRefresh","onReachBottom","onShareAppMessage","onPageScroll","onResize","onTabItemTap"];function Et(t,e){var n=t.$mp[t.mpType];e.forEach(function(e){m(n,e)&&(t[e]=n[e])})}function Ft(t,e){if(!e)return!0;if(i.default.options&&Array.isArray(i.default.options[t]))return!0;if(e=e.default||e,v(e))return!!v(e.extendOptions[t])||!!(e.super&&e.super.options&&Array.isArray(e.super.options[t]));if(v(e[t]))return!0;var n=e.mixins;return Array.isArray(n)?!!n.find(function(e){return Ft(t,e)}):void 0}function It(t,e,n){e.forEach(function(e){Ft(e,n)&&(t[e]=function(t){return this.$vm&&this.$vm.__call_hook(e,t)})})}function jt(t,e){var n;return e=e.default||e,v(e)?(n=e,e=n.extendOptions):n=t.extend(e),[n,e]}function Nt(t,e){if(Array.isArray(e)&&e.length){var n=Object.create(null);e.forEach(function(t){n[t]=!0}),t.$scopedSlots=t.$slots=n}}function Bt(t,e){t=(t||"").split(",");var n=t.length;1===n?e._$vueId=t[0]:2===n&&(e._$vueId=t[0],e._$vuePid=t[1])}function zt(t,e){var n=t.data||{},i=t.methods||{};if("function"===typeof n)try{n=n.call(e)}catch(r){Object({VUE_APP_PLATFORM:"app-plus",NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_DEBUG&&console.warn("根据 Vue 的 data 函数初始化小程序 data 失败，请尽量确保 data 函数中不访问 vm 对象，否则可能影响首次数据渲染速度。",n)}else try{n=JSON.parse(JSON.stringify(n))}catch(r){}return x(n)||(n={}),Object.keys(i).forEach(function(t){-1!==e.__lifecycle_hooks__.indexOf(t)||m(n,t)||(n[t]=i[t])}),n}var Wt=[String,Number,Boolean,Object,Array,null];function Ht(t){return function(e,n){this.$vm&&(this.$vm[t]=e)}}function Ut(t,e){var n=t["behaviors"],i=t["extends"],r=t["mixins"],a=t["props"];a||(t["props"]=a=[]);var o=[];return Array.isArray(n)&&n.forEach(function(t){o.push(t.replace("uni://","wx".concat("://"))),"uni://form-field"===t&&(Array.isArray(a)?(a.push("name"),a.push("value")):(a["name"]={type:String,default:""},a["value"]={type:[String,Number,Boolean,Array,Object,Date],default:""}))}),x(i)&&i.props&&o.push(e({properties:qt(i.props,!0)})),Array.isArray(r)&&r.forEach(function(t){x(t)&&t.props&&o.push(e({properties:qt(t.props,!0)}))}),o}function Vt(t,e,n,i){return Array.isArray(e)&&1===e.length?e[0]:e}function qt(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=(arguments.length>2&&void 0!==arguments[2]&&arguments[2],{});return e||(n.vueId={type:String,value:""},n.vueSlots={type:null,value:[],observer:function(t,e){var n=Object.create(null);t.forEach(function(t){n[t]=!0}),this.setData({$slots:n})}}),Array.isArray(t)?t.forEach(function(t){n[t]={type:null,observer:Ht(t)}}):x(t)&&Object.keys(t).forEach(function(e){var i=t[e];if(x(i)){var r=i["default"];v(r)&&(r=r()),i.type=Vt(e,i.type),n[e]={type:-1!==Wt.indexOf(i.type)?i.type:null,value:r,observer:Ht(e)}}else{var a=Vt(e,i);n[e]={type:-1!==Wt.indexOf(a)?a:null,observer:Ht(e)}}}),n}function Gt(t){try{t.mp=JSON.parse(JSON.stringify(t))}catch(e){}return t.stopPropagation=_,t.preventDefault=_,t.target=t.target||{},m(t,"detail")||(t.detail={}),x(t.detail)&&(t.target=Object.assign({},t.target,t.detail)),t}function Xt(t,e){var n=t;return e.forEach(function(e){var i=e[0],r=e[2];if(i||"undefined"!==typeof r){var a=e[1],o=e[3],s=i?t.__get_value(i,n):n;Number.isInteger(s)?n=r:a?Array.isArray(s)?n=s.find(function(e){return t.__get_value(a,e)===r}):x(s)?n=Object.keys(s).find(function(e){return t.__get_value(a,s[e])===r}):console.error("v-for 暂不支持循环数据：",s):n=s[r],o&&(n=t.__get_value(o,n))}}),n}function Jt(t,e,n){var i={};return Array.isArray(e)&&e.length&&e.forEach(function(e,r){"string"===typeof e?e?"$event"===e?i["$"+r]=n:0===e.indexOf("$event.")?i["$"+r]=t.__get_value(e.replace("$event.",""),n):i["$"+r]=t.__get_value(e):i["$"+r]=t:i["$"+r]=Xt(t,e)}),i}function Kt(t){for(var e={},n=1;n<t.length;n++){var i=t[n];e[i[0]]=i[1]}return e}function Qt(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:[],r=arguments.length>4?arguments[4]:void 0,a=arguments.length>5?arguments[5]:void 0,o=!1;if(r&&(o=e.currentTarget&&e.currentTarget.dataset&&"wx"===e.currentTarget.dataset.comType,!n.length))return o?[e]:e.detail.__args__||e.detail;var s=Jt(t,i,e),l=[];return n.forEach(function(t){"$event"===t?"__set_model"!==a||r?r&&!o?l.push(e.detail.__args__[0]):l.push(e):l.push(e.target.value):Array.isArray(t)&&"o"===t[0]?l.push(Kt(t)):"string"===typeof t&&m(s,t)?l.push(s[t]):l.push(t)}),l}var Yt="~",Zt="^";function te(t,e){return t===e||"regionchange"===e&&("begin"===t||"end"===t)}function ee(t){var e=this;t=Gt(t);var n=(t.currentTarget||t.target).dataset;if(!n)return console.warn("事件信息不存在");var i=n.eventOpts||n["event-opts"];if(!i)return console.warn("事件信息不存在");var r=t.type,a=[];return i.forEach(function(n){var i=n[0],o=n[1],s=i.charAt(0)===Zt;i=s?i.slice(1):i;var l=i.charAt(0)===Yt;i=l?i.slice(1):i,o&&te(r,i)&&o.forEach(function(n){var i=n[0];if(i){var r=e.$vm;if(r.$options.generic&&r.$parent&&r.$parent.$parent&&(r=r.$parent.$parent),"$emit"===i)return void r.$emit.apply(r,Qt(e.$vm,t,n[1],n[2],s,i));var o=r[i];if(!v(o))throw new Error(" _vm.".concat(i," is not a function"));if(l){if(o.once)return;o.once=!0}a.push(o.apply(r,Qt(e.$vm,t,n[1],n[2],s,i)))}})}),"input"===r&&1===a.length&&"undefined"!==typeof a[0]?a[0]:void 0}var ne=["onShow","onHide","onError","onPageNotFound"];function ie(t,e){var n=e.mocks,r=e.initRefs;t.$options.store&&(i.default.prototype.$store=t.$options.store),i.default.prototype.mpHost="app-plus",i.default.mixin({beforeCreate:function(){this.$options.mpType&&(this.mpType=this.$options.mpType,this.$mp=c({data:{}},this.mpType,this.$options.mpInstance),this.$scope=this.$options.mpInstance,delete this.$options.mpType,delete this.$options.mpInstance,"app"!==this.mpType&&(r(this),Et(this,n)))}});var a={onLaunch:function(e){this.$vm||(this.$vm=t,this.$vm.$mp={app:this},this.$vm.$scope=this,this.$vm.globalData=this.globalData,this.$vm._isMounted=!0,this.$vm.__call_hook("mounted",e),this.$vm.__call_hook("onLaunch",e))}};a.globalData=t.$options.globalData||{};var o=t.$options.methods;return o&&Object.keys(o).forEach(function(t){a[t]=o[t]}),It(a,ne),a}var re=["__route__","__wxExparserNodeId__","__wxWebviewId__"];function ae(t,e){for(var n,i=t.$children,r=i.length-1;r>=0;r--){var a=i[r];if(a.$scope._$vueId===e)return a}for(var o=i.length-1;o>=0;o--)if(n=ae(i[o],e),n)return n}function oe(t){return Behavior(t)}function se(){return!!this.route}function le(t){this.triggerEvent("__l",t)}function ce(t){var e=t.$scope;Object.defineProperty(t,"$refs",{get:function(){var t={},n=e.selectAllComponents(".vue-ref");n.forEach(function(e){var n=e.dataset.ref;t[n]=e.$vm||e});var i=e.selectAllComponents(".vue-ref-in-for");return i.forEach(function(e){var n=e.dataset.ref;t[n]||(t[n]=[]),t[n].push(e.$vm||e)}),t}})}function ue(t){var e,n=t.detail||t.value,i=n.vuePid,r=n.vueOptions;i&&(e=ae(this.$vm,i)),e||(e=this.$vm),r.parent=e}function he(t){return ie(t,{mocks:re,initRefs:ce})}var pe=["onUniNViewMessage"];function fe(t){var e=he(t);return It(e,pe),e}function de(t){return App(fe(t)),t}function ge(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.isPage,r=e.initRelation,o=jt(i.default,t),s=a(o,2),l=s[0],c=s[1],u={multipleSlots:!0,addGlobalClass:!0},h={options:u,data:zt(c,i.default.prototype),behaviors:Ut(c,oe),properties:qt(c.props,!1,c.__file),lifetimes:{attached:function(){var t=this.properties,e={mpType:n.call(this)?"page":"component",mpInstance:this,propsData:t};Bt(t.vueId,this),r.call(this,{vuePid:this._$vuePid,vueOptions:e}),this.$vm=new l(e),Nt(this.$vm,t.vueSlots),this.$vm.$mount()},ready:function(){this.$vm&&(this.$vm._isMounted=!0,this.$vm.__call_hook("mounted"),this.$vm.__call_hook("onReady"))},detached:function(){this.$vm.$destroy()}},pageLifetimes:{show:function(t){this.$vm&&this.$vm.__call_hook("onPageShow",t)},hide:function(){this.$vm&&this.$vm.__call_hook("onPageHide")},resize:function(t){this.$vm&&this.$vm.__call_hook("onPageResize",t)}},methods:{__l:ue,__e:ee}};return Array.isArray(c.wxsCallMethods)&&c.wxsCallMethods.forEach(function(t){h.methods[t]=function(e){return this.$vm[t](e)}}),n?h:[h,l]}function ve(t){return ge(t,{isPage:se,initRelation:le})}function ye(t){var e=ve(t);return e.methods.$getAppWebview=function(){return plus.webview.getWebviewById("".concat(this.__wxWebviewId__))},e}var xe=["onShow","onHide","onUnload"];function me(t,e){e.isPage,e.initRelation;var n=ye(t);return It(n.methods,xe,t),n.methods.onLoad=function(t){this.$vm.$mp.query=t,this.$vm.__call_hook("onLoad",t)},n}function _e(t){return me(t,{isPage:se,initRelation:le})}xe.push.apply(xe,$t);var be=["onBackPress","onNavigationBarButtonTap","onNavigationBarSearchInputChanged","onNavigationBarSearchInputConfirmed","onNavigationBarSearchInputClicked"];function Ae(t){var e=_e(t);return It(e.methods,be),e}function we(t){return Component(Ae(t))}function Se(t){return Component(ye(t))}st.forEach(function(t){ot[t]=!1}),lt.forEach(function(t){var e=ot[t]&&ot[t].name?ot[t].name:t;wx.canIUse(e)||(ot[t]=!1)});var Te={};Object.keys(at).forEach(function(t){Te[t]=at[t]}),Object.keys(wt).forEach(function(t){Te[t]=wt[t]}),Object.keys(kt).forEach(function(t){Te[t]=K(t,kt[t])}),Object.keys(wx).forEach(function(t){(m(wx,t)||m(ot,t))&&(Te[t]=K(t,ft(t,wx[t])))}),"undefined"!==typeof t&&(t.uni=Te,t.UniEmitter=wt),wx.createApp=de,wx.createPage=we,wx.createComponent=Se;var Pe=Te,ke=Pe;e.default=ke}).call(this,n("c8ba"))},7539:function(t,e,n){},"75e1":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=a;r(n("b110"));var i=r(n("b665"));function r(t){return t&&t.__esModule?t:{default:t}}function a(e){var n={wxapp_id:"10001",token:"cd3f5492377469fe601f173dwewe"},r=new Promise(function(r,a){t.uploadFile({url:i.default.conductApi+"ax.upload/image",filePath:e,name:"iFile",formData:n,success:function(t){r(t.data)},fail:function(t){a(t)}})});return r}}).call(this,n("6e42")["default"])},"76f3":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={uploadImage:"upload/image",login:"ax.user/login",decryptByMobile:"axapp.center/decryptByMobile",mobileBind:"axapp.center/mobileBind",sendcode:"axapp.center/sendcode",homebanners:"axumi.homebanner/gethomebanners",recomList:"axumi.article/recomList",focusList:"axumi.article/focusList",newList:"axumi.article/list",articleRelease:"axumi.article/release",articleDetail:"axumi.article/detail",articleDelete:"axumi.article/delete",articleAddComment:"axumi.article/addcomments",articleLike:"axumi.article/like",articleunLike:"axumi.article/unLike",articleCollect:"axumi.article/collection",articleunCollect:"axumi.article/unCollection",articleShare:"axumi.article/articleShare",articleFocus:"axumi.article/focus",articleunFocus:"axumi.article/unFocus",commentreply:"axumi.article/commentreply",commentLike:"axumi.article/commentlike",commentUnlike:"axumi.article/commentunlike",commentReplyLike:"axumi.article/commentreplylike",commentreplyunlike:"axumi.article/commentreplyunlike",axstoreLists:"axstore.shop/lists",axstoreDetail:"axstore.shop/detail",axhomeBanners:"axstore.homebanner/gethomebanners",storeLists:"axstore.group/lists",groupDetail:"axstore.group/detail",integralIndex:"ax.goods/goodsList",goodDetail:"ax.goods/detail",buyNow:"ax.order/buyNow",buyNowinventory:"ax.order/buyNowinventory",integralLogs:"axapp.center/integralLogs",lists:"axapp.center/lists",userIntegralDetails:"axapp.center/userIntegralDetails",userIntegralDetailsByDay:"axapp.center/userIntegralDetailsByDay",userExperienceDetailsByDay:"axapp.center/userExperienceDetailsByDay",userExperienceDetails:"axapp.center/userExperienceDetails",orderDetail:"axuser.order/detail",clockInPage:"axumi.article/clockInPage",signIn:"axapp.center/signIn",setpCount:"ax.user_stepcount/add",getFootCount:"ax.user_stepcount/stepCountPage",receiveIntegral:"ax.user_stepcount/receiveIntegral",userInfo:"axapp.center/userHomePage",couponCenter:"ax.coupon/couponCenter",couponBanners:"ax.coupon/gethomebanners",myCoupon:"axuser.coupon/lists",receiveCoupon:"axuser.coupon/receive",couponDetail:"axuser.coupon/couponDetails",getUserInfo:"axapp.center/getuserinfo",editInfo:"axapp.center/modifypersonalinfo",editSign:"axapp.center/modifyWxUserInfo",addressLists:"ax.address/lists",addressDetail:"ax.address/detail",addAddress:"ax.address/add",editAddress:"ax.address/edit",setDefault:"ax.address/setDefault",delAddress:"ax.address/delete",setTags:"ax.address/setTags",tagsList:"ax.address/tagsList",editTags:"ax.address/editTags",merchantsPage:"ax.merchants/merchantsPage",userCouponDetails:"ax.merchants/userCouponDetails",confirmUseCoupon:"ax.merchants/confirmUseCoupon",useCouponList:"ax.merchants/useCouponList",couponStatistics:"ax.merchants/couponStatistics"};e.default=i},8189:function(t){t.exports={_from:"@dcloudio/uni-stat@alpha",_id:"@dcloudio/uni-stat@2.0.0-alpha-25120200103005",_inBundle:!1,_integrity:"sha512-nYoIrRV2e5o/vzr6foSdWi3Rl2p0GuO+LPY3JctyY6uTKgPnuH99d7aL/QQdJ1SacQjBWO+QGK1qankN7oyrWw==",_location:"/@dcloudio/uni-stat",_phantomChildren:{},_requested:{type:"tag",registry:!0,raw:"@dcloudio/uni-stat@alpha",name:"@dcloudio/uni-stat",escapedName:"@dcloudio%2funi-stat",scope:"@dcloudio",rawSpec:"alpha",saveSpec:null,fetchSpec:"alpha"},_requiredBy:["#USER","/","/@dcloudio/vue-cli-plugin-uni"],_resolved:"https://registry.npmjs.org/@dcloudio/uni-stat/-/uni-stat-2.0.0-alpha-25120200103005.tgz",_shasum:"a77a63481f36474f3e86686868051219d1bb12df",_spec:"@dcloudio/uni-stat@alpha",_where:"/Users/guoshengqiang/Documents/dcloud-plugins/alpha/uniapp-cli",author:"",bugs:{url:"https://github.com/dcloudio/uni-app/issues"},bundleDependencies:!1,deprecated:!1,description:"",devDependencies:{"@babel/core":"^7.5.5","@babel/preset-env":"^7.5.5",eslint:"^6.1.0",rollup:"^1.19.3","rollup-plugin-babel":"^4.3.3","rollup-plugin-clear":"^2.0.7","rollup-plugin-commonjs":"^10.0.2","rollup-plugin-copy":"^3.1.0","rollup-plugin-eslint":"^7.0.0","rollup-plugin-json":"^4.0.0","rollup-plugin-node-resolve":"^5.2.0","rollup-plugin-replace":"^2.2.0","rollup-plugin-uglify":"^6.0.2"},files:["dist","package.json","LICENSE"],gitHead:"6be187a3dfe15f95dd6146d9fec08e1f81100987",homepage:"https://github.com/dcloudio/uni-app#readme",license:"Apache-2.0",main:"dist/index.js",name:"@dcloudio/uni-stat",repository:{type:"git",url:"git+https://github.com/dcloudio/uni-app.git",directory:"packages/uni-stat"},scripts:{build:"NODE_ENV=production rollup -c rollup.config.js",dev:"NODE_ENV=development rollup -w -c rollup.config.js"},version:"2.0.0-alpha-25120200103005"}},"8ce3":function(t,e,n){"use strict";t.exports=["upload/image","axumi.article/release","axumi.article/delete","axumi.article/addcomments","axumi.article/focusList","axumi.article/like","axumi.article/unLike","axumi.article/collection","axumi.article/unCollection","axumi.article/focus","axumi.article/unFocus","axumi.article/commentreply","axumi.article/commentlike","axumi.article/commentunlike","axumi.article/commentreplylike","axumi.article/commentreplyunlike","ax.order/buyNow","ax.order/buyNowinventory","axapp.center/integralLogs","axapp.center/lists","axapp.center/userIntegralDetails","axapp.center/userIntegralDetailsByDay","axapp.center/userExperienceDetailsByDay","axumi.article/clockInPage","axapp.center/signIn","axapp.center/getuserinfo"]},"90dd":function(t,e,n){"use strict";(function(e,n){var i={yAxisWidth:15,yAxisSplit:5,xAxisHeight:15,xAxisLineHeight:15,legendHeight:15,yAxisTitleWidth:15,padding:[10,10,10,10],pixelRatio:1,rotate:!1,columePadding:3,fontSize:13,dataPointShape:["circle","circle","circle","circle"],colors:["#1890ff","#2fc25b","#facc14","#f04864","#8543e0","#90ed7d"],pieChartLinePadding:15,pieChartTextPadding:5,xAxisTextPadding:3,titleColor:"#333333",titleFontSize:20,subtitleColor:"#999999",subtitleFontSize:15,toolTipPadding:3,toolTipBackground:"#000000",toolTipOpacity:.7,toolTipLineHeight:20,radarLabelTextMargin:15,gaugeLabelTextMargin:15},r=function(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),i=1;i<e;i++)n[i-1]=arguments[i];if(null==t)throw new TypeError("Cannot convert undefined or null to object");if(!n||n.length<=0)return t;function r(t,e){for(var n in e)t[n]=t[n]&&"[object Object]"===t[n].toString()?r(t[n],e[n]):t[n]=e[n];return t}return n.forEach(function(e){t=r(t,e)}),t},a={toFixed:function(t,e){return e=e||2,this.isFloat(t)&&(t=t.toFixed(e)),t},isFloat:function(t){return t%1!==0},approximatelyEqual:function(t,e){return Math.abs(t-e)<1e-10},isSameSign:function(t,e){return Math.abs(t)===t&&Math.abs(e)===e||Math.abs(t)!==t&&Math.abs(e)!==e},isSameXCoordinateArea:function(t,e){return this.isSameSign(t.x,e.x)},isCollision:function(t,e){t.end={},t.end.x=t.start.x+t.width,t.end.y=t.start.y-t.height,e.end={},e.end.x=e.start.x+e.width,e.end.y=e.start.y-e.height;var n=e.start.x>t.end.x||e.end.x<t.start.x||e.end.y>t.start.y||e.start.y<t.end.y;return!n}};function o(t,e){var n=/^#?([a-f\d])([a-f\d])([a-f\d])$/i,i=t.replace(n,function(t,e,n,i){return e+e+n+n+i+i}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(i),a=parseInt(r[1],16),o=parseInt(r[2],16),s=parseInt(r[3],16);return"rgba("+a+","+o+","+s+","+e+")"}function s(t,e,n){if(isNaN(t))throw new Error("[uCharts] unvalid series data!");n=n||10,e=e||"upper";var i=1;while(n<1)n*=10,i*=10;t="upper"===e?Math.ceil(t*i):Math.floor(t*i);while(t%n!==0)"upper"===e?t++:t--;return t/i}function l(t,e,n,i){for(var r=[],a=0;a<t.length;a++){for(var o={data:[],name:e[a],color:n[a]},s=0,l=i.length;s<l;s++)if(s<t[a])o.data.push(null);else{for(var c=0,u=0;u<t[a];u++)c+=i[s-u][1];o.data.push(+(c/t[a]).toFixed(3))}r.push(o)}return r}function c(t,e,n,i,r){var a=r.width-r.area[1]-r.area[3],o=n.eachSpacing*(r.chartData.xAxisData.xAxisPoints.length-1),s=e;return e>=0?(s=0,t.event.trigger("scrollLeft")):Math.abs(e)>=o-a&&(s=a-o,t.event.trigger("scrollRight")),s}function u(t,e,n){function i(t){while(t<0)t+=2*Math.PI;while(t>2*Math.PI)t-=2*Math.PI;return t}return t=i(t),e=i(e),n=i(n),e>n&&(n+=2*Math.PI,t<e&&(t+=2*Math.PI)),t>=e&&t<=n}function h(t,e,n){var i=t,r=n-e,a=i+(n-r-i)/Math.sqrt(2);a*=-1;var o=(n-r)*(Math.sqrt(2)-1)-(n-r-i)/Math.sqrt(2);return{transX:a,transY:o}}function p(t,e){function n(t,e){return!(!t[e-1]||!t[e+1])&&(t[e].y>=Math.max(t[e-1].y,t[e+1].y)||t[e].y<=Math.min(t[e-1].y,t[e+1].y))}var i=.2,r=.2,a=null,o=null,s=null,l=null;if(e<1?(a=t[0].x+(t[1].x-t[0].x)*i,o=t[0].y+(t[1].y-t[0].y)*i):(a=t[e].x+(t[e+1].x-t[e-1].x)*i,o=t[e].y+(t[e+1].y-t[e-1].y)*i),e>t.length-3){var c=t.length-1;s=t[c].x-(t[c].x-t[c-1].x)*r,l=t[c].y-(t[c].y-t[c-1].y)*r}else s=t[e+1].x-(t[e+2].x-t[e].x)*r,l=t[e+1].y-(t[e+2].y-t[e].y)*r;return n(t,e+1)&&(l=t[e+1].y),n(t,e)&&(o=t[e].y),(o>=Math.max(t[e].y,t[e+1].y)||o<=Math.min(t[e].y,t[e+1].y))&&(o=t[e].y),(l>=Math.max(t[e].y,t[e+1].y)||l<=Math.min(t[e].y,t[e+1].y))&&(l=t[e+1].y),{ctrA:{x:a,y:o},ctrB:{x:s,y:l}}}function f(t,e,n){return{x:n.x+t,y:n.y-e}}function d(t,e){if(e)while(a.isCollision(t,e))t.start.x>0?t.start.y--:t.start.x<0?t.start.y++:t.start.y>0?t.start.y++:t.start.y--;return t}function g(t,e,n){var i=0;return t.map(function(t){if(t.color||(t.color=n.colors[i],i=(i+1)%n.colors.length),t.index||(t.index=0),t.type||(t.type=e.type),"undefined"==typeof t.show&&(t.show=!0),t.type||(t.type=e.type),t.pointShape||(t.pointShape="circle"),!t.legendShape)switch(t.type){case"line":t.legendShape="line";break;case"column":t.legendShape="rect";break;case"area":t.legendShape="triangle";break;default:t.legendShape="circle"}return t})}function v(t,e){var n=0,i=e-t;return n=i>=1e4?1e3:i>=1e3?100:i>=100?10:i>=10?5:i>=1?1:i>=.1?.1:i>=.01?.01:i>=.001?.001:i>=1e-4?1e-4:i>=1e-5?1e-5:1e-6,{minRange:s(t,"lower",n),maxRange:s(e,"upper",n)}}function y(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i.fontSize;t=String(t);t=t.split("");for(var n=0,r=0;r<t.length;r++){var a=t[r];/[a-zA-Z]/.test(a)?n+=7:/[0-9]/.test(a)?n+=5.5:/\./.test(a)?n+=2.7:/-/.test(a)?n+=3.25:/[\u4e00-\u9fa5]/.test(a)?n+=10:/\(|\)/.test(a)?n+=3.73:/\s/.test(a)?n+=2.5:/%/.test(a)?n+=8:n+=10}return n*e/10}function x(t){return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data)},[])}function m(t,e){for(var n=new Array(e),i=0;i<n.length;i++)n[i]=0;for(var r=0;r<t.length;r++)for(i=0;i<n.length;i++)n[i]+=t[r].data[i];return t.reduce(function(t,e){return(t.data?t.data:t).concat(e.data).concat(n)},[])}function _(t,e,n){var i,r;return t.clientX?e.rotate?(r=e.height-t.clientX*e.pixelRatio,i=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):(i=t.clientX*e.pixelRatio,r=(t.pageY-n.currentTarget.offsetTop-e.height/e.pixelRatio/2*(e.pixelRatio-1))*e.pixelRatio):e.rotate?(r=e.height-t.x*e.pixelRatio,i=t.y*e.pixelRatio):(i=t.x*e.pixelRatio,r=t.y*e.pixelRatio),{x:i,y:r}}function b(t,e){for(var n=[],i=0;i<t.length;i++){var r=t[i];if(null!==r.data[e]&&"undefined"!==typeof r.data[e]&&r.show){var a={};a.color=r.color,a.type=r.type,a.style=r.style,a.pointShape=r.pointShape,a.disableLegend=r.disableLegend,a.name=r.name,a.show=r.show,a.data=r.format?r.format(r.data[e]):r.data[e],n.push(a)}}return n}function A(t){var e=t.map(function(t){return y(t)});return Math.max.apply(null,e)}function w(t){for(var e=2*Math.PI/t,n=[],i=0;i<t;i++)n.push(e*i);return n.map(function(t){return-1*t+Math.PI/2})}function S(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){var e=[];return e=i||t.data,{text:r.format?r.format(t,e[n]):t.name+": "+t.data,color:t.color}}),o=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&o.push(c[n])}for(var u=0;u<o.length;u++){var h=o[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=o.length,{textList:a,offset:s}}function T(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:{},a=t.map(function(t){return{text:r.format?r.format(t,i[n]):t.name+": "+t.data,color:t.color,disableLegend:!!t.disableLegend}});a=a.filter(function(t){if(!0!==t.disableLegend)return t});for(var o=[],s={x:0,y:0},l=0;l<e.length;l++){var c=e[l];"undefined"!==typeof c[n]&&null!==c[n]&&o.push(c[n])}for(var u=0;u<o.length;u++){var h=o[u];s.x=Math.round(h.x),s.y+=h.y}return s.y/=o.length,{textList:a,offset:s}}function P(t,e,n,i,r,a){arguments.length>6&&void 0!==arguments[6]&&arguments[6];var o=a.color.upFill,s=a.color.downFill,l=[o,o,s,o],c=[],u={text:r[i],color:null};c.push(u),e.map(function(e){0==i&&e.data[1]-e.data[0]<0?l[1]=s:(e.data[0]<t[i-1][1]&&(l[0]=s),e.data[1]<e.data[0]&&(l[1]=s),e.data[2]>t[i-1][1]&&(l[2]=o),e.data[3]<t[i-1][1]&&(l[3]=s));var n={text:"开盘："+e.data[0],color:l[0]},r={text:"收盘："+e.data[1],color:l[1]},a={text:"最低："+e.data[2],color:l[2]},u={text:"最高："+e.data[3],color:l[3]};c.push(n,r,a,u)});for(var h=[],p={x:0,y:0},f=0;f<n.length;f++){var d=n[f];"undefined"!==typeof d[i]&&null!==d[i]&&h.push(d[i])}return p.x=Math.round(h[0][0].x),{textList:c,offset:p}}function k(t){for(var e=[],n=0;n<t.length;n++)1==t[n].show&&e.push(t[n]);return e}function D(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,a=-1,o=0,s=[],l=0;l<e[0].length;l++)s.push(e[0][l].x);return"line"!=n.type&&"area"!=n.type||"justify"!=n.xAxis.boundaryGap||(o=n.chartData.eachSpacing/2),n.categories||(o=0),M(t,n,i)&&s.forEach(function(e,n){t.x+r+o>e&&(a=n)}),a}function C(t,e,n){var i=-1;if(O(t,e.area)){for(var r=e.points,a=-1,o=0,s=r.length;o<s;o++)for(var l=r[o],c=0;c<l.length;c++){a+=1;var u=l[c]["area"];if(t.x>u[0]&&t.x<u[2]&&t.y>u[1]&&t.y<u[3]){i=a;break}}return i}return i}function O(t,e){return t.x>e.start.x&&t.x<e.end.x&&t.y>e.start.y&&t.y<e.end.y}function M(t,e,n){return t.x<=e.width-e.area[1]+10&&t.x>=e.area[3]-10&&t.y>=e.area[0]&&t.y<=e.height-e.area[2]}function L(t,e,n){var i=2*Math.PI/n,r=-1;if(I(t,e.center,e.radius)){var a=function(t){return t<0&&(t+=2*Math.PI),t>2*Math.PI&&(t-=2*Math.PI),t},o=Math.atan2(e.center.y-t.y,t.x-e.center.x);o*=-1,o<0&&(o+=2*Math.PI);var s=e.angleList.map(function(t){return t=a(-1*t),t});s.forEach(function(t,e){var n=a(t-i/2),s=a(t+i/2);s<n&&(s+=2*Math.PI),(o>=n&&o<=s||o+2*Math.PI>=n&&o+2*Math.PI<=s)&&(r=e)})}return r}function R(t,e){for(var n=-1,i=0,r=e.series.length;i<r;i++){var a=e.series[i];if(t.x>a.funnelArea[0]&&t.x<a.funnelArea[2]&&t.y>a.funnelArea[1]&&t.y<a.funnelArea[3]){n=i;break}}return n}function $(t,e){for(var n=-1,i=0,r=e.length;i<r;i++){var a=e[i];if(t.x>a.area[0]&&t.x<a.area[2]&&t.y>a.area[1]&&t.y<a.area[3]){n=i;break}}return n}function E(t,e){for(var n=-1,i=e.chartData.mapData,r=e.series,a=Nt(t.y,t.x,i.bounds,i.scale,i.xoffset,i.yoffset),o=[a.x,a.y],s=0,l=r.length;s<l;s++){var c=r[s].geometry.coordinates;if(zt(o,c)){n=s;break}}return n}function F(t,e){var n=-1;if(I(t,e.center,e.radius)){var i=Math.atan2(e.center.y-t.y,t.x-e.center.x);i=-i;for(var r=0,a=e.series.length;r<a;r++){var o=e.series[r];if(u(i,o._start_,o._start_+2*o._proportion_*Math.PI)){n=r;break}}}return n}function I(t,e,n){return Math.pow(t.x-e.x,2)+Math.pow(t.y-e.y,2)<=Math.pow(n,2)}function j(t){var e=[],n=[];return t.forEach(function(t,i){null!==t?n.push(t):(n.length&&e.push(n),n=[])}),n.length&&e.push(n),e}function N(t,e,n,i){var r={area:{start:{x:0,y:0},end:{x:0,y:0},width:0,height:0,wholeWidth:0,wholeHeight:0},points:[],widthArr:[],heightArr:[]};if(!1===e.legend.show)return i.legendData=r,r;var a=e.legend.padding,o=e.legend.margin,s=e.legend.fontSize,l=15*e.pixelRatio,c=5*e.pixelRatio,u=Math.max(e.legend.lineHeight*e.pixelRatio,s);if("top"==e.legend.position||"bottom"==e.legend.position){for(var h=[],p=0,f=[],d=[],g=0;g<t.length;g++){var v=t[g],x=l+c+y(v.name||"undefined",s)+e.legend.itemGap;p+x>e.width-e.padding[1]-e.padding[3]?(h.push(d),f.push(p-e.legend.itemGap),p=x,d=[v]):(p+=x,d.push(v))}if(d.length){h.push(d),f.push(p-e.legend.itemGap),r.widthArr=f;var m=Math.max.apply(null,f);switch(e.legend.float){case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+2*a;break;case"right":r.area.start.x=e.width-e.padding[1]-m-2*a,r.area.end.x=e.width-e.padding[1];break;default:r.area.start.x=(e.width-m)/2-a,r.area.end.x=(e.width+m)/2+a}r.area.width=m+2*a,r.area.wholeWidth=m+2*a,r.area.height=h.length*u+2*a,r.area.wholeHeight=h.length*u+2*a+2*o,r.points=h}}else{var _=t.length,b=e.height-e.padding[0]-e.padding[2]-2*o-2*a,A=Math.min(Math.floor(b/u),_);switch(r.area.height=A*u+2*a,r.area.wholeHeight=A*u+2*a,e.legend.float){case"top":r.area.start.y=e.padding[0]+o,r.area.end.y=e.padding[0]+o+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-o-r.area.height,r.area.end.y=e.height-e.padding[2]-o;break;default:r.area.start.y=(e.height-r.area.height)/2,r.area.end.y=(e.height+r.area.height)/2}for(var w=_%A===0?_/A:Math.floor(_/A+1),S=[],T=0;T<w;T++){var P=t.slice(T*A,T*A+A);S.push(P)}if(r.points=S,S.length){for(var k=0;k<S.length;k++){for(var D=S[k],C=0,O=0;O<D.length;O++){var M=l+c+y(D[O].name||"undefined",s)+e.legend.itemGap;M>C&&(C=M)}r.widthArr.push(C),r.heightArr.push(D.length*u+2*a)}for(var L=0,R=0;R<r.widthArr.length;R++)L+=r.widthArr[R];r.area.width=L-e.legend.itemGap+2*a,r.area.wholeWidth=r.area.width+a}}switch(e.legend.position){case"top":r.area.start.y=e.padding[0]+o,r.area.end.y=e.padding[0]+o+r.area.height;break;case"bottom":r.area.start.y=e.height-e.padding[2]-r.area.height-o,r.area.end.y=e.height-e.padding[2]-o;break;case"left":r.area.start.x=e.padding[3],r.area.end.x=e.padding[3]+r.area.width;break;case"right":r.area.start.x=e.width-e.padding[1]-r.area.width,r.area.end.x=e.width-e.padding[1];break}return i.legendData=r,r}function B(t,e,n,i){var r={angle:0,xAxisHeight:n.xAxisHeight},a=t.map(function(t){return y(t,e.xAxis.fontSize||n.fontSize)}),o=Math.max.apply(this,a);return 1==e.xAxis.rotateLabel&&o+2*n.xAxisTextPadding>i&&(r.angle=45*Math.PI/180,r.xAxisHeight=2*n.xAxisTextPadding+o*Math.sin(r.angle)),r}function z(t,e,n){var i=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1,r=x(t),a=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){a.push(t)}):a.push(t[0]):a.push(t.value):a.push(t)});var o=0,s=0;if(a.length>0&&(o=Math.min.apply(this,a),s=Math.max.apply(this,a)),i>-1?("number"===typeof e.xAxis.data[i].min&&(o=Math.min(e.xAxis.data[i].min,o)),"number"===typeof e.xAxis.data[i].max&&(s=Math.max(e.xAxis.data[i].max,s))):("number"===typeof e.xAxis.min&&(o=Math.min(e.xAxis.min,o)),"number"===typeof e.xAxis.max&&(s=Math.max(e.xAxis.max,s))),o===s){var l=s||10;s+=l}for(var c=v(o,s),u=c.minRange,h=c.maxRange,p=[],f=(h-u)/e.xAxis.splitNumber,d=0;d<=e.xAxis.splitNumber;d++)p.push(u+f*d);return p}function W(t,e,n){var i={angle:0,xAxisHeight:n.xAxisHeight};i.ranges=z(t,e,n),i.rangesFormat=i.ranges.map(function(t){return t=e.xAxis.format?e.xAxis.format(t):a.toFixed(t,2),t});var r=i.ranges.map(function(t){return t=a.toFixed(t,2),t=e.xAxis.format?e.xAxis.format(Number(t)):t,t});i=Object.assign(i,tt(r,e,n));var o=i.eachSpacing,s=r.map(function(t){return y(t)}),l=Math.max.apply(this,s);return l+2*n.xAxisTextPadding>o&&(i.angle=45*Math.PI/180,i.xAxisHeight=2*n.xAxisTextPadding+l*Math.sin(i.angle)),!0===e.xAxis.disabled&&(i.xAxisHeight=0),i}function H(t,e,n,i,r){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,o=r.extra.radar||{};o.max=o.max||0;for(var s=Math.max(o.max,Math.max.apply(null,x(i))),l=[],c=function(r){var o=i[r],c={};c.color=o.color,c.legendShape=o.legendShape,c.pointShape=o.pointShape,c.data=[],o.data.forEach(function(i,r){var o={};o.angle=t[r],o.proportion=i/s,o.position=f(n*o.proportion*a*Math.cos(o.angle),n*o.proportion*a*Math.sin(o.angle),e),c.data.push(o)}),l.push(c)},u=0;u<i.length;u++)c(u);return l}function U(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,i=0,r=0,a=0;a<t.length;a++){var o=t[a];o.data=null===o.data?0:o.data,i+=o.data}for(var s=0;s<t.length;s++){var l=t[s];l.data=null===l.data?0:l.data,l._proportion_=0===i?1/t.length*n:l.data/i*n,l._radius_=e}for(var c=0;c<t.length;c++){var u=t[c];u._start_=r,r+=2*u._proportion_*Math.PI}return t}function V(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;t=t.sort(function(t,e){return parseInt(e.data)-parseInt(t.data)});for(var i=0;i<t.length;i++)t[i].radius=t[i].data/t[0].data*e*n,t[i]._proportion_=t[i].data/t[0].data;return t.reverse()}function q(t,e,n,i){for(var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=0,o=0,s=[],l=0;l<t.length;l++){var c=t[l];c.data=null===c.data?0:c.data,a+=c.data,s.push(c.data)}for(var u=Math.min.apply(null,s),h=Math.max.apply(null,s),p=i-n,f=0;f<t.length;f++){var d=t[f];d.data=null===d.data?0:d.data,0===a||"area"==e?(d._proportion_=d.data/a*r,d._rose_proportion_=1/t.length*r):(d._proportion_=d.data/a*r,d._rose_proportion_=d.data/a*r),d._radius_=n+p*((d.data-u)/(h-u))}for(var g=0;g<t.length;g++){var v=t[g];v._start_=o,o+=2*v._rose_proportion_*Math.PI}return t}function G(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;1==n&&(n=.999999);for(var i=0;i<t.length;i++){var r=t[i];r.data=null===r.data?0:r.data;var a=void 0;a="circle"==e.type?2:e.endAngle<e.startAngle?2+e.endAngle-e.startAngle:e.startAngle-e.endAngle,r._proportion_=a*r.data*n+e.startAngle,r._proportion_>=2&&(r._proportion_=r._proportion_%2)}return t}function X(t,e,n){for(var i=e-n+1,r=e,a=0;a<t.length;a++)t[a].value=null===t[a].value?0:t[a].value,t[a]._startAngle_=r,t[a]._endAngle_=i*t[a].value+e,t[a]._endAngle_>=2&&(t[a]._endAngle_=t[a]._endAngle_%2),r=t[a]._endAngle_;return t}function J(t,e,n){for(var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,r=0;r<t.length;r++){var a=t[r];if(a.data=null===a.data?0:a.data,"auto"==n.pointer.color){for(var o=0;o<e.length;o++)if(a.data<=e[o].value){a.color=e[o].color;break}}else a.color=n.pointer.color;var s=n.startAngle-n.endAngle+1;a._endAngle_=s*a.data+n.startAngle,a._oldAngle_=n.oldAngle,n.oldAngle<n.endAngle&&(a._oldAngle_+=2),a.data>=n.oldData?a._proportion_=(a._endAngle_-a._oldAngle_)*i+n.oldAngle:a._proportion_=a._oldAngle_-(a._oldAngle_-a._endAngle_)*i,a._proportion_>=2&&(a._proportion_=a._proportion_%2)}return t}function K(t){t=U(t);for(var e=0,n=0;n<t.length;n++){var i=t[n],r=i.format?i.format(+i._proportion_.toFixed(2)):a.toFixed(100*i._proportion_)+"%";e=Math.max(e,y(r))}return e}function Q(t,e,n,i,r,a){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/n),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t.width<=0&&(t.width=1),t.x+=(i+.5-n/2)*t.width,t)})}function Y(t,e,n,i,r,a,o){return t.map(function(t){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),i>0&&(t.width-=2*o),t)})}function Z(t,e,n,i,r,a,o){return t.map(function(t,n){return null===t?null:(t.width=Math.ceil((e-2*r.columePadding)/2),a.extra.column&&a.extra.column.width&&+a.extra.column.width>0&&(t.width=Math.min(t.width,+a.extra.column.width)),t)})}function tt(t,e,n){var i=e.width-e.area[1]-e.area[3],r=e.enableScroll?Math.min(e.xAxis.itemCount,t.length):t.length;("line"==e.type||"area"==e.type)&&r>1&&"justify"==e.xAxis.boundaryGap&&(r-=1);var a=i/r,o=[],s=e.area[3],l=e.width-e.area[1];return t.forEach(function(t,e){o.push(s+e*a)}),"justify"!==e.xAxis.boundaryGap&&(!0===e.enableScroll?o.push(s+t.length*a):o.push(l)),{xAxisPoints:o,startX:s,endX:l,eachSpacing:a}}function et(t,e,n,i,r,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l=[],c=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)l.push(null);else{var u=[];t.forEach(function(t,l){var h={};h.x=i[o]+Math.round(r/2);var p=t.value||t,f=c*(p-e)/(n-e);f*=s,h.y=a.height-Math.round(f)-a.area[2],u.push(h)}),l.push(u)}}),l}function nt(t,e,n,i,r,a,o){var s=arguments.length>7&&void 0!==arguments[7]?arguments[7]:1,l="center";"line"!=a.type&&"area"!=a.type||(l=a.xAxis.boundaryGap);var c=[],u=a.height-a.area[0]-a.area[2],h=a.width-a.area[1]-a.area[3];return t.forEach(function(t,o){if(null===t)c.push(null);else{var p={};p.color=t.color,p.x=i[o];var f,d,g,v=t;if("object"===typeof t&&null!==t)if(t.constructor==Array)f=[].concat(a.chartData.xAxisData.ranges),d=f.shift(),g=f.pop(),v=t[1],p.x=a.area[3]+h*(t[0]-d)/(g-d);else v=t.value;"center"==l&&(p.x+=Math.round(r/2));var y=u*(v-e)/(n-e);y*=s,p.y=a.height-Math.round(y)-a.area[2],c.push(p)}}),c}function it(t,e,n,i,r,a,o,s,l){var c=arguments.length>9&&void 0!==arguments[9]?arguments[9]:1,u=[],h=a.height-a.area[0]-a.area[2];return t.forEach(function(t,o){if(null===t)u.push(null);else{var p={};if(p.color=t.color,p.x=i[o]+Math.round(r/2),s>0){for(var f=0,d=0;d<=s;d++)f+=l[d].data[o];var g=f-t,v=h*(f-e)/(n-e),y=h*(g-e)/(n-e)}else f=t,v=h*(f-e)/(n-e),y=0;var x=y;v*=c,x*=c,p.y=a.height-Math.round(v)-a.area[2],p.y0=a.height-Math.round(x)-a.area[2],u.push(p)}}),u}function rt(t,e,n,i){var r,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:-1;r="stack"==i?m(t,e.categories.length):x(t);var o=[];r=r.filter(function(t){return"object"===typeof t&&null!==t?t.constructor==Array?null!==t:null!==t.value:null!==t}),r.map(function(t){"object"===typeof t?t.constructor==Array?"candle"==e.type?t.map(function(t){o.push(t)}):o.push(t[1]):o.push(t.value):o.push(t)});var s=0,l=0;if(o.length>0&&(s=Math.min.apply(this,o),l=Math.max.apply(this,o)),a>-1?("number"===typeof e.yAxis.data[a].min&&(s=Math.min(e.yAxis.data[a].min,s)),"number"===typeof e.yAxis.data[a].max&&(l=Math.max(e.yAxis.data[a].max,l))):("number"===typeof e.yAxis.min&&(s=Math.min(e.yAxis.min,s)),"number"===typeof e.yAxis.max&&(l=Math.max(e.yAxis.max,l))),s===l){var c=l||10;l+=c}for(var u=v(s,l),h=u.minRange,p=u.maxRange,f=[],d=(p-h)/e.yAxis.splitNumber,g=0;g<=e.yAxis.splitNumber;g++)f.push(h+d*g);return f.reverse()}function at(t,e,n){var i=r({},{type:""},e.extra.column),o=e.yAxis.data.length,s=new Array(o);if(o>0){for(var l=0;l<o;l++){s[l]=[];for(var c=0;c<t.length;c++)t[c].index==l&&s[l].push(t[c])}for(var u=new Array(o),h=new Array(o),p=new Array(o),f=function(t){var r=e.yAxis.data[t];1==e.yAxis.disabled&&(r.disabled=!0),u[t]=rt(s[t],e,n,i.type,t);var o=r.fontSize||n.fontSize;p[t]={position:r.position?r.position:"left",width:0},h[t]=u[t].map(function(e){return e=a.toFixed(e,6),e=r.format?r.format(Number(e)):e,p[t].width=Math.max(p[t].width,y(e,o)+5),e});var l=r.calibration?4*e.pixelRatio:0;p[t].width+=l+3*e.pixelRatio,!0===r.disabled&&(p[t].width=0)},d=0;d<o;d++)f(d)}else{u=new Array(1),h=new Array(1),p=new Array(1);u[0]=rt(t,e,n,i.type),p[0]={position:"left",width:0};var g=e.yAxis.fontSize||n.fontSize;h[0]=u[0].map(function(t){return t=a.toFixed(t,6),t=e.yAxis.format?e.yAxis.format(Number(t)):t,p[0].width=Math.max(p[0].width,y(t,g)+5),t}),p[0].width+=3*e.pixelRatio,!0===e.yAxis.disabled?(p[0]={position:"left",width:0},e.yAxis.data[0]={disabled:!0}):e.yAxis.data[0]={disabled:!1,position:"left",max:e.yAxis.max,min:e.yAxis.min,format:e.yAxis.format}}return{rangesFormat:h,ranges:u,yAxisWidth:p}}function ot(t,e,n,i,r){for(var a=[].concat(n.chartData.yAxisData.ranges),o=n.height-n.area[0]-n.area[2],s=n.area[0],l=[],c=0;c<a.length;c++){var u=a[c].shift(),h=a[c].pop(),p=u-(u-h)*(t-s)/o;p=n.yAxis.data[c].format?n.yAxis.data[c].format(Number(p)):p.toFixed(0),l.push(String(p))}return l}function st(t,e){for(var n,i,r=e.height-e.area[0]-e.area[2],a=0;a<t.length;a++){t[a].yAxisIndex=t[a].yAxisIndex?t[a].yAxisIndex:0;var o=[].concat(e.chartData.yAxisData.ranges[t[a].yAxisIndex]);n=o.pop(),i=o.shift();var s=r*(t[a].value-n)/(i-n);t[a].y=e.height-Math.round(s)-e.area[2]}return t}function lt(t,e){!0!==e.rotateLock?(t.translate(e.height,0),t.rotate(90*Math.PI/180)):!0!==e._rotate_&&(t.translate(e.height,0),t.rotate(90*Math.PI/180),e._rotate_=!0)}function ct(t,e,n,i,r){i.beginPath(),"hollow"==r.dataPointShapeType?(i.setStrokeStyle(e),i.setFillStyle(r.background),i.setLineWidth(2*r.pixelRatio)):(i.setStrokeStyle("#ffffff"),i.setFillStyle(e),i.setLineWidth(1*r.pixelRatio)),"diamond"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y),i.lineTo(t.x,t.y+4.5),i.lineTo(t.x+4.5,t.y),i.lineTo(t.x,t.y-4.5))}):"circle"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x+2.5*r.pixelRatio,t.y),i.arc(t.x,t.y,3*r.pixelRatio,0,2*Math.PI,!1))}):"rect"===n?t.forEach(function(t,e){null!==t&&(i.moveTo(t.x-3.5,t.y-3.5),i.rect(t.x-3.5,t.y-3.5,7,7))}):"triangle"===n&&t.forEach(function(t,e){null!==t&&(i.moveTo(t.x,t.y-4.5),i.lineTo(t.x-4.5,t.y+4.5),i.lineTo(t.x+4.5,t.y+4.5),i.lineTo(t.x,t.y-4.5))}),i.closePath(),i.fill(),i.stroke()}function ut(t,e,n,i){var r=t.title.fontSize||e.titleFontSize,a=t.subtitle.fontSize||e.subtitleFontSize,o=t.title.name||"",s=t.subtitle.name||"",l=t.title.color||e.titleColor,c=t.subtitle.color||e.subtitleColor,u=o?r:0,h=s?a:0,p=5;if(s){var f=y(s,a),d=i.x-f/2+(t.subtitle.offsetX||0),g=i.y+a/2+(t.subtitle.offsetY||0);o&&(g+=(u+p)/2),n.beginPath(),n.setFontSize(a),n.setFillStyle(c),n.fillText(s,d,g),n.closePath(),n.stroke()}if(o){var v=y(o,r),x=i.x-v/2+(t.title.offsetX||0),m=i.y+r/2+(t.title.offsetY||0);s&&(m-=(h+p)/2),n.beginPath(),n.setFontSize(r),n.setFillStyle(l),n.fillText(o,x,m),n.closePath(),n.stroke()}}function ht(t,e,n,i){var r=e.data;t.forEach(function(t,a){if(null!==t){i.beginPath(),i.setFontSize(e.textSize||n.fontSize),i.setFillStyle(e.textColor||"#666666");var o=r[a];"object"===typeof r[a]&&null!==r[a]&&(o=r[a].constructor==Array?r[a][1]:r[a].value);var s=e.format?e.format(o):o;i.fillText(String(s),t.x-y(s,e.textSize||n.fontSize)/2,t.y-4),i.closePath(),i.stroke()}})}function pt(t,e,n,i,r,a){e-=t.width/2+r.gaugeLabelTextMargin;for(var o=t.startAngle-t.endAngle+1,s=o/t.splitLine.splitNumber,l=t.endNumber-t.startNumber,c=l/t.splitLine.splitNumber,u=t.startAngle,h=t.startNumber,p=0;p<t.splitLine.splitNumber+1;p++){var f={x:e*Math.cos(u*Math.PI),y:e*Math.sin(u*Math.PI)},d=t.labelFormat?t.labelFormat(h):h;f.x+=n.x-y(d)/2,f.y+=n.y;var g=f.x,v=f.y;a.beginPath(),a.setFontSize(r.fontSize),a.setFillStyle(t.labelColor||"#666666"),a.fillText(d,g,v+r.fontSize/2),a.closePath(),a.stroke(),u+=s,u>=2&&(u%=2),h+=c}}function ft(t,e,n,i,r,o){var s=i.extra.radar||{};e+=r.radarLabelTextMargin,t.forEach(function(t,l){var c={x:e*Math.cos(t),y:e*Math.sin(t)},u=f(c.x,c.y,n),h=u.x,p=u.y;a.approximatelyEqual(c.x,0)?h-=y(i.categories[l]||"")/2:c.x<0&&(h-=y(i.categories[l]||"")),o.beginPath(),o.setFontSize(r.fontSize),o.setFillStyle(s.labelColor||"#666666"),o.fillText(i.categories[l]||"",h,p+r.fontSize/2),o.closePath(),o.stroke()})}function dt(t,e,n,i,r,o){for(var s=n.pieChartLinePadding,l=[],c=null,u=t.map(function(t){var e=t.format?t.format(+t._proportion_.toFixed(2)):a.toFixed(100*t._proportion_.toFixed(4))+"%";t._rose_proportion_&&(t._proportion_=t._rose_proportion_);var n=2*Math.PI-(t._start_+2*Math.PI*t._proportion_/2),i=t.color,r=t._radius_;return{arc:n,text:e,color:i,radius:r,textColor:t.textColor,textSize:t.textSize}}),h=0;h<u.length;h++){var p=u[h],g=Math.cos(p.arc)*(p.radius+s),v=Math.sin(p.arc)*(p.radius+s),x=Math.cos(p.arc)*p.radius,m=Math.sin(p.arc)*p.radius,_=g>=0?g+n.pieChartTextPadding:g-n.pieChartTextPadding,b=v,A=y(p.text,p.textSize||n.fontSize),w=b;c&&a.isSameXCoordinateArea(c.start,{x:_})&&(w=_>0?Math.min(b,c.start.y):g<0?Math.max(b,c.start.y):b>0?Math.max(b,c.start.y):Math.min(b,c.start.y)),_<0&&(_-=A);var S={lineStart:{x:x,y:m},lineEnd:{x:g,y:v},start:{x:_,y:w},width:A,height:n.fontSize,text:p.text,color:p.color,textColor:p.textColor,textSize:p.textSize};c=d(S,c),l.push(c)}for(var T=0;T<l.length;T++){var P=l[T],k=f(P.lineStart.x,P.lineStart.y,o),D=f(P.lineEnd.x,P.lineEnd.y,o),C=f(P.start.x,P.start.y,o);i.setLineWidth(1*e.pixelRatio),i.setFontSize(n.fontSize),i.beginPath(),i.setStrokeStyle(P.color),i.setFillStyle(P.color),i.moveTo(k.x,k.y);var O=P.start.x<0?C.x+P.width:C.x,M=P.start.x<0?C.x-5:C.x+5;i.quadraticCurveTo(D.x,D.y,O,C.y),i.moveTo(k.x,k.y),i.stroke(),i.closePath(),i.beginPath(),i.moveTo(C.x+P.width,C.y),i.arc(O,C.y,2,0,2*Math.PI),i.closePath(),i.fill(),i.beginPath(),i.setFontSize(P.textSize||n.fontSize),i.setFillStyle(P.textColor||"#666666"),i.fillText(P.text,M,C.y+3),i.closePath(),i.stroke(),i.closePath()}}function gt(t,e,n,i){var r=e.extra.tooltip||{};r.gridType=void 0==r.gridType?"solid":r.gridType,r.dashLength=void 0==r.dashLength?4:r.dashLength;var a=e.area[0],s=e.height-e.area[2];if("dash"==r.gridType&&i.setLineDash([r.dashLength,r.dashLength]),i.setStrokeStyle(r.gridColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),i.beginPath(),i.moveTo(t,a),i.lineTo(t,s),i.stroke(),i.setLineDash([]),r.xAxisLabel){var l=e.categories[e.tooltip.index];i.setFontSize(n.fontSize);var c=y(l,n.fontSize),u=t-.5*c,h=s;i.beginPath(),i.setFillStyle(o(r.labelBgColor||n.toolTipBackground,r.labelBgOpacity||n.toolTipOpacity)),i.setStrokeStyle(r.labelBgColor||n.toolTipBackground),i.setLineWidth(1*e.pixelRatio),i.rect(u-n.toolTipPadding,h,c+2*n.toolTipPadding,n.fontSize+2*n.toolTipPadding),i.closePath(),i.stroke(),i.fill(),i.beginPath(),i.setFontSize(n.fontSize),i.setFillStyle(r.labelFontColor||n.fontColor),i.fillText(String(l),u,h+n.toolTipPadding+n.fontSize),i.closePath(),i.stroke()}}function vt(t,e,n){for(var i=r({},{type:"solid",dashLength:4,data:[]},t.extra.markLine),a=t.area[3],s=t.width-t.area[1],l=st(i.data,t),c=0;c<l.length;c++){var u=r({},{lineColor:"#DE4A42",showLabel:!1,labelFontColor:"#666666",labelBgColor:"#DFE8FF",labelBgOpacity:.8,yAxisIndex:0},l[c]);if("dash"==i.type&&n.setLineDash([i.dashLength,i.dashLength]),n.setStrokeStyle(u.lineColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(a,u.y),n.lineTo(s,u.y),n.stroke(),n.setLineDash([]),u.showLabel){var h=t.yAxis.format?t.yAxis.format(Number(u.value)):u.value;n.setFontSize(e.fontSize);var p=y(h,e.fontSize),f=t.padding[3]+e.yAxisTitleWidth-e.toolTipPadding,d=Math.max(t.area[3],p+2*e.toolTipPadding),g=d-f,v=f+(g-p)/2,x=u.y;n.setFillStyle(o(u.labelBgColor,u.labelBgOpacity)),n.setStrokeStyle(u.labelBgColor),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.rect(f,x-.5*e.fontSize-e.toolTipPadding,g,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(u.labelFontColor),n.fillText(String(h),v,x+.5*e.fontSize),n.stroke()}}}function yt(t,e,n,i,a){var s=r({},{gridType:"solid",dashLength:4},t.extra.tooltip),l=t.area[3],c=t.width-t.area[1];if("dash"==s.gridType&&n.setLineDash([s.dashLength,s.dashLength]),n.setStrokeStyle(s.gridColor||"#cccccc"),n.setLineWidth(1*t.pixelRatio),n.beginPath(),n.moveTo(l,t.tooltip.offset.y),n.lineTo(c,t.tooltip.offset.y),n.stroke(),n.setLineDash([]),s.yAxisLabel)for(var u=ot(t.tooltip.offset.y,t.series,t,e,i),h=t.chartData.yAxisData.yAxisWidth,p=t.area[3],f=t.width-t.area[1],d=0;d<u.length;d++){n.setFontSize(e.fontSize);var g=y(u[d],e.fontSize),v=void 0,x=void 0,m=void 0;"left"==h[d].position?(v=p-h[d].width,x=Math.max(v,v+g+2*e.toolTipPadding)):(v=f,x=Math.max(v+h[d].width,v+g+2*e.toolTipPadding)),m=x-v;var _=v+(m-g)/2,b=t.tooltip.offset.y;n.beginPath(),n.setFillStyle(o(s.labelBgColor||e.toolTipBackground,s.labelBgOpacity||e.toolTipOpacity)),n.setStrokeStyle(s.labelBgColor||e.toolTipBackground),n.setLineWidth(1*t.pixelRatio),n.rect(v,b-.5*e.fontSize-e.toolTipPadding,m,e.fontSize+2*e.toolTipPadding),n.closePath(),n.stroke(),n.fill(),n.beginPath(),n.setFontSize(e.fontSize),n.setFillStyle(s.labelFontColor||e.fontColor),n.fillText(u[d],_,b+.5*e.fontSize),n.closePath(),n.stroke(),"left"==h[d].position?p-=h[d].width+t.yAxis.padding:f+=h[d].width+t.yAxis.padding}}function xt(t,e,n,i,a){var s=r({},{activeBgColor:"#000000",activeBgOpacity:.08},e.extra.tooltip),l=e.area[0],c=e.height-e.area[2];i.beginPath(),i.setFillStyle(o(s.activeBgColor,s.activeBgOpacity)),i.rect(t-a/2,l,a,c-l),i.closePath(),i.fill()}function mt(t,e,n,i,a,s,l){var c=r({},{showBox:!0,bgColor:"#000000",bgOpacity:.7,fontColor:"#FFFFFF"},n.extra.tooltip),u=4*n.pixelRatio,h=5*n.pixelRatio,p=8*n.pixelRatio,f=!1;"line"!=n.type&&"area"!=n.type&&"candle"!=n.type&&"mix"!=n.type||gt(n.tooltip.offset.x,n,i,a),e=r({x:0,y:0},e),e.y-=8*n.pixelRatio;var d=t.map(function(t){return y(t.text,i.fontSize)}),g=u+h+4*i.toolTipPadding+Math.max.apply(null,d),v=2*i.toolTipPadding+t.length*i.toolTipLineHeight;0!=c.showBox&&(e.x-Math.abs(n._scrollDistance_)+p+g>n.width&&(f=!0),v+e.y>n.height&&(e.y=n.height-v),a.beginPath(),a.setFillStyle(o(c.bgColor||i.toolTipBackground,c.bgOpacity||i.toolTipOpacity)),f?(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x-p,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x-p,e.y),a.lineTo(e.x-p-Math.round(g),e.y),a.lineTo(e.x-p-Math.round(g),e.y+v),a.lineTo(e.x-p,e.y+v),a.lineTo(e.x-p,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)):(a.moveTo(e.x,e.y+10*n.pixelRatio),a.lineTo(e.x+p,e.y+10*n.pixelRatio-5*n.pixelRatio),a.lineTo(e.x+p,e.y),a.lineTo(e.x+p+Math.round(g),e.y),a.lineTo(e.x+p+Math.round(g),e.y+v),a.lineTo(e.x+p,e.y+v),a.lineTo(e.x+p,e.y+10*n.pixelRatio+5*n.pixelRatio),a.lineTo(e.x,e.y+10*n.pixelRatio)),a.closePath(),a.fill(),t.forEach(function(t,n){if(null!==t.color){a.beginPath(),a.setFillStyle(t.color);var r=e.x+p+2*i.toolTipPadding,o=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding+1;f&&(r=e.x-g-p+2*i.toolTipPadding),a.fillRect(r,o,u,i.fontSize),a.closePath()}}),t.forEach(function(t,n){var r=e.x+p+2*i.toolTipPadding+u+h;f&&(r=e.x-g-p+2*i.toolTipPadding+ +u+h);var o=e.y+(i.toolTipLineHeight-i.fontSize)/2+i.toolTipLineHeight*n+i.toolTipPadding;a.beginPath(),a.setFontSize(i.fontSize),a.setFillStyle(c.fontColor),a.fillText(t.text,r,o+i.fontSize),a.closePath(),a.stroke()}))}function _t(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=e.chartData.xAxisData,s=o.xAxisPoints,l=o.eachSpacing,c=r({},{type:"group",width:l/2,meter:{border:4,fillColor:"#FFFFFF"}},e.extra.column),u=[];i.save();var h=-2,p=s.length+2;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),h=Math.floor(-e._scrollDistance_/l)-2,p=h+e.xAxis.itemCount+4),e.tooltip&&e.tooltip.textList&&e.tooltip.textList.length&&1===a&&xt(e.tooltip.offset.x,e,n,i,l),t.forEach(function(r,o){var f,d,g;f=[].concat(e.chartData.yAxisData.ranges[r.index]),d=f.pop(),g=f.shift();var v=r.data;switch(c.type){case"group":var y=nt(v,d,g,s,l,e,n,a),x=it(v,d,g,s,l,e,n,o,t,a);u.push(x),y=Q(y,l,t.length,o,n,e);for(var m=0;m<y.length;m++){var _=y[m];if(null!==_&&m>h&&m<p){i.beginPath(),i.setStrokeStyle(_.color||r.color),i.setLineWidth(1),i.setFillStyle(_.color||r.color);var b=_.x-_.width/2,A=e.height-_.y-e.area[2];i.moveTo(b-1,_.y),i.lineTo(b+_.width-2,_.y),i.lineTo(b+_.width-2,e.height-e.area[2]),i.lineTo(b,e.height-e.area[2]),i.lineTo(b,_.y),i.closePath(),i.stroke(),i.fill()}}break;case"stack":y=it(v,d,g,s,l,e,n,o,t,a);u.push(y),y=Z(y,l,t.length,o,n,e,t);for(var w=0;w<y.length;w++){var S=y[w];if(null!==S&&w>h&&w<p){i.beginPath(),i.setFillStyle(S.color||r.color);b=S.x-S.width/2+1,A=e.height-S.y-e.area[2];var T=e.height-S.y0-e.area[2];o>0&&(A-=T),i.moveTo(b,S.y),i.fillRect(b,S.y,S.width-2,A),i.closePath(),i.fill()}}break;case"meter":y=nt(v,d,g,s,l,e,n,a);if(u.push(y),y=Y(y,l,t.length,o,n,e,c.meter.border),0==o)for(var P=0;P<y.length;P++){var k=y[P];if(null!==k&&P>h&&P<p){i.beginPath(),i.setFillStyle(c.meter.fillColor);b=k.x-k.width/2,A=e.height-k.y-e.area[2];i.moveTo(b,k.y),i.fillRect(b,k.y,k.width,A),i.closePath(),i.fill(),c.meter.border>0&&(i.beginPath(),i.setStrokeStyle(r.color),i.setLineWidth(c.meter.border*e.pixelRatio),i.moveTo(b+.5*c.meter.border,k.y+A),i.lineTo(b+.5*c.meter.border,k.y+.5*c.meter.border),i.lineTo(b+k.width-.5*c.meter.border,k.y+.5*c.meter.border),i.lineTo(b+k.width-.5*c.meter.border,k.y+A),i.stroke())}}else for(var D=0;D<y.length;D++){var C=y[D];if(null!==C&&D>h&&D<p){i.beginPath(),i.setFillStyle(C.color||r.color);b=C.x-C.width/2,A=e.height-C.y-e.area[2];i.moveTo(b,C.y),i.fillRect(b,C.y,C.width,A),i.closePath(),i.fill()}}break}}),!1!==e.dataLabel&&1===a&&t.forEach(function(r,o){var u,h,p;u=[].concat(e.chartData.yAxisData.ranges[r.index]),h=u.pop(),p=u.shift();var f=r.data;switch(c.type){case"group":var d=nt(f,h,p,s,l,e,n,a);d=Q(d,l,t.length,o,n,e),ht(d,r,n,i);break;case"stack":d=it(f,h,p,s,l,e,n,o,t,a);ht(d,r,n,i);break;case"meter":d=nt(f,h,p,s,l,e,n,a);ht(d,r,n,i);break}}),i.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:l}}function bt(t,e,n,i,a){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,s=r({},{color:{},average:{}},n.extra.candle);s.color=r({},{upLine:"#f04864",upFill:"#f04864",downLine:"#2fc25b",downFill:"#2fc25b"},s.color),s.average=r({},{show:!1,name:[],day:[],color:i.colors},s.average),n.extra.candle=s;var l=n.chartData.xAxisData,c=l.xAxisPoints,u=l.eachSpacing,h=[];a.save();var f=-2,d=c.length+2,g=0,v=n.width+u;return n._scrollDistance_&&0!==n._scrollDistance_&&!0===n.enableScroll&&(a.translate(n._scrollDistance_,0),f=Math.floor(-n._scrollDistance_/u)-2,d=f+n.xAxis.itemCount+4,g=-n._scrollDistance_-u+n.area[3],v=g+(n.xAxis.itemCount+4)*u),s.average.show&&e.forEach(function(t,e){var r,s,l;r=[].concat(n.chartData.yAxisData.ranges[t.index]),s=r.pop(),l=r.shift();for(var h=t.data,f=nt(h,s,l,c,u,n,i,o),d=j(f),y=0;y<d.length;y++){var x=d[y];if(a.beginPath(),a.setStrokeStyle(t.color),a.setLineWidth(1),1===x.length)a.moveTo(x[0].x,x[0].y),a.arc(x[0].x,x[0].y,1,0,2*Math.PI);else{a.moveTo(x[0].x,x[0].y);for(var m=0,_=0;_<x.length;_++){var b=x[_];if(0==m&&b.x>g&&(a.moveTo(b.x,b.y),m=1),_>0&&b.x>g&&b.x<v){var A=p(x,_-1);a.bezierCurveTo(A.ctrA.x,A.ctrA.y,A.ctrB.x,A.ctrB.y,b.x,b.y)}}a.moveTo(x[0].x,x[0].y)}a.closePath(),a.stroke()}}),t.forEach(function(t,e){var r,l,p;r=[].concat(n.chartData.yAxisData.ranges[t.index]),l=r.pop(),p=r.shift();var g=t.data,v=et(g,l,p,c,u,n,i,o);h.push(v);for(var y=j(v),x=0;x<y[0].length;x++)if(x>f&&x<d){var m=y[0][x];a.beginPath(),g[x][1]-g[x][0]>0?(a.setStrokeStyle(s.color.upLine),a.setFillStyle(s.color.upFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(m[3].x,m[3].y),a.lineTo(m[1].x,m[1].y),a.lineTo(m[1].x-u/4,m[1].y),a.lineTo(m[0].x-u/4,m[0].y),a.lineTo(m[0].x,m[0].y),a.lineTo(m[2].x,m[2].y),a.lineTo(m[0].x,m[0].y),a.lineTo(m[0].x+u/4,m[0].y),a.lineTo(m[1].x+u/4,m[1].y),a.lineTo(m[1].x,m[1].y),a.moveTo(m[3].x,m[3].y)):(a.setStrokeStyle(s.color.downLine),a.setFillStyle(s.color.downFill),a.setLineWidth(1*n.pixelRatio),a.moveTo(m[3].x,m[3].y),a.lineTo(m[0].x,m[0].y),a.lineTo(m[0].x-u/4,m[0].y),a.lineTo(m[1].x-u/4,m[1].y),a.lineTo(m[1].x,m[1].y),a.lineTo(m[2].x,m[2].y),a.lineTo(m[1].x,m[1].y),a.lineTo(m[1].x+u/4,m[1].y),a.lineTo(m[0].x+u/4,m[0].y),a.lineTo(m[0].x,m[0].y),a.moveTo(m[3].x,m[3].y)),a.closePath(),a.fill(),a.stroke()}}),a.restore(),{xAxisPoints:c,calPoints:h,eachSpacing:u}}function At(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{type:"straight",opacity:.2,addLine:!1,width:2,gradient:!1},e.extra.area),l=e.chartData.xAxisData,c=l.xAxisPoints,u=l.eachSpacing,h=e.height-e.area[2],f=[];i.save();var d=0,g=e.width+u;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),d=-e._scrollDistance_-u+e.area[3],g=d+(e.xAxis.itemCount+4)*u),t.forEach(function(t,r){var l,v,y;l=[].concat(e.chartData.yAxisData.ranges[t.index]),v=l.pop(),y=l.shift();var x=t.data,m=nt(x,v,y,c,u,e,n,a);f.push(m);for(var _=j(m),b=0;b<_.length;b++){var A=_[b];if(i.beginPath(),i.setStrokeStyle(o(t.color,s.opacity)),s.gradient){var w=i.createLinearGradient(0,e.area[0],0,e.height-e.area[2]);w.addColorStop("0",o(t.color,s.opacity)),w.addColorStop("1.0",o("#FFFFFF",.1)),i.setFillStyle(w)}else i.setFillStyle(o(t.color,s.opacity));if(i.setLineWidth(s.width*e.pixelRatio),A.length>1){var S=A[0],T=A[A.length-1];i.moveTo(S.x,S.y);var P=0;if("curve"===s.type)for(var k=0;k<A.length;k++){var D=A[k];if(0==P&&D.x>d&&(i.moveTo(D.x,D.y),P=1),k>0&&D.x>d&&D.x<g){var C=p(A,k-1);i.bezierCurveTo(C.ctrA.x,C.ctrA.y,C.ctrB.x,C.ctrB.y,D.x,D.y)}}else for(var O=0;O<A.length;O++){var M=A[O];0==P&&M.x>d&&(i.moveTo(M.x,M.y),P=1),O>0&&M.x>d&&M.x<g&&i.lineTo(M.x,M.y)}i.lineTo(T.x,h),i.lineTo(S.x,h),i.lineTo(S.x,S.y)}else{var L=A[0];i.moveTo(L.x-u/2,L.y),i.lineTo(L.x+u/2,L.y),i.lineTo(L.x+u/2,h),i.lineTo(L.x-u/2,h),i.moveTo(L.x-u/2,L.y)}if(i.closePath(),i.fill(),s.addLine){if("dash"==t.lineType){var R=t.dashLength?t.dashLength:8;R*=e.pixelRatio,i.setLineDash([R,R])}if(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(s.width*e.pixelRatio),1===A.length)i.moveTo(A[0].x,A[0].y),i.arc(A[0].x,A[0].y,1,0,2*Math.PI);else{i.moveTo(A[0].x,A[0].y);var $=0;if("curve"===s.type)for(var E=0;E<A.length;E++){var F=A[E];if(0==$&&F.x>d&&(i.moveTo(F.x,F.y),$=1),E>0&&F.x>d&&F.x<g){var I=p(A,E-1);i.bezierCurveTo(I.ctrA.x,I.ctrA.y,I.ctrB.x,I.ctrB.y,F.x,F.y)}}else for(var N=0;N<A.length;N++){var B=A[N];0==$&&B.x>d&&(i.moveTo(B.x,B.y),$=1),N>0&&B.x>d&&B.x<g&&i.lineTo(B.x,B.y)}i.moveTo(A[0].x,A[0].y)}i.stroke(),i.setLineDash([])}}!1!==e.dataPointShape&&ct(m,t.color,t.pointShape,i,e)}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,r){var o,s,l;o=[].concat(e.chartData.yAxisData.ranges[t.index]),s=o.pop(),l=o.shift();var h=t.data,p=nt(h,s,l,c,u,e,n,a);ht(p,t,n,i)}),i.restore(),{xAxisPoints:c,calPoints:f,eachSpacing:u}}function wt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,o=r({},{type:"straight",width:2},e.extra.line);o.width*=e.pixelRatio;var s=e.chartData.xAxisData,l=s.xAxisPoints,c=s.eachSpacing,u=[];i.save();var h=0,f=e.width+c;return e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),h=-e._scrollDistance_-c+e.area[3],f=h+(e.xAxis.itemCount+4)*c),t.forEach(function(t,r){var s,d,g;s=[].concat(e.chartData.yAxisData.ranges[t.index]),d=s.pop(),g=s.shift();var v=t.data,y=nt(v,d,g,l,c,e,n,a);u.push(y);var x=j(y);if("dash"==t.lineType){var m=t.dashLength?t.dashLength:8;m*=e.pixelRatio,i.setLineDash([m,m])}i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(o.width),x.forEach(function(t,e){if(1===t.length)i.moveTo(t[0].x,t[0].y),i.arc(t[0].x,t[0].y,1,0,2*Math.PI);else{i.moveTo(t[0].x,t[0].y);var n=0;if("curve"===o.type)for(var r=0;r<t.length;r++){var a=t[r];if(0==n&&a.x>h&&(i.moveTo(a.x,a.y),n=1),r>0&&a.x>h&&a.x<f){var s=p(t,r-1);i.bezierCurveTo(s.ctrA.x,s.ctrA.y,s.ctrB.x,s.ctrB.y,a.x,a.y)}}else for(var l=0;l<t.length;l++){var c=t[l];0==n&&c.x>h&&(i.moveTo(c.x,c.y),n=1),l>0&&c.x>h&&c.x<f&&i.lineTo(c.x,c.y)}i.moveTo(t[0].x,t[0].y)}}),i.stroke(),i.setLineDash([]),!1!==e.dataPointShape&&ct(y,t.color,t.pointShape,i,e)}),!1!==e.dataLabel&&1===a&&t.forEach(function(t,r){var o,s,u;o=[].concat(e.chartData.yAxisData.ranges[t.index]),s=o.pop(),u=o.shift();var h=t.data,p=nt(h,s,u,l,c,e,n,a);ht(p,t,n,i)}),i.restore(),{xAxisPoints:l,calPoints:u,eachSpacing:c}}function St(t,e,n,i){var r=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,a=e.chartData.xAxisData,s=a.xAxisPoints,l=a.eachSpacing,c=e.height-e.area[2],u=[],h=0,f=0;t.forEach(function(t,e){"column"==t.type&&(f+=1)}),i.save();var d=-2,g=s.length+2,v=0,y=e.width+l;if(e._scrollDistance_&&0!==e._scrollDistance_&&!0===e.enableScroll&&(i.translate(e._scrollDistance_,0),d=Math.floor(-e._scrollDistance_/l)-2,g=d+e.xAxis.itemCount+4,v=-e._scrollDistance_-l+e.area[3],y=v+(e.xAxis.itemCount+4)*l),t.forEach(function(t,a){var x,m,_;x=[].concat(e.chartData.yAxisData.ranges[t.index]),m=x.pop(),_=x.shift();var b=t.data,A=nt(b,m,_,s,l,e,n,r);if(u.push(A),"column"==t.type){A=Q(A,l,f,h,n,e);for(var w=0;w<A.length;w++){var S=A[w];if(null!==S&&w>d&&w<g){i.beginPath(),i.setStrokeStyle(S.color||t.color),i.setLineWidth(1),i.setFillStyle(S.color||t.color);var T=S.x-S.width/2;e.height,S.y,e.area[2];i.moveTo(T,S.y),i.moveTo(T-1,S.y),i.lineTo(T+S.width-2,S.y),i.lineTo(T+S.width-2,e.height-e.area[2]),i.lineTo(T,e.height-e.area[2]),i.lineTo(T,S.y),i.closePath(),i.stroke(),i.fill(),i.closePath(),i.fill()}}h+=1}if("area"==t.type)for(var P=j(A),k=0;k<P.length;k++){var D=P[k];if(i.beginPath(),i.setStrokeStyle(t.color),i.setFillStyle(o(t.color,.2)),i.setLineWidth(2*e.pixelRatio),D.length>1){var C=D[0],O=D[D.length-1];i.moveTo(C.x,C.y);var M=0;if("curve"===t.style)for(var L=0;L<D.length;L++){var R=D[L];if(0==M&&R.x>v&&(i.moveTo(R.x,R.y),M=1),L>0&&R.x>v&&R.x<y){var $=p(D,L-1);i.bezierCurveTo($.ctrA.x,$.ctrA.y,$.ctrB.x,$.ctrB.y,R.x,R.y)}}else for(var E=0;E<D.length;E++){var F=D[E];0==M&&F.x>v&&(i.moveTo(F.x,F.y),M=1),E>0&&F.x>v&&F.x<y&&i.lineTo(F.x,F.y)}i.lineTo(O.x,c),i.lineTo(C.x,c),i.lineTo(C.x,C.y)}else{var I=D[0];i.moveTo(I.x-l/2,I.y),i.lineTo(I.x+l/2,I.y),i.lineTo(I.x+l/2,c),i.lineTo(I.x-l/2,c),i.moveTo(I.x-l/2,I.y)}i.closePath(),i.fill()}if("line"==t.type){var N=j(A);N.forEach(function(n,r){if("dash"==t.lineType){var a=t.dashLength?t.dashLength:8;a*=e.pixelRatio,i.setLineDash([a,a])}if(i.beginPath(),i.setStrokeStyle(t.color),i.setLineWidth(2*e.pixelRatio),1===n.length)i.moveTo(n[0].x,n[0].y),i.arc(n[0].x,n[0].y,1,0,2*Math.PI);else{i.moveTo(n[0].x,n[0].y);var o=0;if("curve"==t.style)for(var s=0;s<n.length;s++){var l=n[s];if(0==o&&l.x>v&&(i.moveTo(l.x,l.y),o=1),s>0&&l.x>v&&l.x<y){var c=p(n,s-1);i.bezierCurveTo(c.ctrA.x,c.ctrA.y,c.ctrB.x,c.ctrB.y,l.x,l.y)}}else for(var u=0;u<n.length;u++){var h=n[u];0==o&&h.x>v&&(i.moveTo(h.x,h.y),o=1),u>0&&h.x>v&&h.x<y&&i.lineTo(h.x,h.y)}i.moveTo(n[0].x,n[0].y)}i.stroke(),i.setLineDash([])})}"point"==t.type&&(t.addPoint=!0),1==t.addPoint&&"column"!==t.type&&ct(A,t.color,t.pointShape,i,e)}),!1!==e.dataLabel&&1===r){h=0;t.forEach(function(t,a){var o,c,u;o=[].concat(e.chartData.yAxisData.ranges[t.index]),c=o.pop(),u=o.shift();var p=t.data,d=nt(p,c,u,s,l,e,n,r);"column"!==t.type?ht(d,t,n,i):(d=Q(d,l,f,h,n,e),ht(d,t,n,i),h+=1)})}return i.restore(),{xAxisPoints:s,calPoints:u,eachSpacing:l}}function Tt(t,e,n,i,r,a){var o=t.extra.tooltip||{};o.horizentalLine&&t.tooltip&&1===i&&("line"==t.type||"area"==t.type||"column"==t.type||"candle"==t.type||"mix"==t.type)&&yt(t,e,n,r,a),n.save(),t._scrollDistance_&&0!==t._scrollDistance_&&!0===t.enableScroll&&n.translate(t._scrollDistance_,0),t.tooltip&&t.tooltip.textList&&t.tooltip.textList.length&&1===i&&mt(t.tooltip.textList,t.tooltip.offset,t,e,n,r,a),n.restore()}function Pt(t,e,n,i){var r=e.chartData.xAxisData,a=r.xAxisPoints,o=r.startX,s=r.endX,l=r.eachSpacing,c="center";"line"!=e.type&&"area"!=e.type||(c=e.xAxis.boundaryGap);var u=e.height-e.area[2],p=e.area[0];if(e.enableScroll&&e.xAxis.scrollShow){var f=e.height-e.area[2]+n.xAxisHeight,d=s-o,g=l*(a.length-1),v=d*d/g,x=0;e._scrollDistance_&&(x=-e._scrollDistance_*d/g),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollBackgroundColor||"#EFEBEF"),i.moveTo(o,f),i.lineTo(s,f),i.stroke(),i.closePath(),i.beginPath(),i.setLineCap("round"),i.setLineWidth(6*e.pixelRatio),i.setStrokeStyle(e.xAxis.scrollColor||"#A6A6A6"),i.moveTo(o+x,f),i.lineTo(o+x+v,f),i.stroke(),i.closePath(),i.setLineCap("butt")}if(i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),!0===e.xAxis.calibration&&(i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),a.forEach(function(t,n){n>0&&(i.beginPath(),i.moveTo(t-l/2,u),i.lineTo(t-l/2,u+3*e.pixelRatio),i.closePath(),i.stroke())})),!0!==e.xAxis.disableGrid&&(i.setStrokeStyle(e.xAxis.gridColor||"#cccccc"),i.setLineCap("butt"),i.setLineWidth(1*e.pixelRatio),"dash"==e.xAxis.gridType&&i.setLineDash([e.xAxis.dashLength,e.xAxis.dashLength]),e.xAxis.gridEval=e.xAxis.gridEval||1,a.forEach(function(t,n){n%e.xAxis.gridEval==0&&(i.beginPath(),i.moveTo(t,u),i.lineTo(t,p),i.stroke())}),i.setLineDash([])),!0!==e.xAxis.disabled){var m=t.length;e.xAxis.labelCount&&(m=e.xAxis.itemCount?Math.ceil(t.length/e.xAxis.itemCount*e.xAxis.labelCount):e.xAxis.labelCount,m-=1);for(var _=Math.ceil(t.length/m),b=[],A=t.length,w=0;w<A;w++)w%_!==0?b.push(""):b.push(t[w]);b[A-1]=t[A-1];var S=e.xAxis.fontSize||n.fontSize;0===n._xAxisTextAngle_?b.forEach(function(t,r){var o=-y(String(t),S)/2;"center"==c&&(o+=l/2);var s=0;e.xAxis.scrollShow&&(s=6*e.pixelRatio),i.beginPath(),i.setFontSize(S),i.setFillStyle(e.xAxis.fontColor||"#666666"),i.fillText(String(t),a[r]+o,u+S+(n.xAxisHeight-s-S)/2),i.closePath(),i.stroke()}):b.forEach(function(t,r){i.save(),i.beginPath(),i.setFontSize(S),i.setFillStyle(e.xAxis.fontColor||"#666666");var o=y(String(t),S),s=-o;"center"==c&&(s+=l/2);var p=h(a[r]+l/2,u+S/2+5,e.height),f=p.transX,d=p.transY;i.rotate(-1*n._xAxisTextAngle_),i.translate(f,d),i.fillText(String(t),a[r]+s,u+S+5),i.closePath(),i.stroke(),i.restore()})}i.restore(),e.xAxis.axisLine&&(i.beginPath(),i.setStrokeStyle(e.xAxis.axisLineColor),i.setLineWidth(1*e.pixelRatio),i.moveTo(o,e.height-e.area[2]),i.lineTo(s,e.height-e.area[2]),i.stroke())}function kt(t,e,n,i){if(!0!==e.yAxis.disableGrid){for(var r=e.height-e.area[0]-e.area[2],a=r/e.yAxis.splitNumber,o=e.area[3],s=e.chartData.xAxisData.xAxisPoints,l=e.chartData.xAxisData.eachSpacing,c=l*(s.length-1),u=o+c,h=[],p=0;p<e.yAxis.splitNumber+1;p++)h.push(e.height-e.area[2]-a*p);i.save(),e._scrollDistance_&&0!==e._scrollDistance_&&i.translate(e._scrollDistance_,0),"dash"==e.yAxis.gridType&&i.setLineDash([e.yAxis.dashLength,e.yAxis.dashLength]),i.setStrokeStyle(e.yAxis.gridColor),i.setLineWidth(1*e.pixelRatio),h.forEach(function(t,e){i.beginPath(),i.moveTo(o,t),i.lineTo(u,t),i.stroke()}),i.setLineDash([]),i.restore()}}function Dt(t,e,n,i){if(!0!==e.yAxis.disabled){var r=e.height-e.area[0]-e.area[2],a=r/e.yAxis.splitNumber,o=e.area[3],s=e.width-e.area[1],l=e.height-e.area[2],c=l+n.xAxisHeight;e.xAxis.scrollShow&&(c-=3*e.pixelRatio),e.xAxis.rotateLabel&&(c=e.height-e.area[2]+3),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),e._scrollDistance_<0&&i.fillRect(0,0,o,c),1==e.enableScroll&&i.fillRect(s,0,e.width,c),i.closePath(),i.stroke();for(var u=[],h=0;h<=e.yAxis.splitNumber;h++)u.push(e.area[0]+a*h);for(var p=e.area[3],f=e.width-e.area[1],d=function(t){var r=e.yAxis.data[t];if(!0!==r.disabled){var a=e.chartData.yAxisData.rangesFormat[t],o=r.fontSize||n.fontSize,s=e.chartData.yAxisData.yAxisWidth[t];if(a.forEach(function(t,n){var a=u[n]?u[n]:l;i.beginPath(),i.setFontSize(o),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(r.axisLineColor||"#cccccc"),i.setFillStyle(r.fontColor||"#666666"),"left"==s.position?(i.fillText(String(t),p-s.width,a+o/2),1==r.calibration&&(i.moveTo(p,a),i.lineTo(p-3*e.pixelRatio,a))):(i.fillText(String(t),f+4*e.pixelRatio,a+o/2),1==r.calibration&&(i.moveTo(f,a),i.lineTo(f+3*e.pixelRatio,a))),i.closePath(),i.stroke()}),!1!==r.axisLine&&(i.beginPath(),i.setStrokeStyle(r.axisLineColor||"#cccccc"),i.setLineWidth(1*e.pixelRatio),"left"==s.position?(i.moveTo(p,e.height-e.area[2]),i.lineTo(p,e.area[0])):(i.moveTo(f,e.height-e.area[2]),i.lineTo(f,e.area[0])),i.stroke()),e.yAxis.showTitle){var c=r.titleFontSize||n.fontSize,h=r.title;i.beginPath(),i.setFontSize(c),i.setFillStyle(r.titleFontColor||"#666666"),"left"==s.position?i.fillText(h,p-y(h,c)/2,e.area[0]-10*e.pixelRatio):i.fillText(h,f-y(h,c)/2,e.area[0]-10*e.pixelRatio),i.closePath(),i.stroke()}"left"==s.position?p-=s.width+e.yAxis.padding:f+=s.width+e.yAxis.padding}},g=0;g<e.yAxis.data.length;g++)d(g)}}function Ct(t,e,n,i,r){if(!1!==e.legend.show){var a=r.legendData,o=a.points,s=a.area,l=e.legend.padding,c=e.legend.fontSize,u=15*e.pixelRatio,h=5*e.pixelRatio,p=e.legend.itemGap,f=Math.max(e.legend.lineHeight*e.pixelRatio,c);i.beginPath(),i.setLineWidth(e.legend.borderWidth),i.setStrokeStyle(e.legend.borderColor),i.setFillStyle(e.legend.backgroundColor),i.moveTo(s.start.x,s.start.y),i.rect(s.start.x,s.start.y,s.width,s.height),i.closePath(),i.fill(),i.stroke(),o.forEach(function(t,r){var o=0,d=0;o=a.widthArr[r],d=a.heightArr[r];var g=0,v=0;"top"==e.legend.position||"bottom"==e.legend.position?(g=s.start.x+(s.width-o)/2,v=s.start.y+l+r*f):(o=0==r?0:a.widthArr[r-1],g=s.start.x+l+o,v=s.start.y+l+(s.height-d)/2),i.setFontSize(n.fontSize);for(var x=0;x<t.length;x++){var m=t[x];switch(m.area=[0,0,0,0],m.area[0]=g,m.area[1]=v,m.area[3]=v+f,i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(m.show?m.color:e.legend.hiddenColor),i.setFillStyle(m.show?m.color:e.legend.hiddenColor),m.legendShape){case"line":i.moveTo(g,v+.5*f-2*e.pixelRatio),i.fillRect(g,v+.5*f-2*e.pixelRatio,15*e.pixelRatio,4*e.pixelRatio);break;case"triangle":i.moveTo(g+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio),i.lineTo(g+2.5*e.pixelRatio,v+.5*f+5*e.pixelRatio),i.lineTo(g+12.5*e.pixelRatio,v+.5*f+5*e.pixelRatio),i.lineTo(g+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio);break;case"diamond":i.moveTo(g+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio),i.lineTo(g+2.5*e.pixelRatio,v+.5*f),i.lineTo(g+7.5*e.pixelRatio,v+.5*f+5*e.pixelRatio),i.lineTo(g+12.5*e.pixelRatio,v+.5*f),i.lineTo(g+7.5*e.pixelRatio,v+.5*f-5*e.pixelRatio);break;case"circle":i.moveTo(g+7.5*e.pixelRatio,v+.5*f),i.arc(g+7.5*e.pixelRatio,v+.5*f,5*e.pixelRatio,0,2*Math.PI);break;case"rect":i.moveTo(g,v+.5*f-5*e.pixelRatio),i.fillRect(g,v+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio);break;default:i.moveTo(g,v+.5*f-5*e.pixelRatio),i.fillRect(g,v+.5*f-5*e.pixelRatio,15*e.pixelRatio,10*e.pixelRatio)}i.closePath(),i.fill(),i.stroke(),g+=u+h;var _=.5*f+.5*c-2;i.beginPath(),i.setFontSize(c),i.setFillStyle(m.show?e.legend.fontColor:e.legend.hiddenColor),i.fillText(m.name,g,v+_),i.closePath(),i.stroke(),"top"==e.legend.position||"bottom"==e.legend.position?(g+=y(m.name,c)+p,m.area[2]=g):(m.area[2]=g+y(m.name,c)+p,g-=u+h,v+=f)}})}}function Ot(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,ringWidth:0,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.pie),l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2};0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding);t=U(t,c,a);var u=s.activeRadius;if(t=t.map(function(t){return t._start_+=s.offsetAngle*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(o(t.color,e.extra.pie.activeOpacity||.5)),i.moveTo(l.x,l.y),i.arc(l.x,l.y,t._radius_+u,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle(s.borderColor),i.setFillStyle(t.color),i.moveTo(l.x,l.y),i.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._proportion_*Math.PI),i.closePath(),i.fill(),1==s.border&&i.stroke()}),"ring"===e.type){var h=.6*c;"number"===typeof e.extra.pie.ringWidth&&e.extra.pie.ringWidth>0&&(h=Math.max(0,c-e.extra.pie.ringWidth)),i.beginPath(),i.setFillStyle(e.background||"#ffffff"),i.moveTo(l.x,l.y),i.arc(l.x,l.y,h,0,2*Math.PI),i.closePath(),i.fill()}if(!1!==e.dataLabel&&1===a){for(var p=!1,f=0,d=t.length;f<d;f++)if(t[f].data>0){p=!0;break}p&&dt(t,e,n,i,c,l)}return 1===a&&"ring"===e.type&&ut(e,n,i,l),{center:l,radius:c,series:t}}function Mt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{type:"area",activeOpacity:.5,activeRadius:10*e.pixelRatio,offsetAngle:0,labelWidth:15*e.pixelRatio,border:!1,borderWidth:2,borderColor:"#FFFFFF"},e.extra.rose);0==n.pieChartLinePadding&&(n.pieChartLinePadding=s.activeRadius);var l={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},c=Math.min((e.width-e.area[1]-e.area[3])/2-n.pieChartLinePadding-n.pieChartTextPadding-n._pieTextMaxLength_,(e.height-e.area[0]-e.area[2])/2-n.pieChartLinePadding-n.pieChartTextPadding),u=s.minRadius||.5*c;t=q(t,s.type,u,c,a);var h=s.activeRadius;if(t=t.map(function(t){return t._start_+=(s.offsetAngle||0)*Math.PI/180,t}),t.forEach(function(t,n){e.tooltip&&e.tooltip.index==n&&(i.beginPath(),i.setFillStyle(o(t.color,s.activeOpacity||.5)),i.moveTo(l.x,l.y),i.arc(l.x,l.y,h+t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),i.closePath(),i.fill()),i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.lineJoin="round",i.setStrokeStyle(s.borderColor),i.setFillStyle(t.color),i.moveTo(l.x,l.y),i.arc(l.x,l.y,t._radius_,t._start_,t._start_+2*t._rose_proportion_*Math.PI),i.closePath(),i.fill(),1==s.border&&i.stroke()}),!1!==e.dataLabel&&1===a){for(var p=!1,f=0,d=t.length;f<d;f++)if(t[f].data>0){p=!0;break}p&&dt(t,e,n,i,c,l)}return{center:l,radius:c,series:t}}function Lt(t,e,n,i){var a,o,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,l=r({},{startAngle:.75,endAngle:.25,type:"default",width:12*e.pixelRatio,gap:2*e.pixelRatio},e.extra.arcbar);t=G(t,l,s),a=l.center?l.center:{x:e.width/2,y:e.height/2},l.radius?o=l.radius:(o=Math.min(a.x,a.y),o-=5*e.pixelRatio,o-=l.width/2);for(var c=0;c<t.length;c++){var u=t[c];i.setLineWidth(l.width),i.setStrokeStyle(l.backgroundColor||"#E9E9E9"),i.setLineCap("round"),i.beginPath(),"default"==l.type?i.arc(a.x,a.y,o-(l.width+l.gap)*c,l.startAngle*Math.PI,l.endAngle*Math.PI,!1):i.arc(a.x,a.y,o-(l.width+l.gap)*c,0,2*Math.PI,!1),i.stroke(),i.setLineWidth(l.width),i.setStrokeStyle(u.color),i.setLineCap("round"),i.beginPath(),i.arc(a.x,a.y,o-(l.width+l.gap)*c,l.startAngle*Math.PI,u._proportion_*Math.PI,!1),i.stroke()}return ut(e,n,i,a),{center:a,radius:o,series:t}}function Rt(t,e,n,i,a){var s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:1,l=r({},{type:"default",startAngle:.75,endAngle:.25,width:15,splitLine:{fixRadius:0,splitNumber:10,width:15,color:"#FFFFFF",childNumber:5,childWidth:5},pointer:{width:15,color:"auto"}},n.extra.gauge);void 0==l.oldAngle&&(l.oldAngle=l.startAngle),void 0==l.oldData&&(l.oldData=0),t=X(t,l.startAngle,l.endAngle);var c={x:n.width/2,y:n.height/2},u=Math.min(c.x,c.y);u-=5*n.pixelRatio,u-=l.width/2;var h=u-l.width,p=0;if("progress"==l.type){var f=u-3*l.width;a.beginPath();var d=a.createLinearGradient(c.x,c.y-f,c.x,c.y+f);d.addColorStop("0",o(e[0].color,.3)),d.addColorStop("1.0",o("#FFFFFF",.1)),a.setFillStyle(d),a.arc(c.x,c.y,f,0,2*Math.PI,!1),a.fill(),a.setLineWidth(l.width),a.setStrokeStyle(o(e[0].color,.3)),a.setLineCap("round"),a.beginPath(),a.arc(c.x,c.y,h,l.startAngle*Math.PI,l.endAngle*Math.PI,!1),a.stroke(),p=l.startAngle-l.endAngle+1;l.splitLine.splitNumber;var g=p/l.splitLine.splitNumber/l.splitLine.childNumber,v=-u-.5*l.width-l.splitLine.fixRadius,y=-u-l.width-l.splitLine.fixRadius+l.splitLine.width;a.save(),a.translate(c.x,c.y),a.rotate((l.startAngle-1)*Math.PI);for(var x=l.splitLine.splitNumber*l.splitLine.childNumber+1,m=e[0].data*s,_=0;_<x;_++)a.beginPath(),m>_/x?a.setStrokeStyle(o(e[0].color,1)):a.setStrokeStyle(o(e[0].color,.3)),a.setLineWidth(3*n.pixelRatio),a.moveTo(v,0),a.lineTo(y,0),a.stroke(),a.rotate(g*Math.PI);a.restore(),e=G(e,l,s),a.setLineWidth(l.width),a.setStrokeStyle(e[0].color),a.setLineCap("round"),a.beginPath(),a.arc(c.x,c.y,h,l.startAngle*Math.PI,e[0]._proportion_*Math.PI,!1),a.stroke();var b=u-2.5*l.width;a.save(),a.translate(c.x,c.y),a.rotate((e[0]._proportion_-1)*Math.PI),a.beginPath(),a.setLineWidth(l.width/3);var A=a.createLinearGradient(0,.6*-b,0,.6*b);A.addColorStop("0",o("#FFFFFF",0)),A.addColorStop("0.5",o(e[0].color,1)),A.addColorStop("1.0",o("#FFFFFF",0)),a.setStrokeStyle(A),a.arc(0,0,b,.85*Math.PI,1.15*Math.PI,!1),a.stroke(),a.beginPath(),a.setLineWidth(1),a.setStrokeStyle(e[0].color),a.setFillStyle(e[0].color),a.moveTo(-b-l.width/3/2,-4),a.lineTo(-b-l.width/3/2-4,0),a.lineTo(-b-l.width/3/2,4),a.lineTo(-b-l.width/3/2,-4),a.stroke(),a.fill(),a.restore()}else{a.setLineWidth(l.width),a.setLineCap("butt");for(var w=0;w<t.length;w++){var S=t[w];a.beginPath(),a.setStrokeStyle(S.color),a.arc(c.x,c.y,u,S._startAngle_*Math.PI,S._endAngle_*Math.PI,!1),a.stroke()}a.save(),p=l.startAngle-l.endAngle+1;var T=p/l.splitLine.splitNumber,P=p/l.splitLine.splitNumber/l.splitLine.childNumber,k=-u-.5*l.width-l.splitLine.fixRadius,D=-u-.5*l.width-l.splitLine.fixRadius+l.splitLine.width,C=-u-.5*l.width-l.splitLine.fixRadius+l.splitLine.childWidth;a.translate(c.x,c.y),a.rotate((l.startAngle-1)*Math.PI);for(var O=0;O<l.splitLine.splitNumber+1;O++)a.beginPath(),a.setStrokeStyle(l.splitLine.color),a.setLineWidth(2*n.pixelRatio),a.moveTo(k,0),a.lineTo(D,0),a.stroke(),a.rotate(T*Math.PI);a.restore(),a.save(),a.translate(c.x,c.y),a.rotate((l.startAngle-1)*Math.PI);for(var M=0;M<l.splitLine.splitNumber*l.splitLine.childNumber+1;M++)a.beginPath(),a.setStrokeStyle(l.splitLine.color),a.setLineWidth(1*n.pixelRatio),a.moveTo(k,0),a.lineTo(C,0),a.stroke(),a.rotate(P*Math.PI);a.restore(),e=J(e,t,l,s);for(var L=0;L<e.length;L++){var R=e[L];a.save(),a.translate(c.x,c.y),a.rotate((R._proportion_-1)*Math.PI),a.beginPath(),a.setFillStyle(R.color),a.moveTo(l.pointer.width,0),a.lineTo(0,-l.pointer.width/2),a.lineTo(-h,0),a.lineTo(0,l.pointer.width/2),a.lineTo(l.pointer.width,0),a.closePath(),a.fill(),a.beginPath(),a.setFillStyle("#FFFFFF"),a.arc(0,0,l.pointer.width/6,0,2*Math.PI,!1),a.fill(),a.restore()}!1!==n.dataLabel&&pt(l,u,c,n,i,a)}return ut(n,i,a,c),1===s&&"gauge"===n.type&&(n.extra.gauge.oldAngle=e[0]._proportion_,n.extra.gauge.oldData=e[0].data),{center:c,radius:u,innerRadius:h,categories:t,totalAngle:p}}function $t(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{gridColor:"#cccccc",labelColor:"#666666",opacity:.2,gridCount:3},e.extra.radar),l=w(e.categories.length),c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.area[0]+(e.height-e.area[0]-e.area[2])/2},u=Math.min(c.x-(A(e.categories)+n.radarLabelTextMargin),c.y-n.radarLabelTextMargin);u-=e.padding[1],i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(s.gridColor),l.forEach(function(t){var e=f(u*Math.cos(t),u*Math.sin(t),c);i.moveTo(c.x,c.y),i.lineTo(e.x,e.y)}),i.stroke(),i.closePath();for(var h=function(t){var n={};i.beginPath(),i.setLineWidth(1*e.pixelRatio),i.setStrokeStyle(s.gridColor),l.forEach(function(e,r){var a=f(u/s.gridCount*t*Math.cos(e),u/s.gridCount*t*Math.sin(e),c);0===r?(n=a,i.moveTo(a.x,a.y)):i.lineTo(a.x,a.y)}),i.lineTo(n.x,n.y),i.stroke(),i.closePath()},p=1;p<=s.gridCount;p++)h(p);var d=H(l,c,u,t,e,a);return d.forEach(function(t,n){if(i.beginPath(),i.setFillStyle(o(t.color,s.opacity)),t.data.forEach(function(t,e){0===e?i.moveTo(t.position.x,t.position.y):i.lineTo(t.position.x,t.position.y)}),i.closePath(),i.fill(),!1!==e.dataPointShape){var r=t.data.map(function(t){return t.position});ct(r,t.color,t.pointShape,i,e)}}),ft(l,u,c,e,n,i),{center:c,radius:u,angleList:l}}function Et(t,e,n){n=0==n?1:n;for(var i=[],r=0;r<n;r++)i[r]=Math.random();return Math.floor(i.reduce(function(t,e){return t+e})/n*(e-t))+t}function Ft(t,e,n,i){for(var r=!1,a=0;a<e.length;a++)if(e[a].area){if(!(t[3]<e[a].area[1]||t[0]>e[a].area[2]||t[1]>e[a].area[3]||t[2]<e[a].area[0])){r=!0;break}if(t[0]<0||t[1]<0||t[2]>n||t[3]>i){r=!0;break}r=!1}return r}function It(t){var e,n={};n.xMin=180,n.xMax=0,n.yMin=90,n.yMax=0;for(var i=0;i<t.length;i++)for(var r=t[i].geometry.coordinates,a=0;a<r.length;a++){e=r[a],1==e.length&&(e=e[0]);for(var o=0;o<e.length;o++){var s=e[o][0],l=e[o][1],c={x:s,y:l};n.xMin=n.xMin<c.x?n.xMin:c.x,n.xMax=n.xMax>c.x?n.xMax:c.x,n.yMin=n.yMin<c.y?n.yMin:c.y,n.yMax=n.yMax>c.y?n.yMax:c.y}}return n}function jt(t,e,n,i,r,a){return{x:(e-n.xMin)*i+r,y:(n.yMax-t)*i+a}}function Nt(t,e,n,i,r,a){return{x:(e-r)/i+n.xMin,y:n.yMax-(t-a)/i}}function Bt(t,e,n){if(e[1]==n[1])return!1;if(e[1]>t[1]&&n[1]>t[1])return!1;if(e[1]<t[1]&&n[1]<t[1])return!1;if(e[1]==t[1]&&n[1]>t[1])return!1;if(n[1]==t[1]&&e[1]>t[1])return!1;if(e[0]<t[0]&&n[1]<t[1])return!1;var i=n[0]-(n[0]-e[0])*(n[1]-t[1])/(n[1]-e[1]);return!(i<t[0])}function zt(t,e){for(var n=0,i=0;i<e.length;i++){var r=e[i][0];1==e.length&&(r=e[i][0]);for(var a=0;a<r.length-1;a++){var o=r[a],s=r[a+1];Bt(t,o,s)&&(n+=1)}}return n%2==1}function Wt(t,e,n,i){var a,s,l=r({},{border:!0,borderWidth:1,borderColor:"#666666",fillOpacity:.6,activeBorderColor:"#f04864",activeFillColor:"#facc14",activeFillOpacity:1},e.extra.map),c=t,u=It(c),h=e.width/Math.abs(u.xMax-u.xMin),p=e.height/Math.abs(u.yMax-u.yMin),f=h<p?h:p,d=e.width/2-Math.abs(u.xMax-u.xMin)/2*f,g=e.height/2-Math.abs(u.yMax-u.yMin)/2*f;i.beginPath(),i.clearRect(0,0,e.width,e.height),i.setFillStyle(e.background||"#FFFFFF"),i.rect(0,0,e.width,e.height),i.fill();for(var v=0;v<c.length;v++){i.beginPath(),i.setLineWidth(l.borderWidth*e.pixelRatio),i.setStrokeStyle(l.borderColor),i.setFillStyle(o(t[v].color,l.fillOpacity)),e.tooltip&&e.tooltip.index==v&&(i.setStrokeStyle(l.activeBorderColor),i.setFillStyle(o(l.activeFillColor,l.activeFillOpacity)));for(var x=c[v].geometry.coordinates,m=0;m<x.length;m++){a=x[m],1==a.length&&(a=a[0]);for(var _=0;_<a.length;_++)s=jt(a[_][1],a[_][0],u,f,d,g),0===_?(i.beginPath(),i.moveTo(s.x,s.y)):i.lineTo(s.x,s.y);i.fill(),1==l.border&&i.stroke()}if(1==e.dataLabel){var b=c[v].properties.centroid;if(b){s=jt(b[1],b[0],u,f,d,g);var A=c[v].textSize||n.fontSize,w=c[v].properties.name;i.beginPath(),i.setFontSize(A),i.setFillStyle(c[v].textColor||"#666666"),i.fillText(w,s.x-y(w,A)/2,s.y+A/2),i.closePath(),i.stroke()}}}e.chartData.mapData={bounds:u,scale:f,xoffset:d,yoffset:g},Tt(e,n,i,1),i.draw()}function Ht(t,e){var n=t.series.sort(function(t,e){return parseInt(e.textSize)-parseInt(t.textSize)});switch(e){case"normal":for(var i=0;i<n.length;i++){var r=n[i].name,a=n[i].textSize,o=y(r,a),s=void 0,l=void 0,c=void 0,u=0;while(1){u++,s=Et(-t.width/2,t.width/2,5)-o/2,l=Et(-t.height/2,t.height/2,5)+a/2,c=[s-5+t.width/2,l-5-a+t.height/2,s+o+5+t.width/2,l+5+t.height/2];var h=Ft(c,n,t.width,t.height);if(!h)break;if(1e3==u){c=[-100,-100,-100,-100];break}}n[i].area=c}break;case"vertical":for(var p=function(){return Math.random()>.7},f=0;f<n.length;f++){var d=n[f].name,g=n[f].textSize,v=y(d,g),x=p(),m=void 0,_=void 0,b=void 0,A=void 0,w=0;while(1){w++;var S=void 0;if(x?(m=Et(-t.width/2,t.width/2,5)-v/2,_=Et(-t.height/2,t.height/2,5)+g/2,b=[_-5-v+t.width/2,-m-5+t.height/2,_+5+t.width/2,-m+g+5+t.height/2],A=[t.width-(t.width/2-t.height/2)-(-m+g+5+t.height/2)-5,t.height/2-t.width/2+(_-5-v+t.width/2)-5,t.width-(t.width/2-t.height/2)-(-m+g+5+t.height/2)+g,t.height/2-t.width/2+(_-5-v+t.width/2)+v+5],S=Ft(A,n,t.height,t.width)):(m=Et(-t.width/2,t.width/2,5)-v/2,_=Et(-t.height/2,t.height/2,5)+g/2,b=[m-5+t.width/2,_-5-g+t.height/2,m+v+5+t.width/2,_+5+t.height/2],S=Ft(b,n,t.width,t.height)),!S)break;if(1e3==w){b=[-1e3,-1e3,-1e3,-1e3];break}}x?(n[f].area=A,n[f].areav=b):n[f].area=b,n[f].rotate=x}break}return n}function Ut(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1;r({},{type:"normal",autoColors:!0},e.extra.word);i.beginPath(),i.setFillStyle(e.background||"#FFFFFF"),i.rect(0,0,e.width,e.height),i.fill(),i.save();var o=e.chartData.wordCloudData;i.translate(e.width/2,e.height/2);for(var s=0;s<o.length;s++){i.save(),o[s].rotate&&i.rotate(90*Math.PI/180);var l=o[s].name,c=o[s].textSize,u=y(l,c);i.beginPath(),i.setStrokeStyle(o[s].color),i.setFillStyle(o[s].color),i.setFontSize(c),o[s].rotate?o[s].areav[0]>0&&(e.tooltip&&e.tooltip.index==s?i.strokeText(l,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+c-e.height/2)*a):i.fillText(l,(o[s].areav[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].areav[1]+5+c-e.height/2)*a)):o[s].area[0]>0&&(e.tooltip&&e.tooltip.index==s?i.strokeText(l,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+c-e.height/2)*a):i.fillText(l,(o[s].area[0]+5-e.width/2)*a-u*(1-a)/2,(o[s].area[1]+5+c-e.height/2)*a)),i.stroke(),i.restore()}i.restore()}function Vt(t,e,n,i){var a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:1,s=r({},{activeWidth:10,activeOpacity:.3,border:!1,borderWidth:2,borderColor:"#FFFFFF",fillOpacity:1,labelAlign:"right"},e.extra.funnel),l=(e.height-e.area[0]-e.area[2])/t.length,c={x:e.area[3]+(e.width-e.area[1]-e.area[3])/2,y:e.height-e.area[2]},u=s.activeWidth,h=Math.min((e.width-e.area[1]-e.area[3])/2-u,(e.height-e.area[0]-e.area[2])/2-u);t=V(t,h,a),i.save(),i.translate(c.x,c.y);for(var p=0;p<t.length;p++)0==p?(e.tooltip&&e.tooltip.index==p&&(i.beginPath(),i.setFillStyle(o(t[p].color,s.activeOpacity)),i.moveTo(-u,0),i.lineTo(-t[p].radius-u,-l),i.lineTo(t[p].radius+u,-l),i.lineTo(u,0),i.lineTo(-u,0),i.closePath(),i.fill()),t[p].funnelArea=[c.x-t[p].radius,c.y-l,c.x+t[p].radius,c.y],i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.setStrokeStyle(s.borderColor),i.setFillStyle(o(t[p].color,s.fillOpacity)),i.moveTo(0,0),i.lineTo(-t[p].radius,-l),i.lineTo(t[p].radius,-l),i.lineTo(0,0),i.closePath(),i.fill(),1==s.border&&i.stroke()):(e.tooltip&&e.tooltip.index==p&&(i.beginPath(),i.setFillStyle(o(t[p].color,s.activeOpacity)),i.moveTo(0,0),i.lineTo(-t[p-1].radius-u,0),i.lineTo(-t[p].radius-u,-l),i.lineTo(t[p].radius+u,-l),i.lineTo(t[p-1].radius+u,0),i.lineTo(0,0),i.closePath(),i.fill()),t[p].funnelArea=[c.x-t[p].radius,c.y-l*(p+1),c.x+t[p].radius,c.y-l*p],i.beginPath(),i.setLineWidth(s.borderWidth*e.pixelRatio),i.setStrokeStyle(s.borderColor),i.setFillStyle(o(t[p].color,s.fillOpacity)),i.moveTo(0,0),i.lineTo(-t[p-1].radius,0),i.lineTo(-t[p].radius,-l),i.lineTo(t[p].radius,-l),i.lineTo(t[p-1].radius,0),i.lineTo(0,0),i.closePath(),i.fill(),1==s.border&&i.stroke()),i.translate(0,-l);return i.restore(),!1!==e.dataLabel&&1===a&&qt(t,e,i,l,s.labelAlign,u,c),{center:c,radius:h,series:t}}function qt(t,e,n,i,r,o,s){for(var l=0;l<t.length;l++){var c=t[l],u=void 0,h=void 0,p=void 0,f=void 0,d=c.format?c.format(+c._proportion_.toFixed(2)):a.toFixed(100*c._proportion_)+"%";"right"==r?(u=0==l?(c.funnelArea[2]+s.x)/2:(c.funnelArea[2]+t[l-1].funnelArea[2])/2,h=u+2*o,p=c.funnelArea[1]+i/2,f=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,p),n.lineTo(h,p),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,p),n.arc(h,p,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(f),n.setFillStyle(c.textColor||"#666666"),n.fillText(d,h+5,p+f/2-2),n.closePath(),n.stroke(),n.closePath()):(u=0==l?(c.funnelArea[0]+s.x)/2:(c.funnelArea[0]+t[l-1].funnelArea[0])/2,h=u-2*o,p=c.funnelArea[1]+i/2,f=c.textSize||e.fontSize,n.setLineWidth(1*e.pixelRatio),n.setStrokeStyle(c.color),n.setFillStyle(c.color),n.beginPath(),n.moveTo(u,p),n.lineTo(h,p),n.stroke(),n.closePath(),n.beginPath(),n.moveTo(h,p),n.arc(h,p,2,0,2*Math.PI),n.closePath(),n.fill(),n.beginPath(),n.setFontSize(f),n.setFillStyle(c.textColor||"#666666"),n.fillText(d,h-5-y(d),p+f/2-2),n.closePath(),n.stroke(),n.closePath())}}function Gt(t,e){e.draw()}var Xt={easeIn:function(t){return Math.pow(t,3)},easeOut:function(t){return Math.pow(t-1,3)+1},easeInOut:function(t){return(t/=.5)<1?.5*Math.pow(t,3):.5*(Math.pow(t-2,3)+2)},linear:function(t){return t}};function Jt(t){this.isStop=!1,t.duration="undefined"===typeof t.duration?1e3:t.duration,t.timing=t.timing||"linear";var e=17;function n(){return"undefined"!==typeof setTimeout?function(t,e){setTimeout(function(){var e=+new Date;t(e)},e)}:"undefined"!==typeof requestAnimationFrame?requestAnimationFrame:function(t){t(null)}}var i=n(),r=null,a=function(n){if(null===n||!0===this.isStop)return t.onProcess&&t.onProcess(1),void(t.onAnimationFinish&&t.onAnimationFinish());if(null===r&&(r=n),n-r<t.duration){var o=(n-r)/t.duration,s=Xt[t.timing];o=s(o),t.onProcess&&t.onProcess(o),i(a,e)}else t.onProcess&&t.onProcess(1),t.onAnimationFinish&&t.onAnimationFinish()};a=a.bind(this),i(a,e)}function Kt(t,e,n,i){var a=this,o=e.series,s=e.categories;o=g(o,e,n);var c=e.animation?e.duration:0;a.animationInstance&&a.animationInstance.stop();var u=null;if("candle"==t){var h=r({},e.extra.candle.average);h.show?(u=l(h.day,h.name,h.color,o[0].data),u=g(u,e,n),e.seriesMA=u):u=e.seriesMA?e.seriesMA=g(e.seriesMA,e,n):o}else u=o;e._series_=o=k(o),e.area=new Array(4);for(var p=0;p<4;p++)e.area[p]=e.padding[p];var f=N(u,e,n,e.chartData),d=f.area.wholeHeight,v=f.area.wholeWidth;switch(e.legend.position){case"top":e.area[0]+=d;break;case"bottom":e.area[2]+=d;break;case"left":e.area[3]+=v;break;case"right":e.area[1]+=v;break}var y={},x=0;if("line"===e.type||"column"===e.type||"area"===e.type||"mix"===e.type||"candle"===e.type){if(y=at(o,e,n),x=y.yAxisWidth,e.yAxis.showTitle){for(var m=0,_=0;_<e.yAxis.data.length;_++)m=Math.max(m,e.yAxis.data[_].titleFontSize?e.yAxis.data[_].titleFontSize:n.fontSize);e.area[0]+=(m+6)*e.pixelRatio}for(var b=0,A=0,w=0;w<x.length;w++)"left"==x[w].position?(e.area[3]+=A>0?x[w].width+e.yAxis.padding:x[w].width,A+=1):(e.area[1]+=b>0?x[w].width+e.yAxis.padding:x[w].width,b+=1)}else n.yAxisWidth=x;if(e.chartData.yAxisData=y,e.categories&&e.categories.length){e.chartData.xAxisData=tt(e.categories,e,n);var S=B(e.categories,e,n,e.chartData.xAxisData.eachSpacing),T=S.xAxisHeight,P=S.angle;n.xAxisHeight=T,n._xAxisTextAngle_=P,e.area[2]+=T,e.chartData.categoriesData=S}else if("line"===e.type||"area"===e.type||"points"===e.type){e.chartData.xAxisData=W(o,e,n),s=e.chartData.xAxisData.rangesFormat;var D=B(s,e,n,e.chartData.xAxisData.eachSpacing),C=D.xAxisHeight,O=D.angle;n.xAxisHeight=C,n._xAxisTextAngle_=O,e.area[2]+=C,e.chartData.categoriesData=D}else e.chartData.xAxisData={xAxisPoints:[]};if(e.enableScroll&&"right"==e.xAxis.scrollAlign&&void 0===e._scrollDistance_){var M=0,L=e.chartData.xAxisData.xAxisPoints,R=e.chartData.xAxisData.startX,$=e.chartData.xAxisData.endX,E=e.chartData.xAxisData.eachSpacing,F=E*(L.length-1),I=$-R;M=I-F,a.scrollOption={currentOffset:M,startTouchX:M,distance:0,lastMoveTime:0},e._scrollDistance_=M}switch("pie"!==t&&"ring"!==t&&"rose"!==t||(n._pieTextMaxLength_=!1===e.dataLabel?0:K(u)),t){case"word":var j=r({},{type:"normal",autoColors:!0},e.extra.word);1!=e.updateData&&void 0!=e.updateData||(e.chartData.wordCloudData=Ht(e,j.type)),this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),Ut(o,e,n,i,t),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"map":i.clearRect(0,0,e.width,e.height),Wt(o,e,n,i);break;case"funnel":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.funnelData=Vt(o,e,n,i,t),Ct(e.series,e,n,i,e.chartData),Tt(e,n,i,t),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"line":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),kt(s,e,n,i),Pt(s,e,n,i);var r=wt(o,e,n,i,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&vt(e,n,i),Ct(e.series,e,n,i,e.chartData),Tt(e,n,i,t,c,a),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"mix":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),kt(s,e,n,i),Pt(s,e,n,i);var r=St(o,e,n,i,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&vt(e,n,i),Ct(e.series,e,n,i,e.chartData),Tt(e,n,i,t,c,a),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"column":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),kt(s,e,n,i),Pt(s,e,n,i);var r=_t(o,e,n,i,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&vt(e,n,i),Ct(e.series,e,n,i,e.chartData),Tt(e,n,i,t,c,a),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"area":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),kt(s,e,n,i),Pt(s,e,n,i);var r=At(o,e,n,i,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&vt(e,n,i),Ct(e.series,e,n,i,e.chartData),Tt(e,n,i,t,c,a),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"ring":case"pie":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.pieData=Ot(o,e,n,i,t),Ct(e.series,e,n,i,e.chartData),Tt(e,n,i,t),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"rose":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.pieData=Mt(o,e,n,i,t),Ct(e.series,e,n,i,e.chartData),Tt(e,n,i,t),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"radar":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.radarData=$t(o,e,n,i,t),Ct(e.series,e,n,i,e.chartData),Tt(e,n,i,t),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"arcbar":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.arcbarData=Lt(o,e,n,i,t),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"gauge":this.animationInstance=new Jt({timing:"easeInOut",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),e.chartData.gaugeData=Rt(s,o,e,n,i,t),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break;case"candle":this.animationInstance=new Jt({timing:"easeIn",duration:c,onProcess:function(t){i.clearRect(0,0,e.width,e.height),e.rotate&&lt(i,e),kt(s,e,n,i),Pt(s,e,n,i);var r=bt(o,u,e,n,i,t),a=r.xAxisPoints,l=r.calPoints,c=r.eachSpacing;e.chartData.xAxisPoints=a,e.chartData.calPoints=l,e.chartData.eachSpacing=c,Dt(o,e,n,i),!1!==e.enableMarkLine&&1===t&&vt(e,n,i),Ct(u||e.series,e,n,i,e.chartData),Tt(e,n,i,t,c,a),Gt(e,i)},onAnimationFinish:function(){a.event.trigger("renderComplete")}});break}}function Qt(){this.events={}}Jt.prototype.stop=function(){this.isStop=!0},Qt.prototype.addEventListener=function(t,e){this.events[t]=this.events[t]||[],this.events[t].push(e)},Qt.prototype.trigger=function(){for(var t=arguments.length,n=Array(t),i=0;i<t;i++)n[i]=arguments[i];var r=n[0],a=n.slice(1);this.events[r]&&this.events[r].forEach(function(t){try{t.apply(null,a)}catch(n){console.error(e(n," at pages\\components\\u-charts\\u-charts.js:5091"))}})};var Yt=function(t){t.pixelRatio=t.pixelRatio?t.pixelRatio:1,t.fontSize=t.fontSize?t.fontSize*t.pixelRatio:13*t.pixelRatio,t.title=r({},t.title),t.subtitle=r({},t.subtitle),t.duration=t.duration?t.duration:1e3,t.yAxis=r({},{data:[],showTitle:!1,disabled:!1,disableGrid:!1,splitNumber:5,gridType:"solid",dashLength:4*t.pixelRatio,gridColor:"#cccccc",padding:10,fontColor:"#666666"},t.yAxis),t.yAxis.dashLength*=t.pixelRatio,t.yAxis.padding*=t.pixelRatio,t.xAxis=r({},{rotateLabel:!1,type:"calibration",gridType:"solid",dashLength:4,scrollAlign:"left",boundaryGap:"center",axisLine:!0,axisLineColor:"#cccccc"},t.xAxis),t.xAxis.dashLength*=t.pixelRatio,t.legend=r({},{show:!0,position:"bottom",float:"center",backgroundColor:"rgba(0,0,0,0)",borderColor:"rgba(0,0,0,0)",borderWidth:0,padding:5,margin:5,itemGap:10,fontSize:t.fontSize,lineHeight:t.fontSize,fontColor:"#333333",format:{},hiddenColor:"#CECECE"},t.legend),t.legend.borderWidth=t.legend.borderWidth*t.pixelRatio,t.legend.itemGap=t.legend.itemGap*t.pixelRatio,t.legend.padding=t.legend.padding*t.pixelRatio,t.legend.margin=t.legend.margin*t.pixelRatio,t.extra=r({},t.extra),t.rotate=!!t.rotate,t.animation=!!t.animation,t.rotate=!!t.rotate;var e=JSON.parse(JSON.stringify(i));if(e.colors=t.colors?t.colors:e.colors,e.yAxisTitleWidth=!0!==t.yAxis.disabled&&t.yAxis.title?e.yAxisTitleWidth:0,"pie"!=t.type&&"ring"!=t.type||(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.pie.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),"rose"==t.type&&(e.pieChartLinePadding=!1===t.dataLabel?0:t.extra.rose.labelWidth*t.pixelRatio||e.pieChartLinePadding*t.pixelRatio),e.pieChartTextPadding=!1===t.dataLabel?0:e.pieChartTextPadding*t.pixelRatio,e.yAxisSplit=t.yAxis.splitNumber?t.yAxis.splitNumber:i.yAxisSplit,e.rotate=t.rotate,t.rotate){var a=t.width,o=t.height;t.width=o,t.height=a}t.padding=t.padding?t.padding:e.padding;for(var s=0;s<4;s++)t.padding[s]*=t.pixelRatio;e.yAxisWidth=i.yAxisWidth*t.pixelRatio,e.xAxisHeight=i.xAxisHeight*t.pixelRatio,t.enableScroll&&t.xAxis.scrollShow&&(e.xAxisHeight+=6*t.pixelRatio),e.xAxisLineHeight=i.xAxisLineHeight*t.pixelRatio,e.fontSize=t.fontSize,e.titleFontSize=i.titleFontSize*t.pixelRatio,e.subtitleFontSize=i.subtitleFontSize*t.pixelRatio,e.toolTipPadding=i.toolTipPadding*t.pixelRatio,e.toolTipLineHeight=i.toolTipLineHeight*t.pixelRatio,e.columePadding=i.columePadding*t.pixelRatio,t.$this=t.$this?t.$this:this,this.context=n.createCanvasContext(t.canvasId,t.$this),t.chartData={},this.event=new Qt,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0},this.opts=t,this.config=e,Kt.call(this,t.type,t,e,this.context)};Yt.prototype.updateData=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this.opts=r({},this.opts,t),this.opts.updateData=!0;var e=t.scrollPosition||"current";switch(e){case"current":this.opts._scrollDistance_=this.scrollOption.currentOffset;break;case"left":this.opts._scrollDistance_=0,this.scrollOption={currentOffset:0,startTouchX:0,distance:0,lastMoveTime:0};break;case"right":var n=at(this.opts.series,this.opts,this.config),i=n.yAxisWidth;this.config.yAxisWidth=i;var a=0,o=tt(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,l=o.startX,c=o.endX,u=o.eachSpacing,h=u*(s.length-1),p=c-l;a=p-h,this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a;break}Kt.call(this,this.opts.type,this.opts,this.config,this.context)},Yt.prototype.zoom=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.opts.xAxis.itemCount;if(!0===this.opts.enableScroll){var n=Math.round(Math.abs(this.scrollOption.currentOffset)/this.opts.chartData.eachSpacing)+Math.round(this.opts.xAxis.itemCount/2);this.opts.animation=!1,this.opts.xAxis.itemCount=t.itemCount;var i=at(this.opts.series,this.opts,this.config),r=i.yAxisWidth;this.config.yAxisWidth=r;var a=0,o=tt(this.opts.categories,this.opts,this.config),s=o.xAxisPoints,l=o.startX,c=o.endX,u=o.eachSpacing,h=u*n,p=c-l,f=p-u*(s.length-1);a=p/2-h,a>0&&(a=0),a<f&&(a=f),this.scrollOption={currentOffset:a,startTouchX:a,distance:0,lastMoveTime:0},this.opts._scrollDistance_=a,Kt.call(this,this.opts.type,this.opts,this.config,this.context)}else console.log(e("请启用滚动条后使用！"," at pages\\components\\u-charts\\u-charts.js:5265"))},Yt.prototype.stopAnimation=function(){this.animationInstance&&this.animationInstance.stop()},Yt.prototype.addEventListener=function(t,e){this.event.addEventListener(t,e)},Yt.prototype.getCurrentDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=_(e,this.opts,t);return"pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type?F({x:n.x,y:n.y},this.opts.chartData.pieData):"radar"===this.opts.type?L({x:n.x,y:n.y},this.opts.chartData.radarData,this.opts.categories.length):"funnel"===this.opts.type?R({x:n.x,y:n.y},this.opts.chartData.funnelData):"map"===this.opts.type?E({x:n.x,y:n.y},this.opts):"word"===this.opts.type?$({x:n.x,y:n.y},this.opts.chartData.wordCloudData):D({x:n.x,y:n.y},this.opts.chartData.calPoints,this.opts,this.config,Math.abs(this.scrollOption.currentOffset))}return-1},Yt.prototype.getLegendDataIndex=function(t){var e=null;if(e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],e){var n=_(e,this.opts,t);return C({x:n.x,y:n.y},this.opts.chartData.legendData)}return-1},Yt.prototype.touchLegend=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=null;if(n=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],n){_(n,this.opts,t);var i=this.getLegendDataIndex(t);i>=0&&(this.opts.series[i].show=!this.opts.series[i].show,this.opts.animation=!!e.animation,this.opts._scrollDistance_=this.scrollOption.currentOffset,Kt.call(this,this.opts.type,this.opts,this.config,this.context))}},Yt.prototype.showToolTip=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=null;i=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],i||console.log(e("touchError"," at pages\\components\\u-charts\\u-charts.js:5402"));var a=_(i,this.opts,t),o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1});if("line"===this.opts.type||"area"===this.opts.type||"column"===this.opts.type){var l=this.getCurrentDataIndex(t);if(l>-1){var c=b(this.opts.series,l);if(0!==c.length){var u=S(c,this.opts.chartData.calPoints,l,this.opts.categories,n),h=u.textList,p=u.offset;p.y=a.y,s.tooltip={textList:h,offset:p,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("mix"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){var f=T(c,this.opts.chartData.calPoints,l,this.opts.categories,n);h=f.textList,p=f.offset;p.y=a.y,s.tooltip={textList:h,offset:p,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("candle"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){u=P(this.opts.series[0].data,c,this.opts.chartData.calPoints,l,this.opts.categories,this.opts.extra.candle,n),h=u.textList,p=u.offset;p.y=a.y,s.tooltip={textList:h,offset:p,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}if("pie"===this.opts.type||"ring"===this.opts.type||"rose"===this.opts.type||"funnel"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.name+": "+c.data,color:c.color}],p={x:a.x,y:a.y};s.tooltip={textList:h,offset:p,option:n,index:l}}Kt.call(this,s.type,s,this.config,this.context)}if("map"===this.opts.type||"word"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=this.opts._series_[l],h=[{text:n.format?n.format(c):c.properties.name,color:c.color}],p={x:a.x,y:a.y};s.tooltip={textList:h,offset:p,option:n,index:l}}s.updateData=!1,Kt.call(this,s.type,s,this.config,this.context)}if("radar"===this.opts.type){l=this.getCurrentDataIndex(t);if(l>-1){o=this.scrollOption.currentOffset,s=r({},this.opts,{_scrollDistance_:o,animation:!1}),c=b(this.opts.series,l);if(0!==c.length){h=c.map(function(t){return{text:n.format?n.format(t):t.name+": "+t.data,color:t.color}}),p={x:a.x,y:a.y};s.tooltip={textList:h,offset:p,option:n,index:l}}}Kt.call(this,s.type,s,this.config,this.context)}},Yt.prototype.translate=function(t){this.scrollOption={currentOffset:t,startTouchX:t,distance:0,lastMoveTime:0};var e=r({},this.opts,{_scrollDistance_:t,animation:!1});Kt.call(this,this.opts.type,e,this.config,this.context)},Yt.prototype.scrollStart=function(t){var e=null;e=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0];var n=_(e,this.opts,t);e&&!0===this.opts.enableScroll&&(this.scrollOption.startTouchX=n.x)},Yt.prototype.scroll=function(t){0===this.scrollOption.lastMoveTime&&(this.scrollOption.lastMoveTime=Date.now());var e=this.opts.extra.touchMoveLimit||20,n=Date.now(),i=n-this.scrollOption.lastMoveTime;if(!(i<Math.floor(1e3/e))){this.scrollOption.lastMoveTime=n;var a=null;if(a=t.changedTouches?t.changedTouches[0]:t.mp.changedTouches[0],a&&!0===this.opts.enableScroll){var o,s=_(a,this.opts,t);o=s.x-this.scrollOption.startTouchX;var l=this.scrollOption.currentOffset,u=c(this,l+o,this.opts.chartData,this.config,this.opts);this.scrollOption.distance=o=u-l;var h=r({},this.opts,{_scrollDistance_:l+o,animation:!1});return Kt.call(this,h.type,h,this.config,this.context),l+o}}},Yt.prototype.scrollEnd=function(t){if(!0===this.opts.enableScroll){var e=this.scrollOption,n=e.currentOffset,i=e.distance;this.scrollOption.currentOffset=n+i,this.scrollOption.distance=0}},"object"===typeof t.exports&&(t.exports=Yt)}).call(this,n("0de9")["default"],n("6e42")["default"])},"921b":function(t,e,n){"use strict";(function(t){var e=n("8189");function i(t,e){return!e||"object"!==typeof e&&"function"!==typeof e?r(t):e}function r(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function a(t){return a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)},a(t)}function o(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}function s(t,e){return s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t},s(t,e)}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function c(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function u(t,e,n){return e&&c(t.prototype,e),n&&c(t,n),t}var h=e.version,p="https://tongji.dcloud.io/uni/stat",f="https://tongji.dcloud.io/uni/stat.gif",d=1800,g=300,v=10,y="__DC_STAT_UUID",x="__DC_UUID_VALUE";function m(){var e="";if("n"===w()){try{e=plus.runtime.getDCloudId()}catch(n){e=""}return e}try{e=t.getStorageSync(y)}catch(n){e=x}if(!e){e=Date.now()+""+Math.floor(1e7*Math.random());try{t.setStorageSync(y,e)}catch(n){t.setStorageSync(y,x)}}return e}var _=function(t){var e=Object.keys(t),n=e.sort(),i={},r="";for(var a in n)i[n[a]]=t[n[a]],r+=n[a]+"="+t[n[a]]+"&";return{sign:"",options:r.substr(0,r.length-1)}},b=function(t){var e="";for(var n in t)e+=n+"="+t[n]+"&";return e.substr(0,e.length-1)},A=function(){return parseInt((new Date).getTime()/1e3)},w=function(){var t={"app-plus":"n",h5:"h5","mp-weixin":"wx","mp-alipay":"ali","mp-baidu":"bd","mp-toutiao":"tt","mp-qq":"qq"};return t["app-plus"]},S=function(){var e="";return"wx"!==w()&&"qq"!==w()||t.canIUse("getAccountInfoSync")&&(e=t.getAccountInfoSync().miniProgram.appId||""),e},T=function(){return"n"===w()?plus.runtime.version:""},P=function(){var t=w(),e="";return"n"===t&&(e=plus.runtime.channel),e},k=function(e){var n=w(),i="";return e||("wx"===n&&(i=t.getLaunchOptionsSync().scene),i)},D="First__Visit__Time",C="Last__Visit__Time",O=function(){var e=t.getStorageSync(D),n=0;return e?n=e:(n=A(),t.setStorageSync(D,n),t.removeStorageSync(C)),n},M=function(){var e=t.getStorageSync(C),n=0;return n=e||"",t.setStorageSync(C,A()),n},L="__page__residence__time",R=0,$=0,E=function(){return R=A(),"n"===w()&&t.setStorageSync(L,A()),R},F=function(){return $=A(),"n"===w()&&(R=t.getStorageSync(L)),$-R},I="Total__Visit__Count",j=function(){var e=t.getStorageSync(I),n=1;return e&&(n=e,n++),t.setStorageSync(I,n),n},N=function(t){var e={};for(var n in t)e[n]=encodeURIComponent(t[n]);return e},B=0,z=0,W=function(){var t=(new Date).getTime();return B=t,z=0,t},H=function(){var t=(new Date).getTime();return z=t,t},U=function(t){var e=0;if(0!==B&&(e=z-B),e=parseInt(e/1e3),e=e<1?1:e,"app"===t){var n=e>g;return{residenceTime:e,overtime:n}}if("page"===t){var i=e>d;return{residenceTime:e,overtime:i}}return{residenceTime:e}},V=function(){var t=getCurrentPages(),e=t[t.length-1],n=e.$vm;return"bd"===w()?n.$mp&&n.$mp.page.is:n.$scope&&n.$scope.route||n.$mp&&n.$mp.page.route},q=function(t){var e=getCurrentPages(),n=e[e.length-1],i=n.$vm,r=t._query,a=r&&"{}"!==JSON.stringify(r)?"?"+JSON.stringify(r):"";return t._query="","bd"===w()?i.$mp&&i.$mp.page.is+a:i.$scope&&i.$scope.route+a||i.$mp&&i.$mp.page.route+a},G=function(t){return!!("page"===t.mpType||t.$mp&&"page"===t.$mp.mpType||"page"===t.$options.mpType)},X=function(t,e){return t?"string"!==typeof t?(console.error("uni.report [eventName] 参数类型错误,只能为 String 类型"),!0):t.length>255?(console.error("uni.report [eventName] 参数长度不能大于 255"),!0):"string"!==typeof e&&"object"!==typeof e?(console.error("uni.report [options] 参数类型错误,只能为 String 或 Object 类型"),!0):"string"===typeof e&&e.length>255?(console.error("uni.report [options] 参数长度不能大于 255"),!0):"title"===t&&"string"!==typeof e?(console.error("uni.report [eventName] 参数为 title 时，[options] 参数只能为 String 类型"),!0):void 0:(console.error("uni.report 缺少 [eventName] 参数"),!0)},J=n("edd1").default,K=n("104f").default||n("104f"),Q=t.getSystemInfoSync(),Y=function(){function e(){l(this,e),this.self="",this._retry=0,this._platform="",this._query={},this._navigationBarTitle={config:"",page:"",report:"",lt:""},this._operatingTime=0,this._reportingRequestData={1:[],11:[]},this.__prevent_triggering=!1,this.__licationHide=!1,this.__licationShow=!1,this._lastPageRoute="",this.statData={uuid:m(),ut:w(),mpn:S(),ak:K.appid,usv:h,v:T(),ch:P(),cn:"",pn:"",ct:"",t:A(),tt:"",p:"android"===Q.platform?"a":"i",brand:Q.brand||"",md:Q.model,sv:Q.system.replace(/(Android|iOS)\s/,""),mpsdk:Q.SDKVersion||"",mpv:Q.version||"",lang:Q.language,pr:Q.pixelRatio,ww:Q.windowWidth,wh:Q.windowHeight,sw:Q.screenWidth,sh:Q.screenHeight}}return u(e,[{key:"_applicationShow",value:function(){if(this.__licationHide){H();var t=U("app");if(t.overtime){var e={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(e)}this.__licationHide=!1}}},{key:"_applicationHide",value:function(t,e){this.__licationHide=!0,H();var n=U();W();var i=q(this);this._sendHideRequest({urlref:i,urlref_ts:n.residenceTime},e)}},{key:"_pageShow",value:function(){var t=q(this),e=V();if(this._navigationBarTitle.config=J&&J.pages[e]&&J.pages[e].titleNView&&J.pages[e].titleNView.titleText||J&&J.pages[e]&&J.pages[e].navigationBarTitleText||"",this.__licationShow)return W(),this.__licationShow=!1,void(this._lastPageRoute=t);H(),this._lastPageRoute=t;var n=U("page");if(n.overtime){var i={path:this._lastPageRoute,scene:this.statData.sc};this._sendReportRequest(i)}W()}},{key:"_pageHide",value:function(){if(!this.__licationHide){H();var t=U("page");return this._sendPageRequest({url:this._lastPageRoute,urlref:this._lastPageRoute,urlref_ts:t.residenceTime}),void(this._navigationBarTitle={config:"",page:"",report:"",lt:""})}}},{key:"_login",value:function(){this._sendEventRequest({key:"login"},0)}},{key:"_share",value:function(){this._sendEventRequest({key:"share"},0)}},{key:"_payment",value:function(t){this._sendEventRequest({key:t},0)}},{key:"_sendReportRequest",value:function(t){this._navigationBarTitle.lt="1";var e=t.query&&"{}"!==JSON.stringify(t.query)?"?"+JSON.stringify(t.query):"";this.statData.lt="1",this.statData.url=t.path+e||"",this.statData.t=A(),this.statData.sc=k(t.scene),this.statData.fvts=O(),this.statData.lvts=M(),this.statData.tvc=j(),"n"===w()?this.getProperty():this.getNetworkInfo()}},{key:"_sendPageRequest",value:function(t){var e=t.url,n=t.urlref,i=t.urlref_ts;this._navigationBarTitle.lt="11";var r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"11",ut:this.statData.ut,url:e,tt:this.statData.tt,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(r)}},{key:"_sendHideRequest",value:function(t,e){var n=t.urlref,i=t.urlref_ts,r={ak:this.statData.ak,uuid:this.statData.uuid,lt:"3",ut:this.statData.ut,urlref:n,urlref_ts:i,ch:this.statData.ch,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(r,e)}},{key:"_sendEventRequest",value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.key,n=void 0===e?"":e,i=t.value,r=void 0===i?"":i,a=this._lastPageRoute,o={ak:this.statData.ak,uuid:this.statData.uuid,lt:"21",ut:this.statData.ut,url:a,ch:this.statData.ch,e_n:n,e_v:"object"===typeof r?JSON.stringify(r):r.toString(),usv:this.statData.usv,t:A(),p:this.statData.p};this.request(o)}},{key:"getNetworkInfo",value:function(){var e=this;t.getNetworkType({success:function(t){e.statData.net=t.networkType,e.getLocation()}})}},{key:"getProperty",value:function(){var t=this;plus.runtime.getProperty(plus.runtime.appid,function(e){t.statData.v=e.version||"",t.getNetworkInfo()})}},{key:"getLocation",value:function(){var e=this;K.getLocation?t.getLocation({type:"wgs84",geocode:!0,success:function(t){t.address&&(e.statData.cn=t.address.country,e.statData.pn=t.address.province,e.statData.ct=t.address.city),e.statData.lat=t.latitude,e.statData.lng=t.longitude,e.request(e.statData)}}):(this.statData.lat=0,this.statData.lng=0,this.request(this.statData))}},{key:"request",value:function(e,n){var i=this,r=A(),a=this._navigationBarTitle;e.ttn=a.page,e.ttpj=a.config,e.ttc=a.report;var o=this._reportingRequestData;if("n"===w()&&(o=t.getStorageSync("__UNI__STAT__DATA")||{}),o[e.lt]||(o[e.lt]=[]),o[e.lt].push(e),"n"===w()&&t.setStorageSync("__UNI__STAT__DATA",o),!(F()<v)||n){var s=this._reportingRequestData;"n"===w()&&(s=t.getStorageSync("__UNI__STAT__DATA")),E();var l=[],c=[],u=[],p=function(t){var e=s[t];e.forEach(function(e){var n=b(e);0===t?l.push(n):3===t?u.push(n):c.push(n)})};for(var f in s)p(f);l.push.apply(l,c.concat(u));var d={usv:h,t:r,requests:JSON.stringify(l)};this._reportingRequestData={},"n"===w()&&t.removeStorageSync("__UNI__STAT__DATA"),"h5"!==e.ut?"n"!==w()||"a"!==this.statData.p?this._sendRequest(d):setTimeout(function(){i._sendRequest(d)},200):this.imageRequest(d)}}},{key:"_sendRequest",value:function(e){var n=this;t.request({url:p,method:"POST",data:e,success:function(){},fail:function(t){++n._retry<3&&setTimeout(function(){n._sendRequest(e)},1e3)}})}},{key:"imageRequest",value:function(t){var e=new Image,n=_(N(t)).options;e.src=f+"?"+n}},{key:"sendEvent",value:function(t,e){X(t,e)||("title"!==t?this._sendEventRequest({key:t,value:"object"===typeof e?JSON.stringify(e):e},1):this._navigationBarTitle.report=e)}}]),e}(),Z=function(e){function n(){var e;return l(this,n),e=i(this,a(n).call(this)),e.instance=null,"function"===typeof t.addInterceptor&&(e.addInterceptorInit(),e.interceptLogin(),e.interceptShare(!0),e.interceptRequestPayment()),e}return o(n,e),u(n,null,[{key:"getInstance",value:function(){return this.instance||(this.instance=new n),this.instance}}]),u(n,[{key:"addInterceptorInit",value:function(){var e=this;t.addInterceptor("setNavigationBarTitle",{invoke:function(t){e._navigationBarTitle.page=t.title}})}},{key:"interceptLogin",value:function(){var e=this;t.addInterceptor("login",{complete:function(){e._login()}})}},{key:"interceptShare",value:function(e){var n=this;e?t.addInterceptor("share",{success:function(){n._share()},fail:function(){n._share()}}):n._share()}},{key:"interceptRequestPayment",value:function(){var e=this;t.addInterceptor("requestPayment",{success:function(){e._payment("pay_success")},fail:function(){e._payment("pay_fail")}})}},{key:"report",value:function(t,e){this.self=e,E(),this.__licationShow=!0,this._sendReportRequest(t,!0)}},{key:"load",value:function(t,e){if(!e.$scope&&!e.$mp){var n=getCurrentPages();e.$scope=n[n.length-1]}this.self=e,this._query=t}},{key:"show",value:function(t){this.self=t,G(t)?this._pageShow(t):this._applicationShow(t)}},{key:"ready",value:function(t){}},{key:"hide",value:function(t){this.self=t,G(t)?this._pageHide(t):this._applicationHide(t,!0)}},{key:"error",value:function(t){this._platform;var e="";e=t.message?t.stack:JSON.stringify(t);var n={ak:this.statData.ak,uuid:this.statData.uuid,lt:"31",ut:this.statData.ut,ch:this.statData.ch,mpsdk:this.statData.mpsdk,mpv:this.statData.mpv,v:this.statData.v,em:e,usv:this.statData.usv,t:A(),p:this.statData.p};this.request(n)}}]),n}(Y),tt=Z.getInstance(),et=!1,nt={onLaunch:function(t){tt.report(t,this)},onReady:function(){tt.ready(this)},onLoad:function(t){if(tt.load(t,this),this.$scope&&this.$scope.onShareAppMessage){var e=this.$scope.onShareAppMessage;this.$scope.onShareAppMessage=function(t){return tt.interceptShare(!1),e.call(this,t)}}},onShow:function(){et=!1,tt.show(this)},onHide:function(){et=!0,tt.hide(this)},onUnload:function(){et?et=!1:tt.hide(this)},onError:function(t){tt.error(t)}};function it(){var e=n("66fd");(e.default||e).mixin(nt),t.report=function(t,e){tt.sendEvent(t,e)}}it()}).call(this,n("6e42")["default"])},b110:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(n("66fd")),r=a(n("2f62"));function a(t){return t&&t.__esModule?t:{default:t}}i.default.use(r.default);var o=new r.default.Store({state:{type:"",mobile:"",token:"",isLogin:!1,statusBarHeight:20,windowHeight:"",fontSize:16},mutations:{login:function(t,e){t.mobile=e.mobile,t.token=e.token},loginout:function(t){t.mobile="",t.token=""},setToken:function(t,e){t.token=e},setHeight:function(t,e){t.statusBarHeight=e.statusBarHeight,t.windowHeight=e.windowHeight,t.fontSize=e.fontSizeSetting},redirectLoginPage:function(t,e){t.isLogin=e.status}}}),s=o;e.default=s},b665:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={devApi:"http://192.168.31.186/code/api/web/index.php?s=/api/",conductApi:"https://market.pd-unixe.com/index.php?s=/api/"};e.default=i},c8ba:function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(i){"object"===typeof window&&(n=window)}t.exports=n},d610:function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=u;var r=s(n("b110")),a=s(n("b665")),o=s(n("8ce3"));function s(t){return t&&t.__esModule?t:{default:t}}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter(function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),i.forEach(function(e){c(t,e,n[e])})}return t}function c(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(e){var n=t.getStorageSync("token"),s=-1!==o.default.indexOf(e.url);console.log(i("xxxx",!s,!n," at common\\request.js:12")),s||n||(n="cd3f5492377469fe601f173dwewe");var c={wxapp_id:"10001",token:n},u=l({},e.data,c),h={url:a.default.conductApi+e.url,data:u,method:e.method?e.method:"GET",header:e.header?e.header:{"content-type":"application/json; charset=UTF-8","Access-Control-Allow-Origin":"*"}},p=new Promise(function(e,n){t.request(h).then(function(n){t.hideLoading();var a=n[1];if(-1===a.data.code)return console.log(i("xxxxs",!r.default.state.isLogin," at common\\request.js:34")),void(r.default.state.isLogin||(r.default.commit("redirectLoginPage",{status:!0}),t.navigateTo({url:"/pages/login/login"})));0===a.data.code&&a.data.msg?t.showToast({title:a.data.msg,icon:"none"}):e(a.data)}).catch(function(e){t.hideLoading(),n(e)})});return p}}).call(this,n("6e42")["default"],n("0de9")["default"])},dc78:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={};(function(){function e(t){var e,n,i;return t<128?[t]:t<2048?(e=192+(t>>6),n=128+(63&t),[e,n]):(e=224+(t>>12),n=128+(t>>6&63),i=128+(63&t),[e,n,i])}function i(t){for(var n=[],i=0;i<t.length;i++)for(var r=t.charCodeAt(i),a=e(r),o=0;o<a.length;o++)n.push(a[o]);return n}function r(t,e){this.typeNumber=-1,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.rsBlocks=null,this.totalDataCount=-1,this.data=t,this.utf8bytes=i(t),this.make()}r.prototype={constructor:r,getModuleCount:function(){return this.moduleCount},make:function(){this.getRightType(),this.dataCache=this.createData(),this.createQrcode()},makeImpl:function(t){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[e]=new Array(this.moduleCount);this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(!0,t),this.typeNumber>=7&&this.setupTypeNumber(!0),this.mapData(this.dataCache,t)},setupPositionProbePattern:function(t,e){for(var n=-1;n<=7;n++)if(!(t+n<=-1||this.moduleCount<=t+n))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+n][e+i]=0<=n&&n<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==n||6==n)||2<=n&&n<=4&&2<=i&&i<=4)},createQrcode:function(){for(var t=0,e=0,n=null,i=0;i<8;i++){this.makeImpl(i);var r=s.getLostPoint(this);(0==i||t>r)&&(t=r,e=i,n=this.modules)}this.modules=n,this.setupTypeInfo(!1,e),this.typeNumber>=7&&this.setupTypeNumber(!1)},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0,null==this.modules[6][t]&&(this.modules[6][t]=t%2==0))},setupPositionAdjustPattern:function(){for(var t=s.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var n=0;n<t.length;n++){var i=t[e],r=t[n];if(null==this.modules[i][r])for(var a=-2;a<=2;a++)for(var o=-2;o<=2;o++)this.modules[i+a][r+o]=-2==a||2==a||-2==o||2==o||0==a&&0==o}},setupTypeNumber:function(t){for(var e=s.getBCHTypeNumber(this.typeNumber),n=0;n<18;n++){var i=!t&&1==(e>>n&1);this.modules[Math.floor(n/3)][n%3+this.moduleCount-8-3]=i,this.modules[n%3+this.moduleCount-8-3][Math.floor(n/3)]=i}},setupTypeInfo:function(t,e){for(var n=a[this.errorCorrectLevel]<<3|e,i=s.getBCHTypeInfo(n),r=0;r<15;r++){var o=!t&&1==(i>>r&1);r<6?this.modules[r][8]=o:r<8?this.modules[r+1][8]=o:this.modules[this.moduleCount-15+r][8]=o;o=!t&&1==(i>>r&1);r<8?this.modules[8][this.moduleCount-r-1]=o:r<9?this.modules[8][15-r-1+1]=o:this.modules[8][15-r-1]=o}this.modules[this.moduleCount-8][8]=!t},createData:function(){var t=new p,e=this.typeNumber>9?16:8;t.put(4,4),t.put(this.utf8bytes.length,e);for(var n=0,i=this.utf8bytes.length;n<i;n++)t.put(this.utf8bytes[n],8);t.length+4<=8*this.totalDataCount&&t.put(0,4);while(t.length%8!=0)t.putBit(!1);while(1){if(t.length>=8*this.totalDataCount)break;if(t.put(r.PAD0,8),t.length>=8*this.totalDataCount)break;t.put(r.PAD1,8)}return this.createBytes(t)},createBytes:function(t){for(var e=0,n=0,i=0,r=this.rsBlock.length/3,a=new Array,o=0;o<r;o++)for(var l=this.rsBlock[3*o+0],c=this.rsBlock[3*o+1],h=this.rsBlock[3*o+2],p=0;p<l;p++)a.push([h,c]);for(var f=new Array(a.length),d=new Array(a.length),g=0;g<a.length;g++){var v=a[g][0],y=a[g][1]-v;n=Math.max(n,v),i=Math.max(i,y),f[g]=new Array(v);for(o=0;o<f[g].length;o++)f[g][o]=255&t.buffer[o+e];e+=v;var x=s.getErrorCorrectPolynomial(y),m=new u(f[g],x.getLength()-1),_=m.mod(x);d[g]=new Array(x.getLength()-1);for(o=0;o<d[g].length;o++){var b=o+_.getLength()-d[g].length;d[g][o]=b>=0?_.get(b):0}}var A=new Array(this.totalDataCount),w=0;for(o=0;o<n;o++)for(g=0;g<a.length;g++)o<f[g].length&&(A[w++]=f[g][o]);for(o=0;o<i;o++)for(g=0;g<a.length;g++)o<d[g].length&&(A[w++]=d[g][o]);return A},mapData:function(t,e){for(var n=-1,i=this.moduleCount-1,r=7,a=0,o=this.moduleCount-1;o>0;o-=2){6==o&&o--;while(1){for(var l=0;l<2;l++)if(null==this.modules[i][o-l]){var c=!1;a<t.length&&(c=1==(t[a]>>>r&1));var u=s.getMask(e,i,o-l);u&&(c=!c),this.modules[i][o-l]=c,r--,-1==r&&(a++,r=7)}if(i+=n,i<0||this.moduleCount<=i){i-=n,n=-n;break}}}}},r.PAD0=236,r.PAD1=17;for(var a=[1,0,3,2],o={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},s={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){var e=t<<10;while(s.getBCHDigit(e)-s.getBCHDigit(s.G15)>=0)e^=s.G15<<s.getBCHDigit(e)-s.getBCHDigit(s.G15);return(t<<10|e)^s.G15_MASK},getBCHTypeNumber:function(t){var e=t<<12;while(s.getBCHDigit(e)-s.getBCHDigit(s.G18)>=0)e^=s.G18<<s.getBCHDigit(e)-s.getBCHDigit(s.G18);return t<<12|e},getBCHDigit:function(t){var e=0;while(0!=t)e++,t>>>=1;return e},getPatternPosition:function(t){return s.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,n){switch(t){case o.PATTERN000:return(e+n)%2==0;case o.PATTERN001:return e%2==0;case o.PATTERN010:return n%3==0;case o.PATTERN011:return(e+n)%3==0;case o.PATTERN100:return(Math.floor(e/2)+Math.floor(n/3))%2==0;case o.PATTERN101:return e*n%2+e*n%3==0;case o.PATTERN110:return(e*n%2+e*n%3)%2==0;case o.PATTERN111:return(e*n%3+(e+n)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new u([1],0),n=0;n<t;n++)e=e.multiply(new u([1,l.gexp(n)],0));return e},getLostPoint:function(t){for(var e=t.getModuleCount(),n=0,i=0,r=0;r<e;r++)for(var a=0,o=t.modules[r][0],s=0;s<e;s++){var l=t.modules[r][s];if(s<e-6&&l&&!t.modules[r][s+1]&&t.modules[r][s+2]&&t.modules[r][s+3]&&t.modules[r][s+4]&&!t.modules[r][s+5]&&t.modules[r][s+6]&&(s<e-10?t.modules[r][s+7]&&t.modules[r][s+8]&&t.modules[r][s+9]&&t.modules[r][s+10]&&(n+=40):s>3&&t.modules[r][s-1]&&t.modules[r][s-2]&&t.modules[r][s-3]&&t.modules[r][s-4]&&(n+=40)),r<e-1&&s<e-1){var c=0;l&&c++,t.modules[r+1][s]&&c++,t.modules[r][s+1]&&c++,t.modules[r+1][s+1]&&c++,0!=c&&4!=c||(n+=3)}o^l?a++:(o=l,a>=5&&(n+=3+a-5),a=1),l&&i++}for(s=0;s<e;s++)for(a=0,o=t.modules[0][s],r=0;r<e;r++){l=t.modules[r][s];r<e-6&&l&&!t.modules[r+1][s]&&t.modules[r+2][s]&&t.modules[r+3][s]&&t.modules[r+4][s]&&!t.modules[r+5][s]&&t.modules[r+6][s]&&(r<e-10?t.modules[r+7][s]&&t.modules[r+8][s]&&t.modules[r+9][s]&&t.modules[r+10][s]&&(n+=40):r>3&&t.modules[r-1][s]&&t.modules[r-2][s]&&t.modules[r-3][s]&&t.modules[r-4][s]&&(n+=40)),o^l?a++:(o=l,a>=5&&(n+=3+a-5),a=1)}var u=Math.abs(100*i/e/e-50)/5;return n+=10*u,n}},l={glog:function(t){if(t<1)throw new Error("glog("+t+")");return l.LOG_TABLE[t]},gexp:function(t){while(t<0)t+=255;while(t>=256)t-=255;return l.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},c=0;c<8;c++)l.EXP_TABLE[c]=1<<c;for(c=8;c<256;c++)l.EXP_TABLE[c]=l.EXP_TABLE[c-4]^l.EXP_TABLE[c-5]^l.EXP_TABLE[c-6]^l.EXP_TABLE[c-8];for(c=0;c<255;c++)l.LOG_TABLE[l.EXP_TABLE[c]]=c;function u(t,e){if(void 0==t.length)throw new Error(t.length+"/"+e);var n=0;while(n<t.length&&0==t[n])n++;this.num=new Array(t.length-n+e);for(var i=0;i<t.length-n;i++)this.num[i]=t[i+n]}u.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),n=0;n<this.getLength();n++)for(var i=0;i<t.getLength();i++)e[n+i]^=l.gexp(l.glog(this.get(n))+l.glog(t.get(i)));return new u(e,0)},mod:function(t){var e=this.getLength(),n=t.getLength();if(e-n<0)return this;for(var i=new Array(e),r=0;r<e;r++)i[r]=this.get(r);while(i.length>=n){var a=l.glog(i[0])-l.glog(t.get(0));for(r=0;r<t.getLength();r++)i[r]^=l.gexp(l.glog(t.get(r))+a);while(0==i[0])i.shift()}return new u(i,0)}};var h=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];function p(){this.buffer=new Array,this.length=0}r.prototype.getRightType=function(){for(var t=1;t<41;t++){var e=h[4*(t-1)+this.errorCorrectLevel];if(void 0==e)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+this.errorCorrectLevel);for(var n=e.length/3,i=0,r=0;r<n;r++){var a=e[3*r+0],o=e[3*r+2];i+=o*a}var s=t>9?2:1;if(this.utf8bytes.length+s<i||40==t){this.typeNumber=t,this.rsBlock=e,this.totalDataCount=i;break}}},p.prototype={get:function(t){var e=Math.floor(t/8);return this.buffer[e]>>>7-t%8&1},put:function(t,e){for(var n=0;n<e;n++)this.putBit(t>>>e-n-1&1)},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var f=[];n=function(e){if(this.options={text:"",size:256,correctLevel:3,background:"#ffffff",foreground:"#000000",pdground:"#000000",image:"",imageSize:30,canvasId:e.canvasId,context:e.context,usingComponents:e.usingComponents,showLoading:e.showLoading,loadingText:e.loadingText},"string"===typeof e&&(e={text:e}),e)for(var n in e)this.options[n]=e[n];for(var i=null,a=(n=0,f.length);n<a;n++)if(f[n].text==this.options.text&&f[n].text.correctLevel==this.options.correctLevel){i=f[n].obj;break}n==a&&(i=new r(this.options.text,this.options.correctLevel),f.push({text:this.options.text,correctLevel:this.options.correctLevel,obj:i}));var o=function(t){var e=t.options;return e.pdground&&(t.row>1&&t.row<5&&t.col>1&&t.col<5||t.row>t.count-6&&t.row<t.count-2&&t.col>1&&t.col<5||t.row>1&&t.row<5&&t.col>t.count-6&&t.col<t.count-2)?e.pdground:e.foreground},s=function(e){e.showLoading&&t.showLoading({title:e.loadingText,mask:!0});for(var n=t.createCanvasContext(e.canvasId,e.context),r=i.getModuleCount(),a=e.size,s=e.imageSize,l=(a/r).toPrecision(4),c=(a/r).toPrecision(4),u=0;u<r;u++)for(var h=0;h<r;h++){var p=Math.ceil((h+1)*l)-Math.floor(h*l),f=Math.ceil((u+1)*l)-Math.floor(u*l),d=o({row:u,col:h,count:r,options:e});n.setFillStyle(i.modules[u][h]?d:e.background),n.fillRect(Math.round(h*l),Math.round(u*c),p,f)}if(e.image){var g=function(t,n,i,r,a,o,s,l,c){t.setLineWidth(s),t.setFillStyle(e.background),t.setStrokeStyle(e.background),t.beginPath(),t.moveTo(n+o,i),t.arcTo(n+r,i,n+r,i+o,o),t.arcTo(n+r,i+a,n+r-o,i+a,o),t.arcTo(n,i+a,n,i+a-o,o),t.arcTo(n,i,n+o,i,o),t.closePath(),l&&t.fill(),c&&t.stroke()},v=Number(((a-s)/2).toFixed(2)),y=Number(((a-s)/2).toFixed(2));g(n,v,y,s,s,2,6,!0,!0),n.drawImage(e.image,v,y,s,s)}setTimeout(function(){n.draw(!0,function(){setTimeout(function(){t.canvasToTempFilePath({width:e.width,height:e.height,destWidth:e.width,destHeight:e.height,canvasId:e.canvasId,quality:Number(1),success:function(t){e.cbResult&&e.cbResult(t.tempFilePath)},fail:function(t){e.cbResult&&e.cbResult(t)},complete:function(){e.showLoading&&t.hideLoading()}},e.context)},e.text.length+100)})},e.usingComponents?0:150)};s(this.options)},n.prototype.clear=function(e){var n=t.createCanvasContext(this.options.canvasId,this.options.context);n.clearRect(0,0,this.options.size,this.options.size),n.draw(!1,function(){e&&e()})}})();var i=n;e.default=i}).call(this,n("6e42")["default"])},edd1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={pages:{"pages/index/age_18":{navigationStyle:"custom"},"pages/index/index":{navigationStyle:"custom"},"pages/login/login":{navigationStyle:"custom"},"pages/login/bindTel":{navigationBarTitleText:"绑定手机"},"pages/index/release/release":{navigationStyle:"custom"},"pages/index/release/center":{navigationStyle:"custom"},"pages/index/article/detail":{navigationStyle:"custom"},"pages/integral/integral":{navigationStyle:"custom",navigationBarTitleText:"积分"},"pages/integral/goodDetail":{navigationBarTitleText:"详情"},"pages/integral/order/orderSure":{navigationBarTitleText:"订单确认"},"pages/integral/order/orderDetail":{navigationBarTitleText:"订单详情"},"pages/integral/order/success":{navigationStyle:"custom"},"pages/integral/plan":{navigationBarTitleText:"打卡计划"},"pages/integral/todayFoot":{navigationBarTitleText:"今日步数"},"pages/integral/rules":{navigationBarTitleText:"积分规则说明"},"pages/integral/integralDetail":{navigationBarTitleText:"积分详情"},"pages/store/store":{navigationStyle:"custom",navigationBarTitleText:""},"pages/store/storeDetail":{navigationBarTitleText:"门店详情"},"pages/mine/mine":{navigationStyle:"custom",navigationBarTitleText:""},"pages/mine/coupon/center":{navigationBarTitleText:"领券中心"},"pages/mine/coupon/mycoupon":{navigationBarTitleText:"我的优惠券"},"pages/mine/coupon/couponDetail":{navigationBarTitleText:"使用优惠券"},"pages/mine/setting":{navigationBarTitleText:"设置"},"pages/mine/address/address":{navigationBarTitleText:"收货地址"},"pages/mine/address/addAddress":{navigationStyle:"custom"},"pages/mine/member":{navigationBarTitleText:"我的会员等级"},"pages/mine/todayExperience":{navigationBarTitleText:"今日"},"pages/mine/personal":{navigationBarTitleText:"个人信息"},"pages/partner/index":{navigationBarTitleText:"商家首页"},"pages/partner/couponDetail":{navigationBarTitleText:"优惠券详情"},"pages/partner/couponNote":{navigationBarTitleText:"优惠券记录"},"pages/partner/couponStatistics":{navigationBarTitleText:"使用统计"}},globalStyle:{navigationBarTextStyle:"white",backgroundColor:"#131313",navigationBarBackgroundColor:"#131313"}};e.default=i},f0c5:function(t,e,n){"use strict";function i(t,e,n,i,r,a,o,s,l,c){var u,h="function"===typeof t?t.options:t;if(l&&(h.components=Object.assign(l,h.components||{})),c&&((c.beforeCreate||(c.beforeCreate=[])).unshift(function(){this[c.__module]=this}),(h.mixins||(h.mixins=[])).push(c)),e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),i&&(h.functional=!0),a&&(h._scopeId="data-v-"+a),o?(u=function(t){t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,t||"undefined"===typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(o)},h._ssrRegister=u):r&&(u=s?function(){r.call(this,this.$root.$options.shadowRoot)}:r),u)if(h.functional){h._injectStyles=u;var p=h.render;h.render=function(t,e){return u.call(e),p(t,e)}}else{var f=h.beforeCreate;h.beforeCreate=f?[].concat(f,u):[u]}return{exports:t,options:h}}n.d(e,"a",function(){return i})}}]);
});

define('app.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){

require('./common/runtime.js')
require('./common/vendor.js')
require('./common/main.js')
});
require('app.js');

__wxRoute = 'pages/components/articleList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/components/articleList.js';

define('pages/components/articleList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/components/articleList"], {
  "0b02": function b02(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("c2ae"),
        a = i("3479");

    for (var r in a) {
      "default" !== r && function (t) {
        i.d(e, t, function () {
          return a[t];
        });
      }(r);
    }

    i("1bd8");
    var c,
        l = i("f0c5"),
        u = Object(l["a"])(a["default"], n["b"], n["c"], !1, null, "55132663", null, !1, n["a"], c);
    e["default"] = u.exports;
  },
  "1bd8": function bd8(t, e, i) {
    "use strict";

    var n = i("c5d4"),
        a = i.n(n);
    a.a;
  },
  3479: function _(t, e, i) {
    "use strict";

    i.r(e);
    var n = i("b616"),
        a = i.n(n);

    for (var r in n) {
      "default" !== r && function (t) {
        i.d(e, t, function () {
          return n[t];
        });
      }(r);
    }

    e["default"] = a.a;
  },
  b616: function b616(t, e, i) {
    "use strict";

    (function (t, i) {
      function n(t, e, i) {
        return e in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i, t;
      }

      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var a = {
        props: {
          articleList: {
            type: Array,
            default: function _default() {
              return [];
            }
          }
        },
        data: function data() {
          return {
            leftBox: [],
            rightBox: []
          };
        },
        watch: {
          articleList: {
            deep: !0,
            handler: function handler() {
              this.filterArr();
            }
          }
        },
        methods: n({
          filterArr: function filterArr() {
            var e = this.articleList,
                i = this;
            i.leftBox = [], i.rightBox = [], console.log(t("变化了", e, " at pages\\components\\articleList.vue:89")), e.length > 0 && e.map(function (t, e) {
              e % 2 === 0 ? i.leftBox.push(t) : i.rightBox.push(t);
            });
          },
          likeArticle: function likeArticle() {
            console.log(t("文章点赞", " at pages\\components\\articleList.vue:104"));
            var e = this,
                i = this.$api.articleLike;
            this.detail.isLike && (i = this.$api.articleunLike);
            var n = {
              url: i,
              data: {
                article_id: this.article_id
              }
            };
            e.$httpRequest(n).then(function (t) {
              var i = e.detail.isLike,
                  n = e.detail.articlelike_count;
              e.detail.articlelike_count = i ? n - 1 : n + 1, e.detail.isLike = !i;
            });
          },
          goDetail: function goDetail(t) {
            i.navigateTo({
              url: "../index/article/detail?article_id=" + t
            });
          }
        }, "likeArticle", function () {
          console.log(t("点赞", " at pages\\components\\articleList.vue:130"));
        })
      };
      e.default = a;
    }).call(this, i("0de9")["default"], i("6e42")["default"]);
  },
  c2ae: function c2ae(t, e, i) {
    "use strict";

    var n,
        a = function a() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        r = [];

    i.d(e, "b", function () {
      return a;
    }), i.d(e, "c", function () {
      return r;
    }), i.d(e, "a", function () {
      return n;
    });
  },
  c5d4: function c5d4(t, e, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/components/articleList-create-component', {
  'pages/components/articleList-create-component': function pagesComponentsArticleListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0b02"));
  }
}, [['pages/components/articleList-create-component']]]);
});
require('pages/components/articleList.js');
__wxRoute = 'pages/components/banner';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/components/banner.js';

define('pages/components/banner.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/components/banner"], {
  "0fdc": function fdc(e, n, t) {
    "use strict";

    var a,
        r = function r() {
      var e = this,
          n = e.$createElement;
      e._self._c;
    },
        o = [];

    t.d(n, "b", function () {
      return r;
    }), t.d(n, "c", function () {
      return o;
    }), t.d(n, "a", function () {
      return a;
    });
  },
  1999: function _(e, n, t) {
    "use strict";

    t.r(n);
    var a = t("0fdc"),
        r = t("251e");

    for (var o in r) {
      "default" !== o && function (e) {
        t.d(n, e, function () {
          return r[e];
        });
      }(o);
    }

    t("b517");
    var i,
        c = t("f0c5"),
        u = Object(c["a"])(r["default"], a["b"], a["c"], !1, null, "3b0b51d3", null, !1, a["a"], i);
    n["default"] = u.exports;
  },
  "251e": function e(_e, n, t) {
    "use strict";

    t.r(n);
    var a = t("b3c3"),
        r = t.n(a);

    for (var o in a) {
      "default" !== o && function (e) {
        t.d(n, e, function () {
          return a[e];
        });
      }(o);
    }

    n["default"] = r.a;
  },
  b3c3: function b3c3(e, n, t) {
    "use strict";

    (function (e, t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var a = {
        name: "banner",
        props: {
          swiperList: Array,
          borderWidth: {
            type: String,
            default: "padding: 1px"
          }
        },
        data: function data() {
          return {
            indicatorDots: !1,
            autoplay: !0,
            interval: 5e3,
            duration: 1e3,
            indicatorActiveColor: "#fff"
          };
        },
        methods: {
          naviget: function naviget(n) {
            var a = n.indexOf("goods_id="),
                r = n.indexOf("article_id="),
                o = n.indexOf("luckydraw_id=");
            console.log(e(a, r, o, " at pages\\components\\banner.vue:40")), -1 === a ? -1 === r ? -1 === o || t.navigateTo({
              url: "../zerodraw/zerodraw?luckydraw_id=" + n.slice(13)
            }) : t.navigateTo({
              url: "../components/shareInfo?article_id=" + n.slice(11)
            }) : t.navigateTo({
              url: "../components/goodDetail?goods_id=" + n.slice(9)
            });
          }
        }
      };
      n.default = a;
    }).call(this, t("0de9")["default"], t("6e42")["default"]);
  },
  b517: function b517(e, n, t) {
    "use strict";

    var a = t("e8e9"),
        r = t.n(a);
    r.a;
  },
  e8e9: function e8e9(e, n, t) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/components/banner-create-component', {
  'pages/components/banner-create-component': function pagesComponentsBannerCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("1999"));
  }
}, [['pages/components/banner-create-component']]]);
});
require('pages/components/banner.js');
__wxRoute = 'pages/components/circle';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/components/circle.js';

define('pages/components/circle.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/components/circle"], {
  "0b40": function b40(e, t, i) {
    "use strict";

    (function (e, n) {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var a,
          o = c(i("90dd"));

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        };
      }

      var r = null,
          u = {
        props: {
          Ring: {
            type: Object,
            default: function _default() {
              return {
                series: []
              };
            }
          }
        },
        data: function data() {
          return {
            cWidth: "",
            cHeight: "",
            pixelRatio: 1,
            serverData: ""
          };
        },
        watch: {
          Ring: {
            deep: !0,
            handler: function handler() {
              this.getServerData();
            }
          }
        },
        beforeMount: function beforeMount() {
          a = this, this.cWidth = e.upx2px(690), this.cHeight = e.upx2px(600);
        },
        methods: {
          getServerData: function getServerData() {
            console.log(n(a.Ring, " at pages\\components\\circle.vue:50"));
            var e = a.Ring;
            e.series = a.Ring.series, a.showRing("canvasRing", e);
          },
          showRing: function showRing(e, t) {
            r = new o.default({
              $this: a,
              canvasId: e,
              type: "ring",
              fontSize: 11,
              legend: {
                show: !0,
                fontColor: "#999"
              },
              title: {
                name: "满20减20券",
                color: "#9900ff",
                fontSize: 17 * a.pixelRatio,
                offsetY: -1 * a.pixelRatio
              },
              subtitle: {
                name: "10%",
                color: "#9900ff",
                fontSize: 17 * a.pixelRatio,
                offsetY: 1 * a.pixelRatio
              },
              extra: {
                pie: {
                  offsetAngle: -45,
                  ringWidth: 28 * a.pixelRatio,
                  labelWidth: 15,
                  activeOpacity: 1,
                  activeRadius: 5
                }
              },
              background: "#131313",
              pixelRatio: a.pixelRatio,
              series: t.series,
              animation: !0,
              width: a.cWidth * a.pixelRatio,
              height: a.cHeight * a.pixelRatio,
              disablePieStroke: !0,
              dataLabel: !0
            });
          },
          touchRing: function touchRing(e) {
            console.log(n(e, " at pages\\components\\circle.vue:98")), r.showToolTip(e, {
              format: function format(e) {
                return e.name + ":" + e.data;
              }
            });
          }
        }
      };
      t.default = u;
    }).call(this, i("6e42")["default"], i("0de9")["default"]);
  },
  "1eeb": function eeb(e, t, i) {
    "use strict";

    var n,
        a = function a() {
      var e = this,
          t = e.$createElement;
      e._self._c;
    },
        o = [];

    i.d(t, "b", function () {
      return a;
    }), i.d(t, "c", function () {
      return o;
    }), i.d(t, "a", function () {
      return n;
    });
  },
  "2ba6": function ba6(e, t, i) {
    "use strict";

    var n = i("9cc3"),
        a = i.n(n);
    a.a;
  },
  "309c": function c(e, t, i) {
    "use strict";

    i.r(t);
    var n = i("0b40"),
        a = i.n(n);

    for (var o in n) {
      "default" !== o && function (e) {
        i.d(t, e, function () {
          return n[e];
        });
      }(o);
    }

    t["default"] = a.a;
  },
  "64d9": function d9(e, t, i) {
    "use strict";

    i.r(t);
    var n = i("1eeb"),
        a = i("309c");

    for (var o in a) {
      "default" !== o && function (e) {
        i.d(t, e, function () {
          return a[e];
        });
      }(o);
    }

    i("2ba6");
    var c,
        r = i("f0c5"),
        u = Object(r["a"])(a["default"], n["b"], n["c"], !1, null, "f200def2", null, !1, n["a"], c);
    t["default"] = u.exports;
  },
  "9cc3": function cc3(e, t, i) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/components/circle-create-component', {
  'pages/components/circle-create-component': function pagesComponentsCircleCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("64d9"));
  }
}, [['pages/components/circle-create-component']]]);
});
require('pages/components/circle.js');
__wxRoute = 'pages/components/goodList';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/components/goodList.js';

define('pages/components/goodList.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/components/goodList"], {
  "1b11": function b11(t, n, e) {},
  "31b1": function b1(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("f1a6"),
        u = e("d2a3");

    for (var o in u) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(o);
    }

    e("50ad");
    var r,
        i = e("f0c5"),
        c = Object(i["a"])(u["default"], a["b"], a["c"], !1, null, "7a33e89b", null, !1, a["a"], r);
    n["default"] = c.exports;
  },
  "50ad": function ad(t, n, e) {
    "use strict";

    var a = e("1b11"),
        u = e.n(a);
    u.a;
  },
  "86e9": function e9(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: {
          goodList: Array
        },
        data: function data() {
          return {};
        },
        methods: {
          goDetail: function goDetail(n) {
            t.navigateTo({
              url: "../integral/goodDetail?goods_id=" + n
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  d2a3: function d2a3(t, n, e) {
    "use strict";

    e.r(n);
    var a = e("86e9"),
        u = e.n(a);

    for (var o in a) {
      "default" !== o && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(o);
    }

    n["default"] = u.a;
  },
  f1a6: function f1a6(t, n, e) {
    "use strict";

    var a,
        u = function u() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        o = [];

    e.d(n, "b", function () {
      return u;
    }), e.d(n, "c", function () {
      return o;
    }), e.d(n, "a", function () {
      return a;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/components/goodList-create-component', {
  'pages/components/goodList-create-component': function pagesComponentsGoodListCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("31b1"));
  }
}, [['pages/components/goodList-create-component']]]);
});
require('pages/components/goodList.js');
__wxRoute = 'pages/components/qrcode/tki-qrcode';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/components/qrcode/tki-qrcode.js';

define('pages/components/qrcode/tki-qrcode.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/components/qrcode/tki-qrcode"], {
  "0bfa": function bfa(t, e, n) {
    "use strict";

    (function (t) {
      Object.defineProperty(e, "__esModule", {
        value: !0
      }), e.default = void 0;
      var i,
          o = u(n("dc78"));

      function u(t) {
        return t && t.__esModule ? t : {
          default: t
        };
      }

      var a = {
        name: "tki-qrcode",
        props: {
          cid: {
            type: String,
            default: "tki-qrcode-canvas"
          },
          size: {
            type: Number,
            default: 200
          },
          unit: {
            type: String,
            default: "upx"
          },
          show: {
            type: Boolean,
            default: !0
          },
          val: {
            type: String,
            default: ""
          },
          background: {
            type: String,
            default: "#ffffff"
          },
          foreground: {
            type: String,
            default: "#000000"
          },
          pdground: {
            type: String,
            default: "#000000"
          },
          icon: {
            type: String,
            default: ""
          },
          iconSize: {
            type: Number,
            default: 40
          },
          lv: {
            type: Number,
            default: 3
          },
          onval: {
            type: Boolean,
            default: !1
          },
          loadMake: {
            type: Boolean,
            default: !1
          },
          usingComponents: {
            type: Boolean,
            default: !0
          },
          showLoading: {
            type: Boolean,
            default: !0
          },
          loadingText: {
            type: String,
            default: "二维码生成中"
          }
        },
        data: function data() {
          return {
            result: ""
          };
        },
        methods: {
          _makeCode: function _makeCode() {
            var e = this;
            this._empty(this.val) ? t.showToast({
              title: "二维码内容不能为空",
              icon: "none",
              duration: 2e3
            }) : i = new o.default({
              context: e,
              canvasId: e.cid,
              usingComponents: e.usingComponents,
              showLoading: e.showLoading,
              loadingText: e.loadingText,
              text: e.val,
              size: e.cpSize,
              background: e.background,
              foreground: e.foreground,
              pdground: e.pdground,
              correctLevel: e.lv,
              image: e.icon,
              imageSize: e.iconSize,
              cbResult: function cbResult(t) {
                e._result(t);
              }
            });
          },
          _clearCode: function _clearCode() {
            this._result(""), i.clear();
          },
          _saveCode: function _saveCode() {
            var e = this;
            "" != this.result && t.saveImageToPhotosAlbum({
              filePath: e.result,
              success: function success() {
                t.showToast({
                  title: "二维码保存成功",
                  icon: "success",
                  duration: 2e3
                });
              }
            });
          },
          _result: function _result(t) {
            this.result = t, this.$emit("result", t);
          },
          _empty: function _empty(t) {
            var e = typeof t,
                n = !1;
            return "number" == e && "" == String(t) ? n = !0 : "undefined" == e ? n = !0 : "object" == e ? "{}" != JSON.stringify(t) && "[]" != JSON.stringify(t) && null != t || (n = !0) : "string" == e ? "" != t && "undefined" != t && "null" != t && "{}" != t && "[]" != t || (n = !0) : "function" == e && (n = !1), n;
          }
        },
        watch: {
          size: function size(t, e) {
            var n = this;
            t == e || this._empty(t) || (this.cSize = t, this._empty(this.val) || setTimeout(function () {
              n._makeCode();
            }, 100));
          },
          val: function val(t, e) {
            var n = this;
            this.onval && (t == e || this._empty(t) || setTimeout(function () {
              n._makeCode();
            }, 0));
          }
        },
        computed: {
          cpSize: function cpSize() {
            return "upx" == this.unit ? t.upx2px(this.size) : this.size;
          }
        },
        mounted: function mounted() {
          var t = this;
          this.loadMake && (this._empty(this.val) || setTimeout(function () {
            t._makeCode();
          }, 0));
        }
      };
      e.default = a;
    }).call(this, n("6e42")["default"]);
  },
  "34e3": function e3(t, e, n) {
    "use strict";

    var i,
        o = function o() {
      var t = this,
          e = t.$createElement;
      t._self._c;
    },
        u = [];

    n.d(e, "b", function () {
      return o;
    }), n.d(e, "c", function () {
      return u;
    }), n.d(e, "a", function () {
      return i;
    });
  },
  "8cee": function cee(t, e, n) {},
  "99c1": function c1(t, e, n) {
    "use strict";

    var i = n("8cee"),
        o = n.n(i);
    o.a;
  },
  ce6c: function ce6c(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("0bfa"),
        o = n.n(i);

    for (var u in i) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return i[t];
        });
      }(u);
    }

    e["default"] = o.a;
  },
  e3ac: function e3ac(t, e, n) {
    "use strict";

    n.r(e);
    var i = n("34e3"),
        o = n("ce6c");

    for (var u in o) {
      "default" !== u && function (t) {
        n.d(e, t, function () {
          return o[t];
        });
      }(u);
    }

    n("99c1");
    var a,
        r = n("f0c5"),
        c = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], a);
    e["default"] = c.exports;
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/components/qrcode/tki-qrcode-create-component', {
  'pages/components/qrcode/tki-qrcode-create-component': function pagesComponentsQrcodeTkiQrcodeCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("e3ac"));
  }
}, [['pages/components/qrcode/tki-qrcode-create-component']]]);
});
require('pages/components/qrcode/tki-qrcode.js');
__wxRoute = 'pages/components/topBar';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/components/topBar.js';

define('pages/components/topBar.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/components/topBar"], {
  "0849": function _(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("6d62"),
        a = e("7f1c");

    for (var c in a) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(c);
    }

    e("c580");
    var r,
        f = e("f0c5"),
        o = Object(f["a"])(a["default"], u["b"], u["c"], !1, null, "2ad2cdcd", null, !1, u["a"], r);
    n["default"] = o.exports;
  },
  "0dc6": function dc6(t, n, e) {
    "use strict";

    (function (t) {
      Object.defineProperty(n, "__esModule", {
        value: !0
      }), n.default = void 0;
      var e = {
        props: {
          isindex: {
            type: Boolean,
            default: !0
          },
          title: {
            type: String,
            default: ""
          }
        },
        data: function data() {
          return {};
        },
        computed: {
          statusBarHeight: function statusBarHeight() {
            return this.$store.state.statusBarHeight;
          },
          fontSize: function fontSize() {
            return this.$store.state.fontSize;
          }
        },
        methods: {
          goBack: function goBack() {
            t.navigateBack({
              delta: 1
            });
          }
        }
      };
      n.default = e;
    }).call(this, e("6e42")["default"]);
  },
  "6d62": function d62(t, n, e) {
    "use strict";

    var u,
        a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        c = [];

    e.d(n, "b", function () {
      return a;
    }), e.d(n, "c", function () {
      return c;
    }), e.d(n, "a", function () {
      return u;
    });
  },
  "7f1c": function f1c(t, n, e) {
    "use strict";

    e.r(n);
    var u = e("0dc6"),
        a = e.n(u);

    for (var c in u) {
      "default" !== c && function (t) {
        e.d(n, t, function () {
          return u[t];
        });
      }(c);
    }

    n["default"] = a.a;
  },
  c580: function c580(t, n, e) {
    "use strict";

    var u = e("ff6d"),
        a = e.n(u);
    a.a;
  },
  ff6d: function ff6d(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/components/topBar-create-component', {
  'pages/components/topBar-create-component': function pagesComponentsTopBarCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("0849"));
  }
}, [['pages/components/topBar-create-component']]]);
});
require('pages/components/topBar.js');
__wxRoute = 'pages/components/uni-popup/uni-popup';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/components/uni-popup/uni-popup.js';

define('pages/components/uni-popup/uni-popup.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/components/uni-popup/uni-popup"], {
  "13b1": function b1(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("fd94"),
        o = e("4532");

    for (var s in o) {
      "default" !== s && function (t) {
        e.d(n, t, function () {
          return o[t];
        });
      }(s);
    }

    e("39fb");
    var a,
        r = e("f0c5"),
        u = Object(r["a"])(o["default"], i["b"], i["c"], !1, null, "44f49917", null, !1, i["a"], a);
    n["default"] = u.exports;
  },
  "39fb": function fb(t, n, e) {
    "use strict";

    var i = e("f06e"),
        o = e.n(i);
    o.a;
  },
  4532: function _(t, n, e) {
    "use strict";

    e.r(n);
    var i = e("7e49"),
        o = e.n(i);

    for (var s in i) {
      "default" !== s && function (t) {
        e.d(n, t, function () {
          return i[t];
        });
      }(s);
    }

    n["default"] = o.a;
  },
  "7e49": function e49(t, n, e) {
    "use strict";

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;

    var i = function i() {
      return e.e("pages/components/uni-transition/uni-transition").then(e.bind(null, "230b"));
    },
        o = {
      name: "UniPopup",
      components: {
        uniTransition: i
      },
      props: {
        animation: {
          type: Boolean,
          default: !0
        },
        type: {
          type: String,
          default: "center"
        },
        maskClick: {
          type: Boolean,
          default: !0
        }
      },
      data: function data() {
        return {
          ani: [],
          showPopup: !1,
          showTrans: !1,
          maskClass: {
            position: "fixed",
            bottom: 0,
            top: 0,
            left: 0,
            right: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)"
          },
          transClass: {
            position: "fixed",
            left: 0,
            right: 0
          }
        };
      },
      watch: {
        type: {
          handler: function handler(t) {
            switch (this.type) {
              case "top":
                this.ani = ["slide-top"], this.transClass = {
                  position: "fixed",
                  left: 0,
                  right: 0
                };
                break;

              case "bottom":
                this.ani = ["slide-bottom"], this.transClass = {
                  position: "fixed",
                  left: 0,
                  right: 0,
                  bottom: 0
                };
                break;

              case "center":
                this.ani = ["zoom-out", "fade"], this.transClass = {
                  position: "fixed",
                  display: "flex",
                  flexDirection: "column",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  top: 0,
                  justifyContent: "center",
                  alignItems: "center"
                };
                break;
            }
          },
          immediate: !0
        }
      },
      created: function created() {},
      methods: {
        clear: function clear(t) {
          t.stopPropagation();
        },
        open: function open() {
          var t = this;
          this.showPopup = !0, this.$nextTick(function () {
            setTimeout(function () {
              t.showTrans = !0;
            }, 50);
          }), this.$emit("change", {
            show: !0
          });
        },
        close: function close(t) {
          var n = this;
          this.showTrans = !1, this.$nextTick(function () {
            clearTimeout(n.timer), n.timer = setTimeout(function () {
              n.$emit("change", {
                show: !1
              }), n.showPopup = !1;
            }, 300);
          });
        },
        onTap: function onTap() {
          this.maskClick && this.close();
        }
      }
    };

    n.default = o;
  },
  f06e: function f06e(t, n, e) {},
  fd94: function fd94(t, n, e) {
    "use strict";

    var i,
        o = function o() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        s = [];

    e.d(n, "b", function () {
      return o;
    }), e.d(n, "c", function () {
      return s;
    }), e.d(n, "a", function () {
      return i;
    });
  }
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/components/uni-popup/uni-popup-create-component', {
  'pages/components/uni-popup/uni-popup-create-component': function pagesComponentsUniPopupUniPopupCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("13b1"));
  }
}, [['pages/components/uni-popup/uni-popup-create-component']]]);
});
require('pages/components/uni-popup/uni-popup.js');
__wxRoute = 'pages/components/uni-transition/uni-transition';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/components/uni-transition/uni-transition.js';

define('pages/components/uni-transition/uni-transition.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
"use strict";

(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/components/uni-transition/uni-transition"], {
  "230b": function b(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("3b2f"),
        a = e("8a1d");

    for (var i in a) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return a[t];
        });
      }(i);
    }

    e("491d");
    var o,
        s = e("f0c5"),
        c = Object(s["a"])(a["default"], r["b"], r["c"], !1, null, null, null, !1, r["a"], o);
    n["default"] = c.exports;
  },
  "3b2f": function b2f(t, n, e) {
    "use strict";

    var r,
        a = function a() {
      var t = this,
          n = t.$createElement;
      t._self._c;
    },
        i = [];

    e.d(n, "b", function () {
      return a;
    }), e.d(n, "c", function () {
      return i;
    }), e.d(n, "a", function () {
      return r;
    });
  },
  "491d": function d(t, n, e) {
    "use strict";

    var r = e("d027"),
        a = e.n(r);
    a.a;
  },
  "8a1d": function a1d(t, n, e) {
    "use strict";

    e.r(n);
    var r = e("b95c"),
        a = e.n(r);

    for (var i in r) {
      "default" !== i && function (t) {
        e.d(n, t, function () {
          return r[t];
        });
      }(i);
    }

    n["default"] = a.a;
  },
  b95c: function b95c(t, n, e) {
    "use strict";

    function r(t) {
      for (var n = 1; n < arguments.length; n++) {
        var e = null != arguments[n] ? arguments[n] : {},
            r = Object.keys(e);
        "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(e).filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        }))), r.forEach(function (n) {
          a(t, n, e[n]);
        });
      }

      return t;
    }

    function a(t, n, e) {
      return n in t ? Object.defineProperty(t, n, {
        value: e,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : t[n] = e, t;
    }

    Object.defineProperty(n, "__esModule", {
      value: !0
    }), n.default = void 0;
    var i = {
      name: "uniTransition",
      props: {
        show: {
          type: Boolean,
          default: !1
        },
        modeClass: {
          type: Array,
          default: function _default() {
            return [];
          }
        },
        duration: {
          type: Number,
          default: 300
        },
        styles: {
          type: Object,
          default: function _default() {
            return {};
          }
        }
      },
      data: function data() {
        return {
          isShow: !1,
          transform: "",
          ani: {
            in: "",
            active: ""
          }
        };
      },
      watch: {
        show: {
          handler: function handler(t) {
            t ? this.open() : this.close();
          },
          immediate: !0
        }
      },
      computed: {
        stylesObject: function stylesObject() {
          var t = r({}, this.styles, {
            "transition-duration": this.duration / 1e3 + "s"
          }),
              n = "";

          for (var e in t) {
            var a = this.toLine(e);
            n += a + ":" + t[e] + ";";
          }

          return n;
        }
      },
      created: function created() {},
      methods: {
        change: function change() {
          this.$emit("click", {
            detail: this.isShow
          });
        },
        open: function open() {
          var t = this;

          for (var n in this.isShow = !0, this.transform = "", this.ani.in = "", this.getTranfrom(!1)) {
            "opacity" === n ? this.ani.in = "fade-in" : this.transform += "".concat(this.getTranfrom(!1)[n], " ");
          }

          this.$nextTick(function () {
            setTimeout(function () {
              t._animation(!0);
            }, 50);
          });
        },
        close: function close(t) {
          this._animation(!1);
        },
        _animation: function _animation(t) {
          var n = this,
              e = this.getTranfrom(t);

          for (var r in this.transform = "", e) {
            "opacity" === r ? this.ani.in = "fade-".concat(t ? "out" : "in") : this.transform += "".concat(e[r], " ");
          }

          clearTimeout(this.timer), this.timer = setTimeout(function () {
            t || (n.isShow = !1), n.$emit("change", {
              detail: n.isShow
            });
          }, this.duration);
        },
        getTranfrom: function getTranfrom(t) {
          var n = {
            transform: ""
          };
          return this.modeClass.forEach(function (e) {
            switch (e) {
              case "fade":
                n.opacity = t ? 1 : 0;
                break;

              case "slide-top":
                n.transform += "translateY(".concat(t ? "0" : "-100%", ") ");
                break;

              case "slide-right":
                n.transform += "translateX(".concat(t ? "0" : "100%", ") ");
                break;

              case "slide-bottom":
                n.transform += "translateY(".concat(t ? "0" : "100%", ") ");
                break;

              case "slide-left":
                n.transform += "translateX(".concat(t ? "0" : "-100%", ") ");
                break;

              case "zoom-in":
                n.transform += "scale(".concat(t ? 1 : .8, ") ");
                break;

              case "zoom-out":
                n.transform += "scale(".concat(t ? 1 : 1.2, ") ");
                break;
            }
          }), n;
        },
        _modeClassArr: function _modeClassArr(t) {
          var n = this.modeClass;

          if ("string" !== typeof n) {
            var e = "";
            return n.forEach(function (n) {
              e += n + "-" + t + ",";
            }), e.substr(0, e.length - 1);
          }

          return n + "-" + t;
        },
        toLine: function toLine(t) {
          return t.replace(/([A-Z])/g, "-$1").toLowerCase();
        }
      }
    };
    n.default = i;
  },
  d027: function d027(t, n, e) {}
}]);
;
(global["webpackJsonp"] = global["webpackJsonp"] || []).push(['pages/components/uni-transition/uni-transition-create-component', {
  'pages/components/uni-transition/uni-transition-create-component': function pagesComponentsUniTransitionUniTransitionCreateComponent(module, exports, __webpack_require__) {
    __webpack_require__('6e42')['createComponent'](__webpack_require__("230b"));
  }
}, [['pages/components/uni-transition/uni-transition-create-component']]]);
});
require('pages/components/uni-transition/uni-transition.js');

__wxRoute = 'pages/index/age_18';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/age_18.js';

define('pages/index/age_18.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/age_18"],{"0a95":function(t,n,e){},"291c":function(t,n,e){"use strict";var a=e("0a95"),u=e.n(a);u.a},"2c93":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{}},onLoad:function(){var n=t.getStorageSync("isMajor"),e=t.getStorageSync("token");n&&e&&t.switchTab({url:"./index"})},methods:{goIndex:function(n){t.setStorage({key:"isMajor",data:n}),t.switchTab({url:"./index"})}}};n.default=e}).call(this,e("6e42")["default"])},"30dc":function(t,n,e){"use strict";(function(t){e("7539"),e("921b");a(e("66fd"));var n=a(e("772a"));function a(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"3b10":function(t,n,e){"use strict";e.r(n);var a=e("2c93"),u=e.n(a);for(var c in a)"default"!==c&&function(t){e.d(n,t,function(){return a[t]})}(c);n["default"]=u.a},"772a":function(t,n,e){"use strict";e.r(n);var a=e("e2a1"),u=e("3b10");for(var c in u)"default"!==c&&function(t){e.d(n,t,function(){return u[t]})}(c);e("291c");var r,o=e("f0c5"),i=Object(o["a"])(u["default"],a["b"],a["c"],!1,null,"4b4f0862",null,!1,a["a"],r);n["default"]=i.exports},e2a1:function(t,n,e){"use strict";var a,u=function(){var t=this,n=t.$createElement;t._self._c},c=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return c}),e.d(n,"a",function(){return a})}},[["30dc","common/runtime","common/vendor"]]]);
});
require('pages/index/age_18.js');
__wxRoute = 'pages/index/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/index.js';

define('pages/index/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/index"],{"2d0f":function(t,e,a){},"4fa9":function(t,e,a){"use strict";var n=a("2d0f"),i=a.n(n);i.a},7566:function(t,e,a){"use strict";a.r(e);var n=a("8b9c"),i=a.n(n);for(var s in n)"default"!==s&&function(t){a.d(e,t,function(){return n[t]})}(s);e["default"]=i.a},"8b9c":function(t,e,a){"use strict";(function(t,n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=function(){return Promise.all([a.e("common/vendor"),a.e("pages/components/banner")]).then(a.bind(null,"1999"))},s=function(){return a.e("pages/components/topBar").then(a.bind(null,"0849"))},c={components:{banner:i,topBar:s},data:function(){return{swiperList:"",tabList:[{name:"发现",category_id:0},{name:"最新",category_id:1},{name:"关注",category_id:2}],category_id:0,articleList:[],page:{total:1,current_page:1,last_page:1,per_page:15}}},onLoad:function(){var t=this;t.getBanner(),t.getFindList()},onShow:function(){var t=this,e=this.category_id;switch(t.page.current_page=1,t.articleList=[],e){case 0:t.getFindList();break;case 1:t.getNewList();break;case 2:t.$store.state.token?t.getFocusList():this.category_id=0;break}},watch:{category_id:function(t){var e=this;switch(e.page.current_page=1,e.articleList=[],t){case 0:e.getFindList();break;case 1:e.getNewList();break;case 2:e.getFocusList();break}}},methods:{lower:function(){console.log(t("滚动到了底部"," at pages\\index\\index.vue:135"));var e=this,a=this.category_id;if(e.page.current_page<e.page.last_page)switch(e.page.current_page+=1,a){case 0:e.getFindList();break;case 1:e.getNewList();break;case 2:e.getFocusList();break;default:break}else n.showToast({title:"亲！没有更多数据了哦！",icon:"none"})},setPage:function(t){var e=this;for(var a in t)"data"!==a&&(e.page.item=t[a])},getBanner:function(){var e=this,a={url:e.$api.homebanners};e.$httpRequest(a).then(function(t){1===t.code?e.swiperList=t.data.list:n.showToast({title:"轮播图图片加载失败",icon:"none"})},function(e){console.log(t(e," at pages\\index\\index.vue:188"))})},getFindList:function(){var e=this,a={url:e.$api.recomList,data:{page:e.page.current_page}};e.$httpRequest(a).then(function(a){1===a.code?(console.log(t(a.data.list," at pages\\index\\index.vue:203")),e.articleList.length<1?e.articleList=a.data.list.data:e.page.current_page<a.data.list.last_page&&(e.articleList=e.articleList.concat(a.data.list.data)),e.setPage(a.data.list)):n.showToast({title:"发现文章列表加载失败",icon:"none"})})},getNewList:function(){var e=this,a={url:e.$api.newList,data:{page:e.page.current_page}};e.$httpRequest(a).then(function(a){1===a.code?(console.log(t("最新文章列表",a.data.list," at pages\\index\\index.vue:231")),e.page.current_page>=a.data.list.last_page&&e.articleList.length<1?e.articleList=a.data.list.data:e.articleList=e.articleList.concat(a.data.list.data),e.setPage(a.data.list)):n.showToast({title:"最新文章列表加载失败",icon:"none"})})},getFocusList:function(){var e=this,a={url:e.$api.focusList,data:{page:e.page.current_page}};e.$httpRequest(a).then(function(a){console.log(t("关注文章列表",a," at pages\\index\\index.vue:258")),1===a.code?(e.page.current_page>=a.data.list.last_page&&e.articleList.length<1?e.articleList=a.data.list.data:a.data.list&&(e.articleList=e.articleList.concat(a.data.list)),e.setPage(a.data.list)):n.showToast({title:"关注文章列表加载失败",icon:"none"})})},goRelease:function(){n.navigateTo({url:"./release/release"})},selectTab:function(t,e){this.category_id=t.category_id},goInfo:function(t){n.navigateTo({url:"./article/detail?article_id="+t})}}};e.default=c}).call(this,a("0de9")["default"],a("6e42")["default"])},b574:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},s=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return s}),a.d(e,"a",function(){return n})},cf4d:function(t,e,a){"use strict";(function(t){a("7539"),a("921b");n(a("66fd"));var e=n(a("fe67"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},fe67:function(t,e,a){"use strict";a.r(e);var n=a("b574"),i=a("7566");for(var s in i)"default"!==s&&function(t){a.d(e,t,function(){return i[t]})}(s);a("4fa9");var c,o=a("f0c5"),r=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"532ec3de",null,!1,n["a"],c);e["default"]=r.exports}},[["cf4d","common/runtime","common/vendor"]]]);
});
require('pages/index/index.js');
__wxRoute = 'pages/login/login';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/login.js';

define('pages/login/login.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0f9a":function(e,t,n){"use strict";var a=n("9ce4"),o=n.n(a);o.a},"0fe1":function(e,t,n){"use strict";(function(e){n("7539"),n("921b");a(n("66fd"));var t=a(n("a0b3"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},3605:function(e,t,n){"use strict";n.r(t);var a=n("9b63"),o=n.n(a);for(var i in a)"default"!==i&&function(e){n.d(t,e,function(){return a[e]})}(i);t["default"]=o.a},"9b63":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return n.e("pages/components/uni-popup/uni-popup").then(n.bind(null,"13b1"))},i={components:{uniPopup:o},data:function(){return{checked:!0,page_isBindTel:!1,mobile:18888888888}},methods:{checkboxChange:function(e){var t=this;t.checked=e.detail.value.length>0},authorLogin:function(t){var n=this;if(n.checked){var o={url:n.$api.login,method:"POST",data:{code:"",user_info:t.detail.rawData,encrypted_data:t.detail.encryptedData,iv:t.detail.iv,signature:t.detail.signature,referee_id:wx.getStorageSync("referee_id")}};e.clearStorageSync(),e.login({provider:"weixin",success:function(t){console.log(a(t," at pages\\login\\login.vue:104")),e.showLoading({title:"登录中"}),o.data.code=t.code,n.$httpRequest(o).then(function(t){e.hideLoading(),n.$store.commit("setToken",t.data.token),n.$store.commit("redirectLoginPage",{status:!1}),e.setStorageSync("token",t.data.token),e.setStorageSync("user_id",t.data.user_id),e.setStorageSync("is_merchant",t.data.is_merchant);var o="yes"===t.data.mobile_isbind;o?t.data.is_merchant>0?e.reLaunch({url:"/pages/partner/index"}):e.navigateBack({delta:1,success:function(){e.login({provider:"weixin",success:function(t){var o=e.getStorageSync("encryptedData"),i=e.getStorageSync("iv"),c={url:n.$api.setpCount,method:"POST",data:{encryptedData:o,iv:i,code:t.code}};n.$httpRequest(c).then(function(e){console.log(a(e," at pages\\login\\login.vue:151"))})}})}}):n.page_isBindTel=!0})}})}else e.showToast({title:"请勾选相关用户协议",icon:"none"})},reject:function(){this.$store.commit("redirectLoginPage",{status:!1}),e.switchTab({url:"../index/index"})},getPhoneNumber:function(e){console.log(a("获取到手机号码",e," at pages\\login\\login.vue:175"));var t=this;t.open()},bindWechatTel:function(){var t=this,n={url:t.$api.mobileBind,method:"POST",data:{mobile:15979779714}};t.$httpRequest(n).then(function(t){console.log(a(t," at pages\\login\\login.vue:219")),e.showToast({title:t.msg,success:function(){t.data.is_merchant>0?e.redirectTo({url:"/pages/partner/index"}):e.navigateBack({delta:1})}})})},open:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close()}}};t.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},"9ce4":function(e,t,n){},a0b3:function(e,t,n){"use strict";n.r(t);var a=n("b4ee"),o=n("3605");for(var i in o)"default"!==i&&function(e){n.d(t,e,function(){return o[e]})}(i);n("0f9a"),n("f735");var c,r=n("f0c5"),u=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"39169ff6",null,!1,a["a"],c);t["default"]=u.exports},b4ee:function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c},i=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return i}),n.d(t,"a",function(){return a})},dc21:function(e,t,n){},f735:function(e,t,n){"use strict";var a=n("dc21"),o=n.n(a);o.a}},[["0fe1","common/runtime","common/vendor"]]]);
});
require('pages/login/login.js');
__wxRoute = 'pages/login/bindTel';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/login/bindTel.js';

define('pages/login/bindTel.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/bindTel"],{2194:function(e,t,n){"use strict";n.r(t);var u=n("3b47"),a=n.n(u);for(var c in u)"default"!==c&&function(e){n.d(t,e,function(){return u[e]})}(c);t["default"]=a.a},"3b47":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{mobile:"",code:"",time:60,isGetCode:!1}},methods:{getCode:function(){}}};t.default=u},"7b65":function(e,t,n){"use strict";var u,a=function(){var e=this,t=e.$createElement;e._self._c},c=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return c}),n.d(t,"a",function(){return u})},"901a":function(e,t,n){},a577:function(e,t,n){"use strict";var u=n("901a"),a=n.n(u);a.a},cee9:function(e,t,n){"use strict";n.r(t);var u=n("7b65"),a=n("2194");for(var c in a)"default"!==c&&function(e){n.d(t,e,function(){return a[e]})}(c);n("a577");var o,r=n("f0c5"),i=Object(r["a"])(a["default"],u["b"],u["c"],!1,null,"15aca6bd",null,!1,u["a"],o);t["default"]=i.exports},ebe4:function(e,t,n){"use strict";(function(e){n("7539"),n("921b");u(n("66fd"));var t=u(n("cee9"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["ebe4","common/runtime","common/vendor"]]]);
});
require('pages/login/bindTel.js');
__wxRoute = 'pages/index/release/release';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/release/release.js';

define('pages/index/release/release.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/release/release"],{"37ca":function(e,t,a){"use strict";var n,o=function(){var e=this,t=e.$createElement;e._self._c},i=[];a.d(t,"b",function(){return o}),a.d(t,"c",function(){return i}),a.d(t,"a",function(){return n})},"5fa3":function(e,t,a){},"6fae":function(e,t,a){"use strict";a.r(t);var n=a("b4cf"),o=a.n(n);for(var i in n)"default"!==i&&function(e){a.d(t,e,function(){return n[e]})}(i);t["default"]=o.a},"71f0":function(e,t,a){"use strict";(function(e){a("7539"),a("921b");n(a("66fd"));var t=n(a("e4fe"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},"93f9":function(e,t,a){"use strict";var n=a("5fa3"),o=a.n(n);o.a},b4cf:function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(a("75e1"));function i(e){return e&&e.__esModule?e:{default:e}}var s=function(){return a.e("pages/components/topBar").then(a.bind(null,"0849"))},r={components:{topBar:s},data:function(){return{formData:{article_title:"",article_content:"",category_id:"",tags:"",address:"",address_latitude:"",address_longitude:"",uploaded:[],source:"umi"},imgArr:[],imgUploadID:[],time:0}},onLoad:function(e){e.type&&(this.formData.source=e.type)},methods:{goIndex:function(){e.switchTab({url:"../index"})},getAddress:function(){var t=this;e.chooseLocation({success:function(e){console.log(n(e," at pages\\index\\release\\release.vue:87")),console.log(n("位置名称："+e.name," at pages\\index\\release\\release.vue:88")),console.log(n("详细地址："+e.address," at pages\\index\\release\\release.vue:89")),console.log(n("纬度："+e.latitude," at pages\\index\\release\\release.vue:90")),console.log(n("经度："+e.longitude," at pages\\index\\release\\release.vue:91")),t.formData.address=e.address+e.name,t.formData.address_latitude=e.latitude,t.formData.address_longitude=e.longitude}})},delImg:function(e){this.imgArr.splice(e,1),this.formData.uploaded.splice(e,1)},uploadImg:function(){var t=this,a=this.imgArr.length,i=9-a;i>0?e.chooseImage({count:i,sizeType:["original","compressed"],sourceType:["album"],success:function(a){var i=0,s=a.tempFilePaths.length;e.showLoading({title:"上传图片中.."}),a.tempFilePaths.map(function(a,r){(0,o.default)(a).then(function(o){i++,i===s&&(e.hideLoading(),e.showToast({title:s+"张图片上传成功",icon:"none"})),t.imgArr.push(a),console.log(n(JSON.parse(o).data.file_id," at pages\\index\\release\\release.vue:136")),t.formData.uploaded.push(JSON.parse(o).data.file_id)})},function(t){e.hideLoading(),e.showToast({title:"第"+(index+1)+"张图片上传失败",icon:"none"})})}}):e.showToast({title:"最多只能传9张图片哦",icon:"none"})},releaseAction:function(){var t=this;if(t.formData.article_content){e.showLoading({title:"发布中"});var a={url:t.$api.articleRelease,data:{formData:JSON.stringify(t.formData)},method:"POST"};t.$httpRequest(a).then(function(a){e.hideLoading(),1===a.code?(e.showToast({title:"发布成功,即将自动返回",icon:"none"}),t.goIndex()):e.showToast({title:a.msg,icon:"none"})})}else e.showToast({title:"文章内容不能为空！",icon:"none"})}}};t.default=r}).call(this,a("6e42")["default"],a("0de9")["default"])},e4fe:function(e,t,a){"use strict";a.r(t);var n=a("37ca"),o=a("6fae");for(var i in o)"default"!==i&&function(e){a.d(t,e,function(){return o[e]})}(i);a("93f9");var s,r=a("f0c5"),l=Object(r["a"])(o["default"],n["b"],n["c"],!1,null,"281f85a7",null,!1,n["a"],s);t["default"]=l.exports}},[["71f0","common/runtime","common/vendor"]]]);
});
require('pages/index/release/release.js');
__wxRoute = 'pages/index/release/center';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/release/center.js';

define('pages/index/release/center.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/release/center"],{"0d5f":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{time:0}},onLoad:function(){var t=getCurrentPages();console.log(e(t," at pages\\index\\release\\center.vue:14"))},onTabItemTap:function(e){var t=n.getStorageSync("token");this.time%2!==0?n.switchTab({url:"../index"}):t||this.time%2!==0?n.reLaunch({url:"release"}):n.reLaunch({url:"../../login/login"}),this.time+=1}};t.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},7932:function(e,t,n){"use strict";(function(e){n("7539"),n("921b");u(n("66fd"));var t=u(n("7f7d"));function u(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7f7d":function(e,t,n){"use strict";n.r(t);var u=n("7fe1"),r=n("d293");for(var a in r)"default"!==a&&function(e){n.d(t,e,function(){return r[e]})}(a);var c,i=n("f0c5"),o=Object(i["a"])(r["default"],u["b"],u["c"],!1,null,"9fe00fd6",null,!1,u["a"],c);t["default"]=o.exports},"7fe1":function(e,t,n){"use strict";var u,r=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return u})},d293:function(e,t,n){"use strict";n.r(t);var u=n("0d5f"),r=n.n(u);for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);t["default"]=r.a}},[["7932","common/runtime","common/vendor"]]]);
});
require('pages/index/release/center.js');
__wxRoute = 'pages/index/article/detail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/index/article/detail.js';

define('pages/index/article/detail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/article/detail"],{"07f3":function(e,t,i){"use strict";var a,n=function(){var e=this,t=e.$createElement;e._self._c},o=[];i.d(t,"b",function(){return n}),i.d(t,"c",function(){return o}),i.d(t,"a",function(){return a})},"089e":function(e,t,i){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(){return i.e("pages/components/topBar").then(i.bind(null,"0849"))},o=function(){return Promise.all([i.e("common/vendor"),i.e("pages/components/banner")]).then(i.bind(null,"1999"))},l={components:{topBar:n,banner:o},data:function(){return{scrollTop:0,isHeadShow:!0,title:"",article_id:"",isAuthor:!1,indicatorDots:!0,autoplay:!0,interval:2e3,duration:500,indicatorActiveColor:"#ffffff",detail:{},userInfo:{},swiperList:[],strings:[],speakVal:"",commentVal:"",comment_id:"",sumList:{zanTotal:2e3,starTotal:1578,megTotal:1959}}},onLoad:function(e){this.article_id=e.article_id,this.getDetail(this.article_id)},computed:{statusBarHeight:function(){return this.$store.state.statusBarHeight}},methods:{goBack:function(){e.navigateBack({delta:1})},onScroll:function(e){var t=this;e.detail.scrollTop>t.scrollTop&&t.isHeadShow?t.isHeadShow=!1:e.detail.scrollTop<t.scrollTop&&!t.isHeadShow&&(t.isHeadShow=!0),t.scrollTop=e.detail.scrollTop},getDetail:function(t){var i=this,a={url:i.$api.articleDetail,data:{article_id:t}};i.$httpRequest(a).then(function(t){i.detail=t.data.detail,e.getStorage({key:"user_id",success:function(e){e.data===t.data.detail.user_id&&(i.isAuthor=!0)}});var a=t.data.detail.article_content,n=new RegExp("img");a=a.replace(n,'img style="max-width: 100%;"'),i.strings=a})},zanAction:function(t,i){var n=this;console.log(a("点赞",t,t.islike,i," at pages\\index\\article\\detail.vue:174"));var o=this,l=this.$api.commentUnlike;"no"===t.islike&&(l=this.$api.commentLike);var s={url:l,data:{comment_id:t.id}};o.$httpRequest(s).then(function(t){switch(console.log(a("成功了",t," at pages\\index\\article\\detail.vue:187")),n.detail.comments_show[i].islike){case"yes":n.detail.comments_show[i].islike="no",n.detail.comments_show[i].likenum-=1,e.showToast({title:"取消点赞成功",icon:"none"});break;case"no":n.detail.comments_show[i].islike="yes",n.detail.comments_show[i].likenum+=1,e.showToast({title:"点赞成功",icon:"none"});break}})},focusAuthor:function(e,t){console.log(a("关注"," at pages\\index\\article\\detail.vue:211"));var i=this,n=this.$api.articleunFocus;"no"===t&&(n=this.$api.articleFocus);var o={url:n,data:{article_id:e}};i.$httpRequest(o).then(function(e){switch(console.log(a("成功了",e," at pages\\index\\article\\detail.vue:224")),i.detail.isFocus){case"yes":i.detail.isFocus="no";break;case"no":i.detail.isFocus="yes";break}})},commentZanAction:function(t,i,n){var o=this;console.log(a("点赞",t,t.isreplylike,i,n," at pages\\index\\article\\detail.vue:238"));var l=this,s=this.$api.commentreplyunlike;"no"===t.isreplylike&&(s=this.$api.commentReplyLike);var c={url:s,data:{reply_id:t.id}};l.$httpRequest(c).then(function(t){switch(console.log(a("成功了",t," at pages\\index\\article\\detail.vue:251")),o.detail.comments_show[i].replys[n].isreplylike){case"yes":o.detail.comments_show[i].replys[n].isreplylike="no",o.detail.comments_show[i].replys[n].replylikenum-=1,e.showToast({title:"取消点赞成功",icon:"none"});break;case"no":o.detail.comments_show[i].replys[n].isreplylike="yes",o.detail.comments_show[i].replys[n].replylikenum+=1,e.showToast({title:"点赞成功",icon:"none"});break}})},likeArticle:function(){console.log(a("文章点赞"," at pages\\index\\article\\detail.vue:275"));var e=this,t=this.$api.articleLike;this.detail.isLike&&(t=this.$api.articleunLike);var i={url:t,data:{article_id:this.article_id}};e.$httpRequest(i).then(function(t){var i=e.detail.isLike,a=e.detail.articlelike_count;e.detail.articlelike_count=i?a-1:a+1,e.detail.isLike=!i})},onShareAppMessage:function(e){var t=this,i={url:this.$api.articleShare,method:"POST",data:{article_id:t.article_id,source:"wechat"}};return"button"===e.from&&(console.log(a("分享按钮点击"," at pages\\index\\article\\detail.vue:307")),t.$httpRequest(i).then(function(e){console.log(a(e," at pages\\index\\article\\detail.vue:309"))})),{title:t.detail.article_title,path:"/pages/index/article/detail?article_id="+t.article_id}},deleteArticle:function(t){var i=this,n={url:this.$api.articleDelete,method:"POST",data:{article_id:i.article_id}};e.showModal({title:"温馨提示",content:"确认删除此篇文章？",success:function(t){t.confirm?(console.log(a("用户点击确定"," at pages\\index\\article\\detail.vue:333")),i.$httpRequest(n).then(function(t){e.showToast({title:"删除成功",icon:"none",success:function(){e.navigateBack({delta:1})}})})):t.cancel&&e.showToast({title:"已取消",icon:"none"})}})},addComment:function(t){var i=this;console.log(a(this.speakVal," at pages\\index\\article\\detail.vue:357"));var n=this,o={url:this.$api.articleAddComment,data:{article_id:n.article_id,comment:t.detail.value}};n.$httpRequest(o).then(function(t){n.closeComment(),n.getDetail(i.article_id),e.showToast({title:"发布成功",icon:"none"})})},addCommentReply:function(t){var i=this,a=this,n={url:this.$api.commentreply,data:{comment_id:this.comment_id,comment:t.detail.value}};a.$httpRequest(n).then(function(t){a.closeComment(),a.getDetail(i.article_id),e.showToast({title:"发布成功",icon:"none"})})},commentComment:function(e){console.log(a("点击了",e," at pages\\index\\article\\detail.vue:396")),this.comment_id=e},closeComment:function(){this.comment_id="",this.commentVal="",this.speakVal=""}}};t.default=l}).call(this,i("6e42")["default"],i("0de9")["default"])},"10ea":function(e,t,i){"use strict";(function(e){i("7539"),i("921b");a(i("66fd"));var t=a(i("19f2"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,i("6e42")["createPage"])},"19f2":function(e,t,i){"use strict";i.r(t);var a=i("07f3"),n=i("2812");for(var o in n)"default"!==o&&function(e){i.d(t,e,function(){return n[e]})}(o);i("9058");var l,s=i("f0c5"),c=Object(s["a"])(n["default"],a["b"],a["c"],!1,null,"65f874f5",null,!1,a["a"],l);t["default"]=c.exports},2812:function(e,t,i){"use strict";i.r(t);var a=i("089e"),n=i.n(a);for(var o in a)"default"!==o&&function(e){i.d(t,e,function(){return a[e]})}(o);t["default"]=n.a},9058:function(e,t,i){"use strict";var a=i("d8d4"),n=i.n(a);n.a},d8d4:function(e,t,i){}},[["10ea","common/runtime","common/vendor"]]]);
});
require('pages/index/article/detail.js');
__wxRoute = 'pages/integral/integral';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/integral/integral.js';

define('pages/integral/integral.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/integral/integral"],{"02aa":function(t,n,e){"use strict";e.r(n);var o=e("9b8b"),a=e("0ad1");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("bc4d");var u,r=e("f0c5"),c=Object(r["a"])(a["default"],o["b"],o["c"],!1,null,"1208a435",null,!1,o["a"],u);n["default"]=c.exports},"0ad1":function(t,n,e){"use strict";e.r(n);var o=e("7d48"),a=e.n(o);for(var i in o)"default"!==i&&function(t){e.d(n,t,function(){return o[t]})}(i);n["default"]=a.a},"7d48":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return e.e("pages/components/topBar").then(e.bind(null,"0849"))},a=function(){return e.e("pages/components/goodList").then(e.bind(null,"31b1"))},i={components:{topBar:o,goodList:a},computed:{token:function(){return this.$store.state.token}},data:function(){return{info:{level:1,integral:0},goodList:""}},onShow:function(){this.info.user||this.getDetail()},methods:{getDetail:function(){var t=this,n={url:t.$api.integralIndex};t.$httpRequest(n).then(function(n){t.info=n.data.info;var e=n.data.info.goods_list.data,o=[];e.map(function(t,n){var e={};e.goods_id=t.goods_id,e.grade=t.sku[0].goods_price,e.name=t.goods_name,e.image=t.image,o.push(e)}),t.goodList=o})},navigate:function(n){t.navigateTo({url:n})}}};n.default=i}).call(this,e("6e42")["default"])},"9b8b":function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return o})},a8e0:function(t,n,e){},bc4d:function(t,n,e){"use strict";var o=e("a8e0"),a=e.n(o);a.a},d0ef:function(t,n,e){"use strict";(function(t){e("7539"),e("921b");o(e("66fd"));var n=o(e("02aa"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])}},[["d0ef","common/runtime","common/vendor"]]]);
});
require('pages/integral/integral.js');
__wxRoute = 'pages/integral/goodDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/integral/goodDetail.js';

define('pages/integral/goodDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/integral/goodDetail"],{"71fd":function(e,t,o){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return Promise.all([o.e("common/vendor"),o.e("pages/components/banner")]).then(o.bind(null,"1999"))},n=function(){return o.e("pages/components/uni-popup/uni-popup").then(o.bind(null,"13b1"))},s={components:{banner:i,uniPopup:n},data:function(){return{goods_id:"",detail:"",specData:"",swiperList:[],goods:{},select_arr:[],select_name:[],goods_num:1}},onLoad:function(t){console.log(e(t," at pages\\integral\\goodDetail.vue:89")),t.goods_id&&(this.goods_id=t.goods_id,this.getDetail(t.goods_id))},methods:{getDetail:function(t){var o=this,a={url:o.$api.goodDetail,data:{goods_id:this.goods_id}};o.$httpRequest(a).then(function(t){console.log(e(t.data," at pages\\integral\\goodDetail.vue:107")),o.detail=t.data.detail,o.specData=t.data.specData,o.swiperList=t.data.detail.image;var a=t.data.detail.content,i=new RegExp("img");if(a=a.replace(i,'img style="max-width: 100%;"'),o.detail.content=a,t.data.specData){o.specData.spec_attr.map(function(e,t){o.select_arr.push(e.spec_items[0].item_id),o.select_name.push(e.spec_items[0].spec_value)});var n={},s=o.select_arr.join("_");o.specData.spec_list.map(function(t,o){t.spec_sku_id===s&&(n.goods_price=t.form.goods_price,t.form.image_path&&(n.image_path=t.form.image_path,console.log(e(t.form.image_path," at pages\\integral\\goodDetail.vue:133"))))}),o.goods=n}else o.select_arr.push(t.data.detail.sku[0].goods_sku_id),o.goods.goods_price=t.data.detail.sku[0].goods_price,o.goods.image_path=t.data.detail.image[0].file_path})},goOrder:function(){var t=this,o=t.select_arr.join("_"),i={url:t.$api.buyNowinventory,data:{goods_id:this.goods_id,goods_num:this.goods_num,goods_sku_id:o}};t.$httpRequest(i).then(function(t){if(1===t.code){var o=JSON.stringify(i.data);return console.log(e(o," at pages\\integral\\goodDetail.vue:188")),void a.navigateTo({url:"order/orderSure?obj="+o})}a.showToast({title:t.msg,icon:"none"})})},open:function(){this.$refs.popup.open()},close:function(){this.$refs.popup.close()},selectNorm:function(t,o,a){var i=this;i.select_arr[t]=o.item_id;var n=[],s=[];i.select_arr.map(function(e,a){a===t?n.push(o.item_id):n.push(e)}),i.select_arr=n,i.select_name.map(function(e,a){a===t?s.push(o.spec_value):s.push(e)}),i.select_name=s;var r=i.select_arr.join("_"),d=i.goods;i.specData.spec_list.map(function(t,o){console.log(e(t,r," at pages\\integral\\goodDetail.vue:241")),t.spec_sku_id===r&&(d.goods_price=t.form.goods_price,d.goods_price=t.form.goods_price,t.form.image_path&&(d.image_path=t.form.image_path,console.log(e(t.form.image_path," at pages\\integral\\goodDetail.vue:247"))))}),i.goods=d},controlNum:function(e){if("+"===e){if(this.goods_num>=this.goods.stock_num)return void a.showToast({title:"库存不足",icon:"none"});this.goods_num+=1}else if("-"===e&&this.goods_num>1)return void(this.goods_num-=1)}}};t.default=s}).call(this,o("0de9")["default"],o("6e42")["default"])},"8b53":function(e,t,o){"use strict";o.r(t);var a=o("e697"),i=o("fab4");for(var n in i)"default"!==n&&function(e){o.d(t,e,function(){return i[e]})}(n);o("c6d6");var s,r=o("f0c5"),d=Object(r["a"])(i["default"],a["b"],a["c"],!1,null,"3f16a8d0",null,!1,a["a"],s);t["default"]=d.exports},c6d6:function(e,t,o){"use strict";var a=o("d23f"),i=o.n(a);i.a},c7b8:function(e,t,o){"use strict";(function(e){o("7539"),o("921b");a(o("66fd"));var t=a(o("8b53"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,o("6e42")["createPage"])},d23f:function(e,t,o){},e697:function(e,t,o){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},n=[];o.d(t,"b",function(){return i}),o.d(t,"c",function(){return n}),o.d(t,"a",function(){return a})},fab4:function(e,t,o){"use strict";o.r(t);var a=o("71fd"),i=o.n(a);for(var n in a)"default"!==n&&function(e){o.d(t,e,function(){return a[e]})}(n);t["default"]=i.a}},[["c7b8","common/runtime","common/vendor"]]]);
});
require('pages/integral/goodDetail.js');
__wxRoute = 'pages/integral/order/orderSure';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/integral/order/orderSure.js';

define('pages/integral/order/orderSure.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/integral/order/orderSure"],{"0ac9":function(t,e,r){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c},n=[];r.d(e,"b",function(){return a}),r.d(e,"c",function(){return n}),r.d(e,"a",function(){return o})},"2cae":function(t,e,r){"use strict";r.r(e);var o=r("0ac9"),a=r("57f8");for(var n in a)"default"!==n&&function(t){r.d(e,t,function(){return a[t]})}(n);r("5615");var i,u=r("f0c5"),d=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"70594940",null,!1,o["a"],i);e["default"]=d.exports},"4f30":function(t,e,r){"use strict";(function(t){r("7539"),r("921b");o(r("66fd"));var e=o(r("2cae"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,r("6e42")["createPage"])},5615:function(t,e,r){"use strict";var o=r("8d89"),a=r.n(o);a.a},"57f8":function(t,e,r){"use strict";r.r(e);var o=r("cbcc"),a=r.n(o);for(var n in o)"default"!==n&&function(t){r.d(e,t,function(){return o[t]})}(n);e["default"]=a.a},"8d89":function(t,e,r){},cbcc:function(t,e,r){"use strict";(function(t,r){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o={data:function(){return{opt:{},address:{},good:{name:"电子烟电子烟",norm:"黑色普通版",integral:999,num:1,fare:100},goods_list:[],order_pay_price:0,order_total_discount:0,order_total_num:0,order_total_price:0,express_price:0,buyStatus:!1}},onLoad:function(e){console.log(t(e," at pages\\integral\\order\\orderSure.vue:84"));var r=JSON.parse(e.obj);this.opt=r,this.getDetail()},methods:{getDetail:function(){var e=this,r=this.opt;r.delivery=10;var o={url:e.$api.buyNow,data:r};e.$httpRequest(o).then(function(r){console.log(t(r," at pages\\integral\\order\\orderSure.vue:102")),e.address=r.data.address,e.goods_list=r.data.goods_list,e.order_pay_price=r.data.order_pay_price,e.order_total_discount=r.data.order_total_discount,e.order_total_num=r.data.order_total_num,e.order_total_price=r.data.order_total_price,e.express_price=r.data.express_price})},goPuy:function(){r.showLoading({title:"正在提交订单"});var t=this,e=this.opt;if(this.buyStatus)r.showToast({title:"请稍后再试",icon:"none"});else{this.buyStatus=!0,e.delivery=10;var o={url:t.$api.buyNow,data:e,method:"POST"};t.$httpRequest(o).then(function(e){r.hideLoading(),1===e.code?r.navigateTo({url:"success?num="+t.order_pay_price+"&order_id="+e.data.order_id}):r.showToast({title:e.msg,icon:"none"})}),setTimeout(function(){t.buyStatus=!1}.bind(t),1e3)}},goBack:function(){r.navigateBack({delta:1})}}};e.default=o}).call(this,r("0de9")["default"],r("6e42")["default"])}},[["4f30","common/runtime","common/vendor"]]]);
});
require('pages/integral/order/orderSure.js');
__wxRoute = 'pages/integral/order/orderDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/integral/order/orderDetail.js';

define('pages/integral/order/orderDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/integral/order/orderDetail"],{"0e82":function(e,t,n){"use strict";var r=n("1f10"),a=n.n(r);a.a},"1f10":function(e,t,n){},"48a3":function(e,t,n){"use strict";n.r(t);var r=n("b261"),a=n.n(r);for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);t["default"]=a.a},6434:function(e,t,n){"use strict";(function(e){n("7539"),n("921b");r(n("66fd"));var t=r(n("bc1a"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"7c6d":function(e,t,n){"use strict";var r,a=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return r})},b261:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{order_id:"",detail:"",good:{name:"电子烟电子烟",norm:"黑色普通版",integral:999,num:1,fare:100}}},onLoad:function(t){console.log(e("订单详情",t," at pages\\integral\\order\\orderDetail.vue:69")),this.order_id=t.order_id,this.getDetail(t.order_id)},methods:{getDetail:function(t){var n=this,r={url:n.$api.orderDetail,data:{order_id:t}};n.$httpRequest(r).then(function(t){console.log(e(t," at pages\\integral\\order\\orderDetail.vue:85")),n.detail=t.data.order})}}};t.default=n}).call(this,n("0de9")["default"])},bc1a:function(e,t,n){"use strict";n.r(t);var r=n("7c6d"),a=n("48a3");for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);n("0e82");var i,u=n("f0c5"),d=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"04621e9d",null,!1,r["a"],i);t["default"]=d.exports}},[["6434","common/runtime","common/vendor"]]]);
});
require('pages/integral/order/orderDetail.js');
__wxRoute = 'pages/integral/order/success';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/integral/order/success.js';

define('pages/integral/order/success.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/integral/order/success"],{"02d6":function(e,n,t){"use strict";(function(e,r){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return t.e("pages/components/topBar").then(t.bind(null,"0849"))},o={components:{topBar:u},data:function(){return{num:0,order_id:""}},onLoad:function(n){console.log(e(n.num," at pages\\integral\\order\\success.vue:37")),n.num&&(this.num=n.num,this.order_id=n.order_id)},methods:{achieve:function(){console.log(e("点击了完成"," at pages\\integral\\order\\success.vue:46")),r.switchTab({url:"../integral"})},orderDetail:function(){r.navigateTo({url:"orderDetail?order_id="+this.order_id})}}};n.default=o}).call(this,t("0de9")["default"],t("6e42")["default"])},"302e":function(e,n,t){"use strict";var r,u=function(){var e=this,n=e.$createElement;e._self._c},o=[];t.d(n,"b",function(){return u}),t.d(n,"c",function(){return o}),t.d(n,"a",function(){return r})},3070:function(e,n,t){},"4f70":function(e,n,t){"use strict";t.r(n);var r=t("02d6"),u=t.n(r);for(var o in r)"default"!==o&&function(e){t.d(n,e,function(){return r[e]})}(o);n["default"]=u.a},"9c2e":function(e,n,t){"use strict";t.r(n);var r=t("302e"),u=t("4f70");for(var o in u)"default"!==o&&function(e){t.d(n,e,function(){return u[e]})}(o);t("da15");var a,c=t("f0c5"),i=Object(c["a"])(u["default"],r["b"],r["c"],!1,null,"22b10817",null,!1,r["a"],a);n["default"]=i.exports},a1e0:function(e,n,t){"use strict";(function(e){t("7539"),t("921b");r(t("66fd"));var n=r(t("9c2e"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("6e42")["createPage"])},da15:function(e,n,t){"use strict";var r=t("3070"),u=t.n(r);u.a}},[["a1e0","common/runtime","common/vendor"]]]);
});
require('pages/integral/order/success.js');
__wxRoute = 'pages/integral/plan';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/integral/plan.js';

define('pages/integral/plan.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/integral/plan"],{"0c91":function(e,t,n){},"2a6f":function(e,t,n){"use strict";(function(e,a){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return Promise.all([n.e("common/vendor"),n.e("pages/components/articleList")]).then(n.bind(null,"0b02"))},u={components:{articleList:o},data:function(){return{detail:{clock_in_days:0,is_clock:""}}},onLoad:function(){this.getDetail()},methods:{getDetail:function(){var t=this,n={url:t.$api.clockInPage};t.$httpRequest(n).then(function(n){console.log(e(n," at pages\\integral\\plan.vue:56")),t.detail=n.data})},goRelease:function(e){"yes"!==e?a.navigateTo({url:"../index/release/release?type=Clock_in"}):a.showToast({title:"今天已经打过卡了哦",icon:"none"})}}};t.default=u}).call(this,n("0de9")["default"],n("6e42")["default"])},"45ff":function(e,t,n){"use strict";var a=n("0c91"),o=n.n(a);o.a},4829:function(e,t,n){"use strict";n.r(t);var a=n("2a6f"),o=n.n(a);for(var u in a)"default"!==u&&function(e){n.d(t,e,function(){return a[e]})}(u);t["default"]=o.a},b94e:function(e,t,n){"use strict";var a,o=function(){var e=this,t=e.$createElement;e._self._c},u=[];n.d(t,"b",function(){return o}),n.d(t,"c",function(){return u}),n.d(t,"a",function(){return a})},d133:function(e,t,n){"use strict";n.r(t);var a=n("b94e"),o=n("4829");for(var u in o)"default"!==u&&function(e){n.d(t,e,function(){return o[e]})}(u);n("45ff");var c,i=n("f0c5"),l=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"ef33a7d0",null,!1,a["a"],c);t["default"]=l.exports},f26e:function(e,t,n){"use strict";(function(e){n("7539"),n("921b");a(n("66fd"));var t=a(n("d133"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])}},[["f26e","common/runtime","common/vendor"]]]);
});
require('pages/integral/plan.js');
__wxRoute = 'pages/integral/todayFoot';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/integral/todayFoot.js';

define('pages/integral/todayFoot.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/integral/todayFoot"],{"19bc":function(t,e,n){"use strict";var a=n("586a"),o=n.n(a);o.a},"228d":function(t,e,n){"use strict";var a,o=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return o}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return a})},"586a":function(t,e,n){},"726b":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return Promise.all([n.e("common/vendor"),n.e("pages/components/articleList")]).then(n.bind(null,"0b02"))},o={components:{articleList:a},data:function(){return{rankList:10,user_steps:"",list:""}},onLoad:function(){this.getFootDetail()},methods:{getFootDetail:function(){var t=this,e={url:t.$api.getFootCount};t.$httpRequest(e).then(function(e){t.user_steps=e.data.user_steps,t.list=e.data.list})},receiveIntegral:function(e,n){var a=this,o={url:a.$api.receiveIntegral,data:{input_date:e,ranking:n}};a.user_steps.is_receive>0?t.showToast({title:"不要太贪心哦",icon:"none"}):a.$httpRequest(o).then(function(e){t.showToast({title:e.data,icon:"none"}),a.user_steps.is_receive+=1})}}};e.default=o}).call(this,n("6e42")["default"])},"7c8d":function(t,e,n){"use strict";n.r(e);var a=n("228d"),o=n("aa3f");for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);n("19bc");var u,r=n("f0c5"),c=Object(r["a"])(o["default"],a["b"],a["c"],!1,null,"15d26573",null,!1,a["a"],u);e["default"]=c.exports},aa3f:function(t,e,n){"use strict";n.r(e);var a=n("726b"),o=n.n(a);for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);e["default"]=o.a},bacd:function(t,e,n){"use strict";(function(t){n("7539"),n("921b");a(n("66fd"));var e=a(n("7c8d"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["bacd","common/runtime","common/vendor"]]]);
});
require('pages/integral/todayFoot.js');
__wxRoute = 'pages/integral/rules';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/integral/rules.js';

define('pages/integral/rules.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/integral/rules"],{1678:function(n,t,e){"use strict";e.r(t);var u=e("dda3"),a=e.n(u);for(var r in u)"default"!==r&&function(n){e.d(t,n,function(){return u[n]})}(r);t["default"]=a.a},1903:function(n,t,e){"use strict";e.r(t);var u=e("ec87"),a=e("1678");for(var r in a)"default"!==r&&function(n){e.d(t,n,function(){return a[n]})}(r);e("ae72");var c,f=e("f0c5"),o=Object(f["a"])(a["default"],u["b"],u["c"],!1,null,"b13badf6",null,!1,u["a"],c);t["default"]=o.exports},ae72:function(n,t,e){"use strict";var u=e("af61"),a=e.n(u);a.a},af61:function(n,t,e){},b527:function(n,t,e){"use strict";(function(n){e("7539"),e("921b");u(e("66fd"));var t=u(e("1903"));function u(n){return n&&n.__esModule?n:{default:n}}n(t.default)}).call(this,e("6e42")["createPage"])},dda3:function(n,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u={data:function(){return{rules:["每个订单仅能使用一张优惠券，不兑现，不找零；","每张优惠券的使用条件请查看对应其的使用说明；","除非该优惠券有特殊说明，否则优惠券仅能够抵扣商品金额。","请在有效期间内使用优惠券，未使用的优惠券过期后将自动作废；","每个用户仅限使用一张新客户专享券","优惠券最终解释权归深圳市优逸电子科技有限公司"]}}};t.default=u},ec87:function(n,t,e){"use strict";var u,a=function(){var n=this,t=n.$createElement;n._self._c},r=[];e.d(t,"b",function(){return a}),e.d(t,"c",function(){return r}),e.d(t,"a",function(){return u})}},[["b527","common/runtime","common/vendor"]]]);
});
require('pages/integral/rules.js');
__wxRoute = 'pages/integral/integralDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/integral/integralDetail.js';

define('pages/integral/integralDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/integral/integralDetail"],{"122d":function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{tabs:["收支明细","兑换记录"],tabIndex:0,detail:{integral_total:0,is_sign:"",today_get_integral_limit_total:100,today_get_integral_total:0},left:"",menuList:{total:1,per_page:15,current_page:1,last_page:1,data:[]},convertList:{total:1,per_page:15,current_page:1,last_page:1,data:[]}}},watch:{tabIndex:function(t){1!==t?this.getParticulars():this.getConvertList()}},onLoad:function(){this.getDetail(),this.getParticulars()},methods:{getDetail:function(){var t=this,e={url:t.$api.userIntegralDetails};t.$httpRequest(e).then(function(e){t.detail=e.data,t.left=e.data.today_get_integral_total/e.data.today_get_integral_limit_total*100+"%"})},signIn:function(){var e=this,a={url:e.$api.signIn};e.$httpRequest(a).then(function(a){console.log(t(a," at pages\\integral\\integralDetail.vue:114")),e.detail.is_sign="yes"})},getParticulars:function(){var e=this,a={url:e.$api.integralLogs,data:{type:"all"}};e.$httpRequest(a).then(function(a){console.log(t("积分明细",a," at pages\\integral\\integralDetail.vue:129")),e.menuList=a.data.list})},getConvertList:function(){var e=this,a={url:e.$api.lists,data:{dataType:"all"}};e.$httpRequest(a).then(function(a){console.log(t("兑换明细",a," at pages\\integral\\integralDetail.vue:144"));var n=a.data.list;n.data.map(function(t,e){t.create_time=t.create_time.slice(0,10)}),e.convertList=n})},goRules:function(){a.navigateTo({url:"./rules"})},goDetail:function(){a.navigateTo({url:"../mine/todayExperience?type=integral"})},selectTab:function(t){this.tabIndex=t}}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},"745b":function(t,e,a){"use strict";(function(t){a("7539"),a("921b");n(a("66fd"));var e=n(a("ff12"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"74f6":function(t,e,a){"use strict";var n=a("c68a"),i=a.n(n);i.a},b487:function(t,e,a){"use strict";a.r(e);var n=a("122d"),i=a.n(n);for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);e["default"]=i.a},b57c:function(t,e,a){"use strict";var n,i=function(){var t=this,e=t.$createElement;t._self._c},l=[];a.d(e,"b",function(){return i}),a.d(e,"c",function(){return l}),a.d(e,"a",function(){return n})},c68a:function(t,e,a){},ff12:function(t,e,a){"use strict";a.r(e);var n=a("b57c"),i=a("b487");for(var l in i)"default"!==l&&function(t){a.d(e,t,function(){return i[t]})}(l);a("74f6");var r,u=a("f0c5"),o=Object(u["a"])(i["default"],n["b"],n["c"],!1,null,"131e4a93",null,!1,n["a"],r);e["default"]=o.exports}},[["745b","common/runtime","common/vendor"]]]);
});
require('pages/integral/integralDetail.js');
__wxRoute = 'pages/store/store';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/store/store.js';

define('pages/store/store.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/store/store"],{"0c4f":function(t,e,n){"use strict";var o=n("289f"),s=n.n(o);s.a},"0d89":function(t,e,n){},"289f":function(t,e,n){},"3a7a":function(t,e,n){"use strict";var o,s=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.isStore=!t.isStore})},a=[];n.d(e,"b",function(){return s}),n.d(e,"c",function(){return a}),n.d(e,"a",function(){return o})},4836:function(t,e,n){"use strict";(function(t){n("7539"),n("921b");o(n("66fd"));var e=o(n("f6e6"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"57cd":function(t,e,n){"use strict";(function(t,o){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var s=function(){return Promise.all([n.e("common/vendor"),n.e("pages/components/banner")]).then(n.bind(null,"1999"))},a=function(){return n.e("pages/components/topBar").then(n.bind(null,"0849"))},i={components:{banner:s,topBar:a},data:function(){return{swiperList:[],address:"",groups:"",groupsList:"",params:{longitude:"",latitude:"",region:"",type:""},storeLists:[],isStore:!0}},onLoad:function(){this.getBanners(),this.getGroups()},onShow:function(){var e=this;e.address||t.showModal({title:"温馨提示",content:"请选择你所在的位置信息",success:function(t){if(t.confirm)e.getAddress();else if(t.cancel)return}})},methods:{getAddress:function(){var e=this;t.chooseLocation({success:function(t){e.params.region="",e.params.longitude=t.longitude,e.params.latitude=t.latitude,e.address=t.address+t.name,e.getStoreList()}})},getBanners:function(){var t=this,e={url:t.$api.axhomeBanners};t.$httpRequest(e).then(function(e){console.log(o(e," at pages\\store\\store.vue:123")),t.swiperList=e.data.list})},getGroups:function(){var t=this,e={url:t.$api.storeLists};t.$httpRequest(e).then(function(e){console.log(o(e," at pages\\store\\store.vue:135")),t.groupsList=e.data.list})},getGroupDetailById:function(t){var e=this,n={url:e.$api.groupDetail,data:{id:t},method:"POST"};e.$httpRequest(n).then(function(t){e.groups=t.data.detail,e.isStore=!0})},copeQQ:function(e){console.log(o(e," at pages\\store\\store.vue:158")),e&&t.setClipboardData({data:e.toString(),success:function(){t.showToast({title:"群号码复制成功",icon:"success"})}})},getStoreList:function(){var e=this;e.params.region&&(e.params.longitude="",e.params.latitude="");var n={url:e.$api.axstoreLists,data:e.params};e.$httpRequest(n).then(function(n){n.data.list.length<1&&t.showToast({title:"亲！该地区暂时没有门店哦",icon:"none"}),e.storeLists=n.data.list,e.groups=n.data.groups})},bindPickerChange:function(t){console.log(o("picker发送选择改变，携带值为",t.target.value," at pages\\store\\store.vue:198")),this.params.region=t.target.value.join(","),this.address=t.target.value.join(","),this.getStoreList()},goStoreDetail:function(e){if(this.params.region){var n={shop_id:e?e.shop_id:"",longitude:e?e.longitude:"",latitude:e?e.latitude:""};t.navigateTo({url:"storeDetail?data="+JSON.stringify(n)})}else t.showToast({title:"请先选择您所在的地区",icon:"none"})}}};e.default=i}).call(this,n("6e42")["default"],n("0de9")["default"])},"86a4":function(t,e,n){"use strict";var o=n("0d89"),s=n.n(o);s.a},ad74:function(t,e,n){"use strict";n.r(e);var o=n("57cd"),s=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e["default"]=s.a},f6e6:function(t,e,n){"use strict";n.r(e);var o=n("3a7a"),s=n("ad74");for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);n("0c4f"),n("86a4");var i,r=n("f0c5"),u=Object(r["a"])(s["default"],o["b"],o["c"],!1,null,"10e6c2eb",null,!1,o["a"],i);e["default"]=u.exports}},[["4836","common/runtime","common/vendor"]]]);
});
require('pages/store/store.js');
__wxRoute = 'pages/store/storeDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/store/storeDetail.js';

define('pages/store/storeDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/store/storeDetail"],{"00a5":function(t,e,n){},"0232":function(t,e,n){"use strict";n.r(e);var a=n("8153"),i=n.n(a);for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);e["default"]=i.a},"24af":function(t,e,n){"use strict";var a,i=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"b",function(){return i}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return a})},8153:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{longitude:"",latitude:"",covers:[{latitude:"",longitude:"",iconPath:"../../static/img/icon.png",width:20,height:20,callout:{content:"",bgColor:"#131313",color:"#fff",borderRadius:5,padding:8}}],detail:""}},onLoad:function(e){console.log(t(e," at pages\\store\\storeDetail.vue:48"));var n=JSON.parse(e.data);this.longitude=n.longitude,this.latitude=n.latitude,this.covers[0].longitude=n.longitude,this.covers[0].latitude=n.latitude,this.getDetail(n)},methods:{getDetail:function(t){var e=this,n={url:e.$api.axstoreDetail,data:t};e.$httpRequest(n).then(function(t){e.detail=t.data.detail,e.covers[0].callout.content=t.data.detail.shop_name})}}};e.default=n}).call(this,n("0de9")["default"])},"93e2":function(t,e,n){"use strict";(function(t){n("7539"),n("921b");a(n("66fd"));var e=a(n("cfb2"));function a(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bc24:function(t,e,n){"use strict";var a=n("00a5"),i=n.n(a);i.a},cfb2:function(t,e,n){"use strict";n.r(e);var a=n("24af"),i=n("0232");for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);n("bc24");var u,c=n("f0c5"),r=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"9e460dc8",null,!1,a["a"],u);e["default"]=r.exports}},[["93e2","common/runtime","common/vendor"]]]);
});
require('pages/store/storeDetail.js');
__wxRoute = 'pages/mine/mine';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/mine.js';

define('pages/mine/mine.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/mine"],{"0613":function(t,e,n){},"142f":function(t,e,n){"use strict";n.r(e);var i=n("9deb"),a=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e["default"]=a.a},4190:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement;t._self._c},r=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return r}),n.d(e,"a",function(){return i})},"8ca9":function(t,e,n){"use strict";n.r(e);var i=n("4190"),a=n("142f");for(var r in a)"default"!==r&&function(t){n.d(e,t,function(){return a[t]})}(r);n("ac27");var o,u=n("f0c5"),l=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,"56dd3eb4",null,!1,i["a"],o);e["default"]=l.exports},"9deb":function(t,e,n){"use strict";(function(t,i){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=function(){return n.e("pages/components/topBar").then(n.bind(null,"0849"))},r=function(){return Promise.all([n.e("common/vendor"),n.e("pages/components/articleList")]).then(n.bind(null,"0b02"))},o={components:{topBar:a,articleList:r},data:function(){return{userInfo:{avatarUrl:"",nickName:"",mobile:"",sign:"",level:""},mycircle:[{num:0,name:"focus_num",title:"关注"},{num:0,title:"粉丝",name:"fans"},{num:0,title:"点赞",name:"like_num"}],menuList:[{imgUrl:"card",title:"习惯打卡",open:"navigate",url:"../integral/plan"},{imgUrl:"foot",title:"行走步数",open:"navigate",url:"../integral/todayFoot"},{imgUrl:"discount",title:"优惠券",open:"navigate",url:"./coupon/center"},{imgUrl:"prize",title:"兑换奖品",open:"navigate",url:"./coupon/mycoupon"}],articleList:[],like_article_list:[],tabList:["分享","点赞"],tabIndex:0}},computed:{token:function(){return this.$store.state.token}},onShow:function(){var t=this;t.getDetail()},methods:{getDetail:function(){var e=this,n={url:e.$api.userInfo};e.$httpRequest(n).then(function(n){var i=n.data;for(var a in e.userInfo)e.userInfo[a]=i.userInfo[a];console.log(t(i," at pages\\mine\\mine.vue:140")),e.articleList=i.article_list,e.like_article_list=i.like_article_list,e.mycircle.map(function(t){t.num=i.mycircle[t.name]})})},orderDetail:function(){i.navigateTo({url:"../integral/integralDetail"})},goPersonal:function(){i.navigateTo({url:"./personal"})},goMember:function(){i.navigateTo({url:"./member"})},goSetting:function(){var t=this.userInfo;i.navigateTo({url:"./setting?nickName="+t.nickName+"&avatarUrl="+t.avatarUrl})},selectTab:function(t){this.tabIndex=t}}};e.default=o}).call(this,n("0de9")["default"],n("6e42")["default"])},ac27:function(t,e,n){"use strict";var i=n("0613"),a=n.n(i);a.a},d583:function(t,e,n){"use strict";(function(t){n("7539"),n("921b");i(n("66fd"));var e=i(n("8ca9"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])}},[["d583","common/runtime","common/vendor"]]]);
});
require('pages/mine/mine.js');
__wxRoute = 'pages/mine/coupon/center';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/coupon/center.js';

define('pages/mine/coupon/center.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/coupon/center"],{"592b":function(t,n,e){"use strict";e.r(n);var o=e("a268"),a=e("8971");for(var u in a)"default"!==u&&function(t){e.d(n,t,function(){return a[t]})}(u);e("b6e0");var i,c=e("f0c5"),r=Object(c["a"])(a["default"],o["b"],o["c"],!1,null,"6a6b25a9",null,!1,o["a"],i);n["default"]=r.exports},"5dc6":function(t,n,e){"use strict";(function(t){e("7539"),e("921b");o(e("66fd"));var n=o(e("592b"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},8971:function(t,n,e){"use strict";e.r(n);var o=e("d178"),a=e.n(o);for(var u in o)"default"!==u&&function(t){e.d(n,t,function(){return o[t]})}(u);n["default"]=a.a},a268:function(t,n,e){"use strict";var o,a=function(){var t=this,n=t.$createElement;t._self._c},u=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return u}),e.d(n,"a",function(){return o})},b6e0:function(t,n,e){"use strict";var o=e("fedf"),a=e.n(o);a.a},d178:function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=function(){return Promise.all([e.e("common/vendor"),e.e("pages/components/banner")]).then(e.bind(null,"1999"))},a={components:{banner:o},data:function(){return{swiperList:"",categorys:"",id_default:"",list:""}},onLoad:function(){this.getBanners(),this.getCouponList()},methods:{getBanners:function(){var t=this,n={url:t.$api.couponBanners};t.$httpRequest(n).then(function(n){t.swiperList=n.data.list})},selectTab:function(t){var n=this;n.id_default=t,n.getCouponList(t)},getCouponList:function(t,n){var e=this,o={url:e.$api.couponCenter,data:{category_id:t||"",type:n||"all"}};e.$httpRequest(o).then(function(t){e.categorys||(e.categorys=t.data.coupons.categorys,e.id_default=t.data.coupons.categorys[0].category_id),e.list=t.data.coupons.list})},getCoupon:function(n,e){var o=this,a={url:o.$api.receiveCoupon,data:{coupon_id:n}};o.$httpRequest(a).then(function(n){o.list[e].is_receive=!0,t.showToast({title:"兑换成功"})})}}};n.default=a}).call(this,e("6e42")["default"])},fedf:function(t,n,e){}},[["5dc6","common/runtime","common/vendor"]]]);
});
require('pages/mine/coupon/center.js');
__wxRoute = 'pages/mine/coupon/mycoupon';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/coupon/mycoupon.js';

define('pages/mine/coupon/mycoupon.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/coupon/mycoupon"],{"32bc":function(t,n,e){"use strict";var o=e("5814"),u=e.n(o);u.a},"4c4f":function(t,n,e){"use strict";e.r(n);var o=e("7291"),u=e.n(o);for(var a in o)"default"!==a&&function(t){e.d(n,t,function(){return o[t]})}(a);n["default"]=u.a},5814:function(t,n,e){},6614:function(t,n,e){"use strict";(function(t){e("7539"),e("921b");o(e("66fd"));var n=o(e("8605"));function o(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},7291:function(t,n,e){"use strict";(function(t,o){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var u=function(){return Promise.all([e.e("common/vendor"),e.e("pages/components/banner")]).then(e.bind(null,"1999"))},a={components:{banner:u},data:function(){return{swiperList:"",categorys:[{name:"未使用",type:"not_use"},{name:"已使用",type:"is_use"},{name:"已过期",type:"is_expire"}],data_type:"not_use",data_index:0,list:""}},onLoad:function(){this.getBanners(),this.getCouponList()},methods:{getBanners:function(){var t=this,n={url:t.$api.couponBanners};t.$httpRequest(n).then(function(n){t.swiperList=n.data.list})},selectTab:function(t,n){var e=this;e.data_type=t,e.data_index=n,e.getCouponList(t)},getCouponList:function(n){var e=this,o={url:e.$api.myCoupon,data:{data_type:n||"not_use"}};e.$httpRequest(o).then(function(n){console.log(t(n," at pages\\mine\\coupon\\mycoupon.vue:92")),e.list=n.data.list})},getCoupon:function(t,n){n>0||o.navigateTo({url:"./couponDetail?id="+t})}}};n.default=a}).call(this,e("0de9")["default"],e("6e42")["default"])},8605:function(t,n,e){"use strict";e.r(n);var o=e("fb40"),u=e("4c4f");for(var a in u)"default"!==a&&function(t){e.d(n,t,function(){return u[t]})}(a);e("32bc");var i,c=e("f0c5"),r=Object(c["a"])(u["default"],o["b"],o["c"],!1,null,"8971450c",null,!1,o["a"],i);n["default"]=r.exports},fb40:function(t,n,e){"use strict";var o,u=function(){var t=this,n=t.$createElement;t._self._c},a=[];e.d(n,"b",function(){return u}),e.d(n,"c",function(){return a}),e.d(n,"a",function(){return o})}},[["6614","common/runtime","common/vendor"]]]);
});
require('pages/mine/coupon/mycoupon.js');
__wxRoute = 'pages/mine/coupon/couponDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/coupon/couponDetail.js';

define('pages/mine/coupon/couponDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/coupon/couponDetail"],{"378b":function(e,t,n){"use strict";(function(e){n("7539"),n("921b");o(n("66fd"));var t=o(n("7542"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"4d5b":function(e,t,n){"use strict";var o=n("886a"),u=n.n(o);u.a},7542:function(e,t,n){"use strict";n.r(t);var o=n("7b07"),u=n("ae86");for(var a in u)"default"!==a&&function(e){n.d(t,e,function(){return u[e]})}(a);n("4d5b");var c,i=n("f0c5"),r=Object(i["a"])(u["default"],o["b"],o["c"],!1,null,"34bd9fad",null,!1,o["a"],c);t["default"]=r.exports},"7b07":function(e,t,n){"use strict";var o,u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"b",function(){return u}),n.d(t,"c",function(){return a}),n.d(t,"a",function(){return o})},"886a":function(e,t,n){},ae86:function(e,t,n){"use strict";n.r(t);var o=n("be23"),u=n.n(o);for(var a in o)"default"!==a&&function(e){n.d(t,e,function(){return o[e]})}(a);t["default"]=u.a},be23:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){return Promise.all([n.e("common/vendor"),n.e("pages/components/qrcode/tki-qrcode")]).then(n.bind(null,"e3ac"))},u={components:{tkiQrcode:o},data:function(){return{user_coupon_id:"",detail:"",val:""}},onLoad:function(e){var t=this;t.user_coupon_id=e.id,t.getDetail(e.id)},methods:{getDetail:function(e){var t=this,n={url:t.$api.couponDetail,data:{user_coupon_id:e}};t.$httpRequest(n).then(function(e){t.detail=e.data.detail,t.val=e.data.detail.jump_url,t.$refs.qrcode._makeCode()})},makeOver:function(t){console.log(e(t," at pages\\mine\\coupon\\couponDetail.vue:71"))}}};t.default=u}).call(this,n("0de9")["default"])}},[["378b","common/runtime","common/vendor"]]]);
});
require('pages/mine/coupon/couponDetail.js');
__wxRoute = 'pages/mine/setting';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/setting.js';

define('pages/mine/setting.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/setting"],{"0f73":function(n,e,t){"use strict";t.r(e);var a=t("38a7"),u=t("4c2e");for(var r in u)"default"!==r&&function(n){t.d(e,n,function(){return u[n]})}(r);t("e8f2");var o,c=t("f0c5"),f=Object(c["a"])(u["default"],a["b"],a["c"],!1,null,"abc2e026",null,!1,a["a"],o);e["default"]=f.exports},"38a7":function(n,e,t){"use strict";var a,u=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",function(){return u}),t.d(e,"c",function(){return r}),t.d(e,"a",function(){return a})},"4c2e":function(n,e,t){"use strict";t.r(e);var a=t("fdba"),u=t.n(a);for(var r in a)"default"!==r&&function(n){t.d(e,n,function(){return a[n]})}(r);e["default"]=u.a},"7c60":function(n,e,t){},a599:function(n,e,t){"use strict";(function(n){t("7539"),t("921b");a(t("66fd"));var e=a(t("0f73"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},e8f2:function(n,e,t){"use strict";var a=t("7c60"),u=t.n(a);u.a},fdba:function(n,e,t){"use strict";(function(n,t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a={data:function(){return{userInfo:{nickName:"",avatarUrl:""},menuLists:[{name:"我的收货地址",path:"./address/address"},{name:"关于爱绚",path:""},{name:"用户协议",path:""}]}},onLoad:function(e){console.log(n(e," at pages\\mine\\setting.vue:39")),this.userInfo=e},methods:{goPersonal:function(){t.navigateTo({url:"./personal"})}}};e.default=a}).call(this,t("0de9")["default"],t("6e42")["default"])}},[["a599","common/runtime","common/vendor"]]]);
});
require('pages/mine/setting.js');
__wxRoute = 'pages/mine/address/address';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/address/address.js';

define('pages/mine/address/address.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/address/address"],{"110d":function(t,e,n){"use strict";var d,a=function(){var t=this,e=t.$createElement;t._self._c},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return d})},2939:function(t,e,n){},"48ec":function(t,e,n){"use strict";n.r(e);var d=n("110d"),a=n("60d6");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("f50f");var u,s=n("f0c5"),o=Object(s["a"])(a["default"],d["b"],d["c"],!1,null,"4ad7240a",null,!1,d["a"],u);e["default"]=o.exports},"60d6":function(t,e,n){"use strict";n.r(e);var d=n("89ca"),a=n.n(d);for(var i in d)"default"!==i&&function(t){n.d(e,t,function(){return d[t]})}(i);e["default"]=a.a},"6e2d":function(t,e,n){"use strict";(function(t){n("7539"),n("921b");d(n("66fd"));var e=d(n("48ec"));function d(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"89ca":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{default_id:"",addressList:[]}},onLoad:function(){},onShow:function(){this.getAddress()},methods:{getAddress:function(){var e=this,n=this,d={url:n.$api.addressLists};n.$httpRequest(d).then(function(n){1===n.code?(e.addressList=n.data.list,e.default_id=n.data.default_id):0===n.code?t.showToast({title:n.msg,icon:"none"}):t.showToast({title:"收货地址获取失败",icon:"none"})})},addAction:function(){t.navigateTo({url:"addAddress"})},editAction:function(e){var n=this.default_id===e.address_id;t.navigateTo({url:"addAddress?id="+e.address_id+"&isDefault="+n})}}};e.default=n}).call(this,n("6e42")["default"])},f50f:function(t,e,n){"use strict";var d=n("2939"),a=n.n(d);a.a}},[["6e2d","common/runtime","common/vendor"]]]);
});
require('pages/mine/address/address.js');
__wxRoute = 'pages/mine/address/addAddress';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/address/addAddress.js';

define('pages/mine/address/addAddress.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/address/addAddress"],{"5bd5":function(e,t,a){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=function(){return a.e("pages/components/topBar").then(a.bind(null,"0849"))},s={components:{topBar:i},data:function(){return{address_id:"",isDefault:!1,title:"添加收货地址",detail:{name:"",phone:"",region:"",detail:"",tags_id:""},tags:[],cityPickerValueDefault:[0,0,1],themeColor:"#007AFF"}},onLoad:function(e){e.id&&(this.isDefault="true"===e.isDefault,this.address_id=e.id,this.title="编辑收货地址",this.getAddressDetail(e.id)),this.getTagsList()},methods:{goBack:function(){this.address_id&&this.saveAddress()},onConfirm:function(e){this.detail.region=e.label.replace(/-/g,",")},getAddressDetail:function(t){var a=this,n={url:a.$api.addressDetail,data:{address_id:t}};a.$httpRequest(n).then(function(t){1===t.code?(t.data.detail.region=t.data.detail.region.city+","+t.data.detail.region.province+","+t.data.detail.region.region,a.detail=t.data.detail):0===t.code?e.showToast({title:t.msg,icon:"none"}):e.showToast({title:"收货地址获取失败",icon:"none"})})},saveAddress:function(){var t=this,a=t.detail;a.address_id=t.address_id;var n={url:t.address_id?t.$api.editAddress:t.$api.addAddress,data:a,method:"POST"};t.$httpRequest(n).then(function(a){t.address_id?1===a.code?(e.showToast({title:"修改成功",icon:"none"}),e.navigateBack({delta:1})):0===a.code?e.showToast({title:a.msg,icon:"none"}):e.showToast({title:"修改失败，请重试",icon:"none"}):1===a.code?(e.showToast({title:"添加成功",icon:"none"}),e.navigateBack({delta:1})):0===a.code?e.showToast({title:a.msg,icon:"none"}):e.showToast({title:"添加失败，请重试",icon:"none"})})},bindPickerChange:function(e){console.log(n("picker发送选择改变，携带值为",e.target.value," at pages\\mine\\address\\addAddress.vue:187"));var t=e.detail.value.join(",");this.detail.region=t},saveAction:function(){var t=this;e.showModal({content:"确认保存？",success:function(e){e.confirm?t.saveAddress():e.cancel&&console.log(n("用户点击取消"," at pages\\mine\\address\\addAddress.vue:200"))}})},switchChange:function(t){var a=this;if(t.target.value){var n={url:a.$api.setDefault,data:{address_id:a.address_id},method:"POST"};a.$httpRequest(n).then(function(t){1===t.code?(e.showToast({title:"设置成功",icon:"none"}),a.isDefault=!0):0===t.code?e.showToast({title:t.msg,icon:"none"}):e.showToast({title:"设置失败，请重试",icon:"none"})})}else a.isDefault=!1},delAddress:function(){var t=this,a={url:t.$api.delAddress,data:{address_id:t.address_id},method:"POST"};t.$httpRequest(a).then(function(t){1===t.code?(e.showToast({title:"删除成功",icon:"none"}),e.navigateBack({delta:1})):0===t.code?e.showToast({title:t.msg,icon:"none"}):e.showToast({title:"删除失败，请重试",icon:"none"})})},getTagsList:function(){var e=this,t={url:e.$api.tagsList};e.$httpRequest(t).then(function(t){e.tags=t.data.list})},selectTag:function(e){console.log(n(e," at pages\\mine\\address\\addAddress.vue:285"));var t=this;t.detail.tags_id=e}}};t.default=s}).call(this,a("6e42")["default"],a("0de9")["default"])},"838a":function(e,t,a){"use strict";var n,i=function(){var e=this,t=e.$createElement;e._self._c},s=[];a.d(t,"b",function(){return i}),a.d(t,"c",function(){return s}),a.d(t,"a",function(){return n})},"89ed":function(e,t,a){"use strict";var n=a("fdef"),i=a.n(n);i.a},abc4:function(e,t,a){"use strict";a.r(t);var n=a("838a"),i=a("e265");for(var s in i)"default"!==s&&function(e){a.d(t,e,function(){return i[e]})}(s);a("89ed");var d,o=a("f0c5"),c=Object(o["a"])(i["default"],n["b"],n["c"],!1,null,"6d2b05d8",null,!1,n["a"],d);t["default"]=c.exports},da9c:function(e,t,a){"use strict";(function(e){a("7539"),a("921b");n(a("66fd"));var t=n(a("abc4"));function n(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,a("6e42")["createPage"])},e265:function(e,t,a){"use strict";a.r(t);var n=a("5bd5"),i=a.n(n);for(var s in n)"default"!==s&&function(e){a.d(t,e,function(){return n[e]})}(s);t["default"]=i.a},fdef:function(e,t,a){}},[["da9c","common/runtime","common/vendor"]]]);
});
require('pages/mine/address/addAddress.js');
__wxRoute = 'pages/mine/member';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/member.js';

define('pages/mine/member.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/member"],{"12ae":function(e,t,n){"use strict";n.r(t);var a=n("260e"),i=n.n(a);for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);t["default"]=i.a},"260e":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{level:5,detail:"",left:"",menuList:[{name:"新品尝鲜",imgUrl:n("38a1")},{name:"新品尝鲜",imgUrl:n("38a1")},{name:"新品尝鲜",imgUrl:n("38a1")},{name:"新品尝鲜",imgUrl:n("38a1")},{name:"新品尝鲜",imgUrl:n("38a1")},{name:"新品尝鲜",imgUrl:n("38a1")},{name:"新品尝鲜",imgUrl:n("38a1")},{name:"新品尝鲜",imgUrl:n("38a1")}]}},onLoad:function(){var e=this,t={url:e.$api.userExperienceDetails};e.$httpRequest(t).then(function(t){e.detail=t.data,e.left=t.data.today_get_experience_total/t.data.today_get_experience_limit_total*100+"%"})},methods:{goDetail:function(){e.navigateTo({url:"./todayExperience"})}}};t.default=a}).call(this,n("6e42")["default"])},"2c80":function(e,t,n){"use strict";var a,i=function(){var e=this,t=e.$createElement;e._self._c},r=[];n.d(t,"b",function(){return i}),n.d(t,"c",function(){return r}),n.d(t,"a",function(){return a})},"60a1":function(e,t,n){"use strict";(function(e){n("7539"),n("921b");a(n("66fd"));var t=a(n("cc25"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},b15f:function(e,t,n){"use strict";var a=n("f01c"),i=n.n(a);i.a},cc25:function(e,t,n){"use strict";n.r(t);var a=n("2c80"),i=n("12ae");for(var r in i)"default"!==r&&function(e){n.d(t,e,function(){return i[e]})}(r);n("b15f");var u,c=n("f0c5"),l=Object(c["a"])(i["default"],a["b"],a["c"],!1,null,"1c934242",null,!1,a["a"],u);t["default"]=l.exports},f01c:function(e,t,n){}},[["60a1","common/runtime","common/vendor"]]]);
});
require('pages/mine/member.js');
__wxRoute = 'pages/mine/todayExperience';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/todayExperience.js';

define('pages/mine/todayExperience.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/todayExperience"],{"0258":function(t,e,a){"use strict";(function(t){a("7539"),a("921b");i(a("66fd"));var e=i(a("21b4"));function i(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},"21b4":function(t,e,a){"use strict";a.r(e);var i=a("a60a"),n=a("8fb7");for(var l in n)"default"!==l&&function(t){a.d(e,t,function(){return n[t]})}(l);a("501c");var o,r=a("f0c5"),c=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"5346c77a",null,!1,i["a"],o);e["default"]=c.exports},"40cf":function(t,e,a){},"4c99":function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i={data:function(){return{type:"experience",left:0,detail:{experience_total:"",level:"",today_get_experience_limit_total:"",today_get_experience_total:"",today_experience_list:[],today_integral_list:[]}}},onLoad:function(e){console.log(t(e," at pages\\mine\\todayExperience.vue:51")),e.type?(this.type=e.type,a.setNavigationBarTitle({title:"积分详情"})):a.setNavigationBarTitle({title:"经验详情"}),this.getDetail()},methods:{getDetail:function(){var e=this,a={url:"integral"===e.type?e.$api.userIntegralDetailsByDay:e.$api.userExperienceDetailsByDay};e.$httpRequest(a).then(function(a){console.log(t(e.type,a," at pages\\mine\\todayExperience.vue:71"));var i=a.data;"integral"===e.type?(e.detail.experience_total=i.integral_total,e.detail.today_get_experience_limit_total=i.today_get_integral_limit_total,e.detail.today_get_experience_total=i.today_get_integral_total,e.detail.today_integral_list=i.today_integral_list):e.detail=a.data,e.left=e.detail.today_get_experience_total/e.detail.today_get_experience_limit_total*100+"%"})}}};e.default=i}).call(this,a("0de9")["default"],a("6e42")["default"])},"501c":function(t,e,a){"use strict";var i=a("40cf"),n=a.n(i);n.a},"8fb7":function(t,e,a){"use strict";a.r(e);var i=a("4c99"),n=a.n(i);for(var l in i)"default"!==l&&function(t){a.d(e,t,function(){return i[t]})}(l);e["default"]=n.a},a60a:function(t,e,a){"use strict";var i,n=function(){var t=this,e=t.$createElement;t._self._c},l=[];a.d(e,"b",function(){return n}),a.d(e,"c",function(){return l}),a.d(e,"a",function(){return i})}},[["0258","common/runtime","common/vendor"]]]);
});
require('pages/mine/todayExperience.js');
__wxRoute = 'pages/mine/personal';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/mine/personal.js';

define('pages/mine/personal.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/mine/personal"],{"31aa":function(n,e,t){"use strict";var a=t("4d51"),o=t.n(a);o.a},"4d51":function(n,e,t){},"6e6d":function(n,e,t){"use strict";t.r(e);var a=t("fb18"),o=t("cdb7");for(var u in o)"default"!==u&&function(n){t.d(e,n,function(){return o[n]})}(u);t("31aa");var r,i=t("f0c5"),c=Object(i["a"])(o["default"],a["b"],a["c"],!1,null,"4aea3e04",null,!1,a["a"],r);e["default"]=c.exports},"72f2":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t={data:function(){return{avatarUrl:"",menuList:[{title:"用户昵称",name:"nickName",content:""},{title:"性别",name:"gender",content:""},{title:"个性签名",name:"sign",content:""},{title:"绑定手机",name:"mobile",content:""}]}},onLoad:function(){var n=this;n.getUserInfo()},methods:{getUserInfo:function(){var e=this,t={url:e.$api.getUserInfo};e.$httpRequest(t).then(function(t){console.log(n(t.data," at pages\\mine\\personal.vue:49"));var a=t.data.info,o=e.menuList;o.map(function(e,t){console.log(n(e.name,a[e.name],"obj"," at pages\\mine\\personal.vue:53")),e.content=a[e.name]}),e.avatarUrl=a.avatarUrl,e.menuList=o})}}};e.default=t}).call(this,t("0de9")["default"])},cdb7:function(n,e,t){"use strict";t.r(e);var a=t("72f2"),o=t.n(a);for(var u in a)"default"!==u&&function(n){t.d(e,n,function(){return a[n]})}(u);e["default"]=o.a},e5e2:function(n,e,t){"use strict";(function(n){t("7539"),t("921b");a(t("66fd"));var e=a(t("6e6d"));function a(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("6e42")["createPage"])},fb18:function(n,e,t){"use strict";var a,o=function(){var n=this,e=n.$createElement;n._self._c},u=[];t.d(e,"b",function(){return o}),t.d(e,"c",function(){return u}),t.d(e,"a",function(){return a})}},[["e5e2","common/runtime","common/vendor"]]]);
});
require('pages/mine/personal.js');
__wxRoute = 'pages/partner/index';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/partner/index.js';

define('pages/partner/index.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/partner/index"],{"078d":function(e,t,n){"use strict";(function(e,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a={data:function(){return{info:""}},onLoad:function(){this.getDetail()},methods:{getDetail:function(){var e=this;e.$httpRequest({url:e.$api.merchantsPage}).then(function(t){e.info=t.data.info})},getCoupon:function(){e.scanCode({onlyFromCamera:!0,success:function(t){console.log(n("条码类型："+t.scanType," at pages\\partner\\index.vue:55")),console.log(n("条码内容："+t.result," at pages\\partner\\index.vue:56"));var a=t.result.indexOf("?");if(console.log(n("？索引",a," at pages\\partner\\index.vue:60")),-1!==a){for(var r=t.result,o=[],u=[],c=a;c<r.length;c++)"="===r.charAt(c)?o.push(c):"&"===r.charAt(c)&&u.push(c);var i={};o.map(function(e,t){var n=r.slice(u[t-1]+1,e).trim(),o=o=r.slice(e+1).trim();0===t&&(n=r.slice(a+1,e).trim()),u[t]&&(o=r.slice(e+1,u[t]).trim()),i[n]=o}),console.log(n(i," at pages\\partner\\index.vue:92")),e.navigateTo({url:"./couponDetail?params="+JSON.stringify(i)})}else e.showToast({titile:"参数错误",icon:"none"})}})}}};t.default=a}).call(this,n("6e42")["default"],n("0de9")["default"])},"2bb7":function(e,t,n){"use strict";n.r(t);var a=n("078d"),r=n.n(a);for(var o in a)"default"!==o&&function(e){n.d(t,e,function(){return a[e]})}(o);t["default"]=r.a},"65f4":function(e,t,n){},"7e64":function(e,t,n){"use strict";var a,r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"b",function(){return r}),n.d(t,"c",function(){return o}),n.d(t,"a",function(){return a})},9550:function(e,t,n){"use strict";var a=n("65f4"),r=n.n(a);r.a},e2cc:function(e,t,n){"use strict";(function(e){n("7539"),n("921b");a(n("66fd"));var t=a(n("e2cd"));function a(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},e2cd:function(e,t,n){"use strict";n.r(t);var a=n("7e64"),r=n("2bb7");for(var o in r)"default"!==o&&function(e){n.d(t,e,function(){return r[e]})}(o);n("9550");var u,c=n("f0c5"),i=Object(c["a"])(r["default"],a["b"],a["c"],!1,null,"03100c21",null,!1,a["a"],u);t["default"]=i.exports}},[["e2cc","common/runtime","common/vendor"]]]);
});
require('pages/partner/index.js');
__wxRoute = 'pages/partner/couponDetail';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/partner/couponDetail.js';

define('pages/partner/couponDetail.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/partner/couponDetail"],{"5d1e":function(t,e,a){"use strict";(function(t,a){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{user_coupon_id:"",detail:"",url:"",params:"",isSure:!1}},onLoad:function(t){var e=this;t.params&&(e.params=JSON.parse(t.params),e.getDetail(e.params)),e.getDetail(e.params)},methods:{getDetail:function(e){var a=this;a.$httpRequest({url:a.$api.userCouponDetails,data:{user_coupon_id:e.user_coupon_id}}).then(function(e){console.log(t(e.data.detail," at pages\\partner\\couponDetail.vue:65")),a.detail=e.data.detail})},sureUse:function(){a.showLoading({title:"兑换中"});var t=this;t.isSure||(t.isSure=!0,t.$httpRequest({url:t.$api.confirmUseCoupon,data:{user_coupon_id:t.params.user_coupon_id}}).then(function(t){a.hideLoading(),a.navigateBack({delta:1,success:function(){a.showToast({title:"兑换成功"})}})}),setTimeout(function(){t.isSure},500))}}};e.default=n}).call(this,a("0de9")["default"],a("6e42")["default"])},6072:function(t,e,a){},"647c":function(t,e,a){"use strict";a.r(e);var n=a("dafb"),u=a("b993");for(var o in u)"default"!==o&&function(t){a.d(e,t,function(){return u[t]})}(o);a("f92c");var i,r=a("f0c5"),c=Object(r["a"])(u["default"],n["b"],n["c"],!1,null,"2d65e6ec",null,!1,n["a"],i);e["default"]=c.exports},"9a7e":function(t,e,a){"use strict";(function(t){a("7539"),a("921b");n(a("66fd"));var e=n(a("647c"));function n(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,a("6e42")["createPage"])},b993:function(t,e,a){"use strict";a.r(e);var n=a("5d1e"),u=a.n(n);for(var o in n)"default"!==o&&function(t){a.d(e,t,function(){return n[t]})}(o);e["default"]=u.a},dafb:function(t,e,a){"use strict";var n,u=function(){var t=this,e=t.$createElement;t._self._c},o=[];a.d(e,"b",function(){return u}),a.d(e,"c",function(){return o}),a.d(e,"a",function(){return n})},f92c:function(t,e,a){"use strict";var n=a("6072"),u=a.n(n);u.a}},[["9a7e","common/runtime","common/vendor"]]]);
});
require('pages/partner/couponDetail.js');
__wxRoute = 'pages/partner/couponNote';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/partner/couponNote.js';

define('pages/partner/couponNote.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/partner/couponNote"],{"1bb8":function(t,n,e){"use strict";(function(t){e("7539"),e("921b");u(e("66fd"));var n=u(e("63a3"));function u(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("6e42")["createPage"])},"4d6e":function(t,n,e){"use strict";e.r(n);var u=e("647b"),a=e.n(u);for(var i in u)"default"!==i&&function(t){e.d(n,t,function(){return u[t]})}(i);n["default"]=a.a},"5b7e":function(t,n,e){"use strict";var u,a=function(){var t=this,n=t.$createElement;t._self._c},i=[];e.d(n,"b",function(){return a}),e.d(n,"c",function(){return i}),e.d(n,"a",function(){return u})},"63a3":function(t,n,e){"use strict";e.r(n);var u=e("5b7e"),a=e("4d6e");for(var i in a)"default"!==i&&function(t){e.d(n,t,function(){return a[t]})}(i);e("87cb");var o,c=e("f0c5"),r=Object(c["a"])(a["default"],u["b"],u["c"],!1,null,"3f41a4e2",null,!1,u["a"],o);n["default"]=r.exports},"647b":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var e={data:function(){return{list:""}},onLoad:function(){this.getDetail()},methods:{getDetail:function(){var t=this;t.$httpRequest({url:t.$api.useCouponList}).then(function(n){t.list=n.data.list})},goStatistics:function(){t.navigateTo({url:"./couponStatistics"})}}};n.default=e}).call(this,e("6e42")["default"])},"87cb":function(t,n,e){"use strict";var u=e("b08f"),a=e.n(u);a.a},b08f:function(t,n,e){}},[["1bb8","common/runtime","common/vendor"]]]);
});
require('pages/partner/couponNote.js');
__wxRoute = 'pages/partner/couponStatistics';__wxRouteBegin = true;__wxAppCurrentFile__ = 'pages/partner/couponStatistics.js';

define('pages/partner/couponStatistics.js',function(require, module, exports, window, document, frames, self, location, navigator, localStorage, history, Caches, screen, alert, confirm, prompt, fetch, XMLHttpRequest, WebSocket, webkit, WeixinJSCore, Reporter, print, WeixinJSBridge){
(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/partner/couponStatistics"],{"00bc":function(t,e,n){},"0a0e":function(t,e,n){"use strict";var o,a=function(){var t=this,e=t.$createElement;t._self._c;t._isMounted||(t.e0=function(e){t.isMonth=!t.isMonth})},i=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return i}),n.d(e,"a",function(){return o})},1110:function(t,e,n){"use strict";(function(t){n("7539"),n("921b");o(n("66fd"));var e=o(n("6ee9"));function o(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},"6ee9":function(t,e,n){"use strict";n.r(e);var o=n("0a0e"),a=n("7ef9");for(var i in a)"default"!==i&&function(t){n.d(e,t,function(){return a[t]})}(i);n("f152");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],o["b"],o["c"],!1,null,"e1ebf876",null,!1,o["a"],r);e["default"]=c.exports},"7ef9":function(t,e,n){"use strict";n.r(e);var o=n("8280"),a=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e["default"]=a.a},8280:function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var o=a(n("90dd"));function a(t){return t&&t.__esModule?t:{default:t}}var i,r=function(){return n.e("pages/components/circle").then(n.bind(null,"64d9"))},s=null,c={components:{circle:r},data:function(){return{cWidth:"",cHeight:"",pixelRatio:1,serverData:"",info:"",chartData:"",isMonth:!0,year:"",month:""}},onLoad:function(){i=this,this.cWidth=t.upx2px(600),this.cHeight=t.upx2px(430);var e=new Date;this.year=e.getFullYear(),this.month=e.getMonth()+1,this.getServerData()},methods:{selectTime:function(t){var e=this;e.month=t+1,e.getServerData(),e.isMonth=!1},getServerData:function(){t.showLoading({title:"数据拉取中"});var e=this,n=e.month>9?e.month:"0"+e.month,o={url:e.$api.couponStatistics,data:{exchange_date:e.year+"-"+n}};e.$httpRequest(o).then(function(t){var n=t.data.info,o={categories:[],series:[{name:"金额",data:[]}]},a={series:[]};e.info=n;for(var r=n.use_contrast.select_m.split("-"),s=Number(r[0]);s<Number(r[1])+1;s++){var c=s.toString();o.categories.push(c);var u={value:n.use_contrast.list[c]?n.use_contrast.list[c]:0,color:"#5F3CF5"};o.series[0].data.push(u)}i.showColumn("canvasColumn",o);var l=n.use_contrast_types,f=0,d=["#545aff","#06c2ff","#063dff","#069aec","#df12ff","#9612ff"];for(var h in l){var p={name:h,data:l[h]};a.series.length<6&&(p.color=d[f]),a.series.push(p),f++}e.chartData=a})},showColumn:function(t,e){s=new o.default({$this:i,canvasId:t,type:"column",legend:{show:!1},fontSize:12,background:"#131313",pixelRatio:i.pixelRatio,animation:!0,categories:e.categories,series:e.series,enableScroll:!0,xAxis:{disabled:!1,disableGrid:!0,gridColor:"#9900ff",axisLine:!0,axisLineColor:"#9900ff",gridEval:.2,fontColor:"#999",type:"grid",gridType:"dash",itemCount:6,scrollAlign:"left"},yAxis:{disableGrid:!0,axisLineColor:"#9900ff",format:function(t){return t.toFixed(0)}},dataLabel:!0,width:i.cWidth*i.pixelRatio,height:i.cHeight*i.pixelRatio,extra:{column:{type:"group",width:i.cWidth*i.pixelRatio*.45/e.categories.length},tooltip:{bgColor:"#666",bgOpacity:.7,fontColor:"#FFFFFF",labelBgColor:"#DFE8FF",labelBgOpacity:.95,labelFontColor:"#666666"}}})},touchColumn:function(t){s.scrollStart(t)},moveLineA:function(t){s.scroll(t)},touchEndLineA:function(t){s.scrollEnd(t),s.showToolTip(t,{format:function(t,e){return e+" "+t.name+":"+t.data}})}}};e.default=c}).call(this,n("6e42")["default"])},f152:function(t,e,n){"use strict";var o=n("00bc"),a=n.n(o);a.a}},[["1110","common/runtime","common/vendor"]]]);
});
require('pages/partner/couponStatistics.js');
;(function(global) {
    __uni_launch_ready(function() {
        var entryPagePath = __wxConfig.entryPagePath.replace('.html', '')
        if (entryPagePath.indexOf('/') !== 0) {
            entryPagePath = '/' + entryPagePath
        }
        wx.navigateTo({
            url: entryPagePath,
            query: {},
            openType: 'appLaunch',
            webviewId: 1
        })
        __wxConfig.__ready__ = true
    })
})(this);

