---
layout: page
title: AlN Electroabsorption
permalink: /case-studies/aln-electroabsorption/
---

![Optical setup]({{ "/assets/images/aln/aln12.png" | relative_url }})
{: style="width:60%; max-width:700px; display:block; margin:auto;"}

## Problem

PEALD AlN films (~100 nm) showed 3% UV transmission changes under applied field (~200 MV/m).

**Question**: What mechanism produces this?

Multiple options were possible:
- Crystalline electro-optic effect (Pockels, Kerr)
- Free-carrier absorption
- Interference from field-driven refractive index change
- Defect-mediated absorption

My job: figure out which ones to rule out.

This was my first experimental spectroscopy project—Prof. Kim had the data, but the interpretation was open.

---

## What I tried

I started by writing down every mechanism I could think of that produces field-dependent UV absorption, then looked for measurements that would eliminate some.

**Step 1: Check for crystalline structure**  
Ran XRD → no crystalline peaks above detection limit. Films are predominantly amorphous.

**Result**: Rules out mechanisms requiring specific crystal symmetry (Pockels effect needs non-centrosymmetric crystals, Kerr is too weak at these field strengths).

**Step 2: Check for broadband response**  
Looked at visible and near-IR → no field-dependent changes outside UV.

**Result**: Rules out free-carrier absorption (injected carriers would absorb across broad range, not just at UV edge).

**Step 3: Check wavelength specificity**  
Modulation peaks sharply at 282 nm, not distributed across spectrum.

**Result**: Rules out simple interference effects (uniform index change would affect all wavelengths similarly).

**Step 4: Check morphology**  
AFM showed 5 nm RMS roughness → field penetration approximately uniform across film.

**Result**: Not dominated by interface effects or field screening.

---

## What survived

After eliminating alternatives, **defect-mediated electroabsorption** was the simplest remaining explanation:

**Supporting evidence**:
- Photon energy (4.4 eV) well below AlN bandgap (~6 eV) → consistent with mid-gap defect states
- PEALD at 250°C known to introduce N-vacancies (literature confirmed)
- Absorption coefficient increased from ~2×10³ to ~1.4×10⁴ cm⁻¹ under field
- Reversible over 10+ cycles → not permanent structural change

**But I couldn't determine**:
- Which specific defect species (N-vacancy vs. O-substitution vs. Al-interstitial—all produce states in similar energy range)
- Depth distribution (surface vs. bulk vs. interface-localized—UV-Vis averages over penetration depth)
- Field-ionization vs. Stark shift (both produce similar spectral signatures without ultrafast measurements)

---

## What I learned

**Mechanism identification by elimination works**—but only when you have orthogonal measurements that constrain different physics.

Here:
- XRD constrained structure → ruled out crystalline mechanisms
- Spectral range constrained carrier type → ruled out free carriers  
- Wavelength dependence constrained mechanism → ruled out interference

Without these complementary measurements, I'd just have "something modulates at 282 nm under field" with no way to narrow it down.

**What I couldn't do**: Identify the specific defect or localization without measurements I didn't have (depth-resolved spectroscopy, impedance vs. depth, ultrafast pump-probe).

---

## What I'd do differently

If starting over:
1. Run impedance spectroscopy upfront (would constrain defect depth distribution)
2. Try different PEALD conditions (map modulation vs. known defect concentration)
3. Collaborate with someone who has ultrafast capability (separate ionization from Stark shift)

But for a first experimental project, learning to rule out mechanisms systematically felt like the right lesson.

---

**Status**: Manuscript submitted December 2025. First author. Claimed defect-mediated mechanism based on elimination of alternatives—acknowledged remaining ambiguities about specific defect species and localization.

**What I learned**: Spectroscopy gives you constraints, not fingerprints. Ruling things out is often more powerful than trying to prove something in.

---

**Constraint analysis**: [/constraints/aln-electroabsorption](/constraints/aln-electroabsorption/)  
**Methods**: [UV-Vis](/reading-ledger/#uv-vis), [XRD](/reading-ledger/#xrd), [AFM](/reading-ledger/#afm), [DFT-PBE](/reading-ledger/#dft-pbe)

**Project date**: Spring 2025 - Winter 2025  
**My experience level**: First experimental analysis project, ~6 months into research. Not an expert in defect spectroscopy—documenting what I learned about mechanism disambiguation.