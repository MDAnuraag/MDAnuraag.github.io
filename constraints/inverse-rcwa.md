---
layout: page
title: "Constraints: Inverse RCWA Metrology"
permalink: /constraints/inverse-rcwa/
---

**Full case study:** [/case-studies/inverse-rcwa/](/case-studies/inverse-rcwa/)

## Observable

Broadband reflectance (300-2500 nm) from periodic or quasi-periodic GAAFET stacks,
measured with fixed angle/polarization using inline optical metrology tools.

## Claim

Under fabrication priors and restricted measurement diversity, trench depth is reliably recoverable.
Secondary parameters remain degenerate—inverse problem is non-unique without additional constraints.

## Load-Bearing Constraints

### Axiomatic
- Forward RCWA map (geometry + materials → spectrum) is deterministic but many-to-one by construction
- Multiple (thickness, index, geometry) combinations produce near-identical far-field spectra

### Measurement
- Instrument bandwidth, spot-size averaging (~10-50 μm), and spectral resolution limit retrievable detail
- Real samples violate periodic assumptions (roughness, line-edge roughness, thickness nonuniformity)
- Single polarization reduces parameter sensitivity and amplifies covariance

### Fabrication / Process
- Process windows define feasible geometry ranges (used as hard bounds in inversion)
- Sidewall profiles and interfacial roughness produce effective responses not captured by ideal rectangular geometries
- Stack layer count and composition known from process flow (reduces free parameters)

### Statistical
- Parameter identifiability determined by sensitivity and covariance structure, not fit quality alone
- Flexible dispersion models absorb modeling error and hide geometric degeneracies
- Multi-start optimization shows multiple local minima with similar χ²

### Computational
- RCWA convergence must be verified (50-100 Fourier orders needed for high-aspect-ratio features)
- Numerical artifacts from insufficient truncation can mimic physical effects

## Primary Limiting Factor

**Intrinsic ill-posedness of inverse problem.**  
Single-polarization broadband reflectance underdetermines geometry. Depth–duty-cycle trade-offs and thickness–index coupling produce parameter covariances >0.7 for secondary parameters.

## What This Rules Out

- Unique geometry recovery from spectral fit quality alone
- Sub-resolution feature inference beyond measurement sensitivity limits
- Parameter claims without explicit uncertainty and covariance analysis

## What Remains Non-Identifiable

- Thickness–refractive-index trade-offs (both affect optical path length similarly)
- Depth vs. duty-cycle separation for non-primary parameters (produce similar phase accumulation)
- Roughness-driven scattering vs. effective index changes (require angle-resolved or scatter measurements to separate)
- Sidewall profile details (45° vs. 50° taper produces <1% spectral difference)

## Partial Disambiguation

- Add measurement diversity (multiple angles, polarizations, azimuthal rotations)
- Encode fabrication knowledge as explicit priors (not just bounds)
- Perform identifiability analysis (parameter sensitivity matrix, posterior sampling, multi-start clustering)
- Cross-validate with orthogonal metrology (CD-SEM, AFM, TEM on calibration samples)
- Reduce free parameters by fixing weakly sensitive values to process targets

## Methods Referenced

- [RCWA](/reading-ledger/#rcwa)
- [Identifiability and uncertainty](/reading-ledger/#identifiability)
- [Dispersion models](/reading-ledger/#dispersion)

**Related constraints**: [Port metasurface](/constraints/port-metasurface/) (similar measurement-model mismatch issues)

[Back to Constraints Index](/constraints/) | [Full Case Study](/case-studies/inverse-rcwa/)