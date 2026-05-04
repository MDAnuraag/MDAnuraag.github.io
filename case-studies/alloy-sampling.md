---
layout: page
title: Alloy Configuration Sampling
permalink: /case-studies/alloy-sampling/
redirect_from:
  - /constraints/alloy-sampling/
---

## Problem

Cu$_2$Ge(S$_{1-x}$Se$_x$)$_3$ changes band gap as sulfur is replaced by selenium. The tempting simplification is to treat composition $x$ as the state variable and compute one structure per composition.

That is not enough. For a fixed $x$, many symmetry-inequivalent S/Se arrangements exist on the anion sublattice, and those arrangements can produce different electronic structures.

**Question:** can a band-gap trend versus composition be predicted in a way that is meaningful for synthesis targets?

This was my first computational materials project. The main thing I learned was not a DFT trick; it was that composition is not structure.

---

## Observable

Computed electronic structure and band gaps for sampled Cu$_2$Ge(S$_{1-x}$Se$_x$)$_3$ configurations across $x = 0$ to $1$.

The observable was not “the band gap at composition $x$.” It was a distribution of computed band gaps across a finite set of structural configurations.

---

## Claim

Band-gap trends were consistent with ensemble behavior rather than single-configuration behavior.

A single relaxed structure at fixed $x$ could not represent the material. Configuration sampling and thermal weighting were needed to make the composition trend interpretable.

---

## What I tried

I first tried the naive workflow:

1. choose one configuration for each composition;
2. relax it;
3. compute the band gap;
4. plot gap versus $x$.

The failure was obvious after being asked why that structure should be representative. I had no answer.

The revised workflow was:

1. generate multiple S/Se arrangements per composition;
2. compare relative energies to remove implausible structures;
3. compute band gaps across the sampled set;
4. interpret the trend through an ensemble view rather than a single-structure view.

The thermodynamic anchor was the mixing free energy,

$$
\Delta G_{\mathrm{mix}}(x,T)
= \Delta H_{\mathrm{mix}}(x) - T\Delta S_{\mathrm{mix}}(x),
$$

with configurational entropy treated approximately as

$$
\Delta S_{\mathrm{mix}}
= -k_B\left[x\ln x + (1-x)\ln(1-x)\right].
$$

The sampling was not a full cluster expansion. It was a practical correction to the mistaken assumption that one configuration could stand for the alloy.

---

## Constraint analysis

### Load-bearing constraints

**Axiomatic.** Composition discards atomic arrangement information. Many configurations can share the same stoichiometry.

**Statistical.** The sampled set was small relative to the full combinatorial space. Roughly 50 structures is computationally meaningful, but not a convergence proof.

**Computational.** PBE underestimates absolute gaps. Relative trends are more defensible than absolute band-gap values.

**Experimental.** Measured spectra average over grains, defects, local order, and synthesis history. They do not identify the microscopic configuration distribution.

**Fabrication.** Growth may trap non-equilibrium arrangements. A Boltzmann-weighted ensemble is a model of plausibility, not proof of the synthesized state.

### Primary limiting factor

Finite sampling of configuration space.

The project could show that configuration matters. It could not prove that the sampled ensemble exhausted the relevant configurations.

---

## What worked

At fixed composition, the computed gaps varied by up to about 0.3 eV across sampled configurations. That spread was too large to treat as numerical noise.

The ensemble-averaged trend agreed with collaborator measurements well enough to support the interpretation that band-gap evolution depends on both composition and local arrangement.

The result was useful because it changed the level of claim:

> not “this structure has this band gap,” but “this composition has a distribution of plausible gaps, and the ensemble trend matches experiment.”

---

## What was ruled out

- Treating one configuration as representative of a bulk alloy.
- Attributing band-gap shifts to composition alone.
- Interpreting a clean DFT curve as evidence that configurational uncertainty was solved.

---

## What remained non-identifiable

- The actual configuration distribution in synthesized samples.
- Whether the experimental trend came from composition, local order, impurities, defects, or some mixture of these.
- Whether rare but optically important motifs were missed.
- Absolute band gaps at experimental accuracy without higher-level theory.

---

## What would reduce uncertainty

- Cluster expansion or active-learning sampling.
- Monte Carlo sampling at synthesis-relevant temperatures.
- Convergence checks over sample count, such as 20 → 50 → 100 configurations.
- Local-order probes such as EXAFS or pair-distribution-function analysis.
- HSE06 or GW calibration on a representative subset.

---

## What I learned

Composition is not structure.

That sounds obvious now, but it was not obvious to me then. A formula like Cu$_2$Ge(S$_{1-x}$Se$_x$)$_3$ hides an enormous number of atomic arrangements. If the property depends on local order, then the phrase “the band gap at $x$” is incomplete unless the ensemble has been defined.

The deeper lesson was about stopping rules. More computation is not automatically better. The right question is whether the added configurations reduce the uncertainty relevant to the claim.

---

**Status:** Published, ACS Applied Optical Materials, 2024.  
**Project date:** Spring 2024.  
**Experience level then:** first computational materials project; learning DFT and thermodynamic sampling from scratch.

**Methods:** [Configuration sampling](/reading-ledger/#config-sampling), [DFT-PBE](/reading-ledger/#dft-pbe), [DFT-HSE06](/reading-ledger/#dft-hse06)

**Reference:**  
Ji, S.; Ahn, H.-Y.; Dreger, M.; **Sharma, A.**; Je, M.; Cho, S.-H.; Choi, H. *ACS Applied Optical Materials* **2**(8), 1559–1565 (2024).

[Back to case studies](/case-studies/)