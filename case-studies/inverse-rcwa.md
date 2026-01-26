---
layout: page
title: Inverse RCWA Metrology
permalink: /case-studies/inverse-rcwa/
---

## Problem

Summer 2025 at KLA: recover trench geometry from broadband reflectance of patterned GAAFET stacks.

**Observable**: Reflectance from 300-2500 nm, polarization-resolved  
**Goal**: Extract trench depth and layer thicknesses from spectral data  
**Challenge**: Multiple geometries can produce nearly identical spectra

This was my first real encounter with inverse problems in industry—where "good enough to control the process" matters more than "perfectly understood."

---

## What I tried

The forward model was solid—RCWA accurately predicts reflectance from known geometry. The inverse problem was the hard part.

I started by treating it like an optimization problem: fit all parameters simultaneously and see what happens. That didn't work well—the optimizer converged, fit looked great, but running from different starting points gave completely different geometries with similar χ².

So I tried a different approach:
1. **Controlled perturbations**: Change one geometric parameter at a time, map how spectrum responds
2. **Identify features**: Find spectral regions where depth dominates vs. where multiple parameters trade off
3. **Constrain search space**: Use fabrication process windows as hard bounds
4. **Restrict polarization**: Use 0° only (eliminates some parameter correlations)
5. **Fix weak parameters**: Remove or fix parameters the spectrum barely responds to

This helped—but it also made clear which parameters were fundamentally non-identifiable with this measurement.

---

## What worked

**Trench depth**: Reliably recovered across 20+ different stacks and geometry variants.

Why? Depth creates specific interference patterns in the spectral shape that don't correlate strongly with other parameters (when you restrict to 0° polarization and use process bounds).

**Validation**: 
- Stable across multi-start optimization
- Consistent within ±5% across all test structures
- Matched CD-SEM measurements on calibration samples

Result: 47% reduction in inline measurement time-to-solution by focusing on the one parameter we could actually resolve.

---

## What didn't work

**Secondary parameters** (sidewall angle, several layer thicknesses): Remained degenerate.

The data couldn't separate them—changing sidewall angle by 5° and adjusting a nearby thickness by 10 nm produced nearly identical spectra.

I tried:
- Adding more wavelength points (didn't help—same degeneracy)
- Using both polarizations (made it worse—added more correlations)
- Tighter process bounds (helped a little, not enough)

**What I learned**: You can't optimize your way out of a fundamentally ill-posed problem. More data points don't fix degeneracy if the physics couples the parameters.

---

## What I'd do differently

If I were starting over:
- Add angle-resolved measurements (breaks some degeneracies)
- Use multiple azimuthal orientations (more diversity)
- Design better sensitivity tests upfront (before building the full pipeline)

But in a production environment, "good enough to control depth" was actually the right answer. Perfect geometric reconstruction wasn't necessary.

---

**Status**: Completed summer 2025 internship project. Pipeline deployed for trench depth monitoring. Secondary parameter extraction acknowledged as future work requiring additional measurements.

**What I learned**: Inverse problems fail quietly. Good fits don't mean unique solutions. Identifiability matters more than optimization skill.

---

**Constraint analysis**: [/constraints/inverse-rcwa](/constraints/inverse-rcwa/)  
**Methods**: [RCWA](/reading-ledger/#rcwa), [Identifiability](/reading-ledger/#identifiability), [Dispersion models](/reading-ledger/#dispersion)

**Project date**: Summer 2025  
**My experience level**: First industry internship, first time working with inverse optical problems at scale