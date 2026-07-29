const CASO1 = {
  suspects: [
    {
      id: 'ana',
      nombre: 'Ana Beltrán',
      ocupacion: 'Secretaria de Bienestar Universitario',
      edad: 34,
      coartada: 'Estaba en una reunión del comité de bienestar. Hay minutas firmadas por los asistentes.',
      rasgo: 'Siempre lleva un pañuelo amarillo en el cuello. Escribe con pluma fuente.'
    },
    {
      id: 'edgar',
      nombre: 'Édgar Solano',
      ocupacion: 'Rector Encargado',
      edad: 52,
      coartada: 'Tenía una cena con miembros del consejo directivo. El restaurante lo confirma.',
      rasgo: 'Tiene un tic nervioso en la mano derecha cuando miente.'
    },
    {
      id: 'wilson',
      nombre: 'Wilson Cruz',
      ocupacion: 'Jefe de Seguridad del Campus',
      edad: 41,
      coartada: 'Estaba de turno en la sala de monitoreo. Los registros de entrada lo respaldan.',
      rasgo: 'Cojea levemente de la pierna izquierda. Usa un llavero con forma de águila.'
    },
    {
      id: 'kevin',
      nombre: 'Kevin Osorio',
      ocupacion: 'Desarrollador de MenteSana',
      edad: 26,
      coartada: 'Estaba subiendo commits al repositorio. Hay marcas de tiempo en el código.',
      rasgo: 'Usa una sudadera con capucha todos los días, incluso en reuniones formales.'
    },
    {
      id: 'diego',
      nombre: 'Diego Palacio',
      ocupacion: 'Coordinador de Obras y Mantenimiento',
      edad: 45,
      coartada: 'Estaba supervisando una obra en el bloque C. El contratista lo confirma.',
      rasgo: 'Tiene una cicatriz en la ceja izquierda. Fuma en áreas no permitidas.'
    },
    {
      id: 'carolina',
      nombre: 'Carolina Espitia',
      ocupacion: 'Vicerrectora Administrativa',
      edad: 38,
      coartada: 'Estaba en una videollamada con la aseguradora. Hay registro de la llamada.',
      rasgo: 'Usa gafas de carey. Su escritorio está siempre impecable.'
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
  ]
};
