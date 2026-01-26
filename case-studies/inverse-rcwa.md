---
layout: page
title: Inverse RCWA Metrology
permalink: /case-studies/inverse-rcwa/
---

## The question

Given a broadband optical reflectance spectrum, which geometric parameters of a patterned GAAFET stack can actually be inferred?

The observable was broadband reflectance (~300–2500 nm) from a periodic transistor stack with nominal dimensions defined by fabrication targets.  
The goal was to recover **geometry**, primarily trench depth and selected layer thicknesses, under fixed or weakly varying optical constants.

The challenge is not noise.  
It is degeneracy.

---

## The forward claim

Rigorous Coupled-Wave Analysis (RCWA) defines a deterministic forward map from periodic geometry and multilayer optical constants to broadband reflectance.

Under linear optics, lateral periodicity, and plane-wave illumination, RCWA resolves interference, diffraction, and depth-dependent phase accumulation.  
It is accurate as a *forward* model.

Accuracy alone does not make the inverse problem well-posed.

---

## Where ambiguity enters

The inverse problem is ill-posed even with dense, low-noise data.

Structural degeneracies include:

- **Thickness–index coupling**  
  Physical thickness changes partially compensate with effective refractive index variation.

- **Depth–duty-cycle trade-offs**  
  Different trench depths and lateral fill factors produce similar phase accumulation.

- **Multilayer correlation**  
  Thickness changes in adjacent layers offset one another spectrally.

- **Diffuse sensitivity**  
  Broadband reflectance responds to many geometric degrees of freedom at once.

- **Polarization coupling**  
  Using 90° polarization spreads sensitivity across parameters and amplifies correlation.

These ambiguities persist even with perfect forward modeling.

---

## What was constrained

The solution space was restricted deliberately, not algorithmically.

Constraints applied:

- **Process-bounded ranges**  
  Parameters limited to fabrication-compatible intervals.

- **Polarization restriction**  
  Inversion performed using 0° polarization only.

- **Spectral windowing**  
  Priority given to wavelength regions with demonstrated depth sensitivity.

- **Single-parameter perturbations**  
  Parameters varied independently to suppress correlated directions.

- **Physical plausibility filters**  
  Solutions violating monotonicity, smoothness, or layer ordering were rejected.

- **Parameter reduction**  
  Weakly influential parameters were fixed or removed.

Constraints were aligned with sensitivity, not convenience.

---

## What survived

Under these constraints, **trench depth** became reliably identifiable across more than twenty stack and geometry variants.

Several secondary parameters did not.

Validation relied on:

- stability under perturbation,
- consistency across variants,
- re-analysis of sensitivity structure,

not on fit quality alone.

Parameters that failed to converge under controlled variation were explicitly treated as unconstrained.

The result was reduced ambiguity-driven time-to-solution, not full structural recovery.

---

## What generalized

Inverse optical metrology is governed by **identifiability**, not optimization accuracy.

Exact forward models and dense data do not resolve ill-posed inference unless constraints align with physical sensitivity and process limits.  
Effective inversion means restricting the problem to parameters the measurement can actually support.

Anything else is numerical optimism.

---

## Related

- Constraint audit: **[/constraints/inverse-rcwa/](/constraints/inverse-rcwa/)**
- Methods: [RCWA](/reading-ledger/#rcwa), [Identifiability](/reading-ledger/#identifiability), [Dispersion models](/reading-ledger/#dispersion)
- Framework: **[/method](/method/)**
