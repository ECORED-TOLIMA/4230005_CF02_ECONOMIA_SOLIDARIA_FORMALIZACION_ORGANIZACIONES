<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Asociatividad 

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img1.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La asociatividad es una estrategia de coordinación y unión voluntaria entre personas, organizaciones o entidades territoriales para alcanzar objetivos comunes, mejorar la competitividad y superar las limitaciones que individualmente serían difíciles de resolver. Lejos de ser un concepto abstracto, la asociatividad se manifiesta en acciones concretas como la creación de redes productivas, la gestión colectiva de recursos, el acceso compartido a mercados y tecnología, y la construcción de proyectos solidarios que generan economías de escala y dinamizan el desarrollo local.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        .row.justify-content-center.mb-3
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img2.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 En el contexto de la economía solidaria, la asociatividad no es solo un instrumento de eficiencia económica, es la expresión práctica de los principios que dan identidad a este sector. Cuando las personas se asocian voluntariamente bajo los valores de la cooperación, la solidaridad y la autogestión, no solo resuelven necesidades colectivas, sino que construyen comunidades más organizadas, participativas y sostenibles. Comprender la asociatividad desde esta perspectiva es fundamental para identificar sus formas, sus tipos y las normas que la regulan en Colombia.
      .col-lg-4.col-8.order-1.order-lg-2.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img3.png', width='180', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta-bg05.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img4.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La asociatividad no es solo unirse: es organizarse con propósito. Cuando la cooperación se convierte en estructura, los objetivos individuales se transforman en logros colectivos.

    separador

    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.1 Asociatividad territorial

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p.mb-4 La asociatividad territorial es un principio del ordenamiento y el desarrollo territorial que se materializa en la conformación de asociaciones entre entidades territoriales e instancias de integración, con el fin de aprovechar economías de escala, generar sinergias y alcanzar objetivos de desarrollo comunes. En Colombia, este principio puede aplicarse de dos maneras:
        .tarjeta-bg02.p-3.mb-2(data-aos="fade-up")
          .row
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img5.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Conformar asociaciones entre entidades territoriales bajo la figura de Esquemas Asociativos Territoriales (EAT), para generar sinergias y alianzas competitivas orientadas al desarrollo regional.
        .tarjeta-bg01.p-3(data-aos="fade-up")
          .row
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img6.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Colaborar entre entidades territoriales para aunar recursos en proyectos, iniciativas o necesidades de corto plazo, haciendo uso de inversión en otras jurisdicciones.
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img7.png', width='180', alt='Texto que describa la imagen')
    
    .row.mb-4
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-10
        p.mb-0 Hasta noviembre de 2023, un total de 66 Esquemas Asociativos Territoriales (EAT) se habían registrado ante el Ministerio del Interior, en cumplimiento del artículo 249 de la Ley 1955 de 2019 y del Decreto 1033 de 2021, que reglamenta su funcionamiento. La siguiente tabla presenta la distribución de estos esquemas según la figura asociativa a la que pertenecen:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 4.
          span  Esquemas asociativos territoriales registrados en Colombia a noviembre de 2023
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr.tarjeta-bg06
                  th.text-center Tipo de esquema asociativo territorial
                  th.text-center.w-25 Cantidad registrada
              tbody
                tr
                  td Asociaciones de municipios.
                  td.text-center 39
                tr
                  td Áreas metropolitanas.
                  td.text-center 6
                tr
                  td Provincias administrativas y de planeación.
                  td.text-center 6
                tr
                  td Regiones de planeación y gestión.
                  td.text-center 7
                tr
                  td Regiones administrativas y de planificación.
                  td.text-center 8
            figcaption #[b Nota.] Adaptado de Sistema de Registro de Esquemas Asociativos, por Ministerio del Interior, 2023.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8.order-2.order-lg-1
        p.mb-4 Los datos presentados evidencian que la asociatividad territorial en Colombia es una práctica consolidada y en crecimiento. La predominancia de las asociaciones de municipios, que representan más de la mitad de los esquemas registrados, refleja la importancia de la cooperación intermunicipal como herramienta de planificación y desarrollo regional. Esta integración entre entidades territoriales fortalece la gestión pública, orienta la inversión estratégica y permite que los territorios alcancen objetivos que individualmente serían difíciles de lograr.
        .tarjeta-bg04.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img8.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La asociatividad territorial y la asociatividad rural comparten un mismo fundamento: la convicción de que la acción colectiva genera mejores resultados que el esfuerzo individual. Sin embargo, estas dos expresiones de la asociatividad se diferencian en su escala y en sus actores: 
      .col-lg-4.col-8.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img9.png', width='180', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-4
      .col-lg-5
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema3/img10.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h5.text-center Asociatividad territorial
              p.text-center Unión entre entidades territoriales como municipios y departamentos para alcanzar objetivos de desarrollo común, aprovechando economías de escala y generando sinergias de gestión pública.
      .col-lg-5
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema3/img11.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h5.text-center Asociatividad rural
              p.text-center Unión voluntaria de ciudadanos y productores del campo para fortalecer la pequeña producción, mejorar su capacidad de negociación y acceder a programas de desarrollo que individualmente serían difíciles de alcanzar.

    .row.justify-content-center.align-items-center
      .col-lg-3.col-7.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img12.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p.mb-5 Aunque la asociatividad territorial y la rural difieren en su escala y en sus actores, ambas demuestran que organizarse colectivamente amplía las capacidades de quienes participan y genera mejores condiciones para el desarrollo. Esta lógica no es exclusiva del ámbito público ni del sector agropecuario, atraviesa todas las formas de economía solidaria y se convierte en el principio que da sentido a la cooperación entre personas, comunidades y organizaciones.
        .tarjeta-bg01.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img13.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 En ambos casos, la clave está en comprender qué es la asociatividad en su sentido más profundo, cuáles son los principios que la orientan y por qué se convierte en un motor de desarrollo sostenible. Ese es precisamente el análisis que se desarrolla a continuación.
   
    separador

    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.2 Concepto de asociatividad  

    .bloque-texto-g.bloque-texto-g--inverso.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img14.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La asociatividad en la economía solidaria se entiende como un enfoque estratégico basado en la cooperación, la confianza y la ayuda mutua, mediante el cual personas o pequeñas unidades productivas se organizan de manera voluntaria para alcanzar objetivos comunes. Su propósito principal no es la obtención de lucro individual, sino el mejoramiento de la gestión, la productividad y el bienestar colectivo, contribuyendo de forma directa al desarrollo social y económico de las comunidades.
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-0 Este modelo se distingue por promover la autogestión y la democracia interna. Los miembros participan activamente en la dirección y la toma de decisiones, garantizando igualdad de derechos y deberes. La regla de un miembro, un voto refleja el carácter equitativo de estas organizaciones, donde cada persona tiene la misma capacidad de incidir en el rumbo de la entidad, independientemente de su aporte económico. A esto se suma la propiedad colectiva de los medios de producción, que refuerza el sentido de pertenencia y el compromiso de los asociados con el proyecto común.
      .col-auto.d-none.d-lg-block
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-0 Con independencia del campo de aplicación o actividad económica, la implementación de la asociatividad requiere recorrer de manera ordenada los siguientes pasos:

    .row.justify-content-center.mb-4
      .col-7.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/img15.png", alt="Imagen decorativa") 
      .col-lg-6
        LineaTiempoD.color-acento-botones
          p(numero="A" titulo="Identificación de necesidades") Diagnóstico de una necesidad común, como la comercialización conjunta o la compra colectiva de insumos.
          p(numero="B" titulo="Sensibilización y organización") Reunión de personas con intereses afines y formación en cooperativismo, construcción de confianza y definición de acuerdos básicos.
          p(numero="C" titulo="Formalización legal") Constitución mediante actas y estatutos, y registro ante la Cámara de Comercio como entidad sin ánimo de lucro (ESAL).
          p(numero="D" titulo="Aportes y capitalización") Establecimiento de aportes sociales no reducibles que constituyen el patrimonio inicial de la organización.
          p(numero="E" titulo="Funcionamiento y gestión") Puesta en marcha de las actividades productivas o de servicios, con aplicación de los principios solidarios en la administración cotidiana.
          
    .row.justify-content-center.align-items-center
      .col-lg-10
        .tarjeta-bg05.p-3.mb-5(data-aos="fade-up")
          .row
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img16.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La asociatividad solidaria no comienza con un trámite, comienza con una necesidad compartida y la decisión colectiva de resolverla juntos.
        p.mb-0 Una vez comprendido el concepto y los pasos para implementar la asociatividad, es posible conocer las distintas formas en que puede clasificarse según su alcance y estructura.

    separador

    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.3 Clasificación de la asociatividad

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        .tarjeta-bg02.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img17.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La asociatividad no adopta una forma única ni responde a un solo criterio de organización. Para comprenderla en su totalidad, es necesario analizarla desde cuatro dimensiones: el alcance territorial de la iniciativa, el sector económico en el que opera, la naturaleza del vínculo entre sus participantes y el grado de formalización que ha alcanzado. Cada dimensión aporta una perspectiva distinta y, en conjunto, permiten identificar cuál forma asociativa resulta más adecuada para una iniciativa colectiva específica. Estas son las cuatro dimensiones que estructuran su clasificación:
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img18.svg', width='180', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Según el alcance territorial")
            .col
              p La asociatividad puede desarrollarse en diferentes escalas geográficas según la cobertura de sus objetivos y el número de actores que integra. Esta dimensión permite identificar si la iniciativa responde a necesidades locales, regionales o de alcance nacional:
              
              ul.lista-ul
                li #[b • Local:] agrupa personas o unidades productivas de una misma comunidad o municipio. Ejemplo: asociación de paneleros del municipio de Vélez, Santander.
                li #[b • Regional:] articula actores de varios territorios con intereses compartidos, generando economías de escala y mayor capacidad de negociación. Ejemplo: cooperativa cafetera que integra productores de varios municipios del Eje Cafetero.
                li #[b • Nacional:] integra organizaciones de diferentes departamentos bajo un propósito estratégico común, con acceso a mercados amplios y políticas públicas de mayor alcance. Ejemplo: Confederación de Cooperativas de Colombia (Confecoop).
            
          .row(titulo="Según el sector económico")
            .col
              p La asociatividad se aplica de manera transversal en distintos sectores productivos, adaptándose a las condiciones y necesidades propias de cada uno. Esta dimensión permite reconocer en qué campo de la economía se desarrolla la iniciativa colectiva:
              ul.lista-ul
                li #[b • Agrícola:] organiza productores del campo para mejorar la producción y la comercialización de manera colectiva. Ejemplo: cooperativas de cacaoteros en el Huila y Nariño.
                li #[b • Financiero:] articula el ahorro y el crédito solidario sin intermediarios bancarios, mejorando las condiciones de acceso al capital. Ejemplo: fondos de empleados de empresas del sector público.
                li #[b • Servicios:] presta servicios de salud, educación o asistencia social de manera colectiva con enfoque solidario. Ejemplo: mutuales de salud en zonas rurales.
                li #[b • Comercialización:] articula la oferta de varios productores para acceder a mercados formales, reduciendo costos de transacción. Ejemplo: asociaciones de artesanos que comercializan en ferias nacionales e internacionales.
            
          .row(titulo="Según la naturaleza del vínculo entre sus participantes")
            .col
              p La asociatividad se clasifica según el tipo de relación que se establece entre quienes participan. Esta dimensión es clave para entender si la colaboración se produce entre iguales o entre actores de distintos niveles de la cadena productiva:
              ul.lista-ul
                li #[b • Asociatividad horizontal:] se da entre organizaciones o personas de un mismo nivel productivo o social que se unen para complementar capacidades sin relaciones de subordinación. Ejemplo: una red de pequeños productores rurales que comparte maquinaria y canales de distribución.
                li #[b • Asociatividad vertical:] se da entre actores de diferentes eslabones de una cadena productiva, desde la producción hasta la comercialización, que se articulan para generar mayor valor agregado. Ejemplo: una alianza entre productores, transformadores y distribuidores de un mismo producto agrícola.
                li #[b • Asociatividad mixta:] combina vínculos horizontales y verticales para fortalecer simultáneamente la base productiva y el acceso al mercado.
            
          .row(titulo="Según el grado de formalización")
            .col
              p El grado de formalización determina el reconocimiento jurídico de la asociación y su capacidad para actuar legalmente. Se identifican tres niveles:
              ul.lista-ul
                li #[b • Informal:] se expresa en acuerdos de colaboración sin estructura jurídica reconocida por el Estado. Opera sobre la base de la confianza y el compromiso mutuo, pero carece de personería jurídica y de acceso a instrumentos financieros formales.
                li #[b • Semiformal:] cuenta con estatutos propios y mecanismos de organización internos, pero no ha completado su registro ante las entidades competentes. Puede desarrollar actividades colectivas, aunque con limitaciones para contratar, acceder a créditos o participar en convocatorias públicas.
                li #[b • Formal:] constituye una persona jurídica reconocida legalmente, con plena capacidad para contratar, acceder a financiación y rendir cuentas ante las autoridades competentes.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-7.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img19.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        .tarjeta.tarjeta-bg02.p-4.h-100(data-aos="fade-up")
          .row.w-100
            .col-lg-auto.d-none.d-lg-block.mb-3
              figure
                img(src='@/assets/curso/temas/tema3/img20.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-12
              p Las cuatro dimensiones de clasificación presentadas (alcance territorial, sector económico, naturaleza del vínculo y grado de formalización) no operan de manera aislada. En la práctica, una misma iniciativa asociativa puede ser simultáneamente local, del sector agrícola, de carácter horizontal y formal; cada criterio aporta una perspectiva distinta sobre cómo se organiza y funciona esa experiencia colectiva. Reconocer estas dimensiones permite a quienes lideran o acompañan procesos solidarios tomar decisiones más informadas sobre la estructura que mejor responde a sus condiciones y propósitos.
            
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        p.mb-4 A partir de esta clasificación, es posible identificar las formas concretas que adopta la asociatividad en el entorno económico y productivo colombiano. Estas formas, conocidas como tipos de asociatividad, se expresan en modelos de colaboración específicos que determinan cómo se relacionan las organizaciones entre sí, cómo comparten recursos y cómo acceden a mercados. Su reconocimiento es el objeto del siguiente apartado.
        .p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img21.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La siguiente tabla sintetiza las cuatro dimensiones de clasificación de la asociatividad con sus categorías, características clave, la ventaja principal que ofrece cada una y un ejemplo del contexto colombiano. Su propósito es facilitar la comparación entre formas asociativas y apoyar la identificación de la modalidad más adecuada según las condiciones de cada iniciativa colectiva.
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img22.svg', width='180', alt='Texto que describa la imagen')
    
    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 5.
          span  Dimensiones de clasificación de la asociatividad en el contexto colombiano
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a     
            table
              thead
                tr.tarjeta-bg06
                  th.text-center(style="width: 20%") Dimensión
                  th.text-center(style="width: 20%") Categoría
                  th.text-center Descripción y ejemplo
              tbody
                tr
                  th.bg-crema-claro.text-center(rowspan="3") Alcance territorial
                  th.text-center Local
                  td Agrupa personas de una misma comunidad. Fortalece el tejido social cercano con menor costo de coordinación. **Ejemplo:** Asociación de paneleros del municipio de Vélez.
                tr
                  th.text-center Regional
                  td Articula actores de varios territorios con intereses comunes, generando economías de escala. **Ejemplo:** Cooperativa cafetera del Eje Cafetero.
                tr
                  th.text-center Nacional
                  td Integra organizaciones de diferentes departamentos bajo un propósito estratégico común. **Ejemplo:** Confecoop.
                
                tr
                  th.bg-crema-claro.text-center(rowspan="4") Sector económico
                  th.text-center Agrícola
                  td Mejora la producción y comercialización colectiva del campo. **Ejemplo:** Cooperativas de cacaoteros en el Huila.
                tr
                  th.text-center Financiero
                  td Articula ahorro y crédito solidario sin intermediarios bancarios. **Ejemplo:** Fondos de empleados del sector público.
                tr
                  th.text-center Servicios
                  td Presta servicios de salud, educación o asistencia social. **Ejemplo:** Mutuales de salud en zonas rurales.
                tr
                  th.text-center Comercialización
                  td Articula la oferta de varios productores para acceder a mercados formales. **Ejemplo:** Asociaciones de artesanos.

                tr
                  th.bg-crema-claro.text-center(rowspan="3") Naturaleza del vínculo
                  th.text-center Horizontal
                  td Une actores del mismo nivel productivo sin jerarquías. **Ejemplo:** Red de productores rurales que comparte maquinaria.
                tr
                  th.text-center Vertical
                  td Articula diferentes eslabones de la cadena productiva para generar mayor valor. **Ejemplo:** Alianza entre productores y distribuidores.
                tr
                  th.text-center Mixta
                  td Combina vínculos horizontales y verticales para fortalecer base y acceso al mercado.
                
                tr
                  th.bg-crema-claro.text-center(rowspan="3") Grado de formalización
                  th.text-center Informal
                  td Opera por acuerdos sin personería jurídica. **Ejemplo:** Grupos de ahorro comunitario (cadenas).
                tr
                  th.text-center Semiformal
                  td Cuenta con estatutos propios, pero sin registro ante el Estado. **Ejemplo:** Grupos rurales en proceso de formalización.
                tr
                  th.text-center Formal
                  td Constituye una persona jurídica con plena capacidad legal. **Ejemplo:** Cooperativas registradas ante Supersolidaria.
            figcaption #[b Nota.] Elaborada con base en los criterios de clasificación de la asociatividad según la Ley 454 de 1998, la Ley 2219 de 2022 y los lineamientos del Departamento Nacional de Planeación (DNP, s. f.).  

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img23.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Las dimensiones presentadas en la tabla evidencian que la asociatividad no responde a un modelo único ni rígido. Por el contrario, se adapta al territorio, al sector productivo, al tipo de relación entre sus participantes y al nivel de reconocimiento jurídico que la organización ha alcanzado. Esta flexibilidad es precisamente la que hace de la asociatividad una estrategia viable para comunidades y organizaciones con realidades diversas, desde un grupo de vecinos que ahorra de manera informal hasta una cooperativa legalmente constituida con presencia en varios departamentos del país.

    p.mb-0 Conocer cómo se clasifica la asociatividad permite comprender su alcance y sus posibilidades. El paso siguiente consiste en identificar las formas concretas que adopta en la práctica, es decir, los tipos de asociatividad, cada uno con una lógica de funcionamiento propia y con aplicaciones específicas en el contexto colombiano.

    separador

    #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.4 Tipos de asociatividad

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        .row.justify-content-center.mb-4
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/tema3/img24.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Los tipos de asociatividad son las formas concretas que adopta la unión voluntaria de personas u organizaciones para alcanzar objetivos comunes sin perder su autonomía. A diferencia de la clasificación, que responde a criterios de análisis como el alcance o el sector económico, los tipos describen modelos de colaboración con estructuras, reglas y propósitos propios. Su conocimiento es fundamental para que una organización solidaria identifique cuál forma de articulación externa responde mejor a sus necesidades productivas, comerciales o sociales.
        .tarjeta.tarjeta-bg02.p-4 En Colombia, la asociatividad puede adoptar distintas formas según el grado de integración entre las organizaciones, el tipo de acuerdo que las vincula y los objetivos que persiguen. Cada tipo representa una posibilidad real de colaboración que ha demostrado su efectividad en diferentes sectores de la economía. A continuación, se describen los seis principales:
      .col-lg-3.col-7.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img25.png', width='180', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-4
      .col-7.col-lg-4
        figure
          img(src="@/assets/curso/temas/tema3/img26.png", alt="Imagen decorativa") 
      .col-lg-6
        LineaTiempoD.color-acento-botones
          p(numero="1" titulo="Redes de cooperación") Conjuntos de organizaciones que comparten información, procesos o recursos sin renunciar a su independencia ni establecer jerarquías entre sus miembros. Su fortaleza radica en la complementación de capacidades y en la construcción de corresponsabilidad frente a objetivos comunes.
          p(numero="2" titulo="Articulación comercial") Relación sostenida entre organizaciones que ofrecen y demandan bienes o servicios, mediada por un agente intermediario (bróker o gestor de negocios). Permite a organizaciones pequeñas acceder a mercados que individualmente no podrían alcanzar por falta de capacidad de negociación.
          p(numero="3" titulo="Alianzas en cadenas productivas") Acuerdos entre actores que participan en distintas etapas de un mismo proceso: producción, transformación, distribución y comercialización. Cada eslabón de la cadena fortalece su competitividad al operar de manera articulada con los demás, generando mayor valor para el producto final.
          p(numero="4" titulo="Clústeres") Concentraciones geográficas de empresas e instituciones que actúan en un mismo campo y obtienen ventajas competitivas por su cercanía territorial. Según Porter (1990), esta proximidad facilita compartir infraestructura, conocimiento especializado y redes de contacto de manera más eficiente que en contextos dispersos.
          p(numero="5" titulo="<em>Joint venture</em> (proyecto conjunto)") Sociedad constituida por dos o más empresas con personería jurídica independiente que unen recursos, tecnología o capacidad productiva para desarrollar una actividad específica. Los beneficios y los riesgos se comparten en proporción a lo que cada parte aporta. Ejemplos reconocidos: McDonald's con Coca-Cola; Nokia con Siemens; Hisun y Pfizer en el sector farmacéutico.
          p(numero="6" titulo="Consorcios") Acuerdo formal mediante el cual dos o más personas u organizaciones se asocian de manera activa y directa para participar en un negocio o proyecto específico, con el propósito de obtener un beneficio común. A diferencia del joint venture, el consorcio no crea una nueva persona jurídica: cada participante mantiene su identidad legal y responde de manera independiente por sus obligaciones.
          
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-8
        .row.justify-content-center.mb-3
          .col-lg-auto.d-none.d-lg-block
            figure
              img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
          .col-lg-10
            p.mb-0 Los seis tipos de asociatividad presentados no son excluyentes entre sí; una organización solidaria puede participar simultáneamente en una red de cooperación, articularse comercialmente a través de un intermediario y hacer parte de una cadena productiva, según las necesidades que enfrente en cada etapa de su desarrollo. Lo que los une es el principio fundamental de la asociatividad, la convicción de que la colaboración genera más valor que la competencia aislada.
        .tarjeta.tarjeta-bg01.p-3 Con el propósito de profundizar en la comprensión de los tipos de asociatividad y su aplicación en el entorno económico colombiano, se presenta a continuación el recurso de audio que desarrolla de manera cercana y práctica las seis formas concretas que adopta la colaboración entre organizaciones solidarias, sus diferencias, sus alcances y los contextos en que cada una genera mayor valor colectivo, permitiendo identificar cuál modelo de articulación responde mejor a las necesidades de una iniciativa solidaria específica.
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img27.png', width='180', alt='Texto que describa la imagen')

    .row.justify-content-center.mb-4
      .col-lg-10
        figure
          img(src='@/assets/curso/temas/tema3/img28.svg', alt='')
        .tarjeta.p-4(style="background-color:#FAF2DF; border-radius: 0 0 20px 20px;")
          .tarjeta.bg-white.p-4.custom-audio-card
            TarjetaAudio.color-acento-botones(
              texto="Tejer redes: las formas de asociatividad que mueven la economía solidaria en Colombia"
              :audio="require('@/assets/curso/temas/audio/audio3.mp3')"
              @audio-hover="mostrarIndicadorTarjetaAudio = false"
            )
              .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
    p.mb-0 Los tipos de asociatividad descritos en este apartado no son formas de organización aisladas; cada una opera dentro de un marco legal que define sus condiciones de constitución, sus derechos y sus obligaciones. Comprender ese marco es el paso siguiente para entender cómo se sostienen jurídicamente estas formas de colaboración en Colombia.

    separador

    #t_3_5.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.5 Normatividad vigente

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-12
        p 
        .bloque-texto-gg.tarjeta-bg03
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema3/img29.png')})`}"
          )
          .bloque-texto-gg__texto.p-4
            p.mb-0 La normatividad vigente constituye el marco que orienta la organización, el funcionamiento y la proyección de las formas asociativas en Colombia. Estas disposiciones permiten establecer condiciones claras para la constitución de las organizaciones, así como para su relación con el Estado y con el entorno productivo. En este sentido, las normas contribuyen a garantizar la legalidad, la transparencia y la sostenibilidad de las iniciativas colectivas.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        p En este contexto, el conjunto de leyes y decretos relacionados con la asociatividad responde a la necesidad de fortalecer la participación, la formalización y el desarrollo económico de los diferentes sectores. Cada norma aborda aspectos específicos que permiten regular las dinámicas organizativas y promover la articulación entre actores. De esta manera, se consolida un sistema normativo que favorece el trabajo colaborativo y el desarrollo territorial.
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img30.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 En el siguiente recurso se presenta una línea de tiempo que reúne las principales normas relacionadas con la asociatividad en Colombia. Esta representación permite identificar su evolución, reconocer su alcance y comprender cómo cada disposición contribuye al fortalecimiento de las organizaciones y al desarrollo territorial:
      .col-lg-3.col-7.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema3/img31.png', width='180', alt='Texto que describa la imagen')
 
    LineaTiempoE.color-primario.mb-5
      .row(titulo="1991" subtitulo="")
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img32.svg', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          h5 Ley 10 de 1991 (Empresas asociativas de trabajo).
          p Regula la creación y funcionamiento de organizaciones en las que los asociados aportan su trabajo y/o bienes, promoviendo beneficios económicos y tributarios para sus integrantes.

      .row(titulo="1993" subtitulo="")
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img33.svg', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          h5 Decreto 1088 de 1993 (Cabildos indígenas).
          p Establece la regulación para la organización y asociación de cabildos indígenas, reconociendo su estructura y fortaleciendo su autonomía.
      
      .row(titulo="2011" subtitulo="")
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img34.svg', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          h5 Ley 1454 de 2011 (Asociatividad territorial)
          p Promueve la articulación entre entidades territoriales para el desarrollo regional, mediante alianzas estratégicas, inversión conjunta y gestión compartida.
      
      .row(titulo="2021" subtitulo="")
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img35.svg', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          h5 Ley 2143 de 2021 (Entidades solidarias y mutualistas)
          p Reconoce a las asociaciones mutualistas como empresas solidarias, otorgándoles identidad, autonomía y vinculación al desarrollo económico del país.
      
      .row(titulo="2022" subtitulo="")
        .col-lg-2
          figure
            img(src='@/assets/curso/temas/tema3/img36.svg', alt='Texto que describa la imagen')
        .col-lg-8.mb-4.mb-lg-0
          h5 Ley 2219 de 2022 (Asociaciones campesinas y agropecuarias)
          p Define el marco jurídico para la constitución y operación de organizaciones de pequeños y medianos productores, facilitando su formalización y relación con el Estado.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-bg02.p-3(data-aos="fade-up")
          .row.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img37.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-9
              p.mb-0 En conjunto, la normatividad vigente permite comprender la importancia de contar con un marco legal que respalde las formas de organización solidaria. Su adecuada aplicación contribuye a garantizar la estabilidad, la equidad y la sostenibilidad de las organizaciones. De esta manera, se promueve el desarrollo integral de los territorios y el fortalecimiento de las capacidades colectivas en el país.
    
    .row.justify-content-center
      .col-lg-11
        p.mb-0 En este contexto, resulta fundamental comprender que el cumplimiento de la normatividad se materializa a través de la gestión y la organización interna de las entidades solidarias. En el siguiente apartado se hace referencia a los elementos relacionados con la administración solidaria, los cuales orientan la planificación, la toma de decisiones y el adecuado funcionamiento de las organizaciones en coherencia con sus principios y su marco legal.
      .col-lg-1
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
    separador

    #t_3_6.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 3.6 Administración solidaria

    .row.justify-content-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img38.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        p.mb-4 La administración solidaria comprende el conjunto de órganos, funciones y mecanismos de participación que orientan el funcionamiento de la organización. Su propósito es garantizar que las decisiones se tomen de forma democrática, que los recursos se gestionen con responsabilidad y que las actuaciones se ajusten a los estatutos y a la normatividad vigente.
        .tarjeta-bg02.p-3.mb-4(data-aos="fade-up")
          .row.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img39.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 En este modelo, la administración no se limita a la dirección operativa, sino que integra espacios de participación, control social y toma de decisiones colectivas. Cada órgano cumple un rol específico dentro de la estructura organizacional, lo que permite equilibrar la gestión, la vigilancia y la ejecución de las actividades, garantizando así la coherencia entre los principios solidarios y la práctica institucional.

    p.mb-4 La comprensión de esta estructura facilita identificar cómo se toman las decisiones, cómo se supervisa la gestión y de qué manera participan los asociados en la vida institucional. A continuación, se describen los principales órganos y sus funciones dentro de la administración solidaria:

    .row.justify-content-center.mb-4
      .col-lg-5
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema3/img40.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h5.text-center Consejo de administración o junta directiva
              p.text-center Es el órgano encargado de orientar la gestión general de la organización y de ejecutar las decisiones adoptadas por la asamblea general. Define planes, programas y políticas, reglamenta los servicios y realiza seguimiento al cumplimiento de los objetivos institucional.
      .col-lg-5
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema3/img41.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h5.text-center Junta de vigilancia o comité de control social
              p.text-center Es el órgano responsable de ejercer control social sobre las actuaciones de la organización. Verifica el cumplimiento de la normatividad, los estatutos y los reglamentos, y formula recomendaciones para mejorar la gestión y corregir posibles irregularidades.
      
    .row.justify-content-center.mb-4
      .col-lg-1
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-11
        p.mb-0 La estructura organizacional de una entidad solidaria no se agota en los órganos de dirección y control social. Para garantizar el funcionamiento integral de la organización, esta requiere además de un control económico especializado, instancias de apoyo a la gestión y un cargo ejecutor responsable de las operaciones cotidianas. Estos tres componentes complementan la arquitectura institucional y hacen posible que las decisiones adoptadas por la asamblea y el consejo se traduzcan en acciones concretas:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        AcordionA(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="A) Revisor fiscal")
            .col
              p.mb-0 Es el responsable del control contable y financiero de la organización, cuando así lo exigen la ley o los estatutos. Su función consiste en verificar la información financiera, garantizar el cumplimiento de las normas legales y emitir conceptos técnicos dentro de su competencia profesional.
              
          .row(titulo="B) Comités de apoyo")
            .col
              p.mb-0 Son instancias que fortalecen la gestión organizacional en áreas específicas. Entre los más relevantes se encuentran el comité de educación y el comité de solidaridad, los cuales promueven la formación de los asociados y el bienestar colectivo.
              
          .row(titulo="C) Gerente o director ejecutivo")
            .col
              p.mb-0 Es el responsable de ejecutar las decisiones del órgano de administración y coordinar el funcionamiento operativo de la organización. Administra los recursos, organiza el trabajo, celebra contratos y presenta informes, planes y presupuestos.
              
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img42.png', width='180', alt='Texto que describa la imagen')
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        p.mb-4 La asamblea general concentra las facultades más relevantes para orientar el rumbo de la organización. Su convocatoria regular no es solo una obligación estatutaria; es el escenario donde la democracia solidaria se ejerce de manera efectiva. A continuación, se presentan las principales funciones que le corresponden:

    .titulo.mb-4
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5 Funciones de la asamblea general

    p.mb-4 Las funciones de la asamblea general reflejan su papel como máxima autoridad y escenario principal de participación democrática. Entre sus principales responsabilidades se encuentran:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .row.justify-content-center.align-items-center
          .col-lg-8
            .tarjeta--fondo1.p-4
              ul.lista-ul
                li
                  i.fas.fas.fa-hexagon-nodes
                  | Definir la misión, la visión y las directrices de la organización.
                li
                  i.fas.fas.fa-hexagon-nodes
                  | Elegir a los miembros de los órganos de administración y control. 
                li
                  i.fas.fas.fa-hexagon-nodes
                  | Examinar informes y aprobar los estados financieros. 
                li
                  i.fas.fas.fa-hexagon-nodes
                  | Decidir sobre la distribución de excedentes.
                li
                  i.fas.fas.fa-hexagon-nodes
                  | Aprobar reformas estatutarias y decisiones estratégicas. 
                li
                  i.fas.fas.fa-hexagon-nodes
                  | Determinar aportes o contribuciones cuando sea necesario. 
                
          .col-lg-4
            figure
              img(src='@/assets/curso/temas/tema3/img43.svg', width='180', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-7.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema3/img44.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p.mb-4 Estas funciones confirman que la asamblea general no opera como un órgano consultivo, sino como la autoridad máxima de la que emanan todas las decisiones estratégicas de la organización. Su ejercicio regular y democrático es la garantía de que el bienestar colectivo prevalezca sobre cualquier interés particular. Según la naturaleza de los asuntos a tratar, la composición de los asistentes y la modalidad de celebración, esta asamblea puede adoptar diversas formas, tal como se presenta a continuación.
        .tarjeta-bg05.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img45.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La asamblea general no es una formalidad: es el espacio donde cada asociado ejerce su derecho a decidir el rumbo de la organización.

    .row.justify-content-center.mb-4
      .col-lg-11
        p.mb-0 La asamblea general no adopta una forma única de celebración. Según la naturaleza de los asuntos que deba resolver, la composición de quienes participan y el medio a través del cual se desarrolla, puede asumir distintas modalidades. Esta flexibilidad permite que la organización mantenga su dinámica democrática incluso en contextos de dispersión geográfica o situaciones imprevistas. A continuación, se presentan las modalidades reconocidas en el ámbito de la economía solidaria:
      .col-lg-1
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
  
    .row.justify-content-center.mb-4
      .col-lg-7
        LineaTiempoD.color-acento-botones
          .row(numero="1" titulo="Según los asuntos a tratar")
            .col-md-12
              p Se clasifican de acuerdo con la finalidad de la reunión y los temas que se deben analizar y decidir dentro de la organización.
              ul.lista-ul
                li #[b • Asamblea de constitución:] formaliza la creación de la organización y aprueba los primeros estatutos.
                li #[b • Asamblea ordinaria:] se realiza periódicamente para atender asuntos regulares, como informes, excedentes y elecciones.
                li #[b • Asamblea extraordinaria:] se convoca para resolver asuntos urgentes o imprevistos. 
                li #[b • Asamblea de disolución:] adopta decisiones relacionadas con la terminación y liquidación de la entidad. 

          .row(numero="2" titulo="Según los asistentes")
            .col-md-12
              p Se organizan en función de quiénes participan en la toma de decisiones dentro de la asamblea.
              ul.lista-ul
                li #[b • Asamblea de asociados:] participan directamente todos los miembros hábiles de la organización. 
                li #[b • Asamblea de delegados:] participan representantes elegidos cuando el número de asociados o las condiciones lo requieren.
                
          .row(numero="3" titulo="Según el medio de celebración")
            .col-md-12
              p Se diferencian según la forma o el canal en que se desarrolla la reunión:
              ul.lista-ul
                li #[b • Asamblea presencial:] se realiza con asistencia física en el lugar convocado.
                li #[b • Asamblea no presencial:] se desarrolla mediante herramientas tecnológicas que permiten la participación simultánea de los asistentes.
                
      .col-7.col-lg-3
        figure
          img(src="@/assets/curso/temas/tema3/img46.png", alt="Imagen decorativa") 

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-bg05.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema3/img16.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La administración solidaria se fundamenta en la articulación entre dirección, ejecución, control y participación. Esta estructura permite que las organizaciones funcionen de manera ordenada, transparente y democrática, garantizando que las decisiones respondan al bienestar colectivo y al cumplimiento de sus principios.
    p.mb-0 En este marco, es importante comprender cómo esta estructura administrativa se materializa en el proceso de creación y formalización de las organizaciones. En el siguiente apartado se hace referencia a la ruta práctica de formalización, donde se presentan los pasos y requisitos necesarios para la constitución legal de una organización solidaria.

    

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
