(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index"],{"9b5f":function(e,t,n){"use strict";var u=n("ddc3"),a=n.n(u);a.a},a2f1:function(e,t,n){"use strict";n.r(t);var u=n("e578"),a=n.n(u);for(var r in u)"default"!==r&&function(e){n.d(t,e,function(){return u[e]})}(r);t["default"]=a.a},d18d:function(e,t,n){"use strict";n.r(t);var u=n("eb73"),a=n("a2f1");for(var r in a)"default"!==r&&function(e){n.d(t,e,function(){return a[e]})}(r);n("9b5f");var o=n("2877"),c=Object(o["a"])(a["default"],u["a"],u["b"],!1,null,"1dbfeb55",null);t["default"]=c.exports},ddc3:function(e,t,n){},e578:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={data:function(){return{PageCur:"home",toPageCur:""}},methods:{NavChange:function(e){this.PageCur=e.currentTarget.dataset.cur}},watch:{PageCur:function(t){var n=this;"ble"!=t&&"ble"==n.toPageCur&&e.stopBluetoothDevicesDiscovery({success:function(e){console.log("关闭蓝牙搜索"+e," at pages\\index.vue:60")}}),n.toPageCur=t}}};t.default=n}).call(this,n("6e42")["default"])},eb73:function(e,t,n){"use strict";var u=function(){var e=this,t=e.$createElement;e._self._c},a=[];n.d(t,"a",function(){return u}),n.d(t,"b",function(){return a})}},[["17f6","common/runtime","common/vendor"]]]);