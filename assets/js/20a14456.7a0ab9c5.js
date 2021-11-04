"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9030],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return h}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=r,m=d["".concat(u,".").concat(h)]||d[h]||s[h]||o;return n?a.createElement(m,i(i({ref:t},c),{},{components:n})):a.createElement(m,i({ref:t},c))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8282:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),i=["components"],l={},u="Overview",p={unversionedId:"authenticate/oauth/oauth2",id:"authenticate/oauth/oauth2",isDocsHomePage:!1,title:"Overview",description:"OAuth 2.0 Flow",source:"@site/docs/authenticate/oauth/10-oauth2.md",sourceDirName:"authenticate/oauth",slug:"/authenticate/oauth/oauth2",permalink:"/docs/authenticate/oauth/oauth2",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/oauth/10-oauth2.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Azure Active Directory",permalink:"/docs/authenticate/saml/azure"},next:{title:"Generic Provider",permalink:"/docs/authenticate/oauth/backend-oauth2-0000-generic"}},c=[{value:"OAuth 2.0 Flow",id:"oauth-20-flow",children:[],level:2},{value:"Adding Role Claims",id:"adding-role-claims",children:[],level:2}],s={toc:c};function d(e){var t=e.components,n=(0,r.Z)(e,i);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"overview"},"Overview"),(0,o.kt)("h2",{id:"oauth-20-flow"},"OAuth 2.0 Flow"),(0,o.kt)("p",null,'Generally, a developer must create an "Application" with and identity provider.\ne.g. Google, Okta, Azure, etc., and obtain OAuth 2.0 "Client ID" and\n"Client Secret".'),(0,o.kt)("p",null,'The authentication flow begins with obtaining "Authorization Code" from an\nidentity provider.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"What does the portal send to Okta?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Client ID"),(0,o.kt)("li",{parentName:"ul"},"Redirect URI"),(0,o.kt)("li",{parentName:"ul"},"Response Type"),(0,o.kt)("li",{parentName:"ul"},"Scope"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"What does the portal receive from Okta?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Authorization Code")))),(0,o.kt)("p",null,'Once, the portal has the "Authorization Code", it could get "Access Token"\nto access the user\'s data at the identity provider.'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"What does the portal send to Okta?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Authorization Code"),(0,o.kt)("li",{parentName:"ul"},"Client ID"),(0,o.kt)("li",{parentName:"ul"},"Client Secret"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"What does Okta respond with?"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Access Token"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},'What could the portal use "Access Token" for?'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Make API calls to obtain user information")))),(0,o.kt)("p",null,"The OpenID Connect (OIDC) adds login and profile information about the person\nwho is logged in. The differences between standard OAuth2.0 flow are:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"In the initial request, a specific scope of ",(0,o.kt)("inlineCode",{parentName:"li"},"openid")," is used"),(0,o.kt)("li",{parentName:"ol"},'In the final exchange the Client receives both an "Access Token" and an "ID Token" (JWT Token).')),(0,o.kt)("p",null,"References:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://infosec.mozilla.org/guidelines/iam/openid_connect.html#oidc-in-a-nutshell"},"Mozilla - OIDC in a nutshell"))),(0,o.kt)("h2",{id:"adding-role-claims"},"Adding Role Claims"),(0,o.kt)("p",null,"By default, all users authenticated with the plugin get ",(0,o.kt)("inlineCode",{parentName:"p"},"authp/guest"),"\nrole, unless the following applies."),(0,o.kt)("p",null,"The Caddyfile ",(0,o.kt)("inlineCode",{parentName:"p"},"transform user")," directive allows adding roles based on the\ninformation provided by OAuth 2.0 provider."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"#user-transforms"},"User Transforms")," section for explanation about\nthe ",(0,o.kt)("inlineCode",{parentName:"p"},"transform user")," directive."),(0,o.kt)("p",null,"For example, the following transform matches any user authenticated\nvia ",(0,o.kt)("inlineCode",{parentName:"p"},"google")," OAuth provider. Upon the match, the plugin adds ",(0,o.kt)("inlineCode",{parentName:"p"},"authp/user"),"\nrole to the token issued by the it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      transform user {\n        match origin google\n        action add role authp/user\n      }\n")),(0,o.kt)("p",null,"The next transform requires the Google authenticated user to have\nemail address of ",(0,o.kt)("inlineCode",{parentName:"p"},"jsmith@contoso.com")," to get ",(0,o.kt)("inlineCode",{parentName:"p"},"authp/admin")," role."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"      transform user {\n        match origin google\n        match email jsmith@contoso.com\n        action add role authp/user\n      }\n")))}d.isMDXComponent=!0}}]);