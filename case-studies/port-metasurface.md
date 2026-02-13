---
layout: page
title: Port Metasurface NLoS Recovery
permalink: /case-studies/port-metasurface/
---

## Problem

Can a programmable metasurface help us see around corners in a container port? When a direct 5G mmWave link (24.25‑27.5 GHz) is blocked by stacked containers, the only way to maintain connectivity is to use reflected paths. By placing a metasurface on a visible wall and dynamically controlling its reflection phase, we can shape those multipath reflections to carry information about the hidden scene.

**Initial framing**: Design a metasurface to redirect RF around obstacles (a pure optics problem).  
**What it became**: An inverse problem—if I can program the boundary conditions, what can I actually **reconstruct** about hidden objects from the scattered field?

This is my senior thesis. Still in progress as of February 2026.

---

## What I've done

### Phase 1: Forward modeling (Fall 2024 – Jan 2026)

**Started with a standard design flow**:
1. Unit cell design in CST (periodic boundary conditions)
2. Sweep geometry/frequency to get reflection phase
3. Simulate finite arrays
4. Test in "port-like" blockage scenarios

**Results**:  
- Broadband reflection across n258 (avoided narrow resonances)  
- Simulations showed potential 10–15 dB improvement for certain geometries  
- Angular stability was more limiting than bandwidth

**Problem**: I couldn't tell if the performance came from the metasurface or just favorable (but unrealistic) channel geometry.

Environment uncertainty dominates everything:
- Ground properties? Guessed.
- Container spacing? Changes hourly in real ports.
- Clutter (cranes, forklifts)? Simplified or omitted.

Small geometry changes completely alter available propagation paths. Simulation predictions felt meaningless without measurements.

---

## The pivot (January 2026)

**Realization**: Instead of optimizing for "best coverage," I could treat the metasurface as a programmable boundary that creates diverse measurements of the same hidden scene.

**New framing**:
- Metasurface = programmable phase mask
- Each phase pattern gives me a different "view" of the hidden object  
- Question: How does phase diversity affect our ability to reconstruct that object from scattered field measurements?

This turned the project from "design optimization" (hard to validate) into "inverse problem analysis" (quantifiable and robust to environment uncertainty).

---

## What I'm doing now (Feb–Mar 2026)

### Setting up the inverse problem

**Geometry** (deliberately minimal):
- One source (horn/waveguide)
- One occluding wall (blocks direct path)
- One hidden scatterer (what I'm trying to find)
- One metasurface plane (programmable phase boundary)
- One measurement plane (where I record the field)

**Why simple**: I want to understand the fundamental limit—does phase diversity help?—before adding realistic complexity.

**Mathematical model** (under Born / single‑scatter approximation):
\[
\mathbf{y} = \mathbf{A} \mathbf{x} + \text{noise}
\]
- \(\mathbf{x}\) = discretized reflectivity of the hidden object (what I want)  
- \(\mathbf{y}\) = measured complex field for all phase patterns and receiver positions  
- \(\mathbf{A}\) = sensing matrix, built column by column from CST simulations: for each possible hidden scatterer location, I simulate the field at the receivers for every metasurface phase pattern. Each column of \(\mathbf{A}\) is the response of that point.

**Phase diversity dataset** (8–10 patterns):
- Uniform phase (baseline)
- Linear gradients
- Binary patterns (0/π)
- Random configurations

**Reconstruction methods**:
- **Least squares** (direct inversion) – usually unstable because \(\mathbf{A}\) is ill‑conditioned.
- **Tikhonov regularization** (ridge) – adds an \(\ell_2\) penalty \(\lambda \|\mathbf{x}\|^2\) to stabilize the inversion; gives a smooth reconstruction.
- **L1 regularization** (LASSO) – assumes the object is sparse (only a few bright points), which fits a port environment (containers, trucks). This is implemented via `sklearn.linear_model.Lasso`.
- **Total Variation (TV)** – edge‑preserving; planned for March.

**What I compute**:
- Condition number \(\kappa(\mathbf{A})\) vs. number of phase patterns – tells me how informative the measurements are.
- Reconstruction error (MSE) vs. regularization parameter \(\lambda\).
- Noise robustness: add synthetic Gaussian noise to \(\mathbf{y}\) and see how error grows.
- Point spread function (PSF) – the resolving power of the system.

**Status**: CST simulations for the minimal geometry are running. Python pipeline (using `numpy`, `scipy`, `sklearn`) is complete and tested on synthetic data. The code builds \(\mathbf{A}\), applies Tikhonov and L1, and produces all the analysis plots.

---

## What I expect to find

**Hypothesis**: More phase patterns → better conditioned \(\mathbf{A}\) → lower reconstruction error, up to a saturation point where additional patterns give diminishing returns.

**Metrics I'm tracking**:
- \(\kappa(\mathbf{A})\) as a function of number and type of phase patterns.
- MSE vs. \(\lambda\) for Tikhonov – the classic U‑shaped curve, revealing the optimal \(\lambda\).
- MSE vs. noise level – comparing Tikhonov, L1, and (later) TV.
- Resolution limit – the smallest separation at which two point scatterers can be distinguished.

**What would be interesting**:
- Certain phase patterns (e.g., random) might be much more informative than others (e.g., linear gradient). I can quantify that.
- L1 should dramatically outperform Tikhonov when the object is truly sparse – my early synthetic tests already show a 3× improvement in MSE.
- If there's a "sweet spot" number of measurements beyond which you gain little.

**What would be disappointing but still valid**:
- If reconstruction barely works—that's still a quantitative assessment of the approach's limits.

---

## What I'm not doing

❌ **Complex unit cell optimization**: Using ideal phase boundaries in simulation. Real unit cells would add fabrication constraints without changing the fundamental inverse problem.

❌ **Realistic port environments**: One scatterer, one wall. Adding containers/cranes would obscure whether reconstruction fails due to physics or geometry complexity.

❌ **Multi-frequency**: Single frequency (26 GHz). Bandwidth is future work.

❌ **Hardware right now**: Might fabricate a simple unit cell for validation if time allows, but the inverse problem analysis doesn't require it.

---

## What I've learned so far

**Simulation‑to‑measurement gap is real**:  
I initially thought "simulate port, optimize design, claim success." But:
- Can't simulate the real environment accurately enough.
- Can't separate metasurface effect from channel effect without controlled experiments.
- Optimization might just be overfitting to my approximate simulation.

**Shifting to inverse problems helped**:  
Instead of claiming "this design works in ports," I can claim "phase diversity improves the conditioning of the inverse problem by X% and reduces reconstruction error by Y% under Z dB noise." That's quantifiable and doesn't depend on perfect environment modeling.

**Regularization choice matters**:  
Tikhonov is a great baseline – simple, fast, stable. But for sparse scenes (containers, vehicles), L1 is dramatically better. TV will likely bridge the gap for extended objects with sharp edges.

**Why this matters for inverse problems**:  
If your forward model is fragile (breaks under small geometry changes), your inverse problem will be ill‑conditioned. Robust forward design might actually help inversion – that's a connection I want to explore further.

---

## What I'll claim in thesis

**Confident claims**:
- Phase diversity improves conditioning of the inverse scattering problem (I'll show \(\kappa(\mathbf{A})\) dropping by a factor of 10–100 as I add patterns).
- L1 regularization recovers sparse objects with < 1% error under moderate noise, while Tikhonov oversmooths (2–5% error).
- Reconstruction error vs. noise follows a predictable trend – I can characterize the operating regime where the method works.
- Certain phase patterns (random, binary) are more informative than linear gradients – I'll quantify the information gain.

**Contingent claims** (pending measurements):
- A real metasurface can approximate the ideal phase patterns used in simulation.
- Fabrication tolerances don't destroy the diversity effect (I'll test with a few fabricated samples).

**Won't claim**:
- This works in real ports (haven't tested).
- This is better than active solutions (different problem).
- Deployment‑ready performance (need long‑term field trials).

---

## What comes next

**Feb–Mar 2026**: Finish inverse problem analysis
- Complete CST simulations for the minimal geometry.
- Run the Python pipeline on real simulation data.
- Generate all figures (condition number, MSE vs. λ, noise sweeps, PSF).
- Quantify limits: resolution, maximum number of scatterers, noise tolerance.

**Mar–Apr 2026** (if time permits): Minimal fabrication
- Simple unit cell array (e.g., a few elements with pre‑designed phase shifts).
- Measure phase response in an anechoic chamber.
- Compare to ideal simulation and update the forward model.
- Frame as "forward model validation" – does the real hardware behave like my idealized phase mask?

**May 2026**: Write thesis, defend.

---

**Status**: Thesis in progress. Simulation phase complete. Inverse problem analysis ongoing. Measurements pending (if fabricated). Will update after results.

**What I'm learning**: How to turn an optimization problem I can't validate (metasurface for ports) into an inverse problem I can quantify (phase diversity for hidden object reconstruction). Also learning when to stop simulating and start measuring – and when simulation is enough because the question is fundamentally mathematical.

---

**Constraint analysis**: [/constraints/port-metasurface](/constraints/port-metasurface/)  
**Methods**: [EM simulation](/reading-ledger/#em-sim), [Inverse problems](/reading-ledger/#inverse-problems), [Regularization](/reading-ledger/#regularization)

**Project date**: Late Fall 2025 – Spring 2026 (ongoing)  
**My experience level**: First RF/EM project, first hardware design, first inverse scattering problem. Learning about simulation‑measurement gaps, the value of regularization, and when a baseline like Tikhonov is enough – and when it isn't.

**Expected completion**: May 2026 (thesis defense)