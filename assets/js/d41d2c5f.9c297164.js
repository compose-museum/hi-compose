"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6222],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return s}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var a=r.createContext({}),u=function(e){var n=r.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},d=function(e){var n=u(e.components);return r.createElement(a.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),f=u(t),s=o,m=f["".concat(a,".").concat(s)]||f[s]||p[s]||i;return t?r.createElement(m,c(c({ref:n},d),{},{components:t})):r.createElement(m,c({ref:n},d))}));function s(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,c=new Array(i);c[0]=f;var l={};for(var a in n)hasOwnProperty.call(n,a)&&(l[a]=n[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=t[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},7284:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return a},metadata:function(){return u},toc:function(){return d},default:function(){return f}});var r=t(7462),o=t(3366),i=(t(7294),t(3905)),c=["components"],l={hide:["navigation","toc"]},a=void 0,u={unversionedId:"code/elements/textfield/BasicTextField",id:"code/elements/textfield/BasicTextField",title:"BasicTextField",description:"",source:"@site/docs/code/elements/textfield/BasicTextField.md",sourceDirName:"code/elements/textfield",slug:"/code/elements/textfield/BasicTextField",permalink:"/docs/code/elements/textfield/BasicTextField",editUrl:"https://github.com/compose-museum/hello-compose/tree/master/docs/code/elements/textfield/BasicTextField.md",tags:[],version:"current",frontMatter:{hide:["navigation","toc"]}},d=[],p={toc:d};function f(e){var n=e.components,t=(0,o.Z)(e,c);return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-kotlin"},'var text by remember { mutableStateOf("") }\n\nBox(\n    modifier = Modifier\n        .fillMaxSize()\n        .background(Color(0xFFD3D3D3)),\n    contentAlignment = Alignment.Center\n) {\n    BasicTextField(\n        value = text,\n        onValueChange = {\n            text = it\n        },\n        modifier = Modifier\n            .background(Color.White)\n            .fillMaxWidth(),\n        decorationBox = { innerTextField ->\n            Column(\n                modifier = Modifier.padding(vertical = 10.dp)\n            ) {\n                Row(\n                    verticalAlignment = Alignment.CenterVertically,\n                ) {\n                    IconButton(onClick = {}) { Icon(painterResource(id = R.drawable.mood), contentDescription = null) }\n                    IconButton(onClick = {}) { Icon(painterResource(id = R.drawable.gif), contentDescription = null) }\n                    IconButton(onClick = {}) { Icon(painterResource(id = R.drawable.shortcut), contentDescription = null) }\n                    IconButton(onClick = {}) { Icon(painterResource(id = R.drawable.more), contentDescription = null) }\n                }\n                Box(\n                    modifier = Modifier.padding(horizontal = 10.dp)\n                ) {\n                    innerTextField()\n                }\n                Row(\n                    modifier = Modifier.fillMaxWidth(),\n                    verticalAlignment = Alignment.CenterVertically,\n                    horizontalArrangement = Arrangement.End\n                ) {\n                    TextButton(onClick = { /*TODO*/ }) {\n                        Text("\u53d1\u9001")\n                    }\n                    Spacer(Modifier.padding(horizontal = 10.dp))\n                    TextButton(onClick = { /*TODO*/ }) {\n                        Text("\u5173\u95ed")\n                    }\n                }\n            }\n        }\n    )\n}\n')))}f.isMDXComponent=!0}}]);