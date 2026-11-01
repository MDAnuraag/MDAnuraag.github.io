---
layout: page
title: g-C₃N₄ Optical Transitions
permalink: /work/gcn-optical-transitions/
redirect_from:
  - /case-studies/gcn-optical-transitions/
  - /constraints/gcn-optical-transitions/
---

## Overview

Computed optical spectra of Pt-, Pd- and Co-doped g-C$_3$N$_4$, and what they say about visible absorption enhancement.

---

## Setup

**Material:** metal-doped g-C$_3$N$_4$  
**Dopants studied:** Pt, Pd, Co  
**Signal:** computed dielectric response / optical absorption  
**Model:** DFT electronic structure and optical transitions

Forward map:

$$
\text{structure}
\rightarrow
\text{electronic states}
\rightarrow
\text{optical response}
$$

Several structures can lead to the same optical response, so the inverse direction has more than one solution.

---

## Results

Metal dopants changed states near relevant energies and redistributed oscillator strength.

Optical intensity depends on transition matrix elements as well as band energies:

$$
\varepsilon_2(\omega)
\propto
\sum_{v,c,\mathbf{k}}
\left|
\langle \psi_c | \mathbf{r} | \psi_v \rangle
\right|^2
\delta(\varepsilon_c-\varepsilon_v-\hbar\omega)
$$

Stable interpretation:

```text
local symmetry breaking
metal-character near relevant states
stronger lower-energy optical transitions
oscillator-strength redistribution
```

---

## Open questions

The spectrum leaves the dopant site open. Variables that remain:

```text
dopant site
local distortion
stacking variation
vacancies
coordination environment
dopant clustering
polymerization disorder
```

A computed spectrum supports a mechanism class. A microscopic assignment takes more.

---

## Computational limits

```text
PBE underestimates band gaps
finite cells restrict disorder sampling
independent-particle spectra omit excitonic effects
only finite dopant configurations tested
real g-C3N4 is structurally disordered
```

More DFT generates more plausible structures, which widens the set of candidates.

---

## Summary

Established: metal doping can plausibly enhance visible absorption through symmetry breaking and oscillator-strength redistribution.

Open: the dopant site, the microscopic structure, and the peak-to-structure assignment.

---

## Status

Ongoing project. No manuscript yet.

**Reading ledger:**  
[DFT — PBE](/reading-ledger/#dft-pbe)  
[DFT — hybrid functionals](/reading-ledger/#dft-hse06)  
[Optical response from DFT](/reading-ledger/#optics-from-dft)  
[Configuration sampling](/reading-ledger/#config-sampling)

[Back to work](/work/)
