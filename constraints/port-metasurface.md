---
layout: page
title: "Constraints: Port Metasurface Deployment"
permalink: /constraints/port-metasurface/
---

**Full case study:** [/case-studies/port-metasurface/](/case-studies/port-metasurface/)

## Observable

Simulated RF link metrics (S₂₁ improvement, beam steering gain, angular response, bandwidth)
evaluated under assumed port environments with deliberate line-of-sight blockage.
Limited preliminary measurement data from two-horn bench tests.

## Claim

Passive metasurfaces can redirect mmWave energy (24.25-27.5 GHz) under controlled blockage scenarios.
Deployment-level performance claims require environment-diverse validation—simulation-only results are insufficient.

## Load-Bearing Constraints

### Axiomatic
- Passive structures obey reciprocity and conservation of energy (cannot create gain, only redirect)
- In multipath environments, different scattering configurations produce similar coarse link metrics (non-unique channel estimation)

### Measurement
- Channel state information incomplete in dynamic outdoor scenes (moving containers, vehicles, crane motion)
- Hardware phase quantization, element coupling, and alignment errors break correspondence with ideal simulations
- Single-location measurements do not represent spatial distribution of link quality

### Fabrication / Process
- PCB manufacturing tolerances (±50 μm trace width, ±0.1 mm substrate thickness) shift resonances
- Substrate loss tangent varies with humidity and temperature (outdoor deployment conditions)
- Surface oxidation and weathering degrade conductivity over time

### Statistical
- Simulation tested 5-10 representative port geometries (cannot cover full operational distribution)
- Gains are spatially non-uniform and intermittent (depends on container placement, which changes hourly)

### Computational
- EM simulations assume ideal boundaries and homogeneous material properties
- Port environment modeling (container spacing, ground plane, clutter) is approximate
- Optimization against simulated channels produces designs that may be brittle to real-world deviations
- Unit-cell periodicity assumes infinite array (finite array has edge effects not captured)

## Primary Limiting Factor

**Environment non-identifiability.**  
Cannot observe full channel state. Multiple scattering environments explain the same measured S₂₁.
Attributing performance to metasurface vs. incidental channel changes requires controlled ablation studies not yet performed.

## What This Rules Out

- Treating simulation-only gains as deployment guarantees (environment approximations dominate error)
- Single-scenario measurements as representative performance (spatial/temporal variability not characterized)
- Claiming mechanism attribution without bench-characterized metasurface performance separate from deployment

## What Remains Non-Identifiable

- Whether observed link improvements arise from metasurface design or favorable but uncontrolled channel realizations
- Optimal array size and placement (trade-off between directivity and spatial coverage not experimentally resolved)
- Real-world bandwidth and angular performance under dynamic obstruction (preliminary data insufficient)
- Contribution of ground-plane multipath vs. metasurface-redirected paths

## Partial Disambiguation

- Bench-characterize metasurface in anechoic chamber (isolate surface performance from environment)
- Deploy across controlled scene ensemble with repeatable obstruction protocols
- Measure spatial distribution (receiver grid scan, not single point)
- Report performance distributions across conditions, not best-case single results
- Systematic ablation: with/without metasurface under same environment realizations

## Methods Referenced

- [EM simulation in deployment settings](/reading-ledger/#em-sim)
- [Identifiability and uncertainty](/reading-ledger/#identifiability)

**Related constraints**: [Inverse RCWA](/constraints/inverse-rcwa/) (similar measurement-model correspondence issues)

[Back to Constraints Index](/constraints/) | [Full Case Study](/case-studies/port-metasurface/)

**Note**: This is ongoing senior thesis work. Fabrication and full validation measurements pending as of January 2026.