---
layout: page
status: submitted
title: AlN Electroabsorption
permalink: /work/aln-electroabsorption/
redirect_from:
  - /case-studies/aln-electroabsorption/
  - /constraints/aln-electroabsorption/
---

![Optical setup]({{ "/assets/images/aln/aln12.png" | relative_url }})
{: style="width:60%; max-width:700px; display:block; margin:auto;"}

## Question

Can low-temperature PEALD-grown AlN-based thin films show electrically tunable UV optical behavior?

The measurement showed a large field-dependent transmission change near 282 nm. The harder question was not whether the effect existed. It did.

The harder question was:

> What mechanism can the data actually support?

The answer was bounded. The response is consistent with field-modulated sub-bandgap absorption in a disordered AlN-based film, but the microscopic defect pathway is not uniquely identifiable from the current measurements.

---

## What I did

I analyzed structural, electrical, and optical measurements from 50 nm PEALD-grown films deposited at 300 °C on ITO/glass and TiN/Si substrates.

The work combined:

- XRD to assess crystallinity and structural disorder;
- AFM to measure substrate-dependent surface roughness;
- MIM capacitor measurements for dielectric response and leakage;
- IDE optical measurements for field-dependent UV transmission;
- absorption-coefficient extraction from corrected transmittance.

The optical experiment applied an in-plane field using interdigital electrodes. That geometry matters: the field is non-uniform and concentrated near electrode edges, so the reported field is a nominal device-level estimate rather than a uniform material field.

---

## What worked

The films showed stable dielectric behavior and low leakage under the measured conditions.

The optical result was clear: the unbiased device showed high transmission near 282 nm, and applying bias produced a large, reversible, spectrally localized UV modulation. The visible and near-IR regions changed much less.

That localization matters. A broadband mechanism such as free-carrier absorption would not naturally explain a response concentrated in the deep-UV. A simple uniform-index interference explanation would also be too broad.

The photon energy near 282 nm is about 4.4 eV, below the AlN bandgap. That made sub-bandgap states the most plausible optical channel.

---

## What the data support

The most defensible interpretation is:

> The applied field perturbs defect- or disorder-related sub-bandgap absorption in a PEALD-grown AlN-based film.

That wording is intentional.

The material is better described as AlN-based or AlOxNy-like rather than ideal stoichiometric crystalline AlN. The XRD data indicate nanocrystalline or structurally disordered character, with small coherent scattering domains embedded in a disordered matrix.

The observed absorption energy is compatible with reported defect-related transitions in AlN systems. Oxygen-related complexes, vacancy-associated states, band-tail states, and disorder-related localized states are all plausible contributors.

The result is therefore mechanism-level evidence, not species-level identification.

---

## What failed

The current dataset cannot isolate one microscopic mechanism.

Several processes may coexist:

- field-induced shifts of localized states;
- modified transition probabilities;
- charge-state redistribution;
- band-tail broadening;
- local field enhancement near IDE edges;
- spatially non-uniform absorption across the device.

The optical modulation is large, but magnitude alone does not identify the mechanism.

The IDE geometry also prevents extraction of a clean intrinsic electroabsorption coefficient. The measured response is an effective device-level modulation, shaped by the film, electrodes, local fields, and optical path.

---

## What limited the claim

The main limitation was not whether the effect was real. It was whether the measurement could separate the causes.

The limiting factors were:

- non-uniform electric field distribution in the IDE geometry;
- depth-averaged optical transmission;
- lack of direct defect spectroscopy;
- lack of spatially resolved optical or thermal measurement;
- XRD sensitivity limits for separating amorphous and nanocrystalline structure;
- C–V and I–V data that constrain electrical behavior but do not uniquely identify conduction mechanisms.

Because of those limits, the claim should not be:

> We identified the defect responsible for electroabsorption.

It should be:

> We observed field-dependent UV modulation consistent with defect-mediated sub-bandgap absorption in disordered PEALD-grown AlN-based films.

---

## What I learned

This project taught me mechanism identification by constraint.

The spectrum alone did not identify the mechanism. The interpretation came from eliminating weaker alternatives:

- XRD limited crystalline electro-optic explanations;
- spectral localization limited broadband free-carrier explanations;
- near-IR stability limited broadband absorption mechanisms;
- reversibility limited permanent material-change explanations;
- electrical stability limited breakdown or catastrophic degradation explanations.

The result is strongest when written as a constrained interpretation, not as a fingerprint.

---

## Status

Submitted manuscript. First author.

**Claim level:** electrically tunable UV response demonstrated; defect-mediated sub-bandgap absorption is the most consistent interpretation; specific defect identity, spatial distribution, and microscopic pathway remain unresolved.

**Related notes:**  
[Spectra are constraints, not fingerprints](/notes/spectra-constraints/)  
[Averaging destroys information irreversibly](/notes/averaging/)

**Methods:**  
[UV–Vis spectroscopy](/reading-ledger/#uv-vis)  
[XRD](/reading-ledger/#xrd)  
[AFM](/reading-ledger/#afm)

**Reference:**  
Sharma, A.; Chen, W.; Kandwal, A.; Kit, C. C.; Kim, J. *Electric Field-Induced Optical Effects in AlN Thin Films for Transparent Electronic Interfaces* (submitted).

[Back to work](/work/)