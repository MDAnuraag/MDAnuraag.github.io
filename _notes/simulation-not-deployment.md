---
layout: page
title: Simulation Is Not Deployment Evidence
permalink: /notes/simulation-not-deployment/
---

## Rule

A simulation result is evidence inside the simulation assumptions.

It is not deployment evidence.

---

## Failure mode

A model improves a metric, so the design is treated as field-ready.

Wrong inference.

Correct inference:

$$
\text{simulation improvement}
\Rightarrow
\text{bounded model evidence}
$$

Not:

$$
\text{simulation improvement}
\Rightarrow
\text{deployment works}
$$

---

## What simulations often fix

```text
geometry
materials
alignment
boundary conditions
excitation
noise model
scatterers
environment
fabrication accuracy
calibration
```

Deployment does not give those assumptions for free.

---

## Evidence ladder

**Model result**  
Works under defined simulation assumptions.

**Robustness result**  
Still works when assumptions are perturbed.

**Measurement result**  
Works in a controlled physical setup.

**Deployment result**  
Works under field-representative conditions.

Most early simulations justify only the first level.

---

## Port metasurface example

CST simulations can show:

```text
boundary changes the sensing matrix
unit cell has interpretable resonance
reconstruction survives synthetic noise
```

They do not prove:

```text
fabricated panel improves a blocked link
measured S21 matches simulation
real port coverage improves
```

Needed next:

```text
fabricated panel
measured S-parameters
repeatability
setup uncertainty
simulation-to-measurement comparison
```

---

## Appears in

[Port Metasurface](/work/port-metasurface/)

[Back to notes](/notes/)