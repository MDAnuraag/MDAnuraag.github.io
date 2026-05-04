---
layout: interactive
status: ongoing
title: Port Metasurface — Boundary Diversity & Inverse Reconstruction
permalink: /case-studies/port-metasurface/
redirect_from:
  - /constraints/port-metasurface/
---

## Problem

The project began as a senior thesis question about passive mmWave metasurfaces for non-line-of-sight coverage in container-port environments.

That framing was too broad. Full-port simulation results were dominated by geometry assumptions: container placement, crane structure, blockage state, and ground reflection could change the channel more than the boundary design itself.

So I narrowed the question.

**Question:** can controlled boundary diversity improve the identifiability of a hidden object in a simplified NLoS inverse-scattering geometry?

The project is no longer claiming deployable port coverage. It is testing whether boundary geometry changes the conditioning and discrimination structure of the sensing operator.

---

## Observable

At the current stage, the observables are matrix properties derived from simulation, not deployment metrics.

The measurable quantities are:

- singular-value spectrum;
- condition number $\kappa(A)$;
- column correlations;
- leakage and discrimination matrices;
- reconstruction stability under controlled noise.

Bench measurements and deployment metrics are outside the current evidence base.

---

## Claim

Boundary geometry may change the identifiability of the inverse scattering problem.

The bounded version of the claim is:

> If stacking multiple boundary configurations reduces worst-case leakage or improves the conditioning of the sensing matrix, then boundary diversity improves identifiability within the controlled simulation geometry.

This does not imply that a passive metasurface improves real container-port coverage.

---

## Forward model

I built a minimal CST geometry:

- waveguide source at 26 GHz;
- PEC occluding wall creating the NLoS region;
- hidden metallic cylinder;
- PEC boundary panel as a metasurface placeholder;
- probe plane sampling the scattered field.

The cylinder position was swept across 11 candidate locations. Each CST simulation produced one column of a sensing matrix,

$$
A \in \mathbb{R}^{4681 \times 11}.
$$

The inverse model is

$$
\mathbf{y} = A\mathbf{x} + \boldsymbol{\varepsilon},
$$

where $\mathbf{x}$ is a sparse object-position vector and $\mathbf{y}$ is the probe-plane field magnitude.

This is a discrete, low-dimensional inverse problem. It is not continuous imaging.

---

## What changed in the project

The original question was qualitative:

> does the boundary improve coverage?

That question was too vulnerable to geometry assumptions.

The revised question is measurable:

> does the boundary change the sensing matrix in a way that reduces ambiguity?

That shift made the project tractable. Instead of judging pictures of fields, I can report conditioning, leakage, and reconstruction robustness.

---

## Interactive diagnostic

The tool below is a diagnostic visualization for the sensing-matrix idea. It shows how different boundary configurations can change singular values, correlations, and Tikhonov reconstruction behavior.

Read the combined-configuration tab as a hypothesis/diagnostic view, not as a final deployment result. The controlled simulation pipeline is still being completed.

<div class="tool-embed">
<div class="tool-label">Interactive — sensing matrix conditioning</div>
{% include sensing-matrix-viz.html %}
</div>

---

## Constraint analysis

### Load-bearing constraints

**Physical.** Passive structures obey reciprocity and energy conservation. They can redirect energy, not create power.

**Modeling.** The current geometry contains one wall, one hidden cylinder, one boundary panel, and one probe plane. The model uses PEC boundaries and does not yet include real metasurface unit-cell physics.

**Linearization.** The reconstruction assumes a linear sensing model. That is defensible only within the controlled weak-scattering setup used to build $A$.

**Numerical.** The flat matrix is full rank and moderately conditioned. The dominant issue is not numerical collapse; it is column similarity between candidate positions.

**Environmental.** Real ports are non-repeatable. Different container configurations can explain similar link improvements, making deployment attribution hard.

**Fabrication.** Real surfaces introduce phase quantization, loss, angular sensitivity, and tolerance errors. These are not yet included.

### Primary limiting factor

Structural degeneracy in the sensing matrix.

Some object positions produce similar probe-plane responses, so leakage between candidate positions is the main failure mode. The goal of boundary diversity is to make different configurations have different blind spots.

---

## What has been ruled out

- Treating simulated coverage gain as deployment evidence.
- Claiming improvement without measuring conditioning and leakage.
- Assuming that a more complex solver is the right next step.
- Reading per-configuration condition number as a direct reconstruction-quality score.
- Optimizing boundary geometry before checking whether the inverse problem becomes more identifiable.

---

## What remains unresolved

- Whether the final combined matrix reduces worst-case leakage across all positions.
- Whether the stepped configuration adds information not already present in flat and tilted configurations.
- Sensitivity of conditioning to boundary angle and boundary discretization.
- Cross-configuration reconstruction: training on one geometry and testing on another.
- Whether ideal PEC results survive realistic metasurface loss and phase quantization.
- Whether any controlled result transfers to a port-like environment.

---

## What would reduce uncertainty

- Complete the stepped-boundary CST sweep.
- Construct the stacked matrix

$$
A_{\mathrm{combined}} =
\begin{bmatrix}
A_{\mathrm{flat}} \\
A_{\mathrm{tilted}} \\
A_{\mathrm{stepped}}
\end{bmatrix}.
$$

- Compare $\kappa(A_{\mathrm{combined}})$ against the individual configurations.
- Compare discrimination matrices element-wise.
- Measure worst-case leakage reduction.
- Run cross-configuration tests.
- Replace ideal PEC with a simple fabricated or physically parameterized boundary model.

---

## What I learned

The hard part was not initially fabrication accuracy or EM simulation fidelity.

The hard part was identifiability.

Even with perfect simulated fields, an improvement claim is weak unless the measurement operator changes in a way that can be measured: lower ambiguity, better-conditioned modes, lower leakage, or more stable reconstruction.

That is the reason this project shifted from metasurface coverage to operator-centric inverse modeling.

---

## Status

- [x] Flat boundary forward model
- [x] Sensing matrix construction
- [x] Tikhonov inversion
- [x] AWGN robustness testing
- [x] Tilted boundary configuration
- [ ] Stepped boundary configuration
- [ ] Full combined matrix analysis
- [ ] Cross-configuration reconstruction
- [ ] Physical boundary validation, if simulations justify it

---

**Status:** Senior thesis in progress, Fall 2025 – Spring 2026.  
**Claim level:** controlled forward-model evidence only; no deployment claim.

**Methods:** [EM simulation](/reading-ledger/#em-sim), [Inverse problems](/reading-ledger/#inverse-problems), [Sensing matrices](/reading-ledger/#sensing-matrices)

[Back to case studies](/case-studies/)