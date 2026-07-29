const CASO1 = {
  suspects: [
    {
      id: 'ana',
      nombre: 'Ana Beltrán',
      ocupacion: 'Secretaria de Bienestar Universitario',
      edad: 34,
      coartada: 'Estaba en una reunión del comité de bienestar. Hay minutas firmadas por los asistentes.',
      rasgo: 'Siempre lleva un pañuelo amarillo en el cuello. Escribe con pluma fuente.',
      declaracion: 'Dice que solo seguía órdenes de su jefe directo.',
      secreto: 'Su hermana trabaja en la aseguradora que recibe los datos de MenteSana.',
      motivo: 'Le prometieron un ascenso si no hacía preguntas.',
      relaciones: 'Reporta directamente a Carolina Espitia.',
      acceso: 'Tiene acceso a los registros de bienestar y a la plataforma MenteSana.'
    },
    {
      id: 'edgar',
      nombre: 'Édgar Solano',
      ocupacion: 'Rector Encargado',
      edad: 52,
      coartada: 'Tenía una cena con miembros del consejo directivo. El restaurante lo confirma.',
      rasgo: 'Tiene un tic nervioso en la mano derecha cuando miente.',
      declaracion: 'Afirma no recordar los detalles de esa conversación de chat.',
      secreto: 'Está siendo presionado por la aseguradora para entregar datos estudiantiles.',
      motivo: 'Necesitaba los ingresos extras para cubrir deudas personales.',
      relaciones: 'Superior de Carolina Espitia. Conoce a Kevin Osorio desde hace años.',
      acceso: 'Tiene acceso total a todos los sistemas administrativos del campus.'
    },
    {
      id: 'wilson',
      nombre: 'Wilson Cruz',
      ocupacion: 'Jefe de Seguridad del Campus',
      edad: 41,
      coartada: 'Estaba de turno en la sala de monitoreo. Los registros de entrada lo respaldan.',
      rasgo: 'Cojea levemente de la pierna izquierda. Usa un llavero con forma de águila.',
      declaracion: 'Dice que no revisó las cámaras esa noche porque estaba atendiendo un incidente.',
      secreto: 'Debe favores personales a Diego Palacio por un préstamo no saldado.',
      motivo: 'Le pidieron "no ver" lo que pasó esa noche a cambio de borrar su deuda.',
      relaciones: 'Amigo cercano de Diego Palacio. Reporta a rectoría.',
      acceso: 'Controla todo el sistema de cámaras y registros de entrada del campus.'
    },
    {
      id: 'kevin',
      nombre: 'Kevin Osorio',
      ocupacion: 'Desarrollador de MenteSana',
      edad: 26,
      coartada: 'Estaba subiendo commits al repositorio. Hay marcas de tiempo en el código.',
      rasgo: 'Usa una sudadera con capucha todos los días, incluso en reuniones formales.',
      declaracion: 'Dice que solo programó lo que le pidieron, sin saber el propósito final.',
      secreto: 'Implementó un backdoor en MenteSana para extraer datos sin dejar registro.',
      motivo: 'Le pagaron un bono extra por incluir la puerta trasera en el código.',
      relaciones: 'Trabaja para la Vicerrectoría Administrativa. Contacto directo con Carolina.',
      acceso: 'Acceso total al código fuente y servidores de MenteSana.'
    },
    {
      id: 'diego',
      nombre: 'Diego Palacio',
      ocupacion: 'Coordinador de Obras y Mantenimiento',
      edad: 45,
      coartada: 'Estaba supervisando una obra en el bloque C. El contratista lo confirma.',
      rasgo: 'Tiene una cicatriz en la ceja izquierda. Fuma en áreas no permitidas.',
      declaracion: 'Dice que la maquinaria era para trabajos autorizados de jardinería.',
      secreto: 'Ejecutó el relleno del humedal sin permisos ambientales.',
      motivo: 'Recibió un pago por debajo de la mesa de parte de la constructora.',
      relaciones: 'Socio de Wilson en un negocio de seguridad privada. Reporta a rectoría.',
      acceso: 'Acceso a maquinaria pesada, planos del campus y rutas de servicio.'
    },
    {
      id: 'carolina',
      nombre: 'Carolina Espitia',
      ocupacion: 'Vicerrectora Administrativa',
      edad: 38,
      coartada: 'Estaba en una videollamada con la aseguradora. Hay registro de la llamada.',
      rasgo: 'Usa gafas de carey. Su escritorio está siempre impecable.',
      declaracion: 'Se niega a declarar sin presencia de su abogado.',
      secreto: 'Es ella quien firmó el contrato con la aseguradora y autorizó los cobros duplicados.',
      motivo: 'Necesitaba cubrir un desfalco anterior que ella misma cometió.',
      relaciones: 'Jefe directo de Ana Beltrán y Kevin Osorio. Reporta a Edgar Solano.',
      acceso: 'Acceso a finanzas, contratos y plataforma MenteSana con permisos de administrador.'
    }
  ],
  evidences: [
    {
      id: 1,
      keyword: 'RADICADO',
      type: 'email',
      entries: [
        {
          from: 'tomas.vargas@uni.edu.co',
          to: 'bienestar@uni.edu.co',
          subject: 'Solicitud de información — App MenteSana',
          time: '14 de marzo, 09:14',
          body: 'Buenas tardes, solicito formalmente que me informen qué datos recolecta la app MenteSana, con quién se comparten y bajo qué autorización. Adjunto radicado. Quedo atento a su respuesta en los términos de ley.\n\nTomás Vargas\nCód. 20211045'
        },
        {
          from: 'bienestar@uni.edu.co',
          to: 'tomas.vargas@uni.edu.co',
          subject: 'Respuesta automática — Solicitud de información',
          time: '4 de abril, 11:42',
          body: 'Su solicitud fue radicada y está pendiente de asignación.'
        }
      ]
    },
    {
      id: 2,
      keyword: 'DISCRETO',
      type: 'chat',
      group: 'Coordinación Rectoría',
      participants: ['Rector E.', 'Vicerrectoría', 'Secretaría General'],
      messages: [
        { from: 'Vicerrectoría', time: '10:23', text: '¿Alguien ha visto el correo de Vargas?' },
        { from: 'Secretaría General', time: '10:24', text: 'Sí, llegó a bienestar. Está pidiendo información de MenteSana.' },
        { from: 'Rector E.', time: '10:26', text: 'hay que manejar el tema de Vargas discretamente, que no llegue a tutela' },
        { from: 'Vicerrectoría', time: '10:27', text: 'Entendido.' },
        { from: 'Secretaría General', time: '10:28', text: '¿Procedemos con el protocolo?' },
        { from: 'Rector E.', time: '10:29', text: 'Sí. Ya saben cómo.' }
      ]
    },
    {
      id: 3,
      keyword: 'CAMARA',
      type: 'log',
      title: 'Registro de Cámaras de Seguridad',
      subtitle: 'Sistema de Monitoreo — Campus Norte',
      columns: ['Hora', 'Cámara', 'Estado'],
      rows: [
        { cells: ['22:14:02', 'CAM-04 NORTE', 'grabación activa'] },
        { cells: ['22:14:03', 'CAM-04 NORTE', 'grabación activa'] },
        {
          cells: ['22:54:11', 'CAM-04 NORTE', 'grabación activa'],
          alert: true,
          gap: true,
          gapLabel: '⏱ salto de 40 min sin registro'
        }
      ]
    },
    {
      id: 4,
      keyword: 'CONTRATO',
      type: 'email',
      entries: [
        {
          from: 'contratos@uni.edu.co',
          to: 'legal@analyticsdelnorte.com',
          subject: 'Contrato de prestación de servicios — Analítica de datos MenteSana',
          time: '21 de febrero, 14:30',
          body: 'Se adjunta contrato para el procesamiento de datos emocionales anonimizados de la base estudiantil de bienestar universitario, según lo acordado. Los datos se entregarán en formato re-identificable para fines actuariales de la aseguradora aliada.'
        }
      ]
    },
    {
      id: 5,
      keyword: 'HUMEDAL',
      type: 'documento',
      title: 'Proyecto de Adecuación del Campus',
      subtitle: 'De WikiInvestigación — documentos internos',
      infobox: {
        tipo: 'Expediente de obra',
        dependencia: 'Coordinación de Obras',
        fecha: 'Febrero 2024',
        estado: 'Dos versiones encontradas'
      },
      sections: [
        {
          heading: 'Versión oficial — Permiso ambiental aprobado',
          content: 'Resolución 047 de 2024 — "Ampliación de zonas verdes"\n\nLa Secretaría de Ambiente otorga permiso para la adecuación de 2.3 hectáreas en el predio del Campus Norte, con el objetivo de ampliar las zonas verdes y áreas de recreación para la comunidad estudiantil.\n\nDocumento firmado por el Dr. Mauricio Londoño. Sello institucional visible. Aprobado con observaciones menores.'
        },
        {
          heading: 'Borrador encontrado (sin sellar)',
          content: 'INFORME INTERNO — NO CIRCULAR\n\nProyecto: Relleno de Humedal "El Charco" — Bloque D\nÁrea afectada: 1.8 hectáreas\nEstado: Ejecutado sin permisos\n\nAnotaciones manuscritas:\n— "[ilegible] — no dejar registro"\n— "Diego coordinó la maquinaria. Que nadie se entere."',
          annotations: true
        }
      ]
    },
    {
      id: 6,
      keyword: 'NOMINA',
      type: 'documento',
      title: 'Reporte financiero — MenteSana',
      subtitle: 'De WikiInvestigación — documento clasificado',
      infobox: {
        tipo: 'Reporte financiero interno',
        responsable: 'C.E.',
        periodo: 'Enero — Junio 2024',
        total_cobrado: '$ 388,800,000'
      },
      sections: [
        {
          heading: 'Resumen de cobros — Servicios de Bienestar',
          content: 'El siguiente reporte muestra los cobros realizados a través de la plataforma MenteSana durante el primer semestre de 2024. Se observan múltiples entradas con los mismos valores, cargadas de forma recurrente sin justificación aparente.',
          table: {
            columns: ['Concepto', 'Estudiantes', 'Monto'],
            rows: [
              ['Servicios de Bienestar — MenteSana', '3,240', '$ 97,200,000'],
              ['Servicios de Bienestar — MenteSana', '3,240', '$ 97,200,000'],
              ['Servicios de Bienestar — MenteSana', '3,240', '$ 97,200,000'],
              ['Servicios de Bienestar — MenteSana', '3,240', '$ 97,200,000']
            ],
            footer: ['Total', '—', '$ 388,800,000']
          }
        },
        {
          heading: 'Observaciones',
          content: 'Cargos duplicados no reportados a revisoría fiscal. No se encontró autorización del consejo directivo para estos montos. Las iniciales "C.E." figuran como responsable del reporte.',
          highlight: true
        }
      ]
    }
  ],
  solution: {
    responsible_id: 'carolina',
    responsible: 'carolina',
    motive: 'Ocultar que accedió ilegalmente a datos estudiantiles de MenteSana y los vendió a una aseguradora.',
    motiveKey: 'a',
    methodKey: 'b',
    method: 'Usó una copia de la tarjeta de acceso de otra persona para ingresar al edificio, y su propio usuario para modificar el archivo financiero. Luego desactivó la cámara CAM-04 durante 40 minutos.',
    timeline: ['14 marzo: Tomás Vargas solicita información sobre MenteSana', '21 feb: Carolina firma contrato con aseguradora', '13 marzo: Carolina accede al sistema fuera de horario laboral', 'Noche del evento: Wilson desactiva CAM-04 por 40 min', 'Diego ejecuta relleno del humedal con maquinaria pesada'],
    key_evidence: ['Evidencia 4 (CONTRATO): Contrato firmado por C.E. con la aseguradora', 'Evidencia 6 (NOMINA): Reporte financiero con iniciales C.E. y cobros duplicados', 'Evidencia 3 (CAMARA): Salto de 40 min en cámara CAM-04'],
    contradiction: 'Carolina dice que estaba en videollamada con la aseguradora, pero el contrato con ellos ya estaba firmado desde febrero. Su coartada no explica por qué necesitaba hablar con ellos precisamente esa noche.',
    evidences: [3, 4, 5, 6],
    descartadoKey: 'edgar',
    false_leads: ['Edgar Solano aparece en el chat sospechoso pero solo siguió el plan de Carolina', 'Diego coordinó la maquinaria del humedal pero no participó en el desfalco']
  }
};
