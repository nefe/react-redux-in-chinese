"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),m=a,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(k,o(o({ref:t},u),{},{components:r})):n.createElement(k,o({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},5700:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>c,default:()=>p,frontMatter:()=>l,metadata:()=>s,toc:()=>u});var n=r(7462),a=r(3366),i=(r(7294),r(3905)),o=["components"],l={id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",hide_title:!0},c=void 0,s={unversionedId:"tutorials/quick-start",id:"tutorials/quick-start",isDocsHomePage:!1,title:"Quick Start",description:"&nbsp;",source:"@site/../docs/tutorials/quick-start.md",sourceDirName:"tutorials",slug:"/tutorials/quick-start",permalink:"/tutorials/quick-start",editUrl:"https://github.com/reduxjs/react-redux/edit/master/website/../docs/tutorials/quick-start.md",tags:[],version:"current",lastUpdatedAt:1665035421,formattedLastUpdatedAt:"10/6/2022",frontMatter:{id:"quick-start",title:"Quick Start",sidebar_label:"Quick Start",hide_title:!0},sidebar:"docs",previous:{title:"Why Use React Redux?",permalink:"/introduction/why-use-react-redux"},next:{title:"TypeScript Quick Start",permalink:"/tutorials/typescript-quick-start"}},u=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[{value:"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b",id:"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b",children:[],level:3}],level:2},{value:"\u4f7f\u7528\u603b\u7ed3",id:"\u4f7f\u7528\u603b\u7ed3",children:[{value:"\u5b89\u88c5 Redux Toolkit \u548c React Redux",id:"\u5b89\u88c5-redux-toolkit-\u548c-react-redux",children:[],level:3},{value:"\u521b\u5efa Redux Store",id:"\u521b\u5efa-redux-store",children:[],level:3},{value:"\u4e3a React \u63d0\u4f9b Redux Store",id:"\u4e3a-react-\u63d0\u4f9b-redux-store",children:[],level:3},{value:"\u521b\u5efa Redux State Slice",id:"\u521b\u5efa-redux-state-slice",children:[],level:3},{value:"\u6dfb\u52a0 Slice Reducers \u5230 Store",id:"\u6dfb\u52a0-slice-reducers-\u5230-store",children:[],level:3},{value:"\u5728 React \u7ec4\u4ef6\u4e2d\u4f7f\u7528 Redux State \u548c Actions",id:"\u5728-react-\u7ec4\u4ef6\u4e2d\u4f7f\u7528-redux-state-\u548c-actions",children:[],level:3}],level:2},{value:"\u4f60\u5b66\u5230\u4e86\u4ec0\u4e48",id:"\u4f60\u5b66\u5230\u4e86\u4ec0\u4e48",children:[{value:"\u5b8c\u6574\u7684 Counter \u5e94\u7528\u793a\u4f8b",id:"\u5b8c\u6574\u7684-counter-\u5e94\u7528\u793a\u4f8b",children:[],level:3}],level:2},{value:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48\uff1f",id:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48",children:[],level:2}],d={toc:u};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"react-redux-\u5feb\u901f\u5f00\u59cb"},"React Redux \u5feb\u901f\u5f00\u59cb"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4f60\u5c06\u5b66\u5230\u4ec0\u4e48")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u5982\u4f55\u901a\u8fc7 React Redux \u8bbe\u7f6e\u548c\u4f7f\u7528 Redux Toolkit ")))),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"\u9884\u7f6e\u77e5\u8bc6")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"\u719f\u6089 ",(0,i.kt)("a",{parentName:"li",href:"https://www.taniarascia.com/es6-syntax-and-feature-overview/"},"ES6 \u8bed\u6cd5\u548c\u7279\u6027")),(0,i.kt)("li",{parentName:"ul"},"React \u672f\u8bed\u77e5\u8bc6\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/introducing-jsx.html"},"JSX"),"\uff0c",(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/state-and-lifecycle.html"},"State"),"\uff0c",(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/components-and-props.html"},"Function Components\uff0cProps"),"\uff0c\u548c ",(0,i.kt)("a",{parentName:"li",href:"https://reactjs.org/docs/hooks-intro.html"},"Hooks")),(0,i.kt)("li",{parentName:"ul"},"\u7406\u89e3 ",(0,i.kt)("a",{parentName:"li",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow"},"Redux \u672f\u8bed\u548c\u6982\u5ff5"))))),(0,i.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"\u6b22\u8fce\u6765\u5230 React Redux \u5feb\u901f\u5f00\u59cb\u7684\u6559\u7a0b\uff01",(0,i.kt)("strong",{parentName:"p"},"\u672c\u6559\u7a0b\u5c06\u5411\u4f60\u7b80\u8981\u4ecb\u7ecd React Redux\uff0c\u5e76\u6559\u4f60\u5982\u4f55\u6b63\u786e\u5f00\u59cb\u4f7f\u7528\u5b83"),"\u3002"),(0,i.kt)("h3",{id:"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b"},"\u5982\u4f55\u9605\u8bfb\u672c\u6559\u7a0b"),(0,i.kt)("p",null,"\u672c\u9875\u5c06\u91cd\u70b9\u4ecb\u7ecd\u5982\u4f55\u4f7f\u7528 Redux Toolkit \u548c\u4f60\u5c06\u4f7f\u7528\u7684\u4e3b\u8981 API \u8bbe\u7f6e Redux \u5e94\u7528\u7a0b\u5e8f\u3002\u6709\u5173 Redux \u662f\u4ec0\u4e48\uff0c\u5b83\u662f\u5982\u4f55\u5de5\u4f5c\u7684\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528 Redux Toolkit \u7684\u5b8c\u6574\u793a\u4f8b\u8bf4\u660e\uff0c\u8bf7\u53c2\u9605 ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/index"},"Redux \u6838\u5fc3\u6587\u6863\u6559\u7a0b"),"\u3002"),(0,i.kt)("p",null,"\u5bf9\u4e8e\u672c\u6559\u7a0b\uff0c\u6211\u4eec\u5047\u8bbe\u4f60\u540c\u65f6\u4f7f\u7528 Redux Toolkit \u548c React Redux\uff0c\u56e0\u4e3a\u8fd9\u662f\u6807\u51c6\u7684 Redux \u4f7f\u7528\u6a21\u5f0f\u3002\u8fd9\u4e9b\u793a\u4f8b\u57fa\u4e8e",(0,i.kt)("a",{parentName:"p",href:"https://create-react-app.dev/docs/folder-structure"},"\u5178\u578b\u7684 Create-React-App \u6587\u4ef6\u5939\u7ed3\u6784")," \u5176\u4e2d\u6240\u6709\u5e94\u7528\u7a0b\u5e8f\u4ee3\u7801\u90fd\u5728\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"src")," \u4e2d\uff0c\u4f46\u8fd9\u4e9b\u6a21\u5f0f\u53ef\u4ee5\u9002\u5e94\u4f60\u6b63\u5728\u4f7f\u7528\u7684\u4efb\u4f55\u9879\u76ee\u6216\u6587\u4ef6\u5939\u8bbe\u7f6e\u3002"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/cra-template-redux"},"Create-React-App \u7684 Redux+JS \u6a21\u7248"),"\u5df2\u7ecf\u914d\u7f6e\u4e86\u76f8\u540c\u7684\u9879\u76ee\u8bbe\u7f6e\u3002"),(0,i.kt)("h2",{id:"\u4f7f\u7528\u603b\u7ed3"},"\u4f7f\u7528\u603b\u7ed3"),(0,i.kt)("h3",{id:"\u5b89\u88c5-redux-toolkit-\u548c-react-redux"},"\u5b89\u88c5 Redux Toolkit \u548c React Redux"),(0,i.kt)("p",null,"\u5c06 Redux Toolkit \u548c React Redux \u6587\u4ef6\u5939\u52a0\u5165\u5230\u4f60\u7684\u9879\u76ee\u4e2d\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"npm install @reduxjs/toolkit react-redux\n")),(0,i.kt)("h3",{id:"\u521b\u5efa-redux-store"},"\u521b\u5efa Redux Store"),(0,i.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u547d\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/app/store.js")," \u7684\u6587\u4ef6\u3002\u4ece Redux Toolkit \u4e2d\u5bfc\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"configureStore")," API\u3002\u6211\u4eec\u5c06\u5f00\u59cb\u521b\u5efa\u4e00\u4e2a\u7a7a\u7684 Redux store\uff0c\u5e76\u5bfc\u51fa\u5b83\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/store.js"',title:'"app/store.js"'},"import { configureStore } from '@reduxjs/toolkit'\n\nexport default configureStore({\n  reducer: {},\n})\n")),(0,i.kt)("p",null,"\u8fd9\u5c06\u521b\u5efa\u4e00\u4e2a Redux store\uff0c\u5e76\u81ea\u52a8\u914d\u7f6e Redux DevTools \u6269\u5c55\uff0c\u4ee5\u4fbf\u4f60\u53ef\u4ee5\u5728\u5f00\u53d1\u65f6\u68c0\u67e5 store\u3002"),(0,i.kt)("h3",{id:"\u4e3a-react-\u63d0\u4f9b-redux-store"},"\u4e3a React \u63d0\u4f9b Redux Store"),(0,i.kt)("p",null,"\u521b\u5efa store \u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/index.js")," \u4e2d\u7684\u5e94\u7528\u7a0b\u5e8f\u5916\u5c42\u653e\u7f6e\u4e00\u4e2a React Redux ",(0,i.kt)("inlineCode",{parentName:"p"},"<Provider>")," \u6765\u4f7f\u5176\u5bf9\u6211\u4eec\u7684 React \u7ec4\u4ef6\u53ef\u7528\u3002\u5bfc\u5165\u6211\u4eec\u521a\u521a\u521b\u5efa\u7684 Redux store\uff0c\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"<App>")," \u7684\u5916\u5c42\u653e\u7f6e\u4e00\u4e2a ",(0,i.kt)("inlineCode",{parentName:"p"},"<Provider>"),"\uff0c\u5e76\u5c06 store \u4f5c\u4e3a prop \u4f20\u9012\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="index.js"',title:'"index.js"'},"import React from 'react'\nimport ReactDOM from 'react-dom/client'\nimport './index.css'\nimport App from './App'\n// highlight-start\nimport store from './app/store'\nimport { Provider } from 'react-redux'\n// highlight-end\n\n// \u4ece React 18 \u5f00\u59cb\nconst root = ReactDOM.createRoot(document.getElementById('root'))\n\nroot.render(\n  // highlight-next-line\n  <Provider store={store}>\n    <App />\n  </Provider>\n)\n")),(0,i.kt)("h3",{id:"\u521b\u5efa-redux-state-slice"},"\u521b\u5efa Redux State Slice"),(0,i.kt)("p",null,"\u6dfb\u52a0\u4e00\u4e2a\u540d\u4e3a ",(0,i.kt)("inlineCode",{parentName:"p"},"src/features/counter/counterSlice.js")," \u7684\u65b0\u6587\u4ef6\u3002\u5728\u8be5\u6587\u4ef6\u4e2d\uff0c\u4ece Redux Toolkit \u5bfc\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"createSlice")," API\u3002"),(0,i.kt)("p",null,"\u521b\u5efa slice \u9700\u8981\u4e00\u4e2a\u5b57\u7b26\u4e32\u540d\u79f0\u6765\u6807\u8bc6 slice\uff0c\u4e00\u4e2a\u521d\u59cb state \u503c\uff0c\u4ee5\u53ca\u4e00\u4e2a\u6216\u591a\u4e2a reducer \u51fd\u6570\u6765\u5b9a\u4e49\u5982\u4f55\u66f4\u65b0 state\u3002\u521b\u5efa slice \u540e\uff0c\u6211\u4eec\u53ef\u4ee5\u5bfc\u51fa\u751f\u6210\u7684 Redux action creators \u548c\u6574\u4e2a slice reducer \u51fd\u6570\u3002"),(0,i.kt)("p",null,"Redux \u8981\u6c42",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-2-concepts-data-flow#immutability"},"\u6211\u4eec\u901a\u8fc7\u5236\u4f5c\u6570\u636e\u526f\u672c\u548c\u66f4\u65b0\u526f\u672c\u6765\u4e0d\u53ef\u53d8\u5730\u5199\u5165\u6240\u6709\u7684 state \u66f4\u65b0"),"\u3002\u4f46\u662f\uff0cRedux Toolkit \u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"createSlice")," \u548c ",(0,i.kt)("inlineCode",{parentName:"p"},"createReducer")," API \u5728\u5185\u90e8\u4f7f\u7528 ",(0,i.kt)("a",{parentName:"p",href:"https://immerjs.github.io/immer/"},"Immer")," \u5141\u8bb8\u6211\u4eec",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/fundamentals/part-8-modern-redux#immutable-updates-with-immer"},"\u7f16\u5199 mutating \u66f4\u65b0\u903b\u8f91\u4ece\u800c\u6210\u4e3a\u6b63\u786e\u7684\u4e0d\u53ef\u53d8\u66f4\u65b0"),"\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="features/counter/counterSlice.js"',title:'"features/counter/counterSlice.js"'},"import { createSlice } from '@reduxjs/toolkit'\n\nexport const counterSlice = createSlice({\n  name: 'counter',\n  initialState: {\n    value: 0,\n  },\n  reducers: {\n    increment: (state) => {\n      // Redux Toolkit \u5141\u8bb8\u6211\u4eec\u5728 reducers \u4e2d\u7f16\u5199 mutating \u903b\u8f91\u3002\n      // \u5b83\u5b9e\u9645\u4e0a\u5e76\u6ca1\u6709 mutate state \u56e0\u4e3a\u5b83\u4f7f\u7528\u4e86 Immer \u5e93\uff0c\n      // \u5b83\u68c0\u6d4b\u5230\u8349\u7a3f state \u7684\u53d8\u5316\u5e76\u4ea7\u751f\u4e00\u4e2a\u5168\u65b0\u7684\u57fa\u4e8e\u8fd9\u4e9b\u66f4\u6539\u7684\u4e0d\u53ef\u53d8 state\n      state.value += 1\n    },\n    decrement: (state) => {\n      state.value -= 1\n    },\n    incrementByAmount: (state, action) => {\n      state.value += action.payload\n    },\n  },\n})\n\n// \u4e3a\u6bcf\u4e2a case reducer \u51fd\u6570\u751f\u6210 Action creators\nexport const { increment, decrement, incrementByAmount } = counterSlice.actions\n\nexport default counterSlice.reducer\n")),(0,i.kt)("h3",{id:"\u6dfb\u52a0-slice-reducers-\u5230-store"},"\u6dfb\u52a0 Slice Reducers \u5230 Store"),(0,i.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u9700\u8981\u4ece counter slice \u4e2d\u5bfc\u5165 reducer \u51fd\u6570\u5e76\u5c06\u5176\u6dfb\u52a0\u5230\u6211\u4eec\u7684 store \u4e2d\u3002\u901a\u8fc7\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"reducers")," \u53c2\u6570\u4e2d\u5b9a\u4e49\u4e00\u4e2a\u5b57\u6bb5\uff0c\u6211\u4eec\u544a\u8bc9 store \u4f7f\u7528\u8fd9\u4e2a slice reducer \u51fd\u6570\u6765\u5904\u7406\u8be5 state \u7684\u6240\u6709\u66f4\u65b0\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="app/store.js"',title:'"app/store.js"'},"import { configureStore } from '@reduxjs/toolkit'\n// highlight-next-line\nimport counterReducer from '../features/counter/counterSlice'\n\nexport default configureStore({\n  reducer: {\n    // highlight-next-line\n    counter: counterReducer,\n  },\n})\n")),(0,i.kt)("h3",{id:"\u5728-react-\u7ec4\u4ef6\u4e2d\u4f7f\u7528-redux-state-\u548c-actions"},"\u5728 React \u7ec4\u4ef6\u4e2d\u4f7f\u7528 Redux State \u548c Actions"),(0,i.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 React Redux hooks \u8ba9 React \u7ec4\u4ef6\u4e0e Redux store \u4ea4\u4e92\u3002\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"useSelector")," \u4ece store \u4e2d\u8bfb\u53d6\u6570\u636e\uff0c\u5e76\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"p"},"useDispatch")," dispatch actions\u3002\u521b\u5efa\u4e00\u4e2a\u5305\u542b ",(0,i.kt)("inlineCode",{parentName:"p"},"<Counter>")," \u7ec4\u4ef6\u7684 ",(0,i.kt)("inlineCode",{parentName:"p"},"src/features/counter/Counter.js")," \u6587\u4ef6\uff0c\u7136\u540e\u5c06\u8be5\u7ec4\u4ef6\u5bfc\u5165 ",(0,i.kt)("inlineCode",{parentName:"p"},"App.js")," \u5e76\u5728 ",(0,i.kt)("inlineCode",{parentName:"p"},"<App>")," \u4e2d\u6e32\u67d3\u5b83\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="features/counter/Counter.js"',title:'"features/counter/Counter.js"'},"import React from 'react'\nimport { useSelector, useDispatch } from 'react-redux'\nimport { decrement, increment } from './counterSlice'\nimport styles from './Counter.module.css'\n\nexport function Counter() {\n  const count = useSelector((state) => state.counter.value)\n  const dispatch = useDispatch()\n\n  return (\n    <div>\n      <div>\n        <button\n          aria-label=\"Increment value\"\n          onClick={() => dispatch(increment())}\n        >\n          Increment\n        </button>\n        <span>{count}</span>\n        <button\n          aria-label=\"Decrement value\"\n          onClick={() => dispatch(decrement())}\n        >\n          Decrement\n        </button>\n      </div>\n    </div>\n  )\n}\n")),(0,i.kt)("p",null,"\u4ece\u73b0\u5728\u8d77\u5355\u51fb Increment \u548c Decrement \u6309\u94ae\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u5e94\u7684 Redux action \u4f1a\u88ab dispatch \u5230 store"),(0,i.kt)("li",{parentName:"ul"},"\u8ba1\u6570 slice reducer \u5c06\u770b\u5230 actions \u66f4\u65b0\u5176 state"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<Counter>")," \u7ec4\u4ef6\u5c06\u4ece store \u4e2d\u770b\u5230\u65b0\u7684 state \u503c\uff0c\u5e76\u4f7f\u7528\u65b0\u7684\u6570\u636e\u91cd\u65b0\u6e32\u67d3\u81ea\u5df1")),(0,i.kt)("h2",{id:"\u4f60\u5b66\u5230\u4e86\u4ec0\u4e48"},"\u4f60\u5b66\u5230\u4e86\u4ec0\u4e48"),(0,i.kt)("p",null,"\u8fd9\u662f\u5173\u4e8e\u5982\u4f55\u901a\u8fc7 React \u8bbe\u7f6e\uff0c\u4f7f\u7528 Redux Toolkit \u7684\u7b80\u8981\u6982\u8ff0\u3002\u91cd\u65b0\u603b\u7ed3\u4e00\u4e0b\u7ec6\u8282\u3002"),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u603b\u7ed3")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"configureStore")," \u521b\u5efa Redux store"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configureStore")," \u63a5\u6536 ",(0,i.kt)("inlineCode",{parentName:"li"},"reducer")," \u51fd\u6570\u4f5c\u4e3a\u547d\u540d\u53c2\u6570"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"configureStore")," \u4f7f\u7528\u826f\u597d\u7684\u9ed8\u8ba4\u8bbe\u7f6e\u81ea\u52a8\u8bbe\u7f6e store"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4e3a React \u5e94\u7528\u7a0b\u5e8f\u7ec4\u4ef6\u63d0\u4f9b Redux store"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u5728\u4f60\u7684 ",(0,i.kt)("inlineCode",{parentName:"li"},"<App />")," \u5916\u5c42\u5305\u88f9\u4e00\u4e2a React Redux ",(0,i.kt)("inlineCode",{parentName:"li"},"<Provider>")," \u7ec4\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u5c06 Redux store \u4f5c\u4e3a ",(0,i.kt)("inlineCode",{parentName:"li"},"<Provider store={store}> \u4f20\u9012")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"strong"},"createSlice")," \u521b\u5efa\u4e00\u4e2a Redux slice reducer"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5b57\u7b26\u4e32\u540d\u79f0\uff0c\u521d\u59cb state \u548c\u547d\u540d\u7684 reducer \u51fd\u6570\u8c03\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"createSlice")),(0,i.kt)("li",{parentName:"ul"},"Reducer \u51fd\u6570\u53ef\u4ee5\u4f7f\u7528 Immer \u6765 mutate state "),(0,i.kt)("li",{parentName:"ul"},"\u5bfc\u51fa\u751f\u6210\u7684 slice reducer \u548c action creators"))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"\u5728 React \u7ec4\u4ef6\u4e2d\u4f7f\u7528 React Redux ",(0,i.kt)("inlineCode",{parentName:"strong"},"useSelector/useDispatch")," hooks"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"useSelector")," hook \u4ece store \u8bfb\u53d6\u6570\u636e "),(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ",(0,i.kt)("inlineCode",{parentName:"li"},"useDispatch")," hook \u83b7\u53d6 ",(0,i.kt)("inlineCode",{parentName:"li"},"dispatch")," \u51fd\u6570\uff0c\u5e76\u6839\u636e\u9700\u8981 dispatch actions")))))),(0,i.kt)("h3",{id:"\u5b8c\u6574\u7684-counter-\u5e94\u7528\u793a\u4f8b"},"\u5b8c\u6574\u7684 Counter \u5e94\u7528\u793a\u4f8b"),(0,i.kt)("p",null,"\u6b64\u5904\u663e\u793a\u7684\u8ba1\u6570\u5668\u793a\u4f8b\u5e94\u7528\u7a0b\u5e8f\u4e5f\u662f"),(0,i.kt)("p",null,"\u8fd9\u662f\u4f5c\u4e3a\u8fd0\u884c CodeSandbox \u7684\u5b8c\u6574\u8ba1\u6570\u5668\u5e94\u7528\u7a0b\u5e8f\uff1a"),(0,i.kt)("iframe",{class:"codesandbox",src:"https://codesandbox.io/embed/github/reduxjs/redux-essentials-counter-example/tree/master/?fontsize=14&hidenavigation=1&module=%2Fsrc%2Ffeatures%2Fcounter%2FcounterSlice.js&theme=dark&runonclick=1",title:"redux-essentials-example",allow:"geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb",sandbox:"allow-modals allow-forms allow-popups allow-scripts allow-same-origin"}),(0,i.kt)("h2",{id:"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48"},"\u4e0b\u4e00\u6b65\u662f\u4ec0\u4e48\uff1f"),(0,i.kt)("p",null,"\u6211\u4eec\u5efa\u8bae\u4f60\u9605\u8bfb ",(0,i.kt)("a",{parentName:"p",href:"https://redux.js.org/tutorials/index"},(0,i.kt)("strong",{parentName:"a"},"Redux \u6838\u5fc3\u6587\u6863\u4e2d\u7684 Redux Essentials \u548c Redux Fundamentals \u6559\u7a0b")),"\uff0c\u8fd9\u5c06\u4f7f\u4f60\u5168\u9762\u4e86\u89e3 Redux \u7684\u5de5\u4f5c\u539f\u7406\uff0cRedux Toolkit \u548c React Redux \u7684\u4f5c\u7528\uff0c\u4ee5\u53ca\u5982\u4f55\u6b63\u786e\u4f7f\u7528\u5b83\u3002"))}p.isMDXComponent=!0}}]);