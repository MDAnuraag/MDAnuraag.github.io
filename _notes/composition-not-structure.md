---
layout: page
title: Composition Is Not Structure
permalink: /notes/composition-not-structure/
---

## The error

A material formula is treated as if it specifies the structure.

That is the wrong inference.

Composition defines which elements are present and in what ratio. It does not uniquely specify where the atoms are, how they are coordinated, what defects exist, or which local motifs dominate.

---

## Why it fails

Many different structures can share the same composition.

For an alloy or doped material,

$$
\text{composition}
\rightarrow
\{\text{many possible configurations}\}.
$$

Those configurations can have different:

- total energies;
- band gaps;
- optical transition strengths;
- defect levels;
- local strain fields;
- symmetry;
- coordination environments.

A property computed for one configuration is not automatically a property of the material.

---

## Example: alloy configuration sampling

In Cu$_2$Ge(S$_{1-x}$Se$_x$)$_3$, a fixed Se fraction $x$ does not specify a unique S/Se arrangement.

Different arrangements at the same composition produced meaningfully different computed band gaps.

The relevant object was therefore not one structure per composition. It was an ensemble of plausible configurations.

---

## Example: g-C₃N₄ optical transitions

In metal-doped g-C$_3$N$_4$, the phrase “Pt-doped g-C$_3$N$_4$” is not structurally complete.

The dopant may occupy different sites, coordination environments, oxidation states, or defect complexes. Several of those possibilities can produce similar visible absorption.

Optical spectra can support a mechanism such as symmetry breaking without identifying the exact microscopic motif.

---

## Working rule

Before computing or interpreting a property, ask:

1. Does the composition uniquely determine the structure?
2. If not, which configurations are plausible?
3. Are properties stable across those configurations?
4. Is the measured observable an ensemble average?
5. What structural measurement would constrain the ensemble?

If the answer to 1 is no, then a single-structure calculation is a model case, not the material.

---

## Where this appears

- [Alloy Configuration Sampling](/case-studies/alloy-sampling/)
- [g-C₃N₄ Optical Transitions](/case-studies/gcn-optical-transitions/)

[Back to notes](/notes/)