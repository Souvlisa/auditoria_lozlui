import React from 'react'
import { FileText } from 'lucide-react'
import MarkdownRenderer from './MarkdownRenderer'
import md from '../../docs_lozlui/03_delitos_lozlui.md?raw'

export default function Delitos() {
  return (
    <section className="max-w-3xl mx-auto p-6">
      <header className="flex items-center gap-3 mb-4">
        <FileText className="w-6 h-6 text-indigo-600" />
        <h1 className="text-2xl font-bold">Tipificación de delitos</h1>
      </header>
      <MarkdownRenderer content={md} />
    </section>
  )
}
