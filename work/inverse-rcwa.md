---
layout: interactive
status: complete
title: Inverse RCWA Metrology
permalink: /work/inverse-rcwa/
redirect_from:
  - /case-studies/inverse-rcwa/
  - /constraints/inverse-rcwa/
---

## Question

Which geometric parameters can broadband optical reflectance actually identify?

---

## Objects

**System:** patterned GAAFET stack  
**Signal:** broadband far-field reflectance  
**Model:** RCWA forward model  
**Inverse target:** trench geometry  
**Use case:** inline metrology / process monitoring

$$
\text{geometry} + \text{materials}
\rightarrow
\text{reflectance spectrum}
$$

The spectrum was not a direct image of the structure. It was an indirect measurement.

---

## What moved

Trench depth moved the spectrum in a way that stayed stable under bounded process assumptions.

Secondary geometry did not.

The useful result was not:

> full profile recovered.

It was:

> trench depth was identifiable enough for monitoring.

---

## What failed

Secondary parameters traded off.

Main degeneracies:

- sidewall angle;
- nearby layer thickness;
- effective optical constants;
- roughness / profile idealization;
- dispersion-model compensation.

Multi-start optimization found multiple plausible profiles with similar residuals.

That was not an optimizer failure. It was structural non-identifiability.

---

## Diagnostic

The figure below is an illustrative diagnostic, not KLA data and not direct RCWA output.

It shows the failure mode:

> two profiles can fit similarly while different parameters compensate.

<div class="tool-embed">
<div class="tool-label">Interactive — RCWA-style degeneracy</div>
{% include rcwa-degeneracy-viz.html %}
</div>

---

## Claim boundary

Supported:

```text
trench depth monitoring under bounded process conditions
```

Not supported:

```text
unique full-profile reconstruction from this measurement alone
```

More wavelengths do not automatically fix the problem. More samples of the same observable do not create new independent sensitivity directions.

---

## Status

Completed Summer 2025.

**Claim level:** trench depth was reliable under bounded process assumptions; secondary geometry required additional measurement diversity.

**Related notes:**  
[Good fits don't imply identifiability](/notes/good-fits/)  
[Spectra are constraints, not fingerprints](/notes/spectra-constraints/)  
[Measurement is not control](/notes/measurement-not-control/)

**Reading ledger:**  
[RCWA](/reading-ledger/#rcwa)  
[Identifiability](/reading-ledger/#identifiability)  
[Dispersion models](/reading-ledger/#dispersion)

[Back to work](/work/)