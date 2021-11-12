(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{104:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),b=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=b(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(l,".").concat(d)]||u[d]||s[d]||i;return n?r.a.createElement(m,o(o({ref:t},c),{},{components:n})):r.a.createElement(m,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},90:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return c}));var a=n(3),r=(n(0),n(104));const i={title:"Distribution Overview"},l={unversionedId:"distribution/overview",id:"distribution/overview",isDocsHomePage:!1,title:"Distribution Overview",description:"There are several ways to distribute Neutralinojs apps: creating portable zip files, standalone setup files, and network-based",source:"@site/docs/distribution/overview.md",slug:"/distribution/overview",permalink:"/docs/distribution/overview",editUrl:"https://github.com/neutralinojs/neutralinojs.github.io/edit/main/docs/distribution/overview.md",version:"current",sidebar:"docs",previous:{title:"Global Variables",permalink:"/docs/developer-environment/global-variables"},next:{title:"Committers",permalink:"/docs/community/committers"}},o=[{value:"Application build results",id:"application-build-results",children:[]},{value:"Selecting files for packaging",id:"selecting-files-for-packaging",children:[]},{value:"Creating a portable application package",id:"creating-a-portable-application-package",children:[]},{value:"Creating application installers",id:"creating-application-installers",children:[]}],p={toc:o};function c({components:e,...t}){return Object(r.b)("wrapper",Object(a.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(r.b)("p",null,"There are several ways to distribute Neutralinojs apps: creating portable zip files, standalone setup files, and network-based\nsmall setup files. You can select an option according to your application distribution preference."),Object(r.b)("h2",{id:"application-build-results"},"Application build results"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"neu build")," command generates the following files on any supported operating system into the ",Object(r.b)("inlineCode",{parentName:"p"},"dist")," directory."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",{parentName:"tr",align:null},"Filename"),Object(r.b)("th",{parentName:"tr",align:null},"OS"),Object(r.b)("th",{parentName:"tr",align:null},"CPU architecture"),Object(r.b)("th",{parentName:"tr",align:null},"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"myapp-linux_x64")),Object(r.b)("td",{parentName:"tr",align:null},"Linux"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"x64")),Object(r.b)("td",{parentName:"tr",align:null},"Application binary")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"myapp-linux_ia32")),Object(r.b)("td",{parentName:"tr",align:null},"Linux"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"x86")),Object(r.b)("td",{parentName:"tr",align:null},"Application binary")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"myapp-linux_armhf")),Object(r.b)("td",{parentName:"tr",align:null},"Linux"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"arm32")),Object(r.b)("td",{parentName:"tr",align:null},"Application binary")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"myapp-macos_x64")),Object(r.b)("td",{parentName:"tr",align:null},"macOS"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"x64")),Object(r.b)("td",{parentName:"tr",align:null},"Application binary")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"myapp-win_x64")),Object(r.b)("td",{parentName:"tr",align:null},"Windows"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"x64")),Object(r.b)("td",{parentName:"tr",align:null},"Application binary")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"res.neu")),Object(r.b)("td",{parentName:"tr",align:null},"all"),Object(r.b)("td",{parentName:"tr",align:null},Object(r.b)("inlineCode",{parentName:"td"},"all")),Object(r.b)("td",{parentName:"tr",align:null},"Application resource file")))),Object(r.b)("h2",{id:"selecting-files-for-packaging"},"Selecting files for packaging"),Object(r.b)("p",null,"The neu CLI generates application binaries for all supported platforms at once. These binaries are pre-built binaries.\nTherefore, please check our\n",Object(r.b)("a",{parentName:"p",href:"https://github.com/neutralinojs/neutralinojs/security/policy#prebuilt-binaries"},"security policy")," before you continue\nwith the distribution process."),Object(r.b)("p",null,"As the first step for packaging, you can pick two files for each targeted operating system: application binary and\nthe resource file. For example, if you need to make an application package for ",Object(r.b)("inlineCode",{parentName:"p"},"x64")," Linux computers, pick ",Object(r.b)("inlineCode",{parentName:"p"},"myapp-linux_x64"),"\nand the ",Object(r.b)("inlineCode",{parentName:"p"},"res.neu")," file. The ",Object(r.b)("inlineCode",{parentName:"p"},"res.neu")," contains all application resources, so, double click on the binary and check whether\nthe resource file is not corrupted."),Object(r.b)("h2",{id:"creating-a-portable-application-package"},"Creating a portable application package"),Object(r.b)("p",null,"The following guides are not documented yet."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#"},"Creating a portable application package for Linux")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#"},"Creating a portable application package for macOS")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#"},"Creating a portable application package for Windows"))),Object(r.b)("h2",{id:"creating-application-installers"},"Creating application installers"),Object(r.b)("p",null,"The following guides are not documented yet."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#"},"Creating an application installer for Linux")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#"},"Creating an application installer for macOS")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"#"},"Creating an application installer for Windows"))))}c.isMDXComponent=!0}}]);