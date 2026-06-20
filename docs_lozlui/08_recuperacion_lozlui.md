# Bitácora de Prompts Utilizados

<div style="text-align:justify;">

A continuación se detalla la lista de prompts utilizados a lo largo del proyecto, junto con el contexto de su uso y las modificaciones realizadas sobre las respuestas generadas por la IA:

*   **Prompt:** *"Dame ejemplos de casos reales en todo el mundo sobre ciberseguridad: incidentes nacionales o internacionales (por ejemplo, brechas de datos, ransomware a empresas, fraudes informáticos, filtraciones masivas). Además añade un link para buscar la información, debe ser una fuente confiable"*
    *   **Contexto de uso:** Este prompt se utilizó en Gemini al principio del proyecto para elegir el caso a analizar. La IA proporcionó 4 casos distintos donde el caso de Yahoo fue el seleccionado.

---

*   **Prompt:** *"Extrae la información de este link: https://www.nytimes.com/2017/10/03/technology/yahoo-hack-3-billion-users.html y haz un resumen ejecutivo del caso explicando: que pasó, cuando pasó, quienes participaron y cual fue el impacto que tuvo, genera la información en formato markdown"*
    *   **Contexto de uso:** Este prompt fue utilizado en Gemini para realizar el primer resumen del caso. En relación a la respuesta de la IA, se realizaron cambios en algunos títulos y se acortó la información para que la información fuera más concisa.

---

*   **Prompt:** *"Dame más información sobre este caso y dame los links para leer la información"*
    *   **Contexto de uso:** Este prompt fue utilizado en Gemini para investigar el caso más a profundidad.

---

*   **Prompt:** *"En relación con el caso, analiza 4 marcos normativos que apliquen, explica por que y además justifica con referencia textual a un hecho concreto del caso con la información proporcionada, la información debe ser sacada de fuentes confiables y reales con link incluido"*
    *   **Contexto de uso:** Este prompt fue utilizado en Gemini para completar la información sobre los marcos normativos y en complemento se utilizó otro prompt *"¿El marco GDPR aplica en este caso?"*. De acuerdo a la respuesta de la IA se cambiaron algunas palabras y se acortaron textos ya que la respuesta no correspondía tanto a lo pedido. Por lo demás se aceptó la respuesta debido al desconocimiento de las leyes internacionales.

---

*   **Prompt:** *"Se sabe si la información filtrada fue revelada públicamente o se hizo algún uso ilegal de esta información o de que manera fue extraída, dame los links de donde saques la información"*
    *   **Contexto de uso:** Este prompt fue utilizado en Gemini para investigar a profundidad y analizar el caso para determinar los delitos que cometieron los ciberdelincuentes, en base a fuentes confiables.

---

*   **Prompt:** *"Que articulos aplican a este caso de la ley 21459 de delitos informaticos en chile y mapea cada acción del atacante del atacante al articulo correspondiente. Algunos articulos que relacioné fueron el 2 y el 7."*
    *   **Contexto de uso:** Este prompt fue utilizado en Gemini para mapear las acciones de los ciberdelincuentes en la sección de delitos, en base a una suposición con la información obtenida, además se le proporcionó a la IA algunos artículos analizados manualmente de acuerdo a la documentación académica. A la respuesta proporcionada por la IA se eliminaron algunos párrafos que no correspondían a lo pedido, además la información se modificó para que correspondiera con el informe.

---

*   **Prompt:** *"Haz una tabla comparativa en formato markdown con 3 marcos regulatorios por industria y 3 ejes (p. ej. alcance, sanción, sujeto regulado, jurisdicción). Incluye columna explícita de aplicabilidad al caso."*
    *   **Contexto de uso:** Este prompt fue utilizado en Gemini para generar el cuadro comparativo en relación a la información y se aceptó todo lo proporcionado.

---

*   **Prompt:** *"Identifica 3 actores (p. ej. atacante, empresa, ejecutivos, terceros) y, para cada uno, distingue 2 tipos de responsabilidad (penal, civil o administrativa). Cita artículo o norma para cada atribución."*
    *   **Contexto de uso:** Este prompt fue utilizado en Gemini para la sección de responsabilidades. Se aceptó la respuesta y fueron cambiadas algunas palabras.

---

*   **Prompt:** *"Según los datos comprometidos en el caso, distingue datos personales de datos sensibles. Analiza 3 derechos ARCO afectados (de los 4: Acceso, Rectificación, Cancelación, Oposición) con cita textual de la Ley 19.628."*
    *   **Contexto de uso:** Este prompt fue utilizado en Gemini para la sección de datos. Se modificaron algunas partes de la respuesta para que corresponda con el informe y se estructuró la información de forma concisa.

---

*   **Prompt:** *"Para concluir, dame algunas recomendaciones de seguridad"*
    *   **Contexto de uso:** Este prompt fue utilizado en Gemini para agregar recomendaciones de seguridad en la conclusión para complementar. Solo se modificaron algunos párrafos.

---

*   **Prompt:** *"Modifica el archivo App.jsx con la información de la carpeta docs_lozlui para hacer una página web con react vite tipo informe para los visuales utiliza tailwind"*
    *   **Contexto de uso:** Este prompt se utilizó en el chat GitHub Copilot integrado en VS Code para modificar la aplicación con mejores visuales utilizando Tailwind CSS. De la respuesta se aceptó todo debido a los pocos conocimientos previos sobre Tailwind CSS y React.

---

*   **Prompt:** *"Crea un componente react con jsx para cada archivo .md en la carpeta docs_lozlui llamados de la siguiente forma: Resumen.jsx, Marco.jsx, Delitos.jsx, Comparacion.jsx, Responsabilidades.jsx, Datos.jsx, Conclusiones.jsx, Prompts.jsx. Guarda los archivos jsx en una carpeta llamada components en src. Importa los archivos en src/App.jsx para que se puedan visualizar en la página. Usa tailwind css para los estilos y un icono de lucide react para el titulo"*
    *   **Contexto de uso:** Este prompt fue utilizado en el chat GitHub Copilot integrado en VS Code para crear los componentes React de cada archivo Markdown en la aplicación. Se aceptó todo de la respuesta generada.

---

*   **Prompt:** *"La aplicación debe leer los archivos .md, deben ser importados correctamente y el contenido debe estar estilizado"*
    *   **Contexto de uso:** Este prompt fue utilizado en el chat GitHub Copilot integrado en VS Code para que los archivos `.md` fueran leídos correctamente, ya que no se mostraban bien en la página web. Se aceptó todo de la respuesta.

---

*   **Prompt:** *"En src/components/MarkdownRenderer.jsx aparece el error [plugin:vite:import-analysis] Failed to resolve import "remark-gfm" from "src/components/MarkdownRenderer.jsx". Does the file exist?. Revisa el archivo y corrige manteniendo la estructura y los estilos Tailwind actuales"*
    *   **Contexto de uso:** Este prompt fue utilizado en el chat GitHub Copilot integrado en VS Code debido a que la página dio un error de importación. Se le pidió a la IA que revisara y corrigiera el archivo. Se aceptó todo de la respuesta.

---

*   **Prompt:** *"Quiero que al correr la página se visualicen los saltos de linea correctamente luego de los titulos y que el texto no se vea tan pegado sin usar tanto <br> para hacer los saltos"*
    *   **Contexto de uso:** Este prompt fue utilizado en el chat GitHub Copilot integrado en VS Code ya que el contenido textual no tenía un interlineado adecuado y todo se veía muy junto, dificultando la lectura. Se aceptó todo de la respuesta.

</div>