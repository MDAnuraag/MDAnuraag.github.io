---
layout: page
title: "Constraints: g-C₃N₄ Optical Transitions"
permalink: /constraints/gcn-optical-transitions/
---

**Full case study:** [/case-studies/gcn-optical-transitions/](/case-studies/gcn-optical-transitions/)

## Observable

Electronic structure and optical response (band structure, DOS, dielectric function, oscillator strengths)
computed for candidate g-C₃N₄ motifs with transition-metal doping (Pt, Pd, Co) in periodic models.

## Claim

Metal doping shifts absorption onset and activates previously forbidden optical transitions via local symmetry breaking.
Assignments to specific defect sites require structural identification beyond first-principles computation alone.

## Load-Bearing Constraints

### Axiomatic
- Optical transitions obey symmetry and selection rules (forbidden transitions become allowed only with specific symmetry breaking)
- Breaking symmetry redistributes oscillator strength but does not create unique spectral fingerprints

### Measurement
- Experimental spectra average over polymerization degree, stacking faults, grain boundaries, and defect populations
- Without atomic-scale structural probes, peak-to-structure mapping is underdetermined

### Fabrication / Process
- Synthesis produces variable C/N stoichiometry, incomplete polymerization, and residual precursor species
- Metal dopants occupy multiple local environments simultaneously (coordination, oxidation state)
- Sample-to-sample variation in dopant concentration and distribution

### Statistical
- Finite sampling over doping sites and configurations (~10-20 arrangements per dopant)
- Rare but optically dominant coordination environments may be absent from model set

### Computational
- PBE underestimates gaps by ~1 eV (affects absolute transition energies, less so relative trends)
- Oscillator strengths sensitive to functional choice and k-point sampling
- Supercell size (72-108 atoms) limits dopant separation and long-range order modeling
- Calculated dielectric response is for a specific structural model, not "the material"

## Primary Limiting Factor

**Structural model non-uniqueness.**  
Multiple doping sites, stacking variants, and defect arrangements produce absorption onsets within 0.2-0.3 eV of each other.
Cannot assign experimental peaks to computed structures without independent structural validation.

## What This Rules Out

- One-to-one peak assignments to specific dopant sites based on computation alone
- Treating computed absorption spectrum as synthesis-independent material property
- Quantitative prediction of experimental transition energies (PBE error ~1 eV)

## What Remains Non-Identifiable

- Which microscopic motif (or ensemble of motifs) dominates measured spectra
- Dopant coordination number and oxidation state without X-ray absorption spectroscopy
- Whether observed spectral shifts arise from electronic structure changes vs. morphology/disorder effects
- Contributions from edge states, grain boundaries, and structural defects

## Partial Disambiguation

- Broader configuration sampling with explicit uncertainty quantification
- Higher-level theory (HSE06, GW-BSE) for representative subset of structures
- Structural characterization (EXAFS, XANES) to constrain dopant local environment
- Controlled synthesis varying only dopant concentration (isolate electronic vs. structural contributions)
- Optical measurements on single-crystal or epitaxial samples (reduce ensemble averaging)

## Methods Referenced

- [DFT (PBE)](/reading-ledger/#dft-pbe)
- [DFT (hybrid functionals)](/reading-ledger/#dft-hse06)
- [Optical response from electronic structure](/reading-ledger/#optics-from-dft)
- [Configuration sampling](/reading-ledger/#config-sampling)

**Related constraints**: [Alloy sampling](/constraints/alloy-sampling/) (similar finite sampling and ensemble issues)

[Back to Constraints Index](/constraints/) | [Full Case Study](/case-studies/gcn-optical-transitions/)