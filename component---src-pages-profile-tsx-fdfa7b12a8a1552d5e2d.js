(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{396:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(200),l=a(376),c=(a(26),a(3),a(27),a(18),a(4),a(1)),i=a.n(c),s=(a(53),a(122)),u=a(96),d=a(497),f=a(505),p=a(501),v=a(518),m=a(503),h=a(504),E=a(512),y=a(510),w=a(464),b=a(198),g=a(468),k=a.n(g),x=a(465),O=a.n(x),U=a(466),D=a.n(U),C=a(467),H=a.n(C),j=a(8);function S(e,t,a,n,r,o,l){try{var c=e[o](l),i=c.value}catch(s){return void a(s)}c.done?t(i):Promise.resolve(i).then(n,r)}function z(e){return function(){var t=this,a=arguments;return new Promise(function(n,r){var o=e.apply(t,a);function l(e){S(o,n,r,l,c,"next",e)}function c(e){S(o,n,r,l,c,"throw",e)}l(void 0)})}}var M=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).componentDidMount=z(i.a.mark(function e(){var t,n;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)().allDocs({include_docs:!0,attachments:!0});case 2:t=e.sent,n=new Blob([JSON.stringify(t)],{type:"text/plain;charset=utf-8"}),a.setState({allDataUrl:URL.createObjectURL(n)});case 5:case"end":return e.stop()}},e)})),a.repairData=z(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}},e)})),a.confirmDestroyData=z(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({destroyDialogOpened:!1,destroyUserConfirm:""}),e.next=3,Object(j.a)().destroy();case 3:window.location.reload();case 4:case"end":return e.stop()}},e)})),a.exportAllData=z(i.a.mark(function e(){var t,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(j.a)().allDocs({include_docs:!0,attachments:!0});case 2:t=e.sent,a=new Blob([JSON.stringify(t)],{type:"application/json"}),Object(w.saveAs)(a,"GoiSaving.json");case 5:case"end":return e.stop()}},e)})),a.onClickBugReport=z(i.a.mark(function e(){return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:window.location.href="https://forms.office.com/Pages/ResponsePage.aspx?id=HO2aql64JEqeASBBMrBBF5y2nH0iJiFBmV42lNreWUVUN0dWTElDTTNPSUFTQzVSRUtJUldQM0ZDSiQlQCN0PWcu";case 1:case"end":return e.stop()}},e)})),a.onClickUnregisterServiceWorker=z(i.a.mark(function e(){var t,a,n,r,o;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.serviceWorker.getRegistrations();case 2:t=e.sent,a=t,n=Array.isArray(a),r=0,a=n?a:a[Symbol.iterator]();case 4:if(!n){e.next=10;break}if(!(r>=a.length)){e.next=7;break}return e.abrupt("break",18);case 7:o=a[r++],e.next=14;break;case 10:if(!(r=a.next()).done){e.next=13;break}return e.abrupt("break",18);case 13:o=r.value;case 14:o.unregister();case 16:e.next=4;break;case 18:window.location.reload();case 19:case"end":return e.stop()}},e)})),a.state={destroyDialogOpened:!1,destroyUserConfirm:"",allDataUrl:""},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.navigate=function(e){Object(b.b)(e,{replace:!0})},o.render=function(){var e=this,t=this.props;t.poiUserId,t.savingId;return r.a.createElement("div",{className:"profile-container"},r.a.createElement(d.a,null,r.a.createElement("h1",null,"Troubleshooting Zone"),r.a.createElement(f.a,null,"Try to upgrade the local database from outdated data structure."),r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"contained",onClick:this.repairData},"Repair data",r.a.createElement(O.a,null))),r.a.createElement(f.a,null,"Export all local data in a single json file. It won't take your network usage."),r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"contained",onClick:z(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.exportAllData();case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}))},"Export all data (Download)",r.a.createElement(O.a,null))),r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"contained",onClick:z(i.a.mark(function t(){return i.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.navigate("/dumpdata/");case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}},t)}))},"Export all data (Navigate)",r.a.createElement(O.a,null))),r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"contained",onClick:this.onClickBugReport},"Bug Report",r.a.createElement(D.a,null))),r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"contained"},"[WIP] Help desk",r.a.createElement(H.a,null))),r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"contained"},"[WIP] Help desk wechat",r.a.createElement(H.a,null))),r.a.createElement(f.a,null,"If there is a fatal error that cannot be resolved, you can destroy entire local database with the following button. Please contact us first before doing so."),r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"contained",onClick:function(){return e.setState({destroyDialogOpened:!0,destroyUserConfirm:""})}},"Unregister Service Worker",r.a.createElement(k.a,null))),r.a.createElement(f.a,null,r.a.createElement(p.a,{variant:"contained",color:"secondary",onClick:function(){return e.setState({destroyDialogOpened:!0,destroyUserConfirm:""})}},"Destroy all local data",r.a.createElement(k.a,null))),r.a.createElement(v.a,{open:this.state.destroyDialogOpened,maxWidth:"xl"},r.a.createElement(m.a,null,"Destroy all data"),r.a.createElement(h.a,null,r.a.createElement(E.a,{fullWidth:!0,placeholder:"Type DESTROY to continue",value:this.state.destroyUserConfirm,onChange:function(t){return e.setState({destroyUserConfirm:t.target.value})}})),r.a.createElement(y.a,null,r.a.createElement(p.a,{size:"small",onClick:function(){return e.setState({destroyDialogOpened:!1})}},"Cancel"),r.a.createElement(p.a,{size:"small",variant:"contained",color:"secondary",disabled:"destroy"!==this.state.destroyUserConfirm.toLowerCase(),onClick:this.confirmDestroyData},"Destroy all data",r.a.createElement(k.a,{fontSize:"small"}))))))},n}(r.a.Component),R=Object(s.b)(function(e){console.debug("ProfileContainer state: ",e);var t={poiUserId:e.GoiUser.get("PoiUserId"),savingId:e.GoiSaving.get("SavingId")};return console.debug("ProfileContainer props: ",t),t},function(e){return{showWordAdder:function(t){var a=t.poiUserId,n=t.savingId;return e(Object(u.k)({poiUserId:a,savingId:n}))}}})(M);a.d(t,"ProfilePage",function(){return L});var L=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).resizeSurveyIFrame=function(){var e=a.surveyIFrame.current;if(e)e.contentWindow},a.surveyIFrame=r.a.createRef(),a}return a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,n.prototype.render=function(){return r.a.createElement("div",{className:"goi-profile-page"},r.a.createElement(o.a,null),r.a.createElement("main",null,r.a.createElement(l.a,null,r.a.createElement(R,null))))},n}(r.a.Component);t.default=L},464:function(e,t,a){(function(n){var r,o,l;a(12),a(7),o=[],void 0===(l="function"==typeof(r=function(){"use strict";function t(e,t,a){var n=new XMLHttpRequest;n.open("GET",e),n.responseType="blob",n.onload=function(){l(n.response,t,a)},n.onerror=function(){console.error("could not download file")},n.send()}function a(e){var t=new XMLHttpRequest;t.open("HEAD",e,!1);try{t.send()}catch(e){}return 200<=t.status&&299>=t.status}function r(e){try{e.dispatchEvent(new MouseEvent("click"))}catch(t){var a=document.createEvent("MouseEvents");a.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),e.dispatchEvent(a)}}var o="object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:void 0,l=o.saveAs||("object"!=typeof window||window!==o?function(){}:"download"in HTMLAnchorElement.prototype?function(e,n,l){var c=o.URL||o.webkitURL,i=document.createElement("a");n=n||e.name||"download",i.download=n,i.rel="noopener","string"==typeof e?(i.href=e,i.origin===location.origin?r(i):a(i.href)?t(e,n,l):r(i,i.target="_blank")):(i.href=c.createObjectURL(e),setTimeout(function(){c.revokeObjectURL(i.href)},4e4),setTimeout(function(){r(i)},0))}:"msSaveOrOpenBlob"in navigator?function(e,n,o){if(n=n||e.name||"download","string"!=typeof e)navigator.msSaveOrOpenBlob(function(e,t){return void 0===t?t={autoBom:!1}:"object"!=typeof t&&(console.warn("Deprecated: Expected third argument to be a object"),t={autoBom:!t}),t.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(e.type)?new Blob(["\ufeff",e],{type:e.type}):e}(e,o),n);else if(a(e))t(e,n,o);else{var l=document.createElement("a");l.href=e,l.target="_blank",setTimeout(function(){r(l)})}}:function(e,a,n,r){if((r=r||open("","_blank"))&&(r.document.title=r.document.body.innerText="downloading..."),"string"==typeof e)return t(e,a,n);var l="application/octet-stream"===e.type,c=/constructor/i.test(o.HTMLElement)||o.safari,i=/CriOS\/[\d]+/.test(navigator.userAgent);if((i||l&&c)&&"object"==typeof FileReader){var s=new FileReader;s.onloadend=function(){var e=s.result;e=i?e:e.replace(/^data:[^;]*;/,"data:attachment/file;"),r?r.location.href=e:location=e,r=null},s.readAsDataURL(e)}else{var u=o.URL||o.webkitURL,d=u.createObjectURL(e);r?r.location=d:location.href=d,r=null,setTimeout(function(){u.revokeObjectURL(d)},4e4)}});o.saveAs=l.saveAs=l,e.exports=l})?r.apply(t,o):r)||(e.exports=l)}).call(this,a(103))},465:function(e,t,a){"use strict";var n=a(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(405)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M8 16h8v2H8zm0-4h8v2H8zm6-10H6c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm4 18H6V4h7v5h5v11z"})),"DescriptionOutlined");t.default=o},466:function(e,t,a){"use strict";var n=a(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(405)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M20 8h-2.81c-.45-.78-1.07-1.45-1.82-1.96L17 4.41 15.59 3l-2.17 2.17C12.96 5.06 12.49 5 12 5s-.96.06-1.41.17L8.41 3 7 4.41l1.62 1.63C7.88 6.55 7.26 7.22 6.81 8H4v2h2.09c-.05.33-.09.66-.09 1v1H4v2h2v1c0 .34.04.67.09 1H4v2h2.81c1.04 1.79 2.97 3 5.19 3s4.15-1.21 5.19-3H20v-2h-2.09c.05-.33.09-.66.09-1v-1h2v-2h-2v-1c0-.34-.04-.67-.09-1H20V8zm-4 4v3c0 .22-.03.47-.07.7l-.1.65-.37.65c-.72 1.24-2.04 2-3.46 2s-2.74-.77-3.46-2l-.37-.64-.1-.65C8.03 15.48 8 15.23 8 15v-4c0-.23.03-.48.07-.7l.1-.65.37-.65c.3-.52.72-.97 1.21-1.31l.57-.39.74-.18c.31-.08.63-.12.94-.12.32 0 .63.04.95.12l.68.16.61.42c.5.34.91.78 1.21 1.31l.38.65.1.65c.04.22.07.47.07.69v1zm-6 2h4v2h-4zm0-4h4v2h-4z"})),"BugReportOutlined");t.default=o},467:function(e,t,a){"use strict";var n=a(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(405)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M19 2H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h4l3 3 3-3h4c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 16h-4.83l-.59.59L12 20.17l-1.59-1.59-.58-.58H5V4h14v14zm-8-3h2v2h-2zm1-8c1.1 0 2 .9 2 2 0 2-3 1.75-3 5h2c0-2.25 3-2.5 3-5 0-2.21-1.79-4-4-4S8 6.79 8 9h2c0-1.1.9-2 2-2z"})),"LiveHelpOutlined");t.default=o},468:function(e,t,a){"use strict";var n=a(52);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(0)),o=(0,n(a(405)).default)(r.default.createElement(r.default.Fragment,null,r.default.createElement("path",{fill:"none",d:"M0 0h24v24H0V0z"}),r.default.createElement("path",{d:"M14.12 10.47L12 12.59l-2.13-2.12-1.41 1.41L10.59 14l-2.12 2.12 1.41 1.41L12 15.41l2.12 2.12 1.41-1.41L13.41 14l2.12-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4zM6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9z"})),"DeleteForeverOutlined");t.default=o}}]);
//# sourceMappingURL=component---src-pages-profile-tsx-fdfa7b12a8a1552d5e2d.js.map