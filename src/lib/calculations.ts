export type Species = 'beef' | 'dairy' | 'sheep_goat'

export const SPECIES_LABELS: Record<Species, string> = {
  beef: 'Beef Cattle',
  dairy: 'Lactating Dairy Cattle',
  sheep_goat: 'Sheep / Goats',
}

/** Default midpoint DMI as a decimal (e.g. 0.025 = 2.5%) */
export const DMI_DEFAULTS: Record<Species, number> = {
  beef: 0.025,
  dairy: 0.0325,
  sheep_goat: 0.0425,
}

/** Daily forage demand per head in lbs */
export function dailyForageDemand(weightLbs: number, dmiDecimal: number): number {
  return weightLbs * dmiDecimal
}

/**
 * Paddock size in acres.
 * Formula: (head × weight × dmi × days) / (forageLbPerAc × utilizationRate)
 */
export function calcPaddockSize(
  head: number,
  weightLbs: number,
  dmiDecimal: number,
  daysGrazed: number,
  foragePerAcre: number,
  utilizationDecimal: number,
): number {
  const numerator = head * weightLbs * dmiDecimal * daysGrazed
  const denominator = foragePerAcre * utilizationDecimal
  return numerator / denominator
}

/**
 * Number of paddocks needed for the rotation.
 * Formula: (restDays / grazingDays) + 1
 */
export function calcNumberOfPaddocks(restDays: number, grazingDays: number): number {
  return Math.ceil(restDays / grazingDays) + 1
}

/**
 * Stock density in lbs/acre.
 * Formula: (head × weight) / acres
 */
export function calcStockDensity(head: number, weightLbs: number, acres: number): number {
  return (head * weightLbs) / acres
}

/**
 * Carrying capacity in head/acre for the season.
 * Formula: (forageProduction × utilizationRate) / (dailyIntake × seasonLength)
 */
export function calcCarryingCapacity(
  forageProductionPerAcre: number,
  utilizationDecimal: number,
  dailyIntakePerHead: number,
  seasonLengthDays: number,
): number {
  return (forageProductionPerAcre * utilizationDecimal) / (dailyIntakePerHead * seasonLengthDays)
}
