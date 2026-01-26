---
layout: page
title: "Constraints: AlN Electroabsorption"
permalink: /constraints/aln-electroabsorption/
---

**Full case study:** [/case-studies/aln-electroabsorption/](/case-studies/aln-electroabsorption/)

## Observable

Field-dependent UV transmission changes in PEALD AlN thin films (~100 nm),
measured as spatially averaged spectra under applied bias up to ~200 MV/m.

## Claim

Observed modulation near 282 nm is consistent with defect-mediated absorption.
Crystalline electro-optic, free-carrier, and interference mechanisms are ruled out by structural and spectral constraints.

## Load-Bearing Constraints

### Axiomatic
- Multiple mechanisms produce field-dependent UV absorption (magnitude alone insufficient for identification)
- Symmetry and field geometry restrict allowed electro-optic responses

### Measurement
- UV-Vis transmission averages over film depth (no defect depth resolution)
- XRD shows predominantly amorphous structure (no crystalline peaks above detection limit)
- AFM surface roughness ~5 nm RMS (field penetration approximately uniform)
- No time-domain data (cannot separate trapping, thermal relaxation, electronic response)

### Fabrication / Process
- PEALD at 250°C introduces N-vacancies and O-substitution (literature-confirmed for this process)
- Film-substrate interface quality unknown (could contribute to observed response)
- Thickness variation <5% across sample (independently verified)

### Statistical
- Reversibility confirmed over 10+ bias cycles (rules out permanent structural changes)
- Single growth condition tested (limits mechanistic generalization)

### Computational
- PBE-level defect energies have ±0.5 eV uncertainty (insufficient for quantitative level assignment)
- Cannot distinguish N-vacancy vs. O-substitution vs. Al-interstitial from computation alone

## Primary Limiting Factor

**Spatial averaging in optical measurement.**  
Transmission integrates over 200 nm penetration depth. Cannot resolve whether defects are surface-localized, bulk-distributed, or interface-concentrated.

## What This Rules Out

- Crystalline electro-optic effect (XRD shows no crystalline structure; symmetry arguments incompatible with observed magnitude)
- Free-carrier absorption (no visible/NIR response; carrier density required would exceed realistic injection)
- Bulk AlN Franz-Keldysh effect (field strength produces <0.1% modulation, observed is ~3%)
- Simple interference (wavelength-specific response inconsistent with uniform index change)

## What Remains Non-Identifiable

- Specific defect species (N-vacancy, O-substitution, Al-interstitial all produce mid-gap states in this range)
- Defect depth distribution (surface vs. bulk vs. interface localization)
- Field-ionization vs. Stark-shift contributions (both produce similar spectral shifts without ultrafast probes)

## Partial Disambiguation

- Depth-resolved spectroscopy (angle-resolved ellipsometry, though not currently accessible)
- Impedance spectroscopy vs. depth (indirect defect profiling via C-V measurements)
- HSE06 or hybrid functional calculations (improve defect level accuracy to ~0.2 eV)
- Ultrafast pump-probe (<100 fs resolution would separate ionization from coherent shift)
- Varied PEALD conditions (map defect concentration to process parameters)

## Methods Referenced

- [UV–Vis spectroscopy](/reading-ledger/#uv-vis)
- [XRD](/reading-ledger/#xrd)
- [AFM](/reading-ledger/#afm)
- [DFT (PBE)](/reading-ledger/#dft-pbe)

[Back to Constraints Index](/constraints/) | [Full Case Study](/case-studies/aln-electroabsorption/)