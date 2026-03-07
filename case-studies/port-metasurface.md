---
layout: page
title: Port Metasurface — Boundary Diversity & Inverse Reconstruction
permalink: /case-studies/port-metasurface/
---

## Problem

Can a programmable boundary in a mmWave NLoS region make hidden objects *reconstructable*, not just detectable?

The original framing was coverage recovery in container ports (n258 band, 26 GHz).  
But I couldn't validate full-port simulations meaningfully. Small geometry assumptions dominated everything.

So I narrowed the question:

**If I control the boundary condition, how does that change the conditioning of the inverse scattering problem?**

This is my senior thesis. Ongoing.

---

## What I did first (Forward model only)

I built a minimal CST geometry:

- Waveguide source at 26 GHz  
- PEC occluding wall (creates NLoS)  
- Single metallic cylinder (hidden object)  
- PEC "metasurface" boundary  
- Probe plane (4681 field samples)

Cylinder swept across 11 Y-positions (65–115 mm in 5 mm steps).

For each position, I exported the complex field and built a sensing matrix:

$$
A \in \mathbb{R}^{4681 \times 11},
$$

where column $j$ is the magnitude field when the cylinder is at position $j$.

<!--
  IMAGE SUGGESTION 1: CST geometry diagram
  A labelled screenshot or diagram of the simulation domain showing:
  - waveguide source (left wall)
  - PEC occluding wall
  - cylinder at one sweep position
  - boundary region
  - probe plane
  To insert: save as /assets/images/fyp/cst-geometry.png and uncomment below
-->
<!-- ![CST simulation geometry](/assets/images/fyp/cst-geometry.png) -->

Flat boundary baseline:

- $\kappa(A) = 30.02$
- Full rank (11/11)
- 426× overdetermined
- First singular value accounts for 91.9% of variance

At this stage, I had a stable forward model.  
But I still hadn't answered whether boundary geometry actually improves reconstruction.

---

## The pivot (January 2026)

Instead of optimizing coverage, I reframed the system as:

$$
\mathbf{y} = A \mathbf{x} + \text{noise}
$$

- $\mathbf{x}$ = hidden object reflectivity (11 candidate positions)
- $\mathbf{y}$ = measured field at probe
- $A$ = built from CST simulations

Now the question becomes measurable:

- Does changing the boundary reduce $\kappa(A)$?
- Does it reduce leakage in the discrimination matrix?
- Does it improve robustness under noise?

That shift made the project quantifiable.

---

## What the flat boundary baseline shows

### Group structure

The 11 positions separate into two regimes:

**Group A (detectable)** — 75, 85, 95 mm  
Mean probe magnitude ≈ 27 V/m

**Group B (weakly detectable)** — all others  
Mean probe magnitude ≈ 62 V/m

Within-Group-B column correlations: 0.93–0.99.  
That near-degeneracy is the main limitation.

<!--
  IMAGE SUGGESTION 2: Mean |E| vs cylinder Y-position sweep plot
  A line chart with Y-position (mm) on the x-axis and mean probe field magnitude (V/m) on y-axis.
  Shows dips at Group A positions (75, 85, 95 mm) and high values elsewhere.
  This is the most important single plot for communicating the forward model result.
  To insert: export from Python as /assets/images/fyp/field-sweep-flat.png and uncomment below
-->
<!-- ![Probe field magnitude vs cylinder Y-position — flat boundary](/assets/images/fyp/field-sweep-flat.png) -->

---

### Inversion method

I used Tikhonov regularization:

$$
\hat{x} = \arg\min_x \|Ax - y\|^2 + \lambda \|x\|^2
$$

Closed form:

$$
\hat{x} = (A^\top A + \lambda I)^{-1} A^\top y
$$

Implemented via SVD filter form for numerical stability:

$$
\hat{x}
=
\sum_i
\frac{\sigma_i}{\sigma_i^2 + \lambda}
(u_i^\top y)\, v_i
$$

Optimal $\lambda$ from L-curve corner detection:  
$\lambda_{\text{opt}} = 5.67$

<!--
  IMAGE SUGGESTION 3: L-curve plot (flat boundary)
  Log residual norm ||Ax - y|| on x-axis vs log solution norm ||x|| on y-axis.
  Corner marked at λ_opt = 5.67. Classic L-shape should be visible.
  To insert: export from tikhonov_solver.py as /assets/images/fyp/lcurve-flat.png and uncomment below
-->
<!-- ![L-curve for flat boundary — corner at λ=5.67](/assets/images/fyp/lcurve-flat.png) -->

---

### Synthetic ceiling performance

Using 1% Gaussian noise:

- 2750 reconstructions (11 positions × 5 noise levels × 50 trials)
- 100% success rate up to 10% noise
- Confusion matrix perfectly diagonal
- PSF sidelobe ≈ −59.4 dB (1000× suppression below peak)
- Field residual ≈ 0.995% (matches injected noise floor exactly)

<!--
  IMAGE SUGGESTION 4: Confusion matrix heatmap (flat boundary, 5% noise)
  11×11 grid, each cell C[j,k] = success rate when true position is j and reconstruction picks k.
  Perfect result = identity matrix (bright diagonal, dark everywhere else).
  To insert: export from xhat_analysis.py as /assets/images/fyp/confusion-flat.png and uncomment below
-->
<!-- ![Confusion matrix — flat boundary, 5% noise](/assets/images/fyp/confusion-flat.png) -->

Important:  
This is solver-tested-on-its-own-columns performance.  
It establishes the theoretical ceiling, not real deployment performance.

---

## What this baseline actually tells me

- The inverse problem is *not* fundamentally ill-posed.
- $\kappa = 30$ is moderate, not extreme.
- The main weakness is within-Group-B discrimination.
- The Born approximation is valid for this geometry (residual matches noise floor).

So the next step is meaningful:

Does boundary diversity reduce that within-group degeneracy?

---

## Config 6 — Tilted boundary (15° rotation)

The flat boundary assigns all 11 positions into two fixed groups. The detectable set is determined by diffraction geometry, not anything I can control after fabrication. The natural question: does rotating the boundary shift *which* positions are detectable?

Config 6 replaces the flat PEC boundary with a 15° Z-axis rotation. Same domain, same sweep, same mesh.

<!--
  IMAGE SUGGESTION 5: Side-by-side CST geometry — flat vs tilted
  Two small diagrams (or one split image) showing the boundary geometry difference.
  Left: flat boundary. Right: 15° tilted boundary. Label the rotation angle.
  To insert: screenshot from CST, crop and save as /assets/images/fyp/geometry-flat-vs-tilted.png and uncomment below
-->
<!-- ![Flat vs tilted boundary geometry](/assets/images/fyp/geometry-flat-vs-tilted.png) -->

### What changed

The detectable positions shifted completely:

| Group | Flat baseline | Tilted (Config 6) |
|---|---|---|
| A — detectable | 75, 85, 95 mm | 70, 100, 105, 110, 115 mm |
| B — invisible | all others | 65, 75, 80, 85, 90, 95 mm |

This is the key result. The two configurations have *complementary* blind spots.

<!--
  IMAGE SUGGESTION 6: Overlay sweep plot — flat vs tilted
  Same axes as Suggestion 2, but two lines: one for flat boundary, one for tilted.
  Shows the dip pattern shifting to different Y-positions.
  To insert: export from sensing_matrix.py as /assets/images/fyp/field-sweep-overlay.png and uncomment below
-->
<!-- ![Probe field sweep — flat vs tilted boundary overlay](/assets/images/fyp/field-sweep-overlay.png) -->

### SVD comparison

| Metric | Flat | Tilted |
|---|---|---|
| $\kappa(A)$ | 30.02 | 46.38 |
| $\sigma_{\max}$ | 13952 V/m | ~16219 V/m |
| $\sigma_{\min}$ | 465 V/m | ~350 V/m |
| Effective rank | 11/11 | 11/11 |
| $\sigma_1$ variance | 91.9% | ~94.1% |

$\kappa(A_{\text{tilted}}) = 46.38$ is higher than the flat baseline. This is not a problem.  
Higher per-config $\kappa$ is expected when one singular mode dominates more strongly.  
The relevant question is whether the *combined* matrix conditions better — which requires both configs to contribute non-redundant information.

### Inversion results

Tikhonov applied to the tilted sensing matrix:

- $\lambda_{\text{opt}} = 4.01$ (vs 5.67 flat)
- Residual ≈ 1.00% (noise floor)
- PSF sidelobe ≤ −58 dB
- Discrimination min > 0.998
- 2750 trials: 100% success rate across all positions and noise levels (0–10%)
- Confusion matrix: perfectly diagonal

The tilted config reconstructs as cleanly as the flat one — but for a *different* set of positions.

---

## The combined matrix (next step)

The core hypothesis is that combining the two sensing matrices reduces the within-group degeneracy that neither config can resolve alone:

$$
A_{\text{combined}}
=
\begin{bmatrix}
A_{\text{flat}} \\
A_{\text{tilted}} \\
A_{\text{stepped}}
\end{bmatrix}
\in \mathbb{R}^{14043 \times 11}
$$

If this reduces $\kappa(A_{\text{combined}})$ relative to individual configs — and reduces within-Group-B leakage — then boundary diversity is quantifiably improving conditioning.

The metric for this is the leakage reduction in the discrimination matrix:

$$
\text{leakage}_{i,j} = \frac{|\hat{x}[j]|}{|\hat{x}[i]|} = 1 - D_{i,j}
$$

Flat baseline leakage: $< 2 \times 10^{-3}$ (already low per-config).  
The question is whether $A_{\text{combined}}$ reduces the *worst-case* within-group leakage further.

<!--
  IMAGE SUGGESTION 7: Discrimination matrix heatmap — flat baseline
  11×11 heatmap of D[i,j] values. High values (dark) on diagonal = good.
  Low off-diagonal values = low leakage. Shows the within-Group-B near-unity off-diagonal entries.
  To insert: export from xhat_analysis.py as /assets/images/fyp/discrimination-flat.png and uncomment below
-->
<!-- ![Discrimination matrix — flat boundary baseline](/assets/images/fyp/discrimination-flat.png) -->

Config 7 (stepped PEC, ±2 mm Z-offset) is the third configuration. Once that sweep completes, $A_{\text{combined}}$ can be assembled and tested.

---

## What I am not claiming

- That this works in real container ports.
- That fabrication tolerances preserve ideal phase behaviour.
- That this beats active radar solutions.
- That sparse L1 methods are necessary (Tikhonov is already stable for this geometry).

This is a controlled forward-model study. The value is in the conditioning framework, not the specific numbers.

---

## What I have learned so far

**Environment uncertainty can invalidate optimization.**  
I initially tried port-level simulation. It became clear that small geometry assumptions dominate outcomes at this scale.

**Inverse framing forces measurable claims.**  
Instead of "coverage improved," I can report $\kappa(A)$, leakage reduction, and noise tolerance curves.

**Well-conditioned problems don't need exotic solvers.**  
With $\kappa = 30$, Tikhonov is sufficient. The interesting question is geometry, not algorithm complexity.

**Synthetic ceiling performance is necessary but not sufficient.**  
100% success rate on own-columns tests establishes the upper bound.  
Whether that bound degrades under config mismatch is the open question.

**Higher per-config $\kappa$ does not mean worse performance.**  
$\kappa(A_{\text{tilted}}) > \kappa(A_{\text{flat}})$, yet reconstruction quality is identical.  
The relevant quantity is the null space structure, not the raw condition number.

---

## Status

- [x] Flat boundary analysis complete
- [x] Tikhonov solver implemented and validated
- [x] Robustness analysis complete (2750 trials)
- [x] Discrimination baseline saved
- [x] Config 6 (tilted boundary) — sensing matrix, inversion, robustness complete
- [ ] Config 7 (stepped boundary) — CST sweeps in progress
- [ ] $A_{\text{combined}}$ construction and $\kappa$ comparison
- [ ] Cross-config reconstruction test
- [ ] Fabrication (Week 8–10, contingent on simulation results)

---

**Constraint analysis**: [/constraints/port-metasurface](/constraints/port-metasurface/)  
**Methods**: [EM simulation](/reading-ledger/#em-sim), [Inverse problems](/reading-ledger/#inverse-problems), [Regularization](/reading-ledger/#regularization)

**Project date**: Fall 2025 – Spring 2026 (ongoing)  
**Experience level**: First RF/EM system, first inverse scattering pipeline. Learning where simulation is sufficient, where measurement is required, and how conditioning—not aesthetics—determines reconstruction quality.