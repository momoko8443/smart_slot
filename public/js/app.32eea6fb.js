(function(t){function e(e){for(var a,o,s=e[0],c=e[1],l=e[2],p=0,d=[];p<s.length;p++)o=s[p],r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(e--,1),t=o(o.s=n[0]))}return t}var a={},r={app:0},i=[];function o(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=a,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(n,a,function(e){return t[e]}.bind(null,a));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("64a9"),r=n.n(a);r.a},"0b86":function(t,e,n){t.exports=n.p+"img/camera.6a41a639.svg"},"50c1":function(t,e,n){"use strict";var a=n("7863"),r=n.n(a);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var a=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{id:"helloword"}})],1)},i=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{}},[n("div",{staticClass:"header"},[n("img",{class:["switchIcon",{openLight:t.isOpenLight}],attrs:{src:t.lightSwitch},on:{click:t.light}}),n("label",{staticClass:"title hGap"},[t._v(t._s(t.msg))]),n("label",{staticClass:"version"},[t._v(t._s(t.ver))])]),t.showBtn?n("div",{staticClass:"hello"},[n("span",[t._v("流量设置  (流速 ≈ "+t._s(t.speed)+"毫升 / 秒)")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.total,expression:"total"}],attrs:{type:"range",max:"1000",min:"0"},domProps:{value:t.total},on:{__r:function(e){t.total=e.target.value}}}),n("span",[t._v(t._s(t.calculationMessage))]),n("label",{attrs:{for:"autoStop"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.isSmartMode,expression:"isSmartMode"}],attrs:{id:"autoStop",type:"checkbox"},domProps:{checked:Array.isArray(t.isSmartMode)?t._i(t.isSmartMode,null)>-1:t.isSmartMode},on:{change:function(e){var n=t.isSmartMode,a=e.target,r=!!a.checked;if(Array.isArray(n)){var i=null,o=t._i(n,i);a.checked?o<0&&(t.isSmartMode=n.concat([i])):o>-1&&(t.isSmartMode=n.slice(0,o).concat(n.slice(o+1)))}else t.isSmartMode=r}}}),n("span",[t._v("开始智能控水")])]),n("button",{staticClass:"btn",on:{click:t.addWater}},[t._v("\n      浇水\n    ")]),n("h3",[t._v("当前土壤情况:"+t._s(t.status))]),t.cameraOpening?n("span",[t._v("摄像头开启中,请稍后...")]):t._e(),n("img",{class:["cameraIcon",{openCamera:t.isOpenCamera}],attrs:{src:t.cameraSwitch},on:{click:t.camera}})]):t._e(),t.showBtn?t._e():n("div",{staticClass:"hello2 percent"},[n("CirclePercent",{attrs:{percent:t.percent,background:"#42b983"}}),n("span",{staticStyle:{color:"white"}},[t._v("浇水中...")])],1),!t.showBtn||t.isOpenCamera?n("iframe",{staticClass:"videoFrame",attrs:{src:"http://192.168.0.114:8082/index.html",id:"main",name:"main",frameborder:"0"}}):t._e()])},s=[],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"circle-bar",style:{backgroundColor:t.background}},[n("div",{staticClass:"circle-bar-left",style:{transform:t.leftCircleRotate}}),n("div",{staticClass:"circle-bar-right",style:{transform:t.rightCircleRotate,backgroundColor:t.rightCircleBackground,transitionProperty:t.transitionPropertyFunc}}),n("div",{staticClass:"mask"},[n("span",{staticClass:"percent"},[t._v(t._s(t.percent)+"%")])])])},l=[],u=(n("c5f6"),{name:"CircelPercent",props:{percent:Number,background:String},computed:{transitionPropertyFunc:function(){return this.percent>50?"rotate":"all"},rightCircleBackground:function(){return this.percent>50?this.background?this.background:"#42b983":"#eee"},rightCircleRotate:function(){var t="";return t=this.percent<=50?"rotate("+3.6*this.percent+"deg)":"rotate(0deg)",t},leftCircleRotate:function(){var t="";return this.percent>50&&(t="rotate("+3.6*(this.percent-50)+"deg)"),t}}}),p=u,d=(n("8eca"),n("2877")),h=Object(d["a"])(p,c,l,!1,null,"50680ad8",null),f=h.exports,m=n("bc3a"),v=n.n(m),g={name:"HelloWorld",components:{CirclePercent:f},data:function(){return{msg:"护花使者",ver:"( ver 1.0 )",isOpenLight:!1,isOpenCamera:!1,cameraOpening:!1,lightSwitch:n("b64d"),cameraSwitch:n("0b86"),isSmartMode:!0,speed:17.5,spend:0,total:300,percent:0,status:"未知",showBtn:!0}},mounted:function(){var t=this;v.a.get("/api/water").then(function(e){t.status=e.data.dry?"干燥":"湿润"}),v.a.get("/api/light").then(function(e){t.isOpenLight=e.data.light})},computed:{calculationMessage:function(){var t=Math.floor(this.total/this.speed);return"浇水".concat(this.total,"毫升,预计花费时间").concat(t,"秒")}},methods:{camera:function(){var t=this;return this.cameraOpening=!0,v.a.post("/api/camera",{camera:!this.isOpenCamera}).then(function(e){t.cameraOpening=!1,t.isOpenCamera=e.data.camera})},light:function(){var t=this;v.a.post("/api/light",{light:!this.isOpenLight}).then(function(e){t.isOpenLight=e.data.light})},addWater:function(){var t=this,e=Math.floor(this.total/this.speed),n=Math.floor(100/e);this.showBtn=!1,this.percent=0,this.animate(n),this.camera().then(function(){v.a.post("/api/water",{smartMode:t.isSmartMode,seconds:e}).then(function(e){t.showBtn=!0,t.status=e.data.dry?"干燥":"湿润"})})},animate:function(t){var e=this,n=setInterval(function(){e.percent>=100?(clearInterval(n),e.showBtn=!0,e.percent=0):e.percent+=t},1e3)}}},b=g,_=(n("50c1"),Object(d["a"])(b,o,s,!1,null,"da3c1844",null)),y=_.exports,C={name:"app",components:{HelloWorld:y}},w=C,O=(n("034f"),Object(d["a"])(w,r,i,!1,null,null,null)),S=O.exports;a["a"].config.productionTip=!1,new a["a"]({render:function(t){return t(S)}}).$mount("#app")},"64a9":function(t,e,n){},7863:function(t,e,n){},"8eca":function(t,e,n){"use strict";var a=n("b64c"),r=n.n(a);r.a},b64c:function(t,e,n){},b64d:function(t,e,n){t.exports=n.p+"img/kaideng_1.213fe40e.png"}});
//# sourceMappingURL=app.32eea6fb.js.map