<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p El componente formativo aborda las temáticas clave para la formalización de las organizaciones de economía solidaria. El recorrido parte del proceso de creación de la organización, que comprende la convocatoria de la asamblea de constitución y la elaboración del acta de constitución, hasta los trámites requeridos ante la entidad competente para el registro y reconocimiento de la nueva persona jurídica bajo este modelo económico.
    p Asimismo, se desarrolla la estructura de un modelo estatutario aplicado a una Cooperativa de Trabajo Asociado (CTA), como ejemplo orientador del contenido, la función y los alcances que debe tener este instrumento, en coherencia con los valores, principios y fundamentos de la economía solidaria, y con las especificidades propias de su actividad económica centrada en el trabajo asociado.
    p El siguiente mapa conceptual organiza de manera visual los ejes temáticos del componente formativo y las relaciones que los articulan:

    .row.justify-content-center
      .col-lg-10.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El mapa conceptual titulado Panorama de las organizaciones de economía solidaria organiza el tema central en cuatro ejes: formalización de las organizaciones, modelo estatutario, asociatividad y ruta de formalización. El eje de formalización abarca la estructura organizacional, su definición, características y tipos. El modelo estatutario desarrolla sus tipos, elementos esenciales, contenido y diferencias. La asociatividad recorre su definición, clasificación, normatividad y administración de la organización solidaria. La ruta de formalización incluye la elaboración de estatutos como paso concreto para la constitución legal de la organización.")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
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
