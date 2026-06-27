import { Shield } from 'lucide-react'
import { useState } from 'react'
import Resumen from './components/Resumen'
import SQLi from './components/SQLi'
import XSS from './components/XSS'
import Comandos from './components/Comandos'
import Activos from './components/Activos'
import Matriz from './components/Matriz'
import Controles from './components/Controles'
import Recuperacion from './components/Recuperacion'
import Prompts from './components/Prompts'

function App() {
  const sections = [
    { key: 'resumen', label: 'Resumen', component: Resumen },
    { key: 'sqli', label: 'Inyección SQL', component: SQLi },
    { key: 'xss', label: 'XSS (Reflected)', component: XSS },
    { key: 'comandos', label: 'Inyección de Comandos', component: Comandos },
    { key: 'activos', label: 'Activos', component: Activos },
    { key: 'matriz', label: 'Matriz de Riesgos', component: Matriz },
    { key: 'controles', label: 'Controles', component: Controles },
    { key: 'recuperacion', label: 'Recuperación', component: Recuperacion },
    { key: 'prompts', label: 'Prompts', component: Prompts },
  ]

  const [active, setActive] = useState(sections[0].key)
  const [contactHover, setContactHover] = useState(false)
  const [isTop, setIsTop] = useState(true)
  const mainRef = useRef(null)

  useEffect(() => {
    const onScroll = () => setIsTop(window.scrollY < 56)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!mainRef.current) return
    const header = document.querySelector('header')
    const headerHeight = header ? header.offsetHeight : 0
    const top = mainRef.current.getBoundingClientRect().top + window.scrollY - headerHeight - 8
    window.scrollTo({ top, behavior: 'smooth' })
  }, [active])


  const ActiveComponent = sections.find(s => s.key === active)?.component || Resumen

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-6 px-6 shadow-lg">
        <div className={`${isTop ? 'max-w-4xl mx-auto flex items-center gap-4' : 'max-w-4xl mx-auto hidden'}`}>
          <Shield size={36} className="text-red-400" />
          <div>
            <h1 className="text-3xl font-bold">
              Auditoría de Seguridad - Unidad 3
            </h1>
            <p className="text-slate-300 mt-1">
              TI3034 - Fundamentos de Seguridad de la Información
            </p>
          </div>
        </div>

        {/* Navbar */}
        <nav className={`mt-1 border-t border-slate-800/30 transition-all duration-200`}>
          <div className="max-w-4xl mx-auto flex gap-2 flex-wrap py-2">
            {sections.map(s => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`text-sm px-3 py-1 rounded-md focus:outline-none transition ${active === s.key ? 'bg-white text-slate-900' : 'text-slate-200 hover:bg-slate-800/50'}`}>
                {s.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-5xl mx-auto px-6 py-12 w-full">
        <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8">
          <ActiveComponent />
        </div>
      </main>

      <footer className="bg-slate-100 text-slate-600 text-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center sm:items-center justify-between gap-2">
          <div className="text-center sm:text-left">
            <div>Desarrollado por: Luisangeli Lozada</div>
            <div className="text-xs text-slate-500">Docente: Rubén Schnettler L. - INACAP Valparaíso</div>
            <div className="text-xs text-slate-500">© {new Date().getFullYear()} Todos los derechos reservados.</div>
          </div>

          <div>
            <a
              href="https://github.com/Souvlisa"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contacto en GitHub"
              onMouseEnter={() => setContactHover(true)}
              onMouseLeave={() => setContactHover(false)}
              className={`inline-flex items-center gap-2 bg-slate-900 text-white text-sm px-3 py-1.5 rounded-md transition-transform shadow-sm ${contactHover ? 'scale-105 -translate-y-0.5 -rotate-2 shadow-lg' : 'hover:scale-105 hover:-translate-y-0.5'}`}>
              <svg className={`w-5 h-5 transition-colors ${contactHover ? 'text-white/90' : 'text-white/80'}`} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.757-1.333-1.757-1.089-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.305.762-1.605-2.665-.305-5.467-1.332-5.467-5.93 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.61-2.807 5.622-5.479 5.92.43.372.823 1.102.823 2.222 0 1.604-.014 2.896-.014 3.287 0 .319.216.694.825.576C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
              </svg>
              <span className="hidden sm:inline">Contacto</span>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
