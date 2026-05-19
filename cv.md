---
layout: page
title: CV
permalink: /cv/
---

# Anuraag Sharma

**Graduating:** Summer 2026  
**Degree:** B.Eng., Microelectronic Science and Engineering  
**Focus:** inverse problems, physical sensing, optical metrology, electro-optic materials, and mmWave NLoS sensing

This page is a compact CV for the site. The fuller context is in [Work](/work/) and [Notes](/notes/).

---

## Contact

Email: anuraag.sharma22 [at] student.xjtlu.edu.cn  
Location: Taicang, China → TBD Fall 2026  

---

## Current direction

I work on cases where physical measurements are easier to fit than to interpret.

Across optical metrology, electro-optic thin films, first-principles optical modeling, alloy sampling, and mmWave sensing, the recurring question is:

> what did the measurement actually identify?

My strongest current interests are inverse modeling, identifiability, measurement design, and physical systems where model fit alone is not enough evidence.

---

## Education

**Xi’an Jiaotong–Liverpool University**  
B.Eng., Microelectronic Science and Engineering  
Expected Summer 2026  
Direct Year 2 Entry

**University of Liverpool**  
B.Eng. (Hons), Microelectronic Science and Engineering  
Double Degree Program

---

## Featured work

### Undergraduate thesis — mmWave NLoS inverse sensing and passive boundary design

Developing a 26 GHz passive metasurface boundary and CST-to-Python sensing-matrix pipeline to test whether engineered boundary conditions improve hidden-object identifiability, reconstruction stability, leakage, and controlled blocked-link recovery.

Current status:

- built controlled 26 GHz NLoS forward models;
- constructed sensing matrices from CST field exports;
- implemented Tikhonov reconstruction, discrimination, leakage, and AWGN robustness analysis;
- compared idealized boundary configurations through operator diagnostics;
- designed a loop–paddle–diamond passive unit cell near 26 GHz;
- validated the resonance mechanism in CST using field and surface-current plots;
- prepared a 31×31 RO4350B finite-panel layout for PCB fabrication.

Claim boundary: this is controlled forward-model evidence plus fabrication-ready passive boundary design. It is not yet a real-port deployment claim.

Related: [Port Metasurface](/work/port-metasurface/)

---

### Inverse RCWA metrology

**KLA Corporation — Applications Engineering Intern**  
Summer 2025

- Built an inverse RCWA workflow connecting broadband optical reflectance to patterned-structure geometry.
- Found trench depth to be reliably constrained under bounded process assumptions.
- Found secondary geometry parameters to be more degenerate than the fit quality alone suggested.
- Learned that more wavelength samples of the same measurement do not automatically create new sensitivity directions.
- Reinforced the distinction between fit quality and identifiability.

Related: [Inverse RCWA Metrology](/work/inverse-rcwa/)

---

### AlN electroabsorption under bias

**XJTLU — School of CHIPS**  
Advisor: Assoc. Prof. Jangyong Kim  
2024–present

- Studied field-dependent UV optical modulation in PEALD-grown AlN-based thin films.
- Used structural and spectral constraints to test crystalline electro-optic, free-carrier, and interference explanations.
- Found defect- or disorder-mediated sub-bandgap absorption to be the most consistent interpretation.
- Kept the claim bounded because the current data do not uniquely identify the microscopic defect class or spatial absorption pathway.

Related: [AlN Electroabsorption](/work/aln-electroabsorption/)

---

## Earlier work

### Optical transitions in doped g-C₃N₄

**XJTLU — Chemistry & Materials Science**  
Advisor: Prof. Heechae Choi  
2024–present

- Computed dielectric response and optical-transition behavior using DFT.
- Studied how metal dopants affect visible absorption through symmetry breaking and oscillator-strength redistribution.
- Treated computed spectra as mechanism support, not unique structural identification.
- Learned that optical agreement does not uniquely determine dopant site, disorder, or microscopic configuration.

Related: [g-C₃N₄ Optical Transitions](/work/gcn-optical-transitions/)

---

### Alloy configuration sampling

- Studied composition-dependent optical and electronic trends in mixed-anion materials.
- Treated composition as an ensemble variable rather than a unique structure.
- Used configuration sampling to avoid overinterpreting a single relaxed cell.
- Main lesson: composition does not determine microscopic structure.

Related: [Alloy Configuration Sampling](/work/alloy-sampling/)

---

## Publications

1. S. Ji, H-Y. Ahn, M. Dreger, **A. Sharma**, et al.  
   *Mixing Anions in Metal Chalcogenides for Effective Band Gap Engineering with Temperature*  
   ACS Applied Optical Materials 2(8), 1559–1565 (2024)

2. **A. Sharma**, W. Chen, A. Kandwal, C. C. Kit, J. Kim  
   *Electric Field-Induced Optical Effects in AlN Thin Films for Transparent Electronic Interfaces*  
   Scientific Reports — submitted (2026)

---

## Tools and methods

**Inverse modeling:** RCWA, sensing matrices, Tikhonov regularization, operator conditioning, leakage analysis  
**Electromagnetic simulation:** CST Studio, field export pipelines, passive metasurface unit-cell simulation  
**Electronic structure:** VASP, PBE, HSE06, dielectric functions, optical transition analysis  
**Numerical analysis:** Python, NumPy, SciPy, Pandas, Matplotlib  
**Characterization:** XRD, SEM, AFM, IV–CV  
**Computation:** Slurm-based HPC workflows, batch job automation

---

## Languages

English, Hindi, Konkani, Kannada, Chinese, French

---

## Site context

This CV is intentionally short. The site is organized around the evidence behind the claims:

[Work](/work/) — project evidence  
[Notes](/notes/) — recurring inference errors  
[About](/about/) — why the site is public

---

Last updated: May 2026