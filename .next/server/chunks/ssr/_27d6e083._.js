module.exports=[406704,a=>{"use strict";let b,c;var d,e=a.i(572131);let f={data:""},g=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,h=/\/\*[^]*?\*\/|  +/g,i=/\n+/g,j=(a,b)=>{let c="",d="",e="";for(let f in a){let g=a[f];"@"==f[0]?"i"==f[1]?c=f+" "+g+";":d+="f"==f[1]?j(g,f):f+"{"+j(g,"k"==f[1]?"":b)+"}":"object"==typeof g?d+=j(g,b?b.replace(/([^,])+/g,a=>f.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,b=>/&/.test(b)?b.replace(/&/g,a):a?a+" "+b:b)):f):null!=g&&(f=/^--/.test(f)?f:f.replace(/[A-Z]/g,"-$&").toLowerCase(),e+=j.p?j.p(f,g):f+":"+g+";")}return c+(b&&e?b+"{"+e+"}":e)+d},k={},l=a=>{if("object"==typeof a){let b="";for(let c in a)b+=c+l(a[c]);return b}return a};function m(a){let b,c,d=this||{},e=a.call?a(d.p):a;return((a,b,c,d,e)=>{var f;let m=l(a),n=k[m]||(k[m]=(a=>{let b=0,c=11;for(;b<a.length;)c=101*c+a.charCodeAt(b++)>>>0;return"go"+c})(m));if(!k[n]){let b=m!==a?a:(a=>{let b,c,d=[{}];for(;b=g.exec(a.replace(h,""));)b[4]?d.shift():b[3]?(c=b[3].replace(i," ").trim(),d.unshift(d[0][c]=d[0][c]||{})):d[0][b[1]]=b[2].replace(i," ").trim();return d[0]})(a);k[n]=j(e?{["@keyframes "+n]:b}:b,c?"":"."+n)}let o=c&&k.g?k.g:null;return c&&(k.g=k[n]),f=k[n],o?b.data=b.data.replace(o,f):-1===b.data.indexOf(f)&&(b.data=d?f+b.data:b.data+f),n})(e.unshift?e.raw?(b=[].slice.call(arguments,1),c=d.p,e.reduce((a,d,e)=>{let f=b[e];if(f&&f.call){let a=f(c),b=a&&a.props&&a.props.className||/^go/.test(a)&&a;f=b?"."+b:a&&"object"==typeof a?a.props?"":j(a,""):!1===a?"":a}return a+d+(null==f?"":f)},"")):e.reduce((a,b)=>Object.assign(a,b&&b.call?b(d.p):b),{}):e,d.target||f,d.g,d.o,d.k)}m.bind({g:1});let n,o,p,q=m.bind({k:1});function r(a,b){let c=this||{};return function(){let d=arguments;function e(f,g){let h=Object.assign({},f),i=h.className||e.className;c.p=Object.assign({theme:o&&o()},h),c.o=/ *go\d+/.test(i),h.className=m.apply(c,d)+(i?" "+i:""),b&&(h.ref=g);let j=a;return a[0]&&(j=h.as||a,delete h.as),p&&j[0]&&p(h),n(j,h)}return b?b(e):e}}var s=(a,b)=>"function"==typeof a?a(b):a,t=(b=0,()=>(++b).toString()),u="default",v=(a,b)=>{let{toastLimit:c}=a.settings;switch(b.type){case 0:return{...a,toasts:[b.toast,...a.toasts].slice(0,c)};case 1:return{...a,toasts:a.toasts.map(a=>a.id===b.toast.id?{...a,...b.toast}:a)};case 2:let{toast:d}=b;return v(a,{type:+!!a.toasts.find(a=>a.id===d.id),toast:d});case 3:let{toastId:e}=b;return{...a,toasts:a.toasts.map(a=>a.id===e||void 0===e?{...a,dismissed:!0,visible:!1}:a)};case 4:return void 0===b.toastId?{...a,toasts:[]}:{...a,toasts:a.toasts.filter(a=>a.id!==b.toastId)};case 5:return{...a,pausedAt:b.time};case 6:let f=b.time-(a.pausedAt||0);return{...a,pausedAt:void 0,toasts:a.toasts.map(a=>({...a,pauseDuration:a.pauseDuration+f}))}}},w=[],x={toasts:[],pausedAt:void 0,settings:{toastLimit:20}},y={},z=(a,b=u)=>{y[b]=v(y[b]||x,a),w.forEach(([a,c])=>{a===b&&c(y[b])})},A=a=>Object.keys(y).forEach(b=>z(a,b)),B=(a=u)=>b=>{z(b,a)},C={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},D=a=>(b,c)=>{let d,e=((a,b="blank",c)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:b,ariaProps:{role:"status","aria-live":"polite"},message:a,pauseDuration:0,...c,id:(null==c?void 0:c.id)||t()}))(b,a,c);return B(e.toasterId||(d=e.id,Object.keys(y).find(a=>y[a].toasts.some(a=>a.id===d))))({type:2,toast:e}),e.id},E=(a,b)=>D("blank")(a,b);E.error=D("error"),E.success=D("success"),E.loading=D("loading"),E.custom=D("custom"),E.dismiss=(a,b)=>{let c={type:3,toastId:a};b?B(b)(c):A(c)},E.dismissAll=a=>E.dismiss(void 0,a),E.remove=(a,b)=>{let c={type:4,toastId:a};b?B(b)(c):A(c)},E.removeAll=a=>E.remove(void 0,a),E.promise=(a,b,c)=>{let d=E.loading(b.loading,{...c,...null==c?void 0:c.loading});return"function"==typeof a&&(a=a()),a.then(a=>{let e=b.success?s(b.success,a):void 0;return e?E.success(e,{id:d,...c,...null==c?void 0:c.success}):E.dismiss(d),a}).catch(a=>{let e=b.error?s(b.error,a):void 0;e?E.error(e,{id:d,...c,...null==c?void 0:c.error}):E.dismiss(d)}),a};var F=1e3,G=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,H=q`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,I=q`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,J=r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${G} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${H} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${a=>a.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${I} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,K=q`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,L=r("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${a=>a.secondary||"#e0e0e0"};
  border-right-color: ${a=>a.primary||"#616161"};
  animation: ${K} 1s linear infinite;
`,M=q`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,N=q`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,O=r("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${a=>a.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${M} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${N} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${a=>a.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,P=r("div")`
  position: absolute;
`,Q=r("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,R=q`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,S=r("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${R} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,T=({toast:a})=>{let{icon:b,type:c,iconTheme:d}=a;return void 0!==b?"string"==typeof b?e.createElement(S,null,b):b:"blank"===c?null:e.createElement(Q,null,e.createElement(L,{...d}),"loading"!==c&&e.createElement(P,null,"error"===c?e.createElement(J,{...d}):e.createElement(O,{...d})))},U=r("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,V=r("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,W=e.memo(({toast:a,position:b,style:d,children:f})=>{let g=a.height?((a,b)=>{let d=a.includes("top")?1:-1,[e,f]=c?["0%{opacity:0;} 100%{opacity:1;}","0%{opacity:1;} 100%{opacity:0;}"]:[`
0% {transform: translate3d(0,${-200*d}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${-150*d}%,-1px) scale(.6); opacity:0;}
`];return{animation:b?`${q(e)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${q(f)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}})(a.position||b||"top-center",a.visible):{opacity:0},h=e.createElement(T,{toast:a}),i=e.createElement(V,{...a.ariaProps},s(a.message,a));return e.createElement(U,{className:a.className,style:{...g,...d,...a.style}},"function"==typeof f?f({icon:h,message:i}):e.createElement(e.Fragment,null,h,i))});d=e.createElement,j.p=void 0,n=d,o=void 0,p=void 0;var X=({id:a,className:b,style:c,onHeightUpdate:d,children:f})=>{let g=e.useCallback(b=>{if(b){let c=()=>{d(a,b.getBoundingClientRect().height)};c(),new MutationObserver(c).observe(b,{subtree:!0,childList:!0,characterData:!0})}},[a,d]);return e.createElement("div",{ref:g,className:b,style:c},f)},Y=m`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,Z=({reverseOrder:a,position:b="top-center",toastOptions:d,gutter:f,children:g,toasterId:h,containerStyle:i,containerClassName:j})=>{let{toasts:k,handlers:l}=((a,b="default")=>{let{toasts:c,pausedAt:d}=((a={},b=u)=>{let[c,d]=(0,e.useState)(y[b]||x),f=(0,e.useRef)(y[b]);(0,e.useEffect)(()=>(f.current!==y[b]&&d(y[b]),w.push([b,d]),()=>{let a=w.findIndex(([a])=>a===b);a>-1&&w.splice(a,1)}),[b]);let g=c.toasts.map(b=>{var c,d,e;return{...a,...a[b.type],...b,removeDelay:b.removeDelay||(null==(c=a[b.type])?void 0:c.removeDelay)||(null==a?void 0:a.removeDelay),duration:b.duration||(null==(d=a[b.type])?void 0:d.duration)||(null==a?void 0:a.duration)||C[b.type],style:{...a.style,...null==(e=a[b.type])?void 0:e.style,...b.style}}});return{...c,toasts:g}})(a,b),f=(0,e.useRef)(new Map).current,g=(0,e.useCallback)((a,b=F)=>{if(f.has(a))return;let c=setTimeout(()=>{f.delete(a),h({type:4,toastId:a})},b);f.set(a,c)},[]);(0,e.useEffect)(()=>{if(d)return;let a=Date.now(),e=c.map(c=>{if(c.duration===1/0)return;let d=(c.duration||0)+c.pauseDuration-(a-c.createdAt);if(d<0){c.visible&&E.dismiss(c.id);return}return setTimeout(()=>E.dismiss(c.id,b),d)});return()=>{e.forEach(a=>a&&clearTimeout(a))}},[c,d,b]);let h=(0,e.useCallback)(B(b),[b]),i=(0,e.useCallback)(()=>{h({type:5,time:Date.now()})},[h]),j=(0,e.useCallback)((a,b)=>{h({type:1,toast:{id:a,height:b}})},[h]),k=(0,e.useCallback)(()=>{d&&h({type:6,time:Date.now()})},[d,h]),l=(0,e.useCallback)((a,b)=>{let{reverseOrder:d=!1,gutter:e=8,defaultPosition:f}=b||{},g=c.filter(b=>(b.position||f)===(a.position||f)&&b.height),h=g.findIndex(b=>b.id===a.id),i=g.filter((a,b)=>b<h&&a.visible).length;return g.filter(a=>a.visible).slice(...d?[i+1]:[0,i]).reduce((a,b)=>a+(b.height||0)+e,0)},[c]);return(0,e.useEffect)(()=>{c.forEach(a=>{if(a.dismissed)g(a.id,a.removeDelay);else{let b=f.get(a.id);b&&(clearTimeout(b),f.delete(a.id))}})},[c,g]),{toasts:c,handlers:{updateHeight:j,startPause:i,endPause:k,calculateOffset:l}}})(d,h);return e.createElement("div",{"data-rht-toaster":h||"",style:{position:"fixed",zIndex:9999,top:16,left:16,right:16,bottom:16,pointerEvents:"none",...i},className:j,onMouseEnter:l.startPause,onMouseLeave:l.endPause},k.map(d=>{let h,i,j=d.position||b,k=l.calculateOffset(d,{reverseOrder:a,gutter:f,defaultPosition:b}),m=(h=j.includes("top"),i=j.includes("center")?{justifyContent:"center"}:j.includes("right")?{justifyContent:"flex-end"}:{},{left:0,right:0,display:"flex",position:"absolute",transition:c?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${k*(h?1:-1)}px)`,...h?{top:0}:{bottom:0},...i});return e.createElement(X,{id:d.id,key:d.id,onHeightUpdate:l.updateHeight,className:d.visible?Y:"",style:m},"custom"===d.type?s(d.message,d):g?g(d):e.createElement(W,{toast:d,position:j}))}))};a.s(["Toaster",()=>Z,"default",()=>E,"toast",()=>E],406704)},170106,a=>{"use strict";var b=a.i(572131);let c=a=>{let b=a.replace(/^([A-Z])|[\s-_]+(\w)/g,(a,b,c)=>c?c.toUpperCase():b.toLowerCase());return b.charAt(0).toUpperCase()+b.slice(1)},d=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim();var e={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let f=(0,b.forwardRef)(({color:a="currentColor",size:c=24,strokeWidth:f=2,absoluteStrokeWidth:g,className:h="",children:i,iconNode:j,...k},l)=>(0,b.createElement)("svg",{ref:l,...e,width:c,height:c,stroke:a,strokeWidth:g?24*Number(f)/Number(c):f,className:d("lucide",h),...!i&&!(a=>{for(let b in a)if(b.startsWith("aria-")||"role"===b||"title"===b)return!0})(k)&&{"aria-hidden":"true"},...k},[...j.map(([a,c])=>(0,b.createElement)(a,c)),...Array.isArray(i)?i:[i]])),g=(a,e)=>{let g=(0,b.forwardRef)(({className:g,...h},i)=>(0,b.createElement)(f,{ref:i,iconNode:e,className:d(`lucide-${c(a).replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,`lucide-${a}`,g),...h}));return g.displayName=c(a),g};a.s(["default",()=>g],170106)},274625,a=>{"use strict";var b=a.i(921656),c=a.i(406704);let d=async a=>{try{let c=await fetch(b.API_ROUTES.ADMIN.LOGIN,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)});if(!c.ok)throw Error(`HTTP error! status: ${c.status}`);return await c.json()}catch(a){return console.error("SERVER ERROR (Login): ",a),{success:!1,message:"Login failed"}}},e=async()=>{try{let a=await fetch(b.API_ROUTES.ADMIN.LOGOUT,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include"});if(!a.ok)throw Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(a){return console.error("SERVER ERROR (Logout): ",a),{success:!1,message:"Logout failed"}}},f=async()=>{try{let a=await fetch(b.API_ROUTES.ADMIN.CHECK,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!a.ok)throw Error(`HTTP error! status: ${a.status}`);return await a.json()}catch(a){return console.error("SERVER ERROR (Check Auth): ",a),{success:!1,message:"Auth check failed"}}},g=async a=>{try{let c=await fetch(b.API_ROUTES.ADMIN.DEVLOGIN,{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(a)});if(!c.ok)throw Error(`HTTP error! status: ${c.status}`);return await c.json()}catch(a){return console.error("SERVER ERROR (Login): ",a),{success:!1,message:"Login failed"}}},h=async a=>{try{console.log("adming data is ",a);let c=await fetch(b.API_ROUTES.ADMIN.CREATE,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),credentials:"include"});if(!c.ok){let a=Error(`HTTP error! status: ${c.status}`);throw a.status=c.status,a}return await c.json()}catch(b){console.error("SERVER ERROR (Create Admin):",b);let a="Admin creation failed";return 403===b.status&&(a="Access denied"),{success:!1,message:a}}},i=async()=>{try{let a=await fetch(b.API_ROUTES.ADMIN.GET_ALL,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!a.ok)throw Error(`HTTP error! status: ${a.status}`);let c=await a.json();return console.log("Admins fetched: ",c),c}catch(a){return console.error("SERVER ERROR (Get All Admins): ",a),{success:!1,message:"Failed to fetch admins"}}},j=async a=>{try{let c=await fetch(b.API_ROUTES.ADMIN.GET_BY_ID(a),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!c.ok)throw Error(`HTTP error! status: ${c.status}`);return await c.json()}catch(a){return console.error("SERVER ERROR (Get Admin By ID): ",a),{success:!1,message:"Failed to fetch admin details"}}},k=async(a,c)=>{try{let d={name:c.FirstName,email:c.Email,phone:c.MobileNumber,city:c.City,role:c.Role,company:c.Company,AddressLine1:c.AddressLine1,AddressLine2:c.AddressLine2,status:c.Status},e=await fetch(b.API_ROUTES.ADMIN.UPDATE_DETAILS(a),{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(d)}),f=await e.json();return!e.ok,f}catch(a){return console.error("SERVER ERROR (Update Details): ",a),{success:!1,message:a.message||"Failed to update details"}}},l=async(a,d)=>{try{let e=await fetch(b.API_ROUTES.ADMIN.UPDATE_PASSWORD(a),{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(d)}),f=await e.json();if(!f.success)throw c.default.error(f.message??"Something went wrong"),Error(f.message??"Something went wrong");return f}catch(a){return console.error("SERVER ERROR (Update Password): ",a),{success:!1,message:"Password update failed"}}},m=async a=>{try{let c=await fetch(b.API_ROUTES.ADMIN.AI.SAVE_API_KEY,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),credentials:"include"});if(!c.ok)throw Error(`HTTP error! status: ${c.status}`);return c=await c.json(),a}catch(a){return console.log("SERVER ERROR: ",a),null}},n=async()=>{try{let a=await fetch(b.API_ROUTES.ADMIN.AI.GET_ALL,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!a.ok)throw Error(`HTTP error! status: ${a.status}`);let c=await a.json();return console.log("Admins fetched: ",c),c}catch(a){return console.error("SERVER ERROR (Get All Admins): ",a),{success:!1,message:"Failed to fetch admins"}}},o=async()=>{try{let a=await fetch(b.API_ROUTES.ADMIN.MY_ACTIVE_AGENTS,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!a.ok)throw Error(`HTTP error! status: ${a.status}`);let c=await a.json();return console.log("Admins fetched: ",c),c}catch(a){return console.error("SERVER ERROR (Get All Admins): ",a),{success:!1,message:"Failed to fetch admins"}}},p=async(a,c)=>{try{let d=await fetch(b.API_ROUTES.ADMIN.AI.UPDATE_API_KEY(a),{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify(c),credentials:"include"});if(!d.ok)throw Error(`HTTP error! status: ${d.status}`);return d=await d.json(),c}catch(a){return console.log("SERVER ERROR: ",a),null}},q=async(a,c)=>{try{let d=await fetch(b.API_ROUTES.ADMIN.AI.DELETE_API_KEY(a),{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"});if(!d.ok)throw Error(`HTTP error! status: ${d.status}`);return d=await d.json(),c}catch(a){return console.log("SERVER ERROR: ",a),null}},r=async a=>{try{let c=await fetch(b.API_ROUTES.ADMIN.GENERATE_CRM_API_KEY,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),credentials:"include"});if(!c.ok)throw Error(`HTTP error! status: ${c.status}`);return c=await c.json(),a}catch(a){return console.log("SERVER ERROR: ",a),null}},s=async a=>{try{let c=await fetch(b.API_ROUTES.ADMIN.DELETE_CRM_API_KEY(a),{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include"});if(!c.ok)throw Error(`HTTP error! status: ${c.status}`);return c=await c.json()}catch(a){return console.log("SERVER ERROR: ",a),null}},t=async()=>{try{let a=await fetch(b.API_ROUTES.ADMIN.GET_CRM_API_KEYS,{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"});if(!a.ok)throw Error(`HTTP error! status: ${a.status}`);let c=await a.json();return console.log("Admins fetched: ",c),c}catch(a){return console.error("SERVER ERROR (Get All Admins): ",a),{success:!1,message:"Failed to fetch admins"}}};a.s(["DeleteAdminAiKey",0,q,"DeleteCrmApiKey",0,s,"GenerateCrmApiKey",0,r,"SaveAdminAiKey",0,m,"UpdateAdminAiKey",0,p,"checkAuthAdmin",0,f,"createAdmin",0,h,"getAdminById",0,j,"getAllAdmins",0,i,"getAllAiApiKeys",0,n,"getCrmApiKeys",0,t,"getMyActiveAgents",0,o,"loginAdmin",0,d,"loginDev",0,g,"logoutAdmin",0,e,"updateAdminDetails",0,k,"updateAdminPassword",0,l])},56025,a=>{"use strict";var b=a.i(187924),c=a.i(572131),d=a.i(406704),e=a.i(274625);let f=(0,c.createContext)({});a.s(["AuthProvider",0,({children:a})=>{let[g,h]=(0,c.useState)(null),[i,j]=(0,c.useState)(!0);if((0,c.useEffect)(()=>{(async()=>{let a=await (0,e.checkAuthAdmin)();a.success&&a.admin?h(a.admin):console.log("check problem : ",a),j(!1)})()},[]),i)return null;let k=async a=>{let b=await (0,e.loginAdmin)(a);b.success&&b.adminData?(h(b.adminData),d.default.success(b.message)):d.default.error(b.message)},l=async()=>{let a=await (0,e.logoutAdmin)();a.success?(h(null),console.log(" done "),d.default.success(a.message)):d.default.error(a.message)},m=async a=>{let b=await (0,e.loginDev)(a);b.success&&b.adminData?(h(b.adminData),d.default.success(b.message)):d.default.error(b.message)};return(0,b.jsx)(f.Provider,{value:{admin:g,isLoading:i,login:k,devlogin:m,logout:l},children:a})},"useAuth",0,()=>{let a=(0,c.useContext)(f);if(!a)throw Error("useAuth must be used within AuthProvider");return a}])}];

//# sourceMappingURL=_27d6e083._.js.map