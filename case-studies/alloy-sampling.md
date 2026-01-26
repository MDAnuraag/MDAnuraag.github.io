---
layout: page
title: Alloy Configuration Sampling
permalink: /case-studies/alloy-sampling/
---

## The question

When band gaps shift in an alloy, how much of that change is due to composition —  
and how much comes from atomic configuration hidden beneath the same stoichiometry?

---

## The forward claim

Standard alloy models implicitly assume

composition → electronic structure.

In reality, the forward map is

atomic configuration → energy → thermodynamic weight → ensemble electronic response.

Composition is a projection of a higher-dimensional configuration space.

Formally, electronic observables are ensemble averages:

$$
\langle O \rangle = \sum_i O_i\, p_i,
\qquad
p_i = \frac{e^{-E_i/(k_{\mathrm{B}}T)}}{Z},
\qquad
Z = \sum_i e^{-E_i/(k_{\mathrm{B}}T)}.
$$

Not properties of a single structure.

---

## Where ambiguity enters

At fixed stoichiometry, many atomic arrangements exist.

In Cu₂Ge(S₁₋ₓSeₓ)₃:

- multiple configurations at the same composition have near-degenerate energies,
- those configurations yield measurably different band gaps,
- thermal energies at growth conditions satisfy $k_{\mathrm{B}}T \sim \Delta E_{\text{config}}$.

No single configuration dominates the ensemble.

---

## What was constrained

To keep the problem physically admissible:

- Substitution was restricted to anion sites (S → Se).
- The cation framework was held fixed.
- Configurations were generated explicitly in supercells.
- Multiple configurations were sampled per composition.
- Thermodynamic admissibility was enforced through free energy, not energy ranking alone.

The Gibbs free energy of mixing was treated explicitly,

$$
\Delta G_{\text{mix}}(x,T)
=
\Delta H_{\text{mix}}(x)
-
T \Delta S_{\text{mix}}(x),
$$

with configurational entropy

$$
\Delta S_{\text{mix}}
=
- k_{\mathrm{B}}
\big[
x \ln x + (1-x)\ln(1-x)
\big].
$$

Configurational entropy was not averaged away; it controlled which configurations contribute.

---

## What survived

Only constrained statements remained valid:

- Composition alone does not uniquely determine electronic structure.
- Single-configuration band gaps are underdetermined.
- Observed band-gap tuning reflects an **ensemble property**, not a representative structure.
- Structure–property claims require explicit configuration sampling.

No configuration was privileged a priori.

---

## What generalised

Alloy band engineering is a **sampling problem**, not a tuning knob.

Whenever configurational entropy competes with electronic energy scales,

$$
\Delta E_{\text{electronic}} \;\sim\; k_{\mathrm{B}}T,
$$

structure–property relations must be expressed as families of admissible solutions,
not single mappings.

---

**Reference**  
Ji, S.; Ahn, H.-Y.; Dreger, M.; **Sharma, A.**; Je, M.; Cho, S.-H.; Choi, H.  
*Mixing Anions in Metal Chalcogenides for Effective Band Gap Engineering with Temperature.*  
**ACS Applied Optical Materials** (2024).  
<https://doi.org/10.1021/acsaom.4c00189>
