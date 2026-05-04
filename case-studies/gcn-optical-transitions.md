---
layout: page
title: g-C₃N₄ Optical Transitions
permalink: /case-studies/gcn-optical-transitions/
redirect_from:
  - /constraints/gcn-optical-transitions/
---

## Problem

Metal atoms such as Pt, Pd, and Co can shift graphitic carbon nitride optical absorption into the visible range.

**Question:** what mechanism enables the visible absorption, and how much structural information can computed optical spectra actually determine?

This was my second computational project. The important change from my first project was that I stopped asking only whether the computed spectrum looked reasonable. I started asking what the spectrum could and could not identify.

---

## Observable

Computed band structures, densities of states, dielectric functions, and oscillator strengths for doped g-C$_3$N$_4$ structural models.

The observable was a simulated optical response from specific periodic configurations, not a direct measurement of the real synthesized material.

---

## Claim

Metal doping enhances visible absorption mainly by symmetry breaking and redistribution of oscillator strength.

That mechanism is more robust than any specific assignment of a peak to one dopant site. Optical spectra constrain families of plausible structures; they do not uniquely identify microscopic motifs.

---

## What I tried

The first version of the project was too direct:

1. build doped structures;
2. run DFT;
3. compute optical spectra;
4. compare absorption onsets;
5. infer which structure is responsible.

That failed conceptually because many structures gave similar spectra.

I reframed the calculation as a forward map:

$$
\text{structure}
\rightarrow
\text{electronic states}
\rightarrow
\text{optical response}.
$$

The inverse map is not unique. A spectrum is a projection of electronic structure, not a fingerprint of atomic structure.

---

## Mechanism that survived

The robust result was symmetry breaking.

At the independent-particle level, optical intensity depends on transition matrix elements, not eigenvalues alone:

$$
\varepsilon_2(\omega)
\propto
\sum_{v,c,\mathbf{k}}
\left|
\langle \psi_c | \mathbf{r} | \psi_v \rangle
\right|^2
\delta(\varepsilon_c - \varepsilon_v - \hbar\omega).
$$

Metal dopants can:

- break local symmetry;
- introduce metal $d$-character near the band edges;
- activate transitions that were weak or forbidden in the pristine structure;
- redistribute oscillator strength into lower-energy transitions.

That explanation survived across multiple dopants and sites better than any exact peak assignment.

---

## Constraint analysis

### Load-bearing constraints

**Axiomatic.** Optical selection rules depend on symmetry. Breaking symmetry can activate transitions without uniquely identifying the structural perturbation that caused it.

**Structural.** Multiple doping sites, stacking variants, vacancies, terminations, and local distortions are plausible in real g-C$_3$N$_4$.

**Statistical.** Sampling roughly 10–20 arrangements per dopant explores only a small part of structural space.

**Computational.** PBE underestimates band gaps. Qualitative transition mechanisms are more reliable than quantitative peak positions.

**Experimental.** Real g-C$_3$N$_4$ spectra average over polymerization disorder, grain boundaries, stacking disorder, dopant environments, and defects.

### Primary limiting factor

Structural model non-uniqueness.

Several plausible microscopic structures can produce similar absorption onsets and oscillator-strength redistribution.

---

## What was ruled out

- Treating one computed dopant site as the experimentally identified site.
- Using optical peak agreement alone as structural proof.
- Treating the computed spectrum as synthesis-independent.
- Claiming quantitative transition energies from PBE without calibration.

---

## What remained non-identifiable

- Which dopant site dominates real samples.
- Whether multiple sites coexist.
- Dopant oxidation state and coordination environment.
- Whether spectral shifts arise from dopant electronic structure, morphology, disorder, or defect states.
- How much real disorder changes the calculated spectra beyond broadening.

---

## What would reduce uncertainty

- EXAFS or XANES to constrain local dopant environment.
- HSE06 or GW–BSE calculations on a small calibrated subset.
- Broader configuration sampling with uncertainty estimates.
- Controlled synthesis where dopant concentration is varied independently.
- Optical measurements on better-ordered samples to reduce ensemble averaging.

---

## What I learned

Qualitative mechanisms can be robust even when quantitative spectra are not.

The symmetry-breaking explanation is useful because it does not require exact confidence in one atomic model. But assigning a specific peak to a specific site would require evidence that the optical calculation alone does not provide.

More DFT would not automatically fix that. Without structural constraints, it would mostly produce more admissible structures.

---

**Status:** Ongoing project; no manuscript yet.  
**Project date:** Spring 2024 – present.  
**Experience level then:** second computational project; learning optical response and excited-state limitations.

**Methods:** [DFT-PBE](/reading-ledger/#dft-pbe), [DFT-HSE06](/reading-ledger/#dft-hse06), [Optical response from DFT](/reading-ledger/#optics-from-dft), [Configuration sampling](/reading-ledger/#config-sampling)

[Back to case studies](/case-studies/)