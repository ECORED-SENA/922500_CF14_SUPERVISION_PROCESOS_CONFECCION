<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 La fundamentación textil agrupa conceptos, procesos y aplicaciones cuya base es primordial en el sector y la industria de la moda, por ello se hace importante reconocer las fibras y su clasificación para entender cómo después de la obtención se pasa por un proceso minucioso que conlleva a la hilatura o hilado para la obtención de hilo con características específicas, que permiten llegar a los tejidos base de la generación de textiles planos y de punto. En el siguiente esquema se expone los elementos principales abarcados.

    .row.justify-content-center
      .col-lg-12.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="Los textiles básicos son el resultado del procesamiento de fibras para convertirlas en hilos y formar tejidos.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
  data: () => ({
    // variables de vue
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
