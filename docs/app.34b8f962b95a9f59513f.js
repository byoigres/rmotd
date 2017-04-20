webpackJsonp([3],{"./src/Messages.js":function(e,t,n){"use strict";var s=n("./node_modules/react-intl/locale-data/en.js"),a=n.n(s),o=n("./node_modules/react-intl/locale-data/es.js"),r=n.n(o),c=n("./node_modules/react-intl/lib/index.es.js"),i=n("./src/locales/en.json"),u=n.n(i),l=n("./src/locales/es.json"),d=n.n(l),p=n("./src/markdown/what-is-this.en.md"),m=n.n(p),f=n("./src/markdown/what-is-this.es.md"),j=n.n(f),b=n("./src/markdown/about.en.md"),v=n.n(b),h=n("./src/markdown/about.es.md"),y=n.n(h);u.a["content.what-is-this"]=m.a,u.a["content.about"]=v.a,d.a["content.what-is-this"]=j.a,d.a["content.about"]=y.a,n.i(c.addLocaleData)(a.a),n.i(c.addLocaleData)(r.a);var x={en:u.a,es:d.a};t.a=x},"./src/Routes.js":function(e,t,n){"use strict";var s=n("./node_modules/react/react.js"),a=n.n(s),o=n("./node_modules/react-router-dom/es/index.js"),r=n("./src/containers/ScrollToTop/index.js"),c=n("./src/containers/MainLayout/index.js"),i=n("./src/containers/AsyncComponent/index.js");t.a=a.a.createElement(r.a,null,a.a.createElement(o.Switch,null,a.a.createElement(o.Route,{exact:!0,path:"/",component:n.i(i.a)(function(){return n.e(0).then(n.bind(null,"./src/pages/Home.js")).then(function(e){return e.default})})}),a.a.createElement(c.a,null,a.a.createElement(o.Route,{exact:!0,path:"/what-is-this",component:n.i(i.a)(function(){return n.e(1).then(n.bind(null,"./src/pages/WhatIsThis.js")).then(function(e){return e.default})})}),a.a.createElement(o.Route,{exact:!0,path:"/about",component:n.i(i.a)(function(){return n.e(2).then(n.bind(null,"./src/pages/About.js")).then(function(e){return e.default})})}))))},"./src/components/Footer/Footer.js":function(e,t,n){"use strict";var s=n("./node_modules/react/react.js"),a=n.n(s),o=n("./node_modules/react-intl/lib/index.es.js"),r=n("./src/components/Footer/styles.css"),c=n.n(r),i=n("./src/components/LanguageSelector/index.js"),u=function(){return a.a.createElement("div",{className:c.a.footer},a.a.createElement("div",{className:c.a["footer-container"]},a.a.createElement(o.FormattedHTMLMessage,{id:"app.footer.text"}),a.a.createElement(i.a,null)))};u.displayName="Footer",t.a=u},"./src/components/Footer/index.js":function(e,t,n){"use strict";var s=n("./src/components/Footer/Footer.js");n.d(t,"a",function(){return s.a})},"./src/components/Footer/styles.css":function(e,t){e.exports={footer:"_2r78udqe","footer-container":"hs0ndIsW"}},"./src/components/LanguageSelector/LanguageSelector.js":function(e,t,n){"use strict";var s=n("./node_modules/react/react.js"),a=n.n(s),o=n("./src/components/LanguageSelector/styles.css"),r=n.n(o),c=function(e){localStorage.setItem("__minutes_display_locale__",e),window.location.reload()},i=function(){return c("en")},u=function(){return c("es")},l=function(){return a.a.createElement("div",{className:r.a["language-selector"]},a.a.createElement("span",{onClick:u},"Español")," | ",a.a.createElement("span",{onClick:i},"Ingles"))};l.displayName="LanguageSelector",t.a=l},"./src/components/LanguageSelector/index.js":function(e,t,n){"use strict";var s=n("./src/components/LanguageSelector/LanguageSelector.js");n.d(t,"a",function(){return s.a})},"./src/components/LanguageSelector/styles.css":function(e,t){e.exports={"language-selector":"_1bsnIXNk"}},"./src/components/Navbar/Navbar.js":function(e,t,n){"use strict";var s=n("./node_modules/react/react.js"),a=n.n(s),o=n("./node_modules/react-router-dom/es/index.js"),r=n("./node_modules/react-intl/lib/index.es.js"),c=n("./src/components/Navbar/styles.css"),i=n.n(c),u=function(e){var t=e.brandText,n=e.isTransparent;return a.a.createElement("div",{className:i.a.navbar+" "+(n?i.a["navbar-transparent"]:"")},a.a.createElement("div",{className:i.a["navbar-container"]},a.a.createElement("div",{className:i.a["navbar-brand"]},a.a.createElement(o.Link,{to:"/"},t)),a.a.createElement("div",{className:i.a["navbar-list"]},a.a.createElement(o.Link,{to:"/what-is-this",className:i.a["navbar-item"]},a.a.createElement(r.FormattedMessage,{id:"app.menu.what-is-this"})),a.a.createElement(o.Link,{to:"/about",className:i.a["navbar-item"]},a.a.createElement(r.FormattedMessage,{id:"app.menu.about"})))))};u.displayName="Navbar",t.a=u},"./src/components/Navbar/index.js":function(e,t,n){"use strict";var s=n("./src/components/Navbar/Navbar.js");n.d(t,"a",function(){return s.a})},"./src/components/Navbar/styles.css":function(e,t){e.exports={navbar:"_29MW1nOE","navbar-transparent":"_1DVTRkHB","navbar-container":"_2uv2UN06","navbar-brand":"DqQMcCL6","navbar-list":"_2q4-FjFt","navbar-item":"_2sKSVaLI","navbar-link":"_1jUW6pDB"}},"./src/constants/index.js":function(e,t,n){"use strict";var s=n("./src/constants/time.js");n.d(t,"a",function(){return s.a})},"./src/constants/time.js":function(e,t,n){"use strict";n.d(t,"a",function(){return s});var s="UPDATE_TIME"},"./src/containers/App/App.js":function(e,t,n){"use strict";var s=n("./node_modules/react/react.js"),a=n.n(s),o=n("./node_modules/react-router-dom/es/index.js"),r=n("./node_modules/react-redux/es/index.js"),c=n("./node_modules/react-intl/lib/index.es.js"),i=n("./src/containers/App/styles.css"),u=(n.n(i),function(e){return a.a.createElement(r.b,{store:e.store},a.a.createElement(c.IntlProvider,{locale:navigator.language,messages:e.messages[localStorage.getItem("__minutes_display_locale__")||"en"]},a.a.createElement(o.BrowserRouter,{basename:"/minutes"},e.routes)))});t.a=u},"./src/containers/App/index.js":function(e,t,n){"use strict";var s=n("./src/containers/App/App.js");n.d(t,"a",function(){return s.a})},"./src/containers/App/styles.css":function(e,t){},"./src/containers/AsyncComponent/AsyncComponent.js":function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("./node_modules/react/react.js"),c=n.n(r),i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var s in n)Object.prototype.hasOwnProperty.call(n,s)&&(e[s]=n[s])}return e};t.a=function(e,t){return function(n){function r(e){s(this,r);var t=a(this,n.call(this,e));return t.Component=null,t.state={Component:r.Component},t}return o(r,n),r.prototype.componentWillMount=function(){var t=this;this.state.Component||e().then(function(e){r.Component=e,t.setState({Component:e})})},r.prototype.render=function(){return this.state.Component?c.a.createElement(this.state.Component,i({},this.props,t)):null},r}(r.Component)}},"./src/containers/AsyncComponent/index.js":function(e,t,n){"use strict";var s=n("./src/containers/AsyncComponent/AsyncComponent.js");n.d(t,"a",function(){return s.a})},"./src/containers/MainLayout/MainLayout.js":function(e,t,n){"use strict";var s=n("./node_modules/react/react.js"),a=n.n(s),o=n("./node_modules/react-intl/lib/index.es.js"),r=n("./src/containers/MainLayout/styles.css"),c=n.n(r),i=n("./src/components/Navbar/index.js"),u=n("./src/components/Footer/index.js"),l=function(e){var t=e.children;return a.a.createElement("div",{className:c.a["main-layout"]},a.a.createElement(i.a,{brandText:a.a.createElement(o.FormattedMessage,{id:"app.brand-text"})}),a.a.createElement("div",{className:c.a.container},t),a.a.createElement(u.a,null))};t.a=l},"./src/containers/MainLayout/index.js":function(e,t,n){"use strict";var s=n("./src/containers/MainLayout/MainLayout.js");n.d(t,"a",function(){return s.a})},"./src/containers/MainLayout/styles.css":function(e,t){e.exports={"main-layout":"_48K-x7LV",container:"_2_FunQyU"}},"./src/containers/ScrollToTop/ScrollToTop.js":function(e,t,n){"use strict";function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function o(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var r=n("./node_modules/react/react.js"),c=n.n(r),i=n("./node_modules/react-router-dom/es/index.js"),u=n("./src/containers/ScrollToTop/styles.css"),l=n.n(u),d=function(e){function t(){return s(this,t),a(this,e.apply(this,arguments))}return o(t,e),t.prototype.componentDidUpdate=function(e){this.props.location!==e.location&&window.scrollTo(0,0)},t.prototype.render=function(){return c.a.createElement("div",{className:l.a["scroll-to-top"]},this.props.children)},t}(r.Component);t.a=n.i(i.withRouter)(d)},"./src/containers/ScrollToTop/index.js":function(e,t,n){"use strict";var s=n("./src/containers/ScrollToTop/ScrollToTop.js");n.d(t,"a",function(){return s.a})},"./src/containers/ScrollToTop/styles.css":function(e,t){e.exports={"scroll-to-top":"_2b_u5lvR"}},"./src/index.js":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n("./node_modules/react/react.js"),a=n.n(s),o=n("./node_modules/react-dom/index.js"),r=(n.n(o),n("./src/store.js")),c=n("./src/Messages.js"),i=n("./src/Routes.js"),u=n("./src/containers/App/index.js"),l=n.i(r.a)();n.i(o.render)(a.a.createElement(u.a,{store:l,routes:i.a,messages:c.a}),document.body)},"./src/locales/en.json":function(e,t){e.exports={"app.title":"Remaining minutes of the day","app.brand-text":"Minutes","app.menu.what-is-this":"What is this?","app.menu.about":"About","app.footer.text":'Made with ❤️ by <a href="http://twitter.com/byoigres">@byoigres</a>'}},"./src/locales/es.json":function(e,t){e.exports={"app.title":"Minutos restantes del dia","app.brand-text":"Minutos","app.menu.what-is-this":"¿Qué es esto?","app.menu.about":"Acerca de","app.footer.text":'Hecho con ❤️ por <a href="http://twitter.com/byoigres">@byoigres</a>'}},"./src/reducers/index.js":function(e,t,n){"use strict";function s(){return n.i(o.d)({routing:a.a,time:r.a})}var a=n("./node_modules/react-router-redux/es/index.js"),o=n("./node_modules/redux/es/index.js"),r=n("./src/reducers/time.js");t.a=s},"./src/reducers/time.js":function(e,t,n){"use strict";function s(){var e=new Date;return{remainingMinutes:1440-(60*e.getHours()+e.getMinutes()),remainingSeconds:e.getSeconds()}}var a=n("./src/constants/index.js"),o=s();t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o;return arguments[1].type===a.a?Object.assign({},e,s()):e}},"./src/store.js":function(e,t,n){"use strict";var s=n("./node_modules/redux/es/index.js"),a=n("./src/reducers/index.js"),o=n.i(s.b)(window.devToolsExtension?window.devToolsExtension():function(e){return e})(s.c),r=function(e){return o(n.i(a.a)(e),e)};t.a=r}},["./src/index.js"]);