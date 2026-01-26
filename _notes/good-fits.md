---
layout: page
title: Good fits don't imply identifiability
permalink: /notes/good-fits/
---

## The confusion

**Mistaken intuition**: "χ² = 0.05, therefore my 12 fit parameters are well-determined."

**Why it's wrong**: Fit quality measures **residual magnitude**, not **parameter uniqueness**. Many parameter sets produce identical χ².

---

## What actually happened

Your optimizer found **a** minimum, not **the** minimum.

Parameter degeneracy means:
$$
\chi^2(\theta_1, \theta_2) = \chi^2(\theta_1 + \delta, \theta_2 - \delta)
$$

The fit looks great, but $\theta_1$ and $\theta_2$ can trade off without changing the result.

---

## Real example (from RCWA metrology)

**Scenario**: Fitting broadband reflectance to recover trench depth, sidewall angle, and layer thicknesses.

**Observation**: 
- χ² = 0.02 (excellent fit)
- Multi-start optimization gives 15 different solutions, all with χ² < 0.03
- Trench depth varies by <5% across solutions (identifiable)
- Sidewall angle varies by 30° across solutions (not identifiable)

**Lesson**: The **covariance structure** matters more than the fit quality.

---

## How to check

1. **Multi-start optimization**: Run from 10+ random initial conditions. Do you converge to the same parameters?
2. **Posterior sampling**: If Bayesian, plot parameter correlations. Strong correlation = degeneracy.
3. **Sensitivity matrix**: Compute $\partial y / \partial \theta_i$. Singular or near-singular = non-identifiable.

---

## The working rule

Before claiming "we determined X from the fit":
1. Check if X is correlated with other parameters
2. Verify X converges across multiple optimization runs
3. Report uncertainty that includes covariance, not just diagonal variance

If you skip this, you're reporting **an optimum**, not **the parameters**.

---

## When this confusion causes real problems

- Inverse metrology claiming "extracted geometry" without degeneracy analysis
- Dispersion models with 8+ parameters all "determined from the data"
- Rate constant fitting in kinetics with correlated pre-factors and activation energies

In all cases, the fit looks good but the parameters are meaningless.

---

**Related**: [Inverse RCWA constraints](/constraints/inverse-rcwa/) (identifiability analysis), [Reading Ledger: Identifiability](/reading-ledger/#identifiability)

[Back to Notes](/notes/)