!function(e){function t(t){for(var n,s,l=t[0],i=t[1],c=t[2],p=0,m=[];p<l.length;p++)s=l[p],r[s]&&m.push(r[s][0]),r[s]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(u&&u(t);m.length;)m.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],n=!0,l=1;l<a.length;l++){var i=a[l];0!==r[i]&&(n=!1)}n&&(o.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={0:0},o=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var c=0;c<l.length;c++)t(l[c]);var u=i;o.push([0,1]),a()}({"+e/c":function(e,t,a){},0:function(e,t,a){e.exports=a("05fm")},"05fm":function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"setUser",function(){return b}),a.d(n,"setLocation",function(){return w});var r={};a.r(r),a.d(r,"setModal",function(){return N}),a.d(r,"setTag",function(){return _}),a.d(r,"setPayload",function(){return k}),a.d(r,"setSize",function(){return C}),a.d(r,"openModal",function(){return S});var o={};a.r(o),a.d(o,"DEFAULT",function(){return z}),a.d(o,"COMMENT_ORDER",function(){return re});var s={};a.r(s),a.d(s,"handleChange",function(){return ve}),a.d(s,"submit",function(){return Ee});a("201c"),a("9jMz");var l=a("q1tI"),i=a.n(l),c=a("i8i4"),u=a.n(c),p=a("ANjH"),m=a("1iW9"),d=a.n(m),h=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};const f={SET_USER:(e,t)=>{let a=h({},e);return a.user=t.payload.user,a.accessToken=t.payload.accessToken,a},SET_LOCATION:(e,t)=>{let a=h({},e);return a.location=t.payload.location,a}};var g=d()({user:null,accessToken:null,location:null},f),y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};const v={SET_MODAL_SHOW:(e,t)=>{const a=y({},e);return a.show=t.payload.show,a},SET_MODAL_TAG:(e,t)=>{const a=y({},e);return a.tag=t.payload.tag,a},SET_MODAL_PAYLOAD:(e,t)=>{const a=y({},e);return a.payload=t.payload.payload,a},SET_MODAL_SIZE:(e,t)=>{const a=y({},e);return a.size=t.payload.size,a}};var E=d()({tag:null,show:!1,payload:null,size:"md"},v);const b=(e,t)=>({type:"SET_USER",payload:{user:e,accessToken:t}}),w=(e,t)=>({type:"SET_LOCATION",payload:{location:{lat:e,lng:t}}}),N=e=>({type:"SET_MODAL_SHOW",payload:{show:e}}),_=e=>({type:"SET_MODAL_TAG",payload:{tag:e}}),k=e=>({type:"SET_MODAL_PAYLOAD",payload:{payload:e}}),C=e=>({type:"SET_MODAL_SIZE",payload:{size:e}}),S=(e,t,a="md")=>n=>{n(C(a)),n(_(e)),n(k(t)),n(N(!0))},O={base:n,modal:r};var x=Object(p.c)({base:g,modal:E}),A=a("sINF");var D=Object(p.d)(x,Object(p.a)(A.a)),M=a("jKe7"),I=a("2INN"),P=a("wd/R"),T=a.n(P),B=a("/MKj"),j=a("wIs1"),q=(a("7pOP"),a("c3Ul")),L=a.n(q);var z=class extends i.a.Component{render(){return i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("button",{type:"button",className:"close",onClick:this.props.close},"×"),i.a.createElement("h4",{className:"modal-title"},"Modal Header")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("p",null,"Some text in the modal.")),i.a.createElement("div",{className:"modal-footer"},i.a.createElement("button",{type:"button",className:"btn btn-default",onClick:this.props.close},"Close")))}},R=a("boci"),F=a.n(R),U=a("vDqi"),Y=a.n(U);var $,W,H,V="https://admin.hkairportqualitytaxi.com";function G(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(r,o){try{var s=t[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}function J(e){if(this instanceof J==!1)return new J(e);Object.keys(e).forEach(t=>{this[t]=e[t]})}J.login=($=G(function*(e,t){const a=(yield Y.a.post(V+"/api/user/login",{telephone_no:e,password:t,type:"user"})).data;return a.user=new this(a.user),a}),function(e,t){return $.apply(this,arguments)}),J.getMe=(W=G(function*(e,t){try{return new this((yield Y.a.get(V+"/api/user/"+e,{headers:{Authorization:`Bearer ${t}`}})).data)}catch(e){}}),function(e,t){return W.apply(this,arguments)}),J.getUser=(H=G(function*(e){const t=D.getState().base.accessToken;try{return new this((yield Y.a.get(V+"/api/user/"+e,{headers:{Authorization:`Bearer ${t}`}})).data.data)}catch(e){}}),function(e){return H.apply(this,arguments)});var K,Z,X=J;function Q(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(r,o){try{var s=t[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}function ee(e){return["get","confirm","comment","cancel"].reduce((t,a)=>("function"==typeof ee[a]&&(t[a]=ee[a].bind(ee,e)),t),{})}ee.get=(()=>{var e=Q(function*(e){const t=D.getState().base.accessToken;return(yield Y.a.get(V+"/api/order/"+e,{headers:{Authorization:"Bearer "+t}})).data.data});return function(t){return e.apply(this,arguments)}})(),ee.confirm=(()=>{var e=Q(function*(e){const t=D.getState().base.accessToken;return(yield Y.a.post(V+"/api/order/"+e,{type:"confirm"},{headers:{Authorization:"Bearer "+t}})).data});return function(t){return e.apply(this,arguments)}})(),ee.comment=(()=>{var e=Q(function*(e,t,a){const n=D.getState().base.accessToken;return(yield Y.a.post(V+"/api/order/"+e+"/comment",{type:"comment",star:t,comment:a},{headers:{Authorization:"Bearer "+n}})).data});return function(t,a,n){return e.apply(this,arguments)}})(),ee.cancel=(K=Q(function*(e){const t=D.getState().base.accessToken;return(yield Y.a.post(V+"/api/order/"+e,{type:"cancel"},{headers:{Authorization:"Bearer "+t}})).data}),function(e){return K.apply(this,arguments)}),ee.create=(Z=Q(function*(e){const t=D.getState().base.accessToken;return new ee((yield Y.a.post(V+"/api/order",e,{headers:{Authorization:"Bearer "+t}})).data.data._id)}),function(e){return Z.apply(this,arguments)}),ee.accepted=Q(function*(){const e=D.getState().base.accessToken;return(yield Y.a.get(V+"/api/order",{params:{status:"accepted"},headers:{Authorization:"Bearer "+e}})).data.data}),ee.getCommentOrder=Q(function*(){const e=D.getState().base.accessToken;return(yield Y.a.get(V+"/api/order",{params:{status:"accepted"},headers:{Authorization:"Bearer "+e}})).data.data});var te=ee,ae=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function ne(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(r,o){try{var s=t[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}var re=class extends i.a.Component{constructor(e){super(e),this.handleChange=(e=>t=>{const a=ae({},this.state);F.a.set(a,e,t),this.setState(a)}),this.state={order:null,orderDoc:null,score:1,comment:""}}componentDidMount(){var e=this;return ne(function*(){try{const t=te(e.props.payload.orderId),a=yield t.get();e.setState({order:t,orderDoc:a})}catch(t){window.alert("Internal Server Error"),e.props.close()}})()}render(){var e=this;const{orderDoc:t}=this.state;return null==t?i.a.createElement(i.a.Fragment,null):i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("button",{type:"button",className:"close",onClick:this.props.close},"×"),i.a.createElement("h4",{className:"modal-title"}," 評分 ")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("table",{className:"table table-striped table-custom"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"起點"),i.a.createElement("td",null,t.start.address)),i.a.createElement("tr",null,i.a.createElement("th",null,"終點"),i.a.createElement("td",null,t.end.address)),i.a.createElement("tr",null,i.a.createElement("th",null,"司機名字"),i.a.createElement("td",null,t.acceptBy.username)),i.a.createElement("tr",null,i.a.createElement("th",null,"司機電話"),i.a.createElement("td",null,t.acceptBy.telephone_no)),i.a.createElement("tr",null,i.a.createElement("th",null,"司機號碼"),i.a.createElement("td",null,t.acceptBy.vehicle_reg_no)))),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null," 評分 "),i.a.createElement("input",{type:"number",className:"form-control",max:"5",min:"1",value:this.state.score,onChange:e=>this.handleChange("score")(e.target.value)})),i.a.createElement("div",{className:"form-group"},i.a.createElement("label",null," 內容 "),i.a.createElement("textarea",{className:"form-control",rows:"4",value:this.state.comment,onChange:e=>this.handleChange("comment")(e.target.value)}))),i.a.createElement("div",{className:"modal-footer"},i.a.createElement("button",{type:"button",className:"btn btn-default",onClick:this.props.close},"關閉"),i.a.createElement("button",{type:"button",className:"btn btn-success",onClick:ne(function*(){yield e.state.order.comment(e.state.score,e.state.comment),window.alert("成功評分!"),e.props.close()})},"完成")))}};var oe=Object(B.b)((e,t)=>({show:e.modal.show,tag:e.modal.tag,payload:e.modal.payload,size:e.modal.size}),(e,t)=>({close:()=>e(O.modal.setModal(!1))}))(class extends i.a.Component{constructor(e){super(e)}componentDidMount(){return(e=function*(){},function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(r,o){try{var s=t[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})})();var e}render(){const{show:e,tag:t,payload:a,size:n}=this.props;let r=null;if(null==(r=o[this.props.tag]))return i.a.createElement(i.a.Fragment,null);const s=this.props.show?"modal fade in block":"modal fade none";return i.a.createElement("div",{className:s},i.a.createElement("div",{className:L()("modal-dialog",`modal-${n}`)},i.a.createElement(r,this.props)))}}),se=a("gFX4"),le=a.n(se);function ie(){this.io=null,this.socketId=null,this.interval,this.callback=(e=>void 0)}ie.prototype.connect=function(){const e=this;var t,a;this.io=le()(V),this.io.on("connect",(a=function*(t){e.socketId=this.id,e.renewLocation(),e.interval=setInterval(function(){return e.renewLocation},1e4),e.whatIsMe()},t=function(){var e=a.apply(this,arguments);return new Promise(function(t,a){return function n(r,o){try{var s=e[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});t(l)}("next")})},function(e){return t.apply(this,arguments)})),this.io.on("action",e=>{this.callback&&this.callback(e)}),this.io.on("disconnect",t=>clearInterval(e.interval))},ie.prototype.renewLocation=function(){const e=this;navigator.geolocation&&navigator.geolocation.getCurrentPosition(t=>{const{latitude:a,longitude:n}=t.coords;e.io.emit("renew_location",{lat:a,lng:n}),D.dispatch(O.base.setLocation(a,n))})},ie.prototype.whatIsMe=function(e){const t=D.getState().base.accessToken;(e||t)&&this.io.emit("what_is_me",e||t)},ie.prototype.listen=function(e){this.callback=e},ie.prototype.mute=function(){this.callback=null};var ce,ue,pe=new ie;T.a.prototype.display=function(){return this.format("MMMM Do YYYY, h:mm:ss a")},T.a.prototype.displayShort=function(){return this.format("MMMM Do YYYY")};let me=(ce=Object(B.b)(e=>({user:e.base.user})),Object(j.a)(ue=ce(ue=class extends i.a.Component{componentWillMount(){pe.connect()}componentDidMount(){var e,t=this;return(e=function*(){null==t.props.user&&t.props.history.replace("/")},function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(r,o){try{var s=t[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})})()}render(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(oe,null),{...this.props.children})}})||ue)||ue);function de(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(r,o){try{var s=t[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}let he=(()=>{var e=de(function*(e,t,a=!0){const{user:n,access_token:r}=yield X.login(e,t);D.dispatch(O.base.setUser(n,r)),a&&(localStorage.setItem("access_token",r),localStorage.setItem("userId",n._id),pe.whatIsMe())});return function(t,a){return e.apply(this,arguments)}})(),fe=(()=>{var e=de(function*(){const e=localStorage.getItem("userId"),t=localStorage.getItem("access_token");if(t){const a=yield X.getMe(e,t);return a?(D.dispatch(O.base.setUser(a,t)),pe.whatIsMe(),pe.renewLocation(),!0):(localStorage.removeItem("userId"),localStorage.removeItem("access_token"),!1)}return!1});return function(){return e.apply(this,arguments)}})();a("v3Vo");var ge=e=>i.a.createElement("div",{className:"login-container"},i.a.createElement("div",{className:"login-content"},i.a.createElement("div",{className:"brand"},i.a.createElement("img",{src:"https://s3-ap-southeast-1.amazonaws.com/image-bucket-ken.yip/logo.png",style:{height:"100px"}}),i.a.createElement("h2",null," 打的 DA DI ")),i.a.createElement("p",null," 登入至你的賬戶 "),i.a.createElement("form",{className:"login-content__form"},i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{className:"form-control",placeholder:"用戶手機",value:e.credential.phone,onChange:t=>e.handleChange("credential.phone")(t.target.value)})),i.a.createElement("div",{className:"form-group"},i.a.createElement("input",{type:"password",className:"form-control",placeholder:"用戶密碼",value:e.credential.password,onChange:t=>e.handleChange("credential.password")(t.target.value)})),i.a.createElement("button",{type:"submit",className:"btn btn-success width100",onClick:t=>{t.preventDefault(),e.submit()}},"登入")),i.a.createElement("footer",{style:{color:"orange"},onClick:()=>e.history.push("/register")},"沒有賬號? 立刻註冊!"))),ye=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function ve(e){return t=>{const a=ye({},this.state);F.a.set(a,e,t),this.setState(a)}}let Ee=(()=>{var e=(be=function*(){const{phone:e,password:t}=this.state.credential;if(""===e.trim()||""===t.trim())return window.alert("用戶電話及密碼不能留空!");try{yield he(e,t,!0),this.props.history.push("/App")}catch(e){return window.alert("密碼錯誤! 請重新輸入")}},function(){var e=be.apply(this,arguments);return new Promise(function(t,a){return function n(r,o){try{var s=e[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});t(l)}("next")})});return function(){return e.apply(this,arguments)}})();var be,we,Ne=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function _e(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(r,o){try{var s=t[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}var ke,Ce=Object(B.b)((e,t)=>({user:e.base.user}),(e,t)=>({setUser:(t,a)=>e(O.base.setUser(t,a))}))(we=class extends i.a.Component{constructor(e){super(e),this.state={credential:{phone:"",password:""},remainder:!1},this.functions={},Object.keys(s).forEach(e=>{this.functions[e]=s[e].bind(this)})}componentWillMount(){var e=this;return _e(function*(){e.props.user&&e.props.history.push("/App")})()}componentDidUpdate(){var e=this;return _e(function*(){e.props.user&&e.props.history.push("/App")})()}render(){return i.a.createElement(ge,Ne({},this.functions,this.props,this.state))}})||we,Se=a("bGXH"),Oe=a("/Jjc");a("1PWP"),a("cpNT");function xe(e,t,a,n,r){var o={};return Object.keys(n).forEach(function(e){o[e]=n[e]}),o.enumerable=!!o.enumerable,o.configurable=!!o.configurable,("value"in o||o.initializer)&&(o.writable=!0),o=a.slice().reverse().reduce(function(a,n){return n(e,t,a)||a},o),r&&void 0!==o.initializer&&(o.value=o.initializer?o.initializer.call(r):void 0,o.initializer=void 0),void 0===o.initializer&&(Object.defineProperty(e,t,o),o=null),o}let Ae=(xe((ke=class extends i.a.Component{constructor(e){super(e),this.state={open:!1}}toggleSidebar(e){this.setState({open:e})}renderSidebar(){return i.a.createElement("div",{className:"sidebar-container"},i.a.createElement("div",{className:"sidebar"},i.a.createElement("ul",{className:"sidebar-list"},this.props.items.map((e,t)=>i.a.createElement("li",{key:t},i.a.createElement("a",{onClick:e.onClick},i.a.createElement("i",{className:e.icon}),i.a.createElement("span",null," ",e.name," ")))))),i.a.createElement("div",{className:"sidebar sidebar-down"},i.a.createElement("ul",{className:"sidebar-list"},this.props.bottom.map((e,t)=>i.a.createElement("li",{key:t},i.a.createElement("a",{onClick:e.onClick},i.a.createElement("i",{className:e.icon}),i.a.createElement("span",null," ",e.name," ")))))))}render(){return i.a.createElement(Se.a,{open:this.state.open,onSetOpen:this.toggleSidebar,sidebar:i.a.createElement(this.renderSidebar,null)},this.props.children)}}).prototype,"toggleSidebar",[Oe.autobind],Object.getOwnPropertyDescriptor(ke.prototype,"toggleSidebar"),ke.prototype),xe(ke.prototype,"renderSidebar",[Oe.autobind],Object.getOwnPropertyDescriptor(ke.prototype,"renderSidebar"),ke.prototype),ke);a("Vq+N");var De=a("PQp+");var Me=class extends i.a.PureComponent{constructor(e){super(e),this.state={directions:null}}componentDidMount(){const e=new google.maps.DirectionsService;if(this.props.origin&&this.props.destination){const t={origin:new google.maps.LatLng(this.props.origin.lat,this.props.origin.lng),destination:new google.maps.LatLng(this.props.destination.lat,this.props.destination.lng),travelMode:google.maps.TravelMode.DRIVING,optimizeWaypoints:!0};this.props.route&&(t.waypoints=[{location:new google.maps.LatLng(this.props.route.lat,this.props.route.lng),stopover:!0}]),e.route(t,(e,t)=>{t===google.maps.DirectionsStatus.OK&&this.setState({directions:e})})}}componentWillUnmount(){this.setState({directions:null})}render(){const e=this,t=this.props.location||{lat:22.3699122,lng:114.11443068},a=(this.props.directions,Object(De.withGoogleMap)(a=>i.a.createElement(De.GoogleMap,{defaultZoom:16,center:t},e.state.directions&&i.a.createElement(De.DirectionsRenderer,{directions:e.state.directions}),(this.props.maker||[]).map((e,t)=>i.a.createElement(De.Marker,{position:e,key:t}))))),n=this.props.height||"420px",r=this.props.width||"100%";return i.a.createElement("div",null,i.a.createElement(a,{googleMapURL:"https://maps.googleapis.com/maps/api/js?key=AIzaSyA83jZKHRmlOFXwdDM81X_pl7kyLb5o4FI&v=3.exp&libraries=geometry,drawing,places",mapElement:i.a.createElement("div",{style:{height:"100%"}}),containerElement:i.a.createElement("div",{style:{height:n,width:r,overflow:"hidden"}}),loadingElement:i.a.createElement("div",{style:{height:"300px",width:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement("h1",{className:"loading-text"}," Loading ... "))}))}},Ie=a("qOS8"),Pe=a.n(Ie);let Te=(()=>{var e=function(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(r,o){try{var s=t[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}(function*(e){try{return(yield Y.a.get(V+"/api/place",{params:{keyword:e},headers:{Authorization:"Bearer "+D.getState().base.accessToken}})).data.data}catch(e){}});return function(t){return e.apply(this,arguments)}})();var Be,je=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function qe(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(r,o){try{var s=t[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}const Le=Pe.a.getInstance();let ze=null,Re=Object(B.b)(e=>({location:e.base.location,show:e.modal.show}),e=>({open:(t,a)=>e(O.modal.openModal("COMMENT_ORDER",{orderId:t,order:a},"md"))}))(Be=class extends i.a.Component{constructor(e){var t,a;t=super(e),this.getNearBy=(()=>{navigator.geolocation&&navigator.geolocation.getCurrentPosition((a=qe(function*(e){const{latitude:a,longitude:n}=e.coords,r=(yield Y.a.get(`${V}/api/place/address`,{params:{lat:a,lng:n}})).data.data.slice(0,3);t.setState({nearBy:r})}),function(e){return a.apply(this,arguments)}))}),this.getRecord=qe(function*(){const e=yield te.getCommentOrder();t.setState({history:e})}),this.createOrder=qe(function*(){const e=je({},t.state.reqBody);e.origin=e.origin.location,e.route=e.route?e.route.location:void 0,e.destination=e.destination.location;try{const a=yield te.create(e);t.setState({order:a})}catch(e){return window.alert("發生錯誤, 請重新下單"),t.setState({page:"打的 DADI"})}}),this.makeOrder=(()=>{ze=setTimeout(()=>{if(100!=this.state.reqBody.criteria.discount&&window.confirm("你已經等侯了一分鍾, 在繁忙時間使用正價可以更容易找到司機, 請問要轉換為正價嗎? "))return this.handleChange("reqBody.criteria.discount")(100),this.state.order.cancel(),this.createOrder();clearTimeout(ze),ze=setTimeout(()=>{this.state.order.cancel(),clearTimeout(ze),window.alert("你已經等侯了兩分鍾, 如須要的士服務, 請重新輪侯"),this.setState({order:null,page:"打的 DADI"})},6e4)},6e4);const{origin:e,route:t,destination:a}=this.state.reqBody;if(null==e||null==a)return window.alert("請設置起點及終點");this.setState({page:"正在下單",cost:null},this.createOrder)}),this.sidebarItems=[{name:"主頁",icon:"icon-home5",onClick:()=>{this.setState({page:"打的 DADI"}),this.refs.sidebar.toggleSidebar(!1)}},{name:"訂單紀錄",icon:"icon-stack-empty",onClick:()=>{this.getRecord(),this.setState({page:"訂單紀錄"}),this.refs.sidebar.toggleSidebar(!1)}},{name:"分享",icon:"icon-share2"},{name:"Facebook 專頁",icon:"icon-facebook2"},{name:"關於我們",icon:"icon-question3"}],this.sidebarBottom=[{name:"登出",icon:"icon-esc",onClick:()=>{clearTimeout(ze),localStorage.removeItem("userId"),localStorage.removeItem("access_token"),D.dispatch(O.base.setUser(null,null)),this.props.history.replace("/")}}],this.handleChange=(e=>t=>{const a=je({},this.state);F.a.set(a,e,t),this.setState(a)}),this.renderAppMain=(e=>i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"App__body"},i.a.createElement("div",{className:"App__Form"},i.a.createElement("p",{className:"alert"},i.a.createElement("i",{className:"wb-bell"})," 現時交通情方比較繁忙! 減少折扣可較客易找到的士!"),i.a.createElement("div",{className:"input",onClick:()=>this.setState({page:"選擇地點",place:"origin",cost:null})},i.a.createElement("i",{className:"icon-location4"}),this.state.reqBody.origin?i.a.createElement("span",{style:{color:"black"}},this.state.reqBody.origin.address):i.a.createElement("span",null," 起點 ")),i.a.createElement("div",{className:"input",onClick:()=>this.setState({page:"選擇地點",place:"route",cost:null})},i.a.createElement("i",{className:"icon-pushpin"}),this.state.reqBody.route?i.a.createElement("span",{style:{color:"black"}},this.state.reqBody.route.address):i.a.createElement("span",null," 中途站 ")),i.a.createElement("div",{className:"input",onClick:()=>this.setState({page:"選擇地點",place:"destination",cost:null})},i.a.createElement("i",{className:"icon-flag3"}),this.state.reqBody.destination?i.a.createElement("span",{style:{color:"black"}},this.state.reqBody.destination.address):i.a.createElement("span",null," 終點 ")),i.a.createElement("div",{className:"info",style:{height:"16px"}},this.state.cost&&i.a.createElement("span",null," 預計車資: $",this.state.cost," "),i.a.createElement("span",{className:"option",onClick:()=>this.setState({page:"更多選項"})},"更多選項")),i.a.createElement("div",{className:"App__button",style:{margin:"12px"},onClick:this.makeOrder},i.a.createElement("i",{className:"icon-car2"})," 立即打的"))),i.a.createElement("div",{className:"Main__Map__Container"},i.a.createElement(Me,{location:this.props.location,maker:this.props.location?[this.props.location]:[]})))),this.renderOption=(e=>i.a.createElement("div",{className:"App__body"},i.a.createElement("div",{className:"App__Form",style:{padding:"10px"}},i.a.createElement("div",{className:"input-group"},i.a.createElement("label",null," 隧道 "),i.a.createElement("div",{className:"btn-group"},[{name:"任行",value:"any"},{name:"東隧",value:"eastTunnel"},{name:"西隧",value:"westTunnel"},{name:"紅隧",value:"HungHomTunnel"}].map((e,t)=>i.a.createElement("button",{type:"button",key:t,className:"btn btn-default btn-sm",onClick:()=>this.handleChange("reqBody.criteria.tunnel")(e.value),style:{backgroundColor:this.state.reqBody.criteria.tunnel==e.value?"#efefef":"unset"}},e.name)))),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",null," 的士類型 "),i.a.createElement("div",{className:"btn-group"},[{name:"紅的",value:"red"},{name:"綠的",value:"green"},{name:"籃的",value:"blue"}].map((e,t)=>i.a.createElement("button",{type:"button",key:t,className:"btn btn-default btn-sm",onClick:()=>this.handleChange("reqBody.criteria.taxiType")(e.value),style:{backgroundColor:this.state.reqBody.criteria.taxiType==e.value?"#efefef":"unset"}},e.name)))),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",null," 乘客人數 "),i.a.createElement("div",{className:"btn-group"},[{name:"四人",value:4},{name:"五人",value:5},{name:"珍寶",value:6},{name:"傷殘",value:7}].map((e,t)=>i.a.createElement("button",{type:"button",key:t,className:"btn btn-default btn-sm",onClick:()=>this.handleChange("reqBody.criteria.passenger")(e.value),style:{backgroundColor:this.state.reqBody.criteria.passenger==e.value?"#efefef":"unset"}},e.name)))),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",null," 支付方式 "),i.a.createElement("div",{className:"btn-group"},[{name:"現金",value:"cash"},{name:"信用卡",value:"creditCard"},{name:"支付寶",value:"alipay"}].map((e,t)=>i.a.createElement("button",{type:"button",key:t,className:"btn btn-default btn-sm",onClick:()=>this.handleChange("reqBody.criteria.payment")(e.value),style:{backgroundColor:this.state.reqBody.criteria.payment==e.value?"#efefef":"unset"}},e.name)))),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",null," 折扣 "),i.a.createElement("div",{className:"btn-group"},[{name:"全數",value:100},{name:"九折",value:90},{name:"八五折",value:85}].map((e,t)=>i.a.createElement("button",{type:"button",key:t,className:"btn btn-default btn-sm",onClick:()=>this.handleChange("reqBody.criteria.discount")(e.value),style:{backgroundColor:this.state.reqBody.criteria.discount==e.value?"#efefef":"unset"}},e.name)))),i.a.createElement("div",{className:"App__button",style:{margin:"12px",backgroundColor:"green"},onClick:()=>this.setState({page:"打的 DADI"})},"確定")))),this.renderLoading=(e=>i.a.createElement("div",{className:"waiting-screen"},i.a.createElement("h3",null," 正在尋找的士 "),i.a.createElement("p",{className:"description"}," 你可以現在或在下單後五分鍾內取消訂單 "),i.a.createElement("div",null,i.a.createElement("span",{className:"cancel",onClick:qe(function*(){t.setState({page:"打的 DADI"}),yield t.state.order.cancel(),clearTimeout(ze)}),style:{color:"red"}},"取消訂單")))),this.renderSelectLocation=(e=>{const a=(e,a)=>i.a.createElement("div",{key:a,className:"address-selection",onClick:()=>{Le.push(e),this.handleChange(`reqBody.${this.state.place}`)(e),this.setState({page:"打的 DADI",search:null,place:null,query:""},qe(function*(){if(t.state.reqBody.origin&&t.state.reqBody.destination)try{const{taxiType:e,discount:a=100,tunnel:n="any"}=t.state.reqBody.criteria,{origin:r,destination:o,route:s}=t.state.reqBody,l=(yield Y.a.post(`${V}/api/place/path`,{origin:r.location,route:s?s.location:void 0,destination:o.location,taxiType:e,discount:a,tunnel:n})).data.data.cost;t.setState({cost:l})}catch(e){}}))}},i.a.createElement("div",{className:"icon"},i.a.createElement("i",{className:"icon-location3"})),i.a.createElement("div",{className:"address"},e.address));return i.a.createElement("div",{className:"App__body"},i.a.createElement("div",{className:"App__form",style:{padding:"8px"}},i.a.createElement("div",{className:"input-group"},i.a.createElement("label",null," 搜索地點 "),i.a.createElement("div",{className:"flex"},i.a.createElement("input",{className:"my_input_style",placeholder:"請在此輸入你身邊的地點",style:{fontSize:"12px"},value:this.state.query,onChange:e=>this.handleChange("query")(e.target.value)}),i.a.createElement("div",{style:{width:"30px",textAlign:"center",marginLeft:"6px"}},i.a.createElement("i",{className:" icon-search4",style:{lineHeight:"25px"},onClick:qe(function*(){if(""==t.state.query)return window.alert("請輸入地點");const e=yield Te(t.state.query);if(e.length<1)return window.alert(`無法找到 ${t.state.query}, 請使用一些常見的地標`);t.setState({search:e.slice(0,3)})})})))),this.state.search&&i.a.createElement("div",{className:"input-group"},i.a.createElement("label",null," 搜索結果 "),this.state.search.map(a)),null==this.state.search&&i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"input-group"},i.a.createElement("label",null," 附近地點 "),this.state.nearBy.length<1&&i.a.createElement("div",{style:{color:"grey"}},"無法找到你附近地點的地點, 請檢查你的 GPS 信號"),this.state.nearBy.map(a)),i.a.createElement("div",{className:"input-group"},i.a.createElement("label",null," 最近紀錄 "),Le.place.length<1&&i.a.createElement("div",{style:{color:"grey"}},"沒有何任紀錄"),Le.place.map(a)))),i.a.createElement("footer",{style:{textAlign:"center",padding:"16px",color:"orange"},onClick:()=>{this.handleChange(`reqBody.${this.state.place}`)(null),this.setState({page:"打的 DADI",search:null,place:null,query:""})}},"取消"))}),this.renderOrderAccepted=(e=>{const{acceptBy:a}=this.state.orderDoc;return i.a.createElement("div",null,i.a.createElement("div",{className:"App__body"},i.a.createElement("div",{className:"App__form",style:{marginBottom:"12px"}},i.a.createElement("div",{className:"driver_info"},i.a.createElement("div",null,i.a.createElement("i",{className:"fa fa-user"})),i.a.createElement("table",{className:"table"},i.a.createElement("tbody",null,i.a.createElement("tr",null,i.a.createElement("th",null,"名稱"),i.a.createElement("td",null,a.username)),i.a.createElement("tr",null,i.a.createElement("th",null,"車牌號碼"),i.a.createElement("td",null,a.vehicle_reg_no)),i.a.createElement("tr",null,i.a.createElement("th",null,"電話"),i.a.createElement("td",null,i.a.createElement("a",{href:`tel:${a.telephone_no}`},a.telephone_no,i.a.createElement("i",{className:"icon-phone2",style:{marginLeft:"6px"}})))))))),i.a.createElement("div",{className:"App__form Cancel__order"},i.a.createElement("p",{className:"button",onClick:qe(function*(){T()(t.state.orderDoc.updatedAt).add(5,"minute").isAfter(T()())?(window.alert("你已取消這個 Order "),t.setState({page:"打的 DADI"}),yield t.state.order.cancel()):window.alert("你只能取消五分鍾前的落單!")})},"取消訂單"),i.a.createElement("p",{className:"description"}," 在下單後 5 分鍾內, 你可以按取消訂單按鍵取消訂單 "))),i.a.createElement("div",{className:"Main__Map__Container"},i.a.createElement(Me,{location:this.props.location,maker:a.location?[]:this.props.location?[this.props.location]:[],origin:a.location,destination:this.props.location})))}),this.renderOrderRecord=(e=>i.a.createElement("div",{className:"record-container"},this.state.history.map(e=>i.a.createElement("div",{key:e._id,onClick:()=>this.props.open(e._id,e)},i.a.createElement("div",{className:"order-card"},i.a.createElement("p",{className:"location"},i.a.createElement("i",{className:"icon-location4"})," 由 ",e.start.address," 到 ",e.end.address),i.a.createElement("p",{className:"time"},i.a.createElement("i",{className:"icon-circles"})," ",T()(e.createdAt).locale("zh-HK").format("Do MMM YYYY hh:mm a"))))))),this.state={page:"打的 DADI",nearBy:[],place:null,reqBody:{origin:null,destination:null,route:null,criteria:{taxiType:"red",discount:100,tunnel:"any",passenger:4,payment:"cash"}},search:null,query:"",order:null,orderDoc:null,cost:null,history:[]}}componentDidMount(){var e=this;return qe(function*(){var t;e.getNearBy(),e.getRecord(),pe.listen((t=qe(function*(t){if("DRIVER_ACCEPT"==t){clearTimeout(ze);const t=yield e.state.order.get(),a=yield X.getUser(t.acceptBy._id);t.acceptBy.location=a.position,e.setState({orderDoc:t,page:"接受訂單"})}else if("DRIVER_RELEASE"==t&&"接受訂單"==e.state.page){window.alert("司機已取消你的訂單, 如有任何問題, 可向客服查詢");try{yield e.state.order.cancel()}catch(e){}e.setState({order:null,orderDoc:null,page:"打的 DADI"})}}),function(e){return t.apply(this,arguments)}))})()}componentDidUpdate(e){var t=this;return qe(function*(){!t.props.show&&e.show&&t.getRecord()})()}componentWillUnmount(){return qe(function*(){pe.mute()})()}render(){return i.a.createElement(Ae,{ref:"sidebar",items:this.sidebarItems,bottom:this.sidebarBottom},i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"App__bar"},this.state.page,i.a.createElement("i",{className:"Sidebar__Menu wb-align-left",onClick:()=>this.refs.sidebar.toggleSidebar(!0)})),"打的 DADI"==this.state.page&&i.a.createElement(this.renderAppMain,null),"更多選項"==this.state.page&&i.a.createElement(this.renderOption,null),"正在下單"==this.state.page&&i.a.createElement(this.renderLoading,null),"接受訂單"==this.state.page&&i.a.createElement(this.renderOrderAccepted,null),"選擇地點"==this.state.page&&i.a.createElement(this.renderSelectLocation,null),"訂單紀錄"==this.state.page&&i.a.createElement(this.renderOrderRecord,null)))}})||Be;a("5ItR");var Fe=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e};function Ue(e){return function(){var t=e.apply(this,arguments);return new Promise(function(e,a){return function n(r,o){try{var s=t[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});e(l)}("next")})}}var Ye=Object(B.b)((e,t)=>({user:e.base.user}),null,null,{pure:!1})(class extends i.a.Component{constructor(e){super(e),this.state={pages:{}}}componentWillMount(){return Ue(function*(){yield fe()})()}componentDidMount(){return Ue(function*(){})()}render(){return i.a.createElement(me,null,i.a.createElement(M.a,null,i.a.createElement(I.a,{exact:!0,path:"/",component:Ce}),i.a.createElement(I.a,{exact:!0,path:"/app",component:Re}),i.a.createElement(I.a,{exact:!0,path:"/register",component:class extends i.a.Component{constructor(e){var t,a;t=super(e),this.handleChange=(e=>t=>{const a=Fe({},this.state);F.a.set(a,e,t),this.setState(a)}),this.register=(a=function*(){const{username:e,email:a,phone:n,password:r,confirm:o}=t.state;for(const e of["username","email","phone","password","confirm"])if(""==t.state[e])return window.alert("請填寫所有資料");if(r!=o)return window.alert("請9檢查你的密碼及確認密碼");try{yield Y.a.post(`${V}/api/user`,{type:"user",username:e,email:a,telephone_no:n,password:r}),window.alert(`註冊成功! 你現在可以使用 ${a} 登入!`),t.props.history.replace("/")}catch(e){window.alert("註冊失敗, 請檢查你的輸入")}},function(){var e=a.apply(this,arguments);return new Promise(function(t,a){return function n(r,o){try{var s=e[r](o),l=s.value}catch(e){return void a(e)}if(!s.done)return Promise.resolve(l).then(function(e){n("next",e)},function(e){n("throw",e)});t(l)}("next")})}),this.state={username:"",email:"",phone:"",password:"",confirm:""}}render(){return i.a.createElement("div",{className:"login-container",style:{padding:"16px"}},i.a.createElement("div",{className:"Card"},i.a.createElement("div",{className:"brand"},i.a.createElement("img",{src:"https://s3-ap-southeast-1.amazonaws.com/image-bucket-ken.yip/logo.png",style:{height:"100px"}}),i.a.createElement("h2",null," 註冊成為打的用戶 ")),i.a.createElement("div",{className:"InputForm"},i.a.createElement("label",null,"用戶名字"),i.a.createElement("input",{className:"my_input_style",value:this.state.username,onChange:e=>this.handleChange("username")(e.target.value)})),i.a.createElement("div",{className:"InputForm"},i.a.createElement("label",null,"電郵"),i.a.createElement("input",{className:"my_input_style",type:"email",value:this.state.email,onChange:e=>this.handleChange("email")(e.target.value)})),i.a.createElement("div",{className:"InputForm"},i.a.createElement("label",null,"電話號碼"),i.a.createElement("input",{className:"my_input_style",type:"phone",value:this.state.phone,onChange:e=>this.handleChange("phone")(e.target.value)})),i.a.createElement("div",{className:"InputForm"},i.a.createElement("label",null,"密碼"),i.a.createElement("input",{className:"my_input_style",type:"password",value:this.state.password,onChange:e=>this.handleChange("password")(e.target.value)})),i.a.createElement("div",{className:"InputForm"},i.a.createElement("label",null,"確認密碼"),i.a.createElement("input",{className:"my_input_style",type:"password",value:this.state.confirm,onChange:e=>this.handleChange("confirm")(e.target.value)})),i.a.createElement("button",{className:"btn btn-warning btn-sm width100",onClick:this.register},"註冊")),i.a.createElement("footer",{style:{textAlign:"center",margin:"12px"},onClick:()=>this.props.history.replace("/")},"返回主頁"))}}})))}}),$e=a("ZCLq"),We=a("IN8/"),He=(a("VNxg"),a("qbTa"),a("eMDP"),a("+e/c"),a("7/TC"),e=>i.a.createElement(B.a,{store:D},i.a.createElement($e.CookiesProvider,null,i.a.createElement(We.a,null,i.a.createElement(Ye,null)))));const Ve=()=>{u.a.render(i.a.createElement(He,null),document.getElementById("root"))};window.cordova?document.addEventListener("deviceready",Ve,!1):Ve()},1:function(e,t){},"1PWP":function(e,t,a){},"5ItR":function(e,t,a){},"7/TC":function(e,t,a){},"7pOP":function(e,t,a){},"Vq+N":function(e,t,a){},c3Ul:function(e,t){e.exports=((...e)=>e.filter(e=>null!=e&&e.toString).map(e=>e.toString()).join(" "))},cpNT:function(e,t,a){e.exports=a.p+"images/MFo6g5dyAs.png"},eMDP:function(e,t,a){},qOS8:function(e,t,a){"use strict";function n(e){this.place=e}n.instance=null,n.getInstance=function(){if(this.instance)return this.instance;const e=localStorage.getItem("recent_place");return new this(e?JSON.parse(e):[])},n.prototype.save=function(){const e=JSON.stringify(this.place);localStorage.setItem("recent_place",e)},n.prototype.push=function(e){this.place.find(t=>t.address==e.address)||(this.place.length>2&&this.place.pop(),this.place.unshift(e),this.save())},e.exports=n},v3Vo:function(e,t,a){}});