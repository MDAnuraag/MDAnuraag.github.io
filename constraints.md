---
layout: page
title: Constraints
permalink: /constraints/
---

Across projects, the limiting factor has rarely been resolution or compute.
It has been identifiability.

In several cases, the main constraints only became obvious after a model “worked.”
Fit came first. Understanding followed later, if at all.

This page collects places where inference stopped improving,
even as modelling effort increased.

## Audits

- **[AlN electroabsorption mechanism](/constraints/aln-electroabsorption/)**  
- **[Inverse RCWA metrology identifiability](/constraints/inverse-rcwa/)**  
- **[g-C₃N₄ optical transitions: symmetry and selection rules](/constraints/gcn-optical-transitions/)**  
- **[Alloy configuration-space sampling limits](/constraints/alloy-sampling/)**  
- **[Port metasurface: modelling and deployment constraints](/constraints/port-metasurface/)**  

Each audit marks the point where additional modelling stopped reducing ambiguity.

## Constraint classes

These recur across projects and often overlap:

- **Axiomatic** — conservation laws, symmetry, internal consistency  
- **Measurement** — SNR, resolution, calibration, averaging  
- **Statistical** — finite sampling, convergence limits, uncertainty propagation  
- **Fabrication / process** — tolerances, defects, interfaces, uncontrolled chemistry  
- **Computational** — model-class mismatch, discretization, boundary conditions  

Interpretation happens here.
Method-level failure modes are tracked in **[Reading Ledger](/reading-ledger/)**.
The broader stance is fixed in **[Method](/method/)**.
