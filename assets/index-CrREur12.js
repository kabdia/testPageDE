const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/button-C3vDOcw5.css","assets/closer-CUKhgyPq.css","assets/fonts-CCmWDDe5.css","assets/global-DiU_UCJx.css","assets/pallete-EDGawMJM.css","assets/reset-DKny7ou_.css","assets/footer-S5hvmweY.css","assets/footerBlockAbout-I9Rc9T6a.css","assets/footerBlockConnection-B8kESFdS.css","assets/footerCopyright-BEltvSYV.css","assets/header-nxxQTWXB.css","assets/main-pMudHqfW.css","assets/mainClientsSection-o0nS-grQ.css","assets/mainInfoSection-BgoTPBQF.css","assets/modal-DMztJ9Rr.css","assets/vars-cjgcLdnX.css"])))=>i.map(i=>d[i]);
var V=Object.defineProperty;var b=r=>{throw TypeError(r)};var k=(r,e,t)=>e in r?V(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var u=(r,e,t)=>k(r,typeof e!="symbol"?e+"":e,t),B=(r,e,t)=>e.has(r)||b("Cannot "+t);var A=(r,e,t)=>e.has(r)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,t);var S=(r,e,t)=>(B(r,e,"access private method"),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))s(o);new MutationObserver(o=>{for(const n of o)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&s(c)}).observe(document,{childList:!0,subtree:!0});function t(o){const n={};return o.integrity&&(n.integrity=o.integrity),o.referrerPolicy&&(n.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?n.credentials="include":o.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function s(o){if(o.ep)return;o.ep=!0;const n=t(o);fetch(o.href,n)}})();const d=class d{constructor(){if(d.instance)return d.instance;this.form=null,this.init("#modalWindow"),d.instance=this}static getInstance(){return d.instance||(d.instance=new d),d.instance}init(e){this.form=document.querySelector(e),this.form.addEventListener("submit",t=>this.handleSubmit(t)),this.form.addEventListener("input",t=>this.listenFields(t))}listenFields(e){const t=e.target;t.getAttribute("data-js-required")&&this.validateInput(t)}handleSubmit(){return this.validateForm()}validateForm(){return[...this.form.querySelectorAll("input[data-js-required], textarea[data-js-required]")].some(s=>this.validateInput(s)===!1)}validateInput(e){const t=e.closest(".form-group").querySelector(".form-error-message");let s=!0;switch(e.dataset.jsRequired){case"name":e.value===""?(t.innerHTML="Поле обязательно для заполнения",s=!1):t.innerHTML="";break;case"mail":e.value===""?(t.innerHTML="Поле обязательно для заполнения",s=!1):/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(e.value)?t.innerHTML="":(t.textContent="Неверный формат email",s=!1);break;case"message":e.value===""?(t.innerHTML="Поле обязательно для заполнения",s=!1):t.innerHTML=""}return s}blockStatusButton(){const e=document.querySelector("#submit");e.disabled=!0}activeStatusButton(){const e=document.querySelector("#submit");e.disabled=!1}};u(d,"instance",null);let y=d;const l=class l{constructor(){if(l.instance)return l.instance;l.instance=this}static lock(){l.body.classList.add(l.classScroll)}static unlock(){l.body.classList.remove(l.classScroll)}};u(l,"instance",null),u(l,"body",document.querySelector("body")),u(l,"classScroll","noscroll");let E=l;const i=class i{constructor(){if(i.instance)return i.instance;this.init(),i.instance=this}static getInstance(){return i.instance||(i.instance=new i),i.instance}init(){document.addEventListener("click",e=>{e.target.closest("[data-open-modal]")&&i.open({mode:"formBlock",datas:"#modalWindow"})}),document.addEventListener("click",e=>{e.target.hasAttribute("data-close-modal")&&(i.close({mode:"formBlock",datas:"#modalWindow"}),i.close({mode:"formBlock",datas:"#btnCloseModal"}),i.close({mode:"formBlock",datas:"#messageSuccess"}),i.close({mode:"formBlock",datas:"#btnCloseModalSuccess"}),y.getInstance().activeStatusButton())})}static open({mode:e,datas:t,text:s}){let o;if(e==="formBlock"&&t)o=document.querySelector(t),o&&o.classList.add(i.stateClasses.open);else if(e==="sucessBlock"&&t){o=document.querySelector(t);const n=document.querySelector("#messageSuccessText");n.innerHTML=`<span>${s}</span>`,o.classList.add(i.stateClasses.open)}E.lock()}static close({mode:e,datas:t}){let s;(e==="formBlock"&&t||e==="sucessBlock")&&(s=document.querySelector(t),s&&s.classList.remove(i.stateClasses.open)),E.unlock()}};u(i,"instance",null),u(i,"stateClasses",{open:"modal--active",close:"modal--close"}),u(i,"attrs",{openModal:"data-open-modal",closeModal:"data-close-modal"});let g=i;var v,w,I;const m=class m{constructor(){A(this,v);u(this,"attrs",{form:"data-js-form"});if(m.instance)return m.instance;S(this,v,w).call(this),m.instance=this}static getInstance(){return m.instance||(m.instance=new m),m.instance}getConfigurationForm(e){if(!e.hasAttribute(`${this.attrs.form}`)||!e.tagName.toLowerCase()==="form")return;let t;try{t=this.getJSON(e.getAttribute(this.attrs.form))}catch(s){alert("Ошибка парсинга JSON",s)}return t}getJSON(e){return JSON.parse(e)}readConfiguration(e){const{url:t,method:s="POST",showModalAfterSuccess:o,preventDefault:n=!0,isNeedValidateBeforeSend:c}=e;return{url:t,method:s,showModalAfterSuccess:o,preventDefault:n,isNeedValidateBeforeSend:c}}handlerForm(e,t,s,o){s.preventDefault&&e.preventDefault(),!(s.isNeedValidateBeforeSend&&y.getInstance().validateForm(t))&&this.makerRequest(s.url,s.method,s.showModalAfterSuccess,o)}makerRequest(e,t,s,o){fetch(e,{method:t,body:o}).then(n=>{if(!n.ok)throw new Error(`Ошибка ${n.status}`);if(s)g.open({mode:"sucessBlock",datas:"#messageSuccess",text:"Сообщение успешно отправлено"});else throw new Error("Данные не отправлены")}).catch(n=>{g.open({mode:"sucessBlock",datas:"#messageSuccess",text:`Ошибка при отправке: ${n.message}`})})}};v=new WeakSet,w=function(){document.addEventListener("submit",e=>{S(this,v,I).call(this,e),y.getInstance().blockStatusButton()},!0)},I=function(e){const{target:t}=e,s=this.getConfigurationForm(t),o=this.readConfiguration(s),n=new FormData(t);this.handlerForm(e,t,o,n)},u(m,"instance");let _=m;function C(){return new Promise(r=>{document.readyState==="loading"?document.addEventListener("DOMContentLoaded",()=>{r()}):r()})}const q="modulepreload",N=function(r){return"/testPageDE/"+r},O={},a=function(e,t,s){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const c=document.querySelector("meta[property=csp-nonce]"),f=(c==null?void 0:c.nonce)||(c==null?void 0:c.getAttribute("nonce"));o=Promise.allSettled(t.map(h=>{if(h=N(h),h in O)return;O[h]=!0;const L=h.endsWith(".css"),T=L?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${h}"]${T}`))return;const p=document.createElement("link");if(p.rel=L?"stylesheet":q,L||(p.as="script"),p.crossOrigin="",p.href=h,f&&p.setAttribute("nonce",f),document.head.appendChild(p),L)return new Promise((R,D)=>{p.addEventListener("load",R),p.addEventListener("error",()=>D(new Error(`Unable to preload CSS for ${h}`)))})}))}function n(c){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=c,window.dispatchEvent(f),!f.defaultPrevented)throw c}return o.then(c=>{for(const f of c||[])f.status==="rejected"&&n(f.reason);return e().catch(n)})},P=Object.assign({"../../style/elems/button/button.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([0])),"../../style/elems/closer/closer.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([1])),"../../style/fonts.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([2])),"../../style/global.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([3])),"../../style/pallete.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([4])),"../../style/reset.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([5])),"../../style/sections/footer/footer.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([6])),"../../style/sections/footer/footerBlockAbout.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([7])),"../../style/sections/footer/footerBlockConnection.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([8])),"../../style/sections/footer/footerCopyright.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([9])),"../../style/sections/header/header.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([10])),"../../style/sections/main/main.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([11])),"../../style/sections/main/mainClientsSection.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([12])),"../../style/sections/main/mainInfoSection.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([13])),"../../style/sections/modal/modal.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([14])),"../../style/vars.scss":()=>a(()=>Promise.resolve({}),__vite__mapDeps([15]))});for(const r in P)P[r]();C().then(()=>{new E,new g,new y,new _});