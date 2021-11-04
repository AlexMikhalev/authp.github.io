"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5501],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,f=d["".concat(u,".").concat(m)]||d[m]||s[m]||a;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},2767:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=n(7462),i=n(3366),a=(n(7294),n(3905)),o=["components"],l={sidebar_position:1},u="Plugin Overview",c={unversionedId:"authenticate/intro",id:"authenticate/intro",isDocsHomePage:!1,title:"Plugin Overview",description:"caddy-auth-portal is Authentication Plugin for Caddy v2 implementing",source:"@site/docs/authenticate/intro.md",sourceDirName:"authenticate",slug:"/authenticate/intro",permalink:"/docs/authenticate/intro",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/intro.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/intro"},next:{title:"Authentication Portal",permalink:"/docs/authenticate/auth-portal"}},p=[],s={toc:p};function d(e){var t=e.components,n=(0,i.Z)(e,o);return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plugin-overview"},"Plugin Overview"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"caddy-auth-portal")," is Authentication Plugin for Caddy v2 implementing\nForm-Based, Basic, Local, LDAP, OpenID Connect, OAuth 2.0, SAML\nAuthentication."),(0,a.kt)("p",null,"The purpose of this plugin is providing ",(0,a.kt)("strong",{parentName:"p"},"authentication")," only. The plugin\nissue JWT tokens upon successful authentication. In turn, the ",(0,a.kt)("strong",{parentName:"p"},"authorization"),"\nof the tokens is being handled by\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/greenpau/caddy-authorize"},(0,a.kt)("inlineCode",{parentName:"a"},"caddy-authorize")),"."),(0,a.kt)("p",null,"The plugin supports the following ",(0,a.kt)("strong",{parentName:"p"},"authentication")," backends:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OAuth 2.0 (Google, Facebook, LinkedIn, etc.) and OpenID Connect (OIDC)"),(0,a.kt)("li",{parentName:"ul"},"LDAP (",(0,a.kt)("inlineCode",{parentName:"li"},"ldap"),") - remote Microsoft AD database"),(0,a.kt)("li",{parentName:"ul"},"Local (",(0,a.kt)("inlineCode",{parentName:"li"},"local"),") - JSON flat file database"),(0,a.kt)("li",{parentName:"ul"},"SAML")),(0,a.kt)("p",null,"The plugin accepts user credentials for ",(0,a.kt)("strong",{parentName:"p"},"authentication")," with:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Form-based Authentication: ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"application/x-www-form-urlencoded")),(0,a.kt)("li",{parentName:"ul"},"Basic Authentication: ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," with ",(0,a.kt)("inlineCode",{parentName:"li"},"Authorization: Basic")," header"),(0,a.kt)("li",{parentName:"ul"},"API: ",(0,a.kt)("inlineCode",{parentName:"li"},"GET")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"POST")," with JSON document")),(0,a.kt)("p",null,"The plugin has ",(0,a.kt)("inlineCode",{parentName:"p"},"/whoami")," endpoint to access user data programmatically."))}d.isMDXComponent=!0}}]);