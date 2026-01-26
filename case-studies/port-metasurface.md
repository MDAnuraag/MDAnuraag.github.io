---
layout: page
title: Port Metasurface NLoS Recovery
permalink: /case-studies/port-metasurface/
---

## Problem

Can a fully passive metasurface help restore mmWave connectivity (24.25–27.5 GHz, n258)
when line-of-sight is blocked in a container port?

**Context**  
Private 5G is being trialed for port automation and teleoperation. In these settings,
containers, cranes, and vehicles regularly block direct paths. The practical requirement
is link continuity under blockage, not peak throughput.

This project asks whether a passive surface can create a usable reflected path under
those conditions, without relying on active repeaters or dense infrastructure.

This is my senior thesis and is still in progress as of January 2026.

---

## What I’ve done so far

### Simulation workflow

I’ve set up a three-stage simulation pipeline:

1. **Unit cell design**  
   Periodic simulations (Floquet boundaries) to study reflection magnitude and phase as a
   function of geometry, frequency, and incidence angle.

2. **Finite array response**  
   Finite-sized arrays to account for aperture effects and non-ideal periodicity.

3. **Deployment-style geometries**  
   Simplified port-like scenes where the direct path is deliberately blocked and a
   reflected path is created via the metasurface.

The goal so far has been to understand sensitivity and failure modes, not to optimize a
single “best” design.

---

## What the simulations suggest (with caveats)

- The unit cell can be tuned to produce broadband reflection across n258 rather than a
  sharp resonance.
- Array-level simulations show potential improvement in link metrics (ΔS₂₁ on the order
  of 10–15 dB) for certain blockage and placement geometries.
- Angular stability appears more limiting than bandwidth: designs that look wideband
  often fail under modest angle changes.

These results are internally consistent within the simulation setup, but I do not yet
trust them as predictors of real deployment performance.

---

## Why I don’t trust the numbers yet

### Environment modeling dominates uncertainty

The “port” in simulation is a coarse approximation:
- ground properties are assumed,
- container spacing is fixed,
- clutter is simplified or omitted.

Small changes in geometry can completely change available paths. I cannot tell whether
predicted gains come from the metasurface or from a favorable but unrealistic channel
realization.

### Optimization may be brittle

Designs can be tuned to perform well for one blockage scenario while failing in slightly
different ones. I have not yet sampled enough geometries to assess generalization.

### Hardware effects are not fully captured

Current simulations assume:
- ideal material properties,
- perfect alignment,
- simplified coupling between elements.

At mmWave, fabrication tolerances and loss variation are likely to matter, but I don’t yet
know how much.

---

## What I’m doing instead of over-claiming

I am explicitly separating **device behavior** from **environment behavior**.

Planned next steps focus on isolation rather than realism:
1. **Bench characterization** using a two-horn setup to measure the metasurface response
   independent of a port environment.
2. **Controlled outdoor tests** with repeatable blockage geometries.
3. **Spatial measurements** (receiver grids) rather than single-point metrics.

Until those are done, I’m treating simulations as design guidance, not evidence of
deployment readiness.

---

## What I’ve learned so far

- Maximizing peak gain in simulation often produces narrow, fragile responses.
- Designs that trade peak performance for bandwidth and angular tolerance feel more
  defensible, even if they look worse on paper.
- Without controlled ablation (with/without surface under identical conditions), it’s
  impossible to attribute performance to the metasurface rather than the channel.

---

## What I will and won’t claim in the thesis

**Will claim**
- A design and simulation workflow for passive metasurfaces targeting n258.
- Identification of dominant sensitivities (angle, placement, environment).
- Why environment uncertainty limits simulation-only conclusions.

**Will not claim**
- Deployment-ready performance.
- Generalization across different ports.
- Superiority over active or network-level solutions.

---

**Status**  
Simulation complete. Fabrication pending (expected Feb 2026). Measurements planned
(Mar 2026).

**Constraint analysis**: [/constraints/port-metasurface](/constraints/port-metasurface/)
