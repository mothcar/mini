(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["2d0a314a"],{"013f":function(t,i,s){"use strict";s.r(i);var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("q-layout",{attrs:{view:"lHh Lpr lFf"}},[s("q-header",{staticClass:"bg-grey-10",attrs:{reveal:"",elevated:""}},[s("q-toolbar",[s("q-btn",{attrs:{flat:"",dense:"",round:"","aria-label":"Menu"},on:{click:t.goBack}},[s("q-icon",{attrs:{name:"keyboard_arrow_left"}})],1),s("q-toolbar-title",[t._v("\n        "+t._s(t.title)+"\n      ")]),s("div",{staticClass:"q-mr-sm",on:{click:t.goSignUp}},[t._v("\n        "+t._s(t.sub_title)+"\n      ")])],1)],1),s("q-page-container",{},["signin"===t.currentComp?s("signin",{on:{c2p:t.childData}}):t._e(),"signup"===t.currentComp?s("signup",{on:{c2p:t.childData}}):t._e()],1)],1)},a=[],n=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"flex justify-center  q-mt-lg q-mb-lg"},[s("q-img",{staticStyle:{height:"100%","max-width":"150px"},attrs:{src:t.imageSrc,ratio:1,basic:""}})],1),s("div",{staticClass:"flex justify-center"},[s("q-input",{staticStyle:{width:"300px","max-width":"600px"},attrs:{outlined:"",label:"email@id.com"},model:{value:t.email,callback:function(i){t.email=i},expression:"email"}})],1),s("div",{staticClass:"flex justify-center"},[s("q-input",{staticClass:"q-mt-lg",staticStyle:{width:"300px","max-width":"600px"},attrs:{outlined:"",label:"Password",type:"password"},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}})],1),s("div",{staticClass:"flex justify-center q-mt-lg"},[s("q-btn",{staticStyle:{width:"300px",height:"50px"},attrs:{color:"primary"},on:{click:t.login}},[t._v("\n        Log In\n      ")])],1),s("div",{staticClass:"row justify-center q-mt-lg q-mb-lg",staticStyle:{"text-align":"center"}},[s("div",{staticClass:"col-3 col-md-2",staticStyle:{width:"100px"},on:{click:t.findPw}},[t._v("\n          password\n        ")]),s("div",{staticClass:"col-1 col-md-2",staticStyle:{width:"50px"}},[t._v("\n          |\n        ")]),s("div",{staticClass:"col-3 col-md-2",staticStyle:{width:"100px"},on:{click:t.goSignUp}},[t._v("\n          Sign Up\n        ")])]),s("q-dialog",{model:{value:t.noExist,callback:function(i){t.noExist=i},expression:"noExist"}},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Alert")])]),s("q-card-section",[t._v("\n          "+t._s(t.comment)+"\n        ")]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1),s("q-dialog",{attrs:{persistent:""},model:{value:t.showConfirm,callback:function(i){t.showConfirm=i},expression:"showConfirm"}},[s("q-card",[s("q-card-section",{staticClass:"row items-center"},[s("span",{staticClass:"q-ml-sm"},[t._v("로그인해주세요")])]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1)],1)},o=[],l=s("967e"),c=s.n(l),r=(s("96cf"),s("fa84")),d=s.n(r),u={name:"SampleComponent",data:function(){return{title_name:"Artist",imageSrc:"statics/img/logo.jpg",email:null,password:null,noExist:!1,comment:"아이디가 없습니다. 다시 시도해주세요.",showConfirm:!1}},methods:{goBack:function(){this.$router.go(-1)},login:function(){var t=d()(c.a.mark((function t(){var i,s,e,a;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("# signin Comp login() clicked"),i={email:this.email,password:this.password},t.next=4,this.$axios.post(Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"spa",VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/",APP_URL:"undefined"}).API+"/auth/login",i);case 4:s=t.sent,e=s.data.data.item,console.log("# login() log in : ",e),e?"000"===e._id?this.noExist=!0:"001"===e._id?(this.comment="비밀번호를 확인해주세요",this.noExist=!0):(localStorage.setItem("userStore",JSON.stringify(e)),a=this.$store.getters["G_NAME/getTempExamId"],null!=a?this.$router.push({name:"exam",params:{idx:a}}):this.$router.push({path:"/"})):(console.log("### set localStorage!!!!!"),this.showConfirm=!0);case 8:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}(),findPw:function(){console.log("find password")},goSignUp:function(){console.log("go Sign up"),this.$emit("c2p",!1)}},computed:{},created:function(){},mounted:function(){console.log("### STORE : ",this.$store.getters["G_NAME/getTempExamId"])}},p=u,m=s("2877"),g=Object(m["a"])(p,n,o,!1,null,null,null),h=g.exports,f=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("q-page",{attrs:{padding:""}},[s("div",{staticClass:"flex justify-center q-mt-lg q-mb-lg"},[s("q-img",{staticStyle:{height:"100%","max-width":"150px"},attrs:{src:t.imageSrc,ratio:1,basic:""}})],1),s("div",{staticClass:"flex justify-center"},[s("q-input",{staticStyle:{width:"300px","max-width":"600px"},attrs:{outlined:"",label:"email@id.com"},model:{value:t.email,callback:function(i){t.email=i},expression:"email"}})],1),s("div",{staticClass:"flex justify-center"},[s("q-input",{staticClass:"q-mt-lg",staticStyle:{width:"300px","max-width":"600px"},attrs:{outlined:"",label:"홍길동"},model:{value:t.userName,callback:function(i){t.userName=i},expression:"userName"}})],1),s("div",{staticClass:"flex justify-center"},[s("q-input",{staticClass:"q-mt-lg",staticStyle:{width:"300px","max-width":"600px"},attrs:{outlined:"",label:"Password",type:"password"},model:{value:t.password,callback:function(i){t.password=i},expression:"password"}})],1),s("div",{staticClass:"flex justify-center"},[s("q-input",{staticClass:"q-mt-lg",staticStyle:{width:"300px","max-width":"600px"},attrs:{outlined:"",label:"Confirm Password",type:"password"},model:{value:t.c_password,callback:function(i){t.c_password=i},expression:"c_password"}})],1),s("div",{staticClass:"flex justify-center q-mt-lg"},[s("q-btn",{staticStyle:{width:"300px",height:"50px"},attrs:{color:"primary",disable:t.verified},on:{click:t.submit}},[t._v("\n        회원가입\n      ")])],1),s("div",{staticClass:"row justify-center q-mt-lg q-mb-lg",staticStyle:{"text-align":"center"}},[s("div",{staticClass:"col-3 col-md-2",staticStyle:{width:"100px"},on:{click:t.findPw}},[t._v("\n          License\n        ")]),s("div",{staticClass:"col-1 col-md-2",staticStyle:{width:"50px"}},[t._v("\n          |\n        ")]),s("div",{staticClass:"col-3 col-md-2",staticStyle:{width:"100px"},on:{click:t.goSignIn}},[t._v("\n          Log In\n        ")])]),s("q-dialog",{model:{value:t.exist,callback:function(i){t.exist=i},expression:"exist"}},[s("q-card",[s("q-card-section",[s("div",{staticClass:"text-h6"},[t._v("Alert")])]),s("q-card-section",[t._v("\n          아이디가 이미 존재합니다. 다른 아이디를 사용해 주세요.\n        ")]),s("q-card-actions",{attrs:{align:"right"}},[s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"OK",color:"primary"}})],1)],1)],1)],1)},w=[],x={name:"SampleComponent",data:function(){return{title_name:"Artist",imageSrc:"statics/img/logo.jpg",userName:null,email:null,password:null,c_password:null,verified:!0,exist:!1}},watch:{password:function(){this.password===this.c_password?this.verified=!1:this.verified=!0},c_password:function(){this.password===this.c_password?this.verified=!1:this.verified=!0}},methods:{goBack:function(){this.$router.go(-1)},findPw:function(){console.log("find password")},submit:function(){var t=d()(c.a.mark((function t(){var i,s,e;return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("# signup()"),t.prev=1,null!==this.userName){t.next=4;break}throw"실명을 입력해주세요";case 4:t.next=10;break;case 6:return t.prev=6,t.t0=t["catch"](1),this.$q.notify({color:"red-5",textColor:"white",icon:"fas fa-exclamation-triangle",timeout:800,message:t.t0}),t.abrupt("return",null);case 10:return i={email:this.email,name:this.userName,password:this.password},console.log("# signup() param : ",i),t.next=14,this.$axios.post(Object({NODE_ENV:"production",CLIENT:!0,SERVER:!1,DEV:!1,PROD:!0,MODE:"spa",VUE_ROUTER_MODE:"history",VUE_ROUTER_BASE:"/",APP_URL:"undefined"}).API+"/auth/signup",i);case 14:s=t.sent,e=s.data.data.item,console.log("### Sign UP : ",e),"already exist"!==e._id?(console.log("Sign Up OK!!!"),this.$emit("c2p",!0),console.log("### To do : save localStorage : ",e._id)):(console.log("Sign Up NOT ok !!!"),this.exist=!0),console.log("# signup get from Server !! ",s.data.data);case 19:case"end":return t.stop()}}),t,this,[[1,6]])})));function i(){return t.apply(this,arguments)}return i}(),goSignIn:function(){var t=d()(c.a.mark((function t(){return c.a.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log("# goSignup()"),this.$emit("c2p",!0);case 2:case"end":return t.stop()}}),t,this)})));function i(){return t.apply(this,arguments)}return i}()},computed:{},created:function(){},mounted:function(){}},v=x,_=Object(m["a"])(v,f,w,!1,null,null,null),b=_.exports,q={name:"ClubPage",components:{signin:h,signup:b},data:function(){return{title:"LogIn",title_name:"Artist",sub_title:"회원가입",currentComp:"signin"}},methods:{goBack:function(){this.$router.go(-1)},goSignUp:function(){console.log("Go Sign Up clicked sub_title: ",this.currentComp),"signin"==this.currentComp?(this.title="회원가입",this.sub_title="로그인",this.currentComp="signup"):(this.title="Log In",this.sub_title="회원가입",this.currentComp="signin")},childData:function(t){console.log("From data child :",t),t?(this.title="Log In",this.sub_title="회원가입",this.currentComp="signin"):(this.title="회원가입",this.sub_title="로그인",this.currentComp="signup")}},computed:{},created:function(){},mounted:function(){console.log("# mounted ()")}},C=q,y=Object(m["a"])(C,e,a,!1,null,null,null);i["default"]=y.exports}}]);