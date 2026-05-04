---
layout: page
title: Good Fits Don't Imply Identifiability
permalink: /notes/good-fits/
---

## The error

A model gives a low residual, so the fitted parameters are treated as well determined.

That is the wrong inference.

Fit quality measures how closely one model output matches the data. It does not prove that the fitted parameters are unique.

---

## Why it fails

An optimizer finds **a** solution, not necessarily **the** solution.

A low value of $\chi^2$ means:

$$
\|y_{\mathrm{measured}} - y_{\mathrm{model}}(\theta)\|^2
$$

is small for one parameter vector $\theta$.

It does not rule out another parameter vector $\theta'$ such that

$$
y_{\mathrm{model}}(\theta)
\approx
y_{\mathrm{model}}(\theta').
$$

If multiple parameter sets produce indistinguishable signals, the inverse problem is non-identifiable under that measurement configuration.

---

## Example: inverse RCWA metrology

In the RCWA metrology project, broadband reflectance could recover trench depth under fabrication bounds.

But secondary parameters remained degenerate.

Different combinations of sidewall angle, layer thickness, and effective optical properties could produce nearly identical spectra. Multi-start optimization found different geometries with comparable residuals.

That meant the fit was good, but the full geometry was not uniquely determined.

---

## What to check instead

A fit becomes more meaningful when it survives identifiability checks:

- multi-start optimization;
- parameter covariance;
- posterior sampling;
- sensitivity matrix rank;
- singular values;
- independent validation;
- added measurement diversity.

The central question is:

> Could a different parameter set fit the data equally well?

If yes, the parameter is not identified.

---

## Working rule

Before saying “the fit determined parameter X,” check:

1. whether X converges across multiple initializations;
2. whether X is strongly correlated with other parameters;
3. whether changing X can be compensated by another parameter;
4. whether an independent measurement supports X.

If those checks fail, report the fitted parameter as model-dependent rather than physically determined.

---

## Where this appears

- [Inverse RCWA Metrology](/case-studies/inverse-rcwa/)
- [Port Metasurface](/case-studies/port-metasurface/)

[Back to notes](/notes/)