<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Modelo estatutario

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img1.png', width='180', alt='Texto que describa la imagen')
      .col-lg-8
        p El modelo estatutario es el conjunto de normas internas y disposiciones legales que orientan la creación, organización, funcionamiento y las relaciones entre los asociados de una entidad solidaria. Se materializa en los estatutos, que funcionan como la constitución privada de la organización, ya sea cooperativa, fondo de empleados o asociación mutual.
        .tarjeta-bg01.p-3(data-aos="fade-up")
          .row.justify-content-center
            .col-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img2.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Este modelo no solo regula los aspectos operativos de la organización, sino que garantiza su identidad solidaria, asegurando que la gestión permanezca alineada con los valores de ayuda mutua, autogestión y ausencia de ánimo de lucro. En este sentido, el estatuto define la identidad organizacional, los principios de gestión y las reglas de operación, estableciendo coherencia con valores como la solidaridad, la equidad, la democracia y la participación.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .bloque-texto-gg.bloque-texto-gg--inverso.color-primario
          .bloque-texto-gg__img(
            :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img3.png')})`}"
          )
          .bloque-texto-gg__texto.p-4
            p.mb-0 A diferencia de las empresas de capital, donde el poder de decisión depende del número de acciones, el estatuto solidario garantiza que cada asociado tenga un voto, independientemente de sus aportes económicos. Asimismo, regula los aportes sociales y establece que los beneficios económicos al final del ejercicio no se distribuyen como utilidades privadas, sino que se reinvierten en fondos de educación y solidaridad, o en la mejora de los servicios para los asociados.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-bg05.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img4.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 El estatuto solidario no es un trámite burocrático: es el contrato social que garantiza que el bienestar colectivo prevalezca sobre el interés particular en cada decisión de la organización.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9.order-2.order-lg-1
        .p-4(data-aos="fade-up")
          p.mb-0 En este contexto, el modelo estatutario permite comprender cómo se organizan y regulan internamente las entidades de economía solidaria. A partir de sus principios fundamentales, se establecen elementos clave que orientan la gestión, la participación de los asociados y la sostenibilidad de la organización. A continuación, se presentan estos elementos de manera estructurada para facilitar su comprensión.
        .row.justify-content-center.mb-3
            .col-lg-auto
              figure
                img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 La siguiente tabla sintetiza los principales componentes del modelo estatutario, destacando su función dentro de la organización y el propósito que cumplen en el fortalecimiento de la gestión democrática, la equidad y el bienestar colectivo.
      .col-lg-3.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img5.png', width='180', alt='Texto que describa la imagen')

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 2.
          span  Elementos del modelo estatutario
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a
            table
              thead
                tr.tarjeta-bg06
                  th.text-center.w-20 Elemento clave
                  th.text-center.w-40 Descripción
                  th.text-center.w-40 Propósito en la organización
              tbody
                tr
                  th.bg-crema-claro.text-center Propiedad colectiva
                  td La organización pertenece a todos sus asociados, quienes participan en igualdad de condiciones en su gestión.
                  td Garantizar la participación equitativa y el sentido de pertenencia de todos los miembros.
                tr
                  th.bg-crema-claro.text-center Gobierno democrático
                  td Cada asociado tiene derecho a **un voto**, independientemente del valor de sus aportes económicos.
                  td Promover la toma de decisiones justas, participativas y centradas en la persona.
                tr
                  th.bg-crema-claro.text-center Ingreso de asociados
                  td El estatuto define los requisitos y condiciones para que una persona pueda vincularse formalmente.
                  td Asegurar procesos de vinculación claros, transparentes y organizados bajo el principio de puertas abiertas.
                tr
                  th.bg-crema-claro.text-center Derechos y deberes
                  td Establece el marco de responsabilidades y beneficios que adquiere el asociado al ingresar.
                  td Favorecer la sana convivencia, el compromiso mutuo y la corresponsabilidad institucional.
                tr
                  th.bg-crema-claro.text-center Órganos de administración
                  td Instancias de dirección y control, como la **Junta Directiva**, el **Consejo de Administración** y la **Junta de Vigilancia**.
                  td Garantizar la estructura organizativa, el control social y el cumplimiento de los objetivos misionales.
                tr
                  th.bg-crema-claro.text-center Aportes sociales
                  td Define la forma en que los asociados contribuyen económicamente al capital de la organización.
                  td Fortalecer la base patrimonial y asegurar la sostenibilidad financiera a largo plazo.
                tr
                  th.bg-crema-claro.text-center Distribución de excedentes
                  td Los beneficios netos se reinvierten en servicios o reservas, no se reparten como utilidades privadas.
                  td Priorizar el bienestar colectivo y el fortalecimiento de la entidad sobre el interés individual.
                tr
                  th.bg-crema-claro.text-center Fondos sociales
                  td Reserva de recursos destinados legalmente a la **educación, solidaridad y bienestar social**.
                  td Generar impacto social positivo, formación continua y apoyo solidario a la comunidad.

    p.mb-4 Los elementos presentados evidencian cómo el modelo estatutario orienta la organización interna, la toma de decisiones y la gestión de los recursos en las entidades de economía solidaria. Cada componente cumple una función específica que contribuye al fortalecimiento de la participación democrática, la equidad y la sostenibilidad organizacional.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-bg05.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img6.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 En este marco, es importante reconocer que el modelo estatutario no es uniforme, sino que se adapta al tipo de organización solidaria, de acuerdo con sus necesidades, características y dinámicas propias dentro del contexto socioeconómico en el que se desarrolla.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img7.png', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        .p-4(data-aos="fade-up")
          p.mb-0 De igual manera, el modelo estatutario cumple una función de protección legal y orientación ética. Al estar sujeto a la supervisión estatal y a los principios de la economía solidaria, contribuye a preservar la naturaleza social de la organización y a evitar su uso con fines individuales. En este sentido, se configura como un acuerdo que orienta la toma de decisiones hacia el bienestar colectivo, permitiendo la adaptación a las condiciones del entorno sin perder su compromiso con la equidad y la justicia social.
        .row.justify-content-center.mb-3
            .col-lg-auto
              figure
                img(src='@/assets/curso/temas/tema2/img8.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Para comprender el alcance del modelo estatutario, es necesario analizar sus componentes fundamentales, los cuales permiten identificar su significado, propósito y efectos en la organización. A continuación, se presentan estos elementos clave:

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="A. Concepto del modelo estatutario")
            .col
              p.mb-0 El modelo estatutario es un acuerdo normativo construido de manera participativa, mediante el cual se establecen las reglas que orientan la vida organizacional. Define la estructura interna, los derechos y deberes de los asociados, y los mecanismos de decisión.
              
          .row(titulo="B. Finalidad del modelo estatutario")
            .col
              p.mb-0 El modelo estatutario orienta el funcionamiento integral de la organización al regular aspectos administrativos, sociales y económicos. Facilita la toma de decisiones, promueve la participación democrática y asegura el cumplimiento de la normatividad vigente.
              
          .row(titulo="C. Impacto del modelo estatutario")
            .col
              p.mb-0 Un modelo estatutario adecuado fortalece la gobernanza, mejora la transparencia y genera confianza entre los asociados. Además, contribuye a la sostenibilidad organizacional y al desarrollo de procesos más eficientes y equitativos.
              
      .col-lg-3.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img9.png', width='180', alt='Texto que describa la imagen')
      
    p.mb-4 El análisis del concepto, la finalidad y el impacto del modelo estatutario permite comprender su papel en la organización y sostenibilidad de las entidades de economía solidaria. Estos elementos orientan la toma de decisiones, fortalecen la participación y garantizan la coherencia entre la gestión y los principios solidarios, favoreciendo su adecuado funcionamiento en el entorno social y económico.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-bg05.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img10.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Un estatuto débil o ambiguo no es un problema administrativo: es un riesgo para la estabilidad y la credibilidad de toda la organización ante sus asociados y ante el Estado.
   
    .row.justify-content-center
      .col-lg-1
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-11
        p.mb-0 A partir de la comprensión del modelo estatutario y su incidencia en la organización, se hace necesario profundizar en sus componentes fundamentales. En este sentido, a continuación, se presentan los elementos que orientan su estructuración, los cuales permiten establecer lineamientos claros para su formulación y adecuada aplicación en las organizaciones de economía solidaria.
    separador
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.1 Elementos esenciales de un modelo estatutario

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-3.col-7.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img11.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p Los elementos esenciales constituyen la base que orienta la organización y el funcionamiento de las entidades de economía solidaria. Su adecuada definición permite establecer reglas claras, coherentes y aplicables en la gestión institucional. Además, facilitan la toma de decisiones y promueven la participación de los asociados. De esta manera, se fortalece la transparencia y la confianza en la organización.
        .tarjeta.tarjeta-bg01.p-4(data-aos="fade-up")
          p.mb-0 En este sentido, la identificación de la organización y la definición del objeto social delimitan su identidad y propósito dentro del entorno. Estos elementos permiten precisar el alcance de sus actividades y orientar su proyección. A su vez, el régimen de asociados regula las relaciones internas mediante derechos, deberes y condiciones de participación. Así, se favorece la equidad y la responsabilidad compartida.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-bg02.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img12.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Por otra parte, los órganos de administración y control establecen la estructura encargada de dirigir y supervisar las actividades organizacionales. Estos mecanismos garantizan el cumplimiento de las decisiones y el seguimiento de los procesos. De igual forma, el régimen económico regula el manejo de los recursos, los aportes y la distribución de excedentes. Con ello, se promueve una gestión eficiente y sostenible.

    p.mb-4 A continuación, se presentan elementos clave que fortalecen la organización interna y permiten anticipar situaciones relevantes en su funcionamiento. Estos componentes contribuyen a establecer reglas claras y a garantizar una gestión coherente, organizada y ajustada a la normatividad vigente:

    .row.justify-content-center.mb-4
      .col-lg-3
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema2/img13.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h5.text-center A) Normas disciplinarias
              p.text-center Establecen reglas para la convivencia y el cumplimiento de responsabilidades dentro de la organización.
      .col-lg-3
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema2/img14.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h5.text-center B) Procedimientos de reforma
              p.text-center Permiten actualizar las disposiciones según las necesidades y cambios del entorno organizacional.
      .col-lg-3
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema2/img15.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h5.text-center C) Disolución y liquidación
              p.text-center Definen acciones claras para el cierre ordenado de la organización cuando sea necesario.
      .col-lg-3
        .tarjeta-avatar.h-100
          img(src='@/assets/curso/temas/tema2/img16.svg' alt='AvatarTop')
          .tarjeta.color-primario.w-100
            .p-4
              h5.text-center D) Anticipación de situaciones
              p.text-center Facilitan la gestión de cambios y la resolución de posibles conflictos internos.

    .row.justify-content-center.align-items-center
      .col-lg-8
        p.mb-4 En conjunto, estos elementos permiten consolidar una estructura organizativa sólida, capaz de adaptarse a los cambios sin perder coherencia ni legalidad. Su adecuada implementación favorece la sostenibilidad institucional y el cumplimiento de los principios que orientan la economía solidaria.
        .tarjeta-bg01.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-2.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img17.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 En este contexto, se hace necesario reconocer la forma en que estos elementos se integran dentro de la estructura normativa de la organización. En el siguiente apartado se hace referencia a los aspectos que conforman el contenido del estatuto, los cuales orientan su elaboración y aplicación en el ámbito organizacional.
      .col-lg-4.col-8.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img18.png', width='180', alt='Texto que describa la imagen')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.2 Contenido del estatuto

    .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-4
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/tema2/img19.png')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 La Superintendencia de Economía Solidaria ha elaborado un modelo guía para la elaboración de estatutos especialmente orientado a las Cooperativas de Trabajo Asociado (CTA), reguladas por el Decreto 4588 de 2006. Este modelo sirve como referencia para comprender los capítulos mínimos que debe contener un estatuto solidario, su estructura y el alcance de cada uno de sus componentes. Aunque el modelo fue diseñado para las CTA, sus elementos esenciales son aplicables, con las adaptaciones propias, a otros tipos de organizaciones solidarias. La siguiente tabla presenta el contenido de este modelo estatutario de referencia:

    .row.justify-content-center.align-items-center.mb-3
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-3
          h5 Tabla 3.
          span  Estatutos de cooperativa de trabajo asociado
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tabla-a.color-acento-contenido 
          .tabla-a   
            table
              thead
                tr.tarjeta-bg06
                  th.text-center.w-15 Capítulo
                  th.text-center.w-25 Título
                  th.text-center Contenido principal
              tbody
                tr
                  th.bg-crema-claro.text-center I
                  td Disposiciones generales.
                  td Naturaleza, razón social, domicilio, ámbito territorial de operaciones y duración.
                tr
                  th.bg-crema-claro.text-center II
                  td Objeto del acuerdo cooperativo y actividades.
                  td Objeto social, actividad socioeconómica, servicios y medios de producción.
                tr
                  th.bg-crema-claro.text-center III
                  td Asociados.
                  td Calidad del asociado, requisitos de admisión, derechos, deberes y retiro.
                tr
                  th.bg-crema-claro.text-center IV
                  td Régimen disciplinario.
                  td Normas de disciplina, faltas, clases y graduación de las sanciones.
                tr
                  th.bg-crema-claro.text-center V
                  td Solución de conflictos.
                  td Mecanismos de solución como conciliación y procedimientos para resolver diferencias.
                tr
                  th.bg-crema-claro.text-center VI
                  td Administración.
                  td Órganos de dirección (asamblea, consejo, comités) y funciones del gerente.
                tr
                  th.bg-crema-claro.text-center VII
                  td Inspección y vigilancia.
                  td Órganos de control social, como la **junta de vigilancia**.
                tr
                  th.bg-crema-claro.text-center VIII
                  td Régimen económico.
                  td Patrimonio, aportes sociales, revalorización y fondos de reserva.
                tr
                  th.bg-crema-claro.text-center IX
                  td Relación de trabajo.
                  td Organización del trabajo y regulación del contenido del régimen laboral asociado.
                tr
                  th.bg-crema-claro.text-center X
                  td Incompatibilidades.
                  td Prohibiciones generales y específicas para directivos y asociados.
                tr
                  th.bg-crema-claro.text-center XI
                  td Régimen de responsabilidad.
                  td Responsabilidad de la entidad, de los asociados y frente a terceros.
                tr
                  th.bg-crema-claro.text-center XII
                  td Transformaciones.
                  td Procesos de fusión, incorporación, escisión y transformación jurídica.
                tr
                  th.bg-crema-claro.text-center XIII
                  td Disolución y liquidación.
                  td Causales de terminación, funciones del liquidador y destino del remanente.
                tr
                  th.bg-crema-claro.text-center XIV
                  td Disposiciones finales.
                  td Períodos de cargos, reglamentación del estatuto y reformas estatutarias.

    .row.justify-content-center.align-items-center.mb-4
      .col-lg-9
        p.mb-4 La organización del contenido estatutario en capítulos permite estructurar de manera clara los aspectos que orientan el funcionamiento de la cooperativa. Cada apartado define responsabilidades, regula procesos y establece mecanismos de control que favorecen la gestión transparente y participativa. De este modo, se garantiza la coherencia entre la normativa interna y los principios de la economía solidaria. Asimismo, se facilita la toma de decisiones y el cumplimiento de la normatividad vigente.
        .tarjeta-bg02.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img20.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 En este contexto, resulta pertinente profundizar en algunos de los componentes clave que estructuran el contenido estatutario. A continuación, se presentan definiciones pedagógicas que permiten comprender la función y alcance de estos elementos dentro de la organización:
      .col-lg-3.col-7.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img21.png', width='180', alt='Texto que describa la imagen')
    
    .row.justify-content-center.mb-4
      .col-7.col-lg-3
        figure
          img(src="@/assets/curso/temas/tema2/img22.png", alt="Imagen decorativa") 
      .col-lg-7
        LineaTiempoD.color-acento-botones
          p(numero="A" titulo="Disposiciones generales") Establece la identidad básica de la organización, incluyendo su naturaleza, su domicilio y su duración, lo cual permite comprender quién es la organización, dónde opera y en qué condiciones desarrolla sus actividades.
          p(numero="B" titulo="Objeto del acuerdo cooperativo") Define la finalidad de la organización y las actividades que realiza para cumplir sus objetivos, orientando su acción económica y social, así como los servicios que ofrece a los asociados.
          p(numero="C" titulo="Régimen de asociados") Regula las condiciones de ingreso, permanencia y retiro de los miembros, así como sus derechos y deberes, garantizando la participación democrática y el cumplimiento de responsabilidades dentro de la organización.
          p(numero="D" titulo="Administración y control") Establece la estructura de los órganos encargados de dirigir, gestionar y supervisar la organización, asegurando que las decisiones se tomen de manera organizada y que las actividades se desarrollen conforme a lo establecido.
          p(numero="E" titulo="Régimen económico") Define la forma en que se administran los recursos, los aportes y los excedentes generados, lo cual permite garantizar la sostenibilidad financiera y el uso adecuado de los recursos colectivos.
          p(numero="F" titulo="Disolución y liquidación") Establece las condiciones y los procedimientos para finalizar las actividades de la organización, asegurando que el cierre se realice de manera ordenada y conforme a la normatividad vigente.

    .row.justify-content-center.align-items-center
      .col-lg-9.order-2.order-lg-1
        p.mb-4 En conjunto, estos elementos permiten comprender la estructura y el alcance del contenido estatutario dentro de la organización. Su adecuada articulación favorece la claridad normativa, orienta la gestión institucional y fortalece la participación de los asociados. De esta manera, se consolida un marco organizativo coherente, que contribuye al cumplimiento de los principios de la economía solidaria y a la sostenibilidad de la organización en el tiempo.
        .tarjeta.tarjeta--gris.p-3(data-aos="fade-up").mb-4
          .row.justify-content-center.align-items-center.mb-4
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img23.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-8
              h5 Guia estatutos cooperativas de trabajo asociado Supersolidaria
              p.mb-0 Para profundizar en los aspectos estatutarios y normativos de las cooperativas de trabajo asociado, se sugiere consultar el siguiente documento guía. 
            .col-sm-auto
              a.boton.color-acento-botones(:href="('https://www.supersolidaria.gov.co/sites/default/files/data/guia-estatutos-cooperativas-de-trabajo-asociado-supersolidaria-sep-09_0.pdf')" target="_blank" type="application/pdf")
                span Enlace Web
                i.fas.fa-file-download
              
        p.mb-0 No todas las organizaciones de economía solidaria se rigen por el mismo modelo estatutario. Cada tipo de entidad responde a una lógica organizativa propia que determina el enfoque, el contenido y los énfasis de sus estatutos. Conocer estas diferencias es fundamental para elegir, desde el momento de la constitución, el modelo normativo que mejor corresponda al propósito colectivo que se desea alcanzar.
      .col-lg-3.col-7.mb-4.mb-lg-0.order-1.order-lg-2
        figure
          img(src='@/assets/curso/temas/tema2/img24.svg', width='180', alt='Texto que describa la imagen')
    
    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-left")
      h2 2.3 Diferencias entre organizaciones

    .row.justify-content-center.mb-4
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema2/img25.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-9
        p El modelo estatutario de una Cooperativa de Trabajo Asociado (CTA) se distingue de los demás porque sitúa el trabajo de los asociados como el eje de toda la organización. A diferencia de los fondos de empleados o las asociaciones mutuales, sus estatutos no regulan el ahorro ni la previsión, sino la relación de trabajo asociado: 
        p.mb-0 A continuación, se presentan las principales diferencias entre los tres tipos de organizaciones de economía solidaria con mayor presencia en Colombia:
    
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-7
        AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--gris")
          .row(titulo="Cooperativa de Trabajo Asociado (CTA)")
            .col
              p.mb-0 Organización en la que los asociados aportan su capacidad de trabajo como principal medio de producción. Su estatuto regula el acuerdo cooperativo de trabajo asociado, las compensaciones y la organización autónoma de las actividades productivas, distinguiéndose por la primacía del trabajo sobre el capital.
              
          .row(titulo="Fondo de empleados")
            .col
              p.mb-0 Entidad sin ánimo de lucro conformada por trabajadores de una misma empresa o sector. Su estatuto regula el régimen de aportes, los préstamos y los beneficios sociales exclusivos para sus afiliados, con énfasis en el ahorro y el crédito como herramientas de bienestar.
              
          .row(titulo="Asociación mutual")
            .col
              p.mb-0 Organización creada para brindar ayuda recíproca entre sus miembros ante riesgos o necesidades específicas, como salud, calamidades o servicios funerarios. Su estatuto define las cuotas de sostenimiento y las condiciones para acceder a los auxilios mutuales, sin que sus beneficios se extiendan necesariamente a terceros.
              
      .col-lg-3.col-7.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/temas/tema2/img26.png', width='180', alt='Texto que describa la imagen')
      
    .row.justify-content-center.align-items-center.mb-4
      .col-lg-10
        .tarjeta-bg03.p-3(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto.d-none.d-lg-block
              figure
                img(src='@/assets/curso/temas/tema2/img27.svg', width='180', alt='Texto que describa la imagen')
            .col-lg-10
              p.mb-0 Las principales diferencias estatutarias entre las organizaciones solidarias no son solo de contenido, sino de enfoque, cada modelo regula lo que es central para ese tipo de entidad. El estatuto de una cooperativa regula la gestión democrática del negocio común; el de un fondo de empleados regula el ahorro y el crédito entre trabajadores; el de una mutual regula la protección ante riesgos; y el de una CTA regula el trabajo autogestionado como fuente de sustento.

    p.mb-4 Conocer estas diferencias permite elegir, desde el inicio, el modelo estatutario que mejor corresponde al propósito colectivo que se desea alcanzar.

    .titulo.mb-4
      img(src='@/assets/curso/temas/icon.svg', alt='Imagen decorativa')
      h5 Principales diferencias estatutarias

    p.mb-4 Las organizaciones de economía solidaria tienen sus particularidades y funciones específicas que hacen posible la destinación a actividades económicas diversas, de allí se origina la diferenciación en el postulado estatutario para su creación y operación.

    
    SlyderF.mb-4(columnas="col-md-4 col-lg-4 col-xl-4")
      .tarjeta.tarjeta-slyderf.tarjeta.tarjeta-bg09.p-4
        .row.justify-content-center
          .col-6
            img(src='@/assets/curso/temas/tema2/img28.svg' alt='Icono')
        h4.text-center Vínculo asociativo y laboral:
        p.text-center Los estatutos de una CTA definen el "Acuerdo Cooperativo de Trabajo Asociado", que regula la actividad física o intelectual autogestionada, diferenciándose de las cooperativas de ahorro o servicios.
      .tarjeta.tarjeta-slyderf.tarjeta.tarjeta-bg09.p-4
        .row.justify-content-center
          .col-6
            img(src='@/assets/curso/temas/tema2/img29.svg' alt='Icono')
        h4.text-center Compensaciones y retribución:
        p.text-center A diferencia de mutuales o cooperativas de servicios, la CTA estatuye mecanismos de "compensación" por el trabajo realizado, no salarios.
      .tarjeta.tarjeta-slyderf.tarjeta.tarjeta-bg09.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img30.svg' alt='Icono')
        h4.text-center Primacía del trabajo:
        p.text-center Los estatutos enfatizan que el ser humano y su trabajo tienen primacía sobre los medios de producción.
      .tarjeta.tarjeta-slyderf.tarjeta.tarjeta-bg09.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img31.svg' alt='Icono')
        h4.text-center Autogestión y autogobierno:
        p.text-center Los asociados fijan sus propias reglas y autogobiernan la organización.
      .tarjeta.tarjeta-slyderf.tarjeta.tarjeta-bg09.p-4
        .row.justify-content-center.mb-3
          .col-6
            img(src='@/assets/curso/temas/tema2/img32.svg' alt='Icono')
        h4.text-center Regímenes especiales:
        p.text-center Los estatutos deben incluir regímenes de trabajo y de compensaciones, definidos específicamente para la CTA.

    .row.justify-content-center.mb-4
      .col-lg-1
        figure
          img(src='@/assets/curso/temas/intro/img3.svg', width='180', alt='Texto que describa la imagen')
      .col-lg-11
        p.mb-0 En resumen, las CTAs se diferencian porque su estructura estatutaria está diseñada para gestionar la fuerza de trabajo y la propiedad conjunta de los medios de producción, a diferencia de otras organizaciones solidarias enfocadas en ahorro o provisión de servicios.


</template>

<script>
export default {
  name: 'Tema2',
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
