---
layout: page
title: Electroabsorption in Amorphous AlN
permalink: /case-studies/aln-electroabsorption/
---

![Optical_Probing_in_an_AlN_stack]({{ "/assets/images/aln/aln12.png" | relative_url }})
{: style="width:60%; max-width:700px; display:block; margin:auto;"}

## Problem

What mechanism produces large, reversible UV transmission modulation in amorphous AlN under applied electric field (~200 MV/m)?

**Forward map**: electric field → electronic states → absorption coefficient → transmitted intensity

Multiple mechanisms can occupy this map. The task is determining which survives once constraints are applied.

---

## Ambiguities

Several mechanisms can produce field-dependent transmission:
- Crystalline electro-optic effects (Pockels, Kerr)
- Interference from thickness or refractive index changes
- Free-carrier absorption from injected carriers
- Defect-mediated absorption via localized states

---

## Constraints Applied

- **Structure**: XRD shows predominantly amorphous (no crystalline peaks) → rules out symmetry-dependent electro-optic effects
- **Spectral locality**: Modulation confined to deep-UV near absorption edge (282 nm)
- **Broadband exclusion**: No field response in visible/near-IR → rules out free-carrier and interference mechanisms
- **Thickness**: Fixed and independently verified → not optical path modulation
- **Field regime**: Well below breakdown, fully reversible

---

## Outcome

Strong modulation observed at 282 nm under fields up to ~200 MV/m:
- Absorption coefficient increased from ~2×10³ to ~1.4×10⁴ cm⁻¹
- Photon energy (4.4 eV) well below AlN bandgap (~6 eV)
- Longer wavelengths unaffected

**Surviving mechanism**: Defect-mediated electroabsorption via localized electronic states in the amorphous network.

Free-carrier, crystalline, and interference mechanisms excluded by combined structural and spectral constraints.

---

**Constraint analysis**: [/constraints/aln-electroabsorption/](/constraints/aln-electroabsorption/)  
**Methods**: [UV–Vis](/reading-ledger/#uv-vis), [XRD](/reading-ledger/#xrd), [AFM](/reading-ledger/#afm), [DFT-PBE](/reading-ledger/#dft-pbe)