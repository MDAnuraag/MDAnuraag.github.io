---
layout: page
title: Alloy Configuration Sampling
permalink: /work/alloy-sampling/
redirect_from:
  - /case-studies/alloy-sampling/
  - /constraints/alloy-sampling/
---

## Question

Can a band-gap trend versus alloy composition be interpreted without pretending that one structure represents the material?

---

## Objects

**Material:** Cu$_2$Ge(S$_{1-x}$Se$_x$)$_3$  
**Variable:** S/Se composition  
**Hidden variable:** anion configuration  
**Signal:** computed / measured band-gap trend  
**Failure mode:** composition treated as structure

Tempting shortcut:

$$
x \rightarrow E_g
$$

Better map:

$$
x
\rightarrow
\{\text{S/Se configurations}\}
\rightarrow
\{E_g\}
\rightarrow
\langle E_g \rangle
$$

---

## What moved

At fixed $x$, different S/Se arrangements produced different band gaps.

Fixed composition did not mean fixed electronic structure.

The useful claim became:

> this composition has a distribution of plausible band gaps under sampled configurations.

Not:

> this composition has one band gap.

---

## Thermodynamic anchor

Mixing free energy:

$$
\Delta G_{\mathrm{mix}}(x,T)
=
\Delta H_{\mathrm{mix}}(x)
-
T\Delta S_{\mathrm{mix}}(x)
$$

Configurational entropy approximation:

$$
\Delta S_{\mathrm{mix}}
=
-k_B[x\ln x+(1-x)\ln(1-x)]
$$

This was not a full cluster expansion.

It was a correction to a worse assumption: one configuration standing in for the alloy.

---

## What failed

Not proven:

```text
full configuration space exhausted
true synthesized configuration distribution known
all important local motifs sampled
unique atomistic structure at each composition
```

Experiment measures an averaged material response. It does not reveal the microscopic S/Se arrangement by itself.

---

## Claim boundary

Supported:

```text
configuration sampling improves interpretation of band-gap trends
composition alone is not enough
```

Not supported:

```text
actual synthesized configuration distribution
unique microscopic structure for each composition
```

---

## Status

Published in **ACS Applied Optical Materials**, 2024.

**Claim level:** configuration sampling improved band-gap interpretation; synthesized configuration distribution remained unresolved.

**Related notes:**  
[Averaging destroys information irreversibly](/notes/averaging/)

**Reading ledger:**  
[Configuration sampling](/reading-ledger/#config-sampling)  
[DFT — PBE](/reading-ledger/#dft-pbe)  
[DFT — hybrid functionals](/reading-ledger/#dft-hse06)

**Reference:**  
Ji, S.; Ahn, H.-Y.; Dreger, M.; **Sharma, A.**; Je, M.; Cho, S.-H.; Choi, H. *Mixing Anions in Metal Chalcogenides for Effective Band Gap Engineering*. *ACS Applied Optical Materials* **2024**, 2, 1559–1565.

[Back to work](/work/)