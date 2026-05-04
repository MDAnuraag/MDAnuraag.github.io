---
layout: page
title: Alloy Configuration Sampling
permalink: /work/alloy-sampling/
redirect_from:
  - /case-studies/alloy-sampling/
  - /constraints/alloy-sampling/
---

## Question

Cu$_2$Ge(S$_{1-x}$Se$_x$)$_3$ changes optical band gap as sulfur is replaced by selenium.

The tempting shortcut is to treat composition $x$ as the only state variable:

$$
x \rightarrow E_g.
$$

That is incomplete.

For a fixed $x$, many S/Se arrangements are possible on the anion sublattice. Those configurations can have different energies and different band gaps.

The real question was:

> Can a band-gap trend versus composition be interpreted without pretending that one structure represents the alloy?

---

## What I did

This was my first computational materials project.

The naive workflow would have been:

$$
\text{one composition}
\rightarrow
\text{one structure}
\rightarrow
\text{one band gap}.
$$

That failed conceptually because the structure was not uniquely defined.

The revised workflow was:

$$
x
\rightarrow
\{\text{S/Se configurations}\}
\rightarrow
\{E_g\}
\rightarrow
\langle E_g \rangle.
$$

I sampled multiple configurations at fixed composition, compared relative energies, computed band gaps, and interpreted the trend as an ensemble behavior rather than a single-structure property.

The thermodynamic anchor was:

$$
\Delta G_{\mathrm{mix}}(x,T)
=
\Delta H_{\mathrm{mix}}(x)
-
T\Delta S_{\mathrm{mix}}(x).
$$

The configurational entropy approximation was:

$$
\Delta S_{\mathrm{mix}}
=
-k_B[x\ln x+(1-x)\ln(1-x)].
$$

This was not a full cluster expansion. It was a practical correction to a worse assumption: that one configuration could stand for the material.

---

## What worked

The calculation showed that fixed composition did not imply fixed band gap.

At the same $x$, different sampled configurations produced band-gap variation large enough to matter for interpretation.

That changed the claim from:

> this composition has this band gap,

to:

> this composition has a distribution of plausible band gaps under sampled configurations.

The ensemble-averaged trend was more meaningful than a single clean DFT curve.

---

## What failed

The sampling did not prove the full configuration space was exhausted.

The true number of possible S/Se arrangements is much larger than the sampled set. A finite set of DFT structures can show that configuration matters, but it cannot prove that all important motifs were found.

The experiment also measures an averaged material response. It does not reveal the microscopic configuration distribution actually produced during synthesis.

So the result could support a composition-dependent trend, but not a unique atomistic structure for each composition.

---

## What it taught me

Composition is not structure.

A formula like

$$
\mathrm{Cu_2Ge(S_{1-x}Se_x)_3}
$$

does not specify where the S and Se atoms are.

If the property depends on local arrangement, then “the band gap at $x$” is not a complete statement. The ensemble has to be defined.

The broader lesson was about stopping rules. More computation is not automatically better. The relevant question is whether additional configurations reduce uncertainty in the claim being made.

---

## Status

Published in **ACS Applied Optical Materials**, 2024.

**Claim level:** configuration sampling improved the interpretation of band-gap trends; the actual synthesized configuration distribution remained unresolved.

**Related notes:**  
[Composition is not structure](/notes/composition-not-structure/)  
[Averaging destroys information irreversibly](/notes/averaging/)

**Methods:**  
[Configuration sampling](/reading-ledger/#config-sampling)  
[DFT — PBE](/reading-ledger/#dft-pbe)  
[DFT — hybrid functionals](/reading-ledger/#dft-hse06)

**Reference:**  
Ji, S.; Ahn, H.-Y.; Dreger, M.; **Sharma, A.**; Je, M.; Cho, S.-H.; Choi, H. *Mixing Anions in Metal Chalcogenides for Effective Band Gap Engineering*. *ACS Applied Optical Materials* **2024**, 2, 1559–1565.

[Back to work](/work/)