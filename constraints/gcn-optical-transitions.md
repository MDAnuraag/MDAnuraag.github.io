---
layout: page
title: "Constraints: g-C₃N₄ Optical Transitions"
permalink: /constraints/gcn-optical-transitions/
---

**Full case study**: [/case-studies/gcn-optical-transitions](/case-studies/gcn-optical-transitions/)

## Observable

Electronic structure and optical response (band structure, DOS, dielectric function, oscillator strengths) computed for g-C₃N₄ with transition-metal doping (Pt, Pd, Co) in periodic models.

## Claim

Metal doping shifts absorption onset and activates forbidden optical transitions via symmetry breaking. Assignments to specific defect sites require structural identification beyond computation alone.

---

## Load-Bearing Constraints

### [Axiomatic]
- Optical transitions obey symmetry and selection rules
- Breaking symmetry redistributes oscillator strength but doesn't create unique spectral fingerprints

### [Measurement]
- Experimental spectra average over polymerization, stacking, grain boundaries, defects
- No atomic-scale structural probes available

### [Fabrication]
- Synthesis: variable C/N stoichiometry, incomplete polymerization, residual precursors
- Metal dopants: multiple local environments (coordination, oxidation state)
- Sample-to-sample variation in dopant concentration and distribution

### [Statistical]
- Finite sampling: ~10-20 arrangements per dopant
- Rare but optically dominant coordination environments may be absent

### [Computational]
- PBE: underestimates gaps by ~1 eV (affects absolute energies, less so relative trends)
- Oscillator strengths: sensitive to functional choice and k-point sampling
- Supercell size: 72-108 atoms (limits dopant separation modeling)
- Calculated response is for specific structural model, not "the material"

---

## Primary Limiting Factor

**Structural model non-uniqueness.**

Multiple doping sites, stacking variants, and defect arrangements produce absorption onsets within 0.2-0.3 eV. Cannot assign experimental peaks to computed structures without independent structural validation.

---

## What This Ruled Out

- One-to-one peak assignments to specific dopant sites (computation alone insufficient)
- Treating computed spectrum as synthesis-independent property
- Quantitative experimental transition energy prediction (PBE error ~1 eV)

---

## What Remains Non-Identifiable

- Which microscopic motif (or ensemble) dominates measured spectra
- Dopant coordination and oxidation state (need X-ray absorption spectroscopy)
- Whether spectral shifts arise from electronic structure vs. morphology/disorder
- Contributions from edge states, grain boundaries, structural defects

---

## What Would Help

- Broader configuration sampling with uncertainty quantification
- Higher-level theory (HSE06, GW-BSE) for representative subset
- Structural characterization (EXAFS, XANES) to constrain local environment
- Controlled synthesis varying only dopant concentration
- Optical measurements on single-crystal or epitaxial samples (reduce ensemble averaging)

---

## Methods Referenced

- [DFT-PBE](/reading-ledger/#dft-pbe)
- [DFT-HSE06](/reading-ledger/#dft-hse06)
- [Optical response from DFT](/reading-ledger/#optics-from-dft)
- [Configuration sampling](/reading-ledger/#config-sampling)

**Related constraints**: [Alloy sampling](/constraints/alloy-sampling/) (similar finite sampling issues)

---

**Analysis date**: Spring 2024 - Present  
**My experience**: Second computational project, learning excited-state modeling and optical response from DFT

This project taught me the difference between qualitative mechanisms (symmetry breaking—robust) and quantitative predictions (specific peak positions—not robust with PBE). I initially thought more DFT would solve the assignment problem. It doesn't—you need structural information from experiment.

---

[Back to Constraints](/constraints/) | [Full Case Study](/case-studies/gcn-optical-transitions/)