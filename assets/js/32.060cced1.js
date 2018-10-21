(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{222:function(t,s,a){"use strict";a.r(s);var n=a(0),o=Object(n.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"对象字面量的惰性初始化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#对象字面量的惰性初始化","aria-hidden":"true"}},[t._v("#")]),t._v(" 对象字面量的惰性初始化")]),t._v(" "),a("p",[t._v("在 JavaScript 中，像这样用字面量初始化对象的写法十分常见：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bas "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("但在 TypeScript 中，同样的写法就会报错：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error: Property 'bar' does not exist on type '{}'")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bas "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// Error: Property 'bas' does not exist on type '{}'")]),t._v("\n")])])]),a("p",[t._v("这是因为 TypeScript 在解析 "),a("code",[t._v("let foo = {}")]),t._v(" 这段赋值语句时，会进行“类型推断”：它会认为等号左边 "),a("code",[t._v("foo")]),t._v(" 的类型即为等号右边 "),a("code",[t._v("{}")]),t._v(" 的类型。由于 "),a("code",[t._v("{}")]),t._v(" 本没有任何属性，因此，像上面那样给 "),a("code",[t._v("foo")]),t._v(" 添加属性时就会报错。")]),t._v(" "),a("h2",{attrs:{id:"最好的解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#最好的解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 最好的解决方案")]),t._v(" "),a("p",[t._v("最"),a("em",[t._v("好")]),t._v("的解决方案就是在为变量赋值的同时，添加属性及其对应的值：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  bas"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("这种写法也比较容易通过其他人或工具的代码审核，对后期维护也是有利的。")]),t._v(" "),a("blockquote",[a("p",[t._v("以下的快速解决方案采用"),a("em",[t._v("惰性")]),t._v("的思路，本质上是"),a("em",[t._v("在初始化变量时忘了添加属性")]),t._v("的做法。")])]),t._v(" "),a("h2",{attrs:{id:"快速解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 快速解决方案")]),t._v(" "),a("p",[t._v("如果你的 JavaScript 项目很大，那么在迁移到 TypeScript 的时候，上面的做法可能会比较麻烦。此时，你可以利用 TypeScript 的“类型断言”机制让代码顺利通过编译：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("any")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bas "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"折中的解决方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#折中的解决方案","aria-hidden":"true"}},[t._v("#")]),t._v(" 折中的解决方案")]),t._v(" "),a("p",[t._v("当然，总是用 "),a("code",[t._v("any")]),t._v(" 肯定是不好的，因为这样做其实是在想办法绕开 TypeScript 的类型检查。那么，折中的方案就是创建 "),a("code",[t._v("interface")]),t._v("，这样的好处在于：")]),t._v(" "),a("ul",[a("li",[t._v("方便撰写类型文档")]),t._v(" "),a("li",[t._v("TypeScript 会参与类型检查，确保类型安全")])]),t._v(" "),a("p",[t._v("请看以下的示例：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  bas"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bas "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("使用 "),a("code",[t._v("interface")]),t._v(" 可以确保类型安全，比如这种情况：")]),t._v(" "),a("div",{staticClass:"language-ts extra-class"},[a("pre",{pre:!0,attrs:{class:"language-ts"}},[a("code",[a("span",{attrs:{class:"token keyword"}},[t._v("interface")]),t._v(" "),a("span",{attrs:{class:"token class-name"}},[t._v("Foo")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  bar"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("number")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  bas"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token builtin"}},[t._v("string")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" foo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("as")]),t._v(" Foo"),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("123")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bas "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello World'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 然后我们尝试这样做：")]),t._v("\nfoo"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bar "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Hello Stranger'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{attrs:{class:"token comment"}},[t._v("// 错误：你可能把 `bas` 写成了 `bar`，不能为数字类型的属性赋值字符串")]),t._v("\n")])])])])}],!1,null,null,null);o.options.__file="lazyObjectLiteralInitialization.md";s.default=o.exports}}]);