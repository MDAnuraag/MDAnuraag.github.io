---
layout: page
title: Alloy Configuration Sampling
permalink: /case-studies/alloy-sampling/
---

## Problem

When Cu₂Ge(S₁₋ₓSeₓ)₃ band gaps shift with composition, how much comes from stoichiometry vs. atomic configuration hidden beneath it?

**Standard assumption**: composition → electronic structure  
**Reality**: atomic configuration → energy → thermodynamic weight → ensemble response

Electronic observables are ensemble averages:

$$
\langle O \rangle = \sum_i O_i\, p_i,
\qquad
p_i = \frac{e^{-E_i/(k_{\mathrm{B}}T)}}{Z},
\qquad
Z = \sum_i e^{-E_i/(k_{\mathrm{B}}T)}.
$$

Not properties of a single structure.

---

## Ambiguities

At fixed stoichiometry:
- Multiple configurations have near-degenerate energies ($\Delta E \sim k_{\mathrm{B}}T$ at growth conditions)
- Those configurations yield measurably different band gaps
- No single configuration dominates the ensemble

---

## Constraints Applied

- **Substitution**: Anion sites only (S → Se), cation framework fixed
- **Sampling**: Multiple configurations generated per composition in supercells
- **Admissibility**: Gibbs free energy, not just energy ranking:

$$
\Delta G_{\text{mix}}(x,T)
=
\Delta H_{\text{mix}}(x)
-
T \Delta S_{\text{mix}}(x),
$$

where configurational entropy

$$
\Delta S_{\text{mix}}
=
- k_{\mathrm{B}}
\big[
x \ln x + (1-x)\ln(1-x)
\big]
$$

controls which configurations contribute.

---

## Outcome

- **Single-configuration band gaps**: Underdetermined (up to 0.3 eV spread at same composition)
- **Observed tuning**: Reflects ensemble average, not representative structure
- **Validation**: Computed trends matched experimental band-gap vs. composition curves from synthesis partners

Configuration entropy was not averaged away—it determined the answer.

---

**Reference**  
Ji, S.; Ahn, H.-Y.; Dreger, M.; **Sharma, A.**; Je, M.; Cho, S.-H.; Choi, H.  
*Mixing Anions in Metal Chalcogenides for Effective Band Gap Engineering with Temperature.*  
**ACS Applied Optical Materials** (2024). <https://doi.org/10.1021/acsaom.4c00189>

**Constraint analysis**: [/constraints/alloy-sampling/](/constraints/alloy-sampling/)  
**Methods**: [DFT-PBE](/reading-ledger/#dft-pbe), [Configuration sampling](/reading-ledger/#config-sampling)