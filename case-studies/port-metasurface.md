---
layout: page
title: Passive mmWave Metasurface for Port NLoS Recovery
permalink: /case-studies/port-metasurface/
---

## The question

Can a fully passive metasurface restore usable mmWave connectivity in a container port when line-of-sight paths are intermittently blocked?

The target application is private 5G in band n258 (24.25–27.5 GHz).  
The limiting factor is link continuity, not peak throughput.

---

## The forward claim

A passive metasurface redirects incident mmWave energy through engineered reflection.

The forward map is:

unit-cell geometry + substrate + periodicity + incidence  
→ reflection magnitude and phase versus frequency and angle  
→ predicted link-level recovery under blockage

The modeling pipeline is split into two stages:

- **Periodic unit cell:** Floquet-boundary simulations of reflection response versus frequency and angle.
- **Finite array and deployment geometry:** predicted redirection gain and spatial coverage under blocked paths.

This defines a deterministic map from surface design to expected link metrics under assumed environments.

---

## Where ambiguity enters

Several non-uniquenesses limit inference from simulation or single-point measurement:

- Distinct unit-cell designs can yield similar ΔS21 at a specific receiver location.
- Narrow resonant responses can appear optimal at one frequency yet fail across n258.
- Angular sensitivity can dominate performance under realistic placement.
- Deployment geometry can outweigh unit-cell optimization.

Peak gain at a single frequency and location is therefore not a sufficient performance metric.

---

## What was constrained

The design space was restricted by robustness requirements tied to the failure mode:

- **Bandwidth:** performance evaluated across the full n258 band.
- **Spectral smoothness:** broadband response favored over narrow resonances.
- **Passivity:** no biasing, tuning elements, or active control.
- **Fabrication realism:** PCB-style copper patterns on low-loss dielectric substrates.
- **Angular tolerance:** stability under oblique incidence consistent with port deployment.

These constraints deliberately exclude solutions that perform well only under idealized laboratory conditions.

---

## What survived (so far)

Several aspects are fixed:

- The objective is NLoS recovery under dynamic blockage, not general coverage enhancement.
- Evaluation must prioritize bandwidth, angular tolerance, and spatial robustness over peak gain.
- The simulation-to-measurement workflow is defined: unit cell → array → blocked-link test.

Several aspects remain non-identifiable without hardware:

- Optimal unit-cell geometry within the constrained design class.
- Array size and placement that balance gain against spatial uniformity.
- Real-world ΔS21 recovery magnitude prior to measurement.

This is an expected limitation, not a deficiency.

---

## Validation plan

Inference will be restricted to what controlled measurements can support:

- Two-horn link test with deliberate LoS blockage.
- Frequency sweep across n258 reporting ΔS21 or ΔPrx improvement.
- Receiver-grid scans to quantify spatial robustness and exclude single-point optimization.

No claims will be made beyond what these measurements can disambiguate.

---

## What generalized

In cluttered RF environments, performance claims are meaningful only relative to the dominant failure mode.

For blockage-limited links, robustness—bandwidth, angular tolerance, and spatial uniformity—must be enforced as primary constraints. Designs optimized for peak response without these constraints do not transfer to real deployments.

---

*Status: design and simulation pipeline established; fabrication and measurement pending.*
