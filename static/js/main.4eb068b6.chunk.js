(this.webpackJsonpgallery=this.webpackJsonpgallery||[]).push([[0],{25:function(e,t,n){},30:function(e,t,n){},47:function(e,t,n){e.exports=n(76)},53:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);n(30),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(19),r=n(45),c=n(11),o={images:[],imageUrl:[],imageComments:[],newPostText:""},i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:o,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_IMAGES_DATA":return Object(c.a)(Object(c.a)({},e),{},{images:t.images});case"GET_IMAGES_ITEM":return Object(c.a)(Object(c.a)({},e),{},{imageUrl:t.imageUrl,imageComments:t.imageComments});case"UPDATE_NEW_POST_TEXT":return Object(c.a)(Object(c.a)({},e),{},{newPostText:t.comment});case"ADD__NEW_POST_TEXT":var n={id:156,text:e.newPostText,date:1578054737927};return Object(c.a)(Object(c.a)({},e),{},{imageComments:[].concat(Object(r.a)(e.imageComments),[n]),newPostText:""});default:return e}},l=Object(a.b)({gallery:i}),s=Object(a.c)(l),m=n(0),u=n.n(m),d=n(21),h=n.n(d),g=(n(53),n(18)),f=n(12),p=n(13),b=n(15),v=n(14),E=n(5),y=n(17),O=n(23),_=n(44),j=n(46),w=(n(25),function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(f.a)(this,n),a=t.call(this,e),O.get("https://boiling-refuge-66454.herokuapp.com/images"+a.props.match.url).then((function(t){t.data?e.setGalleryItem(t.data.url,t.data.comments):alert("error")})).catch((function(e){return alert(e)})),a}return Object(p.a)(n,[{key:"render",value:function(){var e=this.props.imageUrl,t=this.props.imageComments,n=this.props.newPostText,a=u.a.createRef(),r=this.props.updateComment,c=this.props.addComment;return console.log(n),u.a.createElement("div",{className:"detailContainer"},u.a.createElement("img",{className:"detailContainer__img",src:e,alt:"img"}),u.a.createElement("div",{className:"form"},u.a.createElement(_.a.Control,{className:"form__input",ref:a,onChange:function(){var e=a.current.value;r(e)},value:this.props.newPostText,rows:"3"}),u.a.createElement(j.a,{className:"form__button",onClick:c},"\u043e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c")),u.a.createElement("div",{className:"comments"},t.map((function(e){return u.a.createElement("div",{className:"comments__item"},e.text)}))))}}]),n}(m.Component)),C=Object(y.b)((function(e){return{imageUrl:e.gallery.imageUrl,imageComments:e.gallery.imageComments,newPostText:e.gallery.newPostText}}),(function(e){return{setGalleryItem:function(t,n){e(function(e,t){return{type:"GET_IMAGES_ITEM",imageUrl:e,imageComments:t}}(t,n))},updateComment:function(t){e(function(e){return{type:"UPDATE_NEW_POST_TEXT",comment:e}}(t))},addComment:function(t){e(function(e){return{type:"ADD__NEW_POST_TEXT",comment:e}}(t))}}}))(w),T=n(16),k=[{name:"\u0411\u043e\u043b\u044c\u0448\u0430\u044f \u043f\u043b\u0438\u0442\u043a\u0430",id:1},{name:"\u0421\u0440\u0435\u0434\u043d\u044f\u044f \u043f\u043b\u0438\u0442\u043a\u0430",id:2},{name:"\u0421\u0440\u0435\u0434\u043d\u0438\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",id:3}],S=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={showMenu:!1,currentStyle:"BIG"},a.showMenu=a.showMenu.bind(Object(T.a)(a)),a.closeMenu=a.closeMenu.bind(Object(T.a)(a)),a}return Object(p.a)(n,[{key:"showMenu",value:function(e){var t=this;e.preventDefault(),this.setState({showMenu:!0},(function(){document.addEventListener("click",t.closeMenu)}))}},{key:"closeMenu",value:function(){var e=this;this.setState({showMenu:!1},(function(){document.removeEventListener("click",e.closeMenu)}))}},{key:"handleClick",value:function(e,t){this.props.gridId(e),this.setState({currentStyle:t})}},{key:"render",value:function(){var e=this;return u.a.createElement("div",{className:"dropdown"},u.a.createElement("div",{className:"dropdown__title",onClick:this.showMenu},"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0440\u0430\u0437\u043c\u0435\u0440 \u043f\u043b\u0438\u0442\u043a\u0438"),this.state.showMenu?u.a.createElement("div",{className:"dropdown__menu"},k.map((function(t){return u.a.createElement("button",{className:"dropdown__button",key:t.id,onClick:function(){return e.handleClick(t.id,t.name)}},t.name)}))):null)}}]),n}(m.Component),G=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).state={gridStyle:"bigGalleryContainer"},a.setGridStyle=a.setGridStyle.bind(Object(T.a)(a)),O.get("https://boiling-refuge-66454.herokuapp.com/images").then((function(e){e.data?a.props.setGallery(e.data):alert("error")})).catch((function(e){return alert(e)})),a}return Object(p.a)(n,[{key:"setGridStyle",value:function(e){switch(e){case 1:this.setState({gridStyle:"bigGalleryContainer"});break;case 2:this.setState({gridStyle:"middleGalleryContainer"});break;case 3:this.setState({gridStyle:"smallGalleryContainer"});break;default:return}}},{key:"render",value:function(){var e=Object.values(this.props.images);return u.a.createElement(u.a.Fragment,null,u.a.createElement(S,{gridId:this.setGridStyle}),u.a.createElement("div",{className:this.state.gridStyle},e.map((function(e){return u.a.createElement(g.b,{key:e.id,to:"/".concat(e.id)},u.a.createElement("img",{className:"galleryItem",alt:"allImages",src:e.url}))}))))}}]),n}(m.Component),M=Object(y.b)((function(e){return{images:e.gallery.images}}),(function(e){return{setGallery:function(t){e(function(e){return{type:"GET_IMAGES_DATA",images:e}}(t))}}}))(G),N=function(e){Object(b.a)(n,e);var t=Object(v.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(p.a)(n,[{key:"render",value:function(){return u.a.createElement(E.c,null,u.a.createElement(E.a,{exact:!0,path:"/",component:M}),u.a.createElement(E.a,{exact:!0,path:"/:imageId",component:C}))}}]),n}(m.Component);var I=function(e){return u.a.createElement(g.a,null,u.a.createElement(N,null))};h.a.render(u.a.createElement(y.a,{store:s},u.a.createElement(I,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[47,1,2]]]);
//# sourceMappingURL=main.4eb068b6.chunk.js.map