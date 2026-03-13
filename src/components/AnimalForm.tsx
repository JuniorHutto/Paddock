import { useEffect } from 'react'
import { DMI_DEFAULTS, SPECIES_LABELS, type Species } from '../lib/calculations'

export interface FormState {
  species: Species
  weightLbs: string
  headCount: string
  dmiPct: string
  availableForageLbPerAc: string
  daysOnPaddock: string
  restPeriodDays: string
  utilizationPct: string
}

interface Props {
  values: FormState
  onChange: (next: FormState) => void
}

export default function AnimalForm({ values, onChange }: Props) {
  const set = (field: keyof FormState, value: string) =>
    onChange({ ...values, [field]: value })

  // Auto-fill DMI when species changes
  useEffect(() => {
    const defaultDmi = (DMI_DEFAULTS[values.species] * 100).toFixed(2)
    onChange({ ...values, dmiPct: defaultDmi })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values.species])

  return (
    <form className="animal-form" onSubmit={(e) => e.preventDefault()}>
      <h2>Herd &amp; Pasture Inputs</h2>

      <section>
        <h3>Animal</h3>

        <label>
          Species
          <select
            value={values.species}
            onChange={(e) => set('species', e.target.value as Species)}
          >
            {(Object.keys(SPECIES_LABELS) as Species[]).map((s) => (
              <option key={s} value={s}>
                {SPECIES_LABELS[s]}
              </option>
            ))}
          </select>
        </label>

        <label>
          Average Weight (lbs / head)
          <input
            type="number"
            min="0"
            step="1"
            placeholder="e.g. 1200"
            value={values.weightLbs}
            onChange={(e) => set('weightLbs', e.target.value)}
          />
        </label>

        <label>
          Head Count
          <input
            type="number"
            min="0"
            step="1"
            placeholder="e.g. 100"
            value={values.headCount}
            onChange={(e) => set('headCount', e.target.value)}
          />
        </label>

        <label>
          Dry Matter Intake — DMI (%)
          <span className="field-hint">Auto-filled from species; adjust if needed</span>
          <input
            type="number"
            min="0"
            max="10"
            step="0.01"
            placeholder="e.g. 2.50"
            value={values.dmiPct}
            onChange={(e) => set('dmiPct', e.target.value)}
          />
        </label>
      </section>

      <section>
        <h3>Pasture</h3>

        <label>
          Available Forage (lbs dry matter / acre)
          <span className="field-hint">Measure with a grazing stick (height × lbs/inch)</span>
          <input
            type="number"
            min="0"
            step="1"
            placeholder="e.g. 2000"
            value={values.availableForageLbPerAc}
            onChange={(e) => set('availableForageLbPerAc', e.target.value)}
          />
        </label>

        <label>
          Utilization Rate (%)
          <span className="field-hint">Rotational: 60–75% · Continuous: 30–50%</span>
          <input
            type="number"
            min="0"
            max="100"
            step="1"
            placeholder="e.g. 65"
            value={values.utilizationPct}
            onChange={(e) => set('utilizationPct', e.target.value)}
          />
        </label>
      </section>

      <section>
        <h3>Rotation</h3>

        <label>
          Days on Paddock (grazing period)
          <input
            type="number"
            min="1"
            step="1"
            placeholder="e.g. 4"
            value={values.daysOnPaddock}
            onChange={(e) => set('daysOnPaddock', e.target.value)}
          />
        </label>

        <label>
          Rest Period (days before re-grazing)
          <input
            type="number"
            min="1"
            step="1"
            placeholder="e.g. 35"
            value={values.restPeriodDays}
            onChange={(e) => set('restPeriodDays', e.target.value)}
          />
        </label>

      </section>
    </form>
  )
}
