(function(e){function t(t){for(var s,o,l=t[0],n=t[1],c=t[2],u=0,d=[];u<l.length;u++)o=l[u],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&d.push(i[o][0]),i[o]=0;for(s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,c||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],s=!0,l=1;l<a.length;l++){var n=a[l];0!==i[n]&&(s=!1)}s&&(r.splice(t--,1),e=o(o.s=a[0]))}return e}var s={},i={app:0},r=[];function o(t){if(s[t])return s[t].exports;var a=s[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=s,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)o.d(a,s,function(t){return e[t]}.bind(null,s));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],n=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var p=n;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"32ea":function(e,t,a){},"37a6":function(e,t,a){"use strict";var s=a("c06a"),i=a.n(s);i.a},"4c0d":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);var s=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},r=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-dark"},[a("router-link",{staticClass:"navbar-brand d-flex",attrs:{to:{name:"Home"}}},[a("div",{staticClass:"d-flex flex-column align-items-center"},[a("h1",{staticClass:"border border-primary"},[e._v("K")])])]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("span",{staticClass:"navbar-text"},[e.$auth.isAuthenticated?a("button",{staticClass:"btn btn-danger",on:{click:e.logout}},[e._v("logout")]):a("button",{staticClass:"btn btn-success",on:{click:e.login}},[e._v(" Login ")])])])],1)},l=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],n=a("335d"),c=a("bc3a"),p=a.n(c);let u=location.host.includes("localhost")?"http://localhost:3000":"/";const d=p.a.create({baseURL:u+"api",timeout:3e3}),v=function(e){d.defaults.headers.authorization=e},m=function(){d.defaults.headers.authorization=""};var h={name:"Navbar",methods:{async login(){await this.$auth.loginWithPopup(),this.$auth.isAuthenticated&&(v(this.$auth.bearer),this.$store.dispatch("getProfile"))},async logout(){m(),await this.$auth.logout({returnTo:window.location.origin})}}},f=h,g=a("2877"),K=Object(g["a"])(f,o,l,!1,null,null,null),w=K.exports,b={name:"App",async beforeCreate(){await Object(n["c"])(),this.$auth.isAuthenticated&&(v(this.$auth.bearer),this.$store.dispatch("getProfile"),this.$store.dispatch("getUserVaults",this.$auth.userInfo.id))},components:{Navbar:w}},y=b,P=(a("5c0b"),Object(g["a"])(y,i,r,!1,null,null,null)),_=P.exports,k=a("8c4f"),V=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home container-fluid"},[a("div",{staticClass:"mt-2 card-columns"},e._l(e.keeps,(function(e){return a("keep-component",{key:e.id,attrs:{keepProp:e}})})),1)])},C=[],I=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:e.keepProp.img,alt:"","data-toggle":"modal","data-target":"#"+e.modalId},on:{click:e.setActive}}),a("h2",{staticClass:"text-white"},[e._v(" "+e._s(e.keepProp.name)+" "),a("img",{staticClass:"creator-img",attrs:{src:e.keepProp.creator.picture,height:"50",width:"50",alt:""},on:{click:e.viewProfile}}),e.keepProp.creatorId==this.$auth.userInfo.id?a("i",{staticClass:"fa fa-trash text-danger",attrs:{"aria-hidden":"true"},on:{click:e.deleteKeep}}):e._e()]),a("keep-modal",{attrs:{id:e.modalId},scopedSlots:e._u([{key:"header",fn:function(){return[e.activeKeep.id?a("div",[a("h2",{staticClass:"text-white"},[e._v(e._s(e.activeKeep.name))]),a("small",[e._v("Posted By: "),a("span",{staticClass:"text-info"},[e._v(e._s(e.activeKeep.creator.name))])]),a("br"),a("br"),a("p",{staticClass:"text-light"},[e._v(e._s(e.activeKeep.description))])]):e._e()]},proxy:!0},{key:"body",fn:function(){return[e.activeKeep.id?a("div",[a("div",{staticClass:"text-center"},[a("img",{staticClass:"img-fluid",attrs:{src:e.activeKeep.img,alt:""}})]),a("small",{staticClass:"d-block text-center"},[e._v("Views: "+e._s(e.activeKeep.views)+" "),a("b",[e._v("|")]),e._v(" Keeps: "+e._s(e.activeKeep.keeps))]),a("div",{staticClass:"dropdown show text-center"},[a("button",{staticClass:"btn btn-success dropdown-toggle",attrs:{role:"button","data-toggle":"dropdown"},on:{click:e.sendKeepId}},[e._v(" Add To Vault ")]),a("div",{staticClass:"dropdown-menu"},e._l(e.vaults,(function(e){return a("vault-drop-down-component",{key:e.id,attrs:{vaultProp:e}})})),1)]),a("br"),a("div",{staticClass:"text-center"},[a("img",{staticClass:"creator-img",attrs:{src:e.activeKeep.creator.picture,alt:""}})]),a("br")]):e._e()]},proxy:!0}])})],1)},$=[],x=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"modal fade",attrs:{id:e.id,"data-backdrop":"static",tabindex:"-1",role:"dialog"}},[a("div",{staticClass:"modal-dialog",attrs:{role:"document"}},[a("div",{staticClass:"modal-content"},[a("div",{staticClass:"modal-header"},[e._t("header"),e._m(0)],2),e._t("body")],2)])])},A=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal"}},[a("span",{attrs:{"aria-hidden":"true"}},[e._v("×")])])}],T={name:"KeepModal",props:{id:{type:String,required:!0}}},O=T,j=Object(g["a"])(O,x,A,!1,null,null,null),E=j.exports,N=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("p",{staticClass:"dropdown-item",on:{click:e.addToVault}},[e._v(e._s(e.vaultProp.name))])])},S=[],D={name:"VaultDropDownComponent",props:["vaultProp","keepProp"],methods:{addToVault(){this.$store.dispatch("addToVault",{vaultId:this.vaultProp.id,keepId:this.vaultKeepKeepId})}},computed:{vaultKeepKeepId(){return this.$store.state.vaultKeepKeepId}}},B=D,U=Object(g["a"])(B,N,S,!1,null,null,null),H=U.exports,M={name:"keep-component",props:["keepProp","index"],computed:{modalId(){return"modal"+this.keepProp.id},activeKeep(){return this.$store.state.activeKeep},vaults(){return this.$store.state.userVaults}},methods:{viewProfile(){this.$router.push({name:"Profile",params:{id:this.keepProp.creator.id}})},deleteKeep(){let e=confirm("Are you sure you want to delete this keep?");1==e&&("Profile"==this.$route.name?this.$store.dispatch("deleteKeepOnProfile",{keep:this.keepProp,profileId:this.$route.params.id}):this.$store.dispatch("deleteKeepOnHome",this.keepProp.id))},setActive(){console.log(this.keepProp),this.keepProp.views++,this.$store.dispatch("viewKeep",this.keepProp)},sendKeepId(){this.$store.dispatch("sendKeepId",this.keepProp.id)}},components:{KeepModal:E,VaultDropDownComponent:H}},G=M,R=(a("76eb"),Object(g["a"])(G,I,$,!1,null,null,null)),L=R.exports,z={mounted(){this.$store.dispatch("getKeeps")},name:"home",computed:{keeps(){return this.$store.state.keeps}},components:{keepComponent:L}},q=z,J=(a("b842"),Object(g["a"])(q,V,C,!1,null,"ab3d04b8",null)),W=J.exports,Q=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row my-2"},[a("div",{staticClass:"col-12 text-center"},[a("img",{staticClass:"creator-img",attrs:{src:e.viewedProfile.picture,alt:""}}),a("h2",[e._v(e._s(e.viewedProfile.name))]),a("h5",[e._v("Vaults: "+e._s(e.vaults.length))]),a("h5",[e._v("Keeps: "+e._s(e.keeps.length))])])]),a("div",{staticClass:"row my-1"},[a("div",{staticClass:"col-12"},[a("h3",[e._v(" Vaults "),this.$auth.userInfo.id==this.$route.params.id?a("i",{staticClass:"fas fa-plus text-success",on:{click:function(t){e.vaultToggle=!e.vaultToggle}}}):e._e()]),e.vaultToggle?a("form",{staticClass:"form-inline",on:{submit:function(t){return t.preventDefault(),e.createVault(t)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.name,expression:"newVault.name"}],staticClass:"form-control",attrs:{type:"text",name:"vaultName",id:"vaultName",placeholder:"Title...","aria-describedby":"helpId"},domProps:{value:e.newVault.name},on:{input:function(t){t.target.composing||e.$set(e.newVault,"name",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.description,expression:"newVault.description"}],staticClass:"form-control",attrs:{type:"text",name:"vaultDescription",id:"vaultDescription",placeholder:"Description...","aria-describedby":"helpId"},domProps:{value:e.newVault.description},on:{input:function(t){t.target.composing||e.$set(e.newVault,"description",t.target.value)}}}),a("label",{attrs:{for:"vaultIsPrivate"}},[e._v("Private")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newVault.IsPrivate,expression:"newVault.IsPrivate"}],staticClass:"form-control",attrs:{type:"checkbox",name:"vaultIsPrivate",id:"vaultIsPrivate","aria-describedby":"helpId"},domProps:{checked:Array.isArray(e.newVault.IsPrivate)?e._i(e.newVault.IsPrivate,null)>-1:e.newVault.IsPrivate},on:{change:function(t){var a=e.newVault.IsPrivate,s=t.target,i=!!s.checked;if(Array.isArray(a)){var r=null,o=e._i(a,r);s.checked?o<0&&e.$set(e.newVault,"IsPrivate",a.concat([r])):o>-1&&e.$set(e.newVault,"IsPrivate",a.slice(0,o).concat(a.slice(o+1)))}else e.$set(e.newVault,"IsPrivate",i)}}})]),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Create Vault")])]):e._e()])]),a("div",{staticClass:"row mb-4 mx-1"},e._l(e.vaults,(function(e){return a("vault-component",{key:e.id,attrs:{vaultProp:e}})})),1),a("div",{staticClass:"row my-1"},[a("div",{staticClass:"col-12"},[a("h3",[e._v(" Keeps "),this.$auth.userInfo.id==this.$route.params.id?a("i",{staticClass:"fas fa-plus text-success",on:{click:function(t){e.keepToggle=!e.keepToggle}}}):e._e()]),e.keepToggle?a("form",{staticClass:"form-inline",on:{submit:function(t){return t.preventDefault(),e.createKeep(t)}}},[a("div",{staticClass:"form-group"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.name,expression:"newKeep.name"}],staticClass:"form-control",attrs:{type:"text",name:"keepName",id:"keepName",placeholder:"Title...","aria-describedby":"helpId"},domProps:{value:e.newKeep.name},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"name",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.img,expression:"newKeep.img"}],staticClass:"form-control",attrs:{type:"text",name:"keepImg",id:"keepImg",placeholder:"URL...","aria-describedby":"helpId"},domProps:{value:e.newKeep.img},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"img",t.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:e.newKeep.description,expression:"newKeep.description"}],staticClass:"form-control",attrs:{type:"text",name:"keepDescription",id:"keepDescription",placeholder:"Description...","aria-describedby":"helpId"},domProps:{value:e.newKeep.description},on:{input:function(t){t.target.composing||e.$set(e.newKeep,"description",t.target.value)}}})]),a("button",{staticClass:"btn btn-success",attrs:{type:"submit"}},[e._v("Create Keep")])]):e._e()])]),a("div",{staticClass:"card-columns"},e._l(e.keeps,(function(e){return a("keep-component",{key:e.id,attrs:{keepProp:e}})})),1)])},Z=[],F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"col-6 col-md-3 card"},[a("h2",{on:{click:e.viewVault}},[e._v(e._s(e.vaultProp.name))]),e.vaultProp.creatorId==this.$auth.userInfo.id?a("i",{staticClass:"fa fa-trash text-danger",attrs:{"aria-hidden":"true"},on:{click:e.deleteVault}}):e._e()])},X=[],Y={name:"vault-component",props:["vaultProp"],methods:{viewVault(){this.$store.dispatch("setActiveVault",this.vaultProp),this.$router.push({name:"Vault",params:{profileId:this.vaultProp.creatorId,vaultId:this.vaultProp.id}})},deleteVault(){let e=confirm("Are you sure you want to delete this vault?");1==e&&this.$store.dispatch("deleteVault",{vaultId:this.vaultProp.id,profileId:this.vaultProp.creatorId})}}},ee=Y,te=Object(g["a"])(ee,F,X,!1,null,null,null),ae=te.exports,se={mounted(){this.$store.dispatch("getSearchedProfile",this.$route.params.id),this.$store.dispatch("getProfileVaults",this.$route.params.id),this.$store.dispatch("getProfileKeeps",this.$route.params.id)},name:"profile",data(){return{keepToggle:!1,vaultToggle:!1,newVault:{},newKeep:{}}},computed:{keeps(){return this.$store.state.profileKeeps},vaults(){return this.$store.state.profileVaults},viewedProfile(){return this.$store.state.viewedProfile}},methods:{createKeep(){this.$store.dispatch("createKeep",{newKeep:this.newKeep,profileId:this.$route.params.id}),this.newKeep={}},createVault(){this.$store.dispatch("createVault",{newVault:this.newVault,profileId:this.$route.params.id}),this.vaultToggle=!1,this.newVault={}}},components:{keepComponent:L,vaultComponent:ae}},ie=se,re=(a("37a6"),Object(g["a"])(ie,Q,Z,!1,null,null,null)),oe=re.exports,le=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container-fluid"},[e.activeVault.name?a("div",{staticClass:"row mb-2"},[a("div",{staticClass:"col-12"},[a("h2",[e._v(e._s(e.activeVault.name))]),a("p",[e._v("Current Keeps: "+e._s(e.vaultsKeeps.length))])])]):e._e(),e.activeVault.name?a("div",{staticClass:"card-columns"},e._l(e.vaultsKeeps,(function(e){return a("vaults-keeps-component",{key:e.id,attrs:{vaultKeepProp:e}})})),1):e._e(),e.activeVault.name?e._e():a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 text-center"},[a("h2",[e._v("THIS VAULT IS PRIVATE")]),a("button",{staticClass:"btn btn-info",attrs:{type:"button"},on:{click:e.goBackHome}},[e._v(" Go To Home ")])])])])},ne=[],ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"card"},[a("img",{staticClass:"card-img-top",attrs:{src:e.vaultKeepProp.img,"data-toggle":"modal","data-target":"#"+e.modalId,alt:""},on:{click:e.setActive}}),a("h2",{staticClass:"text-white"},[e._v(" "+e._s(e.vaultKeepProp.name)+" "),this.$auth.userInfo.id==this.$route.params.profileId?a("i",{staticClass:"fas fa-minus-circle text-warning",attrs:{"aria-hidden":"true"},on:{click:e.removeKeep}}):e._e()]),a("keep-modal",{attrs:{id:e.modalId},scopedSlots:e._u([{key:"header",fn:function(){return[e.activeKeep.id?a("div",[a("h2",{staticClass:"text-white"},[e._v(e._s(e.activeKeep.name))]),a("small",[e._v("Posted By: "),a("span",{staticClass:"text-info"},[e._v(e._s(e.activeKeep.creator.name))])]),a("br"),a("br"),a("p",{staticClass:"text-light"},[e._v(e._s(e.activeKeep.description))])]):e._e()]},proxy:!0},{key:"body",fn:function(){return[e.activeKeep.id?a("div",[a("div",{staticClass:"text-center"},[a("img",{staticClass:"img-fluid",attrs:{src:e.activeKeep.img,alt:""}})]),a("small",{staticClass:"d-block text-center"},[e._v("Views: "+e._s(e.activeKeep.views)+" "),a("b",[e._v("|")]),e._v(" Keeps: "+e._s(e.activeKeep.keeps))]),a("br"),a("div",{staticClass:"text-center"},[a("img",{staticClass:"creator-img",attrs:{src:e.activeKeep.creator.picture,alt:""}})]),a("br")]):e._e()]},proxy:!0}])})],1)},pe=[],ue={name:"VaultsKeepsComponent",props:["vaultKeepProp"],computed:{modalId(){return"modal"+this.vaultKeepProp.id},activeKeep(){return this.$store.state.activeKeep}},methods:{viewProfile(){this.$router.push({name:"Profile",params:{id:this.vaultKeepProp.creator.id}})},viewKeep(){let e=this.vaultKeepProp;e.views++,this.$store.dispatch("viewKeep",e)},removeKeep(){let e={vaultKeepId:this.vaultKeepProp.vaultKeepId,vaultId:this.$route.params.vaultId};console.log(e);let t=confirm("Are you sure you want to remove this keep?");1==t&&this.$store.dispatch("removeKeep",e)},setActive(){console.log(this.vaultKeepProp),this.vaultKeepProp.views++,this.$store.dispatch("viewKeep",this.vaultKeepProp)},sendKeepId(){this.$store.dispatch("sendKeepId",this.vaultKeepProp.id)}},components:{KeepModal:E,VaultDropDownComponent:H}},de=ue,ve=(a("e2ee"),Object(g["a"])(de,ce,pe,!1,null,null,null)),me=ve.exports,he={mounted(){this.$store.dispatch("getActiveVault",this.$route.params.vaultId),this.$store.dispatch("getKeepsByVaultId",this.$route.params.vaultId)},name:"Vault",computed:{activeVault(){return this.$store.state.activeVault},vaultsKeeps(){return this.$store.state.currentVaultsKeeps}},components:{VaultsKeepsComponent:me},methods:{goBackHome(){this.$router.push({name:"Home"})}}},fe=he,ge=(a("7212"),Object(g["a"])(fe,le,ne,!1,null,null,null)),Ke=ge.exports;s["a"].use(k["a"]);const we=[{path:"/",name:"Home",component:W},{path:"/profile/:id",name:"Profile",component:oe},{path:"/profile/:profileId/vaults/:vaultId",name:"Vault",component:Ke,beforeEnter:n["b"]}],be=new k["a"]({routes:we});var ye=be,Pe=a("2f62");s["a"].use(Pe["a"]);var _e=new Pe["a"].Store({state:{profile:{},viewedProfile:{},profileKeeps:[],profileVaults:[],keeps:[],userVaults:[],activeKeep:{},activeVault:{},currentVaultsKeeps:[],vaultKeepKeepId:null},mutations:{setProfile(e,t){e.profile=t},setViewedProfile(e,t){e.viewedProfile=t},setKeeps(e,t){e.keeps=t},setProfileKeeps(e,t){e.profileKeeps=t},setProfileVaults(e,t){e.profileVaults=t},setActiveKeep(e,t){e.activeKeep=t},setActiveVault(e,t){e.activeVault=t},setUserVaults(e,t){e.userVaults=t},sendKeepId(e,t){e.vaultKeepKeepId=t},setVaultKeeps(e,t){e.currentVaultsKeeps=t}},actions:{async getProfile({commit:e}){try{let t=await d.get("profiles");e("setProfile",t.data)}catch(t){console.error(t)}},async getKeeps({commit:e,dispatch:t}){try{let t=await d.get("keeps");console.log("GETTING KEEPS"),e("setKeeps",t.data)}catch(a){console.error(a)}},async getSearchedProfile({commit:e,dispatch:t},a){try{let t=await d.get("profiles/"+a);e("setViewedProfile",t.data)}catch(s){console.error(s)}},async getProfileKeeps({commit:e,dispatch:t},a){try{let t=await d.get("profiles/"+a+"/keeps");e("setProfileKeeps",t.data)}catch(s){console.error(s)}},async getProfileVaults({commit:e,dispatch:t},a){try{let t=await d.get("profiles/"+a+"/vaults");e("setProfileVaults",t.data)}catch(s){console.error(s)}},async viewKeep({commit:e,dispatch:t},a){try{let e=await d.put("keeps/"+a.id+"/views",a);t("setActiveKeep",e.data)}catch(s){console.error(s)}},async createKeep({commit:e,dispatch:t},a){try{await d.post("keeps",a.newKeep);t("getProfileKeeps",a.profileId)}catch(s){console.error(s)}},async createVault({commit:e,dispatch:t},a){try{let e=await d.post("vaults",a.newVault);console.log(e),t("getProfileVaults",a.profileId),t("getUserVaults",a.profileId)}catch(s){console.error(s)}},async deleteKeepOnProfile({commit:e,dispatch:t},a){try{await d.delete("keeps/"+a.keep.id),t("getProfileKeeps",a.profileId)}catch(s){console.error(s)}},async deleteKeepOnHome({commit:e,dispatch:t},a){try{await d.delete("keeps/"+a),t("getKeeps")}catch(s){console.error(s)}},setActiveKeep({commit:e,dispatch:t},a){e("setActiveKeep",a)},setActiveVault({commit:e,dispatch:t},a){e("setActiveVault",a)},async getUserVaults({commit:e,dispatch:t},a){try{let t=await d.get("profiles/"+a+"/vaults");e("setUserVaults",t.data)}catch(s){console.error(s)}},sendKeepId({commit:e,dispatch:t},a){console.log("GOT SENT KEEPID"),e("sendKeepId",a)},async addToVault({commit:e,dispatch:t},a){try{await d.post("vaultkeeps",a);t("getKeepById",a.keepId),t("getKeepsByVaultId",a.vaultId)}catch(s){console.error(s)}},async getKeepById({commit:e,dispatch:t},a){try{let e=await d.get("keeps/"+a);t("editKeepsOnKeep",e.data)}catch(s){console.error(s)}},async editKeepsOnKeep({commit:e,dispatch:t},a){try{a.keeps++,console.log(a);await d.put("keeps/"+a.id,a);t("getKeeps"),e("setActiveKeep",a)}catch(s){console.error(s)}},async getKeepsByVaultId({commit:e,dispatch:t},a){try{let t=await d.get("vaults/"+a+"/keeps");console.log(t),e("setVaultKeeps",t.data)}catch(s){console.error(s)}},async getActiveVault({commit:e,dispatch:t},a){try{let t=await d.get("vaults/"+a);e("setActiveVault",t.data)}catch(s){console.error(s)}},async deleteVault({commit:e,dispatch:t},a){try{await d.delete("vaults/"+a.vaultId);t("getProfileVaults",a.profileId)}catch(s){console.error()}},async removeKeep({commit:e,dispatch:t},a){try{await d.delete("vaultkeeps/"+a.vaultKeepId);t("getKeepsByVaultId",a.vaultId)}catch(s){console.error(s)}}}});const ke="nehemiahboone.us.auth0.com",Ve="0Rne5SzwB0Pq0pWNQmZpm5kPjGrx5upg",Ce="https://https://NehemiahAPI/";s["a"].use(n["a"],{domain:ke,clientId:Ve,audience:Ce,onRedirectCallback:e=>{ye.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}}),new s["a"]({router:ye,store:_e,render:function(e){return e(_)}}).$mount("#app")},"5c0b":function(e,t,a){"use strict";var s=a("9c0c"),i=a.n(s);i.a},7212:function(e,t,a){"use strict";var s=a("aabe"),i=a.n(s);i.a},"76eb":function(e,t,a){"use strict";var s=a("c382"),i=a.n(s);i.a},"9c0c":function(e,t,a){},aabe:function(e,t,a){},b842:function(e,t,a){"use strict";var s=a("4c0d"),i=a.n(s);i.a},c06a:function(e,t,a){},c382:function(e,t,a){},e2ee:function(e,t,a){"use strict";var s=a("32ea"),i=a.n(s);i.a}});