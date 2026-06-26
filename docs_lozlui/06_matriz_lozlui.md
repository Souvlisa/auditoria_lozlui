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

A continuación, se representa visualmente la ubicación de cada vulnerabilidad en el mapa de calor de riesgos de la empresa.

</div>