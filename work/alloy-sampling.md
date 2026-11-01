---
layout: page
title: Alloy Configuration Sampling
permalink: /work/alloy-sampling/
redirect_from:
  - /case-studies/alloy-sampling/
  - /constraints/alloy-sampling/
---

## Overview

Band-gap trend versus composition in Cu$_2$Ge(S$_{1-x}$Se$_x$)$_3$, with the S/Se arrangement treated as a distribution of configurations.

---

## Setup

**Material:** Cu$_2$Ge(S$_{1-x}$Se$_x$)$_3$  
**Variable:** S/Se composition  
**Hidden variable:** anion configuration  
**Signal:** computed / measured band-gap trend

Map from composition to band gap:

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

## Results

At fixed $x$, different S/Se arrangements produced different band gaps. A composition therefore corresponds to a distribution of plausible band gaps over the sampled configurations.

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

This replaces the single-configuration assumption with sampled configurations, short of a full cluster expansion.

---

## Open questions

```text
how much of the configuration space was covered
the synthesized configuration distribution
whether all important local motifs were sampled
the atomistic structure at each composition
```

Experiment measures an averaged material response, so the microscopic S/Se arrangement needs a separate measurement.

---

## Summary

Established: configuration sampling improves the interpretation of band-gap trends, and a composition carries a spread of band gaps.

Open: the actual synthesized configuration distribution and the microscopic structure at each composition.

---

## Status

Published in **ACS Applied Optical Materials**, 2024.

**Reading ledger:**  
[Configuration sampling](/reading-ledger/#config-sampling)  
[DFT — PBE](/reading-ledger/#dft-pbe)  
[DFT — hybrid functionals](/reading-ledger/#dft-hse06)

**Reference:**  
Ji, S.; Ahn, H.-Y.; Dreger, M.; **Sharma, A.**; Je, M.; Cho, S.-H.; Choi, H. *Mixing Anions in Metal Chalcogenides for Effective Band Gap Engineering*. *ACS Applied Optical Materials* **2024**, 2, 1559–1565.

[Back to work](/work/)
