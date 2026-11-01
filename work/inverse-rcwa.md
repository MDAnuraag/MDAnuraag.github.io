---
layout: interactive
title: Inverse RCWA Metrology
permalink: /work/inverse-rcwa/
redirect_from:
  - /case-studies/inverse-rcwa/
  - /constraints/inverse-rcwa/
---

## Overview

Broadband reflectance of a patterned GAAFET stack, fitted with an RCWA forward model to recover trench geometry for inline metrology and process monitoring.

---

## Setup

**System:** patterned GAAFET stack  
**Signal:** broadband far-field reflectance  
**Model:** RCWA forward model  
**Target:** trench geometry  
**Use case:** inline metrology / process monitoring

$$
\text{geometry} + \text{materials}
\rightarrow
\text{reflectance spectrum}
$$

The spectrum is an indirect measurement of the structure.

---

## Results

Trench depth moved the spectrum in a way that stayed stable under bounded process assumptions, which made it reliable enough for monitoring.

Secondary geometry traded off against other parameters. The main degeneracies:

- sidewall angle;
- nearby layer thickness;
- effective optical constants;
- roughness / profile idealization;
- dispersion-model compensation.

Multi-start optimization found multiple plausible profiles with similar residuals. That spread reflects structural non-identifiability in the model.

---

## Diagnostic

The figure below is an illustrative diagnostic built on a toy model, with no KLA data and no direct RCWA output.

It shows how two profiles can fit similarly while different parameters compensate.

<div class="tool-embed">
<div class="tool-label">Interactive: RCWA-style degeneracy</div>
{% include rcwa-degeneracy-viz.html %}
</div>

---

## Summary

Established: trench depth monitoring under bounded process conditions.

Open: a unique full-profile reconstruction from this measurement alone. Extra wavelengths and extra samples of the same observable add no new independent sensitivity directions, so separating the secondary parameters takes additional measurement diversity.

---

## Status

Completed Summer 2025.

**Reading ledger:**  
[RCWA](/reading-ledger/#rcwa)  
[Identifiability](/reading-ledger/#identifiability)  
[Dispersion models](/reading-ledger/#dispersion)

[Back to work](/work/)
