"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4550],{3905:(e,t,o)=>{o.d(t,{Zo:()=>m,kt:()=>s});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var p=n.createContext({}),d=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},m=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),u=d(o),s=a,h=u["".concat(p,".").concat(s)]||u[s]||c[s]||r;return o?n.createElement(h,l(l({ref:t},m),{},{components:o})):n.createElement(h,l({ref:t},m))}));function s(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var d=2;d<r;d++)l[d]=o[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},1186:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var n=o(7462),a=(o(7294),o(3905));const r=o.p+"assets/images/demo-7760f110f41acbc9f8e1f87d84d9d084.gif",l={title:"ModalBottomSheetLayout"},i=void 0,p={unversionedId:"layout/modalbottomsheetlayout",id:"layout/modalbottomsheetlayout",title:"ModalBottomSheetLayout",description:"ModalBottomSheetLayout \u53ef\u4ee5\u5728 App \u7684\u5e95\u90e8\u5f39\u51fa\uff0c\u5e76\u4e14\u80fd\u591f\u5c06\u80cc\u666f\u6697\u5316\u3002",source:"@site/docs/layout/modalbottomsheetlayout.mdx",sourceDirName:"layout",slug:"/layout/modalbottomsheetlayout",permalink:"/docs/layout/modalbottomsheetlayout",draft:!1,editUrl:"https://github.com/compose-museum/jetpack-compose-book/tree/master/docs/layout/modalbottomsheetlayout.mdx",tags:[],version:"current",frontMatter:{title:"ModalBottomSheetLayout"},sidebar:"docs",previous:{title:"BottomNavigation",permalink:"/docs/layout/bottomnavigation"},next:{title:"Pager",permalink:"/docs/layout/pager"}},d={},m=[{value:"2. \u6536\u56de ModalBottomSheet",id:"2-\u6536\u56de-modalbottomsheet",level:2},{value:"3. \u8bbe\u7f6e\u52a8\u753b\u65f6\u95f4",id:"3-\u8bbe\u7f6e\u52a8\u753b\u65f6\u95f4",level:2},{value:"4. \u66f4\u591a",id:"4-\u66f4\u591a",level:2}],c={toc:m};function u(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"@Composable\n@ExperimentalMaterialApi\nfun ModalBottomSheetLayout(\n    sheetContent: @Composable ColumnScope.() -> Unit,\n    modifier: Modifier = Modifier,\n    sheetState: ModalBottomSheetState =\n        rememberModalBottomSheetState(ModalBottomSheetValue.Hidden),\n    sheetShape: Shape = MaterialTheme.shapes.large,\n    sheetElevation: Dp = ModalBottomSheetDefaults.Elevation,\n    sheetBackgroundColor: Color = MaterialTheme.colors.surface,\n    sheetContentColor: Color = contentColorFor(sheetBackgroundColor),\n    scrimColor: Color = ModalBottomSheetDefaults.scrimColor,\n    content: @Composable () -> Unit\n)\n")),(0,a.kt)("img",{src:"https://developer.android.com/images/reference/androidx/compose/material/modal-bottom-sheet.png"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ModalBottomSheetLayout")," \u53ef\u4ee5\u5728 App \u7684\u5e95\u90e8\u5f39\u51fa\uff0c\u5e76\u4e14\u80fd\u591f\u5c06\u80cc\u666f\u6697\u5316\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ModalSheetLayout")," \u603b\u5171\u6709\u4e09\u79cd\u72b6\u6001\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hidden")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"HalfExpanded")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Expanded"))),(0,a.kt)("p",null,"\u4e00\u4e2a\u7b80\u5355\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"ModalBottomSheetLayout")," \u7684\u4f8b\u5b50\u662f\u8fd9\u6837\u7684\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'val state = rememberModalBottomSheetState(ModalBottomSheetValue.Hidden)\nval scope = rememberCoroutineScope()\nModalBottomSheetLayout(\n    sheetState = state,\n    sheetContent = {\n        Column{\n            ListItem(\n                text = { Text("\u9009\u62e9\u5206\u4eab\u5230\u54ea\u91cc\u5427~") }\n            )\n\n            ListItem(\n                text = { Text("github") }, \n                icon = {\n                    Surface(\n                        shape = CircleShape,\n                        color = Color(0xFF181717)\n                    ) {\n                        Icon(\n                            painterResource(R.drawable.github),\n                            null,\n                            tint = Color.White,\n                            modifier = Modifier.padding(4.dp)\n                        )\n                    }\n                },\n                modifier = Modifier.clickable {  }\n            )\n\n            ListItem(\n                text = { Text("\u5fae\u4fe1") }, \n                icon = {\n                    Surface(\n                        shape = CircleShape,\n                        color = Color(0xFF07C160)\n                    ) {\n                        Icon(\n                            painterResource(R.drawable.wechat),\n                            null,\n                            tint = Color.White,\n                            modifier = Modifier.padding(4.dp)\n                        )\n                    }\n                },\n                modifier = Modifier.clickable {  }\n            )\n        }\n    }\n) {\n    Column(\n        modifier = Modifier\n            .fillMaxSize()\n            .padding(16.dp),\n        horizontalAlignment = Alignment.CenterHorizontally\n    ) {\n        Button(\n            onClick = { scope.launch { state.show() } }\n        ) {\n            Text("\u70b9\u6211\u5c55\u5f00")\n        }\n    }\n}\n')),(0,a.kt)("img",{src:r,width:"30%",height:"30%"}),(0,a.kt)("admonition",{title:"Tips",type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"\u76ee\u524d\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ModalBottomSheetLayout")," \u9700\u8981\u6807\u660e ",(0,a.kt)("inlineCode",{parentName:"p"},"@ExperimentalMaterialApi"))),(0,a.kt)("h2",{id:"2-\u6536\u56de-modalbottomsheet"},"2. \u6536\u56de ModalBottomSheet"),(0,a.kt)("p",null,"\u4e00\u822c\u60c5\u51b5\u4e0b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"ModalBottomSheet")," \u65e0\u6cd5\u81ea\u52a8\u5904\u7406\u6309\u4e0b\u8fd4\u56de\u952e\u5c31\u6536\u8d77\uff0c\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"BackHandler")," \u6765\u5904\u7406"),(0,a.kt)("p",null,"\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"ModalBottomSheet")," \u540e\u6dfb\u52a0\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"BackHandler(\n    enabled = (state.currentValue == ModalBottomSheetValue.HalfExpanded\n            || state.currentValue == ModalBottomSheetValue.Expanded),\n    onBack = {\n        scope.launch {\n            state.hide()\n        }\n    }\n)\n")),(0,a.kt)("h2",{id:"3-\u8bbe\u7f6e\u52a8\u753b\u65f6\u95f4"},"3. \u8bbe\u7f6e\u52a8\u753b\u65f6\u95f4"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ModalSheetLayout")," \u9ed8\u8ba4\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"state.show()")," \u6216\u8005 ",(0,a.kt)("inlineCode",{parentName:"p"},"state.hidden()")," \u6765\u5f39\u51fa\u548c\u6536\u56de"),(0,a.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u8fd9\u6837\u7684\u65b9\u5f0f\u6765\u81ea\u5b9a\u4e49\u52a8\u753b\u65f6\u95f4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},"state.animateTo(ModalBottomSheetValue.Hidden, tween(1000))\n")),(0,a.kt)("p",null,"\u5f39\u51fa\u540c\u7406 "),(0,a.kt)("h2",{id:"4-\u66f4\u591a"},"4. \u66f4\u591a"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/reference/kotlin/androidx/compose/material/package-summary#ModalBottomSheetLayout(kotlin.Function1,androidx.compose.ui.Modifier,androidx.compose.material.ModalBottomSheetState,androidx.compose.ui.graphics.Shape,androidx.compose.ui.unit.Dp,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,androidx.compose.ui.graphics.Color,kotlin.Function0)"},"ModalBottomSheet \u53c2\u6570\u8be6\u60c5")))}u.isMDXComponent=!0}}]);