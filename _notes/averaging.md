---
layout: page
title: Averaging destroys information irreversibly
permalink: /notes/averaging/
---

## The confusion

**Mistaken intuition**: "I measured the spatially-averaged absorption, so I know the material's absorption coefficient."

**Why it's wrong**: Once you average, you can't infer the distribution. Many distributions have the same average.

---

## What actually happened

You measured:
$$
\langle \alpha \rangle = \frac{1}{V} \int \alpha(\mathbf{r}) \, \text{d}V
$$

This tells you nothing about $\alpha(\mathbf{r})$. You've collapsed a function to a scalar.

---

## Real example (from AlN electroabsorption)

**Measurement**: UV-Vis transmission through 100 nm film (spatially averaged over ~200 nm penetration depth)

**What I can claim**: "Field-dependent absorption exists somewhere in the film"

**What I cannot claim**: 
- "Defects are uniformly distributed" (could be interface-localized)
- "Absorption is bulk-dominated" (could be surface-dominated)
- "Defect concentration is X cm⁻³" (need depth resolution)

The depth-averaged signal **cannot distinguish** these cases.

---

## Other examples where this matters

**Configuration sampling**: 
- Measured: ensemble-averaged band gap = 2.1 eV
- Cannot infer: whether one structure dominates or many contribute equally
- Configuration entropy lost in the average

**Powder XRD**:
- Measured: angle-averaged diffraction pattern
- Cannot infer: texture, preferred orientation, single-crystal structure
- Grain orientation distribution lost

**Time-averaged spectra**:
- Measured: steady-state photoluminescence
- Cannot infer: whether emission is prompt or delayed
- Temporal dynamics lost

---

## The working rule

When you report an average:
1. State explicitly what was averaged (space, time, angle, ensemble)
2. Do not infer properties of the distribution from the average alone
3. If you need the distribution, measure it directly or bound it with constraints

---

## When this confusion causes real problems

- Claiming bulk properties from surface-averaged measurements
- Assigning configurations from ensemble-averaged observables
- Inferring dynamics from time-integrated signals

In all cases, the measurement **integrated out** the information you're trying to recover.

---

**Related**: [AlN constraints](/constraints/aln-electroabsorption/) (depth averaging), [Alloy constraints](/constraints/alloy-sampling/) (ensemble averaging)

[Back to Notes](/notes/)