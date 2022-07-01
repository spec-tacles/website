"use strict";(self.webpackChunksite=self.webpackChunksite||[]).push([[805],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=l(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(t),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||i;return t?r.createElement(g,a(a({ref:n},p),{},{components:t})):r.createElement(g,a({ref:n},p))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=d;var c={};for(var s in n)hasOwnProperty.call(n,s)&&(c[s]=n[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8007:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return c},metadata:function(){return l},toc:function(){return u}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),a=["components"],c={id:"ping_pong",title:"Ping Pong"},s=void 0,l={unversionedId:"ping_pong",id:"ping_pong",title:"Ping Pong",description:"Now that your bot is receiving messages, you can respond to them. Open your command handler from",source:"@site/docs/ping_pong.md",sourceDirName:".",slug:"/ping_pong",permalink:"/docs/ping_pong",draft:!1,editUrl:"https://github.com/spec-tacles/website/edit/master/website/docs/ping_pong.md",tags:[],version:"current",frontMatter:{id:"ping_pong",title:"Ping Pong"},sidebar:"docs",previous:{title:"Introduction",permalink:"/docs/"},next:{title:"Gateway",permalink:"/docs/applications/gateway"}},p={},u=[{value:"Installing Dependencies",id:"installing-dependencies",level:2},{value:"Modifying The Handler",id:"modifying-the-handler",level:2},{value:"Next Steps",id:"next-steps",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Now that your bot is receiving messages, you can respond to them. Open your command handler from\nthe previous section."),(0,i.kt)("h2",{id:"installing-dependencies"},"Installing Dependencies"),(0,i.kt)("p",null,"Add the Spectacles proxy client library."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @spectacles/proxy\n")),(0,i.kt)("h2",{id:"modifying-the-handler"},"Modifying The Handler"),(0,i.kt)("p",null,'Update your command handler to send a "pong" back when it receives a "ping".'),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Replace ",(0,i.kt)("inlineCode",{parentName:"p"},"your bot token")," with your Discord bot token."))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-ts"},"import { Redis } from '@spectacles/brokers';\nimport Rest from '@spectacles/proxy';\nimport * as RedisClient from 'ioredis';\n\nconst client = new RedisClient();\nconst broker = new Redis('gateway', client);\nconst rest = new Rest(broker, 'your bot token');\n\nbroker.on('MESSAGE_CREATE', async (msg, { ack }) => {\n    await ack();\n    console.log(msg);\n\n    if (msg.content === 'ping') {\n        await rest.post(`/channels/${msg.channel_id}/messages`, { content: 'pong' });\n    }\n});\n\nbroker.subscribe('MESSAGE_CREATE');\n")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"You have a fully functioning and scalable Discord bot now. The possibilities are endless:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Continue developing your command handler"),(0,i.kt)("li",{parentName:"ul"},"Add a completely new application (a website?)"),(0,i.kt)("li",{parentName:"ul"},"Continue reading about how Spectacles works"),(0,i.kt)("li",{parentName:"ul"},"???")))}m.isMDXComponent=!0}}]);