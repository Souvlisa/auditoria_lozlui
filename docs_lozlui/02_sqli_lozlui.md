# Análisis de Vulnerabilidad: Inyección SQL (SQLi)

![SQLi](img_rodcam/sqli_rodcam.png)
<div style="text-align:justify">

**Contexto:** Reporte de seguridad para el proyecto de evaluación.<br>
**Vulnerabilidad:** SQL Injection (Inyección SQL) basada en error/booleana.

---

## 1. Evidencia de la Vulnerabilidad
En la captura de pantalla de la prueba de concepto (PoC), se observa que la aplicación web es vulnerable a una Inyección SQL en el parámetro `id` mediante una petición GET.

* **Carga útil (Payload) utilizada:** `' OR '1'='1`
* **Resultado:** La aplicación devuelve el listado completo de los usuarios de la base de datos (incluyendo a admin, Gordon Brown, Hack Me, Pablo Picasso y Bob Smith), eludiendo el control de acceso esperado que debería mostrar un solo registro según un ID específico.

## 2. Por qué funciona la vulnerabilidad (Explicación técnica)
La vulnerabilidad ocurre porque la aplicación web toma los datos de entrada del usuario y los concatena directamente en la consulta SQL que se envía a la base de datos, sin realizar ninguna sanitización, validación, ni parametrización previa.

Asumiendo que la consulta original en el código fuente es similar a esto:
`SELECT first_name, last_name FROM users WHERE user_id = '$id';`

Al introducir el payload `' OR '1'='1`, la consulta que finalmente interpreta y ejecuta el motor de base de datos se transforma en:
`SELECT first_name, last_name FROM users WHERE user_id = '' OR '1'='1';`

**Mecanismo de fallo paso a paso:**
* La primera comilla simple introducida por el atacante cierra prematuramente el campo de la cadena de texto original.
* El operador lógico OR añade una nueva condición a la cláusula WHERE.
* La condición `'1'='1'` es una tautología matemática (siempre es verdadera).
* Como resultado, la cláusula WHERE se evalúa como verdadera para cada registro de la tabla, forzando a la base de datos a ignorar el filtrado por ID y volcar toda la información confidencial a la interfaz.

## 3. Puntaje y severidad CVSS
Las vulnerabilidades de Inyección SQL representan uno de los riesgos más altos en seguridad de aplicaciones, ya que permiten a un atacante leer, modificar o eliminar datos de manera no autorizada.

**Vector CVSS v3.1:** `CVSS:3.1/AV:N/AC:L/PR:N/UI:N/S:U/C:H/I:H/A:H`
* **Attack Vector (AV):** Network (N) - Explotable a través de internet o la red.
* **Attack Complexity (AC):** Low (L) - Muy fácil de explotar; la carga útil es trivial y existen herramientas automatizadas.
* **Privileges Required (PR):** None (N) - Asumiendo que el campo es público, no requiere autenticación previa.
* **User Interaction (UI):** None (N) - No requiere interacción de un usuario víctima.
* **Scope (S):** Unchanged (U).
* **Confidentiality (C):** High (H) - El atacante tiene acceso total a los datos.
* **Integrity (I):** High (H) - Capacidad potencial de modificar datos.
* **Availability (A):** High (H) - Capacidad potencial de borrar tablas o causar denegación de servicio en la base de datos.

**Puntuación Base CVSS:** 9.8
**Nivel de Severidad:** CRÍTICA (Critical)

---

## 4. Política de prevención (3.1.4) y control de mitigación (3.1.5)

### 3.1.4 Política de Prevención (A nivel de desarrollo)
Para evitar la introducción de vulnerabilidades de Inyección SQL en el código de la organización en el futuro, se deben adoptar las siguientes políticas de codificación segura:
* **Uso obligatorio de Consultas Parametrizadas (Prepared Statements):** Todas las interacciones con la base de datos deben utilizar parámetros anclados o frameworks de Mapeo Objeto-Relacional (ORM). Esto asegura que la base de datos trate la entrada del usuario estrictamente como datos y nunca como código ejecutable.
* **Validación de entrada estricta (Allow-listing):** Todo dato recibido por el cliente debe ser validado. La aplicación debe verificar y forzar que la variable sea del tipo esperado antes de interactuar con la base de datos.

### 3.1.5 Control de Mitigación (A nivel de infraestructura y defensa en profundidad)
Para proteger los sistemas en tiempo de ejecución y limitar el impacto en caso de que una vulnerabilidad pase a producción:
* **Implementación de Web Application Firewall (WAF):** Desplegar y mantener actualizado un WAF configurado para inspeccionar el tráfico HTTP y bloquear patrones y firmas comunes de inyección SQL.
* **Principio de Mínimo Privilegio (PoLP) en la Base de Datos:** La cuenta técnica que utiliza la aplicación web para conectarse a la base de datos debe tener privilegios sumamente restringidos. Solo debe contar con permisos para realizar las acciones estrictamente necesarias y debe tener explícitamente denegados los permisos administrativos.

</div>