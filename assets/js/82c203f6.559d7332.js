(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{105:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return m}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=n.a.createContext({}),d=function(e){var t=n.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},u=function(e){var t=d(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},b=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=d(a),b=r,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||i;return a?n.a.createElement(m,c(c({ref:t},s),{},{components:a})):n.a.createElement(m,c({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=a[s];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}b.displayName="MDXCreateElement"},87:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return d}));var r=a(3),n=a(8),i=(a(0),a(105)),o={title:"Neutralino.storage"},c={unversionedId:"api/storage",id:"api/storage",isDocsHomePage:!1,title:"Neutralino.storage",description:"Neutralinojs has a built-in shared key-value storage. It's like a",source:"@site/docs/api/storage.md",slug:"/api/storage",permalink:"/docs/api/storage",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/api/storage.md",version:"current",sidebar:"docs",previous:{title:"Neutralino.computer",permalink:"/docs/api/computer"},next:{title:"Neutralino.debug",permalink:"/docs/api/debug"}},l=[{value:"storage.setData(key, data)",id:"storagesetdatakey-data",children:[{value:"Parameters",id:"parameters",children:[]}]},{value:"storage.getData(key)",id:"storagegetdatakey",children:[{value:"Parameters",id:"parameters-1",children:[]},{value:"Return object (awaited):",id:"return-object-awaited",children:[]}]}],s={toc:l};function d(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Neutralinojs has a built-in shared key-value storage. It's like a\nglobal ",Object(i.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},Object(i.b)("inlineCode",{parentName:"a"},"LocalStorage"))," for all Neutralinojs modes.\n",Object(i.b)("inlineCode",{parentName:"p"},"Neutralinos.storage")," exposes methods for interacting with this storage feature."),Object(i.b)("div",{className:"admonition admonition-tip alert alert--success"},Object(i.b)("div",{parentName:"div",className:"admonition-heading"},Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",{parentName:"h5",className:"admonition-icon"},Object(i.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},Object(i.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),Object(i.b)("div",{parentName:"div",className:"admonition-content"},Object(i.b)("p",{parentName:"div"},"The storage API persists all data records into ",Object(i.b)("inlineCode",{parentName:"p"},".storage")," directory in the\nroot directory of your application. If you want to clear all data records,\ndelete the ",Object(i.b)("inlineCode",{parentName:"p"},".storage")," directory."))),Object(i.b)("h2",{id:"storagesetdatakey-data"},"storage.setData(key, data)"),Object(i.b)("p",null,"Writes data into Neutralinojs shared storage.\xa0"),Object(i.b)("h3",{id:"parameters"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"key"),": A unique identifier."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"data"),": Data as a string. If this value is ",Object(i.b)("inlineCode",{parentName:"li"},"null")," or ",Object(i.b)("inlineCode",{parentName:"li"},"undefined"),", the specific data record will be erased from the disk.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"await Neutralino.storage.setData('userDetails', \n                        JSON.stringify({ username: 'TestValue'})\n});\n")),Object(i.b)("h2",{id:"storagegetdatakey"},"storage.getData(key)"),Object(i.b)("p",null,"Reads and returns data for a given Neutralinojs shared storage key.\xa0"),Object(i.b)("h3",{id:"parameters-1"},"Parameters"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"key"),": Storage data record identifier.")),Object(i.b)("h3",{id:"return-object-awaited"},"Return object (awaited):"),Object(i.b)("p",null,"Data string of the storage record."),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-js"},"let data = await Neutralino.storage.getData('userDetails');\nconsole.log(`Data: ${data}`);\n")))}d.isMDXComponent=!0}}]);