# Resumen Ejecutivo: Auditoría de Seguridad - Aguas Claras

## Sobre la Empresa: Aguas Claras
<div style="text-align:justify">

La presente auditoría de seguridad informática se desarrolla sobre los activos digitales de **Aguas Claras**, organización perteneciente al rubro **Sanitaria / servicios básicos**. 

Como entidad prestadora de servicios sanitarios, Aguas Claras administra información crítica de la comunidad a través de su plataforma tecnológica. La protección de estos datos es vital no solo para la continuidad del negocio, sino para mantener la confianza de los clientes en un servicio de primera necesidad. Según la clasificación de la empresa, su portal de clientes custodia activamente:
* **Datos de Clientes:** Información de identificación personal y direcciones.
* **Datos de Consumo:** Registros de medición y uso de recursos hídricos.
* **Datos de Pago:** Información financiera y transaccional ligada a la facturación.

## Propósito de este Portal de Auditoría
Esta aplicación web ha sido construida para presentar los resultados de la evaluación de vulnerabilidades realizada al portal de clientes de Aguas Claras (entorno de pruebas DVWA). 

Como parte de las políticas de ciberseguridad, a lo largo de este sitio se documenta la explotación, análisis y remediación de vulnerabilidades críticas. El contenido que se presenta a continuación incluye:

1. **Evidencia de Vulnerabilidades (Informe A):** Demostración técnica de tres fallas de seguridad severas detectadas en el sistema:
   * *Inyección SQL (SQLi):* Acceso no autorizado a bases de datos.
   * *Cross-Site Scripting (XSS Reflejado):* Ejecución de scripts maliciosos en el navegador del cliente.
   * *Inyección de Comandos:* Ejecución arbitraria de código a nivel del sistema operativo.
2. **Evaluación de Impacto CVSS:** Puntuación estandarizada de la gravedad de cada hallazgo.
3. **Matriz de Riesgo y Activos (Informe B):** Un análisis de cómo estas fallas técnicas se traducen en riesgos directos para el rubro sanitario, categorizando los activos de información afectados.
4. **Plan de Mitigación y Recuperación:** Políticas de prevención recomendadas a nivel de desarrollo y controles de mitigación para proteger la infraestructura de Aguas Claras ante desastres.

</div>