(this.webpackJsonpmesto_react=this.webpackJsonpmesto_react||[]).push([[0],{30:function(e,t,n){},37:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(20),i=n.n(s),o=n(10),r=(n(30),n(24)),l=n(2),u=n(3),d=c.a.createContext(),j=n(5),m=n(25),p=n(0),b=function(e){var t=e.component,n=Object(m.a)(e,["component"]);return Object(p.jsx)(u.b,{children:function(){return n.loggedIn?Object(p.jsx)(t,Object(j.a)({},n)):Object(p.jsx)(u.a,{to:"./sign-in"})}})},_=n(22),f=n(23),h=function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))},O=new(function(){function e(t){Object(_.a)(this,e),this.baseUrl=t.baseUrl,this.headers=t.headers}return Object(f.a)(e,[{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(h)}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(h)}},{key:"postCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify({name:e.name,link:e.link})}).then(h)}},{key:"setUserInfo",value:function(e){var t=e.name,n=e.about;return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify({name:t,about:n})}).then(h)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards/").concat(e),{method:"DELETE",headers:this.headers}).then(h)}},{key:"addLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(h)}},{key:"deleteLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(h)}},{key:"setUserAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify({avatar:e})}).then(h)}},{key:"changeLikeCardStatus",value:function(e,t){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:t?"PUT":"DELETE",headers:this.headers}).then(h)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-20",headers:{authorization:"3b3ba091-9f36-415d-9c11-8ad47d6b1eca","Content-Type":"application/json"}}),g="https://auth.nomoreparties.co",x=function(e){return e.ok?e.json():Promise.reject(e)},v=n.p+"static/media/button.d5d6f8af.svg",k=function(e){var t=e.card,n=Object(a.useContext)(d),c=t.owner._id===n._id,s=t.likes.some((function(e){return e._id===n._id})),i="card__btn-remove ".concat(c?"card__btn-remove_active":""),o="card__like-button ".concat(s?"card__like-button_active":"");return Object(p.jsxs)("figure",{className:"card__item",children:[Object(p.jsx)("button",{className:i,type:"button",onClick:function(){e.onCardDelete(e.card)}}),Object(p.jsx)("img",{className:"card__photo",src:t.link,alt:t.name,onClick:function(){e.onCardClick(e.card)}}),Object(p.jsxs)("figcaption",{className:"card__caption",children:[Object(p.jsx)("h2",{className:"card__title",children:t.name}),Object(p.jsxs)("div",{className:"card__like",children:[Object(p.jsx)("button",{className:o,type:"button",onClick:function(){e.onCardLike(e.card)}}),Object(p.jsx)("h2",{className:"card__like-counter",children:t.likes.length})]})]})]})},N=n.p+"static/media/logo.6129e9de.svg";var C=function(e){var t=Object(a.useState)(!1),n=Object(l.a)(t,2),c=n[0],s=n[1];return Object(p.jsxs)(p.Fragment,{children:[c&&Object(p.jsxs)("div",{className:"header__open-menu",children:[Object(p.jsx)("h2",{className:"header__user-email header__user-email_menu",children:e.userEmail}),Object(p.jsx)(o.b,{className:"header__link header__link_menu ",onClick:e.onLogOut,to:"/sign-in",children:e.linkTitle})]}),Object(p.jsxs)("header",{className:"header page__header",children:[Object(p.jsx)("div",{className:"header__container",children:Object(p.jsx)("img",{className:"logo",src:N,alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f \u041c\u0435\u0441\u0442\u043e"})}),e.loggedIn?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("div",{className:"header__nav-icon",onClick:function(){c?(s(!1),document.querySelector(".header__nav-icon-item").classList.toggle("header__nav-icon-item_open")):(s(!0),document.querySelector(".header__nav-icon-item").classList.toggle("header__nav-icon-item_open"))},children:Object(p.jsx)("span",{className:"header__nav-icon-item"})}),Object(p.jsxs)("div",{className:"header__navbar",children:[Object(p.jsx)("h2",{className:"header__user-email",children:e.userEmail}),Object(p.jsx)(o.b,{className:"header__link header__link_desktop",onClick:e.onLogOut,to:"/sign-in",children:e.linkTitle})]})]}):Object(p.jsx)(o.b,{className:"header__link",onClick:e.onLogOut,to:e.linkRoute,children:e.linkTitle})]})]})};var y=function(e){var t=Object(a.useContext)(d);return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{loggedIn:e.loggedIn,userEmail:e.userEmail,linkTitle:"\u0412\u044b\u0439\u0442\u0438",linkRoute:"/sign-in",onLogOut:e.onLogOut}),Object(p.jsxs)("main",{className:"content",children:[Object(p.jsxs)("section",{className:"profile page__profile",children:[Object(p.jsxs)("div",{className:"profile__image",children:[Object(p.jsx)("img",{className:"profile__avatar",src:t.avatar,alt:"\u0410\u0432\u0430\u0442\u0430\u0440"}),Object(p.jsx)("button",{className:"profile__edit-avatar",type:"button",onClick:e.onEditAvatar})]}),Object(p.jsxs)("div",{className:"profile__info",children:[Object(p.jsx)("h1",{className:"profile__name",id:"name",children:t.name}),Object(p.jsx)("button",{className:"profile__edit-button",type:"button",onClick:e.onEditProfile}),Object(p.jsx)("p",{className:"profile__job",children:t.about})]}),Object(p.jsx)("button",{className:"profile__add-button",type:"button",onClick:e.onAddPlace,children:Object(p.jsx)("img",{className:"button button_add",src:v,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0434\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})})]}),Object(p.jsx)("section",{className:"cards page__cards",children:e.cards.map((function(t){return Object(p.jsx)(k,{onCardClick:e.onCardClick,card:t,onCardLike:e.onCardLike,onCardDelete:e.onCardDelete},t._id)}))})]})]})};var S=function(){return Object(p.jsx)("footer",{className:"footer page__footer",children:Object(p.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",(new Date).getFullYear()," Mesto Russia"]})})};var L=function(e){var t=e.card;return Object(p.jsx)("div",{className:"popup popup_image ".concat(t?"popup_opened":""),onClick:e.onClose,children:Object(p.jsxs)("figure",{className:"popup__container popup__container_image",onClick:function(e){return e.stopPropagation()},children:[Object(p.jsx)("button",{className:"popup__button-close popup__button-close_image",type:"button",children:Object(p.jsx)("img",{className:"button button_close",src:v,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u044c",onClick:e.onClose})}),Object(p.jsx)("img",{className:"popup__photo",src:t?"".concat(t.link):"#",alt:t?"".concat(t.name):""}),Object(p.jsx)("figcaption",{className:"popup__caption",children:t?"".concat(t.name):""})]})})},w=n(9);var E=function(e){return Object(p.jsx)("div",{className:"popup popup_".concat(e.name," ").concat(e.isOpen&&"popup_opened"),onClick:e.onClose,children:Object(p.jsxs)("div",{className:"popup__container popup__container_".concat(e.name),onClick:function(e){return e.stopPropagation()},children:[Object(p.jsx)("button",{className:"popup__button-close",type:"button",onClick:e.onClose,children:Object(p.jsx)("img",{className:"button button_close",src:v,alt:"\u041a\u043d\u043e\u043f\u043a\u0430 \u0437\u0430\u043a\u0440\u044b\u0442\u044c"})}),Object(p.jsx)("h2",{className:"popup__title popup__title_".concat(e.name),children:e.title}),Object(p.jsx)("form",{className:"form form_".concat(e.name),name:"form",noValidate:!0,onSubmit:e.onSubmit,children:e.children})]})})};var U=function(e){var t=Object(a.useState)({name:"",description:""}),n=Object(l.a)(t,2),c=n[0],s=n[1],i=Object(a.useContext)(d);function o(e){s(Object(j.a)(Object(j.a)({},c),{},Object(w.a)({},e.target.name,e.target.value)))}return Object(a.useEffect)((function(){s({name:i.name,description:i.about})}),[i]),Object(p.jsxs)(E,{name:"profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:c.name,about:c.description})},children:[Object(p.jsx)("label",{className:"form__field",children:Object(p.jsx)("input",{className:"form__input form__input_type_name",id:"name-input",type:"text",name:"name",required:!0,minLength:"2",maxLength:"40",value:c.name,onChange:o})}),Object(p.jsxs)("label",{className:"form__field",children:[Object(p.jsx)("input",{className:"form__input form__input_type_job",value:c.description,onChange:o,id:"job-input",type:"text",name:"description",required:!0,minLength:"2",maxLength:"200"}),Object(p.jsx)("span",{className:"popup__error",id:"job-input-error"})]}),Object(p.jsx)("button",{className:"form__button-submit",type:"submit",children:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var T=function(e){var t=Object(a.useRef)();return Object(a.useEffect)((function(){e.isOpen&&(t.current.value="")}),[e.isOpen]),Object(p.jsxs)(E,{name:"avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u0435 \u0430\u0432\u0430\u0442\u0430\u0440",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value}),n.target.reset()},children:[Object(p.jsxs)("label",{className:"form__field",children:[Object(p.jsx)("input",{className:"form__input form__input_type_link",id:"link-photo-input",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0444\u043e\u0442\u043e",required:!0,ref:t}),Object(p.jsx)("span",{className:"popup__error",id:"link-photo-input-error"})]}),Object(p.jsx)("button",{className:"form__button-submit",type:"submit",children:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})]})};var I=function(e){var t=Object(a.useState)({title:"",link:""}),n=Object(l.a)(t,2),c=n[0],s=n[1];function i(e){s(Object(j.a)(Object(j.a)({},c),{},Object(w.a)({},e.target.name,e.target.value)))}return Object(a.useEffect)((function(){e.isOpen&&s({title:"",link:""})}),[e.isOpen]),Object(p.jsxs)(E,{name:"cards",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",isOpen:e.isOpen,onClose:e.onClose,onSubmit:function(t){t.preventDefault(),e.onAddPlace({name:c.title,link:c.link})},children:[Object(p.jsxs)("label",{className:"form__field",children:[Object(p.jsx)("input",{className:"form__input form__input_cards form__input_type_title",id:"title-input",type:"text",name:"title",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:c.title,onChange:i,required:!0,minLength:"2",maxLength:"30"}),Object(p.jsx)("span",{className:"popup__error",id:"title-input-error"})]}),Object(p.jsxs)("label",{className:"form__field",children:[Object(p.jsx)("input",{className:"form__input form__input_cards form__input_type_link",id:"link-input",type:"url",name:"link",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",value:c.link,onChange:i,required:!0}),Object(p.jsx)("span",{className:"popup__error",id:"link-input-error"})]}),Object(p.jsx)("button",{className:"form__button-submit form__button-submit_cards",type:"submit",children:e.isLoading?"\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0435":"\u0421\u043e\u0437\u0434\u0430\u0442\u044c"})]})};var P=function(e){return Object(p.jsx)(E,{name:"remove-card",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b?",isOpen:e.isOpen,onClose:e.onClose,children:Object(p.jsx)("button",{className:"popup__button-confirm",type:"button",onClick:function(t){t.preventDefault(),e.onClick(e.card)},children:e.isLoading?"\u0423\u0434\u0430\u043b\u0435\u043d\u0438\u0435":"\u0414\u0430"})})},D=n.p+"static/media/union.1b6082f8.svg",A=n.p+"static/media/img-fail.df8eddf6.svg";var F=function(e){return Object(p.jsx)(E,{name:"infotooltip",isOpen:e.isOpen,onClose:e.onClose,children:e.isSignUp?Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{className:"popup__img-info",src:D,alt:"succes-img"}),Object(p.jsx)("p",{className:"popup__caption popup__caption_infotooltip",children:"\u0412\u044b \u0443\u0441\u043f\u0435\u0448\u043d\u043e \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043b\u0438\u0441\u044c!"})]}):e.isSignUp&&e.loggedIn?void 0:Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)("img",{className:"popup__img-info",src:A,alt:"fail-img"}),Object(p.jsx)("p",{className:"popup__caption popup__caption_infotooltip",children:"\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a! \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u0435\u0449\u0451 \u0440\u0430\u0437."})]})})};var R=function(e){var t=Object(a.useState)({password:"",email:""}),n=Object(l.a)(t,2),c=n[0],s=n[1];function i(e){var t=e.target,n=t.name,a=t.value;s(Object(j.a)(Object(j.a)({},c),{},Object(w.a)({},n,a)))}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{linkTitle:"\u0412\u043e\u0439\u0442\u0438",linkRoute:"/sign-in"}),Object(p.jsx)("div",{className:"sign page__login",children:Object(p.jsxs)("div",{className:"sign__container",children:[Object(p.jsx)("h2",{className:"sign__title",children:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f"}),Object(p.jsxs)("form",{className:"form form_sign",onSubmit:function(t){var n=c.password,a=c.email;t.preventDefault(),e.onRegister({password:n,email:a})},noValidate:!0,children:[Object(p.jsx)("label",{className:"form__field",children:Object(p.jsx)("input",{className:"form__input form__input_sign",id:"email",name:"email",type:"email",placeholder:"Email",value:c.email,onChange:i,autoComplete:"off"})}),Object(p.jsx)("label",{className:"form__field",children:Object(p.jsx)("input",{className:"form__input form__input_sign",id:"password",name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",value:c.password,onChange:i,autoComplete:"off"})}),Object(p.jsx)("button",{className:"form__button-submit form__button-submit_sign",type:"submit",onClick:e.onInfoTooltip,children:"\u0417\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u0442\u044c\u0441\u044f"})]}),Object(p.jsxs)("p",{className:"sign__signin-link",children:["\u0423\u0436\u0435 \u0437\u0430\u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0438\u0440\u043e\u0432\u0430\u043d\u044b?\xa0",Object(p.jsx)(o.b,{to:"/sign-in",className:"sign__signin-link",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})]})};var q=function(e){var t=Object(a.useState)({password:"",email:""}),n=Object(l.a)(t,2),c=n[0],s=n[1];function i(e){var t=e.target,n=t.name,a=t.value;s(Object(j.a)(Object(j.a)({},c),{},Object(w.a)({},n,a)))}return Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(C,{linkTitle:"\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f",linkRoute:"/sign-up"}),Object(p.jsx)("div",{className:"sign page__login",children:Object(p.jsxs)("div",{className:"sign__container",children:[Object(p.jsx)("h2",{className:"sign__title",children:"\u0412\u0445\u043e\u0434"}),Object(p.jsxs)("form",{className:"form form_sign",onSubmit:function(t){t.preventDefault(),e.onLogin(c)},noValidate:!0,children:[Object(p.jsx)("label",{className:"form__field",children:Object(p.jsx)("input",{id:"email",name:"email",type:"email",placeholder:"Email",autoComplete:"off",className:"form__input form__input_sign",value:c.email,onChange:i})}),Object(p.jsx)("label",{className:"form__field",children:Object(p.jsx)("input",{id:"password",name:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c",type:"password",autoComplete:"off",className:"form__input form__input_sign",value:c.password,onChange:i})}),Object(p.jsx)("button",{className:"form__button-submit form__button-submit_sign",type:"submit",children:"\u0412\u043e\u0439\u0442\u0438"})]})]})})]})};var J=Object(u.h)((function(){var e=Object(a.useState)({name:"",about:"",avatar:""}),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(!1),i=Object(l.a)(s,2),o=i[0],j=i[1],m=Object(a.useState)(!1),_=Object(l.a)(m,2),f=_[0],h=_[1],v=Object(a.useState)(!1),k=Object(l.a)(v,2),N=k[0],C=k[1],w=Object(a.useState)(!1),E=Object(l.a)(w,2),D=E[0],A=E[1],J=Object(a.useState)(!1),B=Object(l.a)(J,2),V=B[0],z=B[1],H=Object(a.useState)(""),M=Object(l.a)(H,2),G=M[0],Y=M[1],K=Object(a.useState)(""),Q=Object(l.a)(K,2),W=Q[0],X=Q[1],Z=Object(a.useState)([]),$=Object(l.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)(!1),ae=Object(l.a)(ne,2),ce=ae[0],se=ae[1],ie=Object(a.useState)(""),oe=Object(l.a)(ie,2),re=oe[0],le=oe[1],ue=Object(a.useState)(!1),de=Object(l.a)(ue,2),je=de[0],me=de[1],pe=Object(a.useState)(!1),be=Object(l.a)(pe,2),_e=be[0],fe=be[1],he=Object(u.g)();Object(a.useEffect)((function(){Oe()}),[]),Object(a.useEffect)((function(){_e&&he.push("/")}),[_e]);var Oe=function(){if(localStorage.getItem("jwt")){var e=localStorage.getItem("jwt");(t=e,fetch("".concat(g,"/users/me"),{method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(t)}}).then(x)).then((function(e){var t=e.data;t.email&&(fe(!0),le(t.email))})).catch((function(e){400===e.status&&console.log("\u0422\u043e\u043a\u0435\u043d \u043d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0434\u0430\u043d \u043d\u0435 \u0432 \u0442\u043e\u043c \u0444\u043e\u0440\u043c\u0430\u0442\u0435"),401===e.status&&console.log("\u041f\u0435\u0440\u0435\u0434\u0430\u043d\u043d\u044b\u0439 \u0442\u043e\u043a\u0435\u043d \u043d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u0435\u043d")}))}var t};function ge(){j(!1),C(!1),h(!1),A(!1),z(!1),Y()}return Object(a.useEffect)((function(){Promise.all([O.getUserInfo(),O.getInitialCards()]).then((function(e){var t=Object(l.a)(e,2),n=t[0],a=t[1];c(n),te(a)})).catch((function(e){return console.log(e)}))}),[]),Object(a.useEffect)((function(){function e(e){"Escape"===e.key&&ge()}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[]),Object(p.jsxs)(d.Provider,{value:n,children:[Object(p.jsx)("div",{className:"page",children:Object(p.jsxs)("div",{className:"page__container",children:[Object(p.jsxs)(u.d,{children:[Object(p.jsx)(b,{exact:!0,path:"/",loggedIn:_e,component:y,userEmail:re,onEditProfile:function(){j(!0)},onAddPlace:function(){h(!0)},onEditAvatar:function(){C(!0)},onCardClick:function(e){Y(e)},cards:ee,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===n._id}));O.changeLikeCardStatus(e._id,!t).then((function(t){te((function(n){return n.map((function(n){return n._id===e._id?t:n}))}))})).catch((function(e){return console.log(e)}))},onCardDelete:function(e){A(!0),X(e)},onLogOut:function(){fe(!1),localStorage.removeItem("jwt"),he.push("/sign-in"),le("")}}),Object(p.jsx)(u.b,{path:"/sign-in",children:Object(p.jsx)(q,{onLogin:function(e){var t=e.password,n=e.email;return function(e,t){return fetch("".concat(g,"/signin"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:e,email:t})}).then(x)}(t,n).then((function(e){if(e.token)return fe(!0),localStorage.setItem("jwt",e.token),le(n),void he.push("/")})).catch((function(e){z(!0),400===e.status&&console.log("\u041d\u0435 \u043f\u0435\u0440\u0435\u0434\u0430\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439"),401===e.status&&console.log("\u041f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u044c \u0441 email \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d")}))}})}),Object(p.jsx)(u.b,{path:"/sign-up",children:Object(p.jsx)(R,{onRegister:function(e){return function(e){var t=e.password,n=e.email;return fetch("".concat(g,"/signup"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({password:t,email:n})}).then(x)}({password:e.password,email:e.email}).then((function(e){return me(!0),he.push("/sign-in"),e})).catch((function(e){me(!1),400===e.status&&console.log("\u041d\u0435\u043a\u043e\u0440\u0440\u0435\u043a\u0442\u043d\u043e \u0437\u0430\u043f\u043e\u043b\u043d\u0435\u043d\u043e \u043e\u0434\u043d\u043e \u0438\u0437 \u043f\u043e\u043b\u0435\u0439")}))},onInfoTooltip:function(){z(!0)}})}),Object(p.jsx)(u.b,{children:_e?Object(p.jsx)(u.a,{to:"/"}):Object(p.jsx)(u.a,{to:"/sign-in"})})]}),_e&&Object(p.jsx)(S,{})]})}),Object(p.jsx)(L,{card:G,onClose:ge}),Object(p.jsx)(P,{isOpen:D,onClose:ge,onClick:function(){se(!0),O.deleteCard(W._id).then((function(){te((function(e){return e.filter((function(e){return e!==W}))})),ge()})).catch((function(e){return console.log(e)})).finally((function(){return se(!1)}))},isLoading:ce}),Object(p.jsx)(U,{isOpen:o,onClose:ge,onUpdateUser:function(e){se(!0),O.setUserInfo(e).then((function(e){c(e),ge()})).catch((function(e){return console.log(e)})).finally((function(){return se(!1)}))},isLoading:ce}),Object(p.jsx)(T,{isOpen:N,onClose:ge,onUpdateAvatar:function(e){se(!0),O.setUserAvatar(e.avatar).then((function(e){c(e),ge()})).catch((function(e){return console.log(e)})).finally((function(){return se(!1)}))},isLoading:ce}),Object(p.jsx)(I,{isOpen:f,onClose:ge,onAddPlace:function(e){se(!0),O.postCard(e).then((function(e){te([e].concat(Object(r.a)(ee))),ge()})).catch((function(e){return console.log(e)})).finally((function(){return se(!1)}))},isLoading:ce}),Object(p.jsx)(F,{isOpen:V,onClose:ge,isSignUp:je,loggedIn:_e})]})})),B=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,38)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),s(e),i(e)}))};i.a.render(Object(p.jsx)(c.a.StrictMode,{children:Object(p.jsx)(o.a,{children:Object(p.jsx)(J,{})})}),document.getElementById("root")),B()}},[[37,1,2]]]);
//# sourceMappingURL=main.91c5c252.chunk.js.map