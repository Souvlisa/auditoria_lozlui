import React, { useState } from 'react'
import './index.css'

import { Shield } from 'lucide-react'

import Resumen from './components/Resumen'
import Marco from './components/Marco'
import Delitos from './components/Delitos'
import Comparacion from './components/Comparacion'
import Responsabilidades from './components/Responsabilidades'
import Datos from './components/Datos'
import Conclusiones from './components/Conclusiones'
import Prompts from './components/Prompts'

function App() {
  const sections = [
    { key: 'resumen', label: 'Resumen del caso', component: Resumen },
    { key: 'marco', label: 'Marco normativo', component: Marco },
    { key: 'delitos', label: 'Tipificación de delitos', component: Delitos },
    { key: 'comparacion', label: 'Comparación regulatoria', component: Comparacion },
    { key: 'responsabilidades', label: 'Responsabilidades legales', component: Responsabilidades },
    { key: 'datos', label: 'Tratamiento de datos', component: Datos },
    { key: 'conclusiones', label: 'Conclusiones', component: Conclusiones },
    { key: 'prompts', label: 'Prompts', component: Prompts },
  ]

  const [active, setActive] = useState(sections[0].key)

  const ActiveComponent = sections.find(s => s.key === active)?.component || Resumen

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <header className="bg-slate-900 text-white py-6 px-6 shadow">
        <div className="max-w-4xl mx-auto flex items-center gap-4">
          <Shield size={36} className="text-red-400" />
          <div>
            <h1 className="text-2xl font-bold">Evaluación 2 - Unidad 2</h1>
            <p className="text-slate-300 mt-1">TI3034 - Fundamentos de Seguridad de la Información</p>
          </div>
        </div>

        <nav className="mt-4 border-t border-slate-800/30">
          <div className="max-w-4xl mx-auto flex gap-2 flex-wrap py-3">
            {sections.map(s => (
              <button
                key={s.key}
                onClick={() => setActive(s.key)}
                className={`text-sm px-3 py-2 rounded-md focus:outline-none transition ${active === s.key ? 'bg-white text-slate-900' : 'text-slate-200 hover:bg-slate-800/50'}`}>
                {s.label}
              </button>
            ))}
          </div>
        </nav>
      </header>

      <main className="flex-1 max-w-4xl mx-auto px-6 py-12 w-full">
        <div className="bg-white rounded-lg shadow p-8">
          <ActiveComponent />
        </div>
      </main>

      <footer className="bg-slate-100 text-slate-600 text-sm py-4 px-6">
        <div className="max-w-4xl mx-auto flex justify-between">
          <span>Desarrollado por: Luisangeli Lozada</span>
          <span>Docente: Rubén Schnettler L. - INACAP Valparaíso</span>
        </div>
      </footer>
    </div>
  )
}

export default App