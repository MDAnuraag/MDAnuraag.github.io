---
layout: page
title: Sensitivity Is Not Identifiability
permalink: /notes/sensitivity/
---

## The error

A measurement changes when parameter $x$ changes, so $x$ is treated as measurable.

That is incomplete.

Sensitivity means the observable responds to a parameter. Identifiability means the response is distinguishable from the responses produced by other parameters.

---

## Why it fails

Sensitivity asks whether

$$
\frac{\partial y}{\partial x} \neq 0.
$$

Identifiability asks whether the response direction is unique relative to the other parameters.

If two parameters produce similar changes,

$$
\frac{\partial y}{\partial x}
\approx
c\frac{\partial y}{\partial z},
$$

then the measurement may detect a change but fail to separate its cause.

In that case, the observable constrains a combination of parameters, not each parameter independently.

---

## Example: RCWA metrology

In broadband reflectance, the spectrum can be sensitive to trench depth, sidewall angle, and layer thickness.

That does not mean all three are independently recoverable.

Depth was recoverable because its spectral effect survived the process bounds and did not trade off too strongly with the remaining parameters.

Some secondary parameters were sensitive but not identifiable because their spectral effects could be compensated by other geometric or material changes.

---

## Example: port metasurface

In the port metasurface project, changing boundary geometry changes the sensing matrix.

That proves sensitivity to the boundary condition.

It does not automatically prove improved reconstruction. The relevant question is whether the changed matrix reduces ambiguity between candidate object positions.

Sensitivity:

$$
A_{\mathrm{flat}} \neq A_{\mathrm{tilted}}.
$$

Identifiability improvement:

$$
\text{lower leakage, lower degeneracy, or better-conditioned distinguishable modes}.
$$

Those are different claims.

---

## Working rule

When saying a quantity is measurable, show both:

1. **response** — the observable changes when the parameter changes;
2. **separation** — no other allowed parameter change produces the same response.

Sensitivity is necessary. It is not sufficient.

---

## Useful diagnostics

- Jacobian rank;
- condition number;
- covariance matrix;
- singular-value spectrum;
- parameter-correlation plot;
- leakage or discrimination matrix;
- cross-validation with a different measurement condition.

---

## Where this appears

- [Inverse RCWA Metrology](/case-studies/inverse-rcwa/)
- [Port Metasurface](/case-studies/port-metasurface/)

[Back to notes](/notes/)