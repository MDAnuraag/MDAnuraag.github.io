---
layout: page
title: "Constraints: Port Metasurface Deployment"
permalink: /constraints/port-metasurface/
---

**Full case study**: [/case-studies/port-metasurface](/case-studies/port-metasurface/)

## Observable

Primarily simulation-derived link metrics (ΔS₂₁, angular response, bandwidth) under
simplified blockage scenarios.

Limited bench-style measurements are planned but not yet complete.

---

## Working claim (tentative)

Passive metasurfaces can redirect mmWave energy in controlled geometries.
Whether this translates into reliable improvement in real port environments remains
undetermined without controlled measurement.

---

## Load-bearing constraints

### Physical

- Passive structures obey reciprocity and conservation: they can only redirect energy,
  not amplify it.
- In cluttered environments, multiple reflection paths coexist and interfere.

### Environmental

- The true channel state in a port is not observable or repeatable.
- Small geometric changes (container placement, crane motion) can dominate link behavior.
- Simulation environments necessarily under-sample this variability.

### Measurement

- Single-point measurements cannot distinguish device effect from channel luck.
- Without baseline comparisons under identical conditions, attribution is ambiguous.

### Fabrication

- PCB tolerances and material losses at mmWave may shift response.
- These effects are not fully captured in early simulations.

### Computational

- Periodic unit-cell simulations assume infinite arrays.
- Finite arrays introduce edge effects that complicate scaling.
- Optimization against a small set of scenes risks overfitting.

---

## Primary limiting factor

**Environment non-identifiability.**

Multiple channel realizations can explain the same observed improvement.
Without systematic ablation, I cannot tell whether performance arises from the metasurface
or the environment.

---

## What this ruled out for me

- Treating simulation-only gains as evidence of deployment performance.
- Using a single blockage scenario as representative.
- Claiming mechanism attribution without isolating the metasurface response.

---

## What remains unresolved

- How robust any improvement is across realistic scene variation.
- How fabrication tolerances interact with angular sensitivity.
- Optimal trade-off between aperture size and coverage uniformity.

---

## What would reduce uncertainty

- Bench characterization in a controlled environment.
- Repeated measurements across a defined scene ensemble.
- Spatial power maps instead of single-link metrics.
- Explicit with/without-surface comparisons.

---

**Status**  
Senior thesis in progress. Measurements pending.

**What surprised me**  
I initially thought simulation fidelity would be the main challenge. Instead, the dominant
issue is not knowing the channel well enough to attribute cause. That shifted my focus
from optimization to identifiability.
