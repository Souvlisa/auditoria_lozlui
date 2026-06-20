import { Grid3X3 } from 'lucide-react'
import MarkdownRenderer from './MarkdownRenderer'
import md from '../../docs_lozlui/06_matriz_lozlui.md?raw'

export default function Matriz() {
  return (
    <section className="w-full animate-in">
      <div className="flex items-center gap-3 mb-6">
        <Grid3X3 className="w-8 h-8 text-cyan-400" />
        <h1 className="text-3xl font-bold text-slate-900">Matriz de Riesgos</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-shadow duration-300">
        <MarkdownRenderer content={md} />
      </div>
    </section>
  )
}
