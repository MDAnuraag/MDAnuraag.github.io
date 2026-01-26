---
layout: page
title: "Constraints: alloy configuration sampling"
permalink: /constraints/alloy-sampling/
---

**Full case study:** **[/case-studies/alloy-sampling/](/case-studies/alloy-sampling/)**

## Observable

Energies and electronic properties computed for a finite set of alloy configurations
(local arrangements, supercells, defect placements),
used to screen plausible structures and look for trends.

## Claim under audit

Configuration sampling can surface mechanisms and candidates,
but statements about *the alloy* are limited by how little of configuration space is actually seen.

## Load-bearing constraints

### Axiomatic

- Composition alone discards information; properties depend on local atomic arrangement.
- Thermodynamic filters restrict the space but do not select a unique microstate.

### Measurement

- Most experiments average over many configurations.
- Without local probes, any specific configuration assignment is tentative.

### Fabrication / process

- Growth can lock in non-equilibrium configurations absent from equilibrium sampling.
- Defects and impurities vary across samples and can dominate observed properties.

### Statistical

- Configuration spaces grow combinatorially.
- Finite samples do not guarantee coverage of electronically or optically important motifs.

### Computational

- Supercell size, k-point density, and functional choice introduce systematic bias.
- Comparisons across configurations require strict consistency.

## Primary limiting factor

**Statistical coverage of configuration space.**  
Sampling is too sparse to support claims of completeness or uniqueness.
Results only hold within the sampled model class.

## What this rules out

- Treating a single configuration as representative without ruling out alternatives.
- Reporting target properties without uncertainty from sampling, finite size, or functional choice.

## What remains non-identifiable

- The true configuration distribution under specific growth conditions.
- Whether observed features originate from composition, local order, defects, or impurities.

## Partial disambiguation

- More structured sampling (cluster expansion, active learning, surrogate models).
- Experimental constraints on local order where available.
- Explicit uncertainty reporting across functionals and cell sizes.

## Methods referenced

- [Configuration sampling](/reading-ledger/#config-sampling)
- [DFT (PBE)](/reading-ledger/#dft-pbe)
- [DFT (hybrid functionals)](/reading-ledger/#dft-hse06)

[Back to Constraints Index](/constraints/) | [Full Case Study](/case-studies/alloy-sampling/)
