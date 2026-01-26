---
layout: page
title: Reading Ledger
permalink: /reading-ledger/
---

This ledger tracks **methods**, not papers.

Each entry records:

- what a method reliably constrains,
- what it cannot distinguish,
- assumptions incurred,
- dominant failure modes,
- conditions under which conclusions remain valid.

No method listed here becomes more trustworthy through agreement with another method
unless their failure modes are independent.

Project-specific application appears in **[/constraints](/constraints/)**.

## Contents

- [DFT (PBE)](#dft-pbe)
- [DFT (hybrid functionals)](#dft-hse06)
- [Optical response from electronic structure](#optics-from-dft)
- [RCWA](#rcwa)
- [XRD](#xrd)
- [UV–Vis spectroscopy](#uv-vis)
- [AFM](#afm)
- [Dispersion models](#dispersion)
- [Identifiability and uncertainty](#identifiability)
- [Configuration sampling](#config-sampling)
- [EM simulation in deployment settings](#em-sim)

---

## DFT (PBE) {#dft-pbe}

**Reliably constrains**

- Relative trends across closely related structures under controlled convergence.
- Qualitative bonding and orbital character changes.

**Does not constrain**

- Absolute band gaps, defect levels, or optical onsets.
- Unique structural mechanisms under disorder.

**Failure modes**

- Self-interaction–driven delocalisation.
- Error cancellation masquerading as agreement.
- Over-interpretation of small energy differences:

$$
\Delta E \lesssim k_{\mathrm{B}}T \;\;\text{treated as significant}.
$$

**Trust boundary**

- Trend-level inference only.
- Conclusions must survive convergence, smearing, and parameter sensitivity checks.

---

## DFT (hybrid functionals) {#dft-hse06}

**Reliably constrains**

- Band gaps and band-edge placement more accurately than semi-local DFT.
- Localization trends in many defect systems.

**Does not constrain**

- Excitonic structure or optical spectra.
- Mechanisms when the structural model is incorrect.

**Failure modes**

- Finite-size artefacts hidden by computational cost.
- False confidence from improved numbers on wrong structures.

**Trust boundary**

- Only within a validated structural model class
  and an explicit finite-size rationale.

---

## Optical response from electronic structure {#optics-from-dft}

**Reliably constrains**

- Qualitative spectral trends under symmetry breaking or structural perturbation.

**Does not constrain**

- Unique microscopic mechanisms.
- Feature assignment under disorder or missing many-body effects.

**Failure modes**

- Treating effective dielectric functions as mechanistic truth.
- Ignoring structural degeneracy.

Optical intensity depends on transition matrix elements,

$$
I(\omega) \propto \left|\langle \psi_c | \mathbf{r} | \psi_v \rangle\right|^2,
$$

not eigenvalues alone.

**Trust boundary**

- Only when structural model space is tightly constrained.

---

## RCWA {#rcwa}

**Reliably constrains**

- Forward spectral sensitivity to geometry under periodic assumptions.

**Does not constrain**

- Unique geometry in inverse fits without identifiability analysis.

**Failure modes**

- Intrinsic inverse non-uniqueness.
- Effective dispersion absorbing modelling error.
- Breakdown under non-periodicity.

**Trust boundary**

- Only with convergence testing and explicit degeneracy analysis.

---

## XRD {#xrd}

**Reliably constrains**

- Presence of crystalline order and gross phase changes.

**Does not constrain**

- Amorphous structure beyond detection limits.
- Defect distributions in thin films.

**Failure modes**

- Substrate dominance.
- Misinterpreting peak absence as proof.

**Trust boundary**

- Only when detection limits and geometry are explicit.

---

## UV–Vis spectroscopy {#uv-vis}

**Reliably constrains**

- Relative spectral changes under controlled perturbations.

**Does not constrain**

- Depth-localised mechanisms.
- Unique absorption pathways.

**Failure modes**

- Baseline drift and scattering artefacts.
- Depth averaging masking origin.

**Trust boundary**

- Only with reproducibility and complementary probes.

---

## AFM {#afm}

**Reliably constrains**

- Surface morphology and roughness statistics.

**Does not constrain**

- Bulk structure or full-sample representativity.

**Failure modes**

- Limited field of view.
- Tip convolution artefacts.

**Trust boundary**

- Only with multi-region sampling and uncertainty reporting.

---

## Dispersion models {#dispersion}

**Reliably constrains**

- Compact forward descriptions for interpolation.

**Does not constrain**

- Physical mechanism uniquely.

**Failure modes**

- Model non-uniqueness hidden by over-parameterisation:

$$
N_{\text{params}} \uparrow \;\Rightarrow\; \text{fit quality} \uparrow,\;
\text{identifiability} \downarrow.
$$

**Trust boundary**

- Only with model comparison and uncertainty propagation.

---

## Identifiability and uncertainty {#identifiability}

**Reliably constrains**

- Which parameters are supported by the data.
- Sensitivity to priors and perturbations.

**Does not constrain**

- Truth of the model class itself.

**Failure modes**

- Confusing optimisation with identifiability.
- Ignoring covariance and multimodality.

Identifiability requires

$$
\frac{\partial O}{\partial \theta_i} \neq 0
\quad\text{and}\quad
\mathrm{cov}(\theta_i,\theta_j)\ \text{controlled}.
$$

**Trust boundary**

- Only with explicit failure cases reported.

---

## Configuration sampling {#config-sampling}

**Reliably constrains**

- Mechanisms within the sampled configuration class.

**Does not constrain**

- Rare or unsampled motifs.

**Failure modes**

- Biased sampling.
- Finite-size artefacts.

Ensemble observables obey

$$
\langle O \rangle = \sum_i O_i\, p_i,
\qquad
p_i \propto e^{-E_i/(k_{\mathrm{B}}T)}.
$$

**Trust boundary**

- Only when sampling rationale matches the target property.

---

## EM simulation in deployment settings {#em-sim}

**Reliably constrains**

- Forward trends under assumed environments.

**Does not constrain**

- Real-world performance under scene variability.

**Failure modes**

- Environment mismatch dominating error.
- Overfitting to idealised conditions.

Unlike RCWA, environment uncertainty dominates error rather than numerical convergence.

**Trust boundary**

- Only with hardware validation across diverse scenes.
