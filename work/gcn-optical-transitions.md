---
layout: page
title: g-C₃N₄ Optical Transitions
permalink: /work/gcn-optical-transitions/
redirect_from:
  - /case-studies/gcn-optical-transitions/
  - /constraints/gcn-optical-transitions/
---

## Question

Can computed optical spectra explain visible absorption enhancement without pretending to identify one unique dopant structure?

---

## Objects

**Material:** metal-doped g-C$_3$N$_4$  
**Dopants studied:** Pt, Pd, Co  
**Signal:** computed dielectric response / optical absorption  
**Model:** DFT electronic structure and optical transitions  
**Failure mode:** spectrum treated as structural fingerprint

Forward map:

$$
\text{structure}
\rightarrow
\text{electronic states}
\rightarrow
\text{optical response}
$$

Invalid inverse shortcut:

$$
\text{optical response}
\not\Rightarrow
\text{unique structure}
$$

---

## What moved

Metal dopants changed states near relevant energies and redistributed oscillator strength.

Optical intensity depends on transition matrix elements, not only band energies:

$$
\varepsilon_2(\omega)
\propto
\sum_{v,c,\mathbf{k}}
\left|
\langle \psi_c | \mathbf{r} | \psi_v \rangle
\right|^2
\delta(\varepsilon_c-\varepsilon_v-\hbar\omega)
$$

Stable interpretation:

```text
local symmetry breaking
metal-character near relevant states
stronger lower-energy optical transitions
oscillator-strength redistribution
```

---

## What failed

The spectrum did not identify a unique dopant site.

Ambiguous variables:

```text
dopant site
local distortion
stacking variation
vacancies
coordination environment
dopant clustering
polymerization disorder
```

A computed spectrum can support a mechanism class.

It cannot identify a microscopic structure alone.

---

## Computational limits

```text
PBE underestimates band gaps
finite cells restrict disorder sampling
independent-particle spectra omit excitonic effects
only finite dopant configurations tested
real g-C3N4 is structurally disordered
```

More DFT does not automatically solve the inverse problem. It can generate more plausible structures.

---

## Claim boundary

Supported:

```text
metal doping can plausibly enhance visible absorption through symmetry breaking and oscillator-strength redistribution
```

Not supported:

```text
unique dopant site
unique microscopic structure
exact peak-to-structure assignment
```

---

## Status

Ongoing project. No manuscript yet.

**Claim level:** mechanism-level support; structure-level identification unresolved.

**Related notes:**  
[Spectra are constraints, not fingerprints](/notes/spectra-constraints/)  
[Averaging destroys information irreversibly](/notes/averaging/)

**Reading ledger:**  
[DFT — PBE](/reading-ledger/#dft-pbe)  
[DFT — hybrid functionals](/reading-ledger/#dft-hse06)  
[Optical response from DFT](/reading-ledger/#optics-from-dft)  
[Configuration sampling](/reading-ledger/#config-sampling)

[Back to work](/work/)