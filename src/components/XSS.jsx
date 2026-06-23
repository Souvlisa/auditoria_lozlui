import { AlertTriangle } from 'lucide-react'
import MarkdownRenderer from './MarkdownRenderer'
import md from '../../docs_lozlui/03_xss_lozlui.md?raw'
import xss_img from '../../docs_lozlui/img_lozlui/xss_lozlui.png'


export default function XSS() {
  const contentWithImage = md.replace('img_lozlui/xss_lozlui.png', xss_img);
  return (
    <section className="w-full animate-in">
      <div className="flex items-center gap-3 mb-6">
        <AlertTriangle className="w-8 h-8 text-orange-400" />
        <h1 className="text-3xl font-bold text-slate-900">Cross-Site Scripting (XSS)</h1>
      </div>

      <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 hover:shadow-xl transition-shadow duration-300 [&_img]:rounded-lg [&_img]:shadow-md [&_img]:border [&_img]:border-slate-200 [&_img]:w-full [&_img]:max-w-2xl [&_img]:mx-auto [&_img]:my-6">
        <MarkdownRenderer content={contentWithImage} />
      </div>
    </section>
  )
}