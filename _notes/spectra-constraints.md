---
layout: page
title: Spectra Are Constraints, Not Fingerprints
permalink: /notes/spectra-constraints/
---

## The error

A measured or computed spectrum matches a proposed structure, so the structure is treated as identified.

That is the wrong inference.

A matching spectrum means the proposed structure is **consistent** with the measurement under the assumptions of the model, instrument, preprocessing, and comparison method. It does not prove uniqueness.

---

## Why it fails

A spectrum is a compressed observable.

It can average over:

- depth;
- time;
- angle;
- disorder;
- grain structure;
- dopant environment;
- instrumental bandwidth;
- preprocessing choices.

The forward direction may be well-defined:

$$
\text{structure}
\rightarrow
\text{spectrum}.
$$

The inverse direction is not guaranteed:

$$
\text{spectrum}
\not\Rightarrow
\text{unique structure}.
$$

Different microscopic states can produce similar spectral curves once the measurement has averaged away distinguishing information.

---

## Better interpretation

A spectrum should be treated as a constraint on possible explanations.

It can:

- rule out mechanisms inconsistent with the observed wavelength range;
- support mechanisms that survive independent checks;
- show whether a model is plausible;
- expose where additional measurements are needed.

It cannot, by itself, identify a unique microscopic structure unless alternatives have been ruled out.

---

## Example: AlN electroabsorption

In the AlN project, the field-dependent UV modulation was consistent with defect-mediated electroabsorption.

The key point was not that the defect model fit best. The key point was that other mechanisms failed independent constraints:

- no visible/NIR response weakened the free-carrier explanation;
- UV-localized modulation weakened the simple interference explanation;
- amorphous structure weakened crystalline electro-optic explanations;
- reversibility weakened permanent-change explanations.

Defect-mediated absorption survived, but the spectrum did not identify the specific defect species or depth distribution.

---

## Example: g-C₃N₄ optical transitions

In the g-C$_3$N$_4$ project, metal doping shifted absorption into the visible.

That supported a symmetry-breaking mechanism, but it did not identify a unique dopant site.

Many structural motifs can redistribute oscillator strength in similar ways. Optical spectra constrained the class of plausible mechanisms more strongly than the exact microscopic arrangement.

---

## Working rule

Before claiming that a spectrum identifies a structure:

1. list alternative structures or mechanisms that could produce similar spectra;
2. identify which measurements distinguish them;
3. separate “consistent with” from “identified as”;
4. state what remains non-identifiable.

If step 2 is missing, the claim is consistency, not identification.

---

## Where this appears

- [AlN Electroabsorption](/case-studies/aln-electroabsorption/)
- [g-C₃N₄ Optical Transitions](/case-studies/gcn-optical-transitions/)
- [Inverse RCWA Metrology](/case-studies/inverse-rcwa/)

[Back to notes](/notes/)