---
layout: page
title: Port Metasurface — Boundary Diversity & Inverse Reconstruction
permalink: /case-studies/port-metasurface/
---

## Problem

Can a programmable boundary in a mmWave NLoS region make hidden objects *reconstructable*, not just detectable?

The project originally started as a coverage-recovery question for container ports (n258 band, 26 GHz).  
But I quickly ran into a modelling problem: full-port simulations were dominated by geometry assumptions. Small changes in container placement or crane structure changed the channel more than any metasurface design.

So I narrowed the scope.

Instead of asking whether a metasurface improves coverage, I asked a more measurable question:

**If I control the boundary condition, how does that change the conditioning of the inverse scattering problem?**

This is my senior thesis. Ongoing.

---

## What I did first (Forward model only)

I built a minimal CST geometry:

- Waveguide source at 26 GHz  
- PEC occluding wall (creates the NLoS region)  
- Metallic cylinder (hidden object)  
- PEC boundary panel (metasurface placeholder)  
- Probe plane sampling the scattered field

Cylinder position was swept across 11 Y-locations:

```
65 → 115 mm (5 mm step)
```

For each position I exported the complex field and built a sensing matrix

$$
A \in \mathbb{R}^{4681 \times 11},
$$

where column $j$ contains the probe-plane magnitude field when the cylinder is at position $j$.

The inverse problem then becomes

$$
y = A x,
$$

with

- $x$ = object reflectivity across 11 candidate locations  
- $y$ = measured probe field

Each CST simulation directly produces one column of $A$. :contentReference[oaicite:0]{index=0}  

This converts the scattering problem into a linear inverse system.

<!-- geometry figure placeholder -->

Flat boundary baseline:

- $\kappa(A) = 30.02$
- Full rank (11/11)
- 426× overdetermined
- First singular value explains 91.9 % of variance

At this stage I had a stable forward model.  
But I still hadn't answered whether boundary geometry improves reconstruction.

---

## The pivot (January 2026)

I reframed the system explicitly as an inverse problem:

$$
\mathbf{y} = A\mathbf{x} + \text{noise}.
$$

Now the research question becomes measurable.

Instead of qualitative claims about signal strength, I can measure:

- conditioning of the sensing matrix $\kappa(A)$  
- leakage in the discrimination matrix  
- reconstruction stability under noise

That shift made the project tractable.

---

## What the flat boundary baseline shows

### Group structure

The 11 positions fall into two diffraction regimes.

**Group A (detectable)**  
75, 85, 95 mm

Mean probe magnitude ≈ 27 V/m

**Group B (weakly detectable)**  
all other positions

Mean probe magnitude ≈ 62 V/m

Within-Group-B column correlations are very high:

```
0.93 → 0.99
```

That near-degeneracy is the dominant limitation of the system.

<!-- sweep plot placeholder -->

---

### Inversion method

I used Tikhonov regularisation:

$$
\hat{x} = \arg\min_x \|Ax-y\|^2 + \lambda\|x\|^2
$$

Closed form:

$$
\hat{x}=(A^\top A+\lambda I)^{-1}A^\top y
$$

Implemented using the SVD filter form:

$$
\hat{x}
=
\sum_i
\frac{\sigma_i}{\sigma_i^2+\lambda}
(u_i^\top y)\,v_i
$$

Optimal regularisation from the L-curve corner:

$$
\lambda_{\text{opt}} = 5.67
$$

<!-- L-curve placeholder -->

---

### Synthetic ceiling performance

Using Gaussian noise:

```
2750 reconstructions
11 positions × 5 noise levels × 50 trials
```

Results:

- 100 % success rate up to 10 % noise
- Confusion matrix perfectly diagonal
- PSF sidelobe ≈ −59 dB
- Field residual ≈ 0.995 % (matches injected noise)

This is the solver operating on its own columns.  
It establishes the theoretical ceiling, not deployment performance.

---

## What the baseline actually tells me

The system is **not fundamentally ill-posed**.

- $\kappa=30$ is moderate
- the forward model residual matches the noise floor
- reconstruction is stable under realistic noise

The real weakness is the **within-Group-B degeneracy**.

The natural next step is to test whether boundary diversity changes that.

---

## Config 6 — Tilted boundary (15° rotation)

The flat boundary fixes the diffraction pattern.  
Detectability is determined purely by geometry.

So I rotated the boundary.

Config 6 replaces the flat PEC panel with a **15° Z-axis tilt**.

Same domain.  
Same sweep.  
Same probe plane.

<!-- geometry comparison placeholder -->

### What changed

The detectable set shifted completely.

| Group | Flat | Tilted |
|---|---|---|
| Detectable | 75, 85, 95 mm | 70, 100–115 mm |
| Weak | others | 65–95 mm |

The two configurations have **complementary blind spots**.

<!-- overlay sweep placeholder -->

---

### SVD comparison

| Metric | Flat | Tilted |
|---|---|---|
| $\kappa(A)$ | 30.02 | 46.38 |
| $\sigma_{\max}$ | 13952 | ~16219 |
| $\sigma_{\min}$ | 465 | ~350 |
| Rank | 11 | 11 |

Higher $\kappa$ per configuration is not necessarily worse.  
The relevant question is whether **combined configurations span more spatial modes**.

---

### Inversion results

Applying Tikhonov to the tilted matrix:

- $\lambda_{\text{opt}} = 4.01$
- residual ≈ 1 %
- PSF sidelobe ≤ −58 dB
- 2750 trials: 100 % success rate
- confusion matrix perfectly diagonal

The solver works equally well, but for **a different set of positions**.

---

## Combined sensing matrix (next step)

The hypothesis is that stacking multiple configurations reduces degeneracy:

$$
A_{\text{combined}} =
\begin{bmatrix}
A_{\text{flat}} \\
A_{\text{tilted}} \\
A_{\text{stepped}}
\end{bmatrix}
\in \mathbb{R}^{14043\times11}.
$$

If boundary diversity works, the combined matrix should

- reduce worst-case discrimination leakage  
- improve spatial separation of Group-B positions

Config 7 (stepped PEC boundary) will provide the third dataset.

---

## What I am not claiming

- That this system works in real container ports  
- That fabrication tolerances preserve ideal boundary behaviour  
- That sparse L1 solvers are necessary (Tikhonov is already stable here)

This is a controlled forward-model study.

The goal is to understand **conditioning**, not to claim a deployable radar.

---

## What I have learned so far

Environment uncertainty can invalidate optimisation.  
Full-port modelling produced visually convincing but physically meaningless results.

Inverse framing forces measurable claims.  
Instead of “better coverage”, I can report conditioning and leakage metrics.

Well-conditioned problems do not need exotic solvers.  
With $\kappa\approx30$, regularised least squares is sufficient.

Higher per-configuration $\kappa$ does not necessarily degrade reconstruction.  
The important quantity is the **null-space structure** across configurations.

---

## Status

- [x] Flat boundary forward model
- [x] Sensing matrix construction
- [x] Tikhonov inversion
- [x] Robustness testing (2750 trials)
- [x] Config 6 tilted boundary
- [ ] Config 7 stepped boundary
- [ ] Combined matrix analysis
- [ ] Cross-configuration reconstruction
- [ ] Fabrication (if simulations justify it)

---

**Constraint analysis:** [/constraints/port-metasurface](/constraints/port-metasurface/)  
**Methods:** [EM simulation](/reading-ledger/#em-sim), [Inverse problems](/reading-ledger/#inverse-problems)

Project timeline: Fall 2025 – Spring 2026 (ongoing)