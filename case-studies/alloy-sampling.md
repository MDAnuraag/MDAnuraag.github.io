---
layout: page
title: Alloy Configuration Sampling
permalink: /case-studies/alloy-sampling/
---

## Problem

Cu₂Ge(S₁₋ₓSeₓ)₃ band gaps shift with composition. But at fixed composition, many atomic arrangements are possible. How much does configuration matter vs. just stoichiometry?

**Question**: Can I predict band gap vs. composition for synthesis targets?

This was my first computational materials project—I didn't know much about DFT or alloys when I started.

---

## What I tried

**Initial approach**: Pick one configuration per composition, compute band gap, plot vs. x, done.

Prof. Choi asked: "How do you know that structure is representative?"

I didn't. So I tried sampling more.

**What I learned to do**:
1. Generate multiple configurations per composition (substitution on anion sites only)
2. Check thermodynamic plausibility (free energy, not just total energy)
3. Compute band gaps for all of them
4. Report ensemble averages with uncertainty

Sounds obvious now, but it wasn't obvious to me at the time.

---

## What I found

**At fixed composition, band gaps varied by up to 0.3 eV** depending on which specific configuration I chose.

That's not measurement noise—that's real configurational entropy competing with electronic energy.

At synthesis temperatures (400-600°C), thermal energy k_B T ~ 0.05-0.08 eV. Multiple configurations with similar energies coexist. No single structure dominates.

**The observable band gap is an ensemble average**, not a single-structure property.

---

## What worked

**Ensemble-averaged trends matched experiment** from our collaborators at University of Cologne.

They synthesized samples across composition range, measured optical gaps. Our Boltzmann-weighted averages from ~50 configurations per composition reproduced the experimental trend.

**Validation**: This gave me confidence the sampling approach was working—at least for this system.

**What I learned**: When configurational entropy matters (k_B T ~ ΔE_config), you can't avoid ensemble thinking.

---

## What I couldn't determine

**Whether our 50 configs per composition were enough**:

We sampled 50 out of >10⁶ combinatorially possible arrangements. Did we miss important motifs? Probably.

But I didn't know how to systematically check—cluster expansion or active learning would have helped, but I didn't know those methods yet.

**Whether synthesis locked in non-equilibrium structures**:

We assumed Boltzmann weighting at synthesis temperature. But if growth kinetics trapped metastable configurations, our predictions could be wrong.

No way to check without knowing actual synthesis pathways.

**Quantitative gap values**:

PBE underestimates by ~1 eV. We got trends right, but absolute values required experimental calibration.

---

## What I learned

**Composition is not structure.** This seems obvious now, but it wasn't obvious to me as an undergrad starting computational materials work.

You can't say "the band gap of Cu₂GeSe₃" without specifying (or ensemble-averaging over) atomic configurations.

**Sampling is hard**: 50 structures sounds like a lot until you realize how big the configuration space actually is. I don't think we sampled enough, but I also didn't know how to do better with the tools I had.

**When to stop computing**: We matched experiment reasonably well with ensemble averages from our 50-config samples. Could we do better with 500? Maybe. Worth the compute cost? Probably not for this project.

---

## What I'd do differently

1. **Use cluster expansion** for more systematic sampling (I didn't know this method when I did the project)
2. **Report uncertainty bands** more carefully (not just one error bar)
3. **Check convergence** with sample size (run 20, 50, 100 configs, see when trends stabilize)

But for a first project where I learned DFT basics, thermodynamic weighting, and why composition ≠ structure, this worked well enough.

---

**Status**: Published in ACS Applied Optical Materials (2024). First computational project, learned a lot about when single-structure calculations aren't enough.

**What I learned**: Properties are ensemble averages when configurational entropy competes with electronic energy. Single-structure predictions are almost never enough for alloys.

---

**Constraint analysis**: [/constraints/alloy-sampling](/constraints/alloy-sampling/)  
**Methods**: [Configuration sampling](/reading-ledger/#config-sampling), [DFT-PBE](/reading-ledger/#dft-pbe)

**Project date**: Spring 2024  
**My experience level**: First computational project, learning DFT from scratch. Lots of trial and error.

**Reference**: Ji, S.; Ahn, H.-Y.; Dreger, M.; **Sharma, A.**; Je, M.; Cho, S.-H.; Choi, H. *ACS Applied Optical Materials* **2**(8), 1559-1565 (2024)