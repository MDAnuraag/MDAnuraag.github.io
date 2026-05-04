---
layout: interactive
status: ongoing
title: Port Metasurface — Boundary Diversity
permalink: /work/port-metasurface/
redirect_from:
  - /case-studies/port-metasurface/
  - /constraints/port-metasurface/
---

## Question

This project began as a senior thesis on passive mmWave metasurfaces for non-line-of-sight coverage in container-port environments.

That framing was too broad. Full-port simulations were dominated by geometry assumptions: container placement, crane structure, blockage state, and ground reflection could change the channel more than the boundary design itself.

So I changed the question.

Instead of asking:

> does a passive boundary improve coverage?

I asked:

> does boundary diversity improve the inverse problem?

---

## Model

The controlled geometry is a simplified 26 GHz NLoS scene:

- waveguide source;
- PEC occluding wall;
- hidden metallic cylinder;
- configurable PEC boundary;
- probe plane sampling the scattered field.

The cylinder is swept across 11 candidate positions. Each simulation produces one column of a sensing matrix,

$$
A \in \mathbb{R}^{4681 \times 11}.
$$

The inverse problem is

$$
\mathbf{y} = A\mathbf{x} + \boldsymbol{\varepsilon},
$$

where

$$
\mathbf{x}
=
\begin{bmatrix}
x_1 & x_2 & \cdots & x_{11}
\end{bmatrix}^{T}
$$

is a sparse object-position vector and $\mathbf{y}$ is the measured probe-plane response.

This is not continuous imaging. It is discrete hidden-state recovery.

---

## What matters

The useful question is not whether a field plot looks stronger.

The useful question is whether the columns of $A$ become easier to distinguish.

For two candidate positions $i$ and $j$,

$$
\rho_{ij}
=
\frac{a_i^{T}a_j}{\|a_i\|\,\|a_j\|}.
$$

If

$$
\rho_{ij} \approx 1,
$$

then positions $i$ and $j$ are nearly indistinguishable under that boundary condition.

The boundary helps only if it reduces ambiguity:

$$
\max_{i \neq j} |\rho_{ij}|
\downarrow
$$

or improves the singular-value structure:

$$
\kappa(A)
=
\frac{\sigma_{\max}(A)}{\sigma_{\min}(A)}
\downarrow.
$$

A full-rank matrix is not enough. A full-rank matrix can still have columns that are practically redundant.

---

## Boundary diversity

One boundary configuration has one set of blind spots.

Multiple configurations can be stacked:

$$
A_{\mathrm{stacked}}
=
\begin{bmatrix}
A_{\mathrm{flat}} \\
A_{\mathrm{tilted}} \\
A_{\mathrm{stepped}}
\end{bmatrix}.
$$

The hypothesis is:

$$
\mathrm{blindspots}(A_{\mathrm{flat}})
\not=
\mathrm{blindspots}(A_{\mathrm{tilted}})
\not=
\mathrm{blindspots}(A_{\mathrm{stepped}}).
$$

If the blind spots are complementary, then stacking should reduce worst-case leakage:

$$
L_{\max}(A_{\mathrm{stacked}})
<
\min
\left[
L_{\max}(A_{\mathrm{flat}}),
L_{\max}(A_{\mathrm{tilted}}),
L_{\max}(A_{\mathrm{stepped}})
\right].
$$

That is the core claim being tested.

---

## Reconstruction

The baseline reconstruction uses Tikhonov regularization:

$$
\hat{\mathbf{x}}
=
\arg\min_{\mathbf{x}}
\left\{
\|A\mathbf{x} - \mathbf{y}\|_2^2
+
\lambda\|\mathbf{x}\|_2^2
\right\}.
$$

A more complex solver is not automatically better.

If the matrix is moderately conditioned, Tikhonov is enough. The bottleneck is not solver sophistication. The bottleneck is whether the measurement operator separates the hidden states.

---

## Interactive diagnostic

The tool below visualizes the current sensing-matrix argument.

It shows how boundary configuration changes singular values, column correlations, and Tikhonov reconstruction behavior.

Read the combined tab as a diagnostic hypothesis, not a deployment result.

<div class="tool-embed">
<div class="tool-label">Interactive — sensing matrix conditioning</div>
{% include sensing-matrix-viz.html %}
</div>

---

## What worked

The project became tractable after replacing a deployment claim with an operator claim.

Instead of saying:

> the boundary improves coverage,

I can measure:

$$
\kappa(A), \quad
\rho_{ij}, \quad
L_{ij}, \quad
P(\arg\max \hat{\mathbf{x}} = \arg\max \mathbf{x}).
$$

Those quantities are limited, but they are honest.

They describe the controlled inverse problem rather than pretending to validate a port system.

---

## What failed

The original port-scale framing failed.

A realistic port is not one geometry. It is a changing ensemble of container stacks, vehicles, cranes, ground reflections, and blockages.

A single simulation could look convincing while proving little.

The controlled study does not claim:

- real port coverage improvement;
- fabricated metasurface performance;
- robustness to container rearrangement;
- ideal-to-hardware transfer;
- service-level reliability.

Those are future validation layers.

---

## What remains unresolved

The main unresolved test is whether the final stacked matrix actually improves the worst-case ambiguity.

The next matrix is

$$
A_{\mathrm{stacked}}
=
\begin{bmatrix}
A_{\mathrm{flat}} \\
A_{\mathrm{tilted}} \\
A_{\mathrm{stepped}}
\end{bmatrix}.
$$

The required comparisons are:

$$
\kappa(A_{\mathrm{stacked}})
\quad \text{vs.} \quad
\kappa(A_k),
$$

$$
\max_{i\neq j} |\rho_{ij}(A_{\mathrm{stacked}})|
\quad \text{vs.} \quad
\max_{i\neq j} |\rho_{ij}(A_k),
$$

and

$$
P_{\mathrm{success}}(\mathrm{stacked})
\quad \text{vs.} \quad
P_{\mathrm{success}}(A_k)
$$

under matched noise.

Only then is “boundary diversity improves identifiability” supported.

---

## What I learned

The important object is not the metasurface.

The important object is the operator:

$$
A:
\mathbf{x}
\mapsto
\mathbf{y}.
$$

A passive boundary matters only if it changes that map in a useful way.

The strongest version of this project is therefore not:

> passive metasurfaces improve mmWave coverage.

It is:

> controlled boundary diversity can be evaluated by how it changes the conditioning, coherence, leakage, and reconstruction stability of a discrete NLoS inverse problem.

---

## Status

Senior thesis in progress.

- [x] Flat boundary forward model
- [x] Sensing matrix construction
- [x] Tikhonov inversion
- [x] AWGN robustness testing
- [x] Tilted boundary configuration
- [ ] Stepped boundary configuration
- [ ] Full stacked-matrix analysis
- [ ] Cross-configuration reconstruction
- [ ] Physical boundary validation, if justified

**Claim level:** controlled forward-model evidence only; no deployment claim.

**Related notes:**  
[Simulation is not deployment evidence](/notes/simulation-not-deployment/)  
[Good fits don't imply identifiability](/notes/good-fits/)  
[Sensitivity is not identifiability](/notes/sensitivity/)

**Methods:**  
[EM simulation](/reading-ledger/#em-sim)  
[Regularized inverse problems](/reading-ledger/#inverse-problems)  
[Sensing matrices](/reading-ledger/#sensing-matrices)

[Back to work](/work/)