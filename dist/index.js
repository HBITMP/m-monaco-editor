!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}("undefined"!=typeof self?self:this,function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="lVK7")}({Rv59:function(e,t,n){var o;"undefined"!=typeof self&&self,o=function(){return function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s="lVK7")}({lVK7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={},r=0;function i(e){if(!e.url)throw new Error("options.url is not undefined.");var t=(e.type||"SCRIPT").toLocaleUpperCase(),n=e.library;return new window.Promise(function(i,u){if(!e.force&&o[e.url]){var a=o[e.url];if(void 0!==a.status)return a.status?i(a):u(a.error),!1;var d=a.onload,s=a.onerror;return a.onload=function(){d&&d(a.target),i(a)},a.onerror=function(e){s&&s(e),u(e)},!1}var l=window.document.createElement(t||"SCRIPT"),f=o[e.url]={};f.url=e.url,f.el=l,f.type=t,l.addEventListener("load",function(){f.target=window[n],f.status=!0,i(f),f.onload&&"function"==typeof f.onload&&f.onload(f)},!1),l.addEventListener("error",function(e){f.status=!1,f.error=e,u(e),f.onerror&&"function"==typeof f.onerror&&f.onerror(e)},!1),"SCRIPT"===t?l.src=e.url:"LINK"===t&&(l.href=e.url),l.setAttribute("id","loader-"+r++),window.document.head.appendChild(l)})}n.d(t,"default",function(){return u}),n.d(t,"MLoader",function(){return u}),n.d(t,"loader",function(){return i});var u={name:"m-loader",props:{url:String,type:{type:String,default:"script"},library:String,force:{type:Boolean,default:!1}},mounted:function(){var e=this,t=this.url,n=this.type,o=this.library,r=this.force;this.$emit("onstart"),i({url:t,type:n,library:o,force:r}).then(function(t){e.$emit("onload",t.target,t)}).catch(function(t){e.$emit("onerror",t)})},render:function(){return null},install:function(e){e.component(u.name,u),e.prototype.$loader=i}}}})},e.exports=o()},"VU/8":function(e,t){e.exports=function(e,t,n,o,r,i){var u,a=e=e||{},d=typeof e.default;"object"!==d&&"function"!==d||(u=e,a=e.default);var s,l="function"==typeof a?a.options:a;if(t&&(l.render=t.render,l.staticRenderFns=t.staticRenderFns,l._compiled=!0),n&&(l.functional=!0),r&&(l._scopeId=r),i?(s=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),o&&o.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},l._ssrRegister=s):o&&(s=o),s){var f=l.functional,c=f?l.render:l.beforeCreate;f?(l._injectStyles=s,l.render=function(e,t){return s.call(t),c(e,t)}):l.beforeCreate=c?[].concat(c,s):[s]}return{esModule:u,exports:a,options:l}}},lVK7:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n("Rv59"),r={name:"MMonacoEditor",props:{value:String,theme:String,mode:String,cdnUrl:{type:String,default:"https://cdn.bootcss.com/monaco-editor/0.13.1/min/vs"},requireConfig:Object,syncInput:Boolean,readOnly:Boolean,fontSize:Number,renderLineHighlight:{type:String,default:"all"},showMinimap:{type:Boolean,default:!0}},data:function(){return{editorDom:null,editor:null,monaco:null,buffer:""}},computed:{loaderUrl:function(){var e=this.requireConfig;return(e&&e.paths&&e.paths.vs?e.paths.vs:this.cdnUrl).replace(/\/$/,"")}},watch:{theme:function(){this.setTheme()},mode:function(){this.setMode()},value:function(e,t){this.buffer.length===e.length&&this.buffer===e||(this.buffer=e,this.editor.setValue(e))},readOnly:function(e){this.editor.updateOptions({readOnly:e})},fontSize:function(e){this.editor.updateOptions({fontSize:e})},renderLineHighlight:function(e){this.editor.updateOptions({renderLineHighlight:e})},showMinimap:function(e){this.editor.updateOptions({minimap:{enabled:e}})}},methods:{initEditor:function(){var e=this;Object(o.loader)({url:this.loaderUrl+"/loader.js",library:"require"}).then(function(t){t.target.config(e.requireConfig||{paths:{vs:e.loaderUrl}}),t.target(["vs/editor/editor.main"],function(){e.monaco=window.monaco,e.editor=window.monaco.editor.create(e.editorDom,{value:e.value,language:e.mode,readOnly:e.readOnly,fontSize:e.fontSize,renderLineHighlight:e.renderLineHighlight,minimap:{enabled:e.showMinimap}}),e.$emit("init",e.editor,e.editorDom,window.monaco),e.setTheme(),e.setMode(),e.listen()})})},setTheme:function(){this.theme&&this.monaco.editor.setTheme(this.theme)},setMode:function(){if(this.mode){var e=this.editor?this.editor.getModel():null,t=this.monaco.editor.createModel(this.value,this.mode);this.editor.setModel(t),e&&e.dispose()}},listen:function(){var e=this;this.editor.onDidBlurEditor(function(){e.$emit("blur")}),this.editor.onDidFocusEditor(function(){e.$emit("focus")}),this.editor.onDidLayoutChange(function(){e.$emit("layout-change")}),this.syncInput&&this.editor.onDidChangeModelContent(function(){e.buffer=e.editor.getValue(),e.$emit("input",e.buffer)})},getValue:function(){return this.editor.getValue()}},mounted:function(){this.editorDom=this.$refs["monaco-editor"],this.initEditor()}},i={render:function(){var e=this.$createElement;return(this._self._c||e)("div",{ref:"monaco-editor",staticClass:"m-monaco-editor"})},staticRenderFns:[]};var u=n("VU/8")(r,i,!1,function(e){n("mJK1")},null,null).exports;n.d(t,"default",function(){return u}),n.d(t,"MMonacoEditor",function(){return u}),u.install=function(e){e.component(u.name,u)}},mJK1:function(e,t){}})});