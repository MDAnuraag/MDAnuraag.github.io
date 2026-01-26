---
layout: page
title: Method
permalink: /method/
---

This site is organized around a single recurring problem:

*given a structure, what signal should exist — and given a signal, what structure can actually be inferred?*

Every project here treats that question as an inverse problem, whether or not it is framed that way in the literature.

The goal is not model performance in isolation, but controlled inference under real constraints.

---

## Core stance

- Agreement with data is insufficient without mechanism.
- Non-unique explanations are assumed until proven otherwise.
- Claims are only as strong as the alternatives they exclude.

A result is meaningful only if competing explanations are actively ruled out, not silently ignored.

---

## Working procedure

1. **Start from the observable**  
   Define exactly what is measured, how it is measured, and what is *not* accessible.

2. **Write the forward map**  
   Specify the causal chain the proposed mechanism claims — without defaulting to a full simulation.

3. **Enumerate competing explanations**  
   Geometry, defects, boundary conditions, preprocessing choices, effective parameters, numerical artefacts.

4. **State constraints explicitly**  
   Measurement limits, fabrication tolerances, modelling assumptions, priors, and computational shortcuts.

5. **Test identifiability**  
   Ask which parameters or mechanisms are uniquely recoverable under those constraints.

6. **Stop if underdetermined**  
   If the data cannot support the inference, the correct outcome is to say so.

7. **Report constrained conclusions**  
   Claims are framed in terms of what is supported, what is ambiguous, and what would resolve it.

---

## Common failure modes

- Treating good fits as evidence of uniqueness.
- Allowing effective parameters to substitute for physical mechanisms.
- Ignoring sensitivity to priors chosen for convenience.
- Confusing numerical stability with physical validity.
- Upgrading “consistent with” to “demonstrates.”

These failures typically appear *after* a model has run successfully.

---

## Definition of success

A conclusion is acceptable if it:

- survives reasonable changes in modelling choices,
- respects all known constraints,
- states remaining ambiguities explicitly,
- and motivates a concrete measurement or perturbation that would reduce them.

Anything else remains provisional.

---

## Where this is applied

- **[Case Studies](/case-studies/)**  
  Concrete problems where this process held up — or failed.

- **[Constraints](/constraints/)**  
  Limits that dominated inference more than model choice.

- **[Reading Ledger](/reading-ledger/)**  
  Tools, papers, and techniques, including their failure modes.

- **[Notes](/notes/)**  
  Local clarifications where intuition breaks down.

This page defines the procedure.  
The rest of the site is evidence that it is actually followed.
