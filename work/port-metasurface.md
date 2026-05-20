---
layout: interactive
status: ongoing
title: Port Metasurface — Operator Boundary
permalink: /work/port-metasurface/
description: "A 26 GHz passive metasurface boundary evaluated through inverse-sensing operator quality rather than port-scale coverage claims."
redirect_from:
  - /case-studies/port-metasurface/
  - /constraints/port-metasurface/
---

This project asks whether a passive millimeter-wave boundary can improve a non-line-of-sight sensing problem.

The original motivation came from container-port environments, where metallic stacks, cranes, vehicles, and infrastructure create blocked and multipath-heavy 5G/mmWave links. That deployment framing was too broad for a single undergraduate project.

The narrower question is:

> can a controlled boundary make hidden-object positions more identifiable from measured fields?

The current contribution is controlled forward-model evidence, a CST-to-Python inverse-sensing pipeline, and a fabrication-ready 26 GHz passive metasurface prototype. It is not a real-port deployment claim.

---

## Semiconductor infrastructure relevance

Although this project began from port mmWave blockage, the transferable problem is broader:

> how does a fabricated RF structure convert geometry, material choice, and process tolerance into a measurable electromagnetic response?

The current metasurface is a patterned copper/dielectric structure whose response depends on unit-cell geometry, substrate thickness, dielectric constant, copper patterning, finite-array effects, incidence angle, and measurement configuration.

That makes the project relevant to RF substrates, package-level interconnects, process-window thinking, dimensional metrology, and simulation-to-measurement correlation.

The claim is still bounded. This page does not claim advanced-packaging deployment or real-port coverage. It uses a 26 GHz patterned substrate as a controlled case for studying how fabrication-sensitive physical structures affect measurement and inference.

---

## Question

A passive reflector or metasurface is usually judged by electromagnetic metrics such as reflection phase, return loss, gain, or link recovery.

This project uses a different test.

The important object is not only the surface. The important object is the sensing operator:

$$
A:\mathbf{x}\mapsto\mathbf{y}.
$$

Here, $\mathbf{x}$ represents the hidden object position or reflectivity state, and $\mathbf{y}$ is the measured field vector at a receiver or probe plane.

The working question is:

> does the boundary make different hidden states produce more distinguishable measurements?

That turns the project from a coverage claim into an inverse-problem claim.

---

## Forward model

The central model is

$$
\mathbf{y} = A\mathbf{x} + \boldsymbol{\varepsilon}.
$$

Here:

- $\mathbf{y}$ is the measured field vector;
- $A$ is the electromagnetic sensing matrix built from CST field simulations;
- $\mathbf{x}$ is the unknown hidden-position vector;
- $\boldsymbol{\varepsilon}$ represents noise, modelling error, multipath corruption, or measurement mismatch.

The design target is not only

$$
|S_{11}|,\quad \angle S_{11},\quad \text{gain}.
$$

The design target is also

$$
\mathrm{rank}(A),\quad
\kappa(A),\quad
A^T A,\quad
\rho_{ij},\quad
L_{ij},\quad
P_{\mathrm{success}}.
$$

A useful boundary should improve the information content of the measurement operator, not merely increase field strength.

---

## Controlled sensing setup

The controlled model is a simplified 26 GHz NLoS scene:

- waveguide source;
- PEC occluding wall;
- hidden metallic cylinder;
- configurable boundary;
- probe plane sampling the scattered electric field.

The hidden cylinder is swept across candidate positions. Each simulation produces one column of the sensing matrix.

The exported CST field components are reduced to field magnitude:

$$
|E| = \sqrt{|E_x|^2 + |E_y|^2 + |E_z|^2}.
$$

Each object position forms one column:

$$
A[:,j] = |E|_{\mathrm{probe\ plane,\ object\ at\ position}\ j}.
$$

The inverse problem is therefore discrete hidden-state recovery, not continuous imaging.

---

## Operator diagnostics

The useful question is whether the columns of $A$ are distinguishable.

For two candidate positions $i$ and $j$, the column correlation is

$$
\rho_{ij}
=
\frac{a_i^T a_j}{\|a_i\|\,\|a_j\|}.
$$

If

$$
\rho_{ij} \approx 1,
$$

then those two positions produce nearly indistinguishable measured fields.

The boundary helps only if it reduces this ambiguity:

$$
\max_{i\neq j}|\rho_{ij}| \downarrow
$$

or improves the singular-value structure:

$$
\kappa(A)
=
\frac{\sigma_{\max}(A)}{\sigma_{\min}(A)}
\downarrow.
$$

A full-rank operator is not enough. A full-rank operator can still be poorly conditioned or practically ambiguous.

The stronger claim is not:

> the metasurface makes the field stronger.

It is:

> the boundary changes the forward map so that hidden states become more identifiable.

---

## Boundary diversity

The first stage used idealized PEC boundary configurations before moving to a physical metasurface.

Those simulations showed that different boundary geometries changed which object positions were easiest or hardest to detect. Flat, tilted, and stepped boundaries produced different detectability patterns.

The stacked-operator idea is

$$
A_{\mathrm{stacked}}
=
\begin{bmatrix}
A_{\mathrm{flat}} \\
A_{\mathrm{tilted}} \\
A_{\mathrm{stepped}}
\end{bmatrix}.
$$

The hypothesis is

$$
\mathrm{blindspots}(A_{\mathrm{flat}})
\neq
\mathrm{blindspots}(A_{\mathrm{tilted}})
\neq
\mathrm{blindspots}(A_{\mathrm{stepped}}).
$$

If the blind spots are complementary, stacking should reduce worst-case leakage:

$$
L_{\max}(A_{\mathrm{stacked}})
<
\min[
L_{\max}(A_{\mathrm{flat}}),
L_{\max}(A_{\mathrm{tilted}}),
L_{\max}(A_{\mathrm{stepped}})
].
$$

This is the core operator-level claim still being tested.

---

## Reconstruction baseline

The baseline inverse solver is Tikhonov regularization:

$$
\hat{\mathbf{x}}
=
\arg\min_{\mathbf{x}}
\left\{
\|A\mathbf{x}-\mathbf{y}\|_2^2
+
\lambda\|\mathbf{x}\|_2^2
\right\}.
$$

The closed-form solution is

$$
\hat{\mathbf{x}}
=
(A^TA+\lambda I)^{-1}A^T\mathbf{y}.
$$

Using the singular value decomposition, the same solution can be read as a spectral filter:

$$
\hat{\mathbf{x}}
=
\sum_i
\frac{\sigma_i}{\sigma_i^2+\lambda}
(u_i^T\mathbf{y})v_i.
$$

More complex solvers are not automatically better. If the operator does not separate hidden states, solver sophistication cannot recover information that was never measured.

---

## Computational pipeline

The project has moved beyond a one-off reconstruction script.

The current pipeline supports:

- CST ASCII electric-field loading;
- probe-plane extraction;
- sensing-matrix construction;
- operator artifact saving and reloading;
- Tikhonov reconstruction;
- discrimination and leakage analysis;
- AWGN robustness testing;
- preparation for matched solver comparisons.

The current diagnostic quantities are

$$
\kappa(A),\quad
\rho_{ij},\quad
L_{ij},\quad
P(\arg\max \hat{\mathbf{x}}=\arg\max \mathbf{x}).
$$

These quantities are narrow, but defensible. They describe the controlled inverse problem without pretending to validate a port-scale deployment.

---

## Physical metasurface prototype

The operator study began with idealized PEC boundaries. That answered one question:

> can boundary conditions change the inverse problem?

It did not answer the next question:

> can a real passive surface implement a useful boundary condition?

The project has therefore moved toward a physical 26 GHz passive metasurface design.

The current unit cell is a loop–paddle–diamond geometry:

- outer square loop;
- four inward-facing paddles;
- floating central diamond island;
- grounded dielectric substrate.

This is not best described as a conventional cross or Jerusalem-cross AMC. It is better interpreted as a loop-dominated LC resonator with capacitive loading from the paddle–diamond gaps.

The CST field and surface-current plots support that interpretation. Current concentrates mainly around the outer loop and paddle regions, while the central diamond behaves more like a capacitive island than the dominant current path.

---

## Unit-cell geometry

The current unit-cell pitch is

$$
P = 3.2\ \mathrm{mm}.
$$

The cell center is

$$
x_c = y_c = \frac{P}{2} = 1.6\ \mathrm{mm}.
$$

| Parameter | Meaning | Current value |
|---|---|---:|
| $L_o$ | outer loop size | 2.08 mm |
| $W_o$ | loop trace width | 0.28 mm |
| $L_n$ | paddle neck length | 0.17 mm |
| $W_n$ | paddle neck width | 0.16 mm |
| $L_h$ | paddle head length | 0.09 mm |
| $W_h$ | paddle head width | 0.30 mm |
| $D$ | diamond diagonal | about 0.68 mm |

The loop opening is

$$
L_{\mathrm{in}} = L_o - 2W_o.
$$

The half opening is

$$
h_{\mathrm{in}} = \frac{L_{\mathrm{in}}}{2}.
$$

The critical paddle–diamond gap is

$$
g = h_{\mathrm{in}} - (L_n + L_h) - \frac{D}{2}.
$$

This is the most fabrication-sensitive feature because it controls the local capacitance between the paddle heads and the floating diamond.

---

## LC interpretation

The simplified resonance model is

$$
f_0 =
\frac{1}{2\pi\sqrt{L_{\mathrm{eff}}C_{\mathrm{eff}}}}.
$$

The effective inductance is approximately

$$
L_{\mathrm{eff}}
\approx
L_{\mathrm{loop}} + L_{\mathrm{paddle}}.
$$

The effective capacitance is approximately

$$
C_{\mathrm{eff}}
\approx
C_{\mathrm{paddle-diamond}}
+
C_{\mathrm{ground}}
+
C_{\mathrm{mutual}}.
$$

| Geometry | Circuit role |
|---|---|
| outer loop | dominant inductive path |
| paddle necks and heads | loading path and local current concentration |
| paddle–diamond gaps | dominant capacitive loading |
| floating diamond | capacitive island |
| substrate and ground | grounded dielectric loading |
| neighboring cells | mutual capacitance and coupling |

The design is physically interpretable:

$$
\text{loop current} \rightarrow L_{\mathrm{eff}},
$$

$$
\text{gap electric field} \rightarrow C_{\mathrm{eff}}.
$$

This matters because the surface is not being treated as an arbitrary patterned reflector. Its resonance mechanism is tied to identifiable current and field localization.

---

## Unit-cell and finite-array validation

The unit cell was simulated with periodic / Floquet boundary conditions.

Normal incidence used

$$
\mathbf{k}=(0,0,-1).
$$

Two linear polarizations were checked:

$$
\mathbf{E}=(0,1,0),
$$

and

$$
\mathbf{E}=(1,0,0).
$$

Angular sweeps used

$$
\mathbf{k}=(\sin\theta,0,-\cos\theta),
$$

for

$$
\theta = 0^\circ,\ 20^\circ,\ 40^\circ,\ 60^\circ.
$$

A 3×3 finite array was then simulated under normal-incidence plane-wave excitation at

$$
25\ \mathrm{GHz},\quad
26\ \mathrm{GHz},\quad
27\ \mathrm{GHz}.
$$

The purpose was not to prove deployment performance. The purpose was to check whether the intended resonance mechanism survived in a small finite array.

Observed behavior:

- at 25 GHz: weaker field localization and lower surface-current intensity;
- at 26 GHz: strongest field localization, strongest current circulation, and clear resonance behavior;
- at 27 GHz: weaker localization again, consistent with post-resonant decay.

The finite array did not show identical behavior in every cell. That is expected. In an infinite periodic array, each cell has four neighbors. In a finite array, edge and corner cells lose part of that coupling.

| Cell type | Neighbor count | Expected behavior |
|---|---:|---|
| center cell | 4 | closest to periodic behavior |
| edge cell | 3 | distorted response |
| corner cell | 2 | strongest edge perturbation |

This can be interpreted as a change in mutual capacitance:

$$
C_{\mathrm{mutual}}
=
C_{\mathrm{left}}
+
C_{\mathrm{right}}
+
C_{\mathrm{top}}
+
C_{\mathrm{bottom}}.
$$

The validation result is deliberately narrow:

> the loop–paddle–diamond cell shows a physically interpretable resonance near the target band, and the mechanism survives small finite-array simulation.

It does not yet show that the fabricated panel improves a measured blocked link.

---

## Fabrication-ready panel

The first prototype is a 31×31 finite array on Rogers RO4350B.

| Item | Value |
|---|---:|
| board size | 100 mm × 100 mm |
| unit-cell pitch | 3.2 mm |
| array size | 31 × 31 |
| active aperture | 99.2 mm × 99.2 mm |
| number of cells | 961 |
| substrate | Rogers RO4350B |
| dielectric thickness | 0.265 mm |
| copper | 1 oz top and bottom |
| surface finish | ENIG |
| solder mask | none |
| silkscreen | none |

The active aperture is

$$
31 \times 3.2 = 99.2\ \mathrm{mm}.
$$

At 26 GHz,

$$
\lambda_0 \approx 11.54\ \mathrm{mm}.
$$

So the panel width is approximately

$$
\frac{99.2}{11.54} \approx 8.6\lambda_0.
$$

This is large enough to test measurable reflection or redirection effects in a controlled measurement setup.

The first panel is not meant to prove final port deployment. It is meant to test whether a fabricated passive boundary can produce measurable field redistribution in a blocked-link experiment.

---

## Fabrication constraints

Supplier-confirmed fabrication details:

| Item | Confirmed detail |
|---|---|
| substrate | original Rogers RO4350B |
| dielectric thickness | 0.265 mm, excluding copper |
| dielectric constant | $D_k = 3.48$ |
| copper | 1 oz top and bottom |
| minimum trace / spacing | about 0.16–0.17 mm workable |
| tolerance | about $\pm 0.03\ \mathrm{mm}$ |
| bottom layer | full solid ground plane |
| preferred output | Gerber RS-274X |
| finish | ENIG |

Exact resonance at 26.000 GHz is not required. The first prototype target is measurable metasurface-assisted field redistribution in the n258 / mmWave region.

The most important fabrication risk is the paddle–diamond gap.

If the designed gap is

$$
g = 0.17\ \mathrm{mm},
$$

and fabrication tolerance is approximately

$$
\pm 0.03\ \mathrm{mm},
$$

then the realized gap may fall in the range

$$
0.14\ \mathrm{mm}
\le
g
\le
0.20\ \mathrm{mm}.
$$

That may shift the resonance, but it should preserve the intended LC mechanism if the pattern remains close to the design.

---

## Measurement bridge

The missing bridge is experimental validation.

The first planned measurement is a controlled blocked-link comparison using:

- VNA;
- mmWave / Ka-band measurement setup;
- horn antennas;
- anechoic chamber;
- fabricated metasurface panel;
- obstruction or absorber / metal blockage;
- controlled panel angle.

The measured quantity is

$$
\Delta S_{21}.
$$

The comparison is

$$
\Delta S_{21}
=
S_{21,\mathrm{with\ metasurface}}
-
S_{21,\mathrm{blocked\ baseline}}.
$$

The intended sequence is:

1. measure the baseline direct or blocked link;
2. insert the metasurface panel at a controlled angle;
3. measure the recovered transmission path;
4. compare the change in $S_{21}$.

This is still not a port deployment test. It is a controlled link-recovery test.

The correct interpretation is:

> does the fabricated boundary create measurable field redistribution under controlled blockage?

not:

> does the metasurface solve port coverage?

---

## Chamber simplification

A full anechoic chamber CAD model is not necessary at this stage.

A simplified measurement abstraction is enough:

| Real object | Simulation approximation |
|---|---|
| Tx horn | plane wave or far-field source |
| metasurface panel | finite 31×31 array |
| Rx horn | probe or far-field monitor |
| blockage | PEC plate or absorber block |
| chamber walls | open / PML boundaries |

The measurement distance should consider the Fraunhofer far-field condition:

$$
R_{\mathrm{FF}}
=
\frac{2D^2}{\lambda}.
$$

For a 100 mm aperture at 26 GHz,

$$
R_{\mathrm{FF}}
=
\frac{2(0.1)^2}{0.01154}
\approx
1.73\ \mathrm{m}.
$$

If the chamber cannot support that distance, the experiment can still be framed as relative link recovery rather than strict far-field gain measurement.

---

## Interactive diagnostic

The diagnostic below visualizes the sensing-matrix argument: how boundary configuration changes singular values, column correlations, and Tikhonov reconstruction behavior.

Read it as a model diagnostic, not as a deployment result.

<div class="tool-embed">
<div class="tool-label">Interactive — sensing matrix conditioning</div>
{% include sensing-matrix-viz.html %}
</div>

---

## What worked

The project became defensible after replacing a deployment claim with an operator claim.

Instead of saying:

> the boundary improves coverage,

the project measures:

$$
\kappa(A),\quad
\rho_{ij},\quad
L_{ij},\quad
P(\arg\max \hat{\mathbf{x}}=\arg\max \mathbf{x}).
$$

The second useful step was separating two questions:

1. Does a boundary condition improve the sensing operator?
2. Can a real passive metasurface implement a useful boundary condition?

The CST-to-Python pipeline addresses the first question. The 26 GHz loop–paddle–diamond prototype addresses the second.

---

## What failed

The original port-scale framing was too large for the evidence.

A real port is a changing ensemble of container stacks, vehicles, cranes, ground reflections, receiver paths, and blockages. A single simulation can look persuasive while proving little.

The current study does not claim:

- real port coverage improvement;
- service-level reliability;
- robustness to container rearrangement;
- measured hardware performance;
- ideal-to-hardware transfer;
- full chamber-validated deployment performance.

Those are future validation layers.

---

## Current standing

The project is past the concept-only stage but not yet experimentally validated.

Completed:

- controlled 26 GHz NLoS forward model;
- CST-to-Python sensing-matrix construction;
- operator artifact saving and reloading;
- Tikhonov reconstruction workflow;
- discrimination and leakage analysis;
- AWGN robustness testing;
- boundary-level PEC comparison using flat, tilted, and stepped configurations;
- custom 26 GHz loop–paddle–diamond unit-cell design;
- unit-cell resonance tuning near the n258 / mmWave region;
- periodic / Floquet unit-cell setup;
- 3×3 finite-array CST validation using field and surface-current plots;
- fabrication stack selected: RO4350B, 0.265 mm dielectric, 1 oz copper, ENIG;
- supplier constraints checked against trace width and gap requirements;
- 31×31 finite panel layout prepared for a 100 mm × 100 mm prototype;
- Gerber / fabrication package preparation.

In progress:

- final supplier quotation and invoice process;
- CAM / DFM confirmation;
- PCB fabrication order;
- chamber measurement planning;
- controlled $\Delta S_{21}$ link-recovery test;
- multi-solver comparison under matched perturbations;
- stronger structured-corruption tests beyond AWGN;
- poster / viva explanation of simulation-validated progress.

Not yet completed:

- fabricated panel;
- fabricated panel measurement;
- measured S-parameters;
- experimental $\Delta S_{21}$ recovery result;
- full chamber validation;
- real port coverage validation;
- service-level reliability validation.

**Claim level:** controlled forward-model evidence plus fabrication-ready metasurface design. No real-port deployment claim.

---

## What remains unresolved

The remaining chain is

$$
\text{boundary design}
\rightarrow
A
\rightarrow
\text{operator diagnostics}
\rightarrow
\hat{\mathbf{x}}
\rightarrow
\text{measured field redistribution}.
$$

For boundary diversity, the required comparisons remain

$$
\kappa(A_{\mathrm{stacked}})
\quad \mathrm{vs.} \quad
\kappa(A_k),
$$

$$
\max_{i\neq j}|\rho_{ij}(A_{\mathrm{stacked}})|
\quad \mathrm{vs.} \quad
\max_{i\neq j}|\rho_{ij}(A_k),
$$

and

$$
P_{\mathrm{success}}(\mathrm{stacked})
\quad \mathrm{vs.} \quad
P_{\mathrm{success}}(A_k)
$$

under matched noise.

For the physical metasurface, the required comparison is

$$
S_{21,\mathrm{with\ metasurface}}
\quad \mathrm{vs.} \quad
S_{21,\mathrm{blocked\ baseline}}.
$$

Only after those layers are connected can the project move from operator evidence toward hardware-supported boundary diversity.

---

## What I learned

The important object is not the metasurface by itself.

The important object is the operator:

$$
A:\mathbf{x}\mapsto\mathbf{y}.
$$

A passive boundary matters only if it changes that map in a useful way.

The strongest version of this project is not:

> passive metasurfaces improve mmWave coverage.

It is:

> controlled boundary diversity can be evaluated by how it changes the conditioning, coherence, leakage, and reconstruction stability of a discrete NLoS inverse problem.

The physical metasurface matters because it tests whether that operator-level idea can move from idealized PEC boundaries toward a real passive structure.

---

## Summary

This project has evolved from a broad passive-coverage idea into an operator-centered mmWave inverse-sensing study with a fabrication-ready metasurface prototype.

The computational side asks whether boundary conditions improve the map

$$
A:\mathbf{x}\mapsto\mathbf{y},
$$

where $\mathbf{x}$ is a sparse hidden-position vector and $\mathbf{y}$ is the measured probe-plane response. The relevant metrics are not only field strength, but conditioning, coherence, leakage, and reconstruction stability.

The physical side develops a 26 GHz loop–paddle–diamond passive metasurface unit cell. CST field and current plots indicate a loop-dominated LC resonance, with paddle–diamond gaps acting as the main capacitive loading mechanism. The design has been scaled to a 31×31 RO4350B finite panel for fabrication.

The current contribution is not a completed port deployment result. It is a controlled framework for evaluating passive boundary diversity as an inverse-sensing operator, plus a physically interpretable metasurface design prepared for hardware validation.

**Related notes:**  
[Simulation is not deployment evidence](/notes/simulation-not-deployment/)  
[Good fits don't imply identifiability](/notes/good-fits/)

**Reading ledger:**  
[EM simulation](/reading-ledger/#em-sim)  
[Regularized inverse problems](/reading-ledger/#inverse-problems)  
[Sensing matrices](/reading-ledger/#sensing-matrices)

[Back to work](/work/)