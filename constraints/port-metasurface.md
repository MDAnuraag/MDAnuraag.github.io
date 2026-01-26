---
layout: page
title: "Constraints: Port Metasurface Deployment"
permalink: /constraints/port-metasurface/
---

**Full case study**: [/case-studies/port-metasurface](/case-studies/port-metasurface/)

## Observable

Simulated RF link metrics (S₂₁ improvement, beam steering, angular response, bandwidth) evaluated under assumed port environments with deliberate line-of-sight blockage.

Limited preliminary measurement data from two-horn bench tests.

## Claim

Passive metasurfaces can redirect mmWave energy (24.25-27.5 GHz) under controlled blockage scenarios. Deployment-level performance claims require environment-diverse validation—simulation-only results insufficient.

---

## Load-Bearing Constraints

### [Axiomatic]
- Passive structures obey reciprocity, conservation (cannot create gain, only redirect)
- In multipath, different scattering configurations produce similar coarse link metrics

### [Measurement]
- Channel state information incomplete in dynamic scenes (moving containers, vehicles, cranes)
- Hardware: phase quantization, element coupling, alignment errors break simulation correspondence
- Single-location measurements don't represent spatial distribution

### [Fabrication]
- PCB tolerances (±50 μm trace, ±0.1 mm substrate) shift resonances
- Substrate loss varies with humidity/temperature (outdoor deployment)
- Surface oxidation and weathering degrade conductivity over time

### [Statistical]
- Simulation: tested 5-10 representative geometries (cannot cover operational distribution)
- Gains are spatially non-uniform and intermittent (depends on container placement)

### [Computational]
- EM simulations: assume ideal boundaries, homogeneous materials
- Port environment modeling (spacing, ground plane, clutter) is approximate
- Optimization against simulated channels produces brittle designs
- Unit-cell periodicity assumes infinite array (finite array has edge effects)

---

## Primary Limiting Factor

**Environment non-identifiability.**

Cannot observe full channel state. Multiple scattering environments explain same measured S₂₁. Attributing performance to metasurface vs. incidental channel changes requires controlled ablation—not yet performed.

---

## What This Ruled Out

- Treating simulation-only gains as deployment guarantees (environment error dominates)
- Single-scenario measurements as representative (spatial/temporal variation not characterized)
- Mechanism attribution without bench-characterized metasurface (separate from deployment)

---

## What Remains Non-Identifiable

- Whether improvements arise from metasurface design or favorable channel realizations
- Optimal array size and placement (directivity vs. coverage trade-off not experimentally resolved)
- Real-world bandwidth and angular performance under dynamic obstruction
- Ground-plane multipath vs. metasurface-redirected path contributions

---

## What Would Help

- Bench-characterize in anechoic chamber (isolate surface from environment)
- Deploy across controlled scene ensemble with repeatable protocols
- Measure spatial distribution (receiver grid, not single point)
- Report performance distributions across conditions (not best-case only)
- Systematic ablation: with/without metasurface under same environment

---

## Methods Referenced

- [EM simulation in deployment settings](/reading-ledger/#em-sim)
- [Identifiability](/reading-ledger/#identifiability)

**Related constraints**: [Inverse RCWA](/constraints/inverse-rcwa/) (similar measurement-model correspondence issues)

---

**Status**: Ongoing senior thesis work. Fabrication and validation measurements pending (Feb-Mar 2026).

**Analysis date**: Fall 2024 - Present  
**My experience**: First RF/EM project, first hardware design, learning about simulation-measurement gaps

The constraint that surprised me most here was environment non-identifiability. I initially thought: "simulate the port, optimize the design, deploy it." But I can't know the actual channel well enough to predict performance from simulation alone. The metasurface might help, or the channel might just be favorable that day. Without controlled ablation, I can't tell.

---

[Back to Constraints](/constraints/) | [Full Case Study](/case-studies/port-metasurface/)