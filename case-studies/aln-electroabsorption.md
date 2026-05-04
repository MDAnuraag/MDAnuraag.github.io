---
layout: page
title: AlN Electroabsorption
permalink: /case-studies/aln-electroabsorption/
redirect_from:
  - /constraints/aln-electroabsorption/
---

![Optical setup]({{ "/assets/images/aln/aln12.png" | relative_url }})
{: style="width:60%; max-width:700px; display:block; margin:auto;"}

## Problem

Plasma-enhanced ALD AlN thin films showed field-dependent UV transmission changes under applied electric fields up to roughly $200\ \mathrm{MV/m}$.

The modulation was several percent in transmission and localized near $282\ \mathrm{nm}$.

**Question:** what physical mechanism produces the field-dependent UV absorption?

Possible explanations included crystalline electro-optic effects, free-carrier absorption, field-induced interference, and defect-mediated electroabsorption. The task was not to force a preferred mechanism. It was to rule out mechanisms that were inconsistent with the constraints.

---

## Observable

Field-dependent UV–visible transmission spectra from PEALD AlN thin films, supported by structural and morphology checks.

The optical measurement was spatially averaged. It did not directly reveal where inside the film the responsible states were located.

---

## Claim

The observed modulation is most consistent with defect-mediated electroabsorption.

That claim is bounded. The data support a defect-mediated mechanism by elimination of alternatives, but they do not uniquely identify the defect species or depth distribution.

---

## What I tried

I treated the interpretation as a constraint problem.

### Structural constraint

X-ray diffraction showed no crystalline peaks above the detection limit. The films were predominantly amorphous.

That made a crystalline Pockels explanation inconsistent with the sample structure. Kerr-type responses remained possible in principle, but the expected magnitude was too small to explain the observed modulation.

### Spectral-range constraint

The field-dependent response was localized in the UV. No comparable visible or near-IR response was observed.

That made free-carrier absorption unlikely, because a free-carrier mechanism should produce broader spectral signatures.

### Wavelength-selectivity constraint

The effect was concentrated near $282\ \mathrm{nm}$ rather than tracking the full spectrum uniformly.

That made a simple interference explanation from a uniform index change unlikely.

### Reversibility constraint

The modulation was reversible over repeated bias cycles.

That ruled out a permanent structural or chemical modification as the main cause.

---

## Constraint analysis

### Load-bearing constraints

**Axiomatic.** Magnitude alone cannot identify a field-dependent optical mechanism. Different mechanisms can produce similar modulation amplitudes.

**Measurement.** UV–visible transmission averages over the optical penetration depth. It cannot distinguish surface, bulk, and interface-localized defect contributions.

**Structural.** The absence of crystalline peaks limits crystalline electro-optic interpretations.

**Spectral.** The lack of a visible/NIR response constrains free-carrier explanations.

**Computational.** Defect-level calculations at ordinary DFT accuracy cannot uniquely separate nitrogen vacancies, oxygen substitution, and aluminum interstitials.

### Primary limiting factor

Spatial averaging in the optical measurement.

The transmission spectrum tells us that some field-sensitive absorptive states contribute. It does not tell us where those states are located inside the film.

---

## What survived

Defect-mediated electroabsorption survived the constraints.

The supporting logic was:

- the photon energy near $282\ \mathrm{nm}$ lies below the AlN band gap;
- low-temperature PEALD AlN can contain defect states;
- the response is spectrally localized;
- the modulation is reversible;
- crystalline electro-optic, free-carrier, and simple interference explanations are inconsistent with at least one independent constraint.

The interpretation is therefore eliminative rather than fingerprint-based.

---

## What was ruled out

- A crystalline Pockels-effect explanation.
- Free-carrier absorption as the dominant mechanism.
- A simple uniform-index interference explanation.
- Permanent material change as the main source of the reversible modulation.

---

## What remained non-identifiable

- The specific defect species.
- Whether the relevant defects are surface, bulk, or interface dominated.
- Whether the response is mainly field-assisted ionization, Stark shifting, or a mixture.
- Whether different PEALD recipes would change the mechanism or only the defect density.

---

## What would reduce uncertainty

- Impedance or capacitance-voltage measurements to constrain defect distributions.
- PEALD recipe variation to correlate modulation strength with defect density.
- Time-resolved spectroscopy to separate fast electronic shifts from slower trapping or ionization.
- Higher-level defect calculations for candidate states.
- Depth-sensitive optical or electrical characterization.

---

## What I learned

Mechanism identification by elimination is legitimate only when the eliminations are constrained by independent measurements.

Here, XRD constrained symmetry, spectral range constrained carrier mechanisms, wavelength selectivity constrained interference explanations, and reversibility constrained permanent-change explanations.

The optical spectrum did not uniquely identify a defect. It narrowed the admissible explanations.

---

**Status:** Manuscript submitted, December 2025. First author.  
**Claim level:** defect-mediated electroabsorption inferred by elimination; defect identity and localization unresolved.  
**Project date:** Spring 2025 – Winter 2025.  
**Experience level then:** first experimental spectroscopy analysis project.

**Methods:** [UV–Vis spectroscopy](/reading-ledger/#uv-vis), [XRD](/reading-ledger/#xrd), [AFM](/reading-ledger/#afm)

**Reference:**  
Sharma, A.; Chen, W.; Kandwal, A.; Kit, C. C.; Kim, J. *Electric Field-Induced Optical Effects in AlN Thin Films for Transparent Electronic Interfaces* (submitted).

[Back to case studies](/case-studies/)