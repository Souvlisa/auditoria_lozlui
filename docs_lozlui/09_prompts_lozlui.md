# Bitácora de Uso de Inteligencia Artificial

<div style="text-align:justify">

> **Nota:** El desarrollo de esta evaluación de la Unidad 3 es en base a la evaluación de la Unidad 2 en cuanto a estilo de página web, la información presentada corresponde a la rúbrica. Durante el proceso de desarrollo se realizaron diversas consultas a la IA de Copilot implementada en VS Code pero éstas se perdieron debido a una actualización de la aplicación, por ende, se documentarán los prompts más esenciales.

---

## Herramienta 1: GitHub Copilot (Construcción de Componentes React)

**Propósito:** Generación de la interfaz visual del mapa de calor y aplicación de estilos con Tailwind CSS.

### Prompt 1: Creación del Mapa de Calor
**Prompt utilizado:**
> "Actúa como un desarrollador frontend experto en React y Tailwind CSS. Tengo un archivo llamado `Matriz.jsx` donde quiero mostrar un Mapa de Calor de Riesgos (Heatmap) corporativo para una auditoría de seguridad. Por favor, constrúyeme un componente visual (una cuadrícula 5x5) usando CSS Grid y Tailwind CSS, con las siguientes características:
> 1. Estructura: El eje Y debe ser 'Impacto' (del 5 al 1, de arriba hacia abajo) y el eje X debe ser 'Probabilidad' (del 1 al 5, de izquierda a derecha). Incluye las etiquetas de los ejes.
> 2. Estilo Visual: Cada celda de la cuadrícula debe tener bordes redondeados (`rounded-lg`), una sombra sutil, y una transición de escala al pasar el mouse (`hover:scale-105 transition-transform`).
> 3. Colores según Nivel de Riesgo (Fondo de las celdas): Riesgo Crítico (16-25): Rojo oscuro (`bg-red-500`). Riesgo Alto (10-15): Naranja (`bg-orange-500`). Riesgo Medio (5-9): Amarillo (`bg-yellow-400`). Riesgo Bajo (1-4): Verde (`bg-emerald-400`).
> 4. Mis Datos: Inserta el nombre de mis vulnerabilidades en las posiciones exactas: Celda (Probabilidad 4, Impacto 5): 'SQLi (20)'. Celda (Probabilidad 3, Impacto 5): 'Comandos (15)'. Celda (Probabilidad 4, Impacto 3): 'XSS (12)'.
> 5. Diseño Responsivo: Asegúrate de que encaje bien dentro de un contenedor blanco con `shadow-lg` y `rounded-xl`."

* **Qué acepté:** Acepté la estructura base del CSS Grid generada por Copilot y la paleta de colores sugerida con Tailwind.
* **Qué corregí:** Ajusté algunos textos que no fueron implementados para que el mapa de calor se entendiera mejor.

### Prompt 2: Inserción de Evaluación
**Prompt utilizado:**
> "pon esto debajo del mapa de calor: > **Evaluación del Auditor:** Las vulnerabilidades ubicadas en las celdas de riesgo Crítico y Alto (SQLi y Comandos) superan por completo el umbral de tolerancia al riesgo de Aguas Claras. Exigen remediación y bloqueo inmediato antes de que el portal pueda operar con normalidad."

* **Qué acepté:** Toda la corrección realizada por la IA
* **Qué corregí:** Al carecer de conocimientos en está área no realicé correcciones.

---

## Herramienta 2: Gemini (Análisis Técnico y Redacción Markdown)

**Propósito:** Estructuración de los informes de vulnerabilidades, cálculo de métricas CVSS y resolución de problemas de renderizado de Markdown en Vite/React.

### Prompt 1: Análisis de Vulnerabilidades con Contexto de Negocio
**Prompt utilizado:**
> "De esta imagen adjunta (captura de DVWA) quiero que realices un análisis tipo auditoria con estos puntos de acuerdo a la empresa ficticia que se me asigno (Aguas Claras, rubro sanitaria) en formato .md para mi proyecto, debe ser explicado como si fuera para la empresa, como tipo presentación también: (2) Por qué funciona la vulnerabilidad (explicación técnica). (3) Puntaje y severidad CVSS. (4) Política de prevención y control de mitigación." *(Este prompt se adaptó e iteró para SQLi, XSS y Command Injection)*.

* **Qué acepté:** Acepté las métricas base del CVSS calculadas y las recomendaciones técnicas de mitigación (WAF, Consultas parametrizadas).
* **Qué corregí:** Revisé manualmente las métricas y realicé un análisis propio para que la respuesta correspondiera a lo requerido.

### Prompt 2: Corrección de Renderizado de Imágenes Markdown en React
**Prompt utilizado:**
> "como hago para que la imagen quede debajo de donde dice '1. Evidencia de la explotación', estos son mis codigos (xss.jsx y xss.md)... y como le agrego el efecto de bordes redondeados igual que la imagen anterior."

* **Qué acepté:** La respuesta completa realizada por la IA.
* **Qué corregí:** No realicé ninguna corrección ya que carezco de conocimientos en esta área, además la IA cumplió con el requisito.

---

## Reflexión Final sobre la Utilidad de la Herramienta 

El uso de Inteligencia Artificial (Copilot y Gemini) para el desarrollo de esta auditoría fue escencial, ya que, algunas partes del proyecto estaban fuera de mi área de conocimiento y se necesitaba búsquedas precisas, por supuesto, con el contexto específico que esta requiere (prompts) para entregar la información adecuada. Si bien la IA es muy funcional, es necesario entender que debe usarse de forma adecuada para evitar depender de esta, en mi caso, dado que el formato de este proyecto me es desconocido, pude modificar algunas cosas manualmente sin requerir del uso de la IA. 

</div>