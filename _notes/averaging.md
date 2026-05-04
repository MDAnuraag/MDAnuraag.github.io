---
layout: page
title: Averaging Destroys Information Irreversibly
permalink: /notes/averaging/
---

## The error

A spatially, temporally, or ensemble-averaged measurement is treated as if it reveals the underlying distribution.

That is the wrong inference.

An average can constrain a distribution, but it does not determine it.

---

## Why it fails

Averaging is a many-to-one operation.

For a spatially varying quantity $\alpha(\mathbf{r})$, a measurement may report only

$$
\langle \alpha \rangle
=
\frac{1}{V}
\int_V
\alpha(\mathbf{r})\,dV.
$$

Many different functions $\alpha(\mathbf{r})$ can produce the same average.

Once the measurement collapses the distribution into a mean, the lost spatial information cannot be recovered from that mean alone.

---

## Example: AlN electroabsorption

In the AlN project, UV–Vis transmission measured a depth-averaged optical response.

That allowed the claim:

> field-dependent absorption exists in the film stack.

It did not allow the stronger claims:

- defects are uniformly distributed;
- the response is bulk-dominated;
- the response is interface-dominated;
- the defect concentration is uniquely determined;
- the defect depth profile is known.

The measurement integrated over depth. Depth information was not present in the observable.

---

## Example: alloy sampling

In alloy sampling, an experimental optical gap is also an averaged quantity.

It may reflect many configurations, local environments, grains, defects, and synthesis-dependent distributions.

A match to an ensemble average does not prove that the sampled ensemble is the actual synthesized ensemble. It only shows consistency with one plausible distribution.

---

## Other forms of averaging

The same failure appears in other settings:

**Powder diffraction**  
Angle averaging can hide texture and orientation information.

**Steady-state photoluminescence**  
Time averaging can hide prompt versus delayed dynamics.

**Macroscopic spectroscopy**  
Spot-size averaging can hide grain-scale variation.

**Computed ensemble properties**  
Boltzmann-weighted averages can hide rare but important configurations.

---

## Working rule

When reporting an average:

1. state what was averaged: space, time, angle, ensemble, disorder, or configuration;
2. avoid inferring the distribution from the mean alone;
3. distinguish “average response” from “uniform response”;
4. add a measurement that resolves the hidden variable if the distribution matters.

---

## Where this appears

- [AlN Electroabsorption](/case-studies/aln-electroabsorption/)
- [Alloy Configuration Sampling](/case-studies/alloy-sampling/)
- [g-C₃N₄ Optical Transitions](/case-studies/gcn-optical-transitions/)

[Back to notes](/notes/)