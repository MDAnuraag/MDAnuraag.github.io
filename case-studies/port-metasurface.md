---
layout: page
title: Port Metasurface NLoS Recovery
permalink: /case-studies/port-metasurface/
---

## Problem

Can a passive metasurface restore mmWave connectivity (24.25-27.5 GHz) in a container port when line-of-sight gets blocked?

**Context**: Private 5G for port automation. Containers move around, block direct paths. Need link continuity, not peak throughput.

**Approach**: Design reflective metasurface to redirect RF around obstacles.

This is my senior thesis—still in progress as of January 2026.

---

## What I've done so far

**Simulation pipeline**:
1. **Unit cell design** (Floquet boundary conditions, sweep geometry/frequency/angle)
2. **Array response** (finite array with edge effects)
3. **Deployment scenarios** (simulated port environments with deliberate blockage)

**Results so far**:
- Unit cell shows broadband reflection with reasonable phase control
- Array simulations predict ΔS₂₁ improvement of 10-15 dB under certain blockage geometries
- Sensitivity analysis shows angular tolerance is limiting factor (not resonance bandwidth)

Sounds promising. But I don't trust these numbers yet.

---

## Why I'm skeptical

**Environment modeling is approximate**:

I'm simulating "a container port" based on:
- Estimated ground plane properties (concrete, but which type? dry or wet?)
- Assumed container spacing (changes hourly in real port)
- Simplified clutter (no cranes, forklifts, people)

Any mismatch between simulated environment and real deployment could dominate error more than unit cell optimization.

**Optimization might be overfitting**:

If I optimize for one specific blockage scenario, does the design generalize to other container placements? Unknown without testing multiple scenarios systematically.

**Hardware nonidealities not captured**:

Real PCB fabrication has:
- ±50 μm trace width tolerance
- Substrate loss that varies with humidity
- Element-to-element coupling not perfectly modeled

These could shift resonances enough to matter.

---

## What I'm doing about it

**Not claiming deployment performance from simulation alone.**

Instead:
1. **Bench characterization** (two-horn test in anechoic chamber—isolate metasurface performance from environment)
2. **Controlled outdoor tests** (repeatable blockage scenarios, measure spatial distribution not single point)
3. **Report distributions** (performance across positions, not best case)

**Status**: Simulation and design complete. PCB fabrication pending (expected February 2026). Measurements planned for March 2026.

Until I have real measurements with controlled ablation studies, I'm treating simulation results as "what might happen" not "what will happen."

---

## What I've learned so far

**Design constraints matter more than peak performance**:

Early on, I optimized for maximum gain at one frequency/angle. That produced narrow resonances that looked great in simulation but would be brittle to fabrication tolerances.

Switched to optimizing for:
- Broadband response (flat across 3+ GHz)
- Angular tolerance (stable ±20° from design angle)
- Fabrication robustness (±50 μm tolerance shouldn't kill it)

This reduced peak performance but increased confidence the design might actually work.

**Simulation-to-measurement workflow matters**:

I can't just simulate one scenario and claim success. I need:
- Bench characterization (unit cell + array) separate from deployment
- Multiple deployment scenarios (not just one)
- Spatial measurements (receiver grid, not single point)

Otherwise I won't know if performance comes from the metasurface or lucky channel realization.

---

## What I'll report in thesis

**Confident claims**:
- Unit cell design methodology (broadband + angular tolerance prioritized)
- Simulation workflow (unit cell → array → deployment scenarios)
- Expected limiting factors (environment uncertainty > device optimization)

**Contingent claims** (pending measurements):
- Actual ΔS₂₁ improvement in controlled tests
- Spatial coverage vs. single-point gain
- Fabrication tolerance sensitivity

**Won't claim**:
- Deployment-ready performance (need long-term field testing)
- Generalization to other port environments (only testing one site)
- Comparison to active solutions (outside thesis scope)

---

**Status**: Senior thesis in progress. Simulation complete, fabrication pending (Feb 2026), measurements planned (Mar 2026). Will update case study after measurements.

**What I'm learning**: Simulation can guide design, but environment uncertainty dominates prediction error. Measurements with controlled ablation are necessary before claiming mechanism attribution.

---

**Constraint analysis**: [/constraints/port-metasurface](/constraints/port-metasurface/)  
**Methods**: [EM simulation](/reading-ledger/#em-sim), [Identifiability](/reading-ledger/#identifiability)

**Project date**: Fall 2024 - Spring 2026 (ongoing)  
**My experience level**: First RF/EM project, first hardware design project. Learning about simulation-measurement correspondence.

**Expected completion**: May 2026 (thesis defense)