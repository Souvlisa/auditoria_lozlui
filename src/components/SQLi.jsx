import { Database } from 'lucide-react'
import MarkdownRenderer from './MarkdownRenderer'
import md from '../../docs_lozlui/02_sqli_lozlui.md?raw'
import sqliImage from '../../docs_lozlui/img_lozlui/sqli_lozlui.png'

export default function SQLi() {
  return (
    <section className="w-full animate-in">
      <div className="flex items-center gap-3 mb-6">
        <Database className="w-8 h-8 text-red-400" />
        <h1 className="text-3xl font-bold text-slate-900">SQL Injection</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-shadow duration-300">
        <div className="mb-6">
          <img 
            src={sqliImage} 
            alt="SQL Injection - Prueba de Concepto" 
            className="w-full max-w-2xl mx-auto rounded-lg shadow-md border border-slate-200"
          />
        </div>
        <MarkdownRenderer content={md} />
      </div>
    </section>
  )
}
