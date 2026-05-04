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

During a Summer 2025 internship at KLA, I worked on recovering trench geometry from broadband optical reflectance of patterned GAAFET stacks.

The practical question was not whether the model could fit the spectrum. It could.

The harder question was:

> Which geometric parameters were actually identifiable from the measurement?

The answer was uneven. Trench depth was recoverable under fabrication bounds. Secondary parameters were not.

---

## What I did

I worked with a forward model based on RCWA:

$$
\text{geometry} + \text{materials}
\rightarrow
\text{reflectance spectrum}.
$$

The measured observable was broadband far-field reflectance, not a direct image of the trench profile. The inverse problem tried to recover geometry from that spectrum.

That inverse map was many-to-one. Different combinations of sidewall angle, layer thickness, refractive index, roughness, and trench depth could produce similar spectra within measurement noise.

The workflow was:

1. model the patterned stack optically;
2. fit geometric parameters to measured spectra;
3. run multi-start optimization;
4. compare which parameters converged and which traded off;
5. restrict claims to parameters that were stable under the available measurement configuration.

---

## What worked

Trench depth was stable across the tested stack and geometry variants.

Depth produced spectral features that were sufficiently separated from the strongest secondary-parameter correlations, especially once fabrication bounds were applied.

That made depth useful for inline monitoring.

The important outcome was not full profile reconstruction. It was identifying the parameter the measurement could support reliably.

In production terms, that is the better answer: recover the controllable parameter instead of pretending the full geometry is known.

---

## What failed

Secondary parameters remained degenerate.

Sidewall angle and nearby layer thicknesses could compensate for each other. Different geometric parameter sets produced nearly indistinguishable spectra and comparable residuals.

Multi-start optimization did not converge to one unique full profile. It found different plausible profiles with similar fit quality.

That is not an optimizer failure. It is structural non-identifiability.

Adding more wavelength samples did not fix the issue. More samples of the same measurement do not create new sensitivity directions if the underlying parameter effects remain correlated.

---

## What the degeneracy looks like

The issue is visible in the sensitivity structure.

Depth-sensitive spectral features were more separable. Secondary parameters shared sensitivity regions, so their Jacobian columns became nearly parallel. That produced high covariance and multiple local minima.

The interactive below is a physically motivated illustration of this mechanism. It is not measured KLA data and not direct RCWA output.

<div class="tool-embed">
<div class="tool-label">Interactive — polarization-dependent degeneracy in RCWA inversion</div>
{% include rcwa-degeneracy-viz.html %}
</div>

The bottom panel is the key point.

Different polarizations can move the sensitivity into different spectral regions. Measurement diversity helps only if the added information constrains the same ambiguous parameters. Otherwise it can introduce new correlations instead of resolving the old ones.

---

## What limited the claim

The measurement constrained depth better than it constrained full geometry.

The limiting factors were:

- far-field spectra instead of direct geometry;
- finite bandwidth and instrument noise;
- parameter trade-offs between geometry and optical constants;
- roughness and sidewall variation not fully represented by ideal periodic models;
- dispersion models that could absorb geometric mismatch;
- fabrication bounds that acted as priors.

The result was therefore bounded:

> depth monitoring was supported; full profile reconstruction was not.

---

## What I learned

Good fits do not imply identifiable parameters.

A clean spectrum fit can mean the model found the right geometry. It can also mean that several geometries are indistinguishable under the measurement.

The difference is not visible from the residual alone.

The practical skill is choosing the claim the data can support:

> not “we recovered the structure,” but “we recovered this parameter under these bounds.”

---

## Status

Completed Summer 2025.

**Claim level:** trench depth was reliable under bounded process conditions; secondary geometry extraction required additional measurement diversity.

**Related notes:**  
[Good fits don't imply identifiability](/notes/good-fits/)  
[Sensitivity is not identifiability](/notes/sensitivity/)  
[Spectra are constraints, not fingerprints](/notes/spectra-constraints/)

**Methods:**  
[RCWA](/reading-ledger/#rcwa)  
[Identifiability](/reading-ledger/#identifiability)  
[Dispersion models](/reading-ledger/#dispersion)

[Back to work](/work/)