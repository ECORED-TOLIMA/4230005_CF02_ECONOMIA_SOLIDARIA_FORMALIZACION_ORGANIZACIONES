<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Ruta práctica de formalización

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema4/img1.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        p.mb-4 La ruta práctica de formalización es el conjunto ordenado de pasos que permite transformar una iniciativa colectiva en una organización de economía solidaria legalmente constituida, con plena capacidad para operar, contratar, acceder a financiación y recibir el respaldo del Estado. Este proceso no surge de manera espontánea ni improvisada, requiere planificación, voluntad colectiva y conocimiento claro de los procedimientos, los documentos y las entidades que intervienen en cada etapa. Recorrerla correctamente garantiza que la organización nazca con bases jurídicas sólidas y con una identidad solidaria coherente desde su origen.
        .tarjeta-bg01.p-3(data-aos="fade-up")
          .row
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema4/img2.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Antes de iniciar los trámites formales, es indispensable que los asociados fundadores hayan alcanzado acuerdos fundamentales sobre el propósito de la organización, el tipo de entidad solidaria que se va a constituir y las reglas básicas que la regirán. Estos acuerdos previos no solo facilitan el desarrollo de cada paso, sino que reducen significativamente los conflictos internos que suelen surgir cuando la formalización se afronta sin una base de consenso. En este proceso participan tanto los propios asociados como entidades externas, las Cámaras de Comercio, la DIAN y la Supersolidaria, cada una con funciones y momentos de intervención específicos.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p.mb-0 La ruta se estructura en siete pasos secuenciales que deben cumplirse en el orden establecido, dado que cada uno genera los documentos y condiciones necesarios para avanzar al siguiente. Omitir o alterar el orden de estos pasos puede derivar en registros incompletos, rechazos ante las entidades competentes o inconsistencias jurídicas que comprometan la validez de la organización. A continuación, se describen cada uno de estos pasos con sus requisitos, responsables y resultados esperados, de modo que el aprendiz pueda identificar con claridad en qué momento se encuentra una organización solidaria y qué acciones debe emprender para avanzar en su proceso de constitución.
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema4/img3.svg', width='180', alt='Texto que describa la imagen')
 
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Idea")
            .col-md-12
              p Etapa inicial en la que un grupo de personas identifica una necesidad común y evalúa la viabilidad de constituir una organización solidaria para atenderla. Es el momento de la voluntad colectiva, el diálogo y el compromiso mutuo, antes de cualquier trámite legal. Para avanzar en esta etapa, es fundamental:
              ul.lista-ul
                li #[b •] Definir el propósito colectivo y el objeto social de la futura organización.
                li #[b •] Identificar el tipo de organización solidaria más adecuado: cooperativa, fondo de empleados o asociación mutual.
                li #[b •] Conformar el grupo de asociados fundadores y evaluar la viabilidad económica y social de la iniciativa.
                
          .row(numero="2" titulo="Asamblea de constitución")
            .col-md-12
              p Reunión fundacional en la que los asociados aprueban los estatutos, eligen los órganos de administración y control, y suscriben el acta que da origen legal a la organización solidaria. Para llevarla a cabo correctamente, se debe:
              ul.lista-ul
                li #[b •] Convocar a los asociados fundadores con al menos cinco días de anticipación.
                li #[b •] Aprobar el nombre, el domicilio y el objeto social de la organización.
                li #[b •] Elegir los miembros del consejo de administración, la junta de vigilancia y el revisor fiscal.
                li #[b •] Elaborar y firmar el acta de constitución con la participación de todos los asistentes.
          
          .row(numero="3" titulo="Elaboración de estatutos")
            .col-md-12
              p Proceso de redacción del documento normativo que regula el funcionamiento interno de la organización: sus órganos, los derechos y deberes de los asociados, el régimen económico y los mecanismos de toma de decisiones. Este documento debe contemplar, entre otros aspectos:
              ul.lista-ul
                li #[b •] Los elementos mínimos exigidos por la Ley 454 de 1998 y la normativa específica del tipo de organización.
                li #[b •] El régimen de aportes, la distribución de excedentes y las causales de retiro o exclusión de asociados.
                li #[b •] La aprobación en asamblea antes de su presentación ante la Cámara de Comercio.
              
          .row(numero="4" titulo="Registro en cámara de comercio")
            .col-md-12
              p Trámite mediante el cual la organización obtiene personería jurídica e inscribe su existencia, sus estatutos y sus representantes legales ante el registro público de entidades solidarias. Para completar este registro se requiere:
              ul.lista-ul
                li #[b •] El acta de constitución firmada y los estatutos debidamente aprobados en asamblea.
                li #[b •] Los formularios de registro diligenciados en la Cámara de Comercio del domicilio de la organización.
                li #[b •] El pago de los derechos de inscripción y la obtención del certificado de existencia y representación legal.
                   
          .row(numero="5" titulo="Registro Único Tributario (RUT)")
            .col-md-12
              p Inscripción ante la Dirección de Impuestos y Aduanas Nacionales (DIAN) mediante la cual la organización obtiene su Número de Identificación Tributaria (NIT) y queda habilitada para cumplir sus obligaciones fiscales dentro del régimen especial sin ánimo de lucro. Este registro implica:
              ul.lista-ul
                li #[b •] La presentación del certificado de existencia y representación legal ante la DIAN.
                li #[b •] La definición de las responsabilidades tributarias aplicables al tipo de organización solidaria.
                li #[b •] La obtención del NIT, indispensable para emitir facturas, firmar contratos y realizar operaciones financieras.
                   
          .row(numero="6" titulo="Apertura de cuenta bancaria")
            .col-md-12
              p Gestión que permite a la organización administrar sus recursos financieros de manera formal, transparente y trazable, separando el patrimonio de la entidad de sus asociados o representantes legales. Para dar la apertura, la entidad financiera generalmente solicita:
              ul.lista-ul
                li #[b •] El certificado de existencia y representación legal junto con el RUT actualizado.
                li #[b •] El documento de identidad del representante legal y el acta de su nombramiento debidamente inscrita.
                li #[b •] La definición de los mecanismos internos de autorización para el manejo de los recursos de la cuenta.
                   
          .row(numero="7" titulo="Registro en la Supersolidaria:")
            .col-md-12
              p Inscripción obligatoria ante la Superintendencia de la Economía Solidaria, entidad que ejerce funciones de inspección, vigilancia y control sobre las organizaciones del sector, garantizando su operación dentro del marco legal vigente. Este proceso implica:
              ul.lista-ul
                li #[b •] El reporte de la información básica de la organización en el sistema de la Supersolidaria.
                li #[b •] El cumplimiento de los requisitos documentales exigidos según el tipo de organización solidaria.
                li #[b •] La programación de los informes periódicos de gestión, contables y sociales que deben presentarse ante la entidad.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p 
        .bloque-texto-gg.bloque-texto-gg--inverso.color-primario
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema4/img4.png')})`}"
          )
          .bloque-texto-gg__texto.p-4
            p.mb-0 Recorrer los siete pasos de la ruta de formalización no es simplemente cumplir una serie de requisitos administrativos, es construir, paso a paso, la arquitectura legal y organizativa que sostendrá la vida de la entidad solidaria a largo plazo. Cada etapa tiene un propósito específico y un resultado concreto que habilita la siguiente; por eso, la secuencia no es arbitraria, sino que responde a una lógica jurídica y administrativa que las organizaciones deben respetar para garantizar la validez de su constitución. Una organización que formaliza correctamente sus procesos desde el inicio reduce significativamente el riesgo de conflictos internos, sanciones legales o pérdida de credibilidad ante sus asociados y ante el Estado.
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-bg05.p-3.mb-5(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema4/img5.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.text-bold.mb-0 Registrarse no es el fin del proceso: es el inicio de una responsabilidad continua de transparencia, reporte y buen gobierno que la organización solidaria asume ante sus asociados y ante el Estado.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema4/img6.png', alt='Texto que describa la imagen')
      .col-lg-9   
        .row.justify-content-center.align-items-center
          p.mb-2 Asumir esta responsabilidad de manera consciente requiere que los asociados interioricen cuatro principios esenciales que orientan el comportamiento de toda organización solidaria formalmente constituida. Estos principios no son requisitos adicionales impuestos desde afuera, son el reflejo de los valores con los que la organización decidió nacer y la garantía de que su gestión se mantendrá coherente con su propósito solidario a lo largo del tiempo. A continuación, se presentan estas cuatro ideas clave:
          .col-lg-11
            .tarjeta--fondo1.p-5
              ol.lista-ol--cuadro
                li
                  i.fas.fas.fa-hexagon-nodes
                  |  #[b La secuencia importa:] cada paso es condición del siguiente. Omitir o invertir el orden puede invalidar el proceso de constitución.
                li
                  i.fas.fas.fa-hexagon-nodes
                  |  #[b La formalización no es el fin:] registrarse es el comienzo. La organización adquiere obligaciones de reporte y transparencia que se mantienen en el tiempo.
                li
                  i.fas.fas.fa-hexagon-nodes
                  |  #[b Los estatutos son la norma interna:] todo conflicto o decisión interna se resuelve con base en los estatutos. Su redacción clara y completa protege a la organización.
                li
                  i.fas.fas.fa-hexagon-nodes
                  |  #[b La Supersolidaria es aliada:]  no solo controla, también orienta, capacita y acompaña a las organizaciones solidarias en el cumplimiento de sus obligaciones.
                
    .row.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-1
        p.mb-4 Más allá del cumplimiento normativo, la formalización de una organización solidaria tiene una dimensión social que no debe perderse de vista, al constituirse legalmente, el grupo de asociados asume ante su comunidad y ante el Estado el compromiso de gestionar de manera colectiva, democrática y transparente los recursos y los beneficios que genera su actividad. Este compromiso se concreta en la participación activa de los asociados en las asambleas, en el respeto a los estatutos como norma de convivencia interna y en la rendición de cuentas permanente ante quienes conforman la organización. En ese sentido, la ruta de formalización no es solo un camino hacia la legalidad, sino hacia la legitimidad.
        .tarjeta.tarjeta-bg01.p-4.h-100.mb-4(data-aos="fade-up")
          .row
            .col-lg-auto.d-none.d-lg-block.mb-3
              figure
                img(src='@/assets/curso/temas/tema4/img7.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La organización solidaria que recorre esta ruta con rigor, participación y transparencia no solo cumple con la ley, se convierte en un actor económico y social con plena capacidad para transformar su entorno, generar bienestar entre sus asociados y contribuir al desarrollo de su comunidad. La formalización es, en definitiva, el primer acto colectivo con el que una organización solidaria demuestra que sus principios no son solo declaraciones, sino compromisos que se materializan en decisiones, documentos y acciones concretas.
      .col-lg-3.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema4/img8.svg', width='180', alt='Texto que describa la imagen')
            


</template>

<script>
export default {
  name: 'Tema3',
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
