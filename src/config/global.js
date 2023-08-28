export default {
  global: {
    componenteFormativo: 'Textiles básicos',
    descripcionCurso:
      'Los textiles llevan consigo estándares y procesos de calidad que se requieren para poder llegar a la manufactura de prendas, por lo anterior este componente lo llevará a la comprensión sobre textiles básicos y su uso dentro del sector de la moda.',
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
      {
        clases: ['banner-principal-decorativo-4'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.svg'),
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
        titulo: 'Fibras textiles',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Clasificación de las fibras',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Hilos e Hilatura',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Titulación y unidades de medida de los hilos',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Los tejidos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Clasificación de los tejidos',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Defecto de las telas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Análisis de laboratorio y fichas técnicas',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/prueba.pdf',
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
  complementario: [
    {
      tema: 'Clasificación de las fibras',
      referencia:
        'Planeta Ranks. (2017). Ropa inteligente hecha con células de bacterias. [video]. Youtube. ',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/kOqWiMMoTFc',
    },
    {
      tema: 'Clasificación de las fibras',
      referencia:
        'SENA (2021) Clasificación de las fibras textiles. [video]. Youtube. ',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/zjp1OL2DCug',
    },
    {
      tema: 'Clasificación de las fibras',
      referencia:
        'SENA (s.f.) Fundamentación textil. Fibras textiles. Centro de Manufactura en Textil y Cuero. Regional Distrito Capital.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo-1_Fibras_textiles.pdf',
    },
    {
      tema: 'Hilos e Hilatura',
      referencia: 'SENA (2021) Hilos para la confección. [video]. Youtube. ',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/3jnetG5VBEY',
    },
    {
      tema: 'Hilos e Hilatura',
      referencia: 'SENA (2021) Clasificación de los hilos. [video]. Youtube.',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/qUdbl6B18Bg',
    },
    {
      tema: 'Hilos e Hilatura',
      referencia:
        'SENA (s.f.) Fundamentación textil. Clasificación de los hilos. Centro de Manufactura en Textil y Cuero. Regional Distrito Capital. ',
      tipo: 'PDF',
      descarga: '/downloads/Anexo-2_Clasificacion_hilos.pdf',
    },
    {
      tema: 'Tejidos',
      referencia: 'Calderón, C. (s.f.) Fundamentación textil. Tejidos. ',
      tipo: 'PDF',
      descarga: '/downloads/Anexo-3_Fundamentacion_textil_Tejidos.pdf',
    },
    {
      tema: 'Clasificación de los tejidos',
      referencia:
        'SENA (2021) Caracterización de los textiles. [video]. Youtube',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/mc1kARHDHrs',
    },
    {
      tema: 'Clasificación de los tejidos',
      referencia:
        'Gutiérrez, S. (2020) Tipo de telas y usos. Centro Industrial del Diseño y la Manufactura SENA.',
      tipo: 'PDF',
      descarga: '/downloads/Anexo-4_Tipos_de_telas.pdf',
    },
    {
      tema: 'Defecto de las telas',
      referencia: 'Baquero A. (2018) Defectos en las telas. SENA ',
      tipo: 'PDF',
      descarga: '/downloads/Anexo-5_Defectos_de_telas.pdf',
    },
    {
      tema: 'Defecto de las telas',
      referencia:
        'ICONTEC. (2013) Telas de tejido plano y telas de tejido de punto. Definiciones de los defectos.( NTC 6022:2013). ',
      tipo: 'Biblioteca digital SENA _ Base de datos ICONTEC',
      link:
        'https://e-collection-icontec-org.bdigital.sena.edu.co/normavw.aspx?ID=5354',
    },
    {
      tema: 'Defecto de las telas',
      referencia: 'SENA (2020) Inspección de textiles. [video]. Youtube. ',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/2IjwoiNJCDw',
    },
    {
      tema: 'Defecto de las telas',
      referencia: 'SENA (2021) Identificación de fibras. [video]. Youtube. ',
      tipo: 'Video YouTube',
      link: 'https://youtu.be/xL89_BMN61I',
    },
    {
      tema: 'Análisis de laboratorio y fichas técnicas',
      referencia:
        'SENA (s.f.) Fundamentación textil. Identificación de Fibras. Centro de Manufactura en Textil y Cuero. Regional Distrito Capital',
      tipo: 'PDF',
      descarga: '/downloads/Anexo-6_Identificacion_de_fibras.pdf',
    },
    {
      tema: 'Análisis de laboratorio y fichas técnicass',
      referencia:
        'Coats Group (2021) Epic. Hoja de información de información del producto. ',
      tipo: 'PDF',
      descarga: '/downloads/Anexo-7_Ficha_tecnica_hilo.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Aspes',
      significado:
        'mordientes a través de los cuales pueden pasarse varios elementos de fibras con la finalidad de procesarlas. ',
    },
    {
      termino: 'Condensación',
      significado:
        'es el cambio de estado de la materia que puede estar de forma gaseosa y pasar a forma líquida. ',
    },
    {
      termino: 'Fibra',
      significado:
        'elemento de origen natural, sintético o artificial, pasan por procesos que permiten la hilación y su transformación en productos como hilo y telas. ',
    },
    {
      termino: 'Filamento',
      significado:
        'fibras de longitud indefinida, estos son pasados por procesos de hilado para convertirse en hilos y posteriormente en telas. ',
    },
    {
      termino: 'Fisión',
      significado:
        'la fisión nuclear es la reacción en la que el núcleo de un átomo pesado. Al capturar un neutrón incidente, se divide en dos o más núcleos de átomos más ligeros, llamados productos de fisión, emitiendo en el proceso neutrones, rayos gamma y grandes.  (CSN, 2021) ',
    },
    {
      termino: 'Frictómetro',
      significado:
        'instrumento de laboratorio textil que permite evaluar y controlar la solidez del color de una fibra al frote. También es empleado para medir esta característica en hilos y telas.',
    },
    {
      termino: 'Hilo cardado',
      significado:
        'hilo obtenido por procesos de hilaturas de anillos y elaborado a partir de fibras cortas.',
    },
    {
      termino: 'Poliadición',
      significado:
        'son reacciones químicas a través de las cuales el polímero final es originado por sucesivas adiciones de grupos funcionales (monómero A), para estructuras moleculares con dobles enlaces (monómero B), la característica principal en que durante su proceso no se desprende compuestos volátiles. ',
    },
    {
      termino: 'Polimerización',
      significado:
        'proceso a través del cual las moléculas simples, iguales o diferentes, reaccionan entre sí por adición o condensación, lo que permite formar otras moléculas de peso doble, triple o según se necesite. ',
    },
    {
      termino: 'Regularímetro',
      significado:
        'instrumento de laboratorio textil que permite obtener datos frente a las regularidades que posee una fibra, vistas desde la variación de masa por unidad de longitud. Es usado principalmente para determinar características de un hilado de fibras textiles. ',
    },
    {
      termino: 'Salitre',
      significado:
        'a nivel químico es una sal que se obtiene por la acción del nitrato de sodio en el cloruro de potasio, utilizado generalmente en la fabricación de pólvora, también de sus derivados en usado en la limpieza de elementos en el hogar.  ',
    },
    {
      termino: 'Solución de apresto',
      significado:
        'esta solución es usada para dar dureza a los tejidos, este proceso es aplicado según requerimientos técnicos que necesiten darse a un textil. ',
    },
    {
      termino: 'Torno',
      significado:
        'elemento empleado en la hilación de fibras para obtener hebras con una longitud determinada. ',
    },
  ],
  referencias: [
    {
      referencia: 'Ayelén Peregrino. (2011). <em>Ficha tejidos.</em> ',
      link:
        'https://ayelenpellegrino.files.wordpress.com/2011/01/19-ficha-tejidos-1.jpg',
    },
    {
      referencia:
        'CSN (2021) <em>Fisión Nuclear</em>. Consejo de Seguridad Nuclear. ',
      link: 'https://www.csn.es/fision-nuclear#',
    },
    {
      referencia:
        'Consorcio textil Vianny SAC. (2015). <em>Ficha técnica</em>. ',
      link: 'http://textilvianny.blogspot.com/2015/09/blog-post.html',
    },
    {
      referencia: 'Geny. (2019). <em>Las fibras y su construcción</em>. ',
      link:
        'https://www.geny.cl/portal/2019/07/19/las-fibras-y-su-construccion/',
    },
    {
      referencia:
        'Lockuán Lavado, F. (2012). <em>La industria textil y su control de calidad. III. Hilandería</em> [Ebook].  ',
      link:
        'https://books.google.com/books/about/III_La_industria_textil_y_su_control_de.html?hl=es&id=nkJZ93e-9-wC#v=onepage&q&f=false',
    },
    {
      referencia:
        'Lockuán Lavado, F. (2012). <em>La industria textil y su control de calidad. IV. Tejeduría</em> [Ebook]. ',
      link:
        'https://books.google.com/books/about/IV_La_industria_textil_y_su_control_de_c.html?hl=es&id=lmHP7oAunq8C#v=onepage&q&f=false',
    },
    {
      referencia:
        'Mejía, F. (2021). Capítulo 1 – Las fibras textiles. Programa de Textilización. ',
      link:
        'https://programadetextilizacion.blogspot.com/search/label/Cap%C3%ADtulo%2001%20-%20Las%20fibras%20textiles',
    },
    {
      referencia:
        'Mejía, F. (2015). Capítulo 6 - Los hilos y la hilatura. Programa de Textilización  ',
      link:
        'https://programadetextilizacion.blogspot.com/2014/12/capitulo-6-maria-de-perinat-1997-2000.html',
    },
    {
      referencia:
        'Ortiz, A. (s.f.) <em>Procesos textiles</em>. El profe Abdón Moda y Confección.',
      link: 'https://abortiz.wixsite.com/textiles/procesos-textiles',
    },
    {
      referencia:
        'Repositorio Digital Universidad Técnica del Norte (s.f.). <em>Capítulo 1. Fibra de algodón.</em> ',
      link:
        'http://repositorio.utn.edu.ec/bitstream/123456789/631/1/capitulo1.pdf',
    },
    {
      referencia: 'Sampedia. (2019). La clasificación de defectos de prenda. ',
      link: 'https://seampedia.com/la-clasificacion-de-defectos-de-prenda/',
    },
    {
      referencia:
        'SENA.  (2020).  Equipo de Desarrollo Curricular, SENA Programa Técnico en Patronaje Industrial de Prendas de Vestir, Centro de Manufactura en Textil y Cuero, Distrito Capital.',
    },
    {
      referencia:
        'Textil Balsareny. (2021). <em>¿Cómo elaborar una ficha técnica de productos textiles?</em>. ',
      link:
        'https://textilbalsareny.com/blog/como-elaborar-una-ficha-tecnica-de-productos-textiles/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Líder del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de línea de producción',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Regional Antioquia',
        },
        {
          nombre: 'Ledy Johana Velásquez Hernández',
          cargo: 'Experta temática',
          centro: 'Centro Regional Antioquia',
        },
        {
          nombre: 'Vilma Lucía Perilla Méndez',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial. ',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora metodología y pedagógica',
          centro: 'Regional Distrito Capital - Centro de Diseño y Metrología ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica',
        },
        {
          nombre: 'Miroslava González Hernández',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Carlos J Ramirez',
          cargo: 'Diseñador web',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Andrea Paola Botello De la Rosa',
          cargo: 'Desarrollador Fullstack',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Wilson Andrés Arenales Cáceres',
          cargo: 'Storyboard e ilustración',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Carmen Alicia Martínez Torres',
          cargo: 'Animador y Producción audiovisual',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Emilsen Alfonso Bautista',
          cargo: 'Actividad didáctica',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Zuleidy María Ruiz Torres',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Luis Gabriel Urueta Alvarez',
          cargo: 'Validación y vinculación en plataforma LMS',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Validación de contenidos accesibles',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
