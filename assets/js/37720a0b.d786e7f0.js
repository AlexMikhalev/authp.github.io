"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[737],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(s,".").concat(m)]||d[m]||c[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1149:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={},s="LDAP Configuration",p={unversionedId:"authenticate/ldap/ldap",id:"authenticate/ldap/ldap",isDocsHomePage:!1,title:"LDAP Configuration",description:"It is recommended reading the documentation for Local backend, because",source:"@site/docs/authenticate/ldap/10-ldap.md",sourceDirName:"authenticate/ldap",slug:"/authenticate/ldap/ldap",permalink:"/docs/authenticate/ldap/ldap",editUrl:"https://github.com/authp/authp.github.io/edit/main/docs/authenticate/ldap/10-ldap.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Password Management",permalink:"/docs/authenticate/local/password-management"},next:{title:"LDAP Authentication Architecture",permalink:"/docs/authenticate/ldap/search"}},u=[],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"ldap-configuration"},"LDAP Configuration"),(0,o.kt)("p",null,"It is recommended reading the documentation for Local backend, because\nit outlines important principles of operation of all backends."),(0,o.kt)("p",null,"Additionally, the LDAP backend works in conjunction with Local backend.\nAs you will see later, the two can be used together by introducing a\ndropdown in UI interface to choose local versus LDAP domain authentication."),(0,o.kt)("p",null,"The reference configuration for the backend is ",(0,o.kt)("inlineCode",{parentName:"p"},"assets/conf/ldap/config.json"),"."),(0,o.kt)("p",null,"The following Caddy endpoint at ",(0,o.kt)("inlineCode",{parentName:"p"},"/auth")," authentications users\nfrom ",(0,o.kt)("inlineCode",{parentName:"p"},"contoso.com")," domain."),(0,o.kt)("p",null,"There is a single LDAP server associated with the domain: ",(0,o.kt)("inlineCode",{parentName:"p"},"ldaps://ldaps.contoso.com"),"."),(0,o.kt)("p",null,"The plugin DOES NOT ignore certificate errors when connecting to the servers.\nHowever, one may ignore the errors by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"ignore_cert_errors")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("p",null,"As a better alternative to ignoring certificate errors, the plugin allows\nadding trusted certificate authorities via ",(0,o.kt)("inlineCode",{parentName:"p"},"trusted_authority")," Caddyfile directive:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"          servers {\n            ldaps://ldaps.contoso.com\n          }\n          trusted_authority /etc/gatekeeper/tls/trusted_authority/contoso_com_root1_ca_cert.pem\n          trusted_authority /etc/gatekeeper/tls/trusted_authority/contoso_com_root2_ca_cert.pem\n          trusted_authority /etc/gatekeeper/tls/trusted_authority/contoso_com_root3_ca_cert.pem\n")),(0,o.kt)("p",null,"The LDAP attribute mapping to JWT fields is as follows."),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"JWT Token Field")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"LDAP Attribute")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"name")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"givenName"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"surname")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"sn"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"username")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"sAMAccountName"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"member_of")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"memberOf"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"email")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mail"))))),(0,o.kt)("p",null,"The plugin uses ",(0,o.kt)("inlineCode",{parentName:"p"},"authzsvc")," domain user to perform LDAP bind."),(0,o.kt)("p",null,"The base search DN is ",(0,o.kt)("inlineCode",{parentName:"p"},"DC=CONTOSO,DC=COM"),"."),(0,o.kt)("p",null,"The plugin accepts username (",(0,o.kt)("inlineCode",{parentName:"p"},"sAMAccountName"),") or email address (",(0,o.kt)("inlineCode",{parentName:"p"},"mail"),")\nand uses the following search filter: ",(0,o.kt)("inlineCode",{parentName:"p"},"(&(|(sAMAccountName=%s)(mail=%s))(objectclass=user))"),"."),(0,o.kt)("p",null,"For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'      {\n        "Name": "sAMAccountName",\n        "Values": [\n          "jsmith"\n        ]\n      },\n      {\n        "Name": "mail",\n        "Values": [\n          "jsmith@contoso.com"\n        ]\n      }\n')),(0,o.kt)("p",null,"Upon successful authentication, the plugin assign the following rules\nto a user, provided the user is a member of a group:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"JWT Role")),(0,o.kt)("th",{parentName:"tr",align:null},(0,o.kt)("strong",{parentName:"th"},"LDAP Group Membership")))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"admin")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CN=Admins,OU=Security,OU=Groups,DC=CONTOSO,DC=COM"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"editor")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CN=Editors,OU=Security,OU=Groups,DC=CONTOSO,DC=COM"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"viewer")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"CN=Viewers,OU=Security,OU=Groups,DC=CONTOSO,DC=COM"))))),(0,o.kt)("p",null,"The security of the ",(0,o.kt)("inlineCode",{parentName:"p"},"password")," could be improved by the following techniques:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"pass the password via environment variable ",(0,o.kt)("inlineCode",{parentName:"li"},"LDAP_USER_SECRET")),(0,o.kt)("li",{parentName:"ul"},"store the password in a file and pass the file inside the ",(0,o.kt)("inlineCode",{parentName:"li"},"password"),"\nfield with ",(0,o.kt)("inlineCode",{parentName:"li"},"file:")," prefix, e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"file:/path/to/password"),".")),(0,o.kt)("p",null,"The following ",(0,o.kt)("inlineCode",{parentName:"p"},"Caddyfile")," secures Prometheus/Alertmanager services. Users may access\nusing local and LDAP credentials."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'{\n  http_port     8080\n  https_port    8443\n  debug\n}\n\n127.0.0.1:8443 {\n  route /auth* {\n    authp {\n      backends {\n        crypto key sign-verify 0e2fdcf8-6868-41a7-884b-7308795fc286\n        local_backend {\n          method local\n          path assets/conf/local/auth/user_db.json\n          realm local\n        }\n        ldap_backend {\n          method ldap\n          realm contoso.com\n          servers {\n            ldaps://ldaps.contoso.com\n          }\n          trusted_authority /etc/gatekeeper/tls/trusted_authority/contoso_com_root1_ca_cert.pem\n          trusted_authority /etc/gatekeeper/tls/trusted_authority/contoso_com_root2_ca_cert.pem\n          trusted_authority /etc/gatekeeper/tls/trusted_authority/contoso_com_root3_ca_cert.pem\n          attributes {\n            name givenName\n            surname sn\n            username sAMAccountName\n            member_of memberOf\n            email mail\n          }\n          username "CN=authzsvc,OU=Service Accounts,OU=Administrative Accounts,DC=CONTOSO,DC=COM"\n          # password "P@ssW0rd123"\n          password "file:/etc/gatekeeper/auth/ldap.secret"\n          search_base_dn "DC=CONTOSO,DC=COM"\n          search_filter "(&(|(sAMAccountName=%s)(mail=%s))(objectclass=user))"\n          groups {\n            "CN=Admins,OU=Security,OU=Groups,DC=CONTOSO,DC=COM" admin\n            "CN=Editors,OU=Security,OU=Groups,DC=CONTOSO,DC=COM" editor\n            "CN=Viewers,OU=Security,OU=Groups,DC=CONTOSO,DC=COM" viewer\n          }\n        }\n      }\n      ui {\n        logo url "https://caddyserver.com/resources/images/caddy-circle-lock.svg"\n        logo description "Caddy"\n        links {\n          "Prometheus" /prometheus\n          "Alertmanager" /alertmanager\n          "My App" /myapp\n        }\n      }\n    }\n  }\n\n  route /prometheus* {\n    authorize {\n      primary yes\n      crypto key verify 0e2fdcf8-6868-41a7-884b-7308795fc286\n      set auth url /auth\n      allow roles authp/admin authp/user authp/guest\n      allow roles superadmin\n      allow roles admin editor viewer\n      allow roles AzureAD_Administrator AzureAD_Editor AzureAD_Viewer\n    }\n    uri strip_prefix /prometheus\n    reverse_proxy http://127.0.0.1:9080\n  }\n\n  route /alertmanager* {\n    authorize\n    uri strip_prefix /alertmanager\n    reverse_proxy http://127.0.0.1:9083\n  }\n\n  route /myapp* {\n    authorize\n    respond * "myapp" 200\n  }\n\n  route /version* {\n    respond * "1.0.0" 200\n  }\n\n  route {\n    redir https://{hostport}/auth 302\n  }\n}\n')))}d.isMDXComponent=!0}}]);