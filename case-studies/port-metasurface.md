---
layout: page
title: Passive mmWave Metasurface for Port NLoS Recovery
permalink: /case-studies/port-metasurface/
---

## Problem

Can a fully passive metasurface restore usable mmWave connectivity (band n258: 24.25–27.5 GHz) in a container port when line-of-sight is intermittently blocked?

**Limiting factor**: Link continuity, not peak throughput

**Forward map**: Unit-cell geometry + substrate + periodicity + incidence  
→ reflection phase/magnitude vs. frequency/angle  
→ link-level recovery under blockage

**Modeling pipeline**:
1. Periodic unit cell (Floquet-boundary simulations)
2. Finite array + deployment geometry → redirection gain and coverage

---

## Ambiguities

- Distinct unit-cell designs yield similar ΔS₂₁ at specific locations
- Narrow resonances appear optimal at one frequency, fail across n258
- Angular sensitivity dominates under realistic placement
- Deployment geometry can outweigh unit-cell optimization

Peak gain at single frequency/location is insufficient.

---

## Constraints Applied

- **Bandwidth**: Performance across full n258 band (3.25 GHz)
- **Spectral smoothness**: Broadband response over narrow resonances
- **Passivity**: No biasing, tuning, or active control
- **Fabrication**: PCB-style copper on low-loss dielectric
- **Angular tolerance**: Stable under oblique incidence (port deployment)

Deliberately excludes lab-only solutions.

---

## Status

**Fixed**:
- Objective: NLoS recovery under dynamic blockage (not general coverage)
- Evaluation priority: bandwidth, angular tolerance, spatial robustness over peak gain
- Workflow: unit cell → array → blocked-link test

**Awaiting measurement**:
- Optimal unit-cell geometry within design class
- Array size/placement balancing gain vs. spatial uniformity  
- Real-world ΔS₂₁ recovery magnitude

---

## Validation Plan

Controlled measurements:
- Two-horn link with deliberate LoS blockage
- Frequency sweep across n258 (ΔS₂₁ or ΔPrx improvement)
- Receiver-grid scan (spatial robustness, not single-point optimization)

Claims restricted to what these measurements disambiguate.

---

*Design and simulation pipeline established; fabrication and measurement pending.*

**Constraint analysis**: [/constraints/port-metasurface/](/constraints/port-metasurface/)  
**Methods**: [EM simulation](/reading-ledger/#em-sim), [RCWA](/reading-ledger/#rcwa)