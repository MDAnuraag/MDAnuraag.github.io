---
layout: page
title: Port Metasurface NLoS Recovery
permalink: /case-studies/port-metasurface/
---

## Problem

Can a passive metasurface restore mmWave connectivity (24.25-27.5 GHz) in a container port when line-of-sight gets blocked?

**Context**: Private 5G for port automation. Containers move around, block direct paths between base station and equipment. Need link continuity, not peak throughput.

**Initial question**: Design a reflective metasurface to redirect RF around obstacles.

**What it became**: An inverse problem—if I can control boundary conditions (via programmable phase), what can I actually reconstruct about hidden objects from the scattered field?

This is my senior thesis. Still in progress as of February 2026.

---

## What I've done

### Phase 1: Forward modeling (Fall 2024 - Jan 2026)

**Started with standard approach**:
1. Unit cell design in CST (periodic boundary conditions)
2. Sweep geometry/frequency to get reflection phase
3. Simulate finite arrays
4. Test in "port-like" scenarios with blockage

**Results**: 
- Got broadband reflection across n258 (avoided narrow resonances)
- Simulations showed potential 10-15 dB improvement for certain geometries
- Angular stability was more limiting than bandwidth

**Problem**: I couldn't tell if the performance came from the metasurface or just favorable (but unrealistic) channel geometry.

Environment uncertainty dominates everything:
- Ground properties? Guessed.
- Container spacing? Changes hourly in real ports.
- Clutter (cranes, forklifts)? Simplified or omitted.

Small geometry changes completely alter available propagation paths. Simulation predictions felt meaningless without measurements.

---

## The pivot (January 2026)

**Realization**: Instead of optimizing for "best coverage," I could treat this as an inverse scattering problem.

**New framing**:
- Metasurface = programmable boundary condition
- Different phase patterns = different measurements of the same hidden scene
- Question: How does phase diversity affect observability of hidden objects?

This turned it from "design optimization" (hard to validate) into "inverse problem analysis" (quantifiable).

---

## What I'm doing now (Feb-Mar 2026)

### Setting up the inverse problem

**Geometry** (deliberately simplified):
- One source (horn/waveguide)
- One occluding wall (blocks direct path)
- One hidden scatterer (what I'm trying to find)
- One metasurface plane (programmable phase boundary)
- Measurement plane (where I "measure" the field)

**Why simple**: I want to understand the fundamental limit—does phase diversity help?—before adding realistic complexity.

**Approach**:
1. **Generate phase diversity dataset**:
   - Uniform phase (baseline)
   - Linear gradients
   - Binary patterns
   - Random configurations
   - ~8-10 different phase distributions

2. **Build sensing matrix**:
   - Discretize hidden object space into pixels
   - Each phase configuration → one row of sensing matrix A
   - Forward model: measured field = A × object

3. **Test reconstruction**:
   - Direct inversion (least squares)
   - Regularized inversion (Tikhonov, L1)
   - Analyze conditioning: how does number of phase patterns affect κ(A)?

**Status**: CST simulations running. Python reconstruction pipeline in progress.

---

## What I expect to find

**Hypothesis**: More phase patterns → better conditioned inverse problem → better reconstruction.

**Metrics I'm tracking**:
- Condition number κ(A) vs. number of measurements
- Reconstruction error vs. regularization parameter
- Resolution limits
- Noise robustness (add synthetic measurement noise, see what breaks)

**What would be interesting**: 
- If certain phase patterns are much more informative than others
- If there's a "sweet spot" number of measurements (beyond which you don't gain much)
- Where the method fundamentally breaks (too much noise, too many objects, etc.)

**What would be disappointing but still valid**:
- If reconstruction barely works—that's still a quantitative assessment of the approach's limits

---

## What I'm not doing

❌ **Complex unit cell optimization**: Using ideal phase boundaries in simulation. Real unit cells would add fabrication constraints without changing the fundamental inverse problem.

❌ **Realistic port environments**: One scatterer, one wall. Adding containers/cranes would obscure whether reconstruction fails due to physics or geometry complexity.

❌ **Multi-frequency**: Single frequency (26 GHz). Bandwidth is future work.

❌ **Hardware right now**: Might fabricate simple unit cell for validation if time allows, but the inverse problem analysis doesn't require it.

---

## What I've learned so far

**Simulation-to-measurement gap is real**: 

I initially thought "simulate port, optimize design, claim success." But:
- Can't simulate the real environment accurately enough
- Can't separate metasurface effect from channel effect without controlled experiments
- Optimization might just be overfitting to my approximate simulation

**Shifting to inverse problem helped**:

Instead of claiming "this design works in ports," I can claim "phase diversity improves conditioning of the inverse problem by X%." That's quantifiable and doesn't depend on perfect environment modeling.

**Design trade-offs are real**:

Early on I optimized for maximum gain at one angle/frequency. Got narrow, brittle responses. Switching to optimize for robustness (broadband, angular tolerance) reduced peak performance but felt more defensible.

**Why this matters for inverse problems**: If your forward model is fragile (breaks under small geometry changes), your inverse problem will be ill-conditioned. Robust forward design might actually help inversion.

---

## What I'll claim in thesis

**Confident claims**:
- Phase diversity improves conditioning of inverse scattering problems (quantitative)
- Certain phase patterns are more informative than others (show which ones)
- Reconstruction degrades predictably with noise (characterize the regime)

**Contingent claims** (pending measurements):
- Real metasurface can implement phase patterns from simulation
- Hardware tolerances don't destroy the effect

**Won't claim**:
- This works in real ports (haven't tested)
- This is better than active solutions (different problem)
- Deployment-ready performance (need long-term field trials)

---

## What comes next

**Feb-Mar 2026**: Finish inverse problem analysis
- Complete CST simulations
- Python reconstruction working
- Generate all figures
- Quantify limits

**Mar-Apr 2026** (if time): Minimal fabrication
- Simple unit cell array
- Measure phase response
- Compare to ideal simulation
- Frame as "forward model validation"

**May 2026**: Write thesis, defend

---

**Status**: Thesis in progress. Simulation phase complete. Inverse problem analysis ongoing. Measurements pending (if fabricated). Will update after results.

**What I'm learning**: How to turn an optimization problem I can't validate (metasurface for ports) into an inverse problem I can quantify (phase diversity for hidden object reconstruction). Also learning when to stop simulating and start measuring.

---

**Constraint analysis**: [/constraints/port-metasurface](/constraints/port-metasurface/)  
**Methods**: [EM simulation](/reading-ledger/#em-sim), [Identifiability](/reading-ledger/#identifiability)

**Project date**: Fall 2024 - Spring 2026 (ongoing)  
**My experience level**: First RF/EM project, first hardware design, first inverse scattering problem. Learning about simulation-measurement gaps and when simulation predictions mean something vs. when they don't.

**Expected completion**: May 2026 (thesis defense)