# Activos de Información y Riesgos de Negocio

## 1. Identificación de Activos de Información Críticos

<div style="text-align:justify">

Para una empresa del rubro de servicios básicos y sanitarios, el portal de clientes no es solo una página web, es una sucursal virtual crítica que centraliza la interacción con los usuarios. De acuerdo con el giro del negocio, los activos de información críticos que custodia esta aplicación son:

* **Activo A - Base de Datos de Clientes (PII):** Información personal de los usuarios del suministro de agua, incluyendo RUT, nombres, direcciones exactas de las propiedades y datos de contacto.
* **Activo B - Registros de Consumo Hídrico:** Historial de metros cúbicos consumidos, lecturas de medidores, historial de cortes y reposiciones del servicio.
* **Activo C - Información de Facturación y Pagos:** Estados de cuenta, saldos pendientes, multas, y comprobantes o tokens de transacciones de pago en línea.
* **Activo D - Infraestructura de Servidores (Web/App):** Los servidores, el sistema operativo y la capacidad de procesamiento que mantienen el portal en línea 24/7.

---

## 2. Traducción de Vulnerabilidades a Riesgos de Negocio (Impacto por Industria)

Un fallo técnico no significa nada sin su contexto de negocio. A continuación, se detalla cómo los hallazgos técnicos de esta auditoría representan un riesgo directo para la supervivencia y operación de **Aguas Claras**:

### Riesgo Comercial y Legal (Derivado de la Inyección SQL)
* **Activos Afectados:** Activo A (Clientes) y Activo C (Facturación).
* **El Riesgo Real:** La vulnerabilidad SQLi demostró que un atacante puede volcar toda la base de datos. Para una empresa sanitaria, la exposición de datos personales masivos y estados de deuda no solo destruye la confianza del cliente, sino que expone a la empresa a **fuertes multas regulatorias** por parte de la Superintendencia de Servicios Sanitarios (SISS) y posibles demandas colectivas por infracción a la ley de protección de datos. Además, un atacante podría manipular la base de datos para borrar deudas de consumo, generando pérdidas financieras directas.

### Riesgo Reputacional y Fraude a Clientes (Derivado del XSS Reflejado)
* **Activos Afectados:** Activo A (Clientes).
* **El Riesgo Real:** Si bien el XSS no ataca al servidor, usa la "confianza" del nombre de *Aguas Claras* para atacar a los ciudadanos. Un cibercriminal podría usar esta falla para enviar avisos falsos por correo (Ej: *"Aviso de corte de agua inminente por deuda, pague aquí"*). Cuando el cliente asustado hace clic, el XSS inyecta una pasarela de pago falsa en la página oficial. Si bien la empresa no es hackeada directamente, su canal oficial se convierte en un vector de fraude, destruyendo por completo la reputación institucional.

### Riesgo de Continuidad Operacional (Derivado de la Inyección de Comandos)
* **Activos Afectados:** Activo D (Infraestructura).
* **El Riesgo Real:** La inyección de comandos permitió tomar control a nivel de sistema operativo del portal. El riesgo de negocio para una sanitaria es catastrófico: los atacantes podrían usar este servidor web como "cabeza de playa" (pivoteo) para intentar saltar a las redes internas corporativas. En el peor escenario, podrían alcanzar las redes OT/SCADA (Sistemas de Control Industrial) que administran válvulas, presiones de agua y plantas de tratamiento, transformando un riesgo digital en una emergencia sanitaria y de continuidad operacional de alcance comunal.

</div>