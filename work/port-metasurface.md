---
layout: interactive
status: ongoing
title: Port Metasurface — RF Boundary and Operator
permalink: /work/port-metasurface/
description: "A 26 GHz passive RF boundary evaluated through sensing-matrix quality, fabrication sensitivity, and bounded measurement claims."
redirect_from:
  - /case-studies/port-metasurface/
  - /constraints/port-metasurface/
---

## Question

Can a passive 26 GHz boundary make hidden-object states more identifiable from measured fields?

---

## Objects

**Original setting:** mmWave NLoS blockage near metallic port-like structures  
**Transferable system:** patterned copper/dielectric RF boundary  
**Signal:** simulated electric-field response; planned $S_{21}$ measurement  
**Model:** CST field export → sensing matrix → reconstruction diagnostic  
**Physical prototype:** 31 × 31 loop–paddle–diamond panel on RO4350B

The port framing was too broad.

The useful framing is narrower:

> how does a fabricated RF structure convert geometry, material stack, process tolerance, and measurement setup into a measurable electromagnetic response?

---

## Operator

The controlled inverse problem is:

$$
\mathbf{y} = A\mathbf{x} + \boldsymbol{\varepsilon}
$$

where:

- $\mathbf{y}$ = measured field vector;
- $A$ = electromagnetic sensing matrix;
- $\mathbf{x}$ = hidden-position / reflectivity vector;
- $\boldsymbol{\varepsilon}$ = noise, modelling error, setup mismatch.

The surface is useful only if it changes $A$ in a useful way.

Key diagnostics:

$$
\kappa(A),\quad
\rho_{ij},\quad
L_{ij},\quad
P_{\mathrm{success}}
$$

A stronger field plot is not enough.

---

## Sensing matrix

Controlled scene:

```text
26 GHz source
PEC occluding wall
hidden metallic cylinder
configurable boundary
probe plane
```

CST field reduction:

$$
|E| = \sqrt{|E_x|^2 + |E_y|^2 + |E_z|^2}
$$

Each object position becomes one column:

$$
A[:,j] = |E|_{\mathrm{probe\ plane,\ object\ at\ position}\ j}
$$

Column correlation tests ambiguity:

$$
\rho_{ij}
=
\frac{a_i^T a_j}{\|a_i\|\,\|a_j\|}
$$

If $\rho_{ij}\approx 1$, the two positions are practically hard to separate.

---

## Boundary diversity

One boundary has one set of blind spots.

Tested boundary states:

```text
flat PEC
tilted PEC
stepped PEC
combined / stacked operator
```

Stacked idea:

$$
A_{\mathrm{stacked}}
=
\begin{bmatrix}
A_{\mathrm{flat}} \\
A_{\mathrm{tilted}} \\
A_{\mathrm{stepped}}
\end{bmatrix}
$$

Hypothesis:

```text
different boundaries expose different hidden-position modes
```

Useful result:

```text
lower worst-case correlation
lower leakage
better reconstruction stability
```

---

## Reconstruction

Baseline solver:

$$
\hat{\mathbf{x}}
=
\arg\min_{\mathbf{x}}
\left\{
\|A\mathbf{x}-\mathbf{y}\|_2^2
+
\lambda\|\mathbf{x}\|_2^2
\right\}
$$

Closed form:

$$
\hat{\mathbf{x}}
=
(A^TA+\lambda I)^{-1}A^T\mathbf{y}
$$

Solver complexity is not the main point.

If $A$ does not separate states, the solver cannot recover missing information.

---

## Physical boundary

The current prototype is a 26 GHz passive unit cell.

Geometry:

```text
outer square loop
four inward paddles
floating central diamond
RO4350B substrate
solid ground plane
```

Interpretation:

```text
loop current → effective inductance
paddle–diamond gap field → effective capacitance
```

Simplified resonance:

$$
f_0 =
\frac{1}{2\pi\sqrt{L_{\mathrm{eff}}C_{\mathrm{eff}}}}
$$

The central diamond is not the main current path. It acts mainly as a capacitive island.

---

## Fabrication facts

| Item | Value |
|---|---:|
| frequency target | 26 GHz |
| unit-cell pitch | 3.2 mm |
| panel | 31 × 31 cells |
| active aperture | 99.2 mm × 99.2 mm |
| substrate | Rogers RO4350B |
| dielectric thickness | 0.265 mm |
| copper | 1 oz top / bottom |
| finish | ENIG |
| solder mask | none |
| silkscreen | none |

At 26 GHz:

$$
\lambda_0 \approx 11.54\ \mathrm{mm}
$$

Panel width:

$$
\frac{99.2}{11.54} \approx 8.6\lambda_0
$$

Most sensitive feature:

$$
g \approx 0.17\ \mathrm{mm}
$$

Supplier tolerance:

$$
\pm 0.03\ \mathrm{mm}
$$

Possible realized gap:

$$
0.14\ \mathrm{mm}
\le
g
\le
0.20\ \mathrm{mm}
$$

This may shift resonance. It should not erase the LC mechanism if fabrication stays close to design.

---

## Validation so far

Completed:

```text
26 GHz NLoS forward model
CST-to-Python sensing matrix
operator artifact saving / loading
Tikhonov reconstruction
correlation / leakage diagnostics
AWGN robustness checks
flat / tilted / stepped PEC comparisons
loop–paddle–diamond unit-cell design
periodic / Floquet setup
3 × 3 finite-array field/current validation
31 × 31 fabrication-ready panel
Gerber package preparation
```

3 × 3 finite-array result:

```text
25 GHz → weaker localization
26 GHz → strongest current / field localization
27 GHz → post-resonant decay
```

Claim:

> the unit cell has a physically interpretable resonance near the target band.

Not claim:

> the fabricated panel improves a measured blocked link.

---

## Measurement bridge

Planned measurement:

```text
VNA
Ka-band / mmWave setup
horn antennas
anechoic chamber
fabricated panel
blockage object
controlled panel angle
```

Measured comparison:

$$
\Delta S_{21}
=
S_{21,\mathrm{with\ metasurface}}
-
S_{21,\mathrm{blocked\ baseline}}
$$

If chamber distance is limited, the result should be framed as relative link recovery, not strict far-field gain.

Fraunhofer estimate for a 100 mm aperture:

$$
R_{\mathrm{FF}}
=
\frac{2D^2}{\lambda}
\approx
1.73\ \mathrm{m}
$$

---

## Diagnostic

The figure below shows the core argument:

```text
boundary → operator A → ambiguity → reconstruction
```

It is a diagnostic, not deployment evidence.

<div class="tool-embed">
<div class="tool-label">Interactive — sensing matrix conditioning</div>
{% include sensing-matrix-viz.html %}
</div>

---

## Claim boundary

Supported:

```text
controlled forward-model evidence
operator-level inverse-sensing pipeline
fabrication-ready 26 GHz passive boundary
physically interpretable LC-type unit-cell mechanism
```

Pending:

```text
fabricated panel
measured S-parameters
experimental ΔS21 link recovery
simulation-to-measurement correlation
full chamber validation
```

Not supported:

```text
real port coverage improvement
service-level reliability
deployment robustness
```

---

## Status

Ongoing undergraduate thesis.

**Claim level:** controlled forward-model evidence plus fabrication-ready metasurface design. No real-port deployment claim.

**Related notes:**  
[Simulation is not deployment evidence](/notes/simulation-not-deployment/)  
[Good fits don't imply identifiability](/notes/good-fits/)  
[Measurement is not control](/notes/measurement-not-control/)

**Reading ledger:**  
[EM simulation](/reading-ledger/#em-sim)  
[Regularized inverse problems](/reading-ledger/#inverse-problems)  
[Sensing matrices](/reading-ledger/#sensing-matrices)  
[Metasurfaces and RF structures](/reading-ledger/#metasurfaces)

[Back to work](/work/)