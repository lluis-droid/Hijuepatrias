var ADMIN_DATA = {
  caso1: {
    solution: {
      responsible: 'Carolina Espitia',
      responsible_id: 'carolina',
      motive: 'Carolina había estado desviando fondos de bienestar universitario durante meses. Cuando Tomás Vargas solicitó información sobre MenteSana, supo que una auditoría expondría el desfalco. Orquestó el esquema de cobros duplicados para cubrir el faltante y manipuló el sistema para que pareciera legítimo.',
      method: 'Usó su posición como Vicerrectora Administrativa para firmar el contrato con la aseguradora y autorizar los cobros duplicados en MenteSana. Trabajó con Kevin para implementar un backdoor en la app, con Wilson para desactivar la cámara CAM-04 durante 40 minutos (22:14–22:54), y con Diego para ejecutar el relleno del humedal sin permisos. Ana Beltrán siguió órdenes sin saber el alcance. Edgar Solano encubrió la operación desde su posición como Rector.',
      objective: 'Ocultar un desfalco de aproximadamente $388,800,000 en cobros duplicados a través de la plataforma MenteSana y evitar que una auditoría revelara el faltante. También necesitaba encubrir el relleno ilegal del humedal, que era parte de un negocio paralelo con la constructora.',
      timeline: [
        { time: '21 feb', event: 'Carolina firma contrato con la aseguradora para procesar datos estudiantiles de MenteSana, incluyendo cláusulas de re-identificación no autorizadas.', involved: 'Carolina Espitia', evidence: 4, type: 'direct' },
        { time: '14 mar, 09:14', event: 'Tomás Vargas envía solicitud de información sobre MenteSana a Bienestar Universitario. Esto activa las alertas de Carolina.', involved: 'Tomás Vargas, Ana Beltrán', evidence: 1, type: 'direct' },
        { time: '14 mar, 10:23-10:29', event: 'Chat de rectoría: Edgar da la orden de manejar el tema "discretamente". Carolina y Secretaría entienden el código.', involved: 'Edgar Solano, Carolina Espitia, Secretaría General', evidence: 2, type: 'direct' },
        { time: '13 mar (noche)', event: 'Carolina accede al sistema financiero fuera de su horario laboral para preparar los registros duplicados.', involved: 'Carolina Espitia', evidence: 4, type: 'deduce' },
        { time: 'Noche del incidente, 22:14', event: 'Wilson desactiva la cámara CAM-04 NORTE. El sistema de monitoreo muestra un salto de 40 minutos sin registro.', involved: 'Wilson Cruz', evidence: 3, type: 'direct' },
        { time: '22:14–22:54', event: 'Ventana de 40 minutos donde Carolina (o alguien con su tarjeta) accede al edificio y modifica registros sin ser grabado.', involved: 'Carolina Espitia (o Wilson)', evidence: 3, type: 'deduce' },
        { time: '22:54', event: 'La cámara CAM-04 se reactiva. No hay registro de quién la encendió.', involved: 'Wilson Cruz', evidence: 3, type: 'direct' },
        { time: 'Previos días', event: 'Diego Palacio coordina maquinaria para rellenar el humedal "El Charco" sin los permisos ambientales requeridos.', involved: 'Diego Palacio', evidence: 5, type: 'direct' },
        { time: 'Post-evento', event: 'Se generan 4 cobros duplicados de $97,200,000 cada uno a través de MenteSana, totalizando $388,800,000. Las iniciales "C.E." aparecen como responsable.', involved: 'Carolina Espitia, Kevin Osorio', evidence: 6, type: 'direct' }
      ],
      key_evidence: [4, 6, 3],
      contradiction: 'Carolina dice que estaba en una videollamada con la aseguradora la noche del incidente, pero el contrato con ellos ya estaba firmado desde febrero. No tenía razón para estar en esa llamada precisamente esa noche, a menos que estuviera cubriendo su acceso físico al edificio.',
      false_leads: [
        'Edgar Solano aparece dando órdenes en el chat, pero él solo seguía el plan de Carolina. Su tic nervioso (mano derecha) lo delata cuando miente al decir que "no recuerda" la conversación.',
        'Diego Palacio coordinó la maquinaria del humedal, pero su participación fue en un negocio paralelo de construcción, no en el desfalco de MenteSana.'
      ]
    },
    suspects: [
      {
        id: 'ana',
        nombre: 'Ana Beltrán',
        culpable: false,
        ocultando: 'Sabe que su hermana trabaja en la aseguradora que recibe los datos de MenteSana y que ella misma ayudó a facilitar el acceso a los registros de bienestar sin cuestionar las órdenes.',
        parece_culpable: 'Es la secretaria de Bienestar, la primera en recibir la solicitud de Vargas. Tiene acceso directo a los registros estudiantiles. Su pañuelo amarillo la hace memorable.',
        se_descarta: 'No tenía los permisos ni el conocimiento técnico para modificar el sistema financiero. Su función era meramente administrativa. Las evidencias 4 y 6 requieren acceso a nivel de vicerrectoría.',
        papel_real: 'Ejecutora de órdenes. Sin saberlo, filtró información que Carolina usó para el esquema. Su hermana en la aseguradora fue el enlace que Carolina explotó.'
      },
      {
        id: 'edgar',
        nombre: 'Édgar Solano',
        culpable: false,
        ocultando: 'Está siendo presionado por la aseguradora (a la que le debe favores políticos) y sabía del esquema de Carolina pero lo permitió por las deudas personales que tiene.',
        parece_culpable: 'Aparece en el chat dando la orden de "manejar el tema discretamente". Es el Rector, la máxima autoridad. Su tic nervioso al mentir es evidente en su declaración.',
        se_descarta: 'No hay evidencia de que haya participado en la manipulación técnica o financiera. Su rol fue de encubridor pasivo, no de autor intelectual. Las evidencias señalan a Carolina como la ejecutora.',
        papel_real: 'Encubridor. Sabía del plan de Carolina pero lo permitió porque ella tenía información comprometedora sobre sus propias deudas. Prefirió mirar hacia otro lado.'
      },
      {
        id: 'wilson',
        nombre: 'Wilson Cruz',
        culpable: false,
        ocultando: 'Debe dinero a Diego Palacio y aceptó "no ver" lo que pasó esa noche a cambio de que le borraran la deuda. Fue él quien desactivó la cámara CAM-04.',
        parece_culpable: 'Como jefe de seguridad, es el único que pudo desactivar las cámaras. El salto de 40 minutos en CAM-04 apunta directamente a él. Cojea (podría haber estado en el lugar).',
        se_descarta: 'No se beneficia del desfalco. Su motivación fue personal (la deuda con Diego), no económica. No tenía acceso al sistema financiero ni a MenteSana.',
        papel_real: 'Cómplice menor. Desactivó la cámara por presión de Diego, pero no sabía el propósito real. Fue una pieza usada por Carolina a través de Diego.'
      },
      {
        id: 'kevin',
        nombre: 'Kevin Osorio',
        culpable: false,
        ocultando: 'Implementó un backdoor en MenteSana que permitía extraer datos estudiantiles sin dejar registro. Recibió un bono extra de Carolina por este trabajo.',
        parece_culpable: 'Es el desarrollador de MenteSana. Implementó la puerta trasera. Sus commits tienen marcas de tiempo que podrían haber sido manipuladas. Su actitud evasiva (sudadera, poco comunicativo) genera sospechas.',
        se_descarta: 'No tomó la decisión de implementar el backdoor; siguió órdenes de Carolina. No tuvo acceso a los contratos ni a las finanzas. Fue una herramienta, no el autor intelectual.',
        papel_real: 'Instrumento técnico. Carolina lo usó para implementar el backdoor. Él creía que era para "mantenimiento legítimo" hasta que vio los cobros duplicados.'
      },
      {
        id: 'diego',
        nombre: 'Diego Palacio',
        culpable: false,
        ocultando: 'Ejecutó el relleno del humedal sin permisos ambientales. Recibió un pago por debajo de la mesa de la constructora. Usó su relación con Wilson para asegurar que no hubiera registro.',
        parece_culpable: 'Su nombre aparece en las anotaciones del borrador del proyecto de humedal ("Diego coordinó la maquinaria"). Tiene acceso a maquinaria pesada. Fuma en áreas no permitidas (desprecio por las reglas).',
        se_descarta: 'El relleno del humedal fue un negocio paralelo, no parte del desfalco de MenteSana. No tenía acceso al sistema financiero ni a la plataforma.',
        papel_real: 'Operador de un negocio ilegal paralelo. Su relleno del humedal fue un delito ambiental separado que Carolina supo explotar para distraer la atención.'
      },
      {
        id: 'carolina',
        nombre: 'Carolina Espitia',
        culpable: true,
        ocultando: 'Es la autora intelectual y ejecutora del desfalco. Sus iniciales "C.E." aparecen en el reporte financiero de $388,800,000. Firmó el contrato con la aseguradora, autorizó los cobros duplicados, ordenó a Kevin el backdoor, y usó a Wilson y Diego como cómplices.',
        parece_culpable: 'Todas las evidencias convergen en ella: iniciales en el reporte financiero, contrato firmado, acceso administrativo total, y la capacidad de coordinar a todos los implicados.',
        se_descarta: 'No se descarta. Es la responsable.',
        papel_real: 'Autora intelectual y ejecutora del desfalco. El cerebro detrás de toda la operación.'
      }
    ],
    evidences: [
      {
        id: 1,
        keyword: 'RADICADO',
        type: 'email',
        contiene: 'Correo de Tomás Vargas solicitando información sobre qué datos recolecta MenteSana y con quién se comparten. La respuesta automática confirma que fue radicado pero nunca asignado.',
        notar: 'La solicitud fue ignorada deliberadamente. El radicado quedó "pendiente de asignación" y nunca se le dio respuesta de fondo. Esto activa la sospecha de que ocultaban algo.',
        conecta_con: [2, 4, 6],
        afecta: ['ana', 'edgar', 'carolina'],
        permite_hipotesis: 'Que la universidad estaba ocultando información sobre MenteSana.',
        descarta_hipotesis: 'Que fue un error administrativo menor.',
        deduccion: 'La solicitud de Vargas fue intencionalmente ignorada para ganar tiempo mientras Carolina preparaba el esquema de cobros.'
      },
      {
        id: 2,
        keyword: 'DISCRETO',
        type: 'chat',
        contiene: 'Chat de coordinación de rectoría donde Edgar Solano dice "hay que manejar el tema de Vargas discretamente" y "ya saben cómo".',
        notar: 'El uso de la palabra "discretamente" y la respuesta inmediata de "Vicerrectoría" y "Secretaría General" sugieren que tienen un protocolo preestablecido para estos casos.',
        conecta_con: [1, 4, 6],
        afecta: ['edgar', 'carolina'],
        permite_hipotesis: 'Que existe una red de encubrimiento en la rectoría.',
        descarta_hipotesis: 'Que fue una decisión individual.',
        deduccion: 'El chat revela que el encubrimiento fue coordinado. Edgar da la orden, pero Carolina (Vicerrectoría) es quien ejecuta.'
      },
      {
        id: 3,
        keyword: 'CAMARA',
        type: 'log',
        contiene: 'Registro de cámaras que muestra un salto de 40 minutos en CAM-04 NORTE (22:14 a 22:54).',
        notar: 'El salto de exactamente 40 minutos no es una falla técnica. Fue desactivada intencionalmente. La pregunta es: ¿quién tenía acceso y motivo para hacerlo?',
        conecta_con: [4, 5],
        afecta: ['wilson', 'carolina'],
        permite_hipotesis: 'Que alguien desactivó la cámara para cubrir un acceso no autorizado.',
        descarta_hipotesis: 'Que fue una falla del sistema.',
        deduccion: 'Wilson desactivó la cámara por orden de Diego (a su vez, de Carolina). La ventana de 40 minutos permitió a Carolina acceder y modificar registros.'
      },
      {
        id: 4,
        keyword: 'CONTRATO',
        type: 'email',
        contiene: 'Contrato entre la universidad y "Analítica del Norte" (la aseguradora) para procesar datos emocionales "re-identificables" de estudiantes.',
        notar: 'La palabra "re-identificable" es clave: significa que los datos no eran anónimos. Esto es ilegal sin consentimiento explícito. El contrato está fechado el 21 de febrero, antes de la solicitud de Vargas.',
        conecta_con: [1, 6, 2],
        afecta: ['carolina'],
        permite_hipotesis: 'Que el contrato con la aseguradora era ilegal y Carolina lo sabía.',
        descarta_hipotesis: 'Que fue un error de un empleado menor.',
        deduccion: 'Carolina firmó este contrato sabiendo que violaba la privacidad estudiantil para obtener ingresos adicionales.'
      },
      {
        id: 5,
        keyword: 'HUMEDAL',
        type: 'documento',
        contiene: 'Dos versiones del proyecto de adecuación del campus: la oficial (permiso ambiental aprobado) y el borrador interno (relleno ilegal del humedal con anotaciones manuscritas).',
        notar: 'Las anotaciones "no dejar registro" y "Diego coordinó la maquinaria. Que nadie se entere." prueban que fue intencional y que Diego fue el operador.',
        conecta_con: [3],
        afecta: ['diego', 'wilson'],
        permite_hipotesis: 'Que la universidad estaba realizando obras ilegales.',
        descarta_hipotesis: 'Que fue un proyecto legítimo de jardinería.',
        deduccion: 'Diego ejecutó el relleno ilegal del humedal, un delito ambiental separado del desfalco, pero que Carolina explotó para tener leverage sobre Diego.'
      },
      {
        id: 6,
        keyword: 'NOMINA',
        type: 'documento',
        contiene: 'Reporte financiero que muestra 4 cobros idénticos de $97,200,000 a través de MenteSana, totalizando $388,800,000. Las iniciales "C.E." figuran como responsable.',
        notar: 'Los montos son exactamente iguales, lo que sugiere copia/pega más que cargos legítimos. Las iniciales "C.E." (Carolina Espitia) aparecen como responsable. No hay autorización del consejo directivo.',
        conecta_con: [2, 4, 1],
        afecta: ['carolina'],
        permite_hipotesis: 'Que Carolina desvió fondos a través de cobros duplicados en MenteSana.',
        descarta_hipotesis: 'Que fue un error contable.',
        deduccion: 'Esta es la evidencia definitiva. Los cobros duplicados, las iniciales de Carolina y la falta de autorización prueban el desfalco.'
      }
    ],
    connections: [
      '                         SOLICITUD DE VARGAS (Ev 1)',
      '                              |',
      '                              v',
      '                   CHAT DE RECTORÍA (Ev 2)',
      '                    /           |           \\',
      '                   v            v            v',
      '            Edgar ordena   Carolina     Secretaría',
      '            "discreto"     ejecuta       sabe',
      '                   \\            |            /',
      '                    v           v           v',
      '              CONTRATO ASEGURADORA (Ev 4)',
      '                    |           |',
      '                    v           v',
      '     Carolina firma        Kevin implementa',
      '     acuerdo ilegal        backdoor en app',
      '                    |           |',
      '                    v           v',
      '              COBROS DUPLICADOS (Ev 6)',
      '                    |',
      '                    v',
      '          $388,800,000 — C.E.',
      '',
      '          NEGOCIO PARALELO:',
      '          RELLENO HUMEDAL (Ev 5)',
      '                    |',
      '                    v',
      '             Diego opera',
      '                    |',
      '                    v',
      '             Wilson desactiva',
      '             CAM-04 (Ev 3)',
      '             22:14 — 22:54'
    ],
    false_theories: [
      {
        teoria: 'Edgar Solano fue el responsable. Él dio la orden en el chat.',
        parece_correcta: 'Aparece dando instrucciones en el chat de rectoría. Es la máxima autoridad. Tiene acceso a todo.',
        contradice: 'No hay evidencia de que Edgar haya manipulado el sistema financiero. Su rol fue de encubridor, no de ejecutor. Las iniciales en el reporte son "C.E.", no "E.S."',
        descubrir: 'Preguntarse: ¿quién se beneficia directamente? Edgar gana tiempo, pero Carolina gana dinero. Las evidencias 4, 5 y 6 apuntan a acciones que solo Carolina podía ejecutar.'
      },
      {
        teoria: 'Kevin Osorio actuó solo, vendiendo los datos de MenteSana por su cuenta.',
        parece_correcta: 'Es el desarrollador, tiene acceso al código, implementó el backdoor.',
        contradice: 'Kevin no tiene acceso a contratos ni autorización financiera. Alguien tuvo que firmar el acuerdo con la aseguradora (Ev 4) y autorizar los cobros (Ev 6).',
        descubrir: 'El contrato (Ev 4) requiere firma de vicerrectoría. Kevin no tiene ese nivel de acceso.'
      },
      {
        teoria: 'Fue un error contable, no un desfalco.',
        parece_correcta: 'Podría ser un bug en MenteSana que duplicó los cargos.',
        contradice: 'Los montos duplicados son exactamente iguales, el contrato con la aseguradora existe, y las iniciales "C.E." aparecen como responsable.',
        descubrir: 'La evidencia 6 muestra que no hay autorización del consejo directivo. Si fuera un error, habría sido reportado.'
      },
      {
        teoria: 'Diego Palacio es el responsable de todo, incluyendo el desfalco.',
        parece_correcta: 'Ya estaba cometiendo un delito (relleno del humedal), parece tener una red de contactos, y su cicatriz lo hace parecer "peligroso".',
        contradice: 'Diego no tiene acceso al sistema financiero ni a MenteSana. Su delito es ambiental, no financiero.',
        descubrir: 'Separar las dos investigaciones: el humedal es un delito de Diego, el desfalco es de Carolina. Son paralelos pero conectados.'
      }
    ],
    step_by_step: [
      'El jugador descubre la Evidencia 1 (RADICADO): la solicitud de Vargas fue ignorada deliberadamente.',
      'Al buscar más, encuentra la Evidencia 2 (DISCRETO): el chat de rectoría revela que hay un protocolo de encubrimiento.',
      'El jugador detecta una contradicción: si no había nada que ocultar, ¿por qué "manejar el tema discretamente"?',
      'La Evidencia 4 (CONTRATO) muestra que la universidad ya había firmado un acuerdo ilegal con la aseguradora antes de la solicitud de Vargas.',
      'La Evidencia 6 (NOMINA) revela los cobros duplicados con las iniciales "C.E."',
      'El jugador deduce que Carolina Espitia es la responsable. Sus iniciales están en el reporte financiero.',
      'La Evidencia 3 (CAMARA) muestra el salto de 40 minutos. El jugador conecta esto con Wilson y Diego.',
      'La Evidencia 5 (HUMEDAL) revela el negocio paralelo de Diego y su conexión con Wilson.',
      'El jugador reconstruye la cronología: contrato (febrero) → solicitud de Vargas (marzo) → chat → desactivación de cámara → cobros duplicados.',
      'Descubre el método: Carolina usó su acceso administrativo, la tarjeta de otro, y la ventana de 40 minutos sin cámara para modificar los registros.',
      'Identifica a Carolina como responsable, con cómplices (Wilson, Kevin, Diego) y un encubridor (Edgar).',
      'Presenta la resolución: Carolina Espitia, motivada por cubrir un desfalco anterior, usando su posición y una red de cómplices.'
    ],
    game_answers: {
      responsible: 'carolina',
      motiveKey: 'a',
      methodKey: 'b',
      evidences: [3, 4, 5, 6],
      descartadoKey: 'edgar'
    }
  },

  caso2: {
    solution: {
      responsible: 'Rodrigo Anzola',
      responsible_id: 'rodrigo',
      motive: 'Rodrigo ordenó descargas de aguas residuales sin tratar al río para ahorrar costos operativos de Palmeras del Sur. Cuando los campesinos de la Vereda El Progreso solicitaron titulación colectiva de tierras (lo que habría expuesto la contaminación), Rodrigo orquestó una operación para detenerlos: sobornó al Capitán Hugo para permitir el paso de camiones, alteró el informe ambiental, espió a los líderes comunales, bloqueó la tutela por la vía legal, y extravió la solicitud de titulación.',
      method: 'Como Director de Operaciones, Rodrigo coordinó cada pieza: (1) Pagó a Fabián Rueda para extraviar la solicitud de titulación en el sistema de la Alcaldía. (2) Contrató a Nicolás Fajardo para obtener ilegalmente el historial GPS de los líderes comunales. (3) Presionó a Camila Ortiz para alterar el informe de impacto ambiental, cambiando "3.2 veces el límite" por "dentro del rango permitido". (4) Sobornó al Capitán Hugo Beltrán para permitir el paso de camiones con desechos por el retén y alterar la bitácora. (5) Instruyó a Renata Duque para redactar una respuesta legal que rechazara la tutela por "vicios de forma". (6) Envió el correo a Hugo con la lista de "líderes gestionados".',
      objective: 'Evitar que la comunidad campesina obtuviera la titulación colectiva de tierras, lo que habría expuesto los vertimientos contaminantes de Palmeras del Sur al río. También necesitaba proteger su bono anual y su posición como Director de Operaciones.',
      timeline: [
        { time: 'Hace 4 meses', event: 'La comunidad de la Vereda El Progreso radica solicitud de titulación colectiva de tierras ante la Agencia Nacional de Tierras.', involved: 'Comunidad campesina', evidence: 1, type: 'direct' },
        { time: 'Semana siguiente', event: 'Fabián Rueda, sobornado por Rodrigo, extravía la solicitud en el sistema de gestión documental. El campo "Asignado a" queda vacío.', involved: 'Fabián Rueda', evidence: 1, type: 'direct' },
        { time: '12 de enero, 18:42', event: 'Nicolás Fajardo envía correo solicitando historial GPS de los líderes comunales por canales no oficiales.', involved: 'Nicolás Fajardo', evidence: 4, type: 'direct' },
        { time: 'Enero-febrero', event: 'Camila Ortiz realiza muestreo de aguas y detecta vertimientos a 3.2 veces el límite permitido. Entrega informe real.', involved: 'Camila Ortiz', evidence: 5, type: 'direct' },
        { time: 'Febrero', event: 'Rodrigo ordena alterar el informe. Las correcciones manuscritas dicen "Esto no puede salir así" y "Cambiar 3.2 veces por dentro del rango".', involved: 'Rodrigo Anzola, Camila Ortiz', evidence: 5, type: 'direct' },
        { time: 'Noche del retén', event: 'Capitán Hugo permite el paso de camiones de Palmeras con desechos. Altera la bitácora de turno con corrector.', involved: 'Capitán Hugo Beltrán, Cabo Ramírez', evidence: 3, type: 'direct' },
        { time: '22:15 (aprox)', event: 'La bitácora muestra una entrada TACHADA CON CORRECTOR. Comparación con el día anterior muestra que el cambio de turno fue alterado.', involved: 'Capitán Hugo Beltrán', evidence: 3, type: 'direct' },
        { time: 'Post-evento', event: 'Se presenta acción de tutela. Renata Duque la rechaza por "vicios de forma" en la firma.', involved: 'Renata Duque', evidence: 2, type: 'direct' },
        { time: 'Post-evento', event: 'Rodrigo envía correo a Hugo con archivo adjunto "Seguimiento — Líderes gestionados" donde aparecen los líderes comunales como "Resuelto".', involved: 'Rodrigo Anzola', evidence: 6, type: 'direct' }
      ],
      key_evidence: [5, 6, 3],
      contradiction: 'Rodrigo dice que estaba en una cena con directivos de Palmeras la noche de los hechos, pero el correo a Hugo (Evidencia 6) prueba que estaba coordinando la operación. Su coartada no cubre las llamadas y correos que envió esa noche. Además, las correcciones manuscritas en el informe ambiental (Evidencia 5) coinciden con su estilo de firma.',
      false_leads: [
        'El Capitán Hugo aparece en la bitácora alterada, pero actuaba bajo órdenes de Rodrigo. Su的角色 fue de ejecutor, no de autor intelectual.',
        'Camila Ortiz entregó el informe verdadero de los vertimientos. Fue Rodrigo quien ordenó alterarlo. Ella fue una víctima de la presión, no la responsable.',
        'Fabián Rueda extravió la solicitud, pero fue sobornado por Rodrigo. Es un funcionario corrupto, no el cerebro de la operación.'
      ]
    },
    suspects: [
      {
        id: 'fabian',
        nombre: 'Fabián Rueda',
        culpable: false,
        ocultando: 'Aceptó un soborno de Palmeras del Sur (a través de Rodrigo) para extraviar la solicitud de titulación colectiva de los campesinos en el sistema de la Alcaldía.',
        parece_culpable: 'Es el funcionario público que recibió la solicitud y la extravió. Tiene acceso al sistema de gestión documental. Su reloj dorado sugiere que recibe ingresos no declarados.',
        se_descarta: 'No se beneficia del encubrimiento ambiental. Solo fue un sobornado. No participó en la alteración del informe ni en el espionaje.',
        papel_real: 'Facilitador burocrático. Recibió dinero para "perder" la solicitud en el sistema.'
      },
      {
        id: 'renata',
        nombre: 'Renata Duque',
        culpable: false,
        ocultando: 'Sabía que los accionantes de la tutela sí cumplían los requisitos, pero redactó la respuesta para rechazarla por "vicios de forma" siguiendo órdenes de Rodrigo.',
        parece_culpable: 'Es la abogada que rechazó la tutela. Su perfume a jazmín y su cicatriz la hacen memorable. Su lenguaje legal es técnico y evasivo.',
        se_descarta: 'Actuó bajo órdenes de su jefe (Rodrigo). Su responsabilidad es profesional, no penal. No participó en los vertimientos ni en el espionaje.',
        papel_real: 'Instrumento legal. Ejecutó la estrategia jurídica de Rodrigo para bloquear a los campesinos.'
      },
      {
        id: 'hugo',
        nombre: 'Capitán Hugo Beltrán',
        culpable: false,
        ocultando: 'Recibía pagos mensuales de Palmeras del Sur por permitir el paso de camiones con desechos. Alteró la bitácora para cubrir el paso esa noche.',
        parece_culpable: 'Su bitácora está alterada con corrector. Es la autoridad en el retén. Su voz ronca sugiere nerviosismo al declarar.',
        se_descarta: 'Actuaba bajo órdenes de Rodrigo y por necesidad económica. No participó en la decisión de verter contaminantes ni en la alteración del informe ambiental.',
        papel_real: 'Ejecutor en terreno. Permitió el paso de camiones a cambio de pagos mensuales. Una pieza en la operación de Rodrigo.'
      },
      {
        id: 'nicolas',
        nombre: 'Nicolás Fajardo',
        culpable: false,
        ocultando: 'Obtuvo el historial GPS de los líderes comunales por canales ilegales, sin orden judicial, para que Rodrigo pudiera localizar y presionar a los campesinos.',
        parece_culpable: 'Es un contratista de inteligencia con acceso a datos sensibles. Su correo dice "esto queda entre nosotros, no pasó por el canal oficial".',
        se_descarta: 'Fue contratado por Rodrigo para un trabajo específico. No sabía el propósito final del espionaje ni participó en los vertimientos.',
        papel_real: 'Contratista de inteligencia privada. Consiguió los datos GPS por encargo de Rodrigo.'
      },
      {
        id: 'camila',
        nombre: 'Camila Ortiz',
        culpable: false,
        ocultando: 'Entregó un informe ambiental real y verdadero, pero fue presionada por Rodrigo para firmar una versión alterada que decía "cero vertimientos".',
        parece_culpable: 'Es la ingeniera que realizó el muestreo. Su libreta de campo contiene los datos reales. Si ella no hubiera hecho el muestreo, no habría informe que alterar.',
        se_descarta: 'Entregó el informe correcto inicialmente. Fue Rodrigo quien ordenó la alteración. La evidencia 5 muestra las correcciones manuscritas que no son de Camila.',
        papel_real: 'Profesional presionada. Hizo su trabajo correctamente pero sus superiores alteraron los resultados.'
      },
      {
        id: 'rodrigo',
        nombre: 'Rodrigo Anzola',
        culpable: true,
        ocultando: 'Es el cerebro de toda la operación. Ordenó los vertimientos para ahorrar costos, coordinó el soborno a Fabián, contrató a Nicolás para el espionaje, presionó a Camila para alterar el informe, sobornó al Capitán Hugo, instruyó a Renata para bloquear la tutela, y envió el correo con la lista de "líderes gestionados".',
        parece_culpable: 'Su correo a Hugo (Evidencia 6) es la prueba más directa: "Hay que resolver el problema de los líderes de la vereda". Las correcciones manuscritas en el informe (Evidencia 5) coinciden con su estilo. Todos los hilos conducen a él.',
        se_descarta: 'No se descarta. Es el responsable.',
        papel_real: 'Autor intelectual y ejecutor. El director de toda la operación de encubrimiento ambiental.'
      }
    ],
    evidences: [
      {
        id: 1,
        keyword: 'TITULO',
        type: 'documento',
        contiene: 'Solicitud de titulación colectiva de tierras de la Vereda El Progreso. Radicada con número ANT-2024-0891 pero nunca asignada a ningún funcionario.',
        notar: 'El campo "Asignado a" está vacío. La solicitud fue recibida pero deliberadamente ignorada. Esto no es un error administrativo.',
        conecta_con: [6],
        afecta: ['fabian'],
        permite_hipotesis: 'Que la solicitud fue extraviada intencionalmente.',
        descarta_hipotesis: 'Que fue una demora burocrática normal.',
        deduccion: 'Fabián Rueda, sobornado por Rodrigo, extravió la solicitud en el sistema.'
      },
      {
        id: 2,
        keyword: 'FORMA',
        type: 'documento',
        contiene: 'Respuesta a acción de tutela redactada por la oficina jurídica de Palmeras del Sur, rechazando la demanda por "vicios de forma" en la firma de los accionantes.',
        notar: 'El documento no tiene fecha, no tiene nombre completo del firmante, solo una rúbrica ilegible. El sello no tiene número de registro.',
        conecta_con: [1, 6],
        afecta: ['renata'],
        permite_hipotesis: 'Que el rechazo de la tutela fue una maniobra legal para evitar el fondo del asunto.',
        descarta_hipotesis: 'Que fue un rechazo legítimo por incumplimiento de requisitos.',
        deduccion: 'Renata redactó la respuesta siguiendo órdenes de Rodrigo para bloquear la tutela sin entrar al mérito.'
      },
      {
        id: 3,
        keyword: 'BITACORA',
        type: 'log',
        contiene: 'Bitácora de turno del Puesto de Control N° 3 de la Unidad Centinela. Una entrada está tachada con corrector. La comparación con el día anterior muestra que el cambio de turno fue alterado.',
        notar: 'La entrada tachada corresponde aproximadamente a las 22:15. En el día anterior, el cambio de turno fue a las 22:00. Algo ocurrió entre las 21:40 y las 23:50 que no debe saberse.',
        conecta_con: [6, 5],
        afecta: ['hugo'],
        permite_hipotesis: 'Que el Capitán Hugo alteró la bitácora para cubrir el paso de camiones.',
        descarta_hipotesis: 'Que fue un error del cabo Ramírez.',
        deduccion: 'Hugo alteró la bitácora para eliminar el registro del paso de camiones de Palmeras esa noche.'
      },
      {
        id: 4,
        keyword: 'GPS',
        type: 'email',
        contiene: 'Correo de Nicolás Fajardo solicitando historial GPS de los últimos 15 días "por canales no oficiales". Dice "esto queda entre nosotros".',
        notar: 'La falta de orden judicial y el "esto queda entre nosotros" indican que es ilegal. Nicolás está obteniendo datos de geolocalización sin autorización.',
        conecta_con: [6, 1],
        afecta: ['nicolas'],
        permite_hipotesis: 'Que los líderes comunales estaban siendo espiados.',
        descarta_hipotesis: 'Que fue una solicitud legítima de información.',
        deduccion: 'Rodrigo contrató a Nicolás para espiar a los líderes comunales y poder presionarlos.'
      },
      {
        id: 5,
        keyword: 'VERTIMIENTO',
        type: 'documento',
        contiene: 'Dos versiones del informe de impacto ambiental: la oficial (aprobada, dice "cero vertimientos") y el borrador interno (que muestra vertimientos a 3.2 veces el límite). Las correcciones manuscritas ordenan alterar los datos.',
        notar: 'Las correcciones dicen "Esto no puede salir así", "Cambiar 3.2 veces por dentro del rango", y "Que la versión final diga cero vertimientos". Esto prueba alteración deliberada.',
        conecta_con: [3, 6],
        afecta: ['camila', 'rodrigo'],
        permite_hipotesis: 'Que Palmeras del Sur estaba vertiendo contaminantes ilegalmente y encubriéndolo.',
        descarta_hipotesis: 'Que Palmeras cumple con la normativa ambiental.',
        deduccion: 'Rodrigo ordenó alterar el informe ambiental para ocultar los vertimientos ilegales. Camila entregó el informe real, pero fue presionada para firmar el falso.'
      },
      {
        id: 6,
        keyword: 'LISTA',
        type: 'documento',
        contiene: 'Correo de Rodrigo Anzola al Capitán Hugo Beltrán diciendo "Hay que resolver el problema de los líderes de la vereda, empezando por la señora Casierra. De forma discreta, como siempre." Archivo adjunto: lista de líderes con estado "Resuelto".',
        notar: 'La palabra "Resuelto" es ambigua pero siniestra en este contexto. "De forma discreta, como siempre" sugiere que no es la primera vez. La señora Casierra es mencionada específicamente.',
        conecta_con: [1, 3, 4, 5],
        afecta: ['rodrigo', 'hugo'],
        permite_hipotesis: 'Que Rodrigo ordenó acciones ilegales contra los líderes comunales.',
        descarta_hipotesis: 'Que fue una comunicación administrativa legítima.',
        deduccion: 'Esta es la evidencia más directa. Rodrigo coordinaba personalmente la operación de presión contra los líderes comunales, usando a Hugo como brazo ejecutor.'
      }
    ],
    connections: [
      '          SOLICITUD DE TITULACIÓN (Ev 1)',
      '                    |',
      '                    v',
      '       Fabián Rueda la extravía (sobornado)',
      '                    |',
      '                    v',
      '     INFORME AMBIENTAL (Ev 5)',
      '      /                    \\',
      '     v                      v',
      '  Camila entrega       Rodrigo ordena',
      '  informe real         alterar a "0"',
      '  (3.2x límite)        vertimientos',
      '     |                    |',
      '     v                    v',
      '  BITÁCORA (Ev 3)    CORREO LISTA (Ev 6)',
      '     |                    |',
      '     v                    v',
      '  Capitán Hugo        Rodrigo a Hugo:',
      '  altera turno        "resolver líderes"',
      '  y deja pasar        "de forma discreta"',
      '  camiones                |',
      '     |                    v',
      '     +--- GPS (Ev 4) ---+',
      '              |',
      '              v',
      '       Nicolás espía',
      '       a líderes',
      '',
      '      TUTELA (Ev 2)',
      '           |',
      '           v',
      '    Renata la rechaza',
      '    por "vicios de forma"',
      '',
      '      = TODAS LAS PIEZAS LLEVAN A =',
      '         RODRIGO ANZOLA'
    ],
    false_theories: [
      {
        teoria: 'El Capitán Hugo actuó solo, permitiendo el paso de camiones por su cuenta.',
        parece_correcta: 'Es la autoridad en el retén, alteró la bitácora, su voz ronca sugiere que miente.',
        contradice: 'No tenía motivo para permitir el paso de camiones. El correo de Rodrigo (Ev 6) prueba que trabajaban juntos y que Rodrigo daba las órdenes.',
        descubrir: 'Preguntarse: ¿quién se beneficia de los vertimientos? Hugo gana dinero, pero Rodrigo protege su carrera y a Palmeras.'
      },
      {
        teoria: 'Camila Ortiz alteró el informe por iniciativa propia para proteger su trabajo.',
        parece_correcta: 'Ella realizó el muestreo, ella firmó el informe final. Su libreta de campo contiene los datos reales.',
        contradice: 'El borrador interno (Ev 5) muestra correcciones manuscritas que no son de Camila. La frase "Que la versión final diga cero vertimientos" está en otra letra.',
        descubrir: 'Comparar la caligrafía de las correcciones con la firma de Camila en otros documentos. No coinciden.'
      },
      {
        teoria: 'Fue un conflicto entre campesinos y una empresa que solo buscaba cumplir la ley.',
        parece_correcta: 'Palmeras del Sur es una empresa formal. Los campesinos podrían estar invadiendo tierras.',
        contradice: 'Las evidencias 5 y 6 prueban que Palmeras estaba vertiendo ilegalmente y que Rodrigo coordinó un encubrimiento activo, incluyendo espionaje y sobornos.',
        descubrir: 'El informe original de Camila (Ev 5) y el correo de Rodrigo (Ev 6) muestran intención de ocultar un delito, no de cumplir la ley.'
      },
      {
        teoria: 'Nicolás Fajardo era el cerebro, usando sus contactos de inteligencia para presionar a los campesinos.',
        parece_correcta: 'Tiene acceso a datos GPS, trabaja en inteligencia, su correo es evasivo.',
        contradice: 'Nicolás era un contratista. No tenía autoridad sobre Hugo, Renata o Fabián. No se beneficia de los vertimientos.',
        descubrir: 'Nicolás solo tenía acceso a datos. No podía ordenar a Hugo alterar la bitácora ni a Renata rechazar la tutela. Rodrigo es el único con autoridad sobre todos.'
      }
    ],
    step_by_step: [
      'El jugador descubre la Evidencia 1 (TITULO): la solicitud de los campesinos nunca fue asignada.',
      'Al investigar, encuentra la Evidencia 2 (FORMA): la tutela fue rechazada por "vicios de forma" sin entrar al fondo.',
      'El jugador detecta una contradicción: ¿por qué rechazar una tutela por forma si no hay nada que ocultar?',
      'La Evidencia 4 (GPS) revela que los líderes comunales estaban siendo espiados ilegalmente.',
      'La Evidencia 5 (VERTIMIENTO) muestra la verdad: hay dos versiones del informe ambiental, una real y otra alterada.',
      'Las correcciones manuscritas en el borrador prueban que alguien ordenó ocultar los vertimientos.',
      'La Evidencia 3 (BITACORA) muestra la bitácora alterada. El jugador conecta el paso de camiones con los vertimientos.',
      'La Evidencia 6 (LISTA) es la pieza final: el correo de Rodrigo a Hugo prueba que Rodrigo coordinaba todo.',
      'El jugador reconstruye la cronología: solicitud → soborno → espionaje → vertimientos → alteración de informe → bloqueo legal.',
      'Identifica a Rodrigo como el responsable que coordinó cada pieza desde su posición de poder.',
      'Presenta la resolución: Rodrigo Anzola, Director de Operaciones de Palmeras del Sur, por encubrimiento ambiental, soborno y conspiración.'
    ],
    game_answers: {
      responsible: 'rodrigo',
      motiveKey: 'd',
      methodKey: 'b',
      evidences: [3, 5, 6],
      descartadoKey: 'camila'
    }
  }
};
