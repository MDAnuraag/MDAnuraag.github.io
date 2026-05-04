---
layout: page
title: Simulation Is Not Deployment Evidence
permalink: /notes/simulation-not-deployment/
---

## The error

A simulation improves a metric, so the design is treated as deployable.

That is the wrong inference.

A simulation result is evidence inside the assumptions of the simulation. Deployment adds uncontrolled geometry, fabrication, environment, calibration, and usage conditions.

---

## Why it fails

A controlled model usually fixes variables that the real environment does not fix.

A simulation may assume:

- known geometry;
- ideal materials;
- stable boundary conditions;
- clean excitation;
- perfect alignment;
- repeatable environment;
- simplified scatterers;
- no aging or fabrication error.

A deployment does not give those assumptions for free.

The correct inference is:

$$
\text{simulation improvement}
\Rightarrow
\text{bounded model evidence},
$$

not

$$
\text{simulation improvement}
\Rightarrow
\text{field deployment works}.
$$

---

## Example: port metasurface

The port metasurface project began as a coverage-recovery problem for container ports.

That framing was too broad. Full-port simulations were dominated by geometry assumptions: container placement, crane motion, blockage state, and ground reflections could change the channel more than the boundary design itself.

The project became more defensible after narrowing the claim.

Instead of claiming deployment coverage improvement, the current question is:

> does boundary diversity improve identifiability in a controlled inverse-scattering geometry?

That can be tested through sensing matrices, condition numbers, leakage, discrimination, and reconstruction robustness.

---

## What deployment would require

A deployment-level claim would need evidence beyond the current simulation:

- port-calibrated geometry;
- robustness to container rearrangement;
- blockage variation;
- realistic material and surface losses;
- fabrication tolerances;
- angular sensitivity;
- link or sensing metrics under multiple scenarios;
- bench or field validation.

Until those exist, the result remains a controlled forward-model study.

---

## Working rule

Before making a deployment claim, separate three levels:

### 1. Model result

The design works under defined simulation assumptions.

### 2. Robustness result

The design still works when assumptions are perturbed.

### 3. Deployment result

The design works under measured or field-representative conditions.

Most early simulations only justify level 1.

---

## Where this appears

- [Port Metasurface](/case-studies/port-metasurface/)

[Back to notes](/notes/)