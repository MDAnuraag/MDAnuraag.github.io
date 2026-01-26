---
layout: page
title: Method
permalink: /method/
---

# Method

**Core problem**: Given a structure, what signal should exist? Given a signal, what structure can be inferred?

Every project treats this as an inverse problem. The goal is controlled inference under real constraints, not model performance in isolation.

**Operating principle**: Claims are only as strong as the alternatives they exclude.

---

## Workflow

1. **Define the observable**  
   What is measured, how, and what is inaccessible.

2. **Write the forward map**  
   Specify the causal chain without defaulting to simulation.

3. **Enumerate competing explanations**  
   Geometry, defects, boundaries, preprocessing, parameters, numerical artifacts.

4. **State constraints**  
   Measurement limits, fabrication tolerances, modeling assumptions, priors, computational shortcuts.

5. **Test identifiability**  
   Which parameters or mechanisms are uniquely recoverable under these constraints?

6. **Stop if underdetermined**  
   If data cannot support the inference, say so.

7. **Report constrained conclusions**  
   What is supported, what is ambiguous, what would resolve it.

---

## Success criterion

A conclusion is acceptable if it:
- Survives reasonable changes in modeling choices
- Respects all known constraints  
- States remaining ambiguities explicitly
- Motivates a concrete measurement that would reduce them

---

## Applications

**[Case Studies](/case-studies/)** — Where this process held up or failed  
**[Constraints](/constraints/)** — Limits that dominated inference  
**[Reading Ledger](/reading-ledger/)** — Methods and their failure modes  
**[Notes](/notes/)** — Clarifications where intuition breaks