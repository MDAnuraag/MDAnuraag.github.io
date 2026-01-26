---
layout: page
title: Spectra are constraints, not fingerprints
permalink: /notes/spectra-constraints/
---

## The confusion

**Mistaken intuition**: "My model reproduces the spectrum, therefore the mechanism is correct."

**Why it's wrong**: Many distinct mechanisms produce indistinguishable spectra once you average over disorder, geometry, and instrumental limits.

---

## What actually happened

You found a model **consistent** with the data. This is necessary but insufficient.

A spectrum is a compressed observable:
$$
I(\lambda) = \int \text{d}V \int \text{d}\Omega \int \text{d}t \, \alpha(\lambda, \mathbf{r}, \Omega, t) \cdot f_{\text{instrument}}(\lambda)
$$

That integral destroys information. Many microscopic states $\alpha(\mathbf{r})$ map to the same $I(\lambda)$.

---

## The correct use

Spectra **rule out** mechanisms, they don't **identify** them.

**Example (from AlN work)**:
- No visible/NIR response → rules out free-carrier absorption
- UV-localized response → rules out bulk interference effects
- Amorphous XRD + UV modulation → rules out crystalline electro-optic effect

After ruling these out, **defect-mediated absorption** survives—not because it fits, but because alternatives don't.

---

## The working rule

If your interpretation depends on spectral agreement alone:
1. List alternative mechanisms that also fit
2. Find a measurement that distinguishes them
3. Don't claim mechanism identification until (2) is done

If you can't do (2), you have a **consistency check**, not evidence.

---

## When this confusion causes real problems

- Claiming defect species from absorption onset (many defects have similar energies)
- Assigning optical peaks to specific atomic configurations (structure is underdetermined)
- Using fitted dispersion models as physical insight (effective parameters absorb error)

All of these substitute "agrees with data" for "uniquely determined by data."

---

**Related**: [AlN constraints](/constraints/aln-electroabsorption/) (mechanism disambiguation), [g-C₃N₄ constraints](/constraints/gcn-optical-transitions/) (peak assignment limits)

[Back to Notes](/notes/)