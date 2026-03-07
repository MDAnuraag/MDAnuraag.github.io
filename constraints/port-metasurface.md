---
layout: page
title: "Constraints: Port Metasurface — Boundary Diversity & Identifiability"
permalink: /constraints/port-metasurface/
---

**Full case study**: [/case-studies/port-metasurface](/case-studies/port-metasurface/)

---

## Observable

In the current phase, the observables are not link metrics but **matrix properties** derived from CST simulations:

- Condition number $\kappa(A)$  
- Singular value spectrum  
- Discrimination matrix $D_{i,j}$  
- Leakage $1 - D_{i,j}$  
- Reconstruction error under controlled noise  

Bench measurements are planned but not yet completed.  
All current results are forward-model-based.

---

## Working claim (bounded)

Changing the boundary geometry can alter the conditioning of the inverse scattering problem.

More precisely:

If boundary diversity changes $A$, and

$$
\kappa(A_{\text{combined}}) < \kappa(A_{\text{flat}})
$$

or reduces within-group leakage,

then boundary diversity improves identifiability *within this geometry*.

This does **not** imply deployment-level improvement in real container ports.

---

## Load-bearing constraints

### Physical

- Passive structures obey reciprocity and energy conservation.  
  They can redirect energy but cannot increase total power.

- The Born approximation is assumed:

$$
\mathbf{y} = A\mathbf{x}
$$

  This is valid only while scattering remains weak and linear.

- At 26 GHz ($\lambda \approx 11.5$ mm), small geometric shifts change interference patterns significantly.

---

### Environmental

- Real port channels are non-repeatable.
- Container spacing, crane motion, and ground properties vary.
- Multiple multipath realizations can produce similar link outcomes.

This is a **non-identifiability constraint**:
different environments can explain the same measured improvement.

That is why I shifted from coverage optimization to conditioning analysis.

---

### Modeling

- The domain is deliberately minimal (one wall, one cylinder).
- Finite PEC boundaries approximate an idealized phase mask.
- Periodic unit-cell assumptions are not yet included in the inverse study.
- Only 11 discrete object positions are modeled.

This means the sensing matrix:

$$
A \in \mathbb{R}^{4681 \times 11}
$$

captures a **low-dimensional discrete inverse problem**, not continuous object reconstruction.

---

### Numerical

- $\kappa(A_{\text{flat}}) = 30.02$ (flat boundary baseline).
- $\kappa(A_{\text{tilted}}) = 46.38$ (Config 6 — 15° rotation).
- First singular value dominates (~92% variance in flat; ~94% in tilted).
- Within-Group-B columns have correlations up to 0.99 in both configs.

Higher per-config $\kappa$ does not impair reconstruction — all singular modes remain well above the noise floor ($\sigma_{\min} = 350$ V/m vs $\sqrt{\lambda_{\text{opt}}} = 2.00$). The relevant quantity is whether the *combined* matrix conditions better, not the per-config value.

- Tikhonov regularization assumes quadratic prior.
- Synthetic ceiling performance uses solver-tested-on-own-columns data.

Thus, 100% reconstruction success under noise establishes theoretical upper bound, not real-world robustness.

---

### Fabrication (pending)

- Ideal PEC boundaries are assumed.
- Real metasurface unit cells introduce:
  - phase quantization
  - loss
  - fabrication tolerances
  - angular sensitivity

These are not yet modeled in the inverse framework.

---

## Primary limiting factor

**Identifiability under structural degeneracy.**

The main limitation is not noise, nor rank deficiency, but column similarity.

Within-Group-B near-degeneracy produces leakage:

$$
\text{leakage}_{i,j}
=
\frac{|x_j|}{|x_i|}
$$

Baseline leakage is on the order of $10^{-3}$.

Boundary diversity must reduce this to claim improved discrimination.

If leakage remains unchanged, boundary changes are not informationally useful.

An additional constraint is now visible from the tilted results: the Group B membership itself shifts between configurations (different positions become degenerate under different boundary geometries). This means per-config leakage comparisons are not directly meaningful — the correct comparison is $A_{\text{combined}}$ leakage vs the individual-config baseline.

---

## What this ruled out for me

- Treating simulated coverage gain as evidence of deployment performance.
- Claiming improvement without comparing $\kappa(A)$ directly.
- Adding algorithmic complexity when conditioning is already moderate.
- Optimizing boundary shape without measuring inverse improvement.
- Using per-config $\kappa$ as a performance metric — it is a property of the geometry, not a measure of reconstruction quality.

---

## What remains unresolved

- Whether combined matrices reduce $\kappa(A)$ below the flat baseline.
- Whether combined matrices reduce within-group leakage beyond per-config performance.
- How sensitive conditioning is to boundary angle magnitude.
- Whether fabrication approximates ideal phase diversity.
- How results change for continuous object positions (not just 11 discrete samples).
- How cross-configuration reconstruction degrades (train on flat, test on tilted measurement).

---

## What would reduce uncertainty

- ~~Complete tilted CST sweeps.~~ *(done — Config 6 complete)*
- Complete stepped CST sweeps (Config 7, in progress).
- Build:

$$
A_{\text{combined}}
=
\begin{bmatrix}
A_{\text{flat}} \\
A_{\text{tilted}} \\
A_{\text{stepped}}
\end{bmatrix}
$$

- Compare $\kappa(A_{\text{combined}})$ to 30.02 baseline.
- Compare discrimination matrices element-wise, focusing on within-Group-B leakage reduction.
- Perform cross-configuration reconstruction tests.
- Validate PEC approximation with simple fabricated boundary sample.

Only then can I claim boundary diversity improves identifiability.

---

## Status

Flat-boundary inverse analysis complete.  
Config 6 (tilted, 15°) — sensing matrix, inversion, and robustness complete.  
Config 7 (stepped, ±2 mm) — CST sweeps in progress.  
Combined matrix analysis pending Config 7 completion.  
Fabrication optional depending on time.

---

## What surprised me

I originally thought fabrication and EM accuracy would dominate difficulty.

Instead, the dominant issue is identifiability:

Even with perfect simulation fidelity, I cannot attribute improvement unless I quantify conditioning changes.

That realization shifted the project from geometry optimization to inverse problem structure.

A secondary surprise: higher $\kappa$ per configuration does not mean worse reconstruction. Config 6 has $\kappa = 46.38$ and achieves identical PSF and robustness metrics to the flat baseline. The condition number describes the geometry's sensitivity structure — not whether the solver can handle it.