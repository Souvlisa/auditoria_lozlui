# Comparación de marcos regulatorios por industria


| Marco Regulatorio (Industria) | Sujeto Regulado | Alcance Principal | Sanciones Máximas | Aplicabilidad al Caso Yahoo |
| :--- | :--- | :--- | :--- | :--- |
| **Normativa SEC**<br>*(Mercado de Valores / Finanzas)* | Empresas de capital abierto (públicas) que cotizan en la bolsa de Estados Unidos. | Protección a inversores exigiendo la divulgación transparente y oportuna de riesgos e incidentes cibernéticos materiales. | Multas civiles millonarias dictadas por reguladores financieros. | **Sí aplica**. Yahoo recibió una multa de 35 millones de dólares por ocultar el hackeo masivo a sus inversores y a la compradora Verizon. |
| **Estándar PCI DSS**<br>*(Comercio Electrónico / Medios de Pago)* | Cualquier entidad u organización (global) que almacene, procese o transmita datos de tarjetas de crédito. | Protección del entorno de datos del titular de la tarjeta (CDE) contra accesos no autorizados e intrusiones. | Multas contractuales impuestas por las marcas de tarjetas (de 5.000 a 500.000 dólares mensuales) y revocación del permiso para operar pagos. | **No aplica directamente**. La información vulnerada correspondía a credenciales e información personal, y la compañía confirmó que no se filtraron datos de tarjetas de crédito. |
| **HIPAA - Regla de Seguridad**<br>*(Industria de la Salud)* | Proveedores de atención médica, planes de salud, aseguradoras y sus socios comerciales. | Proteger la confidencialidad, integridad y disponibilidad de la Información de Salud Protegida electrónica (ePHI). | Multas escalonadas que pueden superar los millones de dólares por negligencia grave no corregida, además de posibles cargos penales. | **No aplica**. Yahoo operaba como un proveedor de servicios de internet y correo electrónico general, no calificando como entidad cubierta bajo normativas médicas. |

<div style="text-align:justify;">

### Análisis Comparativo

El análisis de la tabla revela tres diferencias fundamentales en cómo operan estas regulaciones, utilizando el caso Yahoo como referencia:

**1. Criterio de Aplicabilidad: Tipo de Dato vs. Condición Corporativa**
*   **Por tipo de dato (PCI DSS y HIPAA):** Solo se activan si se vulneran datos específicos (tarjetas de crédito o historiales médicos). Como Yahoo filtró datos personales generales, estas normas no aplicaron.
*   **Por naturaleza corporativa (SEC):** Aplicó directamente porque Yahoo era una **empresa pública** que cotizaba en bolsa, activando su deber legal de informar incidentes críticos.

**2. Bien Jurídico Protegido (El Objetivo)**<br>
Cada normativa protege a un actor distinto:
*   **SEC:** Protege la **transparencia del mercado** y a los inversionistas.
*   **PCI DSS:** Protege el **ecosistema financiero** y previene el fraude transaccional.
*   **HIPAA:** Protege la **intimidad y dignidad** del paciente.

**3. Naturaleza de las Sanciones**
*   **Gubernamentales (SEC, HIPAA):** Leyes federales que imponen multas civiles millonarias o cargos penales.
*   **Privadas (PCI DSS):** Normativas de la industria cuyas sanciones son contractuales (multas de emisores de tarjetas o revocación de la capacidad de procesar pagos).
</div>