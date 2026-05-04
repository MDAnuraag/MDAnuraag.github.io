---
layout: page
title: g-C₃N₄ Optical Transitions
permalink: /work/gcn-optical-transitions/
redirect_from:
  - /case-studies/gcn-optical-transitions/
  - /constraints/gcn-optical-transitions/
---

## Question

Metal-doped graphitic carbon nitride can show stronger visible absorption than pristine g-C$_3$N$_4$.

The simple question was:

> Does doping shift the absorption?

The better question was:

> What mechanism causes the shift, and how much structural information can the computed spectrum actually identify?

This was my second computational project. It came after the alloy-sampling project, where I learned that composition does not determine structure. Here the same lesson appeared in optical form: a spectrum does not uniquely determine the atomic model that produced it.

---

## What I did

I built doped g-C$_3$N$_4$ structural models with metal atoms such as Pt, Pd, and Co.

For each model, I computed:

- band structures;
- densities of states;
- dielectric functions;
- oscillator strengths;
- optical absorption trends.

The forward map was:

$$
\text{structure}
\rightarrow
\text{electronic states}
\rightarrow
\text{optical response}.
$$

The inverse map was not unique:

$$
\text{optical response}
\not\Rightarrow
\text{unique structure}.
$$

A simulated spectrum was therefore treated as a constraint on possible structures, not as proof of one structure.

---

## What worked

The robust result was mechanism-level.

Metal doping could enhance visible absorption by changing the electronic states near the band edges and redistributing oscillator strength.

At the independent-particle level, optical intensity depends not only on energy differences but also on transition matrix elements:

$$
\varepsilon_2(\omega)
\propto
\sum_{v,c,\mathbf{k}}
\left|
\langle \psi_c | \mathbf{r} | \psi_v \rangle
\right|^2
\delta(\varepsilon_c-\varepsilon_v-\hbar\omega).
$$

That matters because a dopant can make a transition optically stronger even if the band structure alone does not fully explain the absorption change.

The most stable interpretation was:

> dopants break local symmetry, introduce metal-character near relevant states, and activate or strengthen lower-energy optical transitions.

That mechanism survived better than exact peak assignments.

---

## What failed

The computed spectra did not identify a unique microscopic dopant structure.

Several plausible models could produce similar absorption onsets or visible-light enhancement. Different dopant sites, local distortions, stacking variants, vacancies, and coordination environments could all change the optical spectrum.

The calculation could support a mechanism class, but not a unique atomistic claim.

So the weak claim would be:

> this peak proves this dopant site.

The stronger claim is:

> these models show how metal-induced symmetry breaking and orbital redistribution can make visible transitions optically active.

---

## What limited the claim

The main limitation was structural non-uniqueness.

Real g-C$_3$N$_4$ is not a perfect periodic model. It can include polymerization disorder, stacking variation, terminations, defects, dopant clustering, and multiple local environments.

The computational limits were also important:

- PBE underestimates band gaps;
- finite cells restrict disorder sampling;
- independent-particle optical spectra omit excitonic effects;
- only a finite set of dopant configurations was tested.

Those limits make quantitative peak assignment weaker than qualitative mechanism interpretation.

---

## What would reduce uncertainty

A stronger structure-level claim would need independent structural evidence, not just more spectra.

Useful next evidence would include:

- EXAFS or XANES to constrain dopant coordination;
- broader configuration sampling;
- HSE06 or GW–BSE calculations on a calibrated subset;
- controlled synthesis with dopant concentration variation;
- comparison against optical spectra from better-characterized samples.

Without those constraints, more DFT mostly produces more admissible structures.

---

## What I learned

A qualitative mechanism can be robust even when the structural model is not unique.

The symmetry-breaking explanation is useful because it does not require exact confidence in one dopant site. But assigning a specific optical peak to a specific microscopic structure would require evidence that the optical calculation alone does not provide.

The useful distinction is:

$$
\text{mechanism-level support}
\neq
\text{structure-level identification}.
$$

---

## Status

Ongoing project. No manuscript yet.

**Claim level:** metal doping can plausibly enhance visible absorption through symmetry breaking and oscillator-strength redistribution; exact dopant site and microscopic structure remain unresolved.

**Related notes:**  
[Spectra are constraints, not fingerprints](/notes/spectra-constraints/)  
[Composition is not structure](/notes/composition-not-structure/)

**Methods:**  
[DFT — PBE](/reading-ledger/#dft-pbe)  
[DFT — hybrid functionals](/reading-ledger/#dft-hse06)  
[Optical response from DFT](/reading-ledger/#optics-from-dft)  
[Configuration sampling](/reading-ledger/#config-sampling)

[Back to work](/work/)