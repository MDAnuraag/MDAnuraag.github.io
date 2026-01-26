---
layout: page
title: Alloy Configuration Sampling
permalink: /case-studies/alloy-sampling/
---

## Problem

The band gap of Cu₂Ge(S₁₋ₓSeₓ)₃ changes with Se fraction $x$.  
But for a fixed $x$, there are many symmetry-inequivalent ways to arrange S and Se on the anion sublattice.

**Question:** Can I predict band gap vs. composition $x$ in a way that is meaningful for synthesis targets?

This was my first computational materials project. At the time, I didn’t yet understand alloys, configurational entropy, or how sensitive DFT results can be to which configuration you pick.

---

## What I tried

**Initial approach**  
Pick one configuration per composition, compute the band gap, plot gap vs. $x$.

My advisor asked: “How do you know that structure is representative?”

I didn’t. So I switched to sampling.

**Revised approach**
1. Generate multiple S/Se configurations per composition (substitution on anion sites only).
2. Compare relative energetics to avoid obviously implausible structures.
3. Use a free-energy viewpoint (not just total energy) to interpret which configurations could coexist.
4. Compute band gaps across the sampled set.
5. Report ensemble trends rather than single-structure claims.

---

## What the paper models (the anchor)

The paper treats Cu$_2$Ge(S$_{1-x}$Se$_x$)$_3$ as a random-alloy problem and uses a thermodynamic model for mixing:

$$
\Delta G_{\mathrm{mix}}(x,T) = \Delta H_{\mathrm{mix}}(x) - T\,\Delta S_{\mathrm{mix}}(x)
$$

with configurational entropy approximated as:

$$
\Delta S_{\mathrm{mix}} = k_B\left[x\ln x + (1-x)\ln(1-x)\right]
$$

In the paper, vibrational entropy is neglected for the bulk mixing free-energy estimate, and the miscibility gap is determined via common-tangent reasoning on $\Delta G_{\mathrm{mix}}(x,T)$. :contentReference[oaicite:0]{index=0}

My configuration sampling was not a cluster expansion; it was a practical attempt to respect the “no single configuration dominates” implication when energy differences are small relative to thermal scales.

---

## What I found

At fixed $x$, the computed band gaps varied by up to about **0.3 eV** depending on which S/Se arrangement I chose.

That spread is large compared to typical numerical noise and sits in the same “order-of-magnitude conversation” as thermal energy at synthesis-like temperatures:

$$
k_B T \approx 0.05\text{–}0.08\ \mathrm{eV}\quad \text{for}\quad 400\text{–}600^\circ\mathrm{C}
$$

So multiple configurations can plausibly contribute under processing conditions, and a single-structure “the band gap at $x$ is …” statement can be misleading.

**Interpretation:** the observable band gap is best treated as an **ensemble-weighted** quantity, not a single-configuration property.

---

## What worked

**Ensemble-averaged trends matched experiment from collaborators.**

Using Boltzmann-style weighting over my sampled configurations (about 50 per composition), the predicted composition trend aligned with measured optical gaps well enough to support the workflow as “consistent with the system behavior,” not as proof of completeness. :contentReference[oaicite:1]{index=1}

This was the first time I saw a strong practical payoff from treating alloys as an ensemble rather than a single optimized structure.

---

## What I couldn’t determine

**Whether ~50 configurations per composition was enough**  
The combinatorial space is enormous (easily $>10^6$). I sampled a tiny fraction.

I didn’t have a systematic way to test convergence or ensure important motifs weren’t missed. Cluster expansion or active-learning sampling would have been the right next tools, but I didn’t know them yet.

**Whether synthesis reached equilibrium**  
The thermodynamic model assumes equilibrium at the anneal temperature. If kinetics trap metastable configurations, the effective ensemble could differ from Boltzmann weighting.

We couldn’t verify that without deeper synthesis-pathway information.

**Absolute band-gap accuracy**  
PBE underestimates gaps substantially; the paper uses HSE06 for band-gap predictions (and shows good agreement with literature values for CGS). My early work leaned on trends rather than claiming accurate absolute gaps. :contentReference[oaicite:2]{index=2}

---

## What I learned

**Composition is not structure.**  
“The band gap at $x$” is incomplete unless you specify a configuration model or an ensemble.

**Sampling is hard by default.**  
“50 structures” sounds large until you compare it to the true configuration space.

**Stop conditions matter.**  
Once the ensemble trend matched experiment at the level needed for the paper’s point, scaling to 500 structures was not obviously worth the compute cost—though I didn’t know how to formalize that decision then.

---

## What I’d do differently now

1. Use **cluster expansion** to map configuration space systematically.
2. Run a **convergence check** (e.g., 20 → 50 → 100 structures) to see when the trend stabilizes.
3. Separate “trend prediction” vs. “absolute-value prediction” more cleanly in the write-up.

---

**Status:** Published (ACS Applied Optical Materials, 2024). :contentReference[oaicite:3]{index=3}  
**Project date:** Spring 2024  
**My experience level (then):** first computational project; learning DFT from scratch.

**Constraint analysis:** [/constraints/alloy-sampling](/constraints/alloy-sampling/)  
**Methods:** [Configuration sampling](/reading-ledger/#config-sampling), [DFT (PBE, HSE06)](/reading-ledger/#dft-pbe)

**Reference:**  
Ji, S.; Ahn, H.-Y.; Dreger, M.; **Sharma, A.**; Je, M.; Cho, S.-H.; Choi, H. *ACS Applied Optical Materials* **2**(8), 1559–1565 (2024). :contentReference[oaicite:4]{index=4}