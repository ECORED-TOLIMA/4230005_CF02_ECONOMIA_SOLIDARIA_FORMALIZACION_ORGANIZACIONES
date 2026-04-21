<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      #Actividad                
        <Actividad :cuestionario="cuestionario"/>
  </template>
<script>
import Actividad from 'ecored-pkg-fliz/plugin/components/actividad/Actividad.vue'
export default {
  name: 'ActividadDidactica',
  components: {
    Actividad,
  },
  data: () => ({
    cuestionario: {
      tema:
        'Desafío sobre formalización y panorama de las organizaciones de economía solidaria.',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> verificar el grado de apropiación de los conceptos clave sobre los tipos de organizaciones de economía solidaria, su modelo estatutario, la asociatividad y la ruta de formalización en Colombia.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO.',
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de la economía solidaria?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Maximizar utilidades individuales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Generar bienestar común y solidaridad.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Competir en mercados internacionales.',
              esCorrecta: false,
            },
            { id: 'd', texto: 'Reducir costos laborales.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La economía solidaria busca el bienestar colectivo, la ayuda mutua y la distribución equitativa de los beneficios entre sus asociados y la comunidad.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto: '¿Qué caracteriza a una organización de economía solidaria?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Participación democrática.', esCorrecta: true },
            { id: 'b', texto: 'Capital privado exclusivo.', esCorrecta: false },
            { id: 'c', texto: 'Control estatal total.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Enfoque lucrativo individual.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La participación democrática es un principio fundamental en las organizaciones solidarias, cada asociado tiene igual derecho a intervenir en la toma de decisiones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Cuál de los siguientes es un tipo de organización solidaria?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Sociedad anónima.', esCorrecta: false },
            { id: 'b', texto: 'Empresa multinacional.', esCorrecta: false },
            { id: 'c', texto: 'Cooperativa.', esCorrecta: true },
            { id: 'd', texto: 'Holding financiero.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Las cooperativas son una de las principales formas de organización solidaria reconocidas en Colombia, fundamentadas en la propiedad colectiva y la gestión democrática.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué documento regula el funcionamiento interno de una organización de economía solidaria?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Los estatutos.', esCorrecta: true },
            { id: 'b', texto: 'El contrato laboral.', esCorrecta: false },
            { id: 'c', texto: 'El balance financiero.', esCorrecta: false },
            { id: 'd', texto: 'La factura electrónica.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! Los estatutos contienen las normas que rigen la organización: su objeto social, los derechos y deberes de los asociados, y los órganos de administración y control.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué se formaliza en la asamblea de constitución de una organización solidaria?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Los impuestos.', esCorrecta: false },
            { id: 'b', texto: 'Los salarios.', esCorrecta: false },
            { id: 'c', texto: 'Solo el nombre.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La creación formal de la organización.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! En la asamblea de constitución se formaliza la creación de la organización, se aprueban los estatutos y se eligen los órganos de administración y control.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué entidad formaliza la existencia legal de la organización?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'DIAN.', esCorrecta: false },
            { id: 'b', texto: 'Alcaldía.', esCorrecta: false },
            { id: 'c', texto: 'Cámara de Comercio.', esCorrecta: true },
            { id: 'd', texto: 'Banco.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La Cámara de Comercio es la entidad ante la cual se inscribe el acta de constitución y los estatutos, lo que otorga personería jurídica y reconocimiento legal a la organización.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto: '¿Cuál es una ventaja de la economía solidaria?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Concentración de riqueza.', esCorrecta: false },
            { id: 'b', texto: 'Beneficio colectivo.', esCorrecta: true },
            { id: 'c', texto: 'Exclusión social.', esCorrecta: false },
            { id: 'd', texto: 'Competencia desleal.', esCorrecta: false },
          ],
          mensaje_correcto: '¡Correcto! Promueve el bienestar común.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Qué establece el objeto social en los estatutos de una organización solidaria?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los impuestos que debe pagar la organización.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Los salarios del equipo directivo.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El capital externo que puede recibir la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La actividad económica y social principal que desarrollará la organización',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El objeto social describe la finalidad económica y social de la organización, delimitando las actividades que puede desarrollar legalmente.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto: '¿Qué se obtiene al registrarse en la DIAN?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El Número de Identificación Tributaria (NIT).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'El certificado de existencia bancaria.',
              esCorrecta: false,
            },
            { id: 'c', texto: 'Los estatutos aprobados.', esCorrecta: false },
            {
              id: 'd',
              texto: 'La licencia ambiental de funcionamiento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El NIT es el número que identifica a la organización para efectos tributarios y le permite emitir facturas, firmar contratos y realizar operaciones financieras formales.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué entidad supervisa las organizaciones solidarias en Colombia?',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El Ministerio de Educación.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La Superintendencia de la Economía Solidaria (Supersolidaria).',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La Dirección de Impuestos y Aduanas Nacionales (DIAN).',
              esCorrecta: false,
            },
            { id: 'd', texto: 'El Banco de la República.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! La Superintendencia de la Economía Solidaria ejerce funciones de inspección, vigilancia y control sobre las cooperativas, fondos de empleados, asociaciones mutuales y demás entidades del sector solidario.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué es la asociatividad en el contexto de la economía solidaria?',
          imagen: require('@/assets/actividad/imagen1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Una estrategia de competencia empresarial individual.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una actividad económica de carácter individual.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Una herramienta para reducir costos sin colaboración.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La unión voluntaria de personas u organizaciones para alcanzar objetivos comunes mediante la cooperación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La asociatividad implica la cooperación voluntaria entre personas u organizaciones para alcanzar metas compartidas, fortalecer capacidades y generar valor colectivo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué aspectos regula el estatuto en relación con los asociados de una organización solidaria?',
          imagen: require('@/assets/actividad/imagen2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Los salarios del personal externo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Las obligaciones tributarias con el Estado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Los derechos, deberes y condiciones de ingreso, permanencia y retiro de los asociados.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Los productos y servicios que ofrece la organización al público.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El estatuto regula los derechos y deberes de los asociados, así como las condiciones de ingreso, permanencia y retiro, garantizando la participación en igualdad de condiciones.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Cuál de las siguientes puede considerarse una limitación en la gestión de una organización solidaria?',
          imagen: require('@/assets/actividad/imagen3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'La participación activa de los asociados.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Una gestión administrativa débil o poco transparente.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'La solidaridad como principio orientador.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'La cooperación entre los miembros.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Una gestión administrativa débil o poco transparente compromete la sostenibilidad, la confianza de los asociados y el cumplimiento de los principios solidarios.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Cuál de las siguientes figuras corresponde a un tipo de asociatividad territorial reconocido en Colombia?',
          imagen: require('@/assets/actividad/imagen4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Esquemas Asociativos Territoriales (EAT).',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Provincias administrativas independientes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Federaciones de comercio exterior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Entidades financieras regionales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Los Esquemas Asociativos Territoriales (EAT) son la figura jurídica mediante la cual municipios y departamentos se articulan para alcanzar objetivos de desarrollo regional, conforme a la Ley 1454 de 2011.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Cuál es la diferencia estatutaria que distingue a una Cooperativa de Trabajo Asociado (CTA) de otras organizaciones solidarias?',
          imagen: require('@/assets/actividad/imagen5.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Apoyo económico, financiación, ayuda mutua y solidaridad.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Apoyo financiero, enfoque en el trabajador, el bien común y generación de riqueza.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ayuda mutua, democracia, equidad y solidaridad entre sus asociados.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El énfasis en el trabajo del asociado y su relación directa con la entidad como eje central.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La CTA prioriza el trabajo de los asociados sobre el capital. Sus estatutos regulan el régimen de trabajo asociado, las compensaciones y la autogestión de la actividad productiva.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Cuáles son los tipos de organizaciones de economía solidaria reconocidos en Colombia?',
          imagen: require('@/assets/actividad/imagen6.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Sociedad anónima, sociedad limitada, cooperativas y fundaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Fundaciones, cooperativas, asociaciones mutuales, fondos de empleados y cooperativas de trabajo asociado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Empresas mixtas, de explotación minera, agrícola y pecuaria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'ONG, fundaciones, sociedad anónima y sociedad en comandita.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! Las organizaciones de economía solidaria son diversas de acuerdo con su objeto social e incluyen fundaciones, cooperativas, asociaciones mutuales, fondos de empleados y cooperativas de trabajo asociado, entre otras.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Cuál es el órgano de dirección y administración establecido para las cooperativas?',
          imagen: require('@/assets/actividad/imagen7.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'La junta directiva.', esCorrecta: false },
            { id: 'b', texto: 'El comité de vigilancia.', esCorrecta: false },
            {
              id: 'c',
              texto: 'El Consejo de Administración.',
              esCorrecta: true,
            },
            { id: 'd', texto: 'La asamblea de delegados.', esCorrecta: false },
          ],
          mensaje_correcto:
            '¡Correcto! En las cooperativas, el Consejo de Administración es el órgano de dirección y administración que recibe de la Asamblea General la responsabilidad de orientar la gestión organizacional.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué es la asamblea general en una organización de economía solidaria?',
          imagen: require('@/assets/actividad/imagen8.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El máximo órgano de gobierno que orienta el rumbo y el desarrollo de la organización.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La unión de voluntades que lidera la toma de decisiones operativas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La reunión periódica de gerentes para definir la proyección estratégica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La consolidación de inversionistas interesados en el desempeño financiero de la entidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La asamblea general es el máximo órgano de decisión dentro de la organización solidaria; en ella todos los miembros tienen igual derecho a participar, con voz y voto, en las decisiones estratégicas.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿A qué hace referencia la formalización de una organización de economía solidaria?',
          imagen: require('@/assets/actividad/imagen9.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Es la documentación de las estrategias organizacionales orientadas al éxito financiero.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Documentación y registro de la nueva empresa en cámara de comercio.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Es el documento que consigna la proyección estratégica de la organización.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Documentación soporte de la planeación estratégica, táctica y operativa.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! La formalización es el proceso mediante el cual una organización adquiere reconocimiento jurídico ante el Estado, que incluye el registro ante la Cámara de Comercio, la obtención del NIT y la inscripción ante la Supersolidaria.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            'El organigrama de una organización de economía solidaria debe incluir:',
          imagen: require('@/assets/actividad/imagen10.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Áreas funcionales y asamblea general.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Asamblea general, innovación y desarrollo, órganos de control y de dirección.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Asamblea general, órgano de dirección y órgano de control económico.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Areas productivas, asociativas, de dirección y de control.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            '¡Correcto! El organigrama de una organización solidaria debe incluir la asamblea general como máximo órgano, el órgano de dirección y el órgano de control económico, que garantizan la gestión democrática, transparente y sostenible.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
