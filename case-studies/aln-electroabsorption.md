---
layout: page
title: Electroabsorption in Amorphous AlN
permalink: /case-studies/aln-electroabsorption/
---

![Optical_Probing_in_an_AlN_stack]({{ "/assets/images/aln/aln12.png" | relative_url }})
{: style="width:60%; max-width:700px; display:block; margin:auto;"}

## The question

What physical mechanism allows large, reversible modulation of UV transmittance in nominally insulating, amorphous AlN under an applied electric field?

---

## The forward claim

Applying an electric field perturbs the electronic states of the film, modifying its absorption coefficient and therefore its optical transmittance.

The relevant forward map is:

electric field → electronic states → absorption coefficient → transmitted intensity

Multiple microscopic mechanisms can occupy this map. The task is not to fit the response, but to determine which mechanism remains viable once constraints are applied.

---

## Where ambiguity enters

Several distinct mechanisms can, in principle, produce field-dependent transmission changes:

- crystalline electro-optic effects (Pockels or Kerr),
- interference effects driven by effective thickness or refractive-index changes,
- free-carrier absorption from electrically injected carriers,
- defect-mediated absorption involving localized electronic states.

All are capable of modulating transmission under bias unless explicitly ruled out.

---

## What was constrained

The interpretation was narrowed using constraints independent of optical magnitude:

- **Structural constraint:** films were predominantly amorphous, excluding symmetry-dependent crystalline electro-optic responses.
- **Spectral locality:** modulation was confined to the deep-UV near the absorption edge.
- **Broadband exclusion:** no field-dependent response was observed in the visible or near-IR, ruling out free-carrier absorption and interference-driven explanations.
- **Thickness control:** film thickness was fixed and independently verified, suppressing reinterpretation as optical path modulation.
- **Field regime:** applied fields were well below dielectric breakdown and fully reversible.

After applying these constraints, only mechanisms involving localized electronic states remained admissible.

---

## What survived

Under applied fields up to ~200 MV m⁻¹, strong and reversible modulation was observed near 282 nm, while longer wavelengths were unaffected.

Converting transmission to absorption coefficient showed an increase from ~2×10³ cm⁻¹ to ~1.4×10⁴ cm⁻¹ at peak response. The photon energy of maximal modulation lies well below the AlN bandgap, inconsistent with band-to-band or free-carrier processes.

Taken together, the constraints support **defect-mediated electronic states** as the dominant contributor to the electro-absorptive response.

---

## What generalized

In wide-bandgap dielectrics, electrically tunable optical response does not require crystalline nonlinearity. In disordered systems, functional optical behaviour often emerges from controlled defect landscapes.

Mechanism identification proceeds by exclusion: constraining what does *not* respond is often more decisive than fitting what does. Magnitude alone is not diagnostic without structural and spectral context.

---

## Related

- Constraint audit: **[/constraints/aln-electroabsorption/](/constraints/aln-electroabsorption/)**
- Methods: [UV–Vis](/reading-ledger/#uv-vis), [XRD](/reading-ledger/#xrd), [AFM](/reading-ledger/#afm), [DFT (PBE)](/reading-ledger/#dft-pbe)
- Framework: **[/method](/method/)**
