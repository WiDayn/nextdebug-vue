(function(){"use strict";var e={3477:function(e,t,n){var r=n(8935),o=n(2424),a=n(8262),i=n(3266),s=n(6166),u=n.n(s),c=n(9483),l=n(4635),d=n.n(l),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("NavBar"),n("b-container",[n("router-view")],1)],1)},p=[],f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"info"}},[n("b-container",[n("b-navbar-brand",{attrs:{href:"javascript:void(0);"},on:{click:function(t){return e.$router.push({name:"home"})}}},[e._v("DEBUG.PINK")]),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",{staticClass:"ml-auto"},[e.userInfo?e._e():n("b-nav-item",{on:{click:function(t){return e.$router.replace({name:"login"})}}},[e._v("登录")]),e.userInfo?e._e():n("b-nav-item",{on:{click:function(t){return e.$router.replace({name:"register"})}}},[e._v("注册")]),e.userInfo?n("b-avatar",{attrs:{variant:"info",src:"http://localhost:1016/api/avatar?src="+e.userInfo.avatar}}):e._e(),e.userInfo?n("b-nav-item-dropdown",{attrs:{right:""}},[n("strong",[n("b-dropdown-text",{staticStyle:{"font-weight":"bolder"}},[e._v(e._s(e.userInfo.nick_name))])],1),n("b-dropdown-divider"),n("b-dropdown-item",{on:{click:function(t){return e.$router.push({name:"profile"})}}},[e._v("个人主页")]),n("b-dropdown-item",{on:{click:e.logout}},[e._v("登出")])],1):e._e()],1)],1)],1)],1)],1)},h=[],b=n(4665),v={computed:(0,b.rn)({userInfo:e=>e.userModule.userInfo}),methods:(0,b.nv)("userModule",["logout"])},g=v,_=n(1001),y=(0,_.Z)(g,f,h,!1,null,null,null),w=y.exports,E={components:{NavBar:w},data(){return{}}},S=E,k=(0,_.Z)(S,m,p,!1,null,null,null),O=k.exports,N=n(2809);const P="nextdebug",I=`${P}_user_`,T=`${I}token`,x=`${I}info`,j=e=>{localStorage.removeItem(e)},U=(e,t)=>{localStorage.setItem(e,t)},$=e=>localStorage.getItem(e);var R={clear:j,set:U,get:$,USER_TOKEN:T,USER_INFO:x};const M=u().create({baseURL:"http://localhost:1016/api/",timeout:5e3});M.interceptors.request.use((e=>(Object.assign(e.headers,{Authorization:`Bearer ${R.get(R.USER_TOKEN)}`}),e)),(e=>Promise.reject(e)));var F=M;const Z=({Email:e,Name:t,Password:n})=>F.post("auth/register",{Email:e,Name:t,Password:n}),K=({name:e,password:t})=>F.post("auth/login",{name:e,password:t}),C=()=>F.get("auth/info");var L={register:Z,login:K,info:C};const A=({context:e})=>F.post("upload/avatar",{context:e});var B={uploadavatar:A};const J={namespaced:!0,state:{token:R.get(R.USER_TOKEN),userInfo:R.get(R.USER_INFO)?JSON.parse(R.get(R.USER_INFO)):null},mutations:{SET_TOKEN(e,t){R.set(R.USER_TOKEN,t),e.token=t},SET_USERINFO(e,t){R.set(R.USER_INFO,JSON.stringify(t)),e.userInfo=t}},actions:{register(e,{Email:t,Name:n,Password:r}){return new Promise(((o,a)=>{L.register({Email:t,Name:n,Password:r}).then((t=>(e.commit("SET_TOKEN",t.data.data.token),L.info()))).then((t=>{e.commit("SET_USERINFO",t.data.data.user),o(t)})).catch((e=>{a(e)}))}))},login(e,{name:t,password:n}){return new Promise(((r,o)=>{L.login({name:t,password:n}).then((t=>(e.commit("SET_TOKEN",t.data.data.token),L.info()))).then((t=>{e.commit("SET_USERINFO",t.data.data.user),r(t)})).catch((e=>{o(e)}))}))},logout({commit:e}){e("SET_TOKEN",""),R.clear(R.USER_TOKEN),e("SET_USERINFO",""),R.clear(R.USER_INFO),window.location.reload()},uploadavatar(e,{context:t}){return new Promise(((n,r)=>{B.uploadavatar({context:t}).then((t=>{e.commit("SET_USERINFO",t.data.data.user),n(t),window.location.reload()})).catch((e=>{r(e)}))}))}}};var q=J;const D=({type:e,from:t,to:n})=>F.post("list/sort_problem",{type:e,from:t,to:n}),G=({id:e})=>F.get(`problems/${e}`,{}),z=({name:e,from:t,problemLink:n,description:r})=>F.post("problems",{name:e,from:t,problem_link:n,description:r});var H={sort:D,get:G,create:z};const V={namespaced:!0,actions:{sort(e,{type:t,from:n,to:r}){return new Promise(((e,o)=>{H.sort({type:t,from:n,to:r}).then((t=>{e(t)})).catch((e=>{o(e)}))}))},get(e,{id:t}){return new Promise(((e,n)=>{H.get({id:t}).then((t=>{e(t)})).catch((e=>{n(e)}))}))},create(e,{name:t,from:n,problemLink:r,description:o}){return new Promise(((e,a)=>{H.create({name:t,from:n,problemLink:r,description:o}).then((t=>{e(t)})).catch((e=>{a(e)}))}))}}};var X=V;const Q=({type:e,from:t,to:n})=>F.post("list/sort_online_judge",{type:e,from:t,to:n}),W=({id:e})=>F.get(`/online_judge/${e}`,{});var Y={sort:Q,get:W};const ee={namespaced:!0,actions:{sort(e,{type:t,from:n,to:r}){return new Promise(((e,o)=>{Y.sort({type:t,from:n,to:r}).then((t=>{e(t)})).catch((e=>{o(e)}))}))},get(e,{id:t}){return new Promise(((e,n)=>{Y.get({id:t}).then((t=>{e(t)})).catch((e=>{n(e)}))}))}}};var te=ee;const ne=({id:e})=>F.post("list/sort_test_set",{id:e}),re=({id:e})=>F.get(`test_set/${e}`,{}),oe=({name:e,from:t,problemLink:n,description:r})=>F.post("test_set",{name:e,from:t,problem_link:n,description:r});var ae={sort:ne,get:re,create:oe};const ie={namespaced:!0,actions:{sort(e,{id:t}){return new Promise(((e,n)=>{ae.sort({id:t}).then((t=>{e(t)})).catch((e=>{n(e)}))}))},get(e,{id:t}){return new Promise(((e,n)=>{ae.get({id:t}).then((t=>{e(t)})).catch((e=>{n(e)}))}))},create(e,{ProblemID:t,Uploader:n,Input:r,Output:o}){return new Promise(((e,a)=>{ae.create({ProblemID:t,Uploader:n,Input:r,Output:o}).then((t=>{e(t)})).catch((e=>{a(e)}))}))}}};var se=ie;r["default"].use(b.ZP);var ue=new b.ZP.Store({strict:!1,state:{},getters:{},mutations:{},actions:{},modules:{testSetModule:se,problemModule:X,userModule:q,onlineJudgeModule:te}}),ce=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"text-right",staticStyle:{margin:"5px"}},[n("b-button",{attrs:{variant:"primary"},on:{click:function(t){return e.$router.push({name:"problem_create"})}}},[e._v("添加题目")])],1),n("b-table",{attrs:{items:e.problems,fields:e.fields,striped:"",responsive:"sm"},scopedSlots:e._u([{key:"cell(id)",fn:function(t){return[e._v(" "+e._s(t.value)+" ")]}},{key:"cell(nameid)",fn:function(t){return[n("a",{attrs:{href:"javascript:void(0);"},on:{click:function(n){return e.$router.push({name:"problem",params:{id:t.item.id}})},keyup:function(n){return e.$router.push({name:"problem",params:{id:t.item.id}})}}},[e._v(e._s(t.item.name))])]}},{key:"cell(from)",fn:function(t){return[n("b-badge",{attrs:{variant:"primary"}},[e._v(e._s(t.value))])]}},{key:"cell(op)",fn:function(t){return[e._v(" "+e._s(t.value)+" ")]}}])})],1)},le=[],de={name:"HomeView",res:"",data(){return{queryconfig:{type:"id",form:1,to:50},problems:[],fields:[{key:"id",label:"题号",thStyle:"width: 15%"},{key:"nameid",label:"题目名称",thStyle:"width: 55%"},{key:"from",label:"标签",thStyle:"width:15%"},{key:"op",label:"操作",thStyle:"width: 15%"}]}},mounted(){this.onLoad()},methods:{...(0,b.nv)("problemModule",{sortProblem:"sort"}),...(0,b.nv)("onlineJudgeModule",{sortOnlineJudge:"sort"}),onLoad(){this.$store.dispatch("problemModule/sort",this.queryconfig).then((e=>{this.problems=e.data.data.problems}))}}},me=de,pe=(0,_.Z)(me,ce,le,!1,null,null,null),fe=pe.exports;const he=[{path:"/register",name:"register",component:()=>n.e(311).then(n.bind(n,7311))},{path:"/login",name:"login",component:()=>n.e(686).then(n.bind(n,7686))},{path:"/profile",name:"profile",meta:{auth:!0},component:()=>n.e(932).then(n.bind(n,6932))}];var be=he;r["default"].use(N.Z);const ve=[{path:"/",name:"home",component:fe},{path:"/about",name:"about",component:()=>n.e(830).then(n.bind(n,5830))},{path:"/problem/create",name:"problem_create",component:()=>n.e(479).then(n.bind(n,3479))},{path:"/problem/:id",name:"problem",component:()=>n.e(265).then(n.bind(n,265))},...be],ge=new N.Z({mode:"history",base:"/",routes:ve}),_e=N.Z.prototype.push;N.Z.prototype.push=function(e){return _e.call(this,e).catch((e=>e))},ge.beforeEach(((e,t,n)=>{e.meta.auth?ue.state.userModule.token?n():ge.push({name:"login"}):n()}));var ye=ge;n(44);r["default"].config.productionTip=!1,r["default"].prototype.Clipboard=d(),r["default"].use(a.XG7),r["default"].use(i.A7),r["default"].use(o.ZP),r["default"].use(c.Z,u()),new r["default"]({router:ye,store:ue,render:e=>e(O)}).$mount("#app")}},t={};function n(r){var o=t[r];if(void 0!==o)return o.exports;var a=t[r]={id:r,loaded:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.loaded=!0,a.exports}n.m=e,function(){n.amdO={}}(),function(){var e=[];n.O=function(t,r,o,a){if(!r){var i=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],a=e[l][2];for(var s=!0,u=0;u<r.length;u++)(!1&a||i>=a)&&Object.keys(n.O).every((function(e){return n.O[e](r[u])}))?r.splice(u--,1):(s=!1,a<i&&(i=a));if(s){e.splice(l--,1);var c=o();void 0!==c&&(t=c)}}return t}a=a||0;for(var l=e.length;l>0&&e[l-1][2]>a;l--)e[l]=e[l-1];e[l]=[r,o,a]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}}(),function(){n.f={},n.e=function(e){return Promise.all(Object.keys(n.f).reduce((function(t,r){return n.f[r](e,t),t}),[]))}}(),function(){n.u=function(e){return"js/"+e+"."+{265:"5235d70b",311:"dafbc9f4",479:"aa705621",686:"bfb413f3",830:"bf1f8163",932:"2408a117"}[e]+".js"}}(),function(){n.miniCssF=function(e){}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="nextdebug:";n.l=function(r,o,a,i){if(e[r])e[r].push(o);else{var s,u;if(void 0!==a)for(var c=document.getElementsByTagName("script"),l=0;l<c.length;l++){var d=c[l];if(d.getAttribute("src")==r||d.getAttribute("data-webpack")==t+a){s=d;break}}s||(u=!0,s=document.createElement("script"),s.charset="utf-8",s.timeout=120,n.nc&&s.setAttribute("nonce",n.nc),s.setAttribute("data-webpack",t+a),s.src=r),e[r]=[o];var m=function(t,n){s.onerror=s.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],s.parentNode&&s.parentNode.removeChild(s),o&&o.forEach((function(e){return e(n)})),t)return t(n)},p=setTimeout(m.bind(null,void 0,{type:"timeout",target:s}),12e4);s.onerror=m.bind(null,s.onerror),s.onload=m.bind(null,s.onload),u&&document.head.appendChild(s)}}}(),function(){n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){n.p="/"}(),function(){var e={143:0};n.f.j=function(t,r){var o=n.o(e,t)?e[t]:void 0;if(0!==o)if(o)r.push(o[2]);else{var a=new Promise((function(n,r){o=e[t]=[n,r]}));r.push(o[2]=a);var i=n.p+n.u(t),s=new Error,u=function(r){if(n.o(e,t)&&(o=e[t],0!==o&&(e[t]=void 0),o)){var a=r&&("load"===r.type?"missing":r.type),i=r&&r.target&&r.target.src;s.message="Loading chunk "+t+" failed.\n("+a+": "+i+")",s.name="ChunkLoadError",s.type=a,s.request=i,o[1](s)}};n.l(i,u,"chunk-"+t,t)}},n.O.j=function(t){return 0===e[t]};var t=function(t,r){var o,a,i=r[0],s=r[1],u=r[2],c=0;if(i.some((function(t){return 0!==e[t]}))){for(o in s)n.o(s,o)&&(n.m[o]=s[o]);if(u)var l=u(n)}for(t&&t(r);c<i.length;c++)a=i[c],n.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return n.O(l)},r=self["webpackChunknextdebug"]=self["webpackChunknextdebug"]||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))}();var r=n.O(void 0,[998],(function(){return n(3477)}));r=n.O(r)})();
//# sourceMappingURL=app.6630163e.js.map