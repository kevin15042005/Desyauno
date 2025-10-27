export const procesosData = [
    {
        fase: "1-3. Personalización y Adquisición",
        requisito:
            "Constructor de desayunos y carrito de personalización que permite al cliente seleccionar productos base y agregar detalles paso a paso, calculando el precio final de manera automática.",
        objetivo:
            "Rentabilidad / Calidad: Garantizar que el precio refleje correctamente las personalizaciones y registrar las especificaciones del pedido sin errores de comunicación.",
    },
    {
        fase: "4. Verificación de Insumos",
        requisito:
            "Módulo de verificación de stock en línea integrado con el inventario, que notifica al cliente si un insumo no está disponible y sugiere alternativas en tiempo real.",
        objetivo:
            "Tiempo / Calidad: Reducir demoras en la atención y evitar insatisfacción por falta de disponibilidad.",
    },
    {
        fase: "5. Confirmación del Pedido",
        requisito:
            "Pantalla de resumen y confirmación que muestra los detalles completos del pedido, incluyendo costos, insumos y mensajes personalizados, para aprobación del cliente antes del pago.",
        objetivo:
            "Calidad: Asegurar la validación explícita del cliente sobre las especificaciones y el valor final del pedido.",
    },
    {
        fase: "6. Cálculo de Entrega",
        requisito:
            "Sistema de cálculo dinámico del tiempo estimado de llegada (ETA) basado en la ubicación, la carga de trabajo y la disponibilidad logística.",
        objetivo:
            "Tiempo: Brindar al cliente una estimación de entrega precisa y confiable desde el inicio del proceso.",
    },
    {
        fase: "7-8. Envío y Ruta",
        requisito:
            "Módulo de rastreo para el cliente con actualizaciones automáticas sobre el estado del pedido, desde la preparación hasta la salida a ruta.",
        objetivo:
            "Tiempo: Mejorar la gestión de expectativas y disminuir las solicitudes de información sobre el estado del pedido.",
    },
    {
        fase: "9. Prueba de Entrega (POD)",
        requisito:
            "Aplicación para domiciliarios que registra la hora exacta de entrega mediante GPS y permite reportar el estado del pedido al finalizar la entrega.",
        objetivo:
            "Calidad / Tiempo: Medir el cumplimiento de entregas a tiempo y obtener información sobre las condiciones de entrega.",
    },
    {
        fase: "10. Alerta Proactiva",
        requisito:
            "Sistema de notificación automática al equipo gerencial cuando se detecta un reporte negativo, para contactar al cliente antes de que presente una queja.",
        objetivo:
            "Calidad / Rentabilidad: Fortalecer la fidelización mediante una atención rápida y preventiva ante incidencias.",
    },
    {
        fase: "11. Feedback del Cliente",
        requisito:
            "Módulo automatizado que envía una breve encuesta de satisfacción al cliente una hora después de la entrega, a través de mensajes de texto o WhatsApp.",
        objetivo:
            "Calidad: Recopilar información valiosa para la mejora continua y el control de la experiencia del cliente.",
    },
    {
        fase: "12. Finalización",
        requisito:
            "Sistema de consolidación de datos que reúne información del pedido como costos, tiempos, métricas de entrega y resultados de satisfacción.",
        objetivo:
            "Rentabilidad: Generar reportes analíticos para evaluar el desempeño y facilitar la toma de decisiones.",
    },
];

export const scrumData = [
    {
        paso: "1. Revisión de Feedback y Calidad (QC)",
        tiempo: "3 min",
        rol: "PO (Pedidos / Gerencia)",
        foco: "Calidad y Rentabilidad",
        actividad:
            "El Product Owner revisa los resultados de satisfacción y calidad del día anterior, identificando áreas de mejora y comunicando la acción principal para el nuevo día.",
    },
    {
        paso: "2. Priorización Logística y Rutas",
        tiempo: "3 min",
        rol: "SM (Logística / Operaciones)",
        foco: "Tiempo de Entrega",
        actividad:
            "El Scrum Master analiza la carga operativa y las rutas más críticas, comunicando los ajustes necesarios para optimizar tiempos de salida y entrega.",
    },
    {
        paso: "3. Reporte de Impedimentos (Bloqueadores)",
        tiempo: "3 min",
        rol: "Equipo de Producción / Domiciliarios",
        foco: "Eficiencia y Tiempo",
        actividad:
            "Cada integrante del equipo informa sobre cualquier situación que esté afectando el flujo de trabajo o impida cumplir con las entregas planificadas.",
    },
    {
        paso: "4. Sincronización y Cierre",
        tiempo: "1 min",
        rol: "Scrum Master",
        foco: "Compromiso",
        actividad:
            "El Scrum Master confirma los acuerdos y prioridades del día, asegurando que todo el equipo comprenda las metas y responsabilidades antes de iniciar la jornada.",
    },
];
