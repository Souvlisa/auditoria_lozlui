# Políticas de Prevención y Mitigación

<div style="text-align:justify">

Para proteger la infraestructura de la sanitaria y los datos de nuestros clientes, se define el siguiente plan de acción centrado en la remediación de los riesgos en zonas críticas y altas (Rojos y Naranjos), alineando nuestras defensas con los estándares internacionales de la industria (**OWASP Top 10** y **NIST CSF**).

### 🔴 Mitigación para Riesgos Rojos (Críticos)
**Vulnerabilidad Objetivo:** Inyección SQL (Nivel de Riesgo: 20)  
**Marco de Referencia:** OWASP A03:2021 (Injection) y Control NIST SI-10 (Information Input Validation).

* **Prevención en Código (Consultas Parametrizadas):** Es obligatorio que el equipo de desarrollo refactorice el código del portal utilizando sentencias preparadas (Prepared Statements). Esto garantiza que los datos ingresados en el buscador de la sanitaria nunca sean interpretados como comandos SQL maliciosos.
* **Control Mitigador (Implementación de WAF):** Desplegar de forma inmediata un Web Application Firewall (WAF) configurado con reglas estrictas (OWASP Core Rule Set) para detectar e interceptar tráfico que contenga firmas de inyección SQL antes de que llegue a las bases de datos de consumo de agua y facturación.

### 🟠 Mitigación para Riesgos Naranjos (Altos y Medios)
**Vulnerabilidades Objetivo:** Inyección de Comandos (Nivel 15) y Cross-Site Scripting - XSS (Nivel 12)  
**Marco de Referencia:** OWASP A03:2021 (Injection / XSS) y Control NIST AC-6 (Principio de Mínimo Privilegio).

* **Prevención en Código (Output Encoding y Whitelisting):** Para erradicar el XSS, cualquier dato dinámico que se imprima en el navegador del cliente debe pasar por una codificación de salida (convertir caracteres como `<` a `&lt;`). Para los comandos, se debe prohibir el uso de funciones de sistema (ej. `exec()`) y utilizar validación de listas blancas estrictas para las entradas.
* **Control Mitigador (Content Security Policy - CSP):** Configurar las cabeceras HTTP de seguridad CSP en los servidores de Aguas Claras. Esta política es el control más viable para bloquear la ejecución de scripts no autorizados (XSS) en los navegadores de nuestros clientes.
* **Control Mitigador (Sandboxing de Infraestructura):** Aplicando el principio de mínimo privilegio de NIST, el servidor web debe ser aislado en un contenedor (como Docker) y ejecutarse con un usuario sin permisos administrativos. Esto limita radicalmente el daño en caso de que una Inyección de Comandos logre atravesar las primeras capas de defensa.

</div>