(this.webpackJsonpflesan=this.webpackJsonpflesan||[]).push([[0],{137:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(21),o=t.n(c),s=t(54),i=t.n(s),m=(t(60),t(56)),r=t.n(m),_=t(80),u=t(81),d=t(15),E=t(16),h=t(27),f=t(18),v=t(17),p=(t(70),t(6)),b=t(50),N=t(19),g=t(20),x=t(35),C=t(30),O=t(4),j=t.n(O),w=t(38);function k(){var e=Object(n.useState)(!1),a=Object(b.a)(e,2),t=a[0],c=a[1],o=function(){return c(!1)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("button",{onClick:function(){return c(!0)}},l.a.createElement(j.a,{icon:"tune"})),l.a.createElement(w.a,{className:"agregar-item__filtros",show:t,onHide:o},l.a.createElement(w.a.Header,{closeButton:!0},l.a.createElement(j.a,{icon:"search"}),l.a.createElement("input",{className:"agregar-item__filtros__input",name:"buscarValor",type:"text",placeholder:"Buscar"})),l.a.createElement(w.a.Body,null,l.a.createElement("div",{className:"agregar-item__filtros__categorias flex"},l.a.createElement("button",{className:"shadow",onClick:o},"Acero"),l.a.createElement("button",{className:"shadow",onClick:o},"Alambre"),l.a.createElement("button",{className:"shadow",onClick:o},"Azulejos"),l.a.createElement("button",{className:"shadow",onClick:o},"Cemento"),l.a.createElement("button",{className:"shadow",onClick:o},"Acero"),l.a.createElement("button",{className:"shadow",onClick:o},"Alambre"),l.a.createElement("button",{className:"shadow",onClick:o},"Azulejos"),l.a.createElement("button",{className:"shadow",onClick:o},"Cemento"),l.a.createElement("button",{className:"shadow",onClick:o},"Acero"),l.a.createElement("button",{className:"shadow",onClick:o},"Alambre"),l.a.createElement("button",{className:"shadow",onClick:o},"Azulejos"),l.a.createElement("button",{className:"shadow",onClick:o},"Cemento"),l.a.createElement("button",{className:"shadow",onClick:o},"Acero"),l.a.createElement("button",{className:"shadow",onClick:o},"Alambre"),l.a.createElement("button",{className:"shadow",onClick:o},"Azulejos"),l.a.createElement("button",{className:"shadow",onClick:o},"Cemento")))))}function y(e){return e.buscando?l.a.createElement(A,null):l.a.createElement(I,null)}function S(){var e=Object(p.f)();return l.a.createElement("button",{className:"item flex",onClick:function(){e.push("/detalleItem")}},l.a.createElement("div",{className:"item__contenedor-elementos"},l.a.createElement("p",{className:"item__nombre"},"PORCELANATO MURO RUSTICO 60x60 TIPO 5"),l.a.createElement("div",{className:"item__elementos flex"},l.a.createElement("div",{className:"item__elementos__elemento"},l.a.createElement("div",{className:"item__elementos__titulo"},"Cant. disponible"),l.a.createElement("div",{className:"item__elementos__contenido"},"324 paquete")),l.a.createElement("div",{className:"item__elementos__elemento"},l.a.createElement("div",{className:"item__elementos__titulo"},"C\xf3digo"),l.a.createElement("div",{className:"item__elementos__contenido"},"248764")),l.a.createElement("div",{className:"item__elementos__elemento"},l.a.createElement("div",{className:"item__elementos__titulo"},"Grupo"),l.a.createElement("div",{className:"item__elementos__contenido"},"PISOS/TECHOS/REVEST.")))),l.a.createElement(j.a,{icon:"keyboard_arrow_right"}))}function A(){return l.a.createElement("div",null,l.a.createElement(S,null),l.a.createElement(S,null))}function I(){return l.a.createElement("div",{className:"agregar-item__contenedor__vacio"},l.a.createElement("p",null,"Ingresa una descripci\xf3n en la b\xfasqueda para encontrar items"))}function V(){var e=Object(p.f)();return l.a.createElement("button",{type:"button",className:"flex",onClick:function(){e.push("/generarSolicitud")}},l.a.createElement(j.a,{icon:"arrow_back"}))}var T=function(e){Object(f.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={buscarValue:"",buscando:!1},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n}return Object(E.a)(t,[{key:"handleChange",value:function(e){this.setState({buscarValue:e.target.value}),e.target.value?this.setState({buscando:!0}):this.setState({buscando:!1})}},{key:"render",value:function(){return l.a.createElement("div",{className:"fondo-app"},l.a.createElement("div",{className:"fondo-app__app-bar flex"},l.a.createElement(V,null),l.a.createElement("p",{className:"t-center"},"Agregar item")),l.a.createElement("div",{className:"agregar-item flex"},l.a.createElement("div",{className:"agregar-item__contenedor shadow flex flex-column"},l.a.createElement("div",{className:"agregar-item__contenedor__barra-buscar flex"},l.a.createElement("div",{className:"flex"},l.a.createElement(j.a,{icon:"search"}),l.a.createElement("input",{className:"agregar-item__contenedor__barra-buscar__input",name:"buscarValor",type:"text",value:this.state.buscarValue,placeholder:"Buscar",onChange:this.handleChange})),l.a.createElement(k,null)),l.a.createElement(y,{buscando:this.state.buscando}))))}}]),t}(l.a.Component);function P(){var e=Object(p.f)();return l.a.createElement("button",{type:"button",className:"flex",onClick:function(){e.push("/main")}},l.a.createElement(j.a,{icon:"arrow_back"}))}function R(){Object(p.f)();return l.a.createElement("button",{type:"button",className:"boton-general flex shadow",onClick:function(){}},"Enviar")}function B(){var e=Object(p.f)();return l.a.createElement("button",{type:"button",className:"generar-solicitud__lista-items__agregar-item flex shadow",onClick:function(){e.push("/agregarItem")}},l.a.createElement("p",null,"Agregar item"),l.a.createElement(j.a,{icon:"add"}))}var z=function(e){Object(f.a)(t,e);var a=Object(v.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"fondo-app"},l.a.createElement("div",{className:"fondo-app__app-bar flex"},l.a.createElement(P,null),l.a.createElement("p",{className:"t-center"},"Generando solicitud")),l.a.createElement("div",{className:"generar-solicitud flex"},l.a.createElement("div",{className:"generar-solicitud__persona-retiro shadow flex"},l.a.createElement(j.a,{icon:"person"}),l.a.createElement("p",null,"Persona retiro")),l.a.createElement("div",{className:"generar-solicitud__lista-items shadow flex flex-column"},l.a.createElement(B,null)),l.a.createElement(R,null)))}}]),t}(l.a.Component);function H(){var e=Object(p.f)();return l.a.createElement("button",{type:"button",className:"boton-general flex shadow",onClick:function(){e.push("/generarSolicitud")}},"Crear solicitud")}function U(){var e=Object(n.useState)("home"),a=Object(b.a)(e,2),t=a[0],c=a[1];return l.a.createElement(x.a,{activeKey:t,onSelect:function(e){return c(e)}},l.a.createElement(C.a,{eventKey:"home",title:"Solicitudes actuales"},l.a.createElement("div",{className:"home__solicitudes__contenido shadow"},l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud shadow flex"},l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__icono fondo-amarillo flex"},l.a.createElement(j.a,{icon:"assignment"})),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__texto"},l.a.createElement("div",{className:"flex"},l.a.createElement(j.a,{icon:"today"}),l.a.createElement("p",null,"12/03 - 12:30")),l.a.createElement("div",{className:"flex"},l.a.createElement(N.a,{icon:g.b}),l.a.createElement("p",null,"37456")))),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__flecha flex"},l.a.createElement(j.a,{icon:"chevron_right"}))),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud shadow flex"},l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__icono fondo-verde flex"},l.a.createElement(j.a,{icon:"assignment_turned_in"})),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__texto"},l.a.createElement("div",{className:"flex"},l.a.createElement(j.a,{icon:"today"}),l.a.createElement("p",null,"12/03 - 12:30")),l.a.createElement("div",{className:"flex"},l.a.createElement(N.a,{icon:g.b}),l.a.createElement("p",null,"37456")))),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__flecha flex"},l.a.createElement(j.a,{icon:"chevron_right"}))),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud shadow flex"},l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__icono fondo-rojo flex"},l.a.createElement(j.a,{icon:"assignment_late"})),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__texto"},l.a.createElement("div",{className:"flex"},l.a.createElement(j.a,{icon:"today"}),l.a.createElement("p",null,"12/03 - 12:30")),l.a.createElement("div",{className:"flex"},l.a.createElement(N.a,{icon:g.b}),l.a.createElement("p",null,"37456")))),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__flecha flex"},l.a.createElement(j.a,{icon:"chevron_right"}))))),l.a.createElement(C.a,{eventKey:"profile",title:"Solicitudes pasadas"},l.a.createElement("div",{className:"home__solicitudes__contenido shadow"},l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud solicitud-inactiva shadow flex"},l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__icono fondo-gris flex"},l.a.createElement(j.a,{icon:"assignment_turned_in"})),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__texto"},l.a.createElement("div",{className:"flex"},l.a.createElement(j.a,{icon:"today"}),l.a.createElement("p",null,"12/03 - 12:30")),l.a.createElement("div",{className:"flex"},l.a.createElement(N.a,{icon:g.b}),l.a.createElement("p",null,"37456")))),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__flecha flex"},l.a.createElement(j.a,{icon:"chevron_right"}))),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud shadow flex"},l.a.createElement("div",{className:"flex"},l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__icono fondo-rojo flex"},l.a.createElement(j.a,{icon:"assignment_late"})),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__texto"},l.a.createElement("div",{className:"flex"},l.a.createElement(j.a,{icon:"today"}),l.a.createElement("p",null,"12/03 - 12:30")),l.a.createElement("div",{className:"flex"},l.a.createElement(N.a,{icon:g.b}),l.a.createElement("p",null,"37456")))),l.a.createElement("div",{className:"home__solicitudes__contenido__solicitud__flecha flex"},l.a.createElement(j.a,{icon:"chevron_right"}))))))}var q=function(e){Object(f.a)(t,e);var a=Object(v.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"fondo-app"},l.a.createElement("div",{className:"home flex"},l.a.createElement("div",{className:"home__centro-gestion shadow flex"},l.a.createElement("div",{className:"home__centro-gestion__titulo flex"},l.a.createElement(N.a,{icon:g.a}),l.a.createElement("p",null,"Paseo Colina")),l.a.createElement("div",{className:"home__centro-gestion__boton shadow"},l.a.createElement("p",null,"Cambiar centro de gestion"))),l.a.createElement("div",{className:"home__solicitudes flex"},l.a.createElement(U,null)),l.a.createElement(H,null)))}}]),t}(l.a.Component);function D(){var e=Object(p.f)();return l.a.createElement("button",{className:"item flex shadow",onClick:function(){e.push("/detalleItem")}},l.a.createElement("div",{className:"item__contenedor-elementos"},l.a.createElement("p",{className:"item__nombre"},"PORCELANATO MURO RUSTICO 60x60 TIPO 5"),l.a.createElement("div",{className:"item__elementos flex"},l.a.createElement("div",{className:"item__elementos__elemento"},l.a.createElement("div",{className:"item__elementos__titulo"},"Cant. disponible"),l.a.createElement("div",{className:"item__elementos__contenido"},"324 paquete")),l.a.createElement("div",{className:"item__elementos__elemento"},l.a.createElement("div",{className:"item__elementos__titulo"},"C\xf3digo"),l.a.createElement("div",{className:"item__elementos__contenido"},"248764")),l.a.createElement("div",{className:"item__elementos__elemento"},l.a.createElement("div",{className:"item__elementos__titulo"},"Grupo"),l.a.createElement("div",{className:"item__elementos__contenido"},"PISOS/TECHOS/REVEST.")))))}function G(){var e=Object(p.f)();return l.a.createElement("button",{type:"button",className:"flex shadow",onClick:function(){e.push("/agregarItem")}},l.a.createElement(j.a,{icon:"arrow_back"}))}function K(){Object(p.f)();return l.a.createElement("button",{type:"button",className:"boton-general flex shadow",onClick:function(){}},"Agregar")}var L=function(e){Object(f.a)(t,e);var a=Object(v.a)(t);function t(){return Object(d.a)(this,t),a.apply(this,arguments)}return Object(E.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"fondo-app"},l.a.createElement("div",{className:"fondo-app__app-bar flex"},l.a.createElement(G,null),l.a.createElement("p",{className:"t-center"},"Detalle Item")),l.a.createElement("div",{className:"detalle-item__contenedor flex"},l.a.createElement("div",{className:"detalle-item__contenedor__detalle"},l.a.createElement(D,null),l.a.createElement("div",{className:"detalle-item__contenedor__detalle__inputs"},l.a.createElement("input",{type:"text",placeholder:"Cant. Solicitada"}),l.a.createElement("input",{type:"text",placeholder:"Destino"}),l.a.createElement("input",{type:"text",placeholder:"Comentario"}))),l.a.createElement(K,null)))}}]),t}(l.a.Component);function J(){return l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:F}),l.a.createElement(p.a,{exact:!0,path:"/main",component:q}),l.a.createElement(p.a,{exact:!0,path:"/generarSolicitud",component:z}),l.a.createElement(p.a,{exact:!0,path:"/agregarItem",component:T}),l.a.createElement(p.a,{exact:!0,path:"/detalleItem",component:L}))}function M(e){var a=Object(p.f)();return l.a.createElement("button",{type:"button",onClick:function(){console.log(e.name+e.pass),a.push("/main")}},"Login")}var F=function(e){Object(f.a)(t,e);var a=Object(v.a)(t);function t(e){var n;return Object(d.a)(this,t),(n=a.call(this,e)).state={nameValue:"",passValue:""},n.handleChange=n.handleChange.bind(Object(h.a)(n)),n.handleSubmit=n.handleSubmit.bind(Object(h.a)(n)),n}return Object(E.a)(t,[{key:"getData",value:function(){console.log("hola")}},{key:"handleChange",value:function(e){this.setState(Object(u.a)({},e.target.name,e.target.value))}},{key:"handleSubmit",value:function(){var e=Object(_.a)(r.a.mark((function e(a){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}()},{key:"render",value:function(){return l.a.createElement("div",{className:"fondo-app-login flex"},l.a.createElement("div",null,l.a.createElement("img",{src:i.a})),l.a.createElement("form",{className:"flex",onSubmit:this.handleSubmit},l.a.createElement("label",null,l.a.createElement("input",{className:"input",name:"nameValue",type:"text",value:this.state.nameValue,placeholder:"Nombre usuario",onChange:this.handleChange})),l.a.createElement("label",null,l.a.createElement("input",{className:"input",name:"passValue",type:"password",value:this.state.passValue,placeholder:"Clave",onChange:this.handleChange}))),l.a.createElement(M,{name:this.state.nameValue,pass:this.state.passValue}))}}]),t}(l.a.Component),Q=(t(136),t(26));o.a.render(l.a.createElement(Q.a,null,l.a.createElement(J,null)),document.getElementById("root"))},54:function(e,a,t){e.exports=t.p+"static/media/logo.2f0d6923.png"},70:function(e,a,t){},84:function(e,a,t){e.exports=t(137)}},[[84,1,2]]]);
//# sourceMappingURL=main.bcde690d.chunk.js.map