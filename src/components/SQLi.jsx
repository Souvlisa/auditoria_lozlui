import { Database } from 'lucide-react'
import MarkdownRenderer from './MarkdownRenderer'
import md from '../../docs_lozlui/02_sqli_lozlui.md?raw'

export default function SQLi() {
  return (
    <section className="w-full animate-in">
      <div className="flex items-center gap-3 mb-6">
        <Database className="w-8 h-8 text-red-400" />
        <h1 className="text-3xl font-bold text-slate-900">SQL Injection</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-shadow duration-300">
        <MarkdownRenderer content={md} />
      </div>
    </section>
  )
}
