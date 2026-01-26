---
layout: page
title: Method
permalink: /method/
---

I don’t start with models.  
I start with questions that don’t collapse the moment they meet real data.

Most of the work here circles the same problem:

*given a structure, what signal should exist — and given a signal, what structure can actually be inferred?*

Everything below is how I keep myself from answering that question too quickly.

---

## First principles

- Every project is an inverse problem, whether it admits that or not.
- Agreement with data is cheap; explanation is not.
- If two mechanisms explain the same signal, neither gets credit by default.

A result only matters if competing explanations are actively ruled out.

---

## How I actually work

1. **Start from the observable**  
   What is measured, and what is *not* measured, matters more than the model.

2. **Write down the forward map**  
   Not the full simulation — just the causal chain the mechanism claims.

3. **List what else could explain the same thing**  
   Geometry, defects, boundary conditions, preprocessing, effective parameters, artefacts.

4. **State the constraints out loud**  
   Measurement limits, fabrication tolerances, modelling assumptions, priors, compute shortcuts.

5. **Ask the uncomfortable question**  
   What, if anything, is uniquely identifiable?

6. **Stop early if it’s underdetermined**  
   Sometimes the correct move is to say “this cannot be inferred from this data.”

7. **Only then report conclusions**  
   As constrained statements, not victories.

If a step feels unnecessary, that’s usually the one I skipped last time and regretted.

---

## Things that break inference

- Treating non-unique solutions as unique because the fit looks good.
- Letting effective parameters quietly replace physical mechanisms.
- Forgetting how sensitive the answer is to priors I picked for convenience.
- Confusing numerical stability with physical truth.
- Upgrading “consistent with” to “demonstrates” without earning it.

Most failures show up *after* the model runs successfully.

---

## What counts as success here

A conclusion is acceptable if:

- it survives reasonable changes in modelling choices,
- it respects all known constraints,
- it clearly states what remains ambiguous,
- and it suggests the next measurement or perturbation that would actually help.

Anything else is provisional, no matter how clean the plot looks.

---

## How this shows up elsewhere

- **[Case Studies](/case-studies/)**  
  Specific problems where this process held up (or didn’t).

- **[Constraints](/constraints/)**  
  The limits that mattered more than the models.

- **[Reading Ledger](/reading-ledger/)**  
  Tools, papers, and techniques — including what they fail at.

- **[Notes](/notes/)**  
  Local clarifications where intuition breaks down.

If something on this site skips these steps, that’s a bug, not a feature.
