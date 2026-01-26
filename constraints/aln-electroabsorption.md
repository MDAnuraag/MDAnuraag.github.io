---
layout: page
title: "Constraints: AlN Electroabsorption"
permalink: /constraints/aln-electroabsorption/
---

**Full case study**: [/case-studies/aln-electroabsorption](/case-studies/aln-electroabsorption/)

## Observable

Field-dependent UV transmission changes in PEALD AlN thin films (~100 nm), measured as spatially averaged spectra under applied bias up to ~200 MV/m.

## Claim

Observed modulation near 282 nm is consistent with defect-mediated absorption. Crystalline electro-optic, free-carrier, and interference mechanisms ruled out by structural and spectral constraints.

---

## Load-Bearing Constraints

### Axiomatic
- Multiple mechanisms produce field-dependent UV absorption (magnitude alone insufficient)
- Symmetry and field geometry restrict allowed electro-optic responses

### Measurement
- UV-Vis: transmission averages over film depth (~200 nm penetration, no defect depth resolution)
- XRD: predominantly amorphous structure (no crystalline peaks above detection limit)
- AFM: surface roughness ~5 nm RMS (field penetration approximately uniform)
- No time-domain data (cannot separate trapping, thermal, electronic response)

### Fabrication
- PEALD at 250°C introduces N-vacancies and O-substitution (literature-confirmed)
- Film-substrate interface quality unknown (could contribute)
- Thickness variation <5% across sample (verified)

### Statistical
- Reversibility confirmed over 10+ cycles (rules out permanent changes)
- Single growth condition tested (limits mechanistic generalization)

### Computational
- PBE defect energies have ±0.5 eV uncertainty (insufficient for quantitative level assignment)
- Cannot distinguish N-vacancy vs. O-substitution vs. Al-interstitial from computation alone

---

## Primary Limiting Factor

**Spatial averaging in optical measurement.**

Transmission integrates over 200 nm penetration depth. Cannot resolve whether defects are surface-localized, bulk-distributed, or interface-concentrated.

---

## What This Ruled Out

- Crystalline electro-optic effect (XRD shows amorphous; symmetry incompatible with magnitude)
- Free-carrier absorption (no visible/NIR response; required carrier density unrealistic)
- Bulk AlN Franz-Keldysh (field strength produces <0.1% modulation, observed ~3%)
- Simple interference (wavelength-specific response inconsistent with uniform index change)

---

## What Remains Non-Identifiable

- Specific defect species (N-vacancy, O-substitution, Al-interstitial all produce mid-gap states in this range)
- Defect depth distribution (surface vs. bulk vs. interface)
- Field-ionization vs. Stark-shift contributions (both produce similar spectral shifts)

---

## What Would Help

- Depth-resolved spectroscopy (angle-resolved ellipsometry—not currently accessible)
- Impedance spectroscopy vs. depth (indirect defect profiling via C-V)
- HSE06 calculations (improve defect level accuracy to ~0.2 eV)
- Ultrafast pump-probe (<100 fs resolution separates ionization from coherent shift)
- Varied PEALD conditions (map defect concentration to process parameters)

---

## Methods Referenced

- [UV-Vis spectroscopy](/reading-ledger/#uv-vis)
- [XRD](/reading-ledger/#xrd)
- [AFM](/reading-ledger/#afm)
- [DFT-PBE](/reading-ledger/#dft-pbe)

---

**Analysis date**: Fall 2024 - Winter 2025  
**My experience**: First experimental spectroscopy project, learning defect physics and mechanism disambiguation

This was my first time doing mechanism identification by elimination. The constraint that surprised me most was measurement averaging—I initially thought "depth-averaged signal" meant "representative of the whole film." It doesn't. You lose spatial information irreversibly.

---

[Back to Constraints](/constraints/) | [Full Case Study](/case-studies/aln-electroabsorption/)