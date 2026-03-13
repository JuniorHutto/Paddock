# Paddock

Paddock is a web app for planning rotational grazing by determining paddock size and movement (rotation) frequencies based on herd demand and forage availability.

## Quick formulas

> Copy/paste friendly summary.

- **Daily forage demand (lb DM / head / day):** `Avg Weight (lb) × DMI%`
- **Paddock size (acres):** `(Head × Avg Weight × DMI% × Days Grazed) / (Available Forage (lb/ac) × Utilization Rate)`
- **Carrying capacity (head per acre over a season):** `(Forage Production (lb/ac) × Seasonal Utilization Rate) / (Daily Intake (lb/hd/day) × Grazing Season Length (days))`
- **Number of paddocks:** `(Rest Period / Grazing Period) + 1`
- **Move frequency (days per move):** typically equals **Grazing Period** (often 1 day in MiG)

## Goal

Create a web app to determine paddock size and movement frequencies.

## Getting started

1. Clone the repo

   ```bash
   git clone https://github.com/JuniorHutto/Paddock.git
   cd Paddock
   ```

2. Install dependencies

   ```bash
   npm install
   ```

## Inputs

- Species
- Weight (lb)
- Head count
- DMI (%)
- Forage production / available forage (lb/ac)
- Days on paddock
- Utilization rate (fraction like 0.6)
- (Move frequency) Rest period (days)
- (Move frequency) Total grazeable acres

## Outputs

- Paddock size (acres)
- Suggested move frequency / rotation plan

## Calculator

### Paddock size

**Formula:**

`Paddock Size (Acres) = (Number of Head × Average Weight × DMI % × Days Grazed) / (Available Forage (lb/ac) × Utilization Rate)`

**Example:** 100 head of 500 lb calves (3% DMI) grazing 4 days in pasture with 2,000 lb/ac available forage at 60% utilization:

`(500 × 0.03 × 100 × 4) / (2,000 × 0.60) = 5 acres`

### Number of paddocks

**Formula:**

`Number of Paddocks = (Rest Period / Grazing Period) + 1`

_Example:_ If pasture needs 35 days of rest and you move every 1 day, you need **36 paddocks**.

### Move frequency / rotation length

There are two common ways to think about movement:

- **Move frequency**: how often you move the herd (usually equals your **grazing period**, e.g., 1 day)
- **Rotation length**: how long it takes to come back to a paddock once

Helpful relationships:

- `Rotation Length (days) = Number of Paddocks × Grazing Period`
- If you aim for a target rest period, then `Number of Paddocks ≈ (Rest Period / Grazing Period) + 1`

If you also know your total grazeable acres, you can estimate an **average paddock size**:

- `Avg Paddock Size (ac) = Total Grazeable Acres / Number of Paddocks`

> Note: In practice, paddock size should still be set by forage availability (see **Paddock size** formula) and adjusted as growth changes.

## Details (grazing math)

### 1) Estimating animal forage demand (Dry Matter Intake)

Dry Matter Intake (DMI) is typically estimated as a percent of body weight:

- **Beef cattle:** 2.0% to 3.0%
- **Lactating dairy cattle:** 2.5% to 4.0%
- **Sheep and goats:** 3.5% to 5.0%

**Calculation:** `Average Animal Weight × DMI % = Daily Forage Demand (lbs/head/day)`

_Example:_ A 1,200 lb beef cow consuming 3% requires **36 lb DM/day**.

### 2) Calculating carrying capacity

Carrying capacity is the maximum stocking rate a pasture can support over a defined grazing season without degrading the resource base.

A grazing stick can estimate available forage by measuring average canopy height (inches) and multiplying by dry matter yield per **acre-inch**.

_Example:_ 8 inches × 300 lb DM/inch = **2,400 lb/ac**.

**Calibrating your stick:** Use a clip-and-weigh sample to determine pounds of dry matter represented by a given grass height on your farm.

**Formula:**

`Carrying Capacity = (Forage Production (lb/ac) × Seasonal Utilization Rate) / (Daily Intake (lb/hd/day) × Grazing Season Length (days))`

_Note on utilization rate:_ Continuous grazing may only achieve 30%–50% utilization, while intensive rotational systems can achieve ~60%–75%.

### 3) Stocking density vs. stocking rate

- **Stocking rate**: number of animals on the whole grazing unit over a season
- **Stock density**: concentration of animal weight on a specific paddock at a point in time

**Basic formula:** `Stock Density (lbs/acre) = Total Herd Weight / Paddock Size (acres)`

Management-intensive grazing systems often use stock densities between **10,000 and 100,000 lb/ac**, while mob grazing can exceed **100,000 to 500,000 lb/ac**.

## Future

- Create maps of paddocks
- Track history of paddock locations

## Repository status

- Early stage / in-progress
- Contributions welcome

## Common commands

> Replace these with the real commands used in this repo.

```bash
npm run start
npm test
```

## Project structure

> Fill in once the folder structure is established.

- `src/` — application source code
- `tests/` — test suite

## Contributing

1. Fork the repo
2. Create a branch: `git checkout -b feature/my-change`
3. Commit: `git commit -m "Describe your change"`
4. Push: `git push origin feature/my-change`
5. Open a Pull Request

## License

MIT (see `LICENSE`).