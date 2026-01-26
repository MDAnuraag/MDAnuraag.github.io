---
layout: page
title: CV
permalink: /cv/
---

# Anuraag Sharma

**Graduating**: Summer 2026 (B.Eng., Microelectronics)  
**Current focus**: Applying to PhD programs at the intersection of physics, materials science, and computational science

This CV is intentionally paired with process documentation.  
How I think and work: [/method](/method)  
What actually happened in projects: [/case-studies](/case-studies)  
Constraints I ran into and could not resolve: [/constraints](/constraints)  
Personal interests, opinions, and non-academic favorites: [/elsewhere](/cv/elsewhere)

---

## Contact

**Email**: anuraag.sharma22 [at] student.xjtlu.edu.cn  
**Phone**: +1 (518) 937-2183  
**Location**: Schenectady, NY (home) → Taicang, China (current) → TBD Fall 2026  
**Status**: U.S. Permanent Resident

---

## Education

**Xi’an Jiaotong–Liverpool University** (Taicang, China)  
B.Eng., Microelectronic Science and Engineering  
Expected Summer 2026 | Direct Year 2 Entry  

**University of Liverpool** (UK)  
B.Eng. (Honors), Microelectronic Science and Engineering  
(Double Degree Program, with Contemporary Entrepreneurialism)

**Formal coursework** (non-exhaustive):  
Semiconductor Devices · IC Design & Fabrication · Electromagnetism · RF Engineering  

*Note*: My training is engineering-heavy. Most physics depth came from research-driven self-study rather than coursework.

---

## Research Experience

### XJTLU — School of CHIPS (Taicang, China)  
**Undergraduate Research Assistant**  
Advisor: Assoc. Prof. Jangyong Kim  
Fall 2024 – Present  
**Status**: Manuscript submitted

- Studied field-dependent UV transmission in PEALD AlN thin films under applied bias.
- Systematically tested crystalline electro-optic and free-carrier explanations using XRD, AFM, and spectral constraints.
- Could not support those mechanisms with available data; defect-mediated electroabsorption remained consistent with observations.
- Left multiple secondary mechanisms unresolved due to sample and bias-range limits.
- First project where I explicitly documented what the data *could not* determine.

Related [/notes:](/case-studies/aln-electroabsorption)  
Constraints [/encountered:](/constraints/aln-electroabsorption)

---

### XJTLU — Department of Chemistry & Materials Science (Suzhou, China)  
**Undergraduate Research Assistant**  
Advisor: Prof. Heechae Choi  
Spring 2024 – Present  
**Status**: Ongoing

- Computed dielectric response and optical transitions in metal-doped g-C₃N₄ using DFT.
- Initially relied on single relaxed geometries; learned this was insufficient for optical claims.
- Shifted toward small-ensemble sampling after observing configuration-dependent transitions.
- This project is where I learned to distrust clean spectra from undersampled configuration spaces.

Workflow [/notes:](/case-studies/gcn-optical-transitions)  
What I still [/don’t know:](/constraints/gcn-optical-transitions)

---

### XJTLU — Summer Undergraduate Research Fellowship (SURF)  
**Advisor**: Prof. Heechae Choi  
Summer 2024  
**Status**: Completed

- Screened MXene-supported single-atom catalysts for hydrogen evolution.
- Learned PBE-level DFT largely by failure: broken jobs, non-converging slabs, and unphysical adsorption sites.
- First sustained experience running calculations on a shared HPC cluster.
- Poster selected for SURF Excellent Poster List (86 / 399 submissions).

---

## Industry Experience

### KLA Corporation (Ann Arbor, Michigan)  
**Applications Engineering Intern**  
Summer 2025

- Built an inverse-RCWA pipeline linking broadband reflectance (300–2500 nm) to trench geometry.
- Recovered trench depth reliably across >20 stack variants.
- Explicitly avoided over-fitting secondary parameters when the data could not constrain them.
- Reduced inline measurement time by ~47% by narrowing the parameter space rather than increasing model complexity.

Process [notes:](/case-studies/inverse-rcwa)  
Model [limitations:](/constraints/inverse-rcwa)

---

## Publications

1. S. Ji, H-Y. Ahn, M. Dreger, **A. Sharma**, M. Je, S-H. Cho, H. Choi  
   *Mixing Anions in Metal Chalcogenides for Effective Band Gap Engineering with Temperature*  
   ACS Applied Optical Materials **2**(8), 1559–1565 (2024)

2. **A. Sharma**, W. Chen, A. Kandwal, C. C. Kit, J. Kim  
   *Electric Field-Induced Optical Effects in AlN Thin Films for Transparent Electronic Interfaces*  
   Scientific Reports — submitted (January 2026)

---

## Invited Presentations

- **Invited Talk** — *Band-gap engineering in metal chalcogenides*  
  Cera4S Conference, IIT Madras (2024)

- **Invited Poster** — *Cu₂GeS₃ alloy optical properties*  
  MSE Congress, TU Darmstadt (2024)

---

## Technical Skills

I mostly work with computational and optical models, and I’m comfortable moving between code, theory, and data when something breaks.

On the computation side, I use **VASP** (mostly PBE, sometimes HSE06) for electronic structure and optical response, and **RCWA** for inverse problems in thin-film and nanostructured optics. I’m used to running and debugging jobs on shared **HPC clusters** (Slurm), including when convergence or sampling becomes the bottleneck rather than compute time.

I write most of my analysis in **Python** (NumPy, SciPy, ASE, Pandas, Matplotlib), usually building small pipelines rather than polished libraries.

Experimentally, I’ve worked hands-on with **XRD, SEM, AFM, and IV–CV**, mainly to rule things out rather than claim definitive mechanisms.

I’ve also used **CST Studio** for EM simulations and **Cadence Virtuoso (45 nm PDK)** for coursework-level IC design—enough to understand constraints, not enough to claim process expertise.

Languages: English (native), Hindi (native), Chinese (HSK 4), French (intermediate)

---

## Other Experience

**XEC Chips Club — R&D Officer** (XJTLU, Fall 2023 – Present)

- Developed educational material on semiconductor device testing.
- Taught LabVIEW for basic data acquisition.
- First experience explaining technical uncertainty to non-specialists.

---

**PDF version**: available on request  
**Website last updated**: January 2026
About this [**site**](/about)  