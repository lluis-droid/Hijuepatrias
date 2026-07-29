const CASO2 = {
  suspects: [
    {
      id: 'fabian',
      nombre: 'Fabi\u00e1n Rueda',
      ocupacion: 'Funcionario de Alcald\u00eda',
      edad: 39,
      coartada: 'Estaba en una reuni\u00f3n de consejo municipal. Hay acta firmada por el secretario.',
      rasgo: 'Usa un reloj de pulsera dorado. Siempre revisa el tel\u00e9fono antes de responder.'
    },
    {
      id: 'renata',
      nombre: 'Renata Duque',
      ocupacion: 'Abogada de Palmeras del Sur',
      edad: 47,
      coartada: 'Ten\u00eda una junta en la sede principal de Palmeras. Los registros de entrada la respaldan.',
      rasgo: 'Tiene una cicatriz fina en la mu\u00f1eca derecha. Usa perfume con olor a jazm\u00edn.'
    },
    {
      id: 'hugo',
      nombre: 'Capit\u00e1n Hugo Beltr\u00e1n',
      ocupacion: 'Comandante Unidad Centinela',
      edad: 51,
      coartada: 'Estaba en la base de Centinela preparando el parte de la noche. Lo confirma el oficial de guardia.',
      rasgo: 'Tiene la voz ronca. Lleva un anillo de sello en el me\u00f1ique izquierdo.'
    },
    {
      id: 'nicolas',
      nombre: 'Nicol\u00e1s Fajardo',
      ocupacion: 'Contratista de Inteligencia',
      edad: 33,
      coartada: 'Estaba en su domicilio realizando an\u00e1lisis de datos. Los registros de conexi\u00f3n lo avalan.',
      rasgo: 'Usa gafas de pasta negra. Habla con jerga t\u00e9cnica constantemente.'
    },
    {
      id: 'camila',
      nombre: 'Camila Ortiz',
      ocupacion: 'Ingeniera Ambiental',
      edad: 29,
      coartada: 'Estaba en campo tomando muestras en un punto aguas arriba. Hay fotos con geolocalizaci\u00f3n.',
      rasgo: 'Tiene una libreta de campo siempre en la mano. Escribe con caligraf\u00eda muy peque\u00f1a.'
    },
    {
      id: 'rodrigo',
      nombre: 'Rodrigo Anzola',
      ocupacion: 'Director de Operaciones',
      edad: 54,
      coartada: 'Estaba en una cena con directivos de Palmeras del Sur. El gerente general lo confirma.',
      rasgo: 'Tiene un tic en la ceja izquierda cuando algo lo incomoda. Usa botas de cuero negro.'
    }
  ],
  evidences: [
    {
      id: 1,
      keyword: 'TITULO',
      type: 'documento',
      title: 'Solicitud de titulaci\u00f3n colectiva de tierras',
      subtitle: 'Vereda El Progreso \u2014 Comunidad Campesina',
      infobox: {
        tipo: 'Petici\u00f3n formal',
        estado: 'RECIBIDO',
        fecha: 'Hace 4 meses',
        asignado_a: '(vac\u00edo)'
      },
      sections: [
        {
          heading: 'Documento radicado ante la Agencia Nacional de Tierras',
          content: 'Los suscritos habitantes de la Vereda El Progreso, en ejercicio del derecho fundamental de petici\u00f3n consagrado en el art\u00edculo 23 de la Constituci\u00f3n Pol\u00edtica de Colombia, solicitamos el inicio del tr\u00e1mite de titulaci\u00f3n colectiva de las tierras que tradicionalmente hemos ocupado en el predio denominado \u00abEl Porvenir\u00bb, ubicado en la jurisdicci\u00f3n del municipio.\n\nAcompa\u00f1amos los siguientes documentos:\n- Certificado de tradici\u00f3n y libertad del predio\n- Censo de la poblaci\u00f3n actualmente asentada\n- Declaraciones juradas de colindantes\n- Fotograf\u00edas del predio y las viviendas\n\nSolicitamos que, una vez revisados los documentos, se programe visita t\u00e9cnica para verificar la ocupaci\u00f3n y se expida el t\u00edtulo correspondiente.\n\nFirmas: 47 jefes de hogar de la vereda.',
          highlight: false
        },
        {
          heading: 'Estado del tr\u00e1mite',
          content: 'La solicitud fue recibida y radicada con el n\u00famero ANT-2024-0891. A la fecha no ha sido asignada a ning\u00fan funcionario para su estudio. El campo \u00abAsignado a\u00bb permanece vac\u00edo en el sistema de gesti\u00f3n documental.',
          annotations: true
        }
      ]
    },
    {
      id: 2,
      keyword: 'FORMA',
      type: 'documento',
      title: 'Respuesta a Acci\u00f3n de Tutela',
      subtitle: 'Palmeras del Sur S.A. \u2014 Oficina Jur\u00eddica',
      infobox: {
        tipo: 'Auto interlocutorio',
        emitido_por: 'Oficina Jur\u00eddica PDS',
        fecha: 'Sin datar',
        folios: '1 folio'
      },
      sections: [
        {
          heading: 'Contenido del documento',
          content: 'Se rechaza la presente acci\u00f3n por vicios de forma en la firma de los accionantes, sin pronunciamiento de fondo.',
          highlight: false
        },
        {
          heading: 'Observaciones',
          content: 'El documento presenta una r\u00fabrica ilegible al pie. No aparece el nombre completo ni el cargo de quien firma. El sello de la oficina jur\u00eddica est\u00e1 presente pero no tiene n\u00famero de registro ni fecha de expedici\u00f3n visible.',
          annotations: true
        }
      ]
    },
    {
      id: 3,
      keyword: 'BITACORA',
      type: 'log',
      title: 'Bit\u00e1cora de Turno',
      subtitle: 'Unidad Centinela \u2014 Puesto de Control N\u00b0 3',
      columns: ['Hora', 'Evento', 'Responsable'],
      rows: [
        { cells: ['21:40', 'Turno normal, sin novedad', 'Cabo Ram\u00edrez'] },
        {
          cells: ['22:15', '[TACHADO CON CORRECTOR]', 'Cabo Ram\u00edrez'],
          gap: true,
          gapLabel: 'Entrada alterada \u2014 no puede leerse el texto original'
        },
        { cells: ['23:50', 'Cambio de turno', 'Cabo Ram\u00edrez'] },
        {
          cells: ['----', '----', '----'],
          gap: true,
          gapLabel: 'Comparaci\u00f3n: d\u00eda anterior (mismo puesto)'
        },
        { cells: ['21:30', 'Turno normal, sin novedad', 'Cabo Ram\u00edrez'] },
        { cells: ['22:00', 'Cambio de turno', 'Cabo Ram\u00edrez'] },
        {
          cells: ['22:00', 'Cambio de turno', 'Cabo Ram\u00edrez'],
          alert: true
        }
      ]
    },
    {
      id: 4,
      keyword: 'GPS',
      type: 'email',
      entries: [
        {
          from: 'nfajardo@monitoreoprivado.co',
          to: 'contacto@telefonianacional.co',
          subject: 'Historial solicitado',
          time: '12 de enero, 18:42',
          body: 'Adjunto el historial de ubicaci\u00f3n de los \u00faltimos 15 d\u00edas del n\u00famero que me pasaste. Como quedamos, esto queda entre nosotros, no pas\u00f3 por el canal oficial de la empresa.'
        }
      ]
    },
    {
      id: 5,
      keyword: 'VERTIMIENTO',
      type: 'documento',
      title: 'Informe de impacto ambiental',
      subtitle: 'Corporaci\u00f3n Aut\u00f3noma Regional \u2014 vs \u2014 Borrador interno PDS',
      infobox: {
        tipo: 'Informe t\u00e9cnico',
        dependencia: 'Corporaci\u00f3n Aut\u00f3noma Regional',
        estado: 'Dos versiones encontradas'
      },
      sections: [
        {
          heading: 'Versi\u00f3n oficial \u2014 Informe ambiental aprobado',
          content: 'Cero vertimientos registrados al cauce del r\u00edo. La empresa Palmeras del Sur S.A. cumple con todos los par\u00e1metros de vertimiento establecidos en la normativa ambiental vigente. No se detectaron afectaciones a fuentes h\u00eddricas en el \u00e1rea de influencia del proyecto.',
          highlight: false
        },
        {
          heading: 'Borrador interno (encontrado en servidor de PDS)',
          content: 'INFORME PRELIMINAR \u2014 NO APROBADO\n\nVertimientos detectados: 3 puntos de descarga no autorizada al cauce del r\u00edo. Concentraci\u00f3n de sedimentos: 3.2 veces el l\u00edmite permitido. Se recomienda suspender actividades hasta implementar sistema de tratamiento.\n\nCorrecciones manuscritas sobre el documento:\n\u2014 \u00abEsto no puede salir as\u00ed\u00bb\n\u2014 \u00abCambiar \u00ab3.2 veces\u00bb por \u00abdentro del rango\u00bb\u00bb\n\u2014 \u00abQue la versi\u00f3n final diga cero vertimientos\u00bb\n\nFirma al margen: C.O.',
          annotations: true
        }
      ]
    },
    {
      id: 6,
      keyword: 'LISTA',
      type: 'documento',
      title: 'Correo interno \u2014 Direcci\u00f3n de Operaciones',
      subtitle: 'Extra\u00eddo del servidor de correo de Palmeras del Sur',
      infobox: {
        de: 'Rodrigo Anzola',
        cargo: 'Direcci\u00f3n de Operaciones',
        para: 'Capit\u00e1n Hugo Beltr\u00e1n',
        fecha: 'Sin fecha visible'
      },
      sections: [
        {
          heading: 'Cuerpo del mensaje',
          content: 'Hay que resolver el problema de los l\u00edderes de la vereda, empezando por la se\u00f1ora Casierra. De forma discreta, como siempre.',
          highlight: true
        },
        {
          heading: 'Archivo adjunto: Seguimiento \u2014 L\u00edderes gestionados',
          content: '',
          table: {
            columns: ['Nombre', 'Vereda', 'Estado'],
            rows: [
              ['Marlene Casierra', 'El Progreso', 'Resuelto'],
              ['Jairo Mena', 'La Esmeralda', 'Resuelto'],
              ['Luz Dary P\u00e9rez', 'El Porvenir', 'Resuelto'],
              ['Antonio Campos', 'Bella Vista', 'Resuelto']
            ]
          }
        }
      ]
    }
  ]
};
