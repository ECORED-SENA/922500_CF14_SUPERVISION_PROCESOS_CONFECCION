(function(e){function a(a){for(var o,i,c=a[0],s=a[1],l=a[2],d=0,u=[];d<c.length;d++)i=c[d],Object.prototype.hasOwnProperty.call(t,i)&&t[i]&&u.push(t[i][0]),t[i]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(e[o]=s[o]);f&&f(a);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,a=0;a<r.length;a++){for(var n=r[a],o=!0,i=1;i<n.length;i++){var c=n[i];0!==t[c]&&(o=!1)}o&&(r.splice(a--,1),e=s(s.s=n[0]))}return e}var o={},i={app:0},t={app:0},r=[];function c(e){return s.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"115791fe","chunk-0206bfa0":"775100f0","chunk-0c047e41":"10a877a8","chunk-13a6037e":"bcc7d6b0","chunk-18f95272":"a10ef121","chunk-25b302c8":"2776ebc6","chunk-26fc7596":"0acf1706","chunk-2c06842c":"5b349a5b","chunk-2d0c5615":"153e183c","chunk-2d0e96ec":"8832b8d3","chunk-2d208d90":"c8ac44c9","chunk-2d21d0e2":"c74a93e4","chunk-2d22c123":"2c592acc","chunk-2d2747e2":"7c208a8f","chunk-2e80bb9a":"f8cc6e39","chunk-319206de":"f9fea504","chunk-32334cb6":"fb68214c","chunk-36769079":"b95a5b01","chunk-3c57cd7b":"96f54a3a","chunk-4cdd78c0":"0c114b9e","chunk-4f2d402a":"83a1e52e","chunk-515a8379":"0060d8c0","chunk-53ccb27e":"fa7695c8","chunk-55d286b8":"9c96ec2f","chunk-59974754":"882d5f7a","chunk-60cbc06b":"efcf7df2","chunk-659152b8":"9551a041","chunk-6e1e538a":"a70717f5","chunk-766a929b":"eeac831a","chunk-c796899c":"33020636","chunk-e8a7823a":"35e71e00","chunk-f2df7d2c":"5f0e605f","chunk-fde47172":"b39b3b59",comple:"af88d512",creditos:"da370ff7",glosario:"fdb0c686",intro:"47a4cff3",referencias:"4982ea99",sintesis:"d28b6b7f",tema1:"7c897279",tema2:"674fbd34",tema3:"6cd0af77"}[e]+".js"}function s(a){if(o[a])return o[a].exports;var n=o[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var a=[],n={"chunk-0c047e41":1,"chunk-25b302c8":1,"chunk-26fc7596":1,"chunk-2d2747e2":1,"chunk-32334cb6":1,"chunk-3c57cd7b":1,"chunk-4f2d402a":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-60cbc06b":1,"chunk-6e1e538a":1,"chunk-766a929b":1,"chunk-f2df7d2c":1,comple:1,creditos:1,glosario:1,referencias:1};i[e]?a.push(i[e]):0!==i[e]&&n[e]&&a.push(i[e]=new Promise((function(a,n){for(var o="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",sintesis:"sintesis",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-0c047e41":"3babef71","chunk-13a6037e":"31d6cfe0","chunk-18f95272":"31d6cfe0","chunk-25b302c8":"3babef71","chunk-26fc7596":"3babef71","chunk-2c06842c":"31d6cfe0","chunk-2d0c5615":"31d6cfe0","chunk-2d0e96ec":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2d2747e2":"3babef71","chunk-2e80bb9a":"31d6cfe0","chunk-319206de":"31d6cfe0","chunk-32334cb6":"3babef71","chunk-36769079":"31d6cfe0","chunk-3c57cd7b":"3babef71","chunk-4cdd78c0":"31d6cfe0","chunk-4f2d402a":"3babef71","chunk-515a8379":"a7d78563","chunk-53ccb27e":"31d6cfe0","chunk-55d286b8":"31d6cfe0","chunk-59974754":"a0d98ef3","chunk-60cbc06b":"09438581","chunk-659152b8":"31d6cfe0","chunk-6e1e538a":"3ba0a060","chunk-766a929b":"14bc26b9","chunk-c796899c":"31d6cfe0","chunk-e8a7823a":"31d6cfe0","chunk-f2df7d2c":"3babef71","chunk-fde47172":"31d6cfe0",comple:"f10af2f6",creditos:"ea1f919c",glosario:"d40fc2e4",intro:"31d6cfe0",referencias:"14ee5166",sintesis:"31d6cfe0",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",t=s.p+o,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===o||d===t))return a()}var u=document.getElementsByTagName("style");for(c=0;c<u.length;c++){l=u[c],d=l.getAttribute("data-href");if(d===o||d===t)return a()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=a,f.onerror=function(a){var o=a&&a.target&&a.target.src||t,r=new Error("Loading CSS chunk "+e+" failed.\n("+o+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=o,delete i[e],f.parentNode.removeChild(f),n(r)},f.href=t;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){i[e]=0})));var o=t[e];if(0!==o)if(o)a.push(o[2]);else{var r=new Promise((function(a,n){o=t[e]=[a,n]}));a.push(o[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=c(e);var u=new Error;l=function(a){d.onerror=d.onload=null,clearTimeout(f);var n=t[e];if(0!==n){if(n){var o=a&&("load"===a.type?"missing":a.type),i=a&&a.target&&a.target.src;u.message="Loading chunk "+e+" failed.\n("+o+": "+i+")",u.name="ChunkLoadError",u.type=o,u.request=i,n[1](u)}t[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(a)},s.m=e,s.c=o,s.d=function(e,a,n){s.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,a){if(1&a&&(e=s(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var o in e)s.d(n,o,function(a){return e[a]}.bind(null,o));return n},s.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(a,"a",a),a},s.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},s.p="",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=a,l=l.slice();for(var u=0;u<l.length;u++)a(l[u]);var f=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,a,n){e.exports=n("56d7")},"52e5":function(e,a,n){e.exports=n.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,n){"use strict";n.r(a);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("68f3"),i=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("div",{staticClass:"app",attrs:{id:"app"}},[n("Header"),n("div",{staticClass:"contenedor-principal"},[n("AsideMenu"),n("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[n("router-view")],1)],1),n("BarraAvance"),n("Accesibilidad")],1)},t=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,s=n("2877"),l=Object(s["a"])(c,i,t,!1,null,null,null),d=l.exports,u=(n("d3b7"),n("3ca3"),n("ddb0"),n("b0c0"),n("2b0e")),f=n("8c4f"),p=n("ae58"),m=n("7e58");u["a"].use(f["a"]);var b=new f["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return n.e("intro").then(n.bind(null,"5167"))}},{path:"/curso",name:"curso",component:m["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return n.e("tema1").then(n.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return n.e("tema2").then(n.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return n.e("tema3").then(n.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return n.e("actividad").then(n.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return n.e("glosario").then(n.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return n.e("comple").then(n.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return n.e("referencias").then(n.bind(null,"64ef"))}},{path:"/sintesis",name:"sintesis",component:function(){return n.e("sintesis").then(n.bind(null,"15a3"))}},{path:"/creditos",name:"creditos",component:function(){return n.e("creditos").then(n.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var n={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?n:new Promise((function(e){setTimeout((function(){e(n)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=n("1c2c"),v=(n("a3a0"),{global:{componenteFormativo:"Textiles básicos",descripcionCurso:"Los textiles llevan consigo estándares y procesos de calidad que se requieren para poder llegar a la manufactura de prendas, por lo anterior este componente lo llevará a la comprensión sobre textiles básicos y su uso dentro del sector de la moda.",imagenBannerPrincipal:n("65fa"),fondoBannerPrincipal:n("ce7c"),imagenesDecorativasBanner:[{clases:["banner-principal-decorativo-1","d-none","d-lg-block"],imagen:n("71f8")},{clases:["banner-principal-decorativo-2"],imagen:n("8f04")},{clases:["banner-principal-decorativo-3"],imagen:n("7d72")},{clases:["banner-principal-decorativo-4"],imagen:n("f53d")}]},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info-circle",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",numero:"1",titulo:"Fibras textiles",desarrolloContenidos:!0,subMenu:[{numero:"1.1",titulo:"Clasificación de las fibras",hash:"t_1_1"},{numero:"1.2",titulo:"Hilos e Hilatura",hash:"t_1_2"},{numero:"1.3",titulo:"Titulación y unidades de medida de los hilos",hash:"t_1_3"}]},{nombreRuta:"tema2",numero:"2",titulo:"Los tejidos",desarrolloContenidos:!0,subMenu:[{numero:"2.1",titulo:"Clasificación de los tejidos",hash:"t_2_1"},{numero:"2.2",titulo:"Defecto de las telas",hash:"t_2_2"}]},{nombreRuta:"tema3",numero:"3",titulo:"Análisis de laboratorio y fichas técnicas",desarrolloContenidos:!0}],subMenu:[{icono:"fas fa-sitemap",titulo:"Síntesis",nombreRuta:"sintesis",desarrolloContenidos:!0},{nombreRuta:"actividad",icono:"far fa-question-circle",titulo:"Actividad didáctica",desarrolloContenidos:!0},{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-file-pdf",titulo:"Descargar PDF",download:"downloads/CF14_922500_DU.zip"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},complementario:[{tema:"Clasificación de las fibras",referencia:"Planeta Ranks. (2017). Ropa inteligente hecha con células de bacterias. [video]. Youtube. ",tipo:"Video YouTube",link:"https://youtu.be/kOqWiMMoTFc"},{tema:"Clasificación de las fibras",referencia:"SENA (2021) Clasificación de las fibras textiles. [video]. Youtube. ",tipo:"Video YouTube",link:"https://youtu.be/zjp1OL2DCug"},{tema:"Clasificación de las fibras",referencia:"SENA (s.f.) Fundamentación textil. Fibras textiles. Centro de Manufactura en Textil y Cuero. Regional Distrito Capital.",tipo:"PDF",descarga:"/downloads/Anexo-1_Fibras_textiles.pdf"},{tema:"Hilos e Hilatura",referencia:"SENA (2021) Hilos para la confección. [video]. Youtube. ",tipo:"Video YouTube",link:"https://youtu.be/3jnetG5VBEY"},{tema:"Hilos e Hilatura",referencia:"SENA (2021) Clasificación de los hilos. [video]. Youtube.",tipo:"Video YouTube",link:"https://youtu.be/qUdbl6B18Bg"},{tema:"Hilos e Hilatura",referencia:"SENA (s.f.) Fundamentación textil. Clasificación de los hilos. Centro de Manufactura en Textil y Cuero. Regional Distrito Capital. ",tipo:"PDF",descarga:"/downloads/Anexo-2_Clasificacion_hilos.pdf"},{tema:"Tejidos",referencia:"Calderón, C. (s.f.) Fundamentación textil. Tejidos. ",tipo:"PDF",descarga:"/downloads/Anexo-3_Fundamentacion_textil_Tejidos.pdf"},{tema:"Clasificación de los tejidos",referencia:"SENA (2021) Caracterización de los textiles. [video]. Youtube",tipo:"Video YouTube",link:"https://youtu.be/mc1kARHDHrs"},{tema:"Clasificación de los tejidos",referencia:"Gutiérrez, S. (2020) Tipo de telas y usos. Centro Industrial del Diseño y la Manufactura SENA.",tipo:"PDF",descarga:"/downloads/Anexo-4_Tipos_de_telas.pdf"},{tema:"Defecto de las telas",referencia:"Baquero A. (2018) Defectos en las telas. SENA ",tipo:"PDF",descarga:"/downloads/Anexo-5_Defectos_de_telas.pdf"},{tema:"Defecto de las telas",referencia:"ICONTEC. (2013) Telas de tejido plano y telas de tejido de punto. Definiciones de los defectos.( NTC 6022:2013). ",tipo:"Biblioteca digital SENA _ Base de datos ICONTEC",link:"https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=5354"},{tema:"Defecto de las telas",referencia:"SENA (2020) Inspección de textiles. [video]. Youtube. ",tipo:"Video YouTube",link:"https://youtu.be/2IjwoiNJCDw"},{tema:"Defecto de las telas",referencia:"SENA (2021) Identificación de fibras. [video]. Youtube. ",tipo:"Video YouTube",link:"https://youtu.be/xL89_BMN61I"},{tema:"Análisis de laboratorio y fichas técnicas",referencia:"SENA (s.f.) Fundamentación textil. Identificación de Fibras. Centro de Manufactura en Textil y Cuero. Regional Distrito Capital",tipo:"PDF",descarga:"/downloads/Anexo-6_Identificacion_de_fibras.pdf"},{tema:"Análisis de laboratorio y fichas técnicas",referencia:"Coats Group (2021) Epic. Hoja de información de información del producto. ",tipo:"PDF",descarga:"/downloads/Anexo-7_Ficha_tecnica_hilo.pdf"}],glosario:[{termino:"Aspes",significado:"mordientes a través de los cuales pueden pasarse varios elementos de fibras con la finalidad de procesarlas. "},{termino:"Condensación",significado:"es el cambio de estado de la materia que puede estar de forma gaseosa y pasar a forma líquida. "},{termino:"Fibra",significado:"elemento de origen natural, sintético o artificial, pasan por procesos que permiten la hilación y su transformación en productos como hilo y telas. "},{termino:"Filamento",significado:"fibras de longitud indefinida, estos son pasados por procesos de hilado para convertirse en hilos y posteriormente en telas. "},{termino:"Fisión",significado:"la fisión nuclear es la reacción en la que el núcleo de un átomo pesado. Al capturar un neutrón incidente, se divide en dos o más núcleos de átomos más ligeros, llamados productos de fisión, emitiendo en el proceso neutrones, rayos gamma y grandes.  (CSN, 2021) "},{termino:"Frictómetro",significado:"instrumento de laboratorio textil que permite evaluar y controlar la solidez del color de una fibra al frote. También es empleado para medir esta característica en hilos y telas."},{termino:"Hilo cardado",significado:"hilo obtenido por procesos de hilaturas de anillos y elaborado a partir de fibras cortas."},{termino:"Poliadición",significado:"son reacciones químicas a través de las cuales el polímero final es originado por sucesivas adiciones de grupos funcionales (monómero A), para estructuras moleculares con dobles enlaces (monómero B), la característica principal en que durante su proceso no se desprende compuestos volátiles. "},{termino:"Polimerización",significado:"proceso a través del cual las moléculas simples, iguales o diferentes, reaccionan entre sí por adición o condensación, lo que permite formar otras moléculas de peso doble, triple o según se necesite. "},{termino:"Regularímetro",significado:"instrumento de laboratorio textil que permite obtener datos frente a las regularidades que posee una fibra, vistas desde la variación de masa por unidad de longitud. Es usado principalmente para determinar características de un hilado de fibras textiles. "},{termino:"Salitre",significado:"a nivel químico es una sal que se obtiene por la acción del nitrato de sodio en el cloruro de potasio, utilizado generalmente en la fabricación de pólvora, también de sus derivados en usado en la limpieza de elementos en el hogar.  "},{termino:"Solución de apresto",significado:"esta solución es usada para dar dureza a los tejidos, este proceso es aplicado según requerimientos técnicos que necesiten darse a un textil. "},{termino:"Torno",significado:"elemento empleado en la hilación de fibras para obtener hebras con una longitud determinada. "}],referencias:[{referencia:"Ayelén Peregrino. (2011). <em>Ficha tejidos.</em> ",link:"https://ayelenpellegrino.files.wordpress.com/2011/01/19-ficha-tejidos-1.jpg"},{referencia:"CSN (2021) <em>Fisión Nuclear</em>. Consejo de Seguridad Nuclear. ",link:"https://www.csn.es/fision-nuclear#"},{referencia:"Consorcio textil Vianny SAC. (2015). <em>Ficha técnica</em>. ",link:"http://textilvianny.blogspot.com/2015/09/blog-post.html"},{referencia:"Geny. (2019). <em>Las fibras y su construcción</em>. ",link:"https://www.geny.cl/portal/2019/07/19/las-fibras-y-su-construccion/"},{referencia:"Lockuán Lavado, F. (2012). <em>La industria textil y su control de calidad. III. Hilandería</em> [Ebook].  ",link:"https://books.google.com/books/about/III_La_industria_textil_y_su_control_de.html?hl=es&id=nkJZ93e-9-wC#v=onepage&q&f=false"},{referencia:"Lockuán Lavado, F. (2012). <em>La industria textil y su control de calidad. IV. Tejeduría</em> [Ebook]. ",link:"https://books.google.com/books/about/IV_La_industria_textil_y_su_control_de_c.html?hl=es&id=lmHP7oAunq8C#v=onepage&q&f=false"},{referencia:"Mejía, F. (2021). Capítulo 1 – Las fibras textiles. Programa de Textilización. ",link:"https://programadetextilizacion.blogspot.com/search/label/Cap%C3%ADtulo%2001%20-%20Las%20fibras%20textiles"},{referencia:"Mejía, F. (2015). Capítulo 6 - Los hilos y la hilatura. Programa de Textilización  ",link:"https://programadetextilizacion.blogspot.com/2014/12/capitulo-6-maria-de-perinat-1997-2000.html"},{referencia:"Ortiz, A. (s.f.) <em>Procesos textiles</em>. El profe Abdón Moda y Confección.",link:"https://abortiz.wixsite.com/textiles/procesos-textiles"},{referencia:"Repositorio Digital Universidad Técnica del Norte (s.f.). <em>Capítulo 1. Fibra de algodón.</em> ",link:"http://repositorio.utn.edu.ec/bitstream/123456789/631/1/capitulo1.pdf"},{referencia:"Sampedia. (2019). La clasificación de defectos de prenda. ",link:"https://seampedia.com/la-clasificacion-de-defectos-de-prenda/"},{referencia:"SENA.  (2020).  Equipo de Desarrollo Curricular, SENA Programa Técnico en Patronaje Industrial de Prendas de Vestir, Centro de Manufactura en Textil y Cuero, Distrito Capital."},{referencia:"Textil Balsareny. (2021). <em>¿Cómo elaborar una ficha técnica de productos textiles?</em>. ",link:"https://textilbalsareny.com/blog/como-elaborar-una-ficha-tecnica-de-productos-textiles/"}],creditos:[{titulo:"ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Claudia Patricia Aristizabal",cargo:"Líder del equipo",centro:"Dirección General"},{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Responsable de línea de producción",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]},{titulo:"CONTENIDO INSTRUCCIONAL",autores:[{nombre:"Paola Angélica Castro Salazar",cargo:"Experta temática",centro:"Regional Antioquia - Centro de Formación Diseño, Confección y Moda"},{nombre:"Ledy Johana Velásquez Hernández",cargo:"Experta temática",centro:"Regional Antioquia - Centro de Formación Diseño, Confección y Moda"},{nombre:"Vilma Lucía Perilla Méndez",cargo:"Diseñadora Instruccional",centro:"Regional Distrito Capital - Centro de Gestión Industrial. "},{nombre:"Carolina Coca Salazar",cargo:"Revisora metodología y pedagógica",centro:"Regional Distrito Capital - Centro de Diseño y Metrología "},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y evaluador instruccional",centro:"Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica"},{nombre:"Miroslava González Hernández",cargo:"Diseñadora Instruccional",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]},{titulo:"DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES",autores:[{nombre:"Carlos J Ramirez",cargo:"Diseñador web",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Andrea Paola Botello De la Rosa",cargo:"Desarrollador Fullstack",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Storyboard e ilustración",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Carmen Alicia Martínez Torres",cargo:"Animador y Producción audiovisual",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Emilsen Alfonso Bautista",cargo:"Actividad didáctica",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]},{titulo:"VALIDACIÓN RECURSO EDUCATIVO DIGITAL",autores:[{nombre:"Zuleidy María Ruiz Torres",cargo:"Validación y vinculación en plataforma LMS",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Luis Gabriel Urueta Alvarez",cargo:"Validación y vinculación en plataforma LMS",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"},{nombre:"Daniel Ricardo Mutis Gómez",cargo:"Validación de contenidos accesibles",centro:"Regional Santander - Centro Industrial del Diseño y la Manufactura"}]}],creditosAdicionales:{imagenes:'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',creativeCommons:'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>'}});o["a"].prototype.$config=v;var k=n("9224");o["a"].prototype.$package=k,new o["a"]({router:h,store:g["a"],render:function(e){return e(d)}}).$mount("#app")},"65fa":function(e,a,n){e.exports=n.p+"img/banner-principal.55b67b04.png"},"71f8":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-1.90e89ce4.svg"},"7d72":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-3.b806d959.svg"},"8f04":function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-2.ef1c5127.svg"},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"7.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"6.0.1","vue":"^2.6.14","vue-router":"^3.5.2","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.13","@vue/cli-plugin-eslint":"^4.5.13","@vue/cli-plugin-router":"^4.5.13","@vue/cli-plugin-vuex":"^4.5.13","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.4.1","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.14"}}')},a00a:function(e,a,n){e.exports=n.p+"img/logo-sena.47d29d11.svg"},a3a0:function(e,a,n){},ce7c:function(e,a,n){e.exports=n.p+"img/fondo-banner-principal.136853a5.png"},f53d:function(e,a,n){e.exports=n.p+"img/banner-principal-decorativo-4.506bb812.svg"}});
//# sourceMappingURL=app.27803412.js.map