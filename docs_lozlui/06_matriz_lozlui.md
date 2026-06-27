# Matriz de Riesgo y Mapa de Calor

<div style="text-align:justify">

## 1. Evaluación de Probabilidad e Impacto
Para la construcción de esta matriz, evaluaremos las tres vulnerabilidades técnicas en función de su **Probabilidad de ocurrencia** (escala del 1 al 5) y su **Impacto en el negocio sanitario** (escala del 1 al 5). 

El Nivel de Riesgo (R) se calcula mediante la fórmula: **Riesgo = Probabilidad × Impacto**.

| Vulnerabilidad | Prob. (P) | Impacto (I) | Riesgo (R) | Nivel | Justificación del Riesgo para Aguas Claras |
| :--- | :---: | :---: | :---: | :--- | :--- |
| **Inyección SQL (SQLi)** | 4 | 5 | **20** | **CRÍTICO** | Alta probabilidad por falta de validación en búsquedas. Impacto catastrófico al permitir el robo y alteración de los datos de consumo de agua y facturación de toda la comuna. |
| **Inyección de Comandos** | 3 | 5 | **15** | **ALTO** | Probabilidad media (requiere inyectar en parámetros específicos). Impacto catastrófico al permitir tomar control del servidor, paralizando el portal de pago de la sanitaria. |
| **XSS (Reflejado)** | 4 | 3 | **12** | **MEDIO** | Alta probabilidad si se usa ingeniería social (Ej. Falso "Aviso de corte de agua"). Impacto moderado ya que compromete navegadores de clientes individuales, no la infraestructura central. |

---

## 2. Mapa de Calor (Heatmap) corporativo

# Explicación del Mapa de Calor de Riesgos

El mapa de calor funciona como un **semáforo de urgencias** para la empresa.

Para armar este "semáforo", tomamos cada falla que encontramos y le hacemos dos preguntas muy sencillas:
1. **Probabilidad (Eje Horizontal):** ¿Qué tan fácil es que un atacante descubra y explote este error? (Lo medimos del 1 al 5).
2. **Impacto (Eje Vertical):** Si el atacante lo logra, ¿qué tan fuerte nos va a doler? ¿Perdemos dinero, se filtran datos de los clientes o se nos cae el portal de pagos? (También del 1 al 5).

Multiplicamos esos dos números, y el resultado nos lanza la vulnerabilidad en una zona de color que nos dice el orden exacto en el que debemos trabajar:

* **Zona Roja (Nivel Crítico):** Aquí es donde "la casa está en llamas". En nuestra auditoría, la **Inyección SQL** cayó directo aquí. ¿Por qué? Porque cualquiera con conocimientos básicos podría robarse la base de datos completa de consumo y facturación. **La instrucción aquí es clara:** Dejen todo lo que están haciendo y solucionen esto hoy mismo.
* **Zona Naranja (Nivel Alto):** Peligro inminente. Aquí ubicamos la **Inyección de Comandos**. Quizás requiere un poco más de técnica que la SQLi, pero si el atacante lo logra, se adueña del servidor de la sanitaria. **La instrucción:** Esta es la prioridad número dos; se repara apenas apaguemos el incendio de la zona roja.
* **Zona Amarilla (Nivel Medio):** Los "dolores de cabeza". Aquí pusimos el **XSS**. Es peligroso porque los estafadores pueden usar nuestro portal para engañar a usuarios individuales, pero la buena noticia es que no comprometen nuestros servidores centrales. **La instrucción:** Se agenda para resolver en las próximas semanas. No nos quita el sueño hoy, pero no podemos ignorarlo.
* **Zona Verde (Nivel Bajo):** Son detalles menores de configuración. En este reporte no encontramos ninguno, pero son esos "cachitos" que arreglamos cuando el equipo tiene tiempo libre.

> **En resumen:** El mapa de calor nos sirve para ser los traductores entre la tecnología y el negocio. Con esta tabla, se puede identificar exactamente dónde se debe invertir su presupuesto y el tiempo de los desarrolladores para protegerse de lo que realmente los puede llevar a la quiebra.

</div>