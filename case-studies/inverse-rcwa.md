---
layout: interactive
status: complete
title: Inverse RCWA Metrology
permalink: /case-studies/inverse-rcwa/
redirect_from:
  - /constraints/inverse-rcwa/
---

## Problem

During a Summer 2025 internship at KLA, I worked on recovering trench geometry from broadband optical reflectance of patterned GAAFET stacks.

The measurement was fast and non-destructive. The interpretation was not simple.

**Question:** which geometric parameters can be recovered from the spectra, and which ones are underdetermined by the measurement configuration?

This was my first real inverse problem in an industry setting. The lesson was not that optimization is hard. The lesson was that good fits can be non-unique.

---

## Observable

Broadband reflectance from approximately 300–2500 nm measured on periodic patterned stacks.

The observable was a far-field optical spectrum. It was not a direct image of the trench geometry.

---

## Claim

Trench depth was recoverable under the measurement configuration and fabrication bounds.

Secondary parameters, including sidewall angle and some layer-thickness combinations, remained degenerate.

The useful outcome was not full geometric reconstruction. It was identifying the one parameter that the measurement could control reliably.

---

## Forward model

The RCWA model defines a deterministic forward map:

$$
\text{geometry} + \text{materials}
\rightarrow
\text{reflectance spectrum}.
$$

The inverse problem tries to recover geometry from spectrum. That inverse map is many-to-one.

Multiple combinations of thickness, refractive index, sidewall angle, and depth can produce nearly identical spectra within instrument noise.

---

## What worked

Trench depth was stable across stack and geometry variants.

Depth produced spectral features that were sufficiently separated from the strongest secondary-parameter correlations when the inversion was restricted by process bounds.

The practical result was a faster inline workflow focused on depth monitoring rather than a false attempt at complete profile extraction.

That was the right production answer: recover the parameter the measurement can actually resolve.

---

## What did not work

Secondary parameters remained underdetermined.

Changing sidewall angle and compensating with a nearby layer thickness could produce spectra with nearly indistinguishable residuals. Multi-start optimization found different geometries with similar fit quality.

That is the signature of structural non-identifiability, not optimizer failure.

Adding more wavelength points did not fix the problem. More samples of the same insufficient measurement do not create new sensitivity directions.

---

## What the degeneracy looks like

The issue is visible in the sensitivity structure. Depth-sensitive spectral features are better separated from some other parameters, which is why depth was recoverable. Secondary parameters share sensitivity regions; their Jacobian columns become nearly parallel, producing high covariance and multiple local minima.

The interactive below is a physically motivated illustration of the mechanism. It is not direct RCWA output and should not be read as measured KLA data.

<div class="tool-embed">
<div class="tool-label">Interactive — polarization-dependent degeneracy in RCWA inversion</div>
{% include rcwa-degeneracy-viz.html %}
</div>

The point of the visualization is the bottom panel: different polarizations can move the sensitivity into different wavelength regions. Measurement diversity helps only if the added information constrains the same ambiguous parameters rather than introducing new correlations.

---

## Constraint analysis

### Load-bearing constraints

**Axiomatic.** The RCWA forward map is deterministic, but the inverse map is many-to-one.

**Measurement.** Bandwidth, spot size, spectral resolution, polarization, and noise limit which geometric perturbations are distinguishable.

**Fabrication.** Process bounds made the problem tractable by ruling out physically implausible geometries.

**Statistical.** Fit quality alone was insufficient. Identifiability had to be judged through multi-start behavior, covariance, and parameter correlations.

**Computational.** Dispersion models can absorb modeling error, which can hide geometric degeneracies.

### Primary limiting factor

Intrinsic ill-posedness of the inverse optical metrology problem under the available measurement configuration.

The spectrum constrained depth more strongly than it constrained secondary geometry.

---

## What was ruled out

- Unique geometry recovery from low residual alone.
- Secondary-parameter claims without covariance or multi-start analysis.
- Solving the degeneracy by adding more wavelength samples of the same measurement.
- Treating optimization convergence as proof of physical uniqueness.

---

## What remained non-identifiable

- Thickness–index trade-offs.
- Sidewall-angle versus nearby-thickness compensation.
- Roughness-driven scattering versus effective-index changes.
- Fine sidewall-profile details below measurement sensitivity.

---

## What would reduce uncertainty

- Angle-resolved measurements.
- Multiple azimuthal orientations.
- Better-designed polarization diversity.
- Explicit fabrication priors rather than loose bounds.
- Cross-validation with CD-SEM, AFM, or TEM on calibration samples.
- Posterior sampling or multi-start clustering as a standard diagnostic.

---

## What I learned

Inverse problems fail quietly.

A clean spectrum fit can mean the model found the right geometry. It can also mean the measurement cannot distinguish several geometries. The difference is not visible from residuals alone.

The practical skill is not maximizing the number of fitted parameters. It is identifying which parameters the measurement can support.

---

**Status:** Completed Summer 2025. Pipeline deployed for trench depth monitoring; secondary-parameter extraction left as future work requiring additional measurement diversity.  
**Claim level:** depth monitoring reliable under bounded process conditions; full profile reconstruction not supported.

**Methods:** [RCWA](/reading-ledger/#rcwa), [Identifiability](/reading-ledger/#identifiability), [Dispersion models](/reading-ledger/#dispersion)

[Back to case studies](/case-studies/)