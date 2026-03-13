import {
  calcNumberOfPaddocks,
  calcPaddockSize,
} from '../lib/calculations'
import type { FormState } from './AnimalForm'

interface Props {
  values: FormState
}

function parse(v: string): number | null {
  const n = parseFloat(v)
  return isFinite(n) && n > 0 ? n : null
}

function fmt(n: number | null, decimals = 2): string {
  if (n === null || !isFinite(n)) return '—'
  return n.toLocaleString('en-US', { maximumFractionDigits: decimals })
}

interface ResultCardProps {
  label: string
  value: string
  unit: string
  formula: string
}

function ResultCard({ label, value, unit, formula }: ResultCardProps) {
  return (
    <div className={`result-card ${value === '—' ? 'result-card--empty' : 'result-card--filled'}`}>
      <div className="result-label">{label}</div>
      <div className="result-value">
        {value}
        {value !== '—' && <span className="result-unit">{unit}</span>}
      </div>
      <details className="result-formula">
        <summary>Formula</summary>
        <code>{formula}</code>
      </details>
    </div>
  )
}

export default function ResultsPanel({ values }: Props) {
  const head = parse(values.headCount)
  const weight = parse(values.weightLbs)
  const dmi = parse(values.dmiPct)
  const dmiDecimal = dmi !== null ? dmi / 100 : null
  const availForage = parse(values.availableForageLbPerAc)
  const daysOnPaddock = parse(values.daysOnPaddock)
  const restDays = parse(values.restPeriodDays)
  const utilPct = parse(values.utilizationPct)
  const utilDecimal = utilPct !== null ? utilPct / 100 : null

  // Paddock size
  const paddockAcres =
    head && weight && dmiDecimal && daysOnPaddock && availForage && utilDecimal
      ? calcPaddockSize(head, weight, dmiDecimal, daysOnPaddock, availForage, utilDecimal)
      : null

  // Number of paddocks
  const numPaddocks =
    restDays && daysOnPaddock ? calcNumberOfPaddocks(restDays, daysOnPaddock) : null

  return (
    <div className="results-panel">
      <h2>Results</h2>
      <p className="results-subtitle">Values update live as you change inputs.</p>

      <div className="results-grid">
        <ResultCard
          label="Paddock Size"
          value={fmt(paddockAcres)}
          unit="acres"
          formula="(head × weight × DMI% × days) ÷ (forage × utilization%)"
        />
        <ResultCard
          label="Number of Paddocks"
          value={fmt(numPaddocks, 0)}
          unit="paddocks"
          formula="⌈rest days ÷ grazing days⌉ + 1"
        />
      </div>

      {paddockAcres !== null && (
        <div className="results-summary">
          <strong>Summary:</strong> A herd of {fmt(head, 0)} head needs approximately{' '}
          <strong>{fmt(paddockAcres)} acres</strong> per paddock.
          {numPaddocks !== null && (
            <> Rotating every {fmt(daysOnPaddock, 0)} day(s) with a {fmt(restDays, 0)}-day rest requires{' '}
            <strong>{fmt(numPaddocks, 0)} paddocks</strong>.</>
          )}
        </div>
      )}
    </div>
  )
}
