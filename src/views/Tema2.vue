<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Los tejidos

    .row.justify-content-center.mb-2
      .col-lg-8.mb-4(data-aos="fade-right")
        p Los procesos de elaboración de fibras seguido de la hilatura continúan con la elaboración de los tejidos que son el manufacturado de esas fibras o hilos teniendo una relación transcendente entre longitud, área y espesor con suficiente resistencia mecánica para otorgar una cohesión entre ellas, (
          em Textile terms and definitions, the textile institute
          |) citado por SENA. Los tejidos tienen una clasificación que se da en dos grupos, tejidos planos y de punto, también se contemplan aquellas no tejidas en las que diversas técnicas a nivel tecnológico permiten su impresión; en esta tabla se presenta esta clasificación:
      .col-lg-4.col-md-8.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img.png' alt='')

    .row.justify-content-center
      .col-lg-8(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Tabla 3.]  Clasificación de tejidos
        .tabla-a.color-acento-botones.mb-5 
          table
            tbody.border-top
              tr
                td.bg-gray.fw-bold.text-center.col-w18(rowspan="11") Telas tejidas
                td.fw-bold.col-w12(rowspan="7") Plano
                td(rowspan="3") Ligamentos fundamentales
                td.col-w40 Tafetán
              tr
                td Sarga (diagonal)
              tr
                td Raso o Satín
              tr
                td(rowspan="3") Ligamentos derivados
                td Esterilla /panamá/ Canastra 
              tr
                td Espina / Espiga 
              tr
                td Sarga interrumpida (#[i Broken Twill]) 
              tr
                td Otros ligamentos 
                td Dobby, Jacquard, Riso, afelpados etc 
              tr 
                td.fw-bold(rowspan="4") Punto
                td(rowspan="2") Por trama
                td Sencillo (Jersey, Lacoste) 
              tr
                td Doble (#[i Rib] o resortado, #[i interlock], piqué)  
              tr
                td(rowspan="2") Por urdimbre
                td #[i Tricot] 
              tr
                td Raschell   
              tr
                td.bg-gray.fw-bold.text-center Telas no tejidas
                td(colspan="3") 
                  p.mb-0 Plano
                  p.mb-0 Espumas 
                  p.mb-0 Fieltro o aglomerado 

    p.mb-4(data-aos="fade") Para conocer el uso de los tejidos es necesario antes interactuar con conceptos básicos para su reconocimiento, pues es significativa la observación de características físicas del tejido para reconocer la estructura y determinar el tipo de tejido que es, y así, posteriormente, tener la autoridad de dar un uso y mantenimiento adecuado, según la finalidad del producto o artículo a producir. 
      b Existen unos conceptos básicos y claves para alcanzar este objetivo, tal como se exponen ahora:

    .tarjeta.fondo-slider.p-4.pt-5
      SlyderA(tipo="b" data-aos="fade-down")
        .row.justify-content-center
          .col-lg-5
            h5 Urdimbre y trama
            p Los hilos producidos en el proceso anterior se entrelazan y crean el tejido, la serie longitudinal de los hilos recibe el nombre de urdimbre y cada uno de los elementos que la constituyen se denomina hilo. Los hilos verticales son la urdimbre. La serie transversal recibe el nombre de trama y cada una de sus unidades se denomina pasada. Las pasadas horizontales son la trama. 
          .col-lg-5.col-md-8
            img(src='@/assets/curso/temas/tema2/slide-img1.png' alt='Urdimbre y trama')
        .row.justify-content-center.align-items-center
          .col-lg-5
            h5 Dirección del hilo en la tela
            p Para diferenciar la forma de cortar en la tela, se debe tener en cuenta que: 
            ul.lista-ul--color.color-primario.fa-ul
              li.mb-1
                i.fas.fa-tshirt
                | La urdimbre está en la misma dirección en la que va el orillo de la tela, el cual se presenta en los laterales de la pieza de tela. Es más fuerte, estable y no suele ceder. 
              li.mb-1
                i.fas.fa-tshirt
                | El sesgo o bies es cuando se coloca el patrón a 45° grados con respecto a la dirección de la urdimbre de la tela. Aportando mejor caída y cierta elasticidad.
              li.mb-1
                i.fas.fa-tshirt
                | La trama es más fina y en ocasiones puede contener fibras elásticas, ya que estas fibras ceden al estirar la tela de orilla a orilla. 
            p En la imagen se muestra la dirección del hilo en la tela y se observan las diferentes tizadas según la dirección en que se ubica el molde en la tela.
          .col-lg-5.col-md-8.text-center
            img.mb-3(src='@/assets/curso/temas/tema2/slide-img2.png' alt='Dirección del hilo en la tela' @click="modal1 = true")
            a.lnk.indicador__container(@click="modal1 = true") 
              h5.text-center Ampliar imagen
              .indicador--click(v-if="mostrarIndicador")
        .row.justify-content-center
          .col-lg-5
            h5 Ligamento
            p Es la manera de entrecruzar los hilos de urdimbre y trama en cada pasada para formar un tejido determinado, existen tres clases: 
            ul.lista-ul--color.color-primario.fa-ul
              li.mb-1
                i.fas.fa-tshirt
                span.mb-0 #[b Tafetán:] se forma con hilos perpendiculares que pasan alternativamente por encima y por debajo de cada uno de ellos. Ligamento uno a uno. No tiene derecho ni revés.
              li.mb-1
                i.fas.fa-tshirt
                span.mb-0 #[b Sarga:] en el ligamento de sarga cada hilo de urdimbre o de trama hace una basta sobre dos o más hilos de urdimbre o de trama, con una progresión de entrecruzamiento de uno a la derecha o a la izquierda para formar una línea diagonal identificable, llamada espiga. Tiene derecho y revés.
              li.mb-1
                i.fas.fa-tshirt
                span.mb-0 #[b Satén:] en el tejido de satén cada hilo de urdimbre hace una basta sobre cuatro hilos de trama (4/1) y se entrelaza con el quinto hilo de trama con una progresión de entrecruzamiento de dos a la derecha o a la izquierda. Las telas tienen derecho y revés.
          .col-lg-5.col-md-8
            img(src='@/assets/curso/temas/tema2/slide-img3.png' alt='Ligamento')


    ModalA(:abrir-modal.sync="modal1")
      .row.align-items-center.justify-content-center
        .col-md-11
          figure
            img(src='@/assets/curso/temas/tema2/slide-img2-1.png', alt='Dirección del hilo en la tela')


    Separador

    #t_2_1
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.1 Clasificación de los tejidos
    
    p.mb-4(data-aos="fade") Después de comprender que existen #[b telas tejidas] (plano y punto) y #[b no tejidas]. Es importante entender previa y visualmente cómo está contenida esa estructura, tal como se representa en la siguiente figura.

    .row.justify-content-center.mb-5
      .col-lg-8(data-aos="fade-down")
        .bg-1.p-4
          .titulo-sexto.color-acento-contenido
            p.mb-0 #[b Figura 3.]  Clasificación visual de los tejidos
          figure
            img.px-md-4(src="@/assets/curso/temas/tema2/fig.png", alt="Clasificación visual de los tejidos")
            figcaption.mt-3 
              p.mb-0 Nota. Tomado de SENA (s.f.).
      
    h4.t-red(data-aos="fade") Telas tejidas 
    p.mb-md-5.mb-4(data-aos="fade") Existen diferentes tipos de tejidos según la forma de su construcción, por ejemplo, el género de punto es armado por un solo hilo que se va entrelazando entre sí. Otros se forman por 2 hilos, siendo estos los que más predominan en la industria textil y por último los no tejidos que son aglomerados. A continuación se exponen aquellos que pertenecen a la categoría de telas tejidas.

    .tarjeta.fondo-slider.p-4.pt-5.mb-5
      SlyderA(tipo="b" data-aos="fade-down")
        .row.justify-content-center
          .col-lg-5
            h5 Tejidos planos o de calada
            p Son formados por 2 hilos aplicando la técnica simple de urdimbre y trama. Este tipo de telas se caracteriza porque su limpieza es fácil y tienen mejor durabilidad. Entre las más conocidas se encuentran: Tela batista, el tweed o paño, la muselina, liviana y con transparencia perfecto para vestidos, la tela crepé, el percal, chambray utilizado en camisas, blusas y vestidos livianos, el organdí, el velo, tela batista, etc. 
          .col-lg-5.col-md-8
            img(src='@/assets/curso/temas/tema2/slide2-img1.png' alt='Tejidos planos o de calada')
        .row.justify-content-center
          .col-lg-5
            h5 Tejidos de punto
            p Son formados por 2 hilos aplicando la técnica simple de urdimbre y Para su construcción utilizan la norma de por trama o por urdimbre, suelen tener anchos más grandes y más elongación por medio de una técnica de construcción conocida como malla en donde se entrelaza de manera curva para cumplir este objetivo. 
          .col-lg-5.text-center.col-md-8
            img.mb-3(src='@/assets/curso/temas/tema2/slide2-img2.png' alt='Tejidos de punto' @click="modal2 = true")
            a.lnk.indicador__container(@click="modal2 = true") 
              h5.text-center Ampliar imagen
              .indicador--click(v-if="mostrarIndicador")
        .row.justify-content-center
          .col-lg-5
            h5 Gasas de vuelta
            p Generalmente están formados por dos series de urdimbre, que además del cruzamiento que tienen con la trama (cruzamiento rectilíneo), se cruzan entre sí, alternativamente, a la izquierda y a la derecha (cruzamiento curvilíneo), impidiendo de esta manera que las pasadas se junten (Lockuán, 2012) 
          .col-lg-5.col-md-8
            img(src='@/assets/curso/temas/tema2/slide2-img3.png' alt='Tejidos')
            figcaption 
              p.mb-0 Nota: Tomado de Lockuán, F. (2012).
        .row.justify-content-center
          .col-lg-5
            h5 Trenzas
            p Su estructura habitual es dada por una sola serie de elementos, que se entrecruzan de izquierda a derecha o viceversa.
          .col-lg-5.col-md-8
            img(src='@/assets/curso/temas/tema2/slide2-img4.png' alt='Trenzas')
        .row.justify-content-center
          .col-lg-5
            h5 Red o anudado
            p Pueden realizarse con solo hilo, en su construcción se realizan una serie de nudos, que impiden su desplazamiento. 
          .col-lg-5.col-md-8
            img(src='@/assets/curso/temas/tema2/slide2-img5.png' alt='Tejidos')
        .row.justify-content-center
          .col-lg-5
            h5 Triaxilaes
            p Está construida por tres series de hilos cruzados en ángulos de 60%. Son muy resistentes dado que siempre hay una serie de hilos que soportan el esfuerzo. 
          .col-lg-5.col-md-8
            img(src='@/assets/curso/temas/tema2/slide2-img6.png' alt='Tejidos')     

    ModalA(:abrir-modal.sync="modal2")
      .row.align-items-center.justify-content-center
        .col-md-8
          figure
            img(src='@/assets/curso/temas/tema2/slide2-img2-1.png', alt='Tejidos de punto')


    .row.fondo-tema2.align-items-center.py-5.mb-5.mb-lg-0
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          h4.t-red(data-aos="fade") Telas no tejidas
          p.mb-4(data-aos="fade") Las telas #[b no tejidas] no necesitan de un proceso de hilatura. En resumen, se puede decir que son un aglomerado de diferentes materiales textiles que forman una lámina con diferentes grosores y flexibilidades. Estas se clasifican en: 

          .row.mb-5(data-aos="fade-down")
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/tarj-1.png' alt='')
                .tarjeta.bg-white
                  .p-4.p-lg-5
                    h3.text-center Fieltros o aglomerados
                    p Se obtienen de la mezcla de varios materiales (viscosa, poliéster y polipropileno). Generalmente las esponjas de limpieza son realizadas con este no tejido.
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/tarj-2.png' alt='')
                .tarjeta.bg-white
                  .p-4.p-lg-5
                    h3.text-center Películas
                    p Son generadas de soluciones químicas, como ejemplo se tienen las cortinas de baño.
            .col-md-6.col-lg-4.mb-4.mb-lg-0
              .tarjeta-avatar
                img(src='@/assets/curso/temas/tema2/tarj-3.png' alt='')
                .tarjeta.bg-white
                  .p-4.p-lg-5
                    h3.text-center Espumas
                    p Tienen una composición química más partículas de aire, son de baja densidad y son porosas.
            .col-md-12
              figcaption.mt-3.w-fit 
                p.mb-0 Nota. Tomado de SENA (s.f.).
      
          .col-md-12.mb-4.mb-md-5(data-aos="fade-down")
            .cajon.color-secundario.p-4
              p.mb-0 Finalmente es importante tener en cuenta el color de las telas. Su conservación depende de la solidez en los procesos de teñido o estampación. Este proceso es el encargado de sostener su aspecto luego de ser mojada, lavada o expuesta a la luz. Es importante que sean compatibles la fibra y el colorante para ejecutar el proceso de una forma adecuada, así como se representa a continuación.
          
          .col-lg-8.mb-5(data-aos="fade-down")
            .bg-1.p-4
              .titulo-sexto.color-acento-contenido
                p.mb-0 #[b Figura 4.]  Color de las telas
              figure
                img(src="@/assets/curso/temas/tema2/fig2.png", alt="Fotografías de ejemplos de los tipos de color de tela de acuerdo al proceso aplicado.")
                figcaption.mt-3 
                  p.mb-0 Nota. Tomado de SENA (s.f.).

          .col-lg-10.mb-5(data-aos="fade-down")  
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-md-4
                  img.px-lg-4(src="@/assets/curso/temas/tema3/pdf.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Clasificación de tejidos
                      p.mb-0 Para conocer más sobre la clasificación de los tejidos consulte en el material complementario #[em Fundamentación textil – Tejidos].
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-3_Fundamentacion_textil_Tejidos.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-download 

          .col-md-12(data-aos="fade-down")
            .cajon.color-secundario.p-4
              p.mb-0 Ahora bien, la caracterización de los textiles está dada en función de su comportamiento. Esto permite que la idea o el desarrollo de producto sea mucho más certero y esté enfocado al requerimiento funcional del diseño. También, está relacionado con el peso del material, su estructura, fluidez, expansión y compresión; a continuación, se relacionan los aspectos más relevantes de cada una:


    TabsC.color-acento-botones.mb-5
      .bg-2.p-4.p-md-4.py-md-5(titulo="Estructura")
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h5 Estructura
            p Las telas estructuradas proporcionan cuerpo a la prenda, dan forma por sí mismas. La caída de la tela ha de mantenerse en su lugar y no caer cuando se le suelta. Combinar telas en una misma prenda permite generar textura y volumen, este tipo de telas se utiliza en diferentes áreas según su ocasión de uso y pueden ser formal, informal o 
              em sport. 
            p Los textiles más reconocidos por su estructura son: paño, tweed, jacquard, pana, lino, oxford, faya, shantung, popelina, tafetán, bengalina, satén. También se encuentran los textiles plastificados - recubiertos, como son las microfibras de nylon y poliéster, algunas de ellas con propiedades hidrófugas.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tab-img1.png', alt='')
      .bg-2.p-4.p-md-4.py-md-5(titulo="Fluidez")
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h5 Fluidez
            p Estas telas son suaves y con caída, no son capaces de aguantar su propio peso, la fluidez está directamente relacionada con el tipo de hilo utilizado en su fabricación, son hilos muy torsionados tanto de hebras hiladas como de multifilamento. La caída que da sobre el cuerpo suele ser ligeras y de peso medio. 
            p Los textiles más reconocidos son: Chiffon, Gasa, Chalís, Interlock, Georgette, Crepé, Jersey, Malla, Encaje, Género, Velvet/Terciopelo, Lamé, Crepé Texturizado, Género de punto.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tab-img2.png', alt='')
      .bg-2.p-4.p-md-4.py-md-5(titulo="Expansión")
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h5 Expansión
            p En este grupo se incluye el concepto del plisado, este efecto permite expandir la silueta.  El concepto de acolchado se incluye en esta categoría. Este es un método natural para crear calidez mediante la combinación de capas de tela, se puede aplicar el acolchado medio y acolchado grueso. 
            p Los textiles más reconocidos son: Acolchado, Redecillas, Tarlatana, De piel o Peluche, Tules, Organza, Plisados, Crepé de satén Plisados.
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tab-img3.png', alt='')
      .bg-2.p-4.p-md-4.py-md-5(titulo="Comprensión")
        .row.justify-content-evenly
          .col-md-6.mb-4.mb-md-0
            h5 Comprensión
            p El objetivo de este grupo es crear ajuste perfecto a la silueta humana. El grado de elasticidad, dependerá del tipo y cantidad de hilos elásticos. Suelen encontrarse textiles con combinaciones de expandes, licra y acetato. 
            p A continuación, se presentan unos ejemplos:
            ul.lista-ul--color.color-primario.fa-ul
              li.mb-1
                i.fas.fa-tshirt
                | Stretch confort: tejidos con un 2 % a 5 % de fibra de Spandex, proporciona una compresión suave.
              li.mb-1
                i.fas.fa-tshirt
                | Stretch fuerte: contiene un 14 % a 20 % de fibra de Spandex. proporciona una compresión continua que resta silueta al cuerpo.
            p Los textiles más reconocidos son: Punto canalé, Pana #[em stretch], #[em Power lycra], Punto de algodón #[em Stretch], Doble punto y #[em Power Net].
          .col-md-5
            figure
              img(src='@/assets/curso/temas/tema2/tab-img4.png', alt='')
    
    .row.justify-content-center.mb-3
      .col-lg-7.mb-4(data-aos="fade-right")
        p Las entretelas, por su parte, son las encargadas de generar estructura en diferentes partes de la prenda y refuerzan en zonas de alto uso, como perillas, puños y cuellos. Existen varios tipos de entretelas y se usan para determinar el tacto, la forma y la durabilidad de la prenda. 
        p Para alcanzar un buen calce en la prenda y una perfecta caída de la tela no basta con realizar buenos moldes, no solo el tejido y la construcción son importantes, sino también en gran medida la forma como se utilizan las entretelas. Aunque no se puede ver este refuerzo en el derecho de la tela, en el momento de usar dicha prenda, su buen uso marcará la diferencia. La durabilidad de la ropa, el tacto y la forma será acorde al tipo de entretela elegida.
        .bg-blue2.p-4
          h5.mb-0 Las entretelas tienen como propósito lograr resultados con alta calidad, también permite coser con agilidad y si es empleada en tejidos con elastómeros hace que pierda parcialmente la elasticidad de ellos. Las entretelas se fabrican de diferentes tipos de fibras y grosores; dependiendo de la prenda se pueden utilizar varios tipos de entretela. Otra cosa que se debe tener en cuenta para la selección es el grosor de la tela, va a depender de la caída que se requiere.
      .col-lg-5.col-md-8.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema2/img2.png' alt='')

    p.mb-4(data-aos="fade") En el mercado textil existe una gran variedad de entretelas con diferentes usos. Algunas son para termo-fijar con calor (son más utilizadas a nivel industrial), otras se cosen sobre las piezas ya cortadas y existen un grupo que son especiales para tejidos que requieran elasticidad o por ejemplo en materiales como cuero o pieles.  También hay varios elementos auxiliares como cinta, cinta perforada y formas troqueladas para garantizar una producción económica. Estas se pueden elegir según tejido, aplicación y elasticidad, como son: 

    TabsA.color-primario.mb-5(data-aos="fade-down")
      .border-bottom-orange.bg-3.p-4(titulo="Tejidas")
        p En el mercado están hechas de diferentes fibras como son poliéster, lana, algodón, rayón o un mix de varias. Se tejen con igual estructura del ligamento tafetán.  Si se necesita mayor flexibilidad un corte sesgado es óptimo para lograr este resultado.  No todos los tejidos utilizados como entretelas se fabrican con este fin. Hay algunos tipos de forros, batista, muselina, e incluso la propia tela exterior también se puede utilizar como interfaz.
      .border-bottom-orange.bg-3.p-4(titulo="No tejidas")
        p Suelen encontrarse en el mercado en poliéster, rayón, nylon o una mix de varias, se distribuyen aleatoriamente y se conectan por acción química o térmica, porque no tienen dirección del hilo, no se esparcen y se pueden cortar en cualquier dirección o ángulo.
      .border-bottom-orange.bg-3.p-4(titulo="Entretelas de punto o malla")
        p Se pueden obtener mediante inserción de trama, inserción de urdimbre y tejido. El nylon se estira en todo su ancho y estabilidad. Puede agregar forma y forma del cuerpo a casi cualquier tejido (tejido o de punto).
      .border-bottom-orange.bg-3.p-4(titulo="Entretelas fusionables")
        p Estas entretelas son creadas para potenciar las ventajas de las entretelas cuando se unen a la superficie interior de la tela exterior bajo factores como son la temperatura, el tiempo y la presión. Es por esto, que la adhesión de la entretela fusionable al tejido exterior crea un nuevo laminado sobre el tejido, en el que las características de la interfaz se añaden a las características del tejido exterior.

    
    .row.fondo2-tema3.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-lg-10.mb-5(data-aos="fade-down")  
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-md-4
                  img.px-lg-4(src="@/assets/curso/temas/tema3/video.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Caracterización de los textiles
                      p.mb-0 Observa el video #[em Caracterización de los textiles], el cual está ubicado en el material de apoyo, y en el que se profundiza sobre las características específicas en telas y entretelas.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=mc1kARHDHrs')" target="_blank")
                        span Ver video
                        i.fas.fa-video

          h4.t-red(data-aos="fade") Entretelas más utilizadas
          h5.mb-md-5.mb-4(data-aos="fade") A continuación, se amplían exponen las entretelas más utilizadas que se pueden encontrar en el mercado.

          .col-lg-10(data-aos="fade-down") 
            ImagenInfografica.color-secundario.tema-2.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/temas/tema2/img-infog2.svg', alt='Entretelas más utilizadas')

              .tarjeta.bg-blue3.p-3(x="63.5%" y="6%" numero="1")
                h5.mb-0 Friselina
                p.mb-0 Primero se adhiere con calor al primer tejido, se retira el papel y volvemos a aplicar la plancha para adherirlo a la otra tela.
              .tarjeta.bg-blue3.p-3(x="73.5%" y="25%" numero="2")
                h5.mb-0 Sidó
                p.mb-0 Los tejidos de poliéster, viscosa, pelo de animal y lana varían en peso. Tiene buena resiliencia y recuperación, por lo que se utiliza para construir plastrón, fortalecer el plastrón y cabezas de manga.
              .tarjeta.bg-blue3.p-3(x="77%" y="50%" numero="3")
                h5.mb-0 Plastrón
                p.mb-0 Los tejidos de poliéster, viscosa, pelo de animal y lana varían en peso. Tiene buena resiliencia y recuperación, por lo que se utiliza para construir plastrón, fortalecer el plastrón y el manguito. Hay fijación por calor o cosido, trama cerrada o trama abierta. Se utilizan como entretela de base para el frente y diferentes partes.
              .tarjeta.bg-blue3.p-3(x="73.5%" y="75%" numero="4")
                h5.mb-0 Entretelas afieltradas
                p.mb-0 Con textura similar al fieltro, sirven para aplicar sobre tejidos gruesos, como abrigos. Son muy útiles ya que por su disposición permiten ser aplicadas de forma sencilla sobre la tela final sin que esta se aplaste, pues se pegan con total facilidad. Si las observas, tienen dos caras, una con una textura «de pelo» y otra donde se aprecia el pegamento que se fijará a la tela.
              .tarjeta.bg-blue3.p-3(x="63.5%" y="93%" numero="5")
                h5.mb-0 Hidrosolubles
                p.mb-0 Son entretelas “mágicas” pues desaparecen con el lavado, al ser soluble en agua. Es un tejido muy fino que se puede aplicar sobre telas delicadas o para realizar bordados. Se fija sobre la tela base por el revés y cuando hemos terminado la labor se lava, desapareciendo por completo y dejando únicamente el tejido final.
              
              .tarjeta.bg-blue3.p-3(x="36.5%" y="93%" numero="6")
                h5.mb-0 Papel o para bordados
                p.mb-0 Se utilizan como refuerzos en las labores de bordar, sirviendo de base para los mismos. Una vez se ha finalizado la labor, se retira fácilmente rasgando la entretela.
              .tarjeta.bg-blue3.p-3(x="26.5%" y="74.5%" numero="7")
                h5.mb-0 Cinturilla y bordes
                p.mb-0 Son termoadhesivas, ideales para realizar cinturillas, puños, bajos, solapas e incluso asas de bolsos. Su aspecto de cinta con pequeñas perforaciones lineales que sirven de guía.
              .tarjeta.bg-blue3.p-3(x="23%" y="50%" numero="8")
                h5.mb-0 Boatina
                p.mb-0 Está hecho de algodón o lana o ambos, entrelazados con el pelo de diferentes animales. También se usa para plastrón. Dado que es suave al tacto, se coloca en la posición más cercana al cuerpo.
              .tarjeta.bg-blue3.p-3(x="26.5%" y="25%" numero="9")
                h5.mb-0 Percalina
                p.mb-0 Su composición es 100% algodón, y su función principal es el endurecimiento. Hay fijación por calor o cosido, trama cerrada o trama abierta. Se utilizan como entretela de base para el frente y diferentes partes.
              .tarjeta.bg-blue3.p-3(x="36.5%" y="6.5%" numero="10")
                h5.mb-0 Beta de algodón
                p.mb-0 Cinta de algodón termosellada con un ancho de aproximadamente 3 a 5 mm. Se utiliza en los bordes de determinadas costuras que necesitan ser reforzadas durante la fabricación.


          .col-lg-10(data-aos="fade-down") 
            .tarjeta.bg-blue.mb-5.p-4
              .row 
                .col-md-2.col-4.mb-4.mb-md-0.px-md-3
                  img.px-lg-4(src='@/assets/curso/temas/tema3/alert.svg' alt='Alerta')
                .col-md-10
                  h5 ¿Como usar las entretelas?
                  ul.lista-ul--color.color-primario.fa-ul
                    li.mb-0
                      i.fas.fa-tshirt
                      span.mb-0 #[b Para tejidos ligeros:] se recomienda sin textura, entretelas finas y no tejidas.
                    li.mb-0
                      i.fas.fa-tshirt
                      span.mb-0 #[b Para tejidos gruesos:] grano grueso de adhesivo.
                    li.mb-0
                      i.fas.fa-tshirt
                      span.mb-0 #[b Para tejidos de punto o elásticos:] entretelas de punto para que no pierdan elasticidad.
                    li.mb-0
                      i.fas.fa-tshirt
                      span.mb-0 #[b Para tejidos no elásticos:] entretelas tejidas respetando la dirección del hilo de la pieza.
                  p.mb-0 Tener en cuenta que la entretela tejida se encoge con los lavados, debido a esto se aconseja vaporizarlas o humedecerlas antes de utilizarlas. Así mismo, la entretela tradicional (se debe coser) se corta al mismo tamaño que las piezas a entrelazar, si es una entretela termoadhesiva se debe cortar de 0,5 a 1 cm más pequeña. Por último recuerde que los anchos de las entretelas suelen oscilar entre 0,9 a 1,5 m.

          .col-lg-10(data-aos="fade-down")  
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-md-4
                  img.px-lg-4(src="@/assets/curso/temas/tema3/pdf.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Tipos de telas y tratamiento
                      p.text-small Lo invitamos a revisar el material complementario #[em Tipos de telas y usos], en donde observará detalladamente los diferentes tipos de telas que se encuentran en el mercado.
                      p.text-small.mb-0 Sumado a esto, en cuanto a su tratamiento, las normas internacionales exigen ubicar una etiqueta en la prenda terminada con especificaciones relacionadas con el textil, como son la composición y el cuidado para prologar la conservación de la tela. En la imagen se observa la terminología y símbolos generales que se emplean en el gremio textil para su cuidado.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-4_Tipos_de_telas.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-download    


    Separador

    #t_2_2
    .titulo-segundo.color-acento-contenido(data-aos="fade")
      h2 2.2 Defectos de telas

    p(data-aos="fade") Los defectos en la tela son producidos en los procesos de hilandería, tejeduría, tintorería y acabados, en algunos casos estos pueden ser solucionados en reprocesos, de lo contario pierden calidad perdiendo la categorización tipo A (sin defecto) pasando hacer tipo B (barrado) o tipo C (con otros defectos) dependiendo de la pérdida de calidad y el número de defectos que posean. Las pruebas realizadas son de construcción, resistencia y solidez del color. 
    p.mb-4(data-aos="fade") Los defectos tienen una clasificación según su origen y se dividen así: los que son dados durante el proceso de hilado, durante la creación del tejido, fallas en otros procesos.

    TabsC.color-acento-botones.mb-5(data-aos="fade-down")
      .bg-2.p-4.p-md-4.py-md-5(titulo="Defectos originados en la hilandería")
        .row.justify-content-evenly
          .col-md-7.mb-4.mb-md-0
            p Estos provienen directamente de los hilos defectuosos que en la construcción del tejido desfavorecen la calidad.
            p Entre algunos tenemos:
            ul.lista-ul--color.color-primario.fa-ul
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Motas:] forma de puntos causado por acumulaciones anormales de fibras. 
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Engrosamiento:] diferencia en los gruesores de los hilos en el tejido.
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Impurezas:] materias extrañas en el tejido debido a suciedad en las fibras. 
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Hilo sucio:] hilo con impurezas.
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Hilo irregular:] construcción anormal en el tejido.
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Retorcido defectuoso:] hebras enroscadas, enredadas o reventadas.
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Fibras mezcladas:] diferentes fibras pueden ser de distinta procedencia o color.
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/tab2-img1.png', alt='')
      .bg-2.p-4.p-md-4.py-md-5(titulo="Defectos originados en la tejeduría")
        .row.justify-content-evenly
          .col-md-7.mb-4.mb-md-0
            p Estos provienen de la construcción del tejido por parte del operario o fallas en la regulación de la máquina. Entre algunos tenemos: 
              b defectos de la tejeduría de calada y defectos propios de la tejeduría de punto.
            p En esta última, la máquina circular pertenece a la categoría de maquinaria de precisión (mecánica fina), por lo que requiere ajustes constantes de sus mecanismos, debido a los diferentes materiales utilizados, y diferentes secuencias de trabajo. El propósito es lograr las mejores condiciones de trabajo para la construcción de una rejilla en cada enlace, y la máquina circular trabaja en conjunto, desde el cono hasta el bobinado de las piezas, todo está interrelacionado y tiene su importancia para el proceso.  
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/tab2-img2.png', alt='')
      .bg-2.p-4.p-md-4.py-md-5(titulo="Defectos originados en la hilandería")
        .row.justify-content-evenly
          .col-md-7.mb-4.mb-md-0
            p Estas puedes ser generadas en otros procesos como los de almacenamiento,  tintorería y acabados, o presentarse en los anteriores. Entre ellas están: 
            ul.lista-ul--color.color-primario.fa-ul
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Contaminación:] consiste en fibras sueltas, grupos de fibras o tramos de hilo de color o de naturaleza extraños al hilo que se procesa, que se adhieren al mismo y se tejen en el tejido que se está elaborando, siendo muy difícil su eliminación posterior. Ocurre cuando la sala de tisaje es contaminada por acción de la borra de otras máquinas, las fibras pueden volar de una máquina a otra. En fábricas que produzcan tejidos a colores o piezas de tejidos de distintos colores a la vez, el riesgo de contaminación es evidente.
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Manchas de aceite:] suelen ser lineales (rayas verticales) o en forma de gotas, debidas a defectos en el sistema de engrase de la máquina o por acumulación de aceite en el cilindro. El aceite que ocasiona las manchas puede estar limpio o sucio (mezclado con pelusa).  
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Enganchones:] Son defectos que casi se presentan con los hilos de filamento. Aparte de la sensibilidad de este tipo de hilo, los esfuerzos mecánicos durante el tejido son los principales causantes de este defecto; debiendo evitarse al máximo las causas que provoquen un esfuerzo mecánico del hilo, como pueden ser rugosidades en los elementos del guiahílos, agujas, rodillos de estiraje, etc.
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Manchas de suciedad:] se presenta en el almacenamiento indebido de los rollos de telas.
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Nudos:] cuando se hacen cabeceos al unir dos hilos de punta a punta, dejan un hilo después del nudo y éste es un defecto en la tela que se nota como parte gruesa.
              li.mb-0
                i.fas.fa-tshirt
                span.mb-0 #[b Falla de diseño:] esta va ligada a grafía de la tela y errores de programación del dibujo del tejido. 
          .col-md-4
            figure
              img(src='@/assets/curso/temas/tema2/tab2-img3.png', alt='')


    h4.t-red(data-aos="fade") Defectos originados en la tejeduría
    p.mb-md-5.mb-4(data-aos="fade") Profundiza en este tipo de defectos. En los siguientes documentos se encuentra de forma detallada los defectos propios de la tejeduría de calada y los términos usados como defectos en el sector textil en el género de punto.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4(data-aos="fade-down")  
        .tarjeta.bg-color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-md-4
              img.px-lg-4(src="@/assets/curso/temas/tema3/pdf.svg")
            .col.ps-md-0
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-0 Defecto propio de la tejeduria calada
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-8_Defecto_propio_tejeduria_calada.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-download 
      
      .col-lg-10.mb-4(data-aos="fade-down")  
        .tarjeta.bg-color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-md-4
              img.px-lg-4(src="@/assets/curso/temas/tema3/pdf.svg")
            .col.ps-md-0
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-0 Defectos propios de la tejeduría de punto
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-9_Defectos_propios_tejeduria_punto.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-download 

      .col-lg-10.mb-4(data-aos="fade-down")  
        .tarjeta.bg-color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-md-4
              img.px-lg-4(src="@/assets/curso/temas/tema3/pdf.svg")
            .col.ps-md-0
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Defectos de telas 
                  p.mb-0.text-small Le invitamos a revisar el material complementario Defectos de las telas, en donde observará detalladamente los diferentes defectos que se pueden encontrar en las telas. También puede consultar la Norma Técnica Colombiana NTC 6022:2013  ingresando al Sistema Nacional de Bibliotecas Sena, en la base de datos de Icontec digite el número de la norma y haga clic en buscar. 
                .col-sm-auto
                  a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-5_Defectos_de_telas.pdf')" target="_blank")
                    span Descargar
                    i.fas.fa-download 


    h4.t-red(data-aos="fade") Identificación de defectos
    h5.mb-md-5.mb-4(data-aos="fade") Para identificar los defectos puede utilizarse un listado que permita su ubicación y así mismo definir un nivel de importancia en función de la posición en la que se encuentra el defecto, el nivel de importancia se establece en: crítico, mayor o menor, tal como se presenta a continuación.

    .row.justify-content-center.mb-5
      .col-lg-10(data-aos="fade-down")
        .titulo-sexto.color-acento-contenido
          p.mb-0 #[b Figura 5.] Identificación de defectos de tejido 
        figure
          img.px-md-4(src="@/assets/curso/temas/tema2/fig3.png", alt="Ejemplo de una lista de chequeo en la que se identifican los defectos de un tejido.")
          figcaption.mt-3 
            p.mb-0 Nota. Adaptado de Sampedia. (2019)


    .row.justify-content-center
      .col-lg-10.mb-5(data-aos="fade-down")  
        .tarjeta.bg-color-secundario.p-3
          .row.justify-content-around.align-items-center
            .col-3.col-sm-2.col-lg-2.px-md-4
              img.px-lg-4(src="@/assets/curso/temas/tema3/video.svg")
            .col.ps-md-0
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  h3.mb-1 Inspección de textiles
                  p.mb-0 Le invitamos a ver el video sobre Inspección de textiles en donde observará de una forma más detallada el procedimiento a seguir en las telas.
                .col-sm-auto
                  a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=2IjwoiNJCDw')" target="_blank")
                    span Ver video
                    i.fas.fa-video











</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
