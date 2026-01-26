---
layout: page
title: "Constraints: port metasurface deployment"
permalink: /constraints/port-metasurface/
---

**Full case study:** **[/case-studies/port-metasurface/](/case-studies/port-metasurface/)**

## Observable

Simulated and limited measured RF link metrics
(beam steering response, angular dependence, bandwidth),
evaluated under assumed environments and hardware conditions.

## Claim under audit

Metasurfaces can improve link behaviour under constrained setups,
but deployment-level conclusions are limited by environment uncertainty,
multipath non-uniqueness, and mismatch between idealised models and real scenes.

## Load-bearing constraints

### Axiomatic

- Performance claims must respect passivity, causality, and realistic loss.
- In multipath environments, different channel states can produce the same coarse link metrics.

### Measurement

- Channel estimation is incomplete in dynamic scenes.
- Limited sensing and calibration restrict what parts of the environment are actually observed.
- Hardware nonidealities (phase quantisation, coupling, alignment) break correspondence with ideal designs.

### Fabrication / process

- Manufacturing tolerances and substrate loss shift resonance and reduce efficiency.
- Outdoor deployment adds uncontrolled variability: motion, weather, transient obstructions.

### Statistical

- Single-scene results do not generalise.
- Gains depend on scene distribution and may be spatially uneven or intermittent.

### Computational

- EM simulations rely on assumed boundaries and material models.
- Environment modelling is often the dominant approximation.
- Optimisation against ideal channels produces brittle designs.

## Primary limiting factor

**Environment non-identifiability.**  
The channel and scene are only partially observable.
Multiple environment states can explain the same measurements.

## What this rules out

- Treating simulation-only or single-scenario gains as deployment guarantees.
- Attributing improvements to the metasurface without isolating environment effects.

## What remains non-identifiable

- Whether observed gains come from the metasurface or incidental channel changes.
- Which environmental features control success or failure without structured ablation.

## Partial disambiguation

- Test across controlled scene ensembles with repeatable protocols.
- Characterise the metasurface independently on the bench before deployment.
- Report distributions across scenes and conditions, not single best-case results.

## Methods referenced

- [EM simulation assumptions](/reading-ledger/#em-sim)
- [Uncertainty and identifiability](/reading-ledger/#identifiability)

[Back to Constraints Index](/constraints/) | [Full Case Study](/case-studies/port-metasurface/)
