---
layout: page
title: "Constraints: Alloy Configuration Sampling"
permalink: /constraints/alloy-sampling/
---

**Full case study**: [/case-studies/alloy-sampling](/case-studies/alloy-sampling/)

## Observable

Band gaps and electronic structure computed for ~50 Cu₂Ge(S₁₋ₓSeₓ)₃ configurations sampled across compositions x = 0 to 1 in periodic supercells.

## Claim

Computed band-gap vs. composition trends are consistent with Boltzmann-weighted ensemble behavior. Single-configuration properties do not represent the material—thermal averaging required.

---

## Load-Bearing Constraints

### Axiomatic
- Composition discards atomic arrangement information (many configs per stoichiometry)
- At synthesis temperatures, k_B T ~ ΔE_config (multiple arrangements thermally accessible)

### Measurement
- Experimental spectra average over grain boundaries, defects, configuration distributions
- No single-structure probe available

### Fabrication
- Growth conditions can lock in non-equilibrium configurations (not sampled here)
- Impurity content varies across synthesis batches

### Statistical
- Sampled ~50 from >10⁶ combinatorially possible arrangements
- Band-gap spread at fixed composition: up to 0.3 eV within sampled set
- Rare motifs with high optical weight may be absent

### Computational
- PBE: underestimates absolute gaps by ~1 eV (affects calibration, not relative trends)
- Supercell size: 48-96 atoms (limits configuration diversity)
- Convergence varies with local atomic order

---

## Primary Limiting Factor

**Finite sampling of configuration space.**

~50 structures cannot represent full ensemble. Conclusions hold only for sampled model class under stated assumptions.

---

## What This Ruled Out

- Treating any single structure as representative of bulk behavior
- Attributing band-gap shifts to composition alone (configuration entropy matters)

---

## What Remains Non-Identifiable

- Actual configuration distribution in synthesized samples (growth-condition-dependent)
- Relative contributions: composition vs. local order vs. impurities in experimental spectra
- Quantitative gap values (PBE systematic error limits experimental comparison)

---

## What Would Help

- Expand sampling (cluster expansion, active learning, Monte Carlo at synthesis T)
- Local-order probes (EXAFS, pair distribution function analysis)
- Higher-level theory (HSE06, GW) for subset of representative configurations
- Synthesis-protocol-specific sampling with known temperature/pressure history

---

## Methods Referenced

- [Configuration sampling](/reading-ledger/#config-sampling)
- [DFT-PBE](/reading-ledger/#dft-pbe)
- [DFT-HSE06](/reading-ledger/#dft-hse06)

**Related constraints**: [g-C₃N₄ optical](/constraints/gcn-optical-transitions/) (similar structural sampling limitations)

---

**Analysis date**: Spring 2024  
**My experience**: First computational materials project, learning DFT and thermodynamic sampling from scratch

This was my first project where I realized composition ≠ structure. I initially thought "pick one structure per composition" was fine. It's not—when configurational entropy competes with electronic energy, you need ensemble thinking. The 50-structure sample size was pragmatic (what we could compute) not rigorous (what we needed for convergence).

---

[Back to Constraints](/constraints/) | [Full Case Study](/case-studies/alloy-sampling/)