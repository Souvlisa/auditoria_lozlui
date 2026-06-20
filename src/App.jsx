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
  ]

  const [active, setActive] = useState(sections[0].key)

  const ActiveComponent = sections.find(s => s.key === active)?.component || Resumen

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex flex-col">
      <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-6 px-6 shadow-lg">
        <div className="max-w-5xl mx-auto flex items-center gap-4">
          <Shield size={40} className="text-red-400" />
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
        <nav className="mt-4 border-t border-slate-700/50">
          <div className="max-w-5xl mx-auto flex gap-2 flex-wrap py-3">
            {sections.map(s => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`text-sm px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                  active === s.key
                    ? 'bg-white text-slate-900 shadow-lg'
                    : 'text-slate-200 hover:bg-slate-700/50'
                }`}
              >
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

      <footer className="bg-gradient-to-r from-slate-100 to-slate-200 text-slate-600 text-sm py-6 px-6 border-t border-slate-300">
        <div className="max-w-5xl mx-auto flex justify-between">
          <span>Estudiante: Luisangeli Lozada</span>
          <span>Docente: Rubén Schnettler - INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App
