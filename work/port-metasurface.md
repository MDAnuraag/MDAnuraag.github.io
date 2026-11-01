---
layout: interactive
title: Port Metasurface — RF Boundary and Operator
permalink: /work/port-metasurface/
description: "Sensing-matrix study of blocking-wall geometry for 26 GHz NLoS reconstruction, and a loop-paddle-diamond passive panel designed for it."
redirect_from:
  - /case-studies/port-metasurface/
  - /constraints/port-metasurface/
---

## Overview

A hidden metallic cylinder sits behind an occluding wall in a 26 GHz CST scene. The probe-plane field is the measurement, the cylinder position is the unknown, and the question is how much the wall geometry changes which positions can be told apart.

---

## Setup

**Scene:** 26 GHz source, occluding wall, PEC cylinder swept over 11 positions, probe plane  
**Signal:** $|E|$ on the probe plane, 4681 points per position  
**Unknown:** cylinder position, $Y = 65$ to $115$ mm  
**Panel:** 31 × 31 loop–paddle–diamond cells on RO4350B

Each position gives one column of the sensing matrix:

$$
|E| = \sqrt{|E_x|^2 + |E_y|^2 + |E_z|^2},
\qquad
A[:,j] = |E|_{\text{probe plane, cylinder at } j}
$$

$$
\mathbf{y} = A\mathbf{x} + \boldsymbol{\varepsilon},
\qquad A \in \mathbb{R}^{4681\times 11}
$$

A single field value says little here. The information is in the spatial signature across the whole plane, so rank, singular values, $\kappa(A)$, column correlation and leakage describe the problem better than mean field strength.

Column correlation measures ambiguity between two positions:

$$
\rho_{ij} = \frac{a_i^T a_j}{\|a_i\|\,\|a_j\|}
$$

---

## Reconstruction

Tikhonov solution, with the SVD filter form as the main solver and the normal equations kept as a check:

$$
\hat{\mathbf{x}}_\lambda = \arg\min_{\mathbf{x}} \|A\mathbf{x}-\mathbf{y}\|_2^2 + \lambda\|\mathbf{x}\|_2^2
$$

$$
(A^TA+\lambda I)\hat{\mathbf{x}}_\lambda = A^T\mathbf{y},
\qquad
\hat{\mathbf{x}}_\lambda = V\left[\mathbf{f}_\lambda \odot (U^T\mathbf{y})\right],
\quad
f_i = \frac{\sigma_i}{\sigma_i^2+\lambda}
$$

The filter form shows directly how weak singular modes get suppressed. A Huber–simplex solver was tried as an exploratory extension for outliers.

A trial counts as correct when the largest entry of $\hat{\mathbf{x}}$ lands on the true position. Success rate over 50 trials, and the peak margin as a confidence proxy:

$$
\mathrm{SR}(j,\eta) = \frac{N_{\text{correct}}(j,\eta)}{50},
\qquad
M_{\text{peak}} = \hat{x}_{j_{\text{true}}} - \max_{j\neq j_{\text{true}}} \hat{x}_j
$$

---

## Blocking-wall geometry

Three PEC walls: flat, tilted by 15°, and stepped (upper and lower halves offset in $X$). Stacking the three matrices lets each geometry contribute to the same position vector:

$$
\tilde{A} =
\begin{bmatrix}
A_{\text{flat}} \\ A_{\text{tilted}} \\ A_{\text{stepped}}
\end{bmatrix}
$$

| Wall | $\kappa(A)$ | Hard positions (mm) | Worst success at 14 dB combined stress |
|---|---:|---|---:|
| Flat | 30.02 | 105, 110 | 54% at 70 mm |
| Tilted | 46.38 | 65, 80 | 14% at 65 mm |
| Stepped | 24.52 | 85, 100 | 70% at 95 mm |
| Stacked | 29.07 | none dominant | not run |

All three matrices are full rank (11 of 11). The flat wall leaves the upper positions nearly degenerate, the tilted wall moves the difficult region to the lower positions, and the stepped wall gives the best individual conditioning. Stacking does not improve $\kappa$ much. What it does is remove any single dominant blind region.

---

## Robustness

AWGN at 0, 1, 3, 5 and 10% of signal RMS, then five port-inspired perturbations (amplitude fading, correlated noise, multipath leakage, dropout, and all four combined) at 3.5, 7 and 14 dB. The 7 dB level is the reference because it is close to the fading spread in the 28 GHz container-canyon measurements of Bedin et al. All perturbations are synthetic.

At 7 dB every wall reaches 100% at every position, so that level is at ceiling and says little about margin. The walls separate at 14 dB, where the stepped wall holds up best and the tilted wall degrades most.

A mismatched test changes the picture. With 10% of probe channels corrupted by $5\sigma$ outliers, off-diagonal leakage rises from the $10^{-5}$ scale to $10^{-2}$, with some entries near $40\times10^{-3}$ to $85\times10^{-3}$. The true peak still wins, so rank-one success stays high, but the margin shrinks a lot. Outliers that hit many channels at once are a forward-model problem as much as a noise problem, which is why the Huber–simplex solver is only exploratory.

---

## Port-inspired stress test

One more CST configuration changes five things relative to the stepped wall: open lateral boundaries instead of electric ones, stainless steel instead of PEC for the wall, and a concrete clutter block, with the stepped geometry, cylinder and probe plane unchanged.

| Configuration | $\kappa(A)$ | Mean-field structure |
|---|---:|---|
| Flat PEC | 30.02 | strong two-group split |
| Tilted PEC | 46.38 | strong, regrouped |
| Stepped PEC | 24.52 | weak split, more uniform |
| Port-inspired | 51.35 | split collapsed |

The mean field varies only from about 7.1 to 7.4 V/m across the 11 positions, against roughly 40 V/m between the two groups in the flat baseline. The matrix is full rank, but the first singular mode dominates, which points to a common background component with weak position-specific variation. The cylinder at $Y = 110$ mm was still recovered, so the position information moved from large mean-field differences into small inter-column differences. Mean field alone would have missed it.

The exported file label leaves some doubt about which material and clutter changes were active in that run. I treat it as a boundary-condition sensitivity test and keep it out of the stacked matrix.

---

## Physical boundary

The panel is a loop–paddle–diamond cell: an outer loop, four inward paddles and a floating central diamond. The loop carries the main current path and the paddle–diamond gaps add capacitance:

$$
f_0 \approx \frac{1}{2\pi\sqrt{L_{\text{eff}}C_{\text{eff}}}}
$$

| Item | Value |
|---|---:|
| frequency | 26 GHz |
| unit-cell pitch | 3.2 mm |
| panel | 31 × 31 cells |
| aperture | 99.2 mm × 99.2 mm, about $8.6\lambda_0$ |
| substrate | Rogers RO4350B, 0.254 mm |
| material constants | $\epsilon_r = 3.66$, $\tan\delta = 0.0037$ |

with $\lambda_0 \approx 11.54$ mm at 26 GHz.

Unit-cell setup in CST: waveguide port above an airbox, single port because the ground plane blocks transmission, PEC/PMC walls standing in for periodic boundaries (student-version limit), tetrahedral mesh, direct solver at $10^{-4}$ accuracy. The reflection magnitude dips inside the target band and the phase moves smoothly across 24 to 28 GHz. Surface current circulates the outer loop and concentrates at the paddle connections, and the electric field concentrates in the paddle–diamond gaps.

A 3 × 3 finite array (9.6 mm, smaller than one wavelength) gave a near-specular reflected lobe at normal incidence and at 30° TE. Those runs check the workflow and do not demonstrate beam steering.

The design variables are $L_o$, $W_o$, $L_n$, $L_h$, $W_h$ and the diamond diagonal $D$. The geometry-to-phase lookup table does not exist yet, so the 31 × 31 panel is a uniform resonant boundary and not a phase-gradient design.

---

## Planned measurement

No panel has been fabricated or measured. The planned test is a VNA transmission comparison against a blocked link and a flat-reflector control:

$$
\Delta S_{21} = S_{21,\text{with panel}} - S_{21,\text{blocked baseline}}
$$

Horn spacing, panel angle, blockage geometry, calibration and the flat-reflector control all need to be recorded, otherwise a gain cannot be assigned to the engineered surface over ordinary passive reflection. A single $\Delta S_{21}$ would not show coverage, SINR or reconstruction. For that, the receiver needs scanning over enough positions to form a measured probe vector. The far-field distance for a 100 mm aperture is

$$
R_{\mathrm{FF}} = \frac{2D^2}{\lambda} \approx 1.73\ \mathrm{m}
$$

---

## Diagnostic

<div class="tool-embed">
<div class="tool-label">Interactive: sensing matrix conditioning</div>
{% include sensing-matrix-viz.html %}
</div>

---

## Summary

Established:

```text
CST-to-sensing-matrix reconstruction workflow
wall geometry changes conditioning, hard positions and robustness
stepped wall: best kappa (24.52) and best worst-case at 14 dB
mean-field contrast can vanish while position information remains
loop-paddle-diamond cell resonates near 26 GHz in simulation
```

Limits:

```text
simulation only, synthetic perturbations
11 discrete positions, one cylinder
PEC walls are idealized
port-inspired run changes several things at once
no phase lookup table, no fabricated panel, no measured S21
```

---

## Status

Undergraduate thesis, submitted summer 2026.

**Reading ledger:**  
[EM simulation](/reading-ledger/#em-sim)  
[Regularized inverse problems](/reading-ledger/#inverse-problems)  
[Sensing matrices](/reading-ledger/#sensing-matrices)  
[Metasurfaces and RF structures](/reading-ledger/#metasurfaces)

[Back to work](/work/)
