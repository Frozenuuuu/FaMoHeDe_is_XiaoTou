"use strict";(self.webpackChunkjx3dps_online=self.webpackChunkjx3dps_online||[]).push([[722],{7722:(e,o,l)=>{l.r(o),l.d(o,{default:()=>s});var n=l(6865),d=l(2015),i=l(1132),t=l(4443),u=l(2979);var v=l(6309);const{TextArea:a}=d.A;const s=function(){const[e,o]=(0,n.useState)(),[l,d]=(0,n.useState)(),[s,c]=(0,n.useState)();return(0,v.jsxs)("div",{children:[(0,v.jsx)(a,{placeholder:"\u8f93\u5165\u89e3\u6790id\u5217\u8868",style:{marginBottom:16},value:e,onChange:e=>{var l;return o(null===e||void 0===e||null===(l=e.target)||void 0===l?void 0:l.value)}}),(0,v.jsx)(a,{placeholder:"\u8f93\u5165skill\u6570\u636e",style:{marginBottom:16},value:l,onChange:e=>{var o;return d(null===e||void 0===e||null===(o=e.target)||void 0===o?void 0:o.value)}}),(0,v.jsxs)("div",{className:"tools-daoru-btns",children:[(0,v.jsx)(t.Ay,{type:"primary",disabled:!s,className:"tools-daoru-btn",onClick:()=>{const e=document.getElementById("tools-daoru-zhuangbei-result");if(e){const o=null===e||void 0===e?void 0:e.innerHTML;if(o){const e=document.createElement("input");document.body.appendChild(e),e.setAttribute("value",o),e.select(),document.execCommand("copy"),document.execCommand("copy")&&(document.execCommand("copy"),i.Ay.success("\u590d\u5236\u6210\u529f")),null!==o&&void 0!==o&&o.includes("\u672a\u5339\u914d")&&i.Ay.warning("\u5b58\u5728\u672a\u5339\u914d\u88c5\u5907"),document.body.removeChild(e)}}},children:"\u590d\u5236"}),(0,v.jsx)(t.Ay,{onClick:()=>{if(!e||!l)return void i.Ay.error("\u8bf7\u8f93\u5165\u6570\u636e");const o=((e,o)=>{var l;const n=JSON.parse(e),d=JSON.parse(o),i=[];return null===(l=Object.keys(n))||void 0===l||l.forEach((e=>{const o=null===d||void 0===d?void 0:d[e];if(o){var l,n;const d=(null===Object||void 0===Object||null===(l=Object.keys(o))||void 0===l?void 0:l.find((e=>null===e||void 0===e?void 0:e.includes("_damage_base"))))||"",s=(null===Object||void 0===Object||null===(n=Object.keys(o))||void 0===n?void 0:n.find((e=>null===e||void 0===e?void 0:e.includes("_damage_rand"))))||"",c={"\u6280\u80fdID":e,"\u6280\u80fd\u540d\u79f0":null===o||void 0===o?void 0:o.skill_name,"\u6280\u80fd\u4f24\u5bb3\u7cfb\u6570":null===o||void 0===o?void 0:o.channel_interval,"\u57fa\u7840\u4f24\u5bb3_\u57fa\u7840\u503c":null===o||void 0===o?void 0:o[d],"\u57fa\u7840\u4f24\u5bb3_\u6d6e\u52a8\u503c":null===o||void 0===o?void 0:o[s],"\u6b66\u5668\u4f24\u5bb3\u7cfb\u6570":null!==o&&void 0!==o&&o.weapon_damage_cof?(null===o||void 0===o?void 0:o.weapon_damage_cof)/1024:void 0,"\u6280\u80fd\u589e\u76ca\u5217\u8868":"\u901a\u7528\u589e\u76ca"},r=null===o||void 0===o?void 0:o.max_level;var t,v,a;"object"===typeof(null===o||void 0===o?void 0:o.channel_interval)&&(c.\u6280\u80fd\u4f24\u5bb3\u7cfb\u6570=null===o||void 0===o||null===(t=o.channel_interval)||void 0===t?void 0:t[r-1]),"object"===typeof(null===o||void 0===o?void 0:o[d])&&(c.\u57fa\u7840\u4f24\u5bb3_\u57fa\u7840\u503c=null===o||void 0===o||null===(v=o[d])||void 0===v?void 0:v[r-1]),"object"===typeof(null===o||void 0===o?void 0:o[s])&&(c.\u57fa\u7840\u4f24\u5bb3_\u6d6e\u52a8\u503c=null===o||void 0===o||null===(a=o[s])||void 0===a?void 0:a[r-1]),i.push((0,u.Jl)(c))}})),JSON.stringify(i)})(e,l);c(o)},children:"\u8f6c\u6362"})]}),s&&(0,v.jsx)("div",{id:"tools-daoru-zhuangbei-result",className:"tools-daoru-result",children:s})]})}}}]);
//# sourceMappingURL=722.052984f9.chunk.js.map