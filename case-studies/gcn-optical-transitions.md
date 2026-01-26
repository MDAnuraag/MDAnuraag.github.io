---
layout: page
title: g-C₃N₄ Optical Transitions
permalink: /case-studies/gcn-optical-transitions/
---

## Problem

Metal atoms (Pt, Pd, Co) on graphitic carbon nitride (g-C$_3$N$_4$) photocatalysts shift optical absorption into the visible range.

**Observable**: Computed electronic structure and optical response for different dopants and doping sites  
**Question**: What *mechanism* enables visible absorption—and how much structural detail can optical spectra actually constrain?

This was my second computational project. The goal was no longer just “get a band gap,” but to understand what information optical spectra do and do not encode about microscopic structure.

---

## What I tried

**Initial approach**  
Run DFT, compute band structures and dielectric functions, compare absorption spectra, claim insight.

That approach produced clean-looking spectra—but I couldn’t tell whether the differences were physically meaningful or artifacts of structure choice.

Problems became obvious quickly:
1. **Multiple doping sites** exist for each metal—no single “correct” structure.
2. **PBE band gaps are wrong** by $\sim1\ \mathrm{eV}$—could optical conclusions still be trusted?
3. **Finite supercells** were required—was I seeing physics or finite-size effects?

So I backed up and reframed the problem.

---

## How I reframed it

Instead of asking *“which structure is best?”*, I treated the problem as a **forward mapping**:

$$
\text{structure} \;\rightarrow\; \text{electronic states} \;\rightarrow\; \text{optical response}
$$

In polymeric, weakly ordered semiconductors like g-C$_3$N$_4$, this mapping is **many-to-one**.  
Optical spectra are projections of electronic structure, not structural fingerprints.

The task became:
- identify which optical features are **robust to structural variation**, and
- recognize where inversion (spectrum $\rightarrow$ structure) becomes non-identifiable.

---

## What I figured out

### Why metal doping shifts absorption

The key mechanism is **symmetry breaking**, not fine energetic tuning.

Pristine g-C$_3$N$_4$ has relatively high symmetry at the electronic level. Many low-energy optical transitions are weak or forbidden by selection rules, limiting visible absorption.

Introducing metal dopants:
- breaks local symmetry,
- introduces metal $d$-character near the band edges, and
- activates transitions that were previously forbidden or weak.

This is visible directly in the transition matrix elements.

At the independent-particle level, optical intensity depends on

$$
\varepsilon_2(\omega)
\propto
\sum_{v,c,\mathbf{k}}
\left|
\langle \psi_c | \mathbf{r} | \psi_v \rangle
\right|^2
\delta(\varepsilon_c - \varepsilon_v - \hbar\omega),
$$

not on eigenvalues alone.

I verified the mechanism by:
- computing transition dipole moments, not just band structures,
- tracking how oscillator strength redistributed after doping,
- comparing multiple dopants and multiple sites.

**Result**: Visible absorption enhancement is robust. It does *not* depend sensitively on the exact site or functional choice, because it originates from symmetry breaking rather than precise level alignment.

---

## What survived structural variation

Across plausible configurations, several features were consistent:

- near-UV absorption onset in pristine g-C$_3$N$_4$  
- dominance of $\pi \rightarrow \pi^\*$ transitions  
- strong in-plane versus out-of-plane anisotropy  
- extension of absorption into the visible after metal doping  

These define the **material class**, not a specific microscopic structure.

---

## What I couldn’t determine

**Which specific doping site dominates in real samples**

I sampled $\sim10$–$20$ metal positions per dopant. All showed similar absorption onsets (within $\sim0.2$–$0.3\ \mathrm{eV}$).

I do not know which sites are actually occupied experimentally—nor whether multiple sites coexist.

**Quantitative peak positions**

PBE underestimates gaps by $\sim1\ \mathrm{eV}$.  
While the symmetry-breaking argument is qualitative and robust, precise transition energies would require HSE06 or GW–BSE, which were not feasible at scale on our cluster.

**Effect of real disorder**

Experimental g-C$_3$N$_4$ is polycrystalline, partially polymerized, and compositionally variable. My models assume ideal periodicity. How much disorder reshapes the spectra beyond broadening remains uncertain.

---

## What collapsed under inversion

Different structural perturbations produced nearly indistinguishable spectra once disorder and resolution were considered:

- stacking and interlayer spacing  
- vacancy density versus termination  
- planar distortion versus electronic localization  
- band curvature changes versus apparent excitonic shifts  
- thickness versus intrinsic disorder  

The dominant surviving quantity was the transition dipole moment,

$$
\mathbf{d}_{vc} = \langle \psi_v | \mathbf{r} | \psi_c \rangle.
$$

Peak positions alone could not uniquely constrain structure.

---

## What I learned

**Qualitative mechanisms can be robust even when quantitative predictions aren’t.**

Symmetry breaking explains *why* metal doping helps. That insight survives functional choice, site ambiguity, and finite-size limitations.

But claiming *which* site or *which* dopant is optimal would be overclaiming without experimental structural constraints (e.g., EXAFS, XANES).

**When to stop computing**

More configurations, larger cells, and better functionals would not resolve a fundamentally non-identifiable inverse problem.

At some point, additional DFT just samples more structures—not necessarily the right ones.

---

## What I’d do differently

1. Collaborate with experimentalists upfront to constrain plausible sites
2. Run a small number of HSE06 calculations for calibration
3. Sample more aggressively only if claiming structure–property specificity
4. State bounds on what optical spectra can and cannot determine earlier

---

**Status**: Ongoing project, no manuscript yet.

**What I learned**:  
Computation is better at identifying *mechanisms* (symmetry breaking) than *specific structures* (exact doping sites). Optical spectra constrain families of admissible structures, not unique configurations.

---

**Constraint analysis**: [/constraints/gcn-optical-transitions](/constraints/gcn-optical-transitions/)  
**Methods**: [DFT-PBE](/reading-ledger/#dft-pbe), [DFT-HSE06](/reading-ledger/#dft-hse06), [Optical response from DFT](/reading-ledger/#optics-from-dft), [Configuration sampling](/reading-ledger/#config-sampling)

**Project date**: Spring 2024 – Present  
**My experience level**: Second computational project; learning excited-state modeling and where DFT optical predictions remain trustworthy.
