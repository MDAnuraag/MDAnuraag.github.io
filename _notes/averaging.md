---
layout: page
title: Averaging Destroys Information Irreversibly
permalink: /notes/averaging/
---

## Rule

An average constrains a distribution.

It does not determine it.

---

## Failure mode

A spatial, temporal, angular, or ensemble-averaged measurement is treated as if it revealed the hidden distribution.

Wrong inference.

For a spatially varying quantity:

$$
\langle \alpha \rangle
=
\frac{1}{V}
\int_V
\alpha(\mathbf{r})\,dV
$$

Many different $\alpha(\mathbf{r})$ can produce the same average.

The lost information is not recoverable from the mean alone.

---

## Examples

**AlN electroabsorption**  
UV–Vis transmission measured a depth-averaged optical response. It showed field-dependent absorption, not a defect depth profile.

**Alloy sampling**  
An optical gap can reflect many configurations, grains, defects, and local environments. Matching an ensemble average does not prove the sampled ensemble was the synthesized one.

**g-C₃N₄ optical transitions**  
Computed spectra can represent idealized configurations. Real samples may average over disorder, stacking, defects, and dopant environments.

---

## Check

When reporting an average, state:

```text
what was averaged
what hidden variable was lost
whether "average" is being mistaken for "uniform"
which measurement would resolve the hidden variable
```

---

## Appears in

[AlN Electroabsorption](/work/aln-electroabsorption/)  
[Alloy Configuration Sampling](/work/alloy-sampling/)  
[g-C₃N₄ Optical Transitions](/work/gcn-optical-transitions/)

[Back to notes](/notes/)