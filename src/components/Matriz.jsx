import { Grid3X3 } from 'lucide-react'
import MarkdownRenderer from './MarkdownRenderer'
import md from '../../docs_lozlui/06_matriz_lozlui.md?raw'

const probabilities = [
  { value: 1, label: '1 (Rara vez)' },
  { value: 2, label: '2 (Improbable)' },
  { value: 3, label: '3 (Posible)' },
  { value: 4, label: '4 (Probable)' },
  { value: 5, label: '5 (Casi seguro)' },
]

const impacts = [
  { value: 5, label: '5 (Catastrófico)' },
  { value: 4, label: '4 (Mayor)' },
  { value: 3, label: '3 (Moderado)' },
  { value: 2, label: '2 (Menor)' },
  { value: 1, label: '1 (Insignificante)' },
]

function getCellClass(risk) {
  if (risk >= 16) return 'bg-red-600 text-white'
  if (risk >= 10) return 'bg-orange-500 text-white'
  if (risk >= 5) return 'bg-yellow-400 text-slate-900'
  return 'bg-emerald-400 text-slate-900'
}

export default function Matriz() {
  const cells = impacts.map((impactObj) =>
    probabilities.map((probObj) => {
      const risk = impactObj.value * probObj.value
      const label =
        probObj.value === 4 && impactObj.value === 5
          ? 'SQLi (20)'
          : probObj.value === 3 && impactObj.value === 5
            ? 'Comandos (15)'
            : probObj.value === 4 && impactObj.value === 3
              ? 'XSS (12)'
              : ''

      return { risk, label, probability: probObj.value, impact: impactObj.value }
    })
  )

  return (
    <section className="w-full animate-in">
      <div className="flex items-center gap-3 mb-6">
        <Grid3X3 className="w-8 h-8 text-cyan-400" />
        <h1 className="text-3xl font-bold text-slate-900">Matriz de Riesgos</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-shadow duration-300">
        {/* Render full markdown up to placeholder; since we can't partial-render markdown easily, render all markdown first */}
        <div className="prose max-w-none">
          <MarkdownRenderer content={md} />
        </div>

        {/* Insert heatmap at the end (point 2) */}
        <div className="mt-10 rounded-xl border border-slate-200 bg-slate-50 p-4 shadow-sm sm:p-6">
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-slate-900">Mapa de Calor de Riesgos</h2>
            <p className="text-sm text-slate-600">Riesgo = Probabilidad × Impacto</p>
          </div>

          <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-red-600" />
                <span className="text-sm text-slate-700">Crítico (16-25)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-orange-500" />
                <span className="text-sm text-slate-700">Alto (10-15)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-yellow-400" />
                <span className="text-sm text-slate-700">Medio (5-9)</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-emerald-400" />
                <span className="text-sm text-slate-700">Bajo (1-4)</span>
              </div>
            </div>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[520px] grid grid-cols-[140px_repeat(5,minmax(0,1fr))] gap-2 text-sm">
              <div className="rounded-lg bg-slate-200 p-2 text-left pl-4 font-semibold text-slate-700">
                Impacto ⬇ \ Probabilidad ➡
              </div>
              {probabilities.map((prob) => (
                <div key={prob.value} className="rounded-lg bg-slate-200 p-2 text-center font-semibold text-slate-700">
                  {prob.label}
                </div>
              ))}

              {cells.map((row, rowIndex) => (
                <div key={`row-${rowIndex}`} className="contents">
                  <div className="flex items-center justify-start rounded-lg bg-slate-100 p-2 pl-4 font-semibold text-slate-700">
                    <span className="font-semibold">{impacts[rowIndex].label}</span>
                  </div>
                  {row.map((cell) => (
                    <div
                      key={`${cell.impact}-${cell.probability}`}
                      className={`flex h-20 items-center justify-center rounded-xl border border-slate-200 p-2 text-center text-xs font-semibold shadow-sm transition-transform duration-200 hover:scale-105 ${getCellClass(cell.risk)}`}
                    >
                      {cell.label || ''}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <blockquote className="rounded-md border-l-4 border-slate-300 bg-slate-50 p-4 text-sm italic text-slate-700">
              <strong>Evaluación del Auditor:</strong> Las vulnerabilidades ubicadas en las celdas de riesgo Crítico y Alto (SQLi y Comandos) superan por completo el umbral de tolerancia al riesgo de Aguas Claras. Exigen remediación y bloqueo inmediato antes de que el portal pueda operar con normalidad.
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
