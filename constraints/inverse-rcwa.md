---
layout: page
title: "Constraints: Inverse RCWA Metrology"
permalink: /constraints/inverse-rcwa/
---

**Full case study**: [/case-studies/inverse-rcwa](/case-studies/inverse-rcwa/)

## Observable

Broadband reflectance (300-2500 nm) from periodic GAAFET stacks, measured with inline optical tools.

## Claim

With fabrication priors and restricted measurement diversity, trench depth is recoverable. Secondary parameters remain degenerate.

---

## Load-Bearing Constraints

### [Axiomatic]
- RCWA forward map (geometry + materials → spectrum) is deterministic but many-to-one
- Multiple (thickness, index, geometry) combinations produce near-identical far-field spectra

### [Measurement]
- Instrument: bandwidth, spot-size (~10-50 μm), spectral resolution limit detail
- Real samples: roughness, line-edge roughness, thickness variation violate periodic assumptions
- Single polarization used: reduces sensitivity, amplifies parameter correlations

### [Fabrication]
- Process windows define feasible ranges (used as hard bounds in inversion)
- Sidewall profiles and roughness produce effective responses not captured by rectangular geometries
- Stack composition known from process flow (reduces free parameters)

### [Statistical]
- Identifiability determined by covariance structure, not fit quality
- Multi-start optimization showed multiple local minima with similar χ²
- Parameter correlations >0.7 for secondary parameters

### [Computational]
- RCWA convergence verified (50-100 Fourier orders needed)
- Dispersion models can absorb modeling error and hide geometric degeneracies

---

## Primary Limiting Factor

**Intrinsic ill-posedness of inverse problem.**

Single-polarization broadband reflectance underdetermines geometry. Depth-duty-cycle trade-offs and thickness-index coupling produce high covariances for secondary parameters.

---

## What This Ruled Out

- Unique geometry recovery from fit quality alone (multiple solutions with χ² < 0.03 found)
- Sub-resolution feature inference (beyond measurement sensitivity)
- Secondary parameter claims without explicit covariance analysis

---

## What Remains Non-Identifiable

- Thickness-refractive-index trade-offs (both affect optical path length similarly)
- Depth vs. duty cycle for secondary parameters (similar phase accumulation)
- Roughness-driven scattering vs. effective index changes
- Sidewall profile details (45° vs. 50° taper produces <1% spectral difference)

---

## What Would Help

- Add measurement diversity (multiple angles, polarizations, azimuthal rotations)
- Encode fabrication knowledge as explicit priors (not just bounds)
- Cross-validate with orthogonal metrology (CD-SEM, AFM, TEM on calibration samples)
- Run full identifiability analysis (posterior sampling, multi-start clustering)

---

## Methods Referenced

- [RCWA](/reading-ledger/#rcwa)
- [Identifiability](/reading-ledger/#identifiability)
- [Dispersion models](/reading-ledger/#dispersion)

---

**Analysis date**: Summer 2025  
**My experience**: First industry internship, first large-scale inverse problem

This analysis reflects what I learned during the internship about when inverse optical metrology works and when it doesn't. The constraint analysis (ill-posed inverse problem as primary limit) was surprising to me initially—I thought more optimization would solve it.

---

[Back to Constraints](/constraints/) | [Full Case Study](/case-studies/inverse-rcwa/)