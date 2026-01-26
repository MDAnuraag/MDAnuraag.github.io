---
layout: page
title: "Constraints: AlN electroabsorption"
permalink: /constraints/aln-electroabsorption/
---

**Full case study:** **[/case-studies/aln-electroabsorption/](/case-studies/aln-electroabsorption/)**

## Observable

Bias-dependent changes in UV and near-UV transmission in PEALD AlN thin films,
measured as a spatially averaged spectrum.

## Claim under audit

The modulation is consistent with defect-mediated absorption
and inconsistent with a bulk crystalline electro-optic mechanism.

## Load-bearing constraints

### Axiomatic

- Field-driven effects must respect symmetry, electronic structure, and realistic field scales.
- Several mechanisms can produce similar UV modulation; amplitude alone does not identify cause.

### Measurement

- Transmission averages over depth and lateral inhomogeneity.
- Defect distributions are not directly resolved.
- Without time-domain data, trapping, thermal effects, and fast electronic response cannot be cleanly separated.
- Structural order cannot be assumed from deposition alone.

### Fabrication / process

- PEALD introduces nonstoichiometry and impurities that can dominate optical response.
- Interfaces, roughness, and thickness variations distort local field distribution.

### Statistical

- Stability across bias cycles constrains reversibility, not microscopic origin.
- Limited variation in growth conditions weakens attribution.

### Computational

- Semi-local DFT supports trends but does not uniquely constrain defect energies.
- Phenomenological fits reproduce spectra without fixing mechanism.

## Primary limiting factor

**Measurement resolution.**  
The observable is a spatially averaged spectrum with no depth or defect specificity.
Multiple microscopic mechanisms remain consistent.

## What this rules out

- Crystalline electro-optic explanations without structural evidence.
- Mechanisms predicting broadband visible/IR response or irreversible behavior.
- Explanations requiring fields or carrier densities incompatible with device geometry.

## What remains non-identifiable

- The specific defect species involved.
- Defect depth distribution (interface vs bulk).
- Relative roles of charge trapping and direct electroabsorption.

## Partial disambiguation

- Depth-sensitive optics and bias-dependent ellipsometry.
- Electrical probes targeting traps and field response.
- Chemical profiling of impurities.
- Higher-level defect calculations anchored to experiment.

## Methods referenced

- [UV–Vis spectroscopy](/reading-ledger/#uv-vis)
- [XRD](/reading-ledger/#xrd)
- [AFM](/reading-ledger/#afm)
- [DFT (PBE)](/reading-ledger/#dft-pbe)
- [DFT (hybrid functionals)](/reading-ledger/#dft-hse06)

[Back to Constraints Index](/constraints/) | [Full Case Study](/case-studies/aln-electroabsorption/)
