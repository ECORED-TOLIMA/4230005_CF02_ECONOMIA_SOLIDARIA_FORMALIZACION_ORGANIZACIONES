export default {
  global: {
    Name: 'Panorama de las organizaciones de economía solidaria',
    Description:
      'Este componente trata los requisitos y parámetros para la formalización de organizaciones de economía solidaria abordando la definición, características, tipos, alcance y, ventajas y desventajas. Siguiendo con el modelo estatutario con sus particularidades de acuerdo con el tipo de organización.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Formalización de organizaciones solidarias',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Estructura organizacional solidaria',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Concepto de formalización',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Características',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Tipos de organizaciones',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Modelo estatutario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Elementos esenciales de un modelo estatutario',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Contenido del estatuto',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Diferencias entre organizaciones',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Asociatividad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Asociatividad territorial',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Concepto de asociatividad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Clasificación de la asociatividad',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo: 'Tipos de asociatividad',
            hash: 't_3_4',
          },
          {
            numero: '3.5',
            titulo: 'Normatividad vigente',
            hash: 't_3_5',
          },
          {
            numero: '3.6',
            titulo: 'Administración solidaria',
            hash: 't_3_6',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Ruta práctica de formalización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Asociatividad',
      significado:
        'estrategia de articulación voluntaria entre personas u organizaciones para alcanzar objetivos comunes mediante la cooperación, la confianza y la ayuda mutua, sin que los participantes pierdan su autonomía.',
    },
    {
      termino: 'Excedentes',
      significado:
        'resultado económico positivo que generan las organizaciones solidarias al cierre del ejercicio contable, destinado a fondos sociales o mejora de servicios, y no distribuido como ganancia privada entre los asociados.',
    },
    {
      termino: 'Formalización',
      significado:
        'proceso mediante el cual una organización adquiere reconocimiento jurídico, tributario y administrativo ante el Estado, lo que le permite operar legalmente, contratar y acceder a financiación.',
    },
    {
      termino: 'Joint venture',
      significado:
        'alianza estratégica entre dos o más organizaciones con personería jurídica independiente que aportan recursos para desarrollar un proyecto específico, compartiendo proporcionalmente los riesgos y los beneficios.',
    },
    {
      termino: 'Mutualismo',
      significado:
        'principio organizativo mediante el cual los beneficios, servicios y la protección social de una entidad solidaria se orientan hacia sus propios asociados, con base en acuerdos de ayuda recíproca entre sus miembros.',
    },
    {
      termino: 'Personería jurídica',
      significado:
        'atributo legal que reconoce a una organización como sujeto independiente de derechos y obligaciones, con capacidad para actuar, contratar y ser titular de patrimonio ante autoridades públicas y privadas.',
    },
  ],
  referencias: [
    {
      referencia:
        'Calderón, D. (s.f.) Aspectos generales del sector solidario. Universidad del Quindío- Aulas Virtuales.',
      link: '',
    },
    {
      referencia:
        'Cámara de Comercio de Ibagué. (s. f.). Registro de economía solidaria.',
      link: '',
    },
    {
      referencia:
        'Colombia, Presidencia de la República. (2021). Decreto 1033 de 2021, por el cual se reglamenta el funcionamiento de los Esquemas Asociativos Territoriales (EAT).',
      link: '',
    },
    {
      referencia:
        'Correa, G., Marulanda, J. & Mejía, L. (2009). El clúster de salud en Medellín, ventaja competitiva alternativa para la ciudad. Rev. esc.adm.neg [en línea]. 2009, n.67, págs.37-47.',
      link: '',
    },
    {
      referencia:
        'Departamento Nacional de Planeación. (s. f.). ¿Qué es asociatividad territorial?',
      link: '',
    },
    {
      referencia:
        'Superintendencia de Economía Solidaria (s.f.). Proyecto modificación título I Economía solidaria, sus organizaciones y la supervisión, Circular Básica Jurídica.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Responsable Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Centro Agroturistico - Regional Santander',
        },
        {
          nombre: 'Diana Rocío Possos Beltrán',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Norma Constanza Morales Cruz',
          cargo: 'Experta temática',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Gloria Lida Alzate Suárez',
          cargo: 'Evaluador instruccional',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Veimar Celis Meléndez',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
          cargo: 'Desarrollador <em>full stack</em>',
        },
        {
          nombre: 'Ernesto Navarro Jaimes',
          cargo: 'Animador y productor audiovisual',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Pineda Mora',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
        {
          nombre: 'Javier Mauricio Oviedo',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Comercio y Servicios - Regional Tolima',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
