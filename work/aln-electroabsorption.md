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

What mechanism can explain field-dependent UV modulation in PEALD-grown AlN-based thin films?

---

## Objects

**Film:** 50 nm PEALD-grown AlN-based / AlOxNy-like layer  
**Growth:** 300 °C  
**Substrates:** ITO/glass and TiN/Si  
**Signal:** field-dependent UV transmission near 282 nm  
**Device:** interdigital electrode optical structure  
**Main issue:** mechanism identification

The effect was real.

The mechanism was not uniquely identified.

---

## Measurements

Used constraints:

```text
XRD
AFM
MIM capacitor behavior
I–V / C–V response
IDE optical transmission
absorption-coefficient extraction
```

Key geometry issue:

```text
IDE field is non-uniform
field concentrates near electrode edges
reported field is device-level, not intrinsic uniform material field
```

---

## What moved

Applied bias produced:

```text
large UV-localized modulation near 282 nm
reversible response
much weaker visible / near-IR change
stable dielectric behavior under measured conditions
```

Photon energy near 282 nm:

$$
E \approx 4.4\ \mathrm{eV}
$$

That is below the AlN bandgap, so sub-bandgap states are the plausible optical channel.

---

## What the data support

Most defensible wording:

> field-modulated defect- or disorder-related sub-bandgap absorption in a PEALD-grown AlN-based film.

Possible contributors:

```text
oxygen-related complexes
vacancy-associated states
band-tail states
disorder-related localized states
charge-state redistribution
local field enhancement near IDE edges
```

The result is mechanism-level evidence.

It is not species-level identification.

---

## What failed

The current dataset cannot isolate one microscopic pathway.

Not identifiable from current measurements:

```text
specific defect species
defect depth profile
bulk vs interface dominance
local field distribution inside the active optical region
intrinsic electroabsorption coefficient
exact conduction mechanism
```

Magnitude alone does not identify mechanism.

A large effect can still be ambiguous.

---

## Claim boundary

Supported:

```text
electrically tunable UV response
defect/disorder-mediated sub-bandgap absorption as most consistent interpretation
```

Not supported:

```text
identified defect species
uniform bulk electroabsorption coefficient
single microscopic pathway
```

---

## Status

Submitted manuscript. First author.

**Claim level:** tunable UV response demonstrated; defect-mediated sub-bandgap absorption most consistent; microscopic defect identity and spatial pathway unresolved.

**Related notes:**  
[Spectra are constraints, not fingerprints](/notes/spectra-constraints/)  
[Averaging destroys information irreversibly](/notes/averaging/)

**Reading ledger:**  
[UV–Vis spectroscopy](/reading-ledger/#uv-vis)  
[XRD](/reading-ledger/#xrd)  
[AFM](/reading-ledger/#afm)

**Reference:**  
Sharma, A.; Chen, W.; Kandwal, A.; Kit, C. C.; Kim, J. *Electric Field-Induced Optical Effects in AlN Thin Films for Transparent Electronic Interfaces* (submitted).

[Back to work](/work/)