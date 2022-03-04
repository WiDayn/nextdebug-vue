(function(){"use strict";var t={1793:function(t,e,n){n(6992),n(8674),n(9601),n(7727);var r=n(8935),o=n(2424),i=n(8262),a=n(3266),u=n(6166),c=n.n(u),s=n(6762),f=n(4635),l=n.n(f),d=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("b-container",[n("router-view")],1)],1)},m=[],p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-container",[n("b-navbar-brand",{attrs:{href:"javascript:void(0);"},on:{click:function(e){return t.$router.push({name:"home"})}}},[t._v("DEBUG.PINK")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[t.userInfo?t._e():n("b-nav-item",{on:{click:function(e){return t.$router.replace({name:"login"})}}},[t._v("登录")]),t.userInfo?t._e():n("b-nav-item",{on:{click:function(e){return t.$router.replace({name:"register"})}}},[t._v("注册")]),t.userInfo?n("b-avatar",{attrs:{variant:"info",src:t.baseurl+"avatar?src="+t.userInfo.avatar}}):t._e(),t.userInfo?n("b-nav-item-dropdown",{attrs:{right:""}},[n("strong",[n("b-dropdown-text",{staticStyle:{"font-weight":"bolder"}},[t._v(t._s(t.userInfo.nick_name))])],1),n("b-dropdown-divider"),n("b-dropdown-item",{on:{click:function(e){return t.$router.push({name:"userDetail",params:{id:t.userInfo.id}})}}},[t._v(" 个人主页")]),n("b-dropdown-item",{on:{click:function(e){return t.$router.push({name:"profile"})}}},[t._v("设置")]),n("b-dropdown-item",{on:{click:t.logout}},[t._v("登出")])],1):t._e()],1)],1)],1)],1)],1)},h=[],v=n(4665),b={data:function(){return{baseurl:"https://api.debug.pink:8080/api/"}},computed:(0,v.rn)({userInfo:function(t){return t.userModule.userInfo}}),methods:(0,v.nv)("userModule",["logout"])},g=b,_=n(1001),y=(0,_.Z)(g,p,h,!1,null,null,null),w=y.exports,E={components:{NavBar:w},data:function(){return{}}},k=E,S=(0,_.Z)(k,d,m,!1,null,null,null),O=S.exports,P=n(4479),I=(n(2222),n(1539),n(8783),n(3948),n(2809)),N=(n(8862),n(8309),"nextdebug"),T="".concat(N,"_user_"),x="".concat(T,"token"),j="".concat(T,"info"),U=function(t){localStorage.removeItem(t)},R=function(t,e){localStorage.setItem(t,e)},M=function(t){return localStorage.getItem(t)},Z={clear:U,set:R,get:M,USER_TOKEN:x,USER_INFO:j},D=c().create({baseURL:"https://api.debug.pink:8080/api/",timeout:5e3});D.interceptors.request.use((function(t){return Object.assign(t.headers,{Authorization:"Bearer ".concat(Z.get(Z.USER_TOKEN))}),t}),(function(t){return Promise.reject(t)}));var $=D,F=function(t){var e=t.Email,n=t.Name,r=t.Password;return $.post("auth/register",{Email:e,Name:n,Password:r})},K=function(t){var e=t.name,n=t.password;return $.post("auth/login",{name:e,password:n})},C=function(){return $.get("auth/info")},L=function(t){var e=t.ID;return $.post("auth/userDetail",{ID:e})},A={register:F,login:K,info:C,userDetail:L},B=function(t){var e=t.context;return $.post("upload/avatar",{context:e})},J={uploadavatar:B},q={namespaced:!0,state:{token:Z.get(Z.USER_TOKEN),userInfo:Z.get(Z.USER_INFO)?JSON.parse(Z.get(Z.USER_INFO)):null},mutations:{SET_TOKEN:function(t,e){Z.set(Z.USER_TOKEN,e),t.token=e},SET_USERINFO:function(t,e){Z.set(Z.USER_INFO,JSON.stringify(e)),t.userInfo=e}},actions:{register:function(t,e){var n=e.Email,r=e.Name,o=e.Password;return new Promise((function(e,i){A.register({Email:n,Name:r,Password:o}).then((function(e){return t.commit("SET_TOKEN",e.data.data.token),A.info()})).then((function(n){t.commit("SET_USERINFO",n.data.data.user),e(n)})).catch((function(t){i(t)}))}))},login:function(t,e){var n=e.name,r=e.password;return new Promise((function(e,o){A.login({name:n,password:r}).then((function(e){return t.commit("SET_TOKEN",e.data.data.token),A.info()})).then((function(n){t.commit("SET_USERINFO",n.data.data.user),e(n)})).catch((function(t){o(t)}))}))},logout:function(t){var e=t.commit;e("SET_TOKEN",""),Z.clear(Z.USER_TOKEN),e("SET_USERINFO",""),Z.clear(Z.USER_INFO),window.location.reload()},uploadavatar:function(t,e){var n=e.context;return new Promise((function(e,r){J.uploadavatar({context:n}).then((function(n){t.commit("SET_USERINFO",n.data.data.user),e(n),window.location.reload()})).catch((function(t){r(t)}))}))},userDetail:function(t,e){var n=e.ID;return new Promise((function(t,e){A.userDetail({ID:n}).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}},G=q,z=(n(2707),n(2526),n(1817),function(t){var e=t.type,n=t.from,r=t.to;return $.post("list/sort_problem",{type:e,from:n,to:r})}),H=function(t){var e=t.id;return $.get("problems/".concat(e),{})},V=function(t){var e=t.name,n=t.from,r=t.problemLink,o=t.description;return $.post("problems",{name:e,from:n,problem_link:r,description:o})},X={sort:z,get:H,create:V},Q={namespaced:!0,actions:{sort:function(t,e){var n=e.type,r=e.from,o=e.to;return new Promise((function(t,e){X.sort({type:n,from:r,to:o}).then((function(e){t(e)})).catch((function(t){e(t)}))}))},get:function(t,e){var n=e.id;return new Promise((function(t,e){X.get({id:n}).then((function(e){t(e)})).catch((function(t){e(t)}))}))},create:function(t,e){var n=e.name,r=e.from,o=e.problemLink,i=e.description;return new Promise((function(t,e){X.create({name:n,from:r,problemLink:o,description:i}).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}},W=Q,Y=function(t){var e=t.type,n=t.from,r=t.to;return $.post("list/sort_online_judge",{type:e,from:n,to:r})},tt=function(t){var e=t.id;return $.get("/online_judge/".concat(e),{})},et={sort:Y,get:tt},nt={namespaced:!0,actions:{sort:function(t,e){var n=e.type,r=e.from,o=e.to;return new Promise((function(t,e){et.sort({type:n,from:r,to:o}).then((function(e){t(e)})).catch((function(t){e(t)}))}))},get:function(t,e){var n=e.id;return new Promise((function(t,e){et.get({id:n}).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}},rt=nt,ot=function(t){var e=t.id;return $.post("list/sort_test_set",{id:e})},it=function(t){var e=t.id;return $.get("test_set/".concat(e),{})},at=function(t){var e=t.name,n=t.from,r=t.problemLink,o=t.description;return $.post("test_set",{name:e,from:n,problem_link:r,description:o})},ut={sort:ot,get:it,create:at},ct={namespaced:!0,actions:{sort:function(t,e){var n=e.id;return new Promise((function(t,e){ut.sort({id:n}).then((function(e){t(e)})).catch((function(t){e(t)}))}))},get:function(t,e){var n=e.id;return new Promise((function(t,e){ut.get({id:n}).then((function(e){t(e)})).catch((function(t){e(t)}))}))},create:function(t,e){var n=e.ProblemID,r=e.Uploader,o=e.Input,i=e.Output;return new Promise((function(t,e){ut.create({ProblemID:n,Uploader:r,Input:o,Output:i}).then((function(e){t(e)})).catch((function(t){e(t)}))}))}}},st=ct;r["default"].use(v.ZP);var ft=new v.ZP.Store({strict:!1,state:{},getters:{},mutations:{},actions:{},modules:{testSetModule:st,problemModule:W,userModule:G,onlineJudgeModule:rt}}),lt=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"text-right",staticStyle:{margin:"5px"}},[n("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.$router.push({name:"problem_create"})}}},[t._v("添加题目")])],1),n("b-table",{attrs:{items:t.problems,fields:t.fields,striped:"",responsive:"sm"},scopedSlots:t._u([{key:"cell(id)",fn:function(e){return[t._v(" "+t._s(e.value)+" ")]}},{key:"cell(nameid)",fn:function(e){return[n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){return t.$router.push({name:"problem",params:{id:e.item.id}})},keyup:function(n){return t.$router.push({name:"problem",params:{id:e.item.id}})}}},[t._v(t._s(e.item.name))])]}},{key:"cell(from)",fn:function(e){return[n("b-badge",{attrs:{variant:"primary"}},[t._v(t._s(e.value))])]}},{key:"cell(op)",fn:function(e){return[t._v(" "+t._s(e.value)+" ")]}}])})],1)},dt=[],mt=n(3019),pt={name:"HomeView",res:"",data:function(){return{queryconfig:{type:"id",form:1,to:50},problems:[],fields:[{key:"id",label:"题号",thStyle:"width: 15%"},{key:"nameid",label:"题目名称",thStyle:"width: 55%"},{key:"from",label:"标签",thStyle:"width:15%"},{key:"op",label:"操作",thStyle:"width: 15%"}]}},mounted:function(){this.onLoad()},methods:(0,mt.Z)((0,mt.Z)((0,mt.Z)({},(0,v.nv)("problemModule",{sortProblem:"sort"})),(0,v.nv)("onlineJudgeModule",{sortOnlineJudge:"sort"})),{},{onLoad:function(){var t=this;this.$store.dispatch("problemModule/sort",this.queryconfig).then((function(e){t.problems=e.data.data.problems}))}})},ht=pt,vt=(0,_.Z)(ht,lt,dt,!1,null,null,null),bt=vt.exports,gt=[{path:"/register",name:"register",component:function(){return Promise.all([n.e(409),n.e(311)]).then(n.bind(n,7311))}},{path:"/login",name:"login",component:function(){return Promise.all([n.e(409),n.e(686)]).then(n.bind(n,7686))}},{path:"/profile",name:"profile",meta:{auth:!0},component:function(){return n.e(216).then(n.bind(n,3216))}},{path:"/userDetail/:id",name:"userDetail",component:function(){return n.e(254).then(n.bind(n,6254))}}],_t=gt;r["default"].use(I.Z);var yt=[{path:"/",name:"home",component:bt},{path:"/about",name:"about",component:function(){return n.e(830).then(n.bind(n,5830))}},{path:"/problem/create",name:"problem_create",meta:{auth:!0},component:function(){return Promise.all([n.e(409),n.e(479)]).then(n.bind(n,3479))}},{path:"/problem/:id",name:"problem",component:function(){return n.e(265).then(n.bind(n,265))}}].concat((0,P.Z)(_t)),wt=new I.Z({mode:"history",base:"/",routes:yt}),Et=I.Z.prototype.push;I.Z.prototype.push=function(t){return Et.call(this,t).catch((function(t){return t}))},wt.beforeEach((function(t,e,n){t.meta.auth?ft.state.userModule.token?n():wt.push({name:"login"}):n()}));var kt=wt;n(44);r["default"].config.productionTip=!1,r["default"].prototype.Clipboard=l(),r["default"].use(i.XG7),r["default"].use(a.A7),r["default"].use(o.ZP),r["default"].use(s.Z,c()),new r["default"]({router:kt,store:ft,render:function(t){return t(O)}}).$mount("#app")}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,loaded:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}n.m=t,function(){n.amdO={}}(),function(){var t=[];n.O=function(e,r,o,i){if(!r){var a=1/0;for(f=0;f<t.length;f++){r=t[f][0],o=t[f][1],i=t[f][2];for(var u=!0,c=0;c<r.length;c++)(!1&i||a>=i)&&Object.keys(n.O).every((function(t){return n.O[t](r[c])}))?r.splice(c--,1):(u=!1,i<a&&(a=i));if(u){t.splice(f--,1);var s=o();void 0!==s&&(e=s)}}return e}i=i||0;for(var f=t.length;f>0&&t[f-1][2]>i;f--)t[f]=t[f-1];t[f]=[r,o,i]}}(),function(){n.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(e,{a:e}),e}}(),function(){n.d=function(t,e){for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})}}(),function(){n.f={},n.e=function(t){return Promise.all(Object.keys(n.f).reduce((function(e,r){return n.f[r](t,e),e}),[]))}}(),function(){n.u=function(t){return"js/"+t+"-legacy."+{216:"f9da3b0f",254:"b8c59fec",265:"707d7a41",311:"a886b63a",409:"16226f9b",479:"b451d4fa",686:"8bcd03dc",830:"bf1f8163"}[t]+".js"}}(),function(){n.miniCssF=function(t){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(t){return t=Object.create(t),t.children||(t.children=[]),Object.defineProperty(t,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+t.id)}}),t}}(),function(){n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="nextdebug:";n.l=function(r,o,i,a){if(t[r])t[r].push(o);else{var u,c;if(void 0!==i)for(var s=document.getElementsByTagName("script"),f=0;f<s.length;f++){var l=s[f];if(l.getAttribute("src")==r||l.getAttribute("data-webpack")==e+i){u=l;break}}u||(c=!0,u=document.createElement("script"),u.charset="utf-8",u.timeout=120,n.nc&&u.setAttribute("nonce",n.nc),u.setAttribute("data-webpack",e+i),u.src=r),t[r]=[o];var d=function(e,n){u.onerror=u.onload=null,clearTimeout(m);var o=t[r];if(delete t[r],u.parentNode&&u.parentNode.removeChild(u),o&&o.forEach((function(t){return t(n)})),e)return e(n)},m=setTimeout(d.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=d.bind(null,u.onerror),u.onload=d.bind(null,u.onload),c&&document.head.appendChild(u)}}}(),function(){n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){n.nmd=function(t){return t.paths=[],t.children||(t.children=[]),t}}(),function(){n.p="/"}(),function(){var t={143:0};n.f.j=function(e,r){var o=n.o(t,e)?t[e]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(n,r){o=t[e]=[n,r]}));r.push(o[2]=i);var a=n.p+n.u(e),u=new Error,c=function(r){if(n.o(t,e)&&(o=t[e],0!==o&&(t[e]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;u.message="Loading chunk "+e+" failed.\n("+i+": "+a+")",u.name="ChunkLoadError",u.type=i,u.request=a,o[1](u)}};n.l(a,c,"chunk-"+e,e)}},n.O.j=function(e){return 0===t[e]};var e=function(e,r){var o,i,a=r[0],u=r[1],c=r[2],s=0;if(a.some((function(e){return 0!==t[e]}))){for(o in u)n.o(u,o)&&(n.m[o]=u[o]);if(c)var f=c(n)}for(e&&e(r);s<a.length;s++)i=a[s],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(f)},r=self["webpackChunknextdebug"]=self["webpackChunknextdebug"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(1793)}));r=n.O(r)})();
//# sourceMappingURL=app-legacy.ae42f65b.js.map