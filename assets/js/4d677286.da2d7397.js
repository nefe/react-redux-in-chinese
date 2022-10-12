"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[921],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var a=n(7294);function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,p=function(e,t){if(null==e)return{};var n,a,p={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(p[n]=e[n]);return p}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(p[n]=e[n])}return p}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,p=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=c(n),u=p,h=m["".concat(s,".").concat(u)]||m[u]||d[u]||o;return n?a.createElement(h,r(r({ref:t},l),{},{components:n})):a.createElement(h,r({ref:t},l))}));function u(e,t){var n=arguments,p=t&&t.mdxType;if("string"==typeof e||p){var o=n.length,r=new Array(o);r[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:p,r[1]=i;for(var c=2;c<o;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1232:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=n(7462),p=n(3366),o=(n(7294),n(3905)),r=["components"],i={id:"connect-mapdispatch",title:"Connect: \u4f7f\u7528 mapDispatchToProps Dispatch Action",hide_title:!0,sidebar_label:"Connect: \u4f7f\u7528 mapDispatchToProps Dispatch Action",description:"\u4f7f\u7528\u6307\u5357 > mapDispatch: options for dispatching actions with connect"},s=void 0,c={unversionedId:"using-react-redux/connect-mapdispatch",id:"using-react-redux/connect-mapdispatch",isDocsHomePage:!1,title:"Connect: \u4f7f\u7528 mapDispatchToProps Dispatch Action",description:"\u4f7f\u7528\u6307\u5357 > mapDispatch: options for dispatching actions with connect",source:"@site/../docs/using-react-redux/connect-dispatching-actions-with-mapDispatchToProps.md",sourceDirName:"using-react-redux",slug:"/using-react-redux/connect-mapdispatch",permalink:"/using-react-redux/connect-mapdispatch",editUrl:"https://github.com/reduxjs/react-redux/edit/master/website/../docs/using-react-redux/connect-dispatching-actions-with-mapDispatchToProps.md",tags:[],version:"current",lastUpdatedAt:1665562847,formattedLastUpdatedAt:"10/12/2022",frontMatter:{id:"connect-mapdispatch",title:"Connect: \u4f7f\u7528 mapDispatchToProps Dispatch Action",hide_title:!0,sidebar_label:"Connect: \u4f7f\u7528 mapDispatchToProps Dispatch Action",description:"\u4f7f\u7528\u6307\u5357 > mapDispatch: options for dispatching actions with connect"},sidebar:"docs",previous:{title:"Connect: \u4f7f\u7528 mapStateToProps \u83b7\u53d6\u6570\u636e",permalink:"/using-react-redux/connect-mapstate"},next:{title:"\u8bbf\u95ee Store",permalink:"/using-react-redux/accessing-store"}},l=[{value:"Dispatch \u7684\u65b9\u6cd5",id:"dispatch-\u7684\u65b9\u6cd5",children:[{value:"\u9ed8\u8ba4\uff1a<code>dispatch</code> \u4f5c\u4e3a props",id:"\u9ed8\u8ba4dispatch-\u4f5c\u4e3a-props",children:[],level:3},{value:"\u63d0\u4f9b <code>mapDispatchToProps</code> \u53c2\u6570",id:"\u63d0\u4f9b-mapdispatchtoprops-\u53c2\u6570",children:[{value:"\u66f4\u5177\u58f0\u660e\u6027",id:"\u66f4\u5177\u58f0\u660e\u6027",children:[],level:4},{value:"\u5c06 dispatch action \u7684\u903b\u8f91\u4f20\u9012\u7ed9\uff08\u672a\u8fde\u63a5\u7684\uff09\u5b50\u7ec4\u4ef6",id:"\u5c06-dispatch-action-\u7684\u903b\u8f91\u4f20\u9012\u7ed9\u672a\u8fde\u63a5\u7684\u5b50\u7ec4\u4ef6",children:[],level:4}],level:3}],level:2},{value:"<code>mapDispatchToProps</code> \u7684\u4e24\u79cd\u5f62\u5f0f",id:"mapdispatchtoprops-\u7684\u4e24\u79cd\u5f62\u5f0f",children:[],level:2},{value:"\u5c06 <code>mapDispatchToProps</code> \u5b9a\u4e49\u4e3a\u51fd\u6570",id:"\u5c06-mapdispatchtoprops-\u5b9a\u4e49\u4e3a\u51fd\u6570",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[],level:3},{value:"\u8fd4\u56de\u503c",id:"\u8fd4\u56de\u503c",children:[],level:3},{value:"\u4f7f\u7528 <code>bindActionCreators</code> \u5b9a\u4e49 <code>mapDispatchToProps</code> \u51fd\u6570",id:"\u4f7f\u7528-bindactioncreators-\u5b9a\u4e49-mapdispatchtoprops-\u51fd\u6570",children:[],level:3},{value:"\u624b\u52a8\u6ce8\u5165 <code>dispatch</code>",id:"\u624b\u52a8\u6ce8\u5165-dispatch",children:[],level:3}],level:2},{value:"\u5c06 <code>mapDispatchToProps</code> \u5b9a\u4e49\u4e3a\u5bf9\u8c61",id:"\u5c06-mapdispatchtoprops-\u5b9a\u4e49\u4e3a\u5bf9\u8c61",children:[],level:2},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[{value:"\u4e3a\u4ec0\u4e48\u6211\u7684\u7ec4\u4ef6\u6ca1\u6709\u63a5\u6536 <code>dispatch</code>\uff1f",id:"\u4e3a\u4ec0\u4e48\u6211\u7684\u7ec4\u4ef6\u6ca1\u6709\u63a5\u6536-dispatch",children:[],level:3},{value:"\u6211\u53ef\u4ee5\u5728 Redux \u4e2d\u4e0d\u5e26 <code>mapStateToProps</code> \u8fdb\u884c <code>mapDispatchToProps</code> \u5417\uff1f",id:"\u6211\u53ef\u4ee5\u5728-redux-\u4e2d\u4e0d\u5e26-mapstatetoprops-\u8fdb\u884c-mapdispatchtoprops-\u5417",children:[],level:3},{value:"\u6211\u80fd\u8c03\u7528 <code>store.dispatch</code> \u5417\uff1f",id:"\u6211\u80fd\u8c03\u7528-storedispatch-\u5417",children:[],level:3}],level:2},{value:"\u94fe\u63a5\u548c\u53c2\u8003",id:"\u94fe\u63a5\u548c\u53c2\u8003",children:[],level:2}],d={toc:l};function m(e){var t=e.components,n=(0,p.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"connect\u4f7f\u7528-mapdispatchtoprops-dispatch-action"},"Connect\uff1a\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h1"},"mapDispatchToProps")," Dispatch Action"),(0,o.kt)("p",null,"\u4f5c\u4e3a\u4f20\u9012\u7ed9 ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u7528\u4e8e dispatch actions \u7ed9 store\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u662f Redux store \u7684\u4e00\u4e2a\u51fd\u6570\u3002\u4f60\u53ef\u4ee5\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"store.dispatch")," \u6765 dispatch \u4e00\u4e2a action\u3002\n\u8fd9\u662f\u89e6\u53d1 state \u53d8\u66f4\u7684\u552f\u4e00\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u4f7f\u7528 React Redux\uff0c\u4f60\u7684\u7ec4\u4ef6\u6c38\u8fdc\u4e0d\u4f1a\u76f4\u63a5\u8bbf\u95ee store \u2014\u2014 ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," \u4f1a\u4e3a\u4f60\u5b8c\u6210\u8fd9\u4e2a\u8fc7\u7a0b\u3002\nReact Redux \u4e3a\u4f60\u63d0\u4f9b\u4e86\u4e24\u79cd\u8ba9\u7ec4\u4ef6 dispatch actions \u7684\u65b9\u6cd5\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fde\u63a5\u7684\u7ec4\u4ef6\u63a5\u6536 ",(0,o.kt)("inlineCode",{parentName:"li"},"props.dispatch")," \u5e76\u53ef\u4ee5\u81ea\u884c dispatch actions\u3002"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"connect")," \u53ef\u4ee5\u63a5\u53d7\u4e00\u4e2a\u540d\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"mapDispatchToProps")," \u7684\u53c2\u6570\uff0c\u5b83\u5141\u8bb8\u4f60\u521b\u5efa\u5728\u88ab\u8c03\u7528\u65f6 dispatch \u7684\u51fd\u6570\uff0c\u5e76\u5c06\u8fd9\u4e9b\u51fd\u6570\u4f5c\u4e3a props \u4f20\u9012\u7ed9\u4f60\u7684\u7ec4\u4ef6\u3002")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u51fd\u6570\u901a\u5e38\u7b80\u79f0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatch"),"\uff0c\u4f46\u5b9e\u9645\u4f7f\u7528\u7684\u53d8\u91cf\u540d\u53ef\u4ee5\u662f\u4efb\u4f55\u4f60\u60f3\u8981\u7684\u3002"),(0,o.kt)("h2",{id:"dispatch-\u7684\u65b9\u6cd5"},"Dispatch \u7684\u65b9\u6cd5"),(0,o.kt)("h3",{id:"\u9ed8\u8ba4dispatch-\u4f5c\u4e3a-props"},"\u9ed8\u8ba4\uff1a",(0,o.kt)("inlineCode",{parentName:"h3"},"dispatch")," \u4f5c\u4e3a props"),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u6ca1\u6709\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"connect()")," \u6307\u5b9a\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u4f60\u7684\u7ec4\u4ef6\u5c06\u9ed8\u8ba4\u63a5\u6536 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),"\u3002\u4f8b\u5982\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"connect()(MyComponent);\n// \u7b49\u540c\u4e8e\nconnect(null, null)(MyComponent);\n\n// \u6216\u8005\nconnect(mapStateToProps /** \u6ca1\u6709\u7b2c\u4e8c\u4e2a\u53c2\u6570 */)(MyComponent);\n")),(0,o.kt)("p",null,"\u4e00\u65e6\u4f60\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u8fde\u63a5\u4e86\u4f60\u7684\u7ec4\u4ef6\uff0c\u4f60\u7684\u7ec4\u4ef6\u5c31\u4f1a\u63a5\u6536\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"props.dispatch"),"\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528\u5b83\u5411 store dispatch actions\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Counter({ count, dispatch }) {\n  return (\n    <div>\n      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>\n      <span>{count}</span>\n      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>\n      <button onClick={() => dispatch({ type: 'RESET' })}>reset</button>\n    </div>\n  );\n}\n")),(0,o.kt)("h3",{id:"\u63d0\u4f9b-mapdispatchtoprops-\u53c2\u6570"},"\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"h3"},"mapDispatchToProps")," \u53c2\u6570"),(0,o.kt)("p",null,"\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u5141\u8bb8\u4f60\u6307\u5b9a\u7ec4\u4ef6\u53ef\u80fd\u9700\u8981 dispatch \u7684\u4e00\u4e9b action\u3002\u5b83\u5141\u8bb8\u4f60\u63d0\u4f9b dispatch action \u7684\u51fd\u6570\u4f5c\u4e3a props\u3002\u56e0\u6b64\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"props.increment()"),"\uff0c\u800c\u4e0d\u662f\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"props.dispatch(() => increment())"),"\u3002\u4f60\u60f3\u8981\u8fd9\u6837\u505a\u7684\u539f\u56e0\u6709\u51e0\u4e2a\u3002"),(0,o.kt)("h4",{id:"\u66f4\u5177\u58f0\u660e\u6027"},"\u66f4\u5177\u58f0\u660e\u6027"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u5c06 dispatch \u903b\u8f91\u5c01\u88c5\u5230\u51fd\u6570\u4e2d\u4f7f\u5f97\u5b9e\u73b0\u66f4\u5177\u58f0\u660e\u6027\u3002\ndispatch action \u5e76\u8ba9 Redux store \u5904\u7406\u6570\u636e\u6d41\u662f ",(0,o.kt)("em",{parentName:"p"},"\u5982\u4f55")," \u5b9e\u73b0\u884c\u4e3a\uff0c\u800c\u4e0d\u662f\u5b83\u505a\u4e86 ",(0,o.kt)("em",{parentName:"p"},"\u4ec0\u4e48"),"\u3002"),(0,o.kt)("p",null,"\u4e00\u4e2a\u5f88\u597d\u7684\u4f8b\u5b50\u662f\u5728\u5355\u51fb\u6309\u94ae\u65f6 dispatch \u4e00\u4e2a action\u3002\u76f4\u63a5\u8fde\u63a5\u6309\u94ae\u5728\u6982\u5ff5\u4e0a\u53ef\u80fd\u6ca1\u6709\u610f\u4e49\uff0c\u6309\u94ae\u5f15\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u4e5f\u6ca1\u6709\u610f\u4e49\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'// button \u9700\u8981\u6ce8\u610f "dispatch"\n<button onClick={() => dispatch({ type: "SOMETHING" })} />\n\n// button \u4e0d\u9700\u8981\u6ce8\u610f "dispatch",\n<button onClick={doSomething} />\n')),(0,o.kt)("p",null,"\u4e00\u65e6\u4f60\u7528 dispatch actions \u7684\u51fd\u6570\u5305\u88c5\u4e86\u6211\u4eec\u6240\u6709\u7684 action creators\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u5c31\u4e0d\u518d\u9700\u8981 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u4e86\u3002\n\u56e0\u6b64\uff0c",(0,o.kt)("strong",{parentName:"p"},"\u5982\u679c\u4f60\u5b9a\u4e49\u81ea\u5df1\u7684 ",(0,o.kt)("inlineCode",{parentName:"strong"},"mapDispatchToProps"),"\uff0c\u8fde\u63a5\u7684\u7ec4\u4ef6\u5c06\u4e0d\u518d\u63a5\u6536 ",(0,o.kt)("inlineCode",{parentName:"strong"},"dispatch"),"\u3002")),(0,o.kt)("h4",{id:"\u5c06-dispatch-action-\u7684\u903b\u8f91\u4f20\u9012\u7ed9\u672a\u8fde\u63a5\u7684\u5b50\u7ec4\u4ef6"},"\u5c06 dispatch action \u7684\u903b\u8f91\u4f20\u9012\u7ed9\uff08\u672a\u8fde\u63a5\u7684\uff09\u5b50\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u4f60\u8fd8\u53ef\u4ee5\u5c06 dispatch action \u7684\u51fd\u6570\u4f20\u9012\u7ed9\u5b50\uff08\u53ef\u80fd\u672a\u8fde\u63a5\uff09\u7ec4\u4ef6\u3002\n\u8fd9\u5141\u8bb8\u66f4\u591a\u7ec4\u4ef6 dispatch actions\uff0c\u540c\u65f6\u8ba9\u5b83\u4eec\u201c\u4e0d\u5bdf\u89c9\u201d Redux\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"// \u5c06 toggleTodo \u5411\u4e0b\u4f20\u9012\u7ed9\u5b50\u7ec4\u4ef6\n// \u4f7f Todo \u80fd\u591f dispatch toggleTodo action\nconst TodoList = ({ todos, toggleTodo }) => (\n  <div>\n    {todos.map((todo) => (\n      <Todo todo={todo} onClick={toggleTodo} />\n    ))}\n  </div>\n);\n")),(0,o.kt)("p",null,"\u8fd9\u5c31\u662f React Redux \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," \u6240\u505a\u7684\u5de5\u4f5c\u2014\u2014\u5b83\u5c01\u88c5\u4e86\u4e0e Redux store \u5bf9\u8bdd\u7684\u903b\u8f91\uff0c\u8ba9\u4f60\u4e0d\u7528\u5173\u5fc3\u5b83\u3002\u8fd9\u5c31\u662f\u4f60\u5e94\u8be5\u5728\u4f60\u7684\u5b9e\u73b0\u4e2d\u5145\u5206\u5229\u7528\u7684\u4e1c\u897f\u3002"),(0,o.kt)("h2",{id:"mapdispatchtoprops-\u7684\u4e24\u79cd\u5f62\u5f0f"},(0,o.kt)("inlineCode",{parentName:"h2"},"mapDispatchToProps")," \u7684\u4e24\u79cd\u5f62\u5f0f"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u53c2\u6570\u53ef\u4ee5\u6709\u4e24\u79cd\u5f62\u5f0f\u3002\u867d\u7136\u51fd\u6570\u5f62\u5f0f\u5141\u8bb8\u66f4\u591a\u7684\u81ea\u5b9a\u4e49\uff0c\u4f46\u5bf9\u8c61\u5f62\u5f0f\u6613\u4e8e\u4f7f\u7528\u3002"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u51fd\u6570\u5f62\u5f0f"),"\uff1a\u5141\u8bb8\u66f4\u591a\u81ea\u5b9a\u4e49\uff0c\u83b7\u5f97\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch")," \u548c\u53ef\u9009 ",(0,o.kt)("inlineCode",{parentName:"li"},"ownProps")," \u7684\u8bbf\u95ee\u6743\u9650"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"\u5bf9\u8c61\u7b80\u5199\u5f62\u5f0f"),"\uff1a\u66f4\u5177\u58f0\u660e\u6027\u4e14\u66f4\u6613\u4e8e\u4f7f\u7528")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u2b50 ",(0,o.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a")," \u6211\u4eec\u5efa\u8bae\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u7684\u5bf9\u8c61\u5f62\u5f0f\uff0c\u9664\u975e\u4f60\u7279\u522b\u9700\u8981\u4ee5\u67d0\u79cd\u65b9\u5f0f\u81ea\u5b9a\u4e49 dispatch \u884c\u4e3a\u3002")),(0,o.kt)("h2",{id:"\u5c06-mapdispatchtoprops-\u5b9a\u4e49\u4e3a\u51fd\u6570"},"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"h2"},"mapDispatchToProps")," \u5b9a\u4e49\u4e3a\u51fd\u6570"),(0,o.kt)("p",null,"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u5b9a\u4e49\u4e3a\u51fd\u6570\u53ef\u4ee5\u8ba9\u4f60\u5728\u81ea\u5b9a\u4e49\u7ec4\u4ef6\u63a5\u6536\u7684\u51fd\u6570\u4ee5\u53ca\u5b83\u4eec\u5982\u4f55 dispatch actions \u65b9\u9762\u5177\u6709\u6700\u5927\u7684\u7075\u6d3b\u6027\u3002\n\u4f60\u53ef\u4ee5\u8bbf\u95ee ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u548c ",(0,o.kt)("inlineCode",{parentName:"p"},"ownProps"),"\u3002\n\u4f60\u53ef\u4ee5\u5229\u7528\u8fd9\u4e2a\u673a\u4f1a\u7f16\u5199\u81ea\u5b9a\u4e49\u51fd\u6570\u4ee5\u4f9b\u4f60\u8fde\u63a5\u7684\u7ec4\u4ef6\u8c03\u7528\u3002"),(0,o.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"dispatch"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"ownProps"),"\uff08\u53ef\u9009\uff09"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"dispatch"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u51fd\u6570\u5c06\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u88ab\u8c03\u7528\u3002\n\u4f60\u901a\u5e38\u4f1a\u901a\u8fc7\u8fd4\u56de\u5728\u81ea\u8eab\u5185\u90e8\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch()")," \u7684\u65b0\u51fd\u6570\u6765\u4f7f\u7528\u5b83\uff0c\u5e76\u76f4\u63a5\u4f20\u5165\u4e00\u4e2a\u666e\u901a\u7684 action \u5bf9\u8c61\u6216\u4f20\u5165 action creator \u7684\u7ed3\u679c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mapDispatchToProps = (dispatch) => {\n  return {\n    // dispatch \u666e\u901a\u7684 actions\n    increment: () => dispatch({ type: 'INCREMENT' }),\n    decrement: () => dispatch({ type: 'DECREMENT' }),\n    reset: () => dispatch({ type: 'RESET' }),\n  };\n};\n")),(0,o.kt)("p",null,"\u4f60\u53ef\u80fd\u8fd8\u5e0c\u671b\u5c06\u53c2\u6570\u8f6c\u53d1\u7ed9\u4f60\u7684 action creators\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mapDispatchToProps = (dispatch) => {\n  return {\n    // \u663e\u5f0f\u8f6c\u53d1\u53c2\u6570\n    onClick: (event) => dispatch(trackClick(event)),\n\n    // \u9690\u5f0f\u8f6c\u53d1\u53c2\u6570\n    onReceiveImpressions: (...impressions) =>\n      dispatch(trackImpressions(impressions)),\n  };\n};\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("inlineCode",{parentName:"strong"},"ownProps")," \uff08\u53ef\u9009\u7684\uff09")),(0,o.kt)("p",null,"\u5982\u679c\u4f60\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u51fd\u6570\u88ab\u58f0\u660e\u4e3a\u5e26\u4e24\u4e2a\u53c2\u6570\uff0c\u5b83\u5c06\u4ee5 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u4f5c\u4e3a\u7b2c\u4e00\u4e2a\u53c2\u6570\u8c03\u7528\uff0c\u5e76\u5c06 ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u4f5c\u4e3a\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4f20\u9012\u7ed9\u8fde\u63a5\u7684\u7ec4\u4ef6\uff0c\u5e76\u4e14\u6bcf\u5f53\u8fde\u63a5\u7684\u7ec4\u4ef6\u63a5\u6536\u5230\u65b0\u7684 props \u65f6\u90fd\u4f1a\u91cd\u65b0\u8c03\u7528\u3002"),(0,o.kt)("p",null,"\u8fd9\u610f\u5473\u7740\uff0c\u4e0d\u9700\u8981\u5728\u7ec4\u4ef6\u91cd\u65b0\u6e32\u67d3\u65f6\u5c06\u65b0\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u91cd\u65b0\u7ed1\u5b9a\u5230 action dispatchers\uff0c\u800c\u662f\u53ef\u4ee5\u5728\u7ec4\u4ef6\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"props")," \u53d8\u66f4\u65f6\u8fd9\u6837\u505a\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5728\u7ec4\u4ef6 mount \u65f6\u7ed1\u5b9a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"render() {\n  return <button onClick={() => this.props.toggleTodo(this.props.todoId)} />\n}\n\nconst mapDispatchToProps = dispatch => {\n  return {\n    toggleTodo: todoId => dispatch(toggleTodo(todoId))\n  }\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5728 ",(0,o.kt)("inlineCode",{parentName:"strong"},"props")," \u53d8\u66f4\u65f6\u7ed1\u5b9a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"render() {\n  return <button onClick={() => this.props.toggleTodo()} />\n}\n\nconst mapDispatchToProps = (dispatch, ownProps) => {\n  return {\n    toggleTodo: () => dispatch(toggleTodo(ownProps.todoId))\n  }\n}\n")),(0,o.kt)("h3",{id:"\u8fd4\u56de\u503c"},"\u8fd4\u56de\u503c"),(0,o.kt)("p",null,"\u4f60\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u51fd\u6570\u5e94\u8be5\u8fd4\u56de\u4e00\u4e2a\u666e\u901a\u5bf9\u8c61\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5bf9\u8c61\u4e2d\u7684\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u5c06\u6210\u4e3a\u4f60\u81ea\u5df1\u7ec4\u4ef6\u7684\u5355\u72ec prop\uff0c\u5e76\u4e14\u8be5\u503c\u901a\u5e38\u5e94\u8be5\u662f\u5728\u8c03\u7528\u65f6 dispatch action \u7684\u51fd\u6570\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f60\u5728 ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch")," \u4e2d\u4f7f\u7528 action creators\uff08\u4e0e\u666e\u901a\u5bf9\u8c61 actions \u76f8\u53cd\uff09\uff0c\u5219\u7ea6\u5b9a\u5c06\u5b57\u6bb5\u952e\u547d\u540d\u4e3a\u4e0e action creator \u76f8\u540c\u7684\u540d\u79f0\uff1a")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const increment = () => ({ type: 'INCREMENT' });\nconst decrement = () => ({ type: 'DECREMENT' });\nconst reset = () => ({ type: 'RESET' });\n\nconst mapDispatchToProps = (dispatch) => {\n  return {\n    // action creators \u8fd4\u56de\u7684 dispatching actions\n    increment: () => dispatch(increment()),\n    decrement: () => dispatch(decrement()),\n    reset: () => dispatch(reset()),\n  };\n};\n")),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u51fd\u6570\u7684\u8fd4\u56de\u503c\u5c06\u4f5c\u4e3a props \u5408\u5e76\u5230\u4f60\u8fde\u63a5\u7684\u7ec4\u4ef6\u4e2d\u3002\u4f60\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5b83\u4eec\u6765 dispatch \u5176 action\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"function Counter({ count, increment, decrement, reset }) {\n  return (\n    <div>\n      <button onClick={decrement}>-</button>\n      <span>{count}</span>\n      <button onClick={increment}>+</button>\n      <button onClick={reset}>reset</button>\n    </div>\n  );\n}\n")),(0,o.kt)("p",null,"(Counter \u793a\u4f8b\u7684\u5b8c\u6574\u4ee3\u7801\u662f ",(0,o.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/yv6kqo1yw9"},"in this CodeSandbox"),")"),(0,o.kt)("h3",{id:"\u4f7f\u7528-bindactioncreators-\u5b9a\u4e49-mapdispatchtoprops-\u51fd\u6570"},"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"bindActionCreators")," \u5b9a\u4e49 ",(0,o.kt)("inlineCode",{parentName:"h3"},"mapDispatchToProps")," \u51fd\u6570"),(0,o.kt)("p",null,"\u624b\u52a8\u5305\u88c5\u8fd9\u4e9b\u51fd\u6570\u5f88\u4e4f\u5473\uff0c\u56e0\u6b64 Redux \u63d0\u4f9b\u4e86\u4e00\u4e2a\u51fd\u6570\u6765\u7b80\u5316\u5b83\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("inlineCode",{parentName:"p"},"bindActionCreators")," \u5c06\u503c\u4e3a ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/glossary#action-creator"},"action creators")," \u7684\u5bf9\u8c61\u8f6c\u6362\u4e3a\u5177\u6709\u76f8\u540c\u952e\u7684\u5bf9\u8c61\uff0c\u4f46\u6bcf\u4e2a action creator \u90fd\u5305\u88f9\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/api/store#dispatch"},(0,o.kt)("inlineCode",{parentName:"a"},"dispatch"))," \u4e2d\uff0c\u56e0\u6b64\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528\u5b83\u4eec\u3002\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/api/bindactioncreators"},"\u5173\u4e8e ",(0,o.kt)("inlineCode",{parentName:"a"},"bindActionCreators")," \u7684 Redux \u6587\u6863"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bindActionCreators")," \u63a5\u6536\u4e24\u4e2a\u53c2\u6570\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"function"))," (an action creator) \u6216\u8005 ",(0,o.kt)("strong",{parentName:"li"},(0,o.kt)("inlineCode",{parentName:"strong"},"object"))," (\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u662f\u4e00\u4e2a action creator)"),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"dispatch"))),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"bindActionCreators")," \u751f\u6210\u7684\u5305\u88c5\u51fd\u6570\u5c06\u81ea\u52a8\u8f6c\u53d1\u5b83\u4eec\u7684\u6240\u6709\u53c2\u6570\uff0c\u56e0\u6b64\u4f60\u65e0\u9700\u624b\u52a8\u6267\u884c\u6b64\u64cd\u4f5c\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { bindActionCreators } from 'redux';\n\nconst increment = () => ({ type: 'INCREMENT' });\nconst decrement = () => ({ type: 'DECREMENT' });\nconst reset = () => ({ type: 'RESET' });\n\n// \u7ed1\u5b9a\u4e00\u4e2a action creator\n// \u8fd4\u56de (...args) => dispatch(increment(...args))\nconst boundIncrement = bindActionCreators(increment, dispatch);\n\n// \u7ed1\u5b9a\u4e00\u4e2a\u5168\u662f action creators \u7684\u5bf9\u8c61\nconst boundActionCreators = bindActionCreators(\n  { increment, decrement, reset },\n  dispatch\n);\n// \u8fd4\u56de\n// {\n//   increment: (...args) => dispatch(increment(...args)),\n//   decrement: (...args) => dispatch(decrement(...args)),\n//   reset: (...args) => dispatch(reset(...args)),\n// }\n")),(0,o.kt)("p",null,"\u5728\u6211\u4eec\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u51fd\u6570\u4e2d\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"bindActionCreators"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { bindActionCreators } from 'redux';\n// ...\n\nfunction mapDispatchToProps(dispatch) {\n  return bindActionCreators({ increment, decrement, reset }, dispatch);\n}\n\n// \u7ec4\u4ef6\u63a5\u6536 props.increment, props.decrement, props.reset\nconnect(null, mapDispatchToProps)(Counter);\n")),(0,o.kt)("h3",{id:"\u624b\u52a8\u6ce8\u5165-dispatch"},"\u624b\u52a8\u6ce8\u5165 ",(0,o.kt)("inlineCode",{parentName:"h3"},"dispatch")),(0,o.kt)("p",null,"\u5982\u679c\u63d0\u4f9b\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u53c2\u6570\uff0c\u7ec4\u4ef6\u5c06\u4e0d\u518d\u63a5\u6536\u9ed8\u8ba4\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),"\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u624b\u52a8\u5c06\u5176\u6dfb\u52a0\u5230\u4f60\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u7684\u8fd4\u56de\u4e2d\u6765\u6062\u590d\u5b83\uff0c\u5c3d\u7ba1\u5927\u591a\u6570\u65f6\u5019\u4f60\u4e0d\u9700\u8981\u8fd9\u6837\u505a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { bindActionCreators } from 'redux';\n// ...\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    dispatch,\n    ...bindActionCreators({ increment, decrement, reset }, dispatch),\n  };\n}\n")),(0,o.kt)("h2",{id:"\u5c06-mapdispatchtoprops-\u5b9a\u4e49\u4e3a\u5bf9\u8c61"},"\u5c06 ",(0,o.kt)("inlineCode",{parentName:"h2"},"mapDispatchToProps")," \u5b9a\u4e49\u4e3a\u5bf9\u8c61"),(0,o.kt)("p",null,"\u4f60\u5df2\u7ecf\u770b\u5230\u5728 React \u7ec4\u4ef6\u4e2d dispatch Redux actions \u7684\u8bbe\u7f6e\u9075\u5faa\u4e00\u4e2a\u975e\u5e38\u76f8\u4f3c\u7684\u8fc7\u7a0b\uff1a\u5b9a\u4e49\u4e00\u4e2a action creator\uff0c\u5c06\u5176\u5305\u88c5\u5728\u53e6\u4e00\u4e2a\u770b\u8d77\u6765\u50cf ",(0,o.kt)("inlineCode",{parentName:"p"},"(\u2026args) => dispatch(actionCreator(\u2026args))")," \u7684\u51fd\u6570\u4e2d\uff0c\u5e76\u5c06\u8be5\u5305\u88c5\u51fd\u6570\u4f5c\u4e3a props \u4f20\u9012\u7ed9\u4f60\u7684\u7ec4\u4ef6\u3002"),(0,o.kt)("p",null,"\u56e0\u4e3a\u8fd9\u5f88\u5e38\u89c1\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," \u652f\u6301 ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u53c2\u6570\u7684\u201c\u5bf9\u8c61\u7b80\u5199\u201d\u5f62\u5f0f\uff1a\u5982\u679c\u4f60\u4f20\u9012\u4e00\u4e2a\u5145\u6ee1 action creators \u7684\u5bf9\u8c61\u800c\u4e0d\u662f\u4e00\u4e2a\u51fd\u6570\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," \u5c06\u5728\u5185\u90e8\u81ea\u52a8\u4e3a\u4f60\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"bindActionCreators"),"\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6211\u4eec\u5efa\u8bae\u59cb\u7ec8\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"strong"},"mapDispatchToProps")," \u7684\u201c\u5bf9\u8c61\u7b80\u5199\u201d\u5f62\u5f0f\uff0c\u9664\u975e\u4f60\u6709\u7279\u5b9a\u539f\u56e0\u9700\u8981\u81ea\u5b9a\u4e49 dispatch \u884c\u4e3a\u3002")),(0,o.kt)("p",null,"\u6ce8\u610f\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"mapDispatchToProps")," \u5bf9\u8c61\u7684\u6bcf\u4e2a\u5b57\u6bb5\u90fd\u5047\u5b9a\u4e3a\u4e00\u4e2a action creator"),(0,o.kt)("li",{parentName:"ul"},"\u4f60\u7684\u7ec4\u4ef6\u5c06\u4e0d\u518d\u63a5\u6536 ",(0,o.kt)("inlineCode",{parentName:"li"},"dispatch")," \u4f5c\u4e3a prop")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// React Redux \u81ea\u52a8\u66ff\u4f60\u8fdb\u884c\u4e86\u8be5\u64cd\u4f5c:\n(dispatch) => bindActionCreators(mapDispatchToProps, dispatch);\n")),(0,o.kt)("p",null,"\u56e0\u6b64\uff0c",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u53ef\u4ee5\u7b80\u5316\u4e3a\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mapDispatchToProps = {\n  increment,\n  decrement,\n  reset,\n};\n")),(0,o.kt)("p",null,"\u7531\u4e8e\u53d8\u91cf\u7684\u5b9e\u9645\u540d\u79f0\u7531\u4f60\u51b3\u5b9a\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u7ed9\u5b83\u4e00\u4e2a\u540d\u79f0\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"actionCreators"),"\uff0c\u6216\u8005\u751a\u81f3\u5728\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," \u7684\u8c03\u7528\u4e2d\u5b9a\u4e49\u5185\u8054\u5bf9\u8c61\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { increment, decrement, reset } from './counterActions'\n\nconst actionCreators = {\n  increment,\n  decrement,\n  reset,\n}\n\nexport default connect(mapState, actionCreators)(Counter)\n\n// \u6216\u8005\nexport default connect(mapState, { increment, decrement, reset })(Counter)\n")),(0,o.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,o.kt)("h3",{id:"\u4e3a\u4ec0\u4e48\u6211\u7684\u7ec4\u4ef6\u6ca1\u6709\u63a5\u6536-dispatch"},"\u4e3a\u4ec0\u4e48\u6211\u7684\u7ec4\u4ef6\u6ca1\u6709\u63a5\u6536 ",(0,o.kt)("inlineCode",{parentName:"h3"},"dispatch"),"\uff1f"),(0,o.kt)("p",null,"\u540c\u6837\u5982"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"TypeError: this.props.dispatch is not a function\n")),(0,o.kt)("p",null,"\u8fd9\u662f\u5f53\u4f60\u5c1d\u8bd5\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"this.props.dispatch")," \u65f6\u53d1\u751f\u7684\u5e38\u89c1\u9519\u8bef\uff0c\u56e0\u4e3a ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u6ca1\u6709\u6ce8\u5165\u5230\u4f60\u7684\u7ec4\u4ef6\u4e2d\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," ",(0,o.kt)("em",{parentName:"p"},"\u4ec5\u5728")," \u4ee5\u4e0b\u60c5\u51b5\u4e0b\u88ab\u6ce8\u5165\u5230\u4f60\u7684\u7ec4\u4ef6\u4e2d\uff1a"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1. \u4f60\u672a\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"strong"},"mapDispatchToProps"))),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u53ea\u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch => ({ dispatch })"),"\u3002\u5982\u679c\u4f60\u672a\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps"),"\uff0c\u5219\u4f1a\u5982\u4e0a\u6240\u8ff0\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),"\u3002"),(0,o.kt)("p",null,"\u6362\u53e5\u8bdd\u8bf4\uff0c\u5982\u679c\u4f60\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// \u7ec4\u4ef6\u63a5\u6536 `dispatch`\nconnect(mapStateToProps /** \u6ca1\u6709\u7b2c\u4e8c\u4e2a\u53c2\u6570 */)(Component);\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2. \u4f60\u7684\u81ea\u5b9a\u4e49 ",(0,o.kt)("inlineCode",{parentName:"strong"},"mapDispatchToProps")," \u51fd\u6570\u8fd4\u56de\u660e\u786e\u5730\u5305\u542b ",(0,o.kt)("inlineCode",{parentName:"strong"},"dispatch"))),(0,o.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u63d0\u4f9b\u81ea\u5b9a\u4e49\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u51fd\u6570\u6765\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const mapDispatchToProps = (dispatch) => {\n  return {\n    increment: () => dispatch(increment()),\n    decrement: () => dispatch(decrement()),\n    reset: () => dispatch(reset()),\n    dispatch,\n  };\n};\n")),(0,o.kt)("p",null,"\u6216\u8005\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"bindActionCreators"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { bindActionCreators } from 'redux';\n\nfunction mapDispatchToProps(dispatch) {\n  return {\n    dispatch,\n    ...bindActionCreators({ increment, decrement, reset }, dispatch),\n  };\n}\n")),(0,o.kt)("p",null,"\u8bf7\u53c2\u9605 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux/issues/255"},"this error in action in Redux\u2019s GitHub issue #255"),"\u3002"),(0,o.kt)("p",null,"\u8fd9\u6709\u4e00\u4e2a\u5173\u4e8e\u5f53\u4f60\u6307\u5b9a ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u65f6\u662f\u5426\u4e3a\u4f60\u7684\u7ec4\u4ef6\u63d0\u4f9b ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u7684\u8ba8\u8bba (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/reduxjs/react-redux/issues/255#issuecomment-172089874"},"Dan Abramov\u2019s response to #255")," )\u3002\u4f60\u53ef\u4ee5\u9605\u8bfb\u5b83\u4eec\u4ee5\u8fdb\u4e00\u6b65\u4e86\u89e3\u5f53\u524d\u7684\u5b9e\u65bd\u610f\u56fe\u3002"),(0,o.kt)("h3",{id:"\u6211\u53ef\u4ee5\u5728-redux-\u4e2d\u4e0d\u5e26-mapstatetoprops-\u8fdb\u884c-mapdispatchtoprops-\u5417"},"\u6211\u53ef\u4ee5\u5728 Redux \u4e2d\u4e0d\u5e26 ",(0,o.kt)("inlineCode",{parentName:"h3"},"mapStateToProps")," \u8fdb\u884c ",(0,o.kt)("inlineCode",{parentName:"h3"},"mapDispatchToProps")," \u5417\uff1f"),(0,o.kt)("p",null,"\u662f\u7684\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u4f20\u9012 ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," \u6216 ",(0,o.kt)("inlineCode",{parentName:"p"},"null")," \u6765\u8df3\u8fc7\u7b2c\u4e00\u4e2a\u53c2\u6570\u3002\u4f60\u7684\u7ec4\u4ef6\u4e0d\u4f1a\u8ba2\u9605 store\uff0c\u4ecd\u7136\u4f1a\u6536\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"mapDispatchToProps")," \u5b9a\u4e49\u7684 dispatch props\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"connect(null, mapDispatchToProps)(MyComponent);\n")),(0,o.kt)("h3",{id:"\u6211\u80fd\u8c03\u7528-storedispatch-\u5417"},"\u6211\u80fd\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"h3"},"store.dispatch")," \u5417\uff1f"),(0,o.kt)("p",null,"\u8fd9\u662f\u5728 React \u7ec4\u4ef6\u4e2d\u76f4\u63a5\u4e0e store \u4ea4\u4e92\u662f\u4e00\u79cd\u53cd\u6a21\u5f0f\uff0c\u65e0\u8bba\u662f\u663e\u5f0f\u5bfc\u5165 store \u8fd8\u662f\u901a\u8fc7\u4e0a\u4e0b\u6587\u8bbf\u95ee\u5b83\uff08\u53c2\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://redux.js.org/faq/storesetup#can-or-should-i-create-multiple-stores-can-i-import-my-store-directly-and-use-it-in-components-myself"},"Redux FAQ entry on store setup")," \u4e86\u89e3\u66f4\u591a\u8be6\u60c5\uff09\u3002\u8ba9 React Redux \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"connect")," \u5904\u7406\u5bf9 store \u7684\u8bbf\u95ee\uff0c\u5e76\u4f7f\u7528\u5b83\u4f20\u9012\u7ed9 props \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dispatch")," \u6765 dispatch actions\u3002"),(0,o.kt)("h2",{id:"\u94fe\u63a5\u548c\u53c2\u8003"},"\u94fe\u63a5\u548c\u53c2\u8003"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u6559\u7a0b")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://daveceddia.com/redux-mapdispatchtoprops-object-form/"},"You Might Not Need the ",(0,o.kt)("inlineCode",{parentName:"a"},"mapDispatchToProps")," Function"))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u76f8\u5173\u6587\u6863")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/api/bindactioncreators"},"Redux Doc on ",(0,o.kt)("inlineCode",{parentName:"a"},"bindActionCreators")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Q&A")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/34458261/how-to-get-simple-dispatch-from-this-props-using-connect-w-redux"},"How to get simple dispatch from ",(0,o.kt)("inlineCode",{parentName:"a"},"this.props")," using connect with Redux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/react-redux/issues/255"},(0,o.kt)("inlineCode",{parentName:"a"},"this.props.dispatch")," is ",(0,o.kt)("inlineCode",{parentName:"a"},"undefined")," if using ",(0,o.kt)("inlineCode",{parentName:"a"},"mapDispatchToProps"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/reduxjs/redux/issues/916"},"Do not call ",(0,o.kt)("inlineCode",{parentName:"a"},"store.dispatch"),", call ",(0,o.kt)("inlineCode",{parentName:"a"},"this.props.dispatch")," injected by ",(0,o.kt)("inlineCode",{parentName:"a"},"connect")," instead")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://stackoverflow.com/questions/47657365/can-i-mapdispatchtoprops-without-mapstatetoprops-in-redux"},"Can I ",(0,o.kt)("inlineCode",{parentName:"a"},"mapDispatchToProps")," without ",(0,o.kt)("inlineCode",{parentName:"a"},"mapStateToProps")," in Redux?")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://redux.js.org/faq/reactredux"},"Redux Doc FAQ: React Redux"))))}m.isMDXComponent=!0}}]);