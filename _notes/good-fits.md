---
layout: page
title: Good Fits Don't Imply Identifiability
permalink: /notes/good-fits/
---

## Rule

A low residual means one model output matched the data.

It does not mean the fitted parameters are unique.

---

## Failure mode

An optimizer finds **a** solution.

Not necessarily **the** solution.

A small residual means:

$$
\|y_{\mathrm{measured}} - y_{\mathrm{model}}(\theta)\|^2
$$

is small for one parameter vector $\theta$.

It does not rule out another parameter vector $\theta'$:

$$
y_{\mathrm{model}}(\theta)
\approx
y_{\mathrm{model}}(\theta')
$$

If several parameter sets produce indistinguishable signals, the inverse problem is non-identifiable under that measurement.

---

## Check

Before saying a fit determined a parameter, check:

```text
multi-start convergence
parameter covariance
singular values
sensitivity rank
posterior spread
independent validation
measurement diversity
```

Central question:

> Could another parameter set fit equally well?

If yes, report the parameter as model-dependent.

---

## Appears in

[Inverse RCWA Metrology](/work/inverse-rcwa/)  
[Port Metasurface](/work/port-metasurface/)

[Back to notes](/notes/)