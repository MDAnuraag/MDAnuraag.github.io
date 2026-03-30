---
layout: interactive
status: complete
title: Inverse RCWA Metrology
permalink: /case-studies/inverse-rcwa/
---

## Problem

Summer 2025 at KLA: recover trench geometry from broadband reflectance of patterned GAAFET stacks.

**Observable**: Reflectance from 300–2500 nm, polarization-resolved  
**Goal**: Extract trench depth and layer thicknesses from spectral data  
**Challenge**: Multiple geometries can produce nearly identical spectra

This was my first real encounter with inverse problems in industry — where "good enough to control the process" matters more than "perfectly understood."

---

## What worked

**Trench depth** was reliably recovered across 20+ stack and geometry variants. Depth creates specific interference patterns in the spectral shape that don't correlate strongly with other parameters when you restrict to 0° polarization and apply fabrication process bounds. Validation was stable across multi-start optimization, consistent within ±5%, and matched CD-SEM measurements on calibration samples.

Result: 47% reduction in inline measurement time-to-solution by focusing on the one parameter we could actually resolve.

---

## What didn't work

**Secondary parameters** — sidewall angle and several layer thicknesses — remained degenerate. Changing sidewall angle by 5° and adjusting a nearby thickness by 10 nm produced nearly identical spectra. The χ² residual difference was sub-1% across these degenerate solutions, which is below the noise floor of the instrument.

Adding more wavelength points didn't help — same degeneracy, more data. Using both polarizations made it worse by introducing additional parameter correlations. Tighter process bounds helped marginally.

The core issue: you cannot optimize your way out of a fundamentally ill-posed problem. More data points don't fix degeneracy if the physics couples the parameters.

---

## What the degeneracy actually looks like

The sensing matrix for this problem has a specific structure: depth-sensitive spectral features are well-separated from thickness-sensitive features in wavelength space, which is why depth is recoverable. Secondary parameters share spectral sensitivity regions — their Jacobian columns are nearly parallel, producing high covariance in the posterior and multiple local minima with similar fit quality.

Multi-start optimization from 20+ random initializations converged to geometrically different solutions with χ² < 0.03 in each case. That's the signature of structural non-identifiability, not optimizer failure.

---

## What I'd do differently

Angle-resolved measurements break some of these degeneracies by adding diversity in the sensitivity structure. Multiple azimuthal orientations similarly. Better sensitivity analysis upfront — before building the full pipeline — would have identified which parameters were non-identifiable earlier and avoided wasted effort on secondary parameter extraction.

In a production environment, "good enough to control depth" was the right answer. Perfect geometric reconstruction wasn't necessary and wasn't achievable with this measurement configuration.

---

**What I learned**: Inverse problems fail quietly. Good fits don't mean unique solutions. Identifiability matters more than optimization skill.

**Status**: Completed Summer 2025. Pipeline deployed for trench depth monitoring. Secondary parameter extraction acknowledged as future work requiring additional measurement diversity.

---

**Constraint analysis**: [/constraints/inverse-rcwa](/constraints/inverse-rcwa/)  
**Methods**: [RCWA](/reading-ledger/#rcwa), [Identifiability](/reading-ledger/#identifiability), [Dispersion models](/reading-ledger/#dispersion)