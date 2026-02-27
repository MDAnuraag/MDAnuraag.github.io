---
layout: page
title: Port Metasurface — Boundary Diversity & Inverse Reconstruction
permalink: /case-studies/port-metasurface/
---

## Problem

Can a programmable boundary in a mmWave NLoS region make hidden objects *reconstructable*, not just detectable?

The original framing was coverage recovery in container ports (n258 band, 26 GHz).  
But I couldn’t validate full-port simulations meaningfully. Small geometry assumptions dominated everything.

So I narrowed the question:

**If I control the boundary condition, how does that change the conditioning of the inverse scattering problem?**

This is my senior thesis. Ongoing.

---

## What I did first (Forward model only)

I built a minimal CST geometry:

- Waveguide source at 26 GHz  
- PEC occluding wall (creates NLoS)  
- Single metallic cylinder (hidden object)  
- PEC “metasurface” boundary  
- Probe plane (4681 field samples)

Cylinder swept across 11 Y-positions (65–115 mm in 5 mm steps).

For each position, I exported the complex field and built a sensing matrix:

$$
A \in \mathbb{R}^{4681 \times 11},
$$

where column $j$ is the magnitude field when the cylinder is at position $j$.

Flat boundary baseline:

- $\kappa(A) = 30.02$
- Full rank (11/11)
- 426× overdetermined
- First singular value accounts for 91.9% of variance

At this stage, I had a stable forward model.  
But I still hadn’t answered whether boundary geometry actually improves reconstruction.

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

**Group A (detectable)**  
75, 85, 95 mm  
Mean probe magnitude ≈ 27 V/m  

**Group B (weakly detectable)**  
All others  
Mean probe magnitude ≈ 62 V/m  

Within-Group-B column correlations: 0.93–0.99  
That near-degeneracy is the main limitation.

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

Implemented via SVD filter form:

$$
\hat{x}
=
\sum_i
\frac{\sigma_i}{\sigma_i^2 + \lambda}
(u_i^\top y)\, v_i
$$

Optimal $\lambda$ from L-curve:  
$\lambda_{\text{opt}} = 5.67$

---

### Synthetic ceiling performance

Using 1% Gaussian noise:

- 2750 reconstructions (11 positions × 5 noise levels × 50 trials)
- 100% success rate up to 10% noise
- Confusion matrix perfectly diagonal
- PSF sidelobe ≈ −59 dB
- Residual ≈ 0.995% (matches injected noise)

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

## What I am running now (Week 4)

Two new boundary configurations (see full technical handoff :contentReference[oaicite:1]{index=1}):

1. **Tilted PEC** (15° rotation)
2. **Stepped PEC** (±2 mm Z-split offset)

For each:

- Build $A_{\text{tilted}}$, $A_{\text{stepped}}$
- Compute $\kappa$
- Compute discrimination matrices
- Compare leakage:

$$
\text{leakage}_{i,j}
=
\frac{|x_j|}{|x_i|}
=
1 - D_{i,j}
$$

The flat baseline leakage is < $2 \times 10^{-3}$.

If combined matrices

$$
A_{\text{combined}}
=
\begin{bmatrix}
A_{\text{flat}} \\
A_{\text{tilted}} \\
A_{\text{stepped}}
\end{bmatrix}
$$

reduce $\kappa$ and reduce within-Group-B leakage, then boundary diversity is quantifiably improving conditioning.

If not, then boundary diversity is less useful than I expected.

Either result is publishable in a thesis context.

---

## What I am not claiming

- That this works in real container ports.
- That fabrication tolerances preserve ideal phase behavior.
- That this beats active radar solutions.
- That sparse L1 methods are necessary (Tikhonov is already stable).

This is still a controlled forward-model study.

---

## What I have learned so far

1. **Environment uncertainty can invalidate optimization.**  
   I initially tried port-level simulation. It became clear small geometry assumptions dominate outcomes.

2. **Inverse framing forces measurable claims.**  
   Instead of “coverage improved,” I can report:
   - $\kappa(A)$
   - leakage reduction
   - noise tolerance curves

3. **Well-conditioned problems don’t need exotic solvers.**  
   With $\kappa=30$, Tikhonov is enough.  
   The interesting question is geometry, not algorithm complexity.

4. **Synthetic ceiling performance is necessary but not sufficient.**  
   It establishes upper bound capability.  
   Boundary diversity tests determine whether that capability generalizes.

---

## What I expect next

Hypothesis:

- More boundary diversity → lower $\kappa(A)$
- Lower $\kappa(A)$ → lower within-group leakage
- Diminishing returns beyond some number of configurations

But I am not assuming improvement.  
The tilted and stepped runs will decide that.

---

## Status

- Flat boundary analysis complete.
- Robustness analysis complete.
- Discrimination baseline saved.
- Tilted and stepped CST sweeps running.
- Combined matrix analysis next.

---

**Constraint analysis**: [/constraints/port-metasurface](/constraints/port-metasurface/)  
**Methods**: [EM simulation](/reading-ledger/#em-sim), [Inverse problems](/reading-ledger/#inverse-problems), [Regularization](/reading-ledger/#regularization)

**Project date**: Fall 2025 – Spring 2026 (ongoing)  
**Experience level**: First RF/EM system, first inverse scattering pipeline. Learning where simulation is sufficient, where measurement is required, and how conditioning—not aesthetics—determines reconstruction quality.