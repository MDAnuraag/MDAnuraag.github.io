---
layout: page
title: Inverse RCWA Metrology
permalink: /case-studies/inverse-rcwa/
---

## Problem

Recover trench geometry from broadband reflectance (300–2500 nm) of a patterned GAAFET stack.

**Observable**: Polarization-resolved reflectance from periodic multilayer structure  
**Target**: Trench depth, selected layer thicknesses  
**Forward model**: RCWA (deterministic, accurate when converged)

---

## Ambiguities

Multiple geometries produce near-identical spectra:

- **Thickness–index coupling**: Physical thickness trades off with effective refractive index
- **Depth–duty-cycle**: Different trench depths and fill factors produce similar phase accumulation
- **Multilayer correlation**: Adjacent layer thickness changes offset spectrally
- **Polarization coupling**: 90° polarization spreads sensitivity, amplifies parameter correlations

---

## Constraints Applied

- **Process bounds**: Parameters restricted to fabrication-compatible intervals
- **Polarization**: 0° only (eliminates correlated directions)
- **Spectral windowing**: Prioritize wavelength regions with depth sensitivity
- **Single-parameter perturbations**: Vary independently to isolate contributions
- **Plausibility filters**: Reject solutions violating monotonicity, smoothness, layer ordering
- **Parameter reduction**: Fix or remove weakly influential parameters

---

## Outcome

**Trench depth**: Reliably recovered across >20 stack/geometry variants  
**Secondary parameters**: Remained unconstrained (failed stability tests)

Validation based on:
- Stability under perturbation
- Consistency across variants
- Sensitivity re-analysis

Result: 47% reduction in inline measurement time-to-solution via constrained parameter space, not full structural recovery.

---

**Constraint analysis**: [/constraints/inverse-rcwa/](/constraints/inverse-rcwa/)  
**Methods**: [RCWA](/reading-ledger/#rcwa), [Identifiability](/reading-ledger/#identifiability)