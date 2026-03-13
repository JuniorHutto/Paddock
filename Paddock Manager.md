# Goal
create an web app to determine the paddock size and movement frequencies.

# Info

**1. Estimating Animal Forage Demand (Dry Matter Intake)** The foundation of grazing math is understanding how much forage your animals need to eat every day. This is calculated using the animal's weight and its expected Dry Matter Intake (DMI), which is a percentage of its body weight.

- **Beef Cattle:** 2.0% to 3.0% of body weight.
- **Lactating Dairy Cattle:** 2.5% to 4.0% of body weight.
- **Sheep and Goats:** 3.5% to 5.0% of body weight.
- **Calculation:** `Average Animal Weight × DMI % = Daily Forage Demand (lbs/head/day)`.
- _Example:_ A 1,200 lb beef cow consuming 3% of her body weight requires 36 lbs of dry matter per day.

**2. Calculating Carrying Capacity** Carrying capacity is the maximum stocking rate that a pasture can support over a defined grazing season without degrading the resource base. It evaluates the "big picture" of your farm's capability.
A grazing stick is a simple, low-cost tool—often functioning like a specialized ruler—used to measure the height of pasture forage and create a working inventory of your farm's available grass. By taking regular measurements, graziers can monitor how much forage is available at different points in the year and project future availability to ensure the livestock have adequate, high-quality feed.

Here is how the method works in practice:

**The Core Calculation** The stick is used to measure the average height of the pasture's canopy in inches. You then multiply that height by an estimated dry matter yield per "acre-inch" to find your total available forage.

- _Example:_ If your grazing stick shows an average forage height of 8 inches, and you estimate that your specific pasture type yields 300 pounds of dry matter per inch, your available forage is 2,400 pounds per acre (8 inches × 300 lbs/inch).

**Calibrating Your Stick** Because different types of forage and different stand densities yield varying amounts of dry matter per inch, a grazing stick is most effective when calibrated to your specific land. You can calibrate your stick (or a standard ruler) by cross-referencing it with the **clip-and-weigh method**.

- To do this, place a 2-square-foot frame on the ground, measure the height of the grass inside it with your stick, and then clip all the plants at ground level.
- After drying and weighing the clipped sample, you can determine exactly how many pounds of dry matter that specific height of grass represents on your farm.

By consistently walking the pastures and taking measurements with a grazing stick, you can confidently answer "how much forage is available on this acre this day," which is the foundational variable needed to calculate stocking density and paddock sizes.

- **Formula:** `Carrying Capacity = (Forage Production (lb/ac) × Seasonal Utilization Rate) / (Daily Intake (lb/hd/day) × Grazing Season Length (days))`.
- _Note on Utilization Rate:_ This is the percentage of grown forage actually consumed by the livestock. While continuous grazing might only achieve 30% to 50% utilization, intensive rotational systems can achieve 60% to 75% efficiency.

**3. Determining Stocking Density vs. Stocking Rate** It is important to distinguish between stocking rate and stock density. While _stocking rate_ refers to the number of animals on the entire grazing unit over a season, _stock density_ is the concentration of animal weight on a specific paddock at a single point in time.

- **Basic Formula:** `Stock Density (lbs/acre) = Total Herd Weight / Paddock Size (acres)`.
- Increasing stock density encourages animals to graze more uniformly, prevents them from selectively overgrazing their favorite plants, and improves manure distribution. Management-intensive Grazing (MiG) systems generally utilize stock densities between 10,000 and 100,000 lbs per acre, whereas "Mob Grazing" can exceed 100,000 to 500,000 lbs per acre.

**4. Calculating the Number of Paddocks** The number of paddocks dictates your control over the system, specifically the length of the grazing period and the vital recovery (rest) period plants need before being grazed again.

- **Formula:** `Number of Paddocks = (Rest Period / Grazing Period) + 1`.
- The "+1" accounts for the paddock that the herd is currently grazing while the others are resting. For example, if your pasture needs 35 days of rest and you want to move the herd every 1 day, you need 36 paddocks (35/1 + 1).

**5. Sizing the Paddocks** Paddock size ensures that the livestock have exactly enough food for their designated grazing period without wasting forage or forcing them to overgraze.

- **Formula:** `Paddock Size (Acres) = (Number of Head × Average Weight × DMI % × Days Grazed) / (Available Forage (lb/ac) × Utilization Rate)`.
- _Example:_ If you have 100 head of 500 lb calves (3% DMI) grazing for 4 days in a pasture with 2,000 lbs of available forage per acre at a 60% utilization rate, the formula looks like: `(500 × 0.03 × 100 × 4) / (2,000 × 0.60) = 5 acres`.

By continuously monitoring forage growth and adjusting these formulas as the seasons change, graziers can speed up or slow down rotations, alter paddock sizes using temporary fencing, and accurately balance animal demand with the biological reality of the pasture.

## Inputs
- Species
- weight lbs
- head count
- DMI
- forage production
- days on paddock
## Output
- size in acres of paddock

## Future 
- create maps of paddock
- history of paddock location







