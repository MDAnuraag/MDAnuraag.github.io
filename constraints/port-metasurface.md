---
layout: page
title: "Constraints: Port Metasurface — Boundary Diversity & Identifiability"
permalink: /constraints/port-metasurface/
---

**Full case study**: [/case-studies/port-metasurface](/case-studies/port-metasurface/)

---

## Observable

At the current stage the observables are **matrix properties derived from simulation**, not deployment metrics.

The quantities I can measure directly are:

- Condition number $\kappa(A)$  
- Singular value spectrum  
- Discrimination matrix $D_{i,j}$  
- Leakage $1 - D_{i,j}$  
- Reconstruction error under controlled noise

Bench measurements are planned but not yet completed.  
All results so far are **forward-model-based**.

---

## Working claim (bounded)

Boundary geometry may change the **identifiability** of the inverse scattering problem.

Formally, if boundary diversity changes the sensing matrix

$$
A \rightarrow A_{\text{combined}},
$$

and

$$
\kappa(A_{\text{combined}}) < \kappa(A_{\text{flat}})
$$

or reduces discrimination leakage,

then boundary diversity improves identifiability **within this controlled geometry**.

This does **not** imply deployment-level improvement in container ports.

---

## Load-bearing constraints

### Physical

Passive structures obey reciprocity and energy conservation.

They can redirect energy but cannot increase total power.

The reconstruction model assumes the **Born approximation**

$$
\mathbf{y} = A\mathbf{x}.
$$

This assumption is valid only while scattering remains weak and linear.

At 26 GHz ($\lambda \approx 11.5$ mm), small geometric shifts produce significant phase changes.  
Interference patterns therefore depend sensitively on boundary orientation.

---

### Environmental

Real port environments are non-repeatable.

Container placement, crane motion, and ground reflections vary across time.  
Multiple channel realizations may produce similar link measurements.

This introduces a **non-identifiability constraint**:

different environments can explain the same measured improvement.

That uncertainty is why the project shifted from coverage optimization to conditioning analysis.

---

### Modeling

The simulation domain is deliberately minimal.

- one occluding wall  
- one hidden cylinder  
- one boundary panel  
- one probe plane

The sensing matrix

$$
A \in \mathbb{R}^{4681 \times 11}
$$

therefore represents a **low-dimensional discrete inverse problem**.

Additional modeling simplifications:

- PEC boundaries approximate ideal phase masks  
- metasurface unit-cell physics is not yet included  
- object position is discretized into 11 candidate locations

Continuous object reconstruction is outside the current scope.

---

### Numerical

Flat boundary baseline:

```
κ(A_flat) = 30.02
```

Tilted boundary (Config 6):

```
κ(A_tilted) = 46.38
```

Additional numerical observations:

- First singular mode dominates variance  
  (~92% flat, ~94% tilted)

- Within-Group-B column correlations reach

```
0.93 → 0.99
```

- Minimum singular value remains well above the noise floor

```
σ_min ≈ 350 V/m
√λ ≈ 2
```

Thus the system is **not numerically unstable**.

Higher per-configuration $\kappa$ does not necessarily degrade reconstruction.  
The relevant question is whether **multiple configurations reduce structural degeneracy when combined**.

Synthetic ceiling tests (solver applied to its own columns) therefore establish an **upper bound**, not deployment robustness.

---

### Fabrication (pending)

Simulations assume ideal PEC boundaries.

Real metasurfaces introduce additional effects:

- phase quantization  
- ohmic loss  
- fabrication tolerances  
- angular sensitivity

These effects are not yet included in the inverse framework.

---

## Primary limiting factor

**Structural degeneracy in the sensing matrix.**

The dominant limitation is column similarity rather than noise or rank deficiency.

Within-Group-B degeneracy produces leakage:

$$
\text{leakage}_{i,j}
=
\frac{|x_j|}{|x_i|}
$$

Baseline leakage is approximately

```
~10⁻³
```

Boundary diversity must reduce worst-case leakage to claim improved discrimination.

An additional constraint emerges from the tilted configuration:

Group membership itself changes between configurations.

Different positions become degenerate under different boundaries.

Therefore per-configuration leakage comparisons are not meaningful.  
The correct comparison is

```
A_combined leakage vs single-configuration leakage
```

---

## What this ruled out for me

- treating simulated coverage gain as deployment evidence  
- claiming improvement without measuring conditioning  
- increasing algorithmic complexity when conditioning is moderate  
- optimizing geometry without evaluating inverse performance  
- interpreting per-config $\kappa$ as a direct performance metric

---

## What remains unresolved

- whether the combined matrix reduces $\kappa(A)$ below the flat baseline  
- whether boundary diversity reduces worst-case leakage  
- sensitivity of conditioning to boundary angle  
- fabrication deviations from ideal PEC behaviour  
- extension to continuous object positions  
- cross-configuration reconstruction (train on one geometry, test on another)

---

## What would reduce uncertainty

- ~~Complete tilted CST sweeps~~ *(Config 6 complete)*  
- Complete stepped CST sweeps (Config 7 in progress)

Then construct

$$
A_{\text{combined}}
=
\begin{bmatrix}
A_{\text{flat}} \\
A_{\text{tilted}} \\
A_{\text{stepped}}
\end{bmatrix}
$$

Next steps:

- compare $\kappa(A_{\text{combined}})$ to the baseline  
- evaluate discrimination matrices element-wise  
- measure worst-case leakage reduction  
- perform cross-configuration reconstruction tests  
- validate PEC approximation with a simple fabricated boundary

Only after those steps can boundary diversity be claimed to improve identifiability.

---

## Status

Flat boundary inverse analysis complete.  
Tilted boundary (Config 6) — sensing matrix, inversion, robustness complete.  
Stepped boundary (Config 7) — CST sweeps in progress.  
Combined matrix analysis pending completion of Config 7.

Fabrication remains optional depending on simulation outcome.

---

## What surprised me

I initially expected fabrication accuracy and EM modeling fidelity to dominate the difficulty.

Instead the dominant issue is **identifiability**.

Even with perfect simulation fidelity, improvements cannot be attributed unless conditioning changes are measured directly.

That realization shifted the project away from geometry optimization and toward **inverse problem structure**.

A secondary observation:

Higher per-configuration condition numbers do not necessarily degrade reconstruction.

Config 6 has

```
κ(A) = 46.38
```

yet produces the same PSF and robustness metrics as the flat baseline.

The condition number reflects the geometry’s sensitivity structure, not whether the solver can handle it.