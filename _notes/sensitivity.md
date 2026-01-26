---
layout: page
title: Sensitivity is not identifiability
permalink: /notes/sensitivity/
---

## The confusion

**Mistaken intuition**: "The spectrum is sensitive to parameter X, therefore I can measure X."

**Why it's wrong**: Sensitivity means $\partial y / \partial x \neq 0$. Identifiability requires that **no other parameter** can produce the same $\Delta y$.

---

## What actually happened

You showed the measurement **responds** to X. You didn't show it responds **uniquely** to X.

If parameters Y and Z also produce similar $\Delta y$, you've measured a **linear combination**, not X.

---

## Concrete example (from my RCWA work)

**Scenario**: Broadband reflectance from a multilayer stack.

**Sensitivity analysis**:
- Spectrum is sensitive to trench depth (∂R/∂d ≠ 0) ✓
- Spectrum is sensitive to sidewall angle (∂R/∂θ ≠ 0) ✓
- Spectrum is sensitive to layer 3 thickness (∂R/∂t₃ ≠ 0) ✓

**Identifiability analysis**:
- Depth + angle are **strongly correlated** (cov = 0.8)
- Changing depth by +10 nm and angle by -5° produces nearly identical spectrum
- Layer 3 thickness trades off with its refractive index

**Result**: Depth is identifiable (because angle was constrained by fabrication priors). Layer 3 thickness is not.

---

## The mathematical statement

Sensitivity: $\nabla_\theta y \neq 0$ (Jacobian is non-zero)

Identifiability: $\nabla_\theta y$ has **full rank** and parameters are not in degenerate subspace

You can have sensitivity without identifiability.

---

## How to check

1. **Compute sensitivity matrix** $S_{ij} = \partial y_i / \partial \theta_j$
2. **Check condition number**: If $\kappa(S^T S) > 10^3$, parameters are poorly separated
3. **Plot covariance**: Strong off-diagonal terms = degeneracy

---

## The working rule

When you say "X is measurable":
1. Show sensitivity (∂y/∂X ≠ 0)
2. Show X is not degenerate with other parameters (low covariance)
3. Show you've actually resolved X, not just detected it

"Sensitive to" ≠ "able to determine"

---

## When this confusion causes real problems

- Metrology claiming "sub-nm precision" based on sensitivity alone (ignores correlation with index)
- Spectroscopy assigning peaks to specific defects (many defects have similar energies)
- Claiming band gap tunability when gap trades off with lattice constant

All fail because sensitivity analysis alone is insufficient.

---

**Related**: [Inverse RCWA constraints](/constraints/inverse-rcwa/) (parameter covariance), [Reading Ledger: Identifiability](/reading-ledger/#identifiability)

[Back to Notes](/notes/)