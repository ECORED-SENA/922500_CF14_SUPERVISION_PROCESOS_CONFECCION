<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Análisis de laboratorios y fichas técnicas


    .row.mb-3
      .col-md-6.mb-4(data-aos="fade-right")
        h5 Los materiales textiles son la base de la moda y elegir los materiales adecuados es la clave del éxito del proyecto. Comprender su composición es importante para anticipar su comportamiento durante el procesamiento y garantizar la idoneidad de su elección en función de su diseño y propósito. 
        h5 De igual forma, comprender la composición de una fibra es la base de su utilidad. Con la composición se logra identificar su comportamiento al ser manipuladas; la combustión es el proceso más común para la identificación de cada componente
      .col-md-6.mb-4(data-aos="fade-left")
        img(src='@/assets/curso/temas/tema3/img.png' alt='')
    
    .row.mb-3
      .col-md-4.mb-4(data-aos="fade-right")
        img(src='@/assets/curso/temas/tema3/img2.png' alt='')
      .col-md-8.mb-4(data-aos="fade-left")
        p Para identificar las fibras que componen un tejido determinado depende de la naturaleza de la muestra, la experiencia del analista y el equipo disponible. Para determinar con precisión su composición, se deben combinar varias pruebas de identificación. Uno de los métodos más simples es utilizar la prueba de identificación del análisis de combustión.
        p El #[b análisis pirognóstico] es un método muy sencillo que proporciona información sobre la naturaleza de las fibras que componen los tejidos que trabajamos. También se llama prueba de combustión. La prueba consiste en exponer las fibras o hilos del material textil que queremos identificar a una llama y analizar cómo se queman, su olor y los residuos después de la combustión.
        p Para realizar la prueba se requieren muestras textiles 5cm x 5cm, un mechero o veladora, cenicero, papel aluminio, pinzas y tijeras. Además se deben tener en cuenta las normas específicas de seguridad en el trabajo. Se observa en el recurso el uso de los elementos base para la prueba.
        
    
    .row.fondo-tema3.align-items-center.mb-5.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          h4.t-red(data-aos="fade") Elementos de prueba textil
          h5.mb-md-5.mb-4(data-aos="fade") Además se deben tener en cuenta las normas específicas de seguridad en el trabajo. Se observa en el recurso el uso de los elementos base para la prueba.

          .col-md-8(data-aos="fade-down")
            figure
              img(src="@/assets/curso/temas/tema3/fig.svg", alt="Elementos de prueba textil")


    h4.t-red(data-aos="fade") Procedimiento experimental
    h5.mb-md-5.mb-4(data-aos="fade") A continuación se observan los pasos del procedimiento experimental.

    .row.justify-content-center
      .col-md-10(data-aos="fade-down")
        PasosA.color-acento-contenido.mb-5(tipo="n")
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              h4 Observación
              p Con hilos de tejido extraídos, observar diferencias de brillo, color o forma.
            .col-md-3
              img(src='@/assets/curso/temas/tema3/paso-img1.png', alt='')
          .row.align-items-center
            .col-md-3.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema3/paso-img2.png', alt='')
            .col-md-8
              h4 Prueba de calor
              p Además de saber las cantidades, el PMP también ayuda a definir las fechas de entrega, de acuerdo con los recursos disponibles.
          
          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              h4 Comportamiento de la quema
              p Dejar quemar el hilo y analizar si arde o se funde y la rapidez al hacerlo. Observar el comportamiento de la llama.
            .col-md-3
              img(src='@/assets/curso/temas/tema3/paso-img3.png', alt='')
          .row.align-items-center
            .col-md-3.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema3/paso-img4.png', alt='')
            .col-md-8
              h4 Análisis de componentes
              p Al retirar los residuos de la muestra analizar el olor (vinagre, desagradable, pelo quemado, dulce, aromático), si aún arde o se autoextingue. 

          .row.align-items-center
            .col-md-8.mb-4.mb-md-0
              h4 Análisis de humo
              p Observar el color del humo que se desprende.
            .col-md-3
              img(src='@/assets/curso/temas/tema3/paso-img5.png', alt='')
          .row.align-items-center
            .col-md-3.mb-4.mb-md-0
              img(src='@/assets/curso/temas/tema3/paso-img6.png', alt='')
            .col-md-8
              h4 Análisis de ceniza
              p Por último, analizar las cenizas cuando están frías, la cantidad, el color, la textura (dura o blanda).

    .row.fondo2-tema3.align-items-center.py-5
      .col-lg-12.col-12.px-lg-5.px-4
        .row.justify-content-center.align-items-center

          .col-md-10.mb-5(data-aos="fade-down")  
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-md-4
                  img.px-md-4(src="@/assets/curso/temas/tema3/video.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Identificación de fibras
                      p.mb-0 Observe atentamente el video #[em Identificación de fibras], y descargue su respectiva presentación, en el cual podrá ver el procedimiento detalladamente.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="('https://www.youtube.com/watch?v=xL89_BMN61I')" target="_blank")
                        span Ver video
                        i.fas.fa-video
          
          p.mb-4(data-aos="fade") Como se ha podido observar a lo largo del componente, los principales elementos que hacen parte de la industria de la moda en la confección de prendas son los obtenidos a partir de las fibras como los textiles y los hilos que son la base estructural en el desarrollo de tejidos planos, de punto y no tejidos; por ello, en este apartado se abordarán las principales características que debe contener una ficha técnica de textiles e insumos. 

          .col-md-10(data-aos="fade-down") 
            .tarjeta.bg-blue.mb-5.p-4
              .row 
                .col-md-2.col-5.mb-4.mb-md-0.px-md-3
                  img.px-md-4(src='@/assets/curso/temas/tema3/alert.svg' alt='Alerta')
                .col-md-10
                  h5 ¿Qué es una ficha técnica?
                  p.mb-0 Es un documento estructurado de tal manera que contenga las características o funciones de un producto textil, es de mucha utilidad en las empresas de confección dado que permite dar una lectura rápida respecto a un material que es necesario dentro de la cadena de producción de una prenda.

          h5.mb-4(data-aos="fade") Las partes que se sugieren debe tener una ficha técnica para un textil son: 

          .row.align-items-center.mb-4
            .col-md-9.mb-4(data-aos="fade-right")
              ul.lista-ul--color.color-primario
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Nombre del material textil:] nombre del textil.
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Referencia:] el número consecutivo o asignado.
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Composición:] según las fibras que contiene, por ejemplo: 40% algodón – 50% poliéster.
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Ancho:] el máximo acabado.
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Peso:] peso por metro.
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Tipo de tela:] características generales. 
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Tipo de tejido:] si es plano o de punto.
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Encogimiento al lavado:] según pruebas realizadas al textil en laboratorio, esta información la dan las textileras.
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Tintura o tipo de estampado:] el tipo de tintura al que ha sido sometido o si es estampación, esta información la dan directamente las textileras.
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Colores:] de acuerdo con el porcentaje de cada color según Pantone, esta información la da directamente la textileras.
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Información de lavado:] cuidados para el lavado.
                li.mb-1
                  i.fas.fa-tshirt
                  | #[b Información de secado:] cuidados para el secado.
                li
                  i.fas.fa-tshirt
                  | #[b Porcentaje de retención de agua:] porcentaje que retiene al someterla a lavado. 
            .col-md-2.mb-4(data-aos="fade-left")
              img(src='@/assets/curso/temas/tema3/icono.svg' alt='AvatarTop')

          h4.t-red(data-aos="fade") Ejemplos de fichas técnicas
          p.mb-md-5.mb-4(data-aos="fade") Las fichas técnicas pueden tener variaciones, dado que implica ajustarse a las necesidades de cada empresa por tanto los apartados mencionados anteriormente se sugieren para tener en cuenta, pero será la empresa la que determine la información que necesite; a continuación, se muestran tres ejemplos de ficha técnica para un textil.

          .col-md-10.mb-4(data-aos="fade-down")  
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-md-4
                  img.px-md-4(src="@/assets/curso/temas/tema3/img.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-0 Imagen 5_Ejemplo 01_ficha tecnica.png
                    .col-sm-auto
                      a.boton.color-acento-botones(@click="modal1 = true")
                        span Ver imagen
                        i.fas.fa-image
          
          .col-md-10.mb-4(data-aos="fade-down")  
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-md-4
                  img.px-md-4(src="@/assets/curso/temas/tema3/img.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-0 Imagen 6_Ejemplo 02_ficha tecnica.png
                    .col-sm-auto
                      a.boton.color-acento-botones(@click="modal2 = true")
                        span Ver imagen
                        i.fas.fa-image
                        .indicador--click(v-if="mostrarIndicador")
          
          .col-md-10.mb-5(data-aos="fade-down")  
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-md-4
                  img.px-md-4(src="@/assets/curso/temas/tema3/img.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-0 Imagen 7_Ejemplo 03_ficha tecnica.png
                    .col-sm-auto
                      a.boton.color-acento-botones(@click="modal3 = true")
                        span Ver imagen
                        i.fas.fa-image

          ModalA(:abrir-modal.sync="modal1")
            .row.align-items-center.justify-content-center
              .col-md-8
                figure
                  img(src='@/assets/curso/temas/tema3/Imagen-5_Ejemplo_01_ficha_tecnica.png', alt='Ejemplo ficha técnica')
                  figcaption.mt-2 Tomado de Tèxtil Balsareny (2021).
          ModalA(:abrir-modal.sync="modal2")
            .row.align-items-center.justify-content-center
              .col-md-8
                figure
                  img(src='@/assets/curso/temas/tema3/Imagen-6_Ejemplo_02_ficha_tecnica.jpeg', alt='Ejemplo ficha técnica')
                  figcaption.mt-2 Tomado de Ayelén Peregrino (2011).
          ModalA(:abrir-modal.sync="modal3")
            .row.align-items-center.justify-content-center
              .col-md-8
                figure
                  img(src='@/assets/curso/temas/tema3/Imagen-7_Ejemplo_03_ficha_tecnica.png', alt='Ejemplo ficha técnica')
                  figcaption.mt-2 Tomado de Consorcio textil Vianny SAC (2015)


          p.mb-4(data-aos="fade") En el caso de las fichas técnicas empleadas para los hilos en la confección, la información que se sugiere debe contener es la siguiente: 
          
          ul.lista-ul--color.color-primario.mb-5(data-aos="fade")
            li.mb-1
              i.fas.fa-tshirt
              | #[b Gama de producto:] en la que contenga la numeración Tex, etiqueta, resistencia, elongación mínima y máxima, tamaño de aguja métrico.
            li.mb-1
              i.fas.fa-tshirt
              | #[b Número de cabos:] de los que está compuesto el hilo.
            li.mb-1
              i.fas.fa-tshirt
              | #[b Propiedades térmicas:] si se derrite o suaviza a temperaturas especificas.
            li.mb-1
              i.fas.fa-tshirt
              | #[b Propiedades químicas:] como el tipo de blanqueamiento, sensibilidad a insectos, ácidos minerales, recuperación de humedad.
            li
              i.fas.fa-tshirt
              | #[b Propiedades de resistencia:] en lavados, al agua, frote, hipoclorito, lavado en seco, transpiración y luz artificial.

          .col-md-10.mb-5(data-aos="fade-down")  
            .tarjeta.bg-color-secundario.p-3
              .row.justify-content-around.align-items-center
                .col-3.col-sm-2.col-lg-2.px-md-4
                  img.px-md-4(src="@/assets/curso/temas/tema3/pdf.svg")
                .col.ps-md-0
                  .row.justify-content-between.align-items-center
                    .col.mb-3.mb-sm-0
                      h3.mb-1 Ficha técnica
                      p.mb-0 Lo invitamos a revisar en el material complementario #[em la ficha técnica de un hilo], recuerda que cada empresa ajusta su ficha técnica según necesidades o requerimientos propios.
                    .col-sm-auto
                      a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo-7_Ficha_tecnica_hilo.pdf')" target="_blank")
                        span Descargar
                        i.fas.fa-download       




</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
    mostrarIndicador: true,
    modal1: false,
    modal2: false,
    modal3: false,
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
