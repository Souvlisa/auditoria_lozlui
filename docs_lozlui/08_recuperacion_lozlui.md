# Mejoras Tecnológicas y Plan de Recuperación ante Desastres (DRP)

<div style="text-align:justify">

Para garantizar la continuidad operativa del servicio sanitario y proteger la información de los ciudadanos frente a eventos disruptivos (como la explotación exitosa de la Inyección de Comandos o el borrado de bases de datos por SQLi), se propone la siguiente estrategia tecnológica y operativa, alineada a los estándares **NIST SP 800-34** e **ISO 22301**.

---

## 1. Mejoras Tecnológicas (Arquitectura de Seguridad)

El portal actual carece de barreras estructurales. Se proponen las siguientes mejoras tecnológicas definitivas:

* **Segmentación de Red (Zonas de Confianza):** Se debe rediseñar la topología de red. El servidor del Portal de Clientes debe ubicarse en una Zona Desmilitarizada (DMZ) aislada. La base de datos de facturación debe estar en una red interna separada, y bajo ninguna circunstancia el servidor web debe tener visibilidad o enrutamiento hacia las redes OT/SCADA (Sistemas de Control Industrial de plantas de agua), evitando así el pivoteo detectado en la vulnerabilidad de Inyección de Comandos.
* **Implementación de WAF de Próxima Generación (NG-WAF):** Desplegar un Web Application Firewall en la nube (ej. Cloudflare o AWS WAF) frente al portal. Esto no solo bloquea intentos de SQLi o XSS en tiempo real mediante análisis de anomalías, sino que absorbe ataques de Denegación de Servicio (DDoS), garantizando que el portal de pagos siga disponible.

---

## 2. Plan de Recuperación ante Desastres (DRP)

En caso de que un incidente crítico comprometa la integridad o disponibilidad del portal, Aguas Claras ejecutará el siguiente plan de respuesta:

### A. Estrategia de Respaldo (Backup)
* **Regla 3-2-1:** Mantener al menos 3 copias de la base de datos de clientes y del código del portal, en 2 formatos de almacenamiento distintos, con 1 copia inmutable alojada fuera de las instalaciones principales (Off-site/Cloud).
* **Frecuencia:** Copias incrementales cada hora para transacciones de pago, y respaldos completos (Full Backup) diarios a las 03:00 AM (horario de menor tráfico sanitario).

### B. Proceso de Restauración (RTO y RPO)
* **Recovery Point Objective (RPO):** Definido en **1 hora**. En el peor escenario de corrupción de base de datos por inyección SQL, Aguas Claras no perderá más de una hora de registros de transacciones de pago de clientes.
* **Recovery Time Objective (RTO):** Definido en **4 horas**. El equipo de infraestructura tiene un máximo de cuatro horas para levantar un servidor web secundario, restaurar el respaldo inmutable y redirigir el tráfico DNS para que el portal vuelva a estar en línea.

### C. Protocolo de Notificación de Incidentes
Alineado con las normativas legales y reguladoras de servicios básicos, la comunicación en caso de brecha de datos (Data Breach) seguirá este flujo:
1. **Autoridades (Dentro de 24 horas):** Notificación técnica al CSIRT Gubernamental y notificación regulatoria a la Superintendencia de Servicios Sanitarios (SISS) sobre el impacto en el sistema.
2. **Clientes Afectados (Dentro de 72 horas):** Comunicación transparente vía correo electrónico a los usuarios cuyos datos personales o de consumo pudieran haber sido expuestos (debido al SQLi), incluyendo instrucciones para el restablecimiento obligatorio de contraseñas de su sucursal virtual.

</div>