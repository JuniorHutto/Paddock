import { useState } from 'react'
import AnimalForm, { type FormState } from './components/AnimalForm'
import ResultsPanel from './components/ResultsPanel'
import { DMI_DEFAULTS } from './lib/calculations'
import './App.css'

const INITIAL_STATE: FormState = {
  species: 'beef',
  weightLbs: '',
  headCount: '',
  dmiPct: (DMI_DEFAULTS.beef * 100).toFixed(2),
  availableForageLbPerAc: '',
  daysOnPaddock: '',
  restPeriodDays: '',
  utilizationPct: '65',
}

export default function App() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE)

  return (
    <div className="app">
      <header className="app-header">
        <h1>Paddock Manager</h1>
        <p>Rotational grazing calculator — determine paddock sizes and movement frequencies.</p>
      </header>

      <main className="app-main">
        <AnimalForm values={form} onChange={setForm} />
        <ResultsPanel values={form} />
      </main>

      <footer className="app-footer">
        <p>
          Formulas based on Management-intensive Grazing (MiG) principles.
          Always calibrate forage estimates to your specific pasture conditions.
        </p>
      </footer>
    </div>
  )
}
