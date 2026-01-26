---
layout: page
title: "Constraints: g-C₃N₄ optical transitions"
permalink: /constraints/gcn-optical-transitions/
---

**Full case study:** **[/case-studies/gcn-optical-transitions/](/case-studies/gcn-optical-transitions/)**

## Observable

Computed electronic structure and optical-response proxies
(bands, DOS, dielectric response, oscillator strengths)
for candidate g-C₃N₄ motifs and doped or defected variants,
considered alongside experimental optical trends where available.

## Claim under audit

Qualitative optical trends track symmetry breaking and localisation,
but assigning specific transitions is limited by structural non-uniqueness
and level-of-theory constraints.

## Load-bearing constraints

### Axiomatic

- Optical transitions obey symmetry and selection rules.
- Breaking symmetry redistributes oscillator strength but does not create uniquely identifiable features.
- Optical response is defined for a *model*, not the material.

### Measurement

- Experimental spectra average over disorder, stacking, and defect populations.
- Without structural identification, peak-to-structure mapping is underdetermined.

### Fabrication / process

- Synthesis produces variable polymerisation, stacking, impurities, and defects.
- Dopants occupy multiple local environments simultaneously.

### Statistical

- Finite sampling over configurations biases inference.
- Rare but optically dominant motifs may be missed.

### Computational

- Semi-local DFT misplaces gaps and defect levels.
- Predicted transitions depend on functional choice, cell size, and relaxation details.

## Primary limiting factor

**Structural model class.**  
Multiple plausible configurations reproduce similar optical trends.
Uniqueness requires external structural restriction or higher-level theory.

## What this rules out

- Exact peak-to-defect or peak-to-dopant assignments without structural corroboration.
- Treating a single computed dielectric function as a synthesis-independent property.

## What remains non-identifiable

- Which microscopic motif dominates the measured spectrum.
- Quantitative transition energies and oscillator strengths at experimental accuracy.
- Whether spectral changes arise from electronic structure or morphology and disorder.

## Partial disambiguation

- Broader configuration sampling with uncertainty bands.
- Higher-level electronic-structure calculations for representative motifs.
- Structural and chemical probes to restrict the admissible model space.

## Methods referenced

- [DFT (PBE)](/reading-ledger/#dft-pbe)
- [DFT (hybrid functionals)](/reading-ledger/#dft-hse06)
- [Optical response from electronic structure](/reading-ledger/#optics-from-dft)
- [Configuration sampling](/reading-ledger/#config-sampling)

[Back to Constraints Index](/constraints/) | [Full Case Study](/case-studies/gcn-optical-transitions/)
