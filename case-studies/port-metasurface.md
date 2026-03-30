---
layout: interactive
status: ongoing
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

Cylinder position was swept across 11 Y-locations (65 → 115 mm, 5 mm step). For each position I exported the complex field and built a sensing matrix

$$
A \in \mathbb{R}^{4681 \times 11},
$$

where column $j$ contains the probe-plane magnitude field when the cylinder is at position $j$. The inverse problem is then

$$
y = A x,
$$

with $x$ = object reflectivity across 11 candidate locations and $y$ = measured probe field. Each CST simulation directly produces one column of $A$, converting the scattering problem into a linear inverse system.

Flat boundary baseline: $\kappa(A) = 30.02$, full rank (11/11), 426× overdetermined, first singular value explaining 91.9% of variance.

At this stage I had a stable forward model. But I still hadn't answered whether boundary geometry improves reconstruction.

---

## The pivot (January 2026)

I reframed the system explicitly as an inverse problem:

$$
\mathbf{y} = A\mathbf{x} + \text{noise}.
$$

Instead of qualitative claims about signal strength, I can now measure conditioning $\kappa(A)$, leakage in the discrimination matrix, and reconstruction stability under noise. That shift made the project tractable.

---

## Baseline, Config 6, and combined matrix — interactive

The tool below lets you explore how boundary geometry changes the sensing matrix conditioning, column correlations, and reconstruction quality under noise. Switch between flat boundary, 15° tilted (Config 6), and the combined matrix to see the core argument of the thesis.

<div class="tool-embed">
<div class="tool-label">Interactive — sensing matrix conditioning</div>
{% include sensing-matrix-viz.html %}
</div>

**What the flat baseline shows:** the system is not fundamentally ill-posed — $\kappa = 30$ is moderate and reconstruction is stable up to 10% noise. The real weakness is within-Group-B column correlations reaching 0.93–0.99. Positions 75, 85, 95 mm (Group A) are cleanly separable; the edge positions are near-degenerate.

**What Config 6 shows:** rotating the boundary 15° shifts the detectable set entirely — 70 mm and 100–115 mm become Group A while 65–95 mm become weak. Higher per-configuration $\kappa$ (46.38) does not degrade reconstruction quality; PSF sidelobe and success rate are unchanged. The two configurations have complementary blind spots.

**What the combined matrix shows:** stacking $A_\text{flat}$ and $A_\text{tilted}$ reduces $\kappa$ below either individual configuration and makes all 11 positions distinguishable. This is the core hypothesis — boundary diversity spans complementary spatial modes, reducing worst-case degeneracy.

---

## Combined sensing matrix (next step)

The full combined matrix stacks three configurations:

$$
A_{\text{combined}} =
\begin{bmatrix}
A_{\text{flat}} \\
A_{\text{tilted}} \\
A_{\text{stepped}}
\end{bmatrix}
\in \mathbb{R}^{14043\times11}.
$$

Config 7 (stepped PEC boundary) will provide the third dataset. The test is whether $\kappa(A_\text{combined})$ falls below the flat baseline and whether worst-case discrimination leakage reduces across all positions.

---

## What I am not claiming

- That this system works in real container ports  
- That fabrication tolerances preserve ideal boundary behaviour  
- That sparse L1 solvers are necessary (Tikhonov is already stable here)

This is a controlled forward-model study. The goal is to understand **conditioning**, not to claim a deployable radar.

---

## What I have learned so far

Environment uncertainty can invalidate optimisation. Full-port modelling produced visually convincing but physically meaningless results.

Inverse framing forces measurable claims. Instead of "better coverage", I can report conditioning and leakage metrics.

Well-conditioned problems do not need exotic solvers. With $\kappa \approx 30$, regularised least squares is sufficient.

Higher per-configuration $\kappa$ does not necessarily degrade reconstruction. The important quantity is the **null-space structure** across configurations.

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