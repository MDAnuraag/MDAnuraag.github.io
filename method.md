---
layout: page
title: Method
permalink: /method/
---

**Version 2.0 — January 2026**

I use this site to track a recurring problem in my work:

> Given a structure, what signal should exist? Given a signal, what structure can actually be inferred?

The second question is harder.

A model can reproduce a measurement without uniquely identifying the thing that produced it. A spectrum can agree with a structure without proving that structure is the only explanation. A simulation can show improvement under controlled assumptions without proving deployment value.

This page is my current method for avoiding those mistakes.

---

## Core idea

Most of my projects have the same shape:

$$
\text{hidden structure or state}
\rightarrow
\text{forward physics}
\rightarrow
\text{measured or computed signal}.
$$

The forward direction is usually clear enough to model.

The inverse direction is where interpretation breaks:

$$
\text{signal}
\not\Rightarrow
\text{unique structure}.
$$

The goal is not to make every result uncertain. The goal is to state exactly what the available evidence can support.

---

## Workflow

When I start or review a project, I separate seven things.

### 1. Observable

What was actually measured or computed?

Not the desired quantity. Not the interpretation. The observable.

Examples:

- reflectance spectrum;
- UV–Vis transmission;
- computed dielectric function;
- DFT band gap;
- probe-plane field;
- reconstruction vector;
- singular-value spectrum.

This step prevents me from smuggling the conclusion into the measurement.

---

### 2. Forward model

How does the hidden state produce the observable?

This can be physical, computational, statistical, or empirical.

Examples:

- geometry and materials $\rightarrow$ optical reflectance;
- defect states $\rightarrow$ sub-bandgap absorption;
- alloy configuration $\rightarrow$ electronic structure;
- boundary condition $\rightarrow$ sensing matrix;
- dopant symmetry breaking $\rightarrow$ oscillator strength redistribution.

The forward model does not need to be perfect. But its assumptions need to be visible.

---

### 3. Candidate explanations

What else could produce the same signal?

This is where I try to list alternatives before becoming attached to one explanation.

Possible alternatives include:

- geometry changes;
- defects;
- roughness;
- disorder;
- effective-medium behavior;
- finite-size artifacts;
- parameter compensation;
- measurement averaging;
- preprocessing artifacts;
- solver regularization;
- fabrication variation.

The point is not to make the project impossible. The point is to avoid confusing one admissible explanation with the only explanation.

---

### 4. Load-bearing constraints

Which assumptions carry the interpretation?

I group constraints into five types:

**Measurement constraints**  
Instrument bandwidth, resolution, averaging, noise floor, spot size, penetration depth, polarization, sampling geometry.

**Model constraints**  
Approximations, boundary conditions, discretization, convergence, functional choice, linearization, priors.

**Fabrication constraints**  
Process bounds, synthesis conditions, growth history, defects, roughness, non-equilibrium states.

**Statistical constraints**  
Sampling size, covariance, parameter correlation, uncertainty, local minima, ensemble representativeness.

**Axiomatic constraints**  
Basic physical or mathematical limits: conservation laws, symmetry rules, many-to-one forward maps, non-identifiability.

A claim is only as strong as the constraints that support it.

---

### 5. Identifiability

Can the available evidence separate the candidate explanations?

This is the central question.

A result is identifiable only if the measurement and model can distinguish the relevant alternatives. Fit quality alone is not enough.

Useful checks include:

- parameter covariance;
- sensitivity analysis;
- multi-start optimization;
- posterior sampling;
- singular values;
- condition number;
- column coherence;
- leakage or discrimination matrices;
- ablation of assumptions;
- cross-validation with independent measurements.

If two different hidden states produce indistinguishable observables, the inverse claim should be weakened.

---

### 6. Ruled out versus unresolved

I try to separate two categories.

**Ruled out:** interpretations that conflict with the evidence.

**Unresolved:** interpretations that remain possible because the data cannot distinguish them.

This distinction matters. A surviving explanation is not automatically true. It may only be the explanation that has not yet failed.

---

### 7. Next evidence

What would reduce ambiguity?

This can be:

- another measurement modality;
- another angle or polarization;
- higher-level theory;
- better sampling;
- a calibration sample;
- time-resolved data;
- structural characterization;
- a perturbation or robustness test;
- a simplified physical validation.

A good conclusion should say not only what I think, but what would change my confidence.

---

## Claim levels

I try to keep claims at the level the evidence supports.

### Level 1 — Consistency

The model can reproduce the observation.

This is weak. It means the explanation is possible, not unique.

### Level 2 — Constraint

The observation rules out some alternatives.

This is stronger. It means the evidence has discriminating power.

### Level 3 — Identification

The observation uniquely or near-uniquely determines the target quantity under stated assumptions.

This requires identifiability checks.

### Level 4 — Generalization

The result survives changes in sample, geometry, process, model, or measurement condition.

This is the strongest level and the easiest to overclaim.

Most of my undergraduate projects sit between Levels 1 and 3. The point of this site is to mark that boundary honestly.

---

## Typical failure modes

### Agreement treated as proof

A computed spectrum matches experiment, so I treat the structure as identified.

Better: the structure is consistent with the spectrum, but other structures may also be consistent.

### Fit quality treated as identifiability

A model gives a low residual, so I treat the fitted parameters as meaningful.

Better: check whether different parameter sets produce comparable residuals.

### More parameters treated as more understanding

A larger model fits better, so I trust it more.

Better: ask whether the added parameters are independently constrained.

### Simulation treated as deployment evidence

A controlled simulation improves a metric, so I infer real-world performance.

Better: separate simulation observables from deployment metrics and robustness conditions.

### Composition treated as structure

A material formula is known, so I treat the atomic arrangement as known.

Better: distinguish composition, configuration, local order, and ensemble distribution.

---

## Where this gets applied

The method is applied in [/case-studies/](/case-studies/).

The current case studies are:

- [Inverse RCWA Metrology](/case-studies/inverse-rcwa/) — fit quality versus geometric identifiability.
- [AlN Electroabsorption](/case-studies/aln-electroabsorption/) — mechanism identification by elimination.
- [g-C₃N₄ Optical Transitions](/case-studies/gcn-optical-transitions/) — spectra as constraints, not structural fingerprints.
- [Alloy Configuration Sampling](/case-studies/alloy-sampling/) — composition versus configuration.
- [Port Metasurface](/case-studies/port-metasurface/) — simulated inverse performance versus deployment claims.

Shorter conceptual errors are collected in [/notes/](/notes/).

---

## Current status

This is a working method, not a final theory.

It came from undergraduate projects between 2024 and 2026, so its scope is limited. The structure may change as I encounter systems where this framing fails.

The part I want to preserve is the discipline:

> start from the observable, write the forward model, state the constraints, test identifiability, and only then decide what can be claimed.

[Back to home](/)