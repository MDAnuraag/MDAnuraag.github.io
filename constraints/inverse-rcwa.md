---
layout: page
title: "Constraints: inverse RCWA metrology"
permalink: /constraints/inverse-rcwa/
---

**Full case study:** **[/case-studies/inverse-rcwa/](/case-studies/inverse-rcwa/)**

## Observable

Broadband reflectance from periodic or quasi-periodic semiconductor structures,
sometimes augmented by angle or polarisation,
measured using inline or near-inline optical metrology.

## Claim under audit

With explicit fabrication priors and uncertainty bounds,
selected geometry or stack parameters can be constrained.
Without added diversity or strong priors, the inverse problem is non-unique.

## Load-bearing constraints

### Axiomatic

- The forward model assumes linear, time-invariant electromagnetism in layered periodic media.
- The mapping from geometry to spectrum is many-to-one by construction.

### Measurement

- Instrument bandwidth, calibration drift, spectral resolution, and spot-size averaging limit retrievable detail.
- Real samples violate ideal periodic assumptions through roughness, LER, and nonuniformity.
- Limited angle and polarisation reduce sensitivity to key parameters.

### Fabrication / process

- Process windows define feasible geometry space and impose correlated bounds.
- Sidewall profiles and roughness generate effective responses not captured by ideal shapes.

### Statistical

- Identifiability depends on sensitivity and covariance, not goodness-of-fit alone.
- Flexible models overfit quickly under limited measurement diversity.

### Computational

- RCWA convergence must be verified; numerical artefacts can look physical.
- Dispersion and effective-medium models can absorb error and hide degeneracy.

## Primary limiting factor

**Intrinsic non-uniqueness of the inverse problem.**  
Spectral data alone rarely determine geometry uniquely
without enforced diversity and fabrication priors.

## What this rules out

- Treating a single best-fit as the physical solution.
- Inferring sub-resolution features unsupported by tool bandwidth.
- Claims of uniqueness when parameters are strongly covariant.

## What remains non-identifiable

- Trade-offs between geometry and optical constants.
- Fine profile details outside the sensitivity span of the data.
- Separation of roughness-driven scattering from effective-index changes without independent scatter measurements.

## Partial disambiguation

- Add measurement diversity (angle, polarisation, azimuth, complementary modalities).
- Encode fabrication knowledge explicitly as priors.
- Run identifiability analysis (sensitivities, covariance, posterior sampling, multi-start clustering).
- Anchor fits to orthogonal metrology where available (CD-SEM, AFM, TEM on reference samples).

## Methods referenced

- [RCWA](/reading-ledger/#rcwa)
- [Uncertainty and identifiability](/reading-ledger/#identifiability)
- [Optical dispersion models](/reading-ledger/#dispersion)

[Back to Constraints Index](/constraints/) | [Full Case Study](/case-studies/inverse-rcwa/)
