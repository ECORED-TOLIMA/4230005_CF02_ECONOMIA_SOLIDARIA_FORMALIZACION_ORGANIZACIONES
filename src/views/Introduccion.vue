<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-6.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/intro/img1.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p.mb-4 Constituir una organización de economía solidaria va más allá de realizar un trámite ante la Cámara de Comercio. Implica que un grupo de personas construya de manera colectiva una entidad basada en valores como la cooperación, la solidaridad y el gobierno democrático. A diferencia de otras formas de empresa, el camino hacia la creación legal de cooperativas, fondos de empleados o asociaciones mutuales requiere que los propios asociados adelanten, con anterioridad al registro, una serie de pasos organizativos y documentales que son su responsabilidad directa.
        .row.justify-content-center.mb-3
          .col-lg-auto
            figure
              img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 El propósito de este componente es brindar una comprensión clara del funcionamiento de las organizaciones de economía solidaria, sus tipos, su estructura interna, las normas que las rigen y la ruta concreta para constituirlas legalmente. Su estudio aporta herramientas conceptuales y prácticas para identificar, acompañar o liderar la creación de iniciativas que dinamizan la economía local desde una perspectiva de bienestar colectivo y ayuda mutua.
        
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tarjeta-bg01.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/temas/intro/img2.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 El contenido parte del concepto de formalización y avanza de manera progresiva hacia los tipos de organizaciones solidarias, su estructura de gobierno, el papel de los estatutos como norma interna y, finalmente, la ruta de constitución con sus pasos concretos. Cada sección está pensada para que los fundamentos se comprendan primero y se apliquen después, de manera que al finalizar el componente se cuente con una visión completa y ordenada del proceso de creación de una organización solidaria en Colombia. Para comenzar este recorrido, se recomienda ver el siguiente video introductorio:

    .row.justify-content-center.align-items-center
      .col-lg-12
        figure(data-aos="zoom-in")
          .video
            iframe(width="1401" height="788" src="https://www.youtube.com/embed/IShtP3mfRVc" title="Panorama de las organizaciones de economía solidaria" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen)
            
</template>

<script>
export default {
  name: 'Introduccion',
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
