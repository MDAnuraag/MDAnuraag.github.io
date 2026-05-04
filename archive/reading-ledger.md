---
layout: page
title: Reading Ledger
permalink: /reading-ledger/
---

This is a working ledger of methods I have used or had to interpret.

It is not a literature review. It is a memory aid for method limits: what each method constrains, what it cannot determine, and where I have seen interpretation break down.

The entries are written from use, not authority.

**Last updated:** May 2026  
**Scope:** undergraduate research projects from 2024–2026, plus one semiconductor metrology internship

---

## Quick reference

Filter by domain or click a method to jump to the full entry.

<div style="margin: 1.5rem 0;">
  <div style="margin-bottom: 0.75rem;">
    <button onclick="filterLedger('all')" class="ledger-filter active" data-filter="all">All</button>
    <button onclick="filterLedger('computational')" class="ledger-filter" data-filter="computational">Computational</button>
    <button onclick="filterLedger('experimental')" class="ledger-filter" data-filter="experimental">Experimental</button>
    <button onclick="filterLedger('inverse')" class="ledger-filter" data-filter="inverse">Inverse / statistical</button>
    <button onclick="filterLedger('simulation')" class="ledger-filter" data-filter="simulation">Simulation</button>
  </div>

  <table id="ledger-table" style="width:100%; border-collapse: collapse; font-size: 0.9rem;">
    <thead>
      <tr style="border-bottom: 1px solid #ddd; text-align: left;">
        <th style="padding: 6px 10px; font-weight: 500;">Method</th>
        <th style="padding: 6px 10px; font-weight: 500;">Main limit</th>
        <th style="padding: 6px 10px; font-weight: 500;">Used in</th>
      </tr>
    </thead>
    <tbody>
      <tr data-domain="computational">
        <td style="padding: 6px 10px;"><a href="#dft-pbe">DFT — PBE</a></td>
        <td style="padding: 6px 10px;">absolute gaps, defect levels, self-interaction error</td>
        <td style="padding: 6px 10px;">alloy sampling, g-C₃N₄, AlN</td>
      </tr>
      <tr data-domain="computational">
        <td style="padding: 6px 10px;"><a href="#dft-hse06">DFT — hybrid functionals</a></td>
        <td style="padding: 6px 10px;">cost, finite-size limits, missing excitons</td>
        <td style="padding: 6px 10px;">g-C₃N₄, AlN planning</td>
      </tr>
      <tr data-domain="computational">
        <td style="padding: 6px 10px;"><a href="#optics-from-dft">Optical response from DFT</a></td>
        <td style="padding: 6px 10px;">independent-particle spectra are not structural fingerprints</td>
        <td style="padding: 6px 10px;">g-C₃N₄, AlN</td>
      </tr>
      <tr data-domain="computational">
        <td style="padding: 6px 10px;"><a href="#config-sampling">Configuration sampling</a></td>
        <td style="padding: 6px 10px;">finite sampling of large configuration spaces</td>
        <td style="padding: 6px 10px;">alloy sampling, g-C₃N₄</td>
      </tr>
      <tr data-domain="experimental">
        <td style="padding: 6px 10px;"><a href="#uv-vis">UV–Vis spectroscopy</a></td>
        <td style="padding: 6px 10px;">depth averaging, scattering/absorption ambiguity</td>
        <td style="padding: 6px 10px;">AlN</td>
      </tr>
      <tr data-domain="experimental">
        <td style="padding: 6px 10px;"><a href="#xrd">XRD</a></td>
        <td style="padding: 6px 10px;">absence of peaks is not full structural knowledge</td>
        <td style="padding: 6px 10px;">AlN</td>
      </tr>
      <tr data-domain="experimental">
        <td style="padding: 6px 10px;"><a href="#afm">AFM</a></td>
        <td style="padding: 6px 10px;">surface-only measurement, tip convolution, sampling bias</td>
        <td style="padding: 6px 10px;">AlN</td>
      </tr>
      <tr data-domain="inverse">
        <td style="padding: 6px 10px;"><a href="#rcwa">RCWA</a></td>
        <td style="padding: 6px 10px;">inverse non-uniqueness despite accurate forward modeling</td>
        <td style="padding: 6px 10px;">inverse RCWA metrology</td>
      </tr>
      <tr data-domain="inverse">
        <td style="padding: 6px 10px;"><a href="#dispersion">Dispersion models</a></td>
        <td style="padding: 6px 10px;">effective parameters can absorb modeling error</td>
        <td style="padding: 6px 10px;">inverse RCWA metrology</td>
      </tr>
      <tr data-domain="inverse">
        <td style="padding: 6px 10px;"><a href="#identifiability">Identifiability</a></td>
        <td style="padding: 6px 10px;">fit quality does not imply parameter uniqueness</td>
        <td style="padding: 6px 10px;">inverse RCWA, port metasurface</td>
      </tr>
      <tr data-domain="inverse">
        <td style="padding: 6px 10px;"><a href="#inverse-problems">Regularized inverse problems</a></td>
        <td style="padding: 6px 10px;">regularization stabilizes estimates but does not create information</td>
        <td style="padding: 6px 10px;">inverse RCWA, port metasurface</td>
      </tr>
      <tr data-domain="inverse">
        <td style="padding: 6px 10px;"><a href="#sensing-matrices">Sensing matrices</a></td>
        <td style="padding: 6px 10px;">column similarity creates ambiguity between hidden states</td>
        <td style="padding: 6px 10px;">port metasurface</td>
      </tr>
      <tr data-domain="simulation">
        <td style="padding: 6px 10px;"><a href="#em-sim">EM simulation</a></td>
        <td style="padding: 6px 10px;">single-scenario results do not prove deployment behavior</td>
        <td style="padding: 6px 10px;">port metasurface</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
.ledger-filter {
  margin-right: 6px;
  margin-bottom: 6px;
  padding: 4px 12px;
  font-size: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 3px;
  background: transparent;
  cursor: pointer;
}
.ledger-filter.active {
  background: #111;
  color: #fff;
  border-color: #111;
}
#ledger-table tr[data-domain] {
  transition: opacity 0.15s;
}
#ledger-table tr[data-domain].hidden {
  display: none;
}
#ledger-table tbody tr:hover {
  background: #f8f8f8;
}
#ledger-table td,
#ledger-table th {
  border-bottom: 1px solid #f0f0f0;
}
</style>

<script>
function filterLedger(domain) {
  document.querySelectorAll('.ledger-filter').forEach(b => b.classList.remove('active'));
  event.target.classList.add('active');

  document.querySelectorAll('#ledger-table tr[data-domain]').forEach(row => {
    if (domain === 'all' || row.dataset.domain === domain) {
      row.classList.remove('hidden');
    } else {
      row.classList.add('hidden');
    }
  });
}
</script>

---

## DFT — PBE {#dft-pbe}

**Reference:** Perdew, Burke, and Ernzerhof, “Generalized Gradient Approximation Made Simple,” *Physical Review Letters* **77**, 3865–3868 (1996).

### What it constrains well

PBE is useful for structural relaxation, qualitative bonding trends, relative energy comparisons within a similar structure class, and first-pass electronic-structure interpretation.

It is strongest when the claim is comparative:

> structure A is lower in energy than nearby structure B under the same approximation.

### What it does not determine

PBE does not reliably determine absolute band gaps, quantitative defect ionization energies, or precise optical transition energies.

For my projects, the main risk was treating a PBE spectrum or gap as quantitatively predictive when it was only trend-level evidence.

### Failure mode I need to remember

A PBE result can look physically reasonable because errors cancel.

That does not mean the structural model is correct. Agreement with experiment can come from the functional error, structural error, and missing physics compensating each other.

### Trust more when

- convergence is checked;
- structures are compared within the same model class;
- the claim is qualitative or relative;
- a higher-level method or experiment calibrates the trend.

### Trust less when

- absolute gaps are the main claim;
- defect levels decide the mechanism;
- one structure is treated as representative of disorder;
- small energy differences are overinterpreted.

### Used in

- [Alloy Configuration Sampling](/case-studies/alloy-sampling/)
- [g-C₃N₄ Optical Transitions](/case-studies/gcn-optical-transitions/)
- [AlN Electroabsorption](/case-studies/aln-electroabsorption/)

---

## DFT — hybrid functionals {#dft-hse06}

**Reference:** Heyd, Scuseria, and Ernzerhof, “Hybrid functionals based on a screened Coulomb potential,” *Journal of Chemical Physics* **118**, 8207–8215 (2003).

This entry mostly refers to HSE-type screened hybrid functionals.

### What it constrains well

Hybrid functionals often improve band gaps and localized-state descriptions relative to semi-local functionals.

They are useful when PBE gives the right qualitative mechanism but cannot support quantitative energy placement.

### What it does not determine

A better functional does not fix a wrong structural model.

Hybrid calculations can improve electronic energies while still being applied to a structure that is not representative of the material.

They also do not automatically include excitonic effects, vibronic broadening, or thermal disorder.

### Failure mode I need to remember

Higher-level theory can make a weak structural assumption look more precise than it is.

If dopant site, defect identity, or configuration distribution is unknown, HSE may improve the number but not the inference.

### Trust more when

- the structural model is independently constrained;
- only a representative subset is upgraded from PBE;
- the comparison is made within a consistent model class;
- the result is used to calibrate trends rather than replace uncertainty.

### Trust less when

- computational cost forces very small cells;
- disorder is important but unsampled;
- optical peak assignment requires excitonic physics;
- one HSE calculation is used to validate a full mechanism.

### Used in

- [g-C₃N₄ Optical Transitions](/case-studies/gcn-optical-transitions/)
- [AlN Electroabsorption](/case-studies/aln-electroabsorption/) — planned or interpretive reference

---

## Optical response from DFT {#optics-from-dft}

**Reference:** Gajdoš et al., “Linear optical properties in the projector-augmented wave methodology,” *Physical Review B* **73**, 045112 (2006).

### What it constrains well

DFT optical response calculations are useful for mechanism-level questions:

- which orbitals contribute near the band edge;
- whether symmetry breaking activates transitions;
- whether oscillator strength redistributes after doping or distortion;
- how optical trends change across related structures.

For my g-C$_3$N$_4$ project, the important quantity was not only eigenvalue spacing but transition strength.

### What it does not determine

A computed optical spectrum does not uniquely identify the structure that produced it.

Independent-particle spectra also omit electron-hole interaction unless a higher-level method such as GW–BSE is used.

### Failure mode I need to remember

Peak agreement is seductive.

A calculated peak lining up with an experimental feature can make a structural assignment feel confirmed. But if many structures could give similar peaks, the spectrum is only a constraint.

### Trust more when

- the structural model space is constrained;
- several plausible structures are compared;
- the claim is about a robust mechanism;
- oscillator strengths and selection rules are analyzed, not just band gaps.

### Trust less when

- one spectrum is treated as “the material”;
- peak positions are interpreted quantitatively from PBE;
- disorder or multiple motifs are expected but not sampled;
- optical agreement is used as structural proof.

### Used in

- [g-C₃N₄ Optical Transitions](/case-studies/gcn-optical-transitions/)
- [AlN Electroabsorption](/case-studies/aln-electroabsorption/)

---

## Configuration sampling {#config-sampling}

**Reference:** general cluster-expansion, special-quasirandom-structure, Monte Carlo, and ensemble-sampling literature.

### What it constrains well

Configuration sampling helps when composition does not uniquely determine structure.

It can show whether a property is stable across plausible configurations or whether local arrangement matters.

In the alloy project, sampling showed that band gaps at fixed composition could vary enough that a single structure was not representative.

### What it does not determine

A finite sample does not prove that the full configuration space has been covered.

It also does not prove that the synthesized material follows the assumed equilibrium distribution.

### Failure mode I need to remember

A sample size that feels large computationally can still be tiny statistically.

Fifty structures may be a lot of DFT calculations, but it is not a proof of ensemble convergence if the true configuration space is enormous.

### Trust more when

- convergence with sample count is tested;
- the sampling strategy matches the target property;
- rare motifs are actively searched for;
- synthesis conditions justify the statistical ensemble;
- experimental probes constrain local order.

### Trust less when

- a single configuration is used for a disordered material;
- equilibrium weights are assumed for non-equilibrium synthesis;
- sampling ignores defect motifs that could dominate optical response;
- supercells are too small to represent relevant disorder.

### Used in

- [Alloy Configuration Sampling](/case-studies/alloy-sampling/)
- [g-C₃N₄ Optical Transitions](/case-studies/gcn-optical-transitions/)

---

## UV–Vis spectroscopy {#uv-vis}

**Reference:** standard UV–visible transmission/reflection spectroscopy and Beer–Lambert-style absorption analysis.

### What it constrains well

UV–Vis spectroscopy constrains spectral changes under controlled perturbations.

It is useful for identifying absorption onsets, relative changes under bias, spectral localization, and reproducible modulation.

In the AlN project, UV–Vis showed that the field-dependent response was localized in the UV rather than broadband.

### What it does not determine

UV–Vis transmission is usually an averaged measurement.

It does not directly identify whether absorption is surface-localized, bulk-distributed, or interface-dominated. It also does not always separate absorption from scattering unless the geometry and sample are controlled.

### Failure mode I need to remember

A depth-averaged optical response can be mistaken for a depth-resolved mechanism.

Seeing field-dependent absorption does not tell me where inside the film the responsible states are located.

### Trust more when

- changes are reproducible over cycles;
- baseline drift is controlled;
- scattering is negligible or separately constrained;
- complementary probes rule out structural changes;
- the claim is spectral and bounded.

### Trust less when

- a single spectrum is used to identify a defect species;
- scattering and absorption are not separated;
- thickness variation is not accounted for;
- depth localization is inferred from a depth-averaged signal.

### Used in

- [AlN Electroabsorption](/case-studies/aln-electroabsorption/)

---

## XRD {#xrd}

**Reference:** standard X-ray diffraction for crystalline phase identification and structural analysis.

### What it constrains well

XRD constrains the presence of crystalline phases above the detection limit.

It can support statements about crystallinity, phase formation, orientation, and lattice spacing when the sample gives sufficient diffraction signal.

In the AlN project, XRD was useful because the absence of clear crystalline peaks constrained crystalline electro-optic explanations.

### What it does not determine

No peaks does not mean full structural knowledge.

It can mean amorphous material, nanocrystalline domains below detection, insufficient film volume, substrate masking, or poor signal-to-noise.

### Failure mode I need to remember

“XRD amorphous” is not a microscopic structure.

It is an absence or weakness of long-range crystalline diffraction under the measurement conditions.

### Trust more when

- thin-film geometry is appropriate;
- substrate peaks are accounted for;
- detection limits are stated;
- multiple peaks support phase assignment;
- XRD is paired with other probes.

### Trust less when

- one weak peak is used for phase identification;
- absence of peaks is overinterpreted;
- thin films are measured without considering substrate signal;
- amorphous and nanocrystalline possibilities are not separated.

### Used in

- [AlN Electroabsorption](/case-studies/aln-electroabsorption/)

---

## AFM {#afm}

**Reference:** standard atomic-force microscopy for surface topography and roughness.

### What it constrains well

AFM constrains surface topography.

It is useful for roughness estimates, morphology comparison, and checking whether surface structure plausibly explains optical changes.

In the AlN project, AFM helped constrain whether roughness-driven optical effects were likely.

### What it does not determine

AFM does not measure the bulk.

It also does not directly identify composition, defect states, or buried interfaces. Tip convolution and scan-area selection can distort what the image appears to show.

### Failure mode I need to remember

A clean AFM image can make the whole film feel well characterized.

It is not. It is a surface measurement over selected regions.

### Trust more when

- multiple scan areas are measured;
- tip condition is checked;
- roughness is reported with uncertainty;
- scan size matches the relevant length scale;
- AFM is used only for surface claims.

### Trust less when

- one small scan is treated as representative;
- steep features approach tip limits;
- surface roughness is used to infer bulk structure;
- morphology is used to identify optical mechanisms directly.

### Used in

- [AlN Electroabsorption](/case-studies/aln-electroabsorption/)

---

## RCWA {#rcwa}

**Reference:** Moharam, Grann, Pommet, and Gaylord, stable and efficient RCWA formulations for periodic gratings, *Journal of the Optical Society of America A* **12** (1995).

### What it constrains well

RCWA is strong as a forward solver for periodic optical structures.

Given a geometry, material model, wavelength, angle, and polarization, it can compute diffraction and reflectance accurately when numerically converged.

### What it does not determine

The inverse problem is not automatically unique.

Multiple geometries or material parameters can produce nearly identical far-field spectra.

### Failure mode I need to remember

An accurate forward solver can produce a non-identifiable inverse problem.

In the KLA project, trench depth was recoverable under process bounds, but secondary geometry parameters were degenerate.

That was not a failure of RCWA as a forward method. It was a limit of the measurement configuration.

### Trust more when

- Fourier-order convergence is checked;
- material dispersion is independently constrained;
- periodicity assumptions match the sample;
- the claim is a forward comparison;
- inverse claims include covariance or multi-start analysis.

### Trust less when

- best-fit geometry is reported without degeneracy analysis;
- effective material parameters absorb geometry error;
- real roughness or line-edge variation violates the periodic model;
- residual alone is treated as proof of uniqueness.

### Used in

- [Inverse RCWA Metrology](/case-studies/inverse-rcwa/)

---

## Dispersion models {#dispersion}

**Reference:** Drude, Lorentz, Sellmeier, Cauchy, Tauc-Lorentz, and related empirical or semi-physical optical models.

### What they constrain well

Dispersion models provide compact functions for refractive index and extinction versus wavelength.

They are useful for interpolation, smooth forward modeling, and reducing raw optical data to a small parameter set.

### What they do not determine

A dispersion model does not automatically reveal the physical mechanism.

Different functional forms can fit the same wavelength range while implying different extrapolations or parameter interpretations.

### Failure mode I need to remember

Effective parameters can absorb model error.

A fitted dispersion parameter may compensate for roughness, thickness error, geometry mismatch, or unmodeled scattering. Interpreting that parameter physically can be wrong.

### Trust more when

- the fitted range matches the use range;
- model choice is physically motivated;
- uncertainty is propagated;
- competing models are compared;
- parameters are not overinterpreted.

### Trust less when

- parameters are treated as microscopic truth;
- extrapolation is used outside the fitted range;
- extra parameters are added only to reduce residual;
- multiple models fit equally well.

### Used in

- [Inverse RCWA Metrology](/case-studies/inverse-rcwa/)

---

## Identifiability and uncertainty {#identifiability}

**Reference:** inverse-problem theory and practical identifiability literature, including Tarantola-style model/data-space framing.

### What it constrains well

Identifiability analysis asks which quantities the data can actually resolve.

It separates three different claims:

1. the model fits;
2. the measurement is sensitive;
3. the parameter is uniquely or stably recoverable.

Only the third is identifiability.

### What it does not determine

Identifiability analysis is still conditional on the model class.

A parameter can be identifiable inside the chosen model and still be wrong if the model class is wrong.

### Failure mode I need to remember

Good fits and local sensitivity can both coexist with non-identifiability.

The right question is not:

> does the spectrum change when parameter X changes?

The right question is:

> can parameter X be separated from all other allowed changes?

### Trust more when

- multi-start optimization converges consistently;
- covariance structure is reported;
- posterior samples are not multimodal;
- priors are explicit;
- non-identifiable parameters are named.

### Trust less when

- only one optimization run is shown;
- uncertainty bars ignore covariance;
- sensitivity is shown but parameter correlation is not;
- priors silently determine the result.

### Used in

- [Inverse RCWA Metrology](/case-studies/inverse-rcwa/)
- [Port Metasurface](/case-studies/port-metasurface/)

---

## Regularized inverse problems {#inverse-problems}

**Reference:** standard inverse-problem methods: least squares, Tikhonov regularization, non-negative least squares, sparse recovery, robust loss functions.

### What they constrain well

Regularized inverse methods stabilize reconstruction when the direct inverse is noisy or ill-conditioned.

They are useful when the forward model is known and the hidden state has structure:

- small norm;
- non-negativity;
- sparsity;
- simplex constraint;
- smoothness;
- robustness to outliers.

### What they do not determine

Regularization does not create information.

It selects among possible solutions using assumptions. If the measurement cannot distinguish two states, the regularizer may choose one, but that choice is not automatically physical truth.

### Failure mode I need to remember

A prettier reconstruction can be a stronger prior, not stronger evidence.

In the port metasurface project, Tikhonov worked because the system was moderately conditioned. More exotic solvers were not automatically justified.

### Trust more when

- the prior matches the physical problem;
- solver comparisons use fixed tuning rules;
- reconstruction is evaluated on held-out or perturbed cases;
- leakage and discrimination are reported, not only visual sharpness.

### Trust less when

- solver complexity substitutes for measurement diversity;
- regularization parameters are tuned until the answer looks right;
- sparsity is assumed without physical reason;
- reconstruction success is judged only by plots.

### Used in

- [Port Metasurface](/case-studies/port-metasurface/)
- [Inverse RCWA Metrology](/case-studies/inverse-rcwa/)

---

## Sensing matrices {#sensing-matrices}

**Reference:** compressed sensing, linear inverse problems, and operator analysis.

### What they constrain well

A sensing matrix makes the inverse problem explicit:

$$
\mathbf{y} = A\mathbf{x} + \boldsymbol{\varepsilon}.
$$

The matrix tells me how hidden states map into observations.

Useful diagnostics include:

- singular-value spectrum;
- condition number;
- column coherence;
- Gram matrix;
- leakage matrix;
- discrimination matrix;
- noise robustness.

### What they do not determine

A sensing matrix only represents the modeled measurement system.

If the forward model is wrong, if the discretization is too coarse, or if the real environment differs, matrix diagnostics can look clean while deployment fails.

### Failure mode I need to remember

A system can be full-rank and still practically ambiguous.

If two columns are very similar, their corresponding hidden states are hard to distinguish even if the matrix has no exact null space.

### Trust more when

- the matrix is built from validated forward simulations or measurements;
- columns correspond to physically meaningful states;
- conditioning and coherence are interpreted together;
- synthetic tests are separated from deployment claims;
- perturbations are tested.

### Trust less when

- full rank is treated as sufficient;
- condition number alone is treated as the whole story;
- one geometry is overoptimized;
- model-generated data is used as proof of real-world recovery.

### Used in

- [Port Metasurface](/case-studies/port-metasurface/)

---

## EM simulation in deployment settings {#em-sim}

**Reference:** electromagnetic simulation with tools such as CST, HFSS, COMSOL, FDTD, FEM, and related solvers.

### What it constrains well

EM simulation constrains forward behavior under specified geometry, materials, boundary conditions, excitation, and frequency.

It is useful for:

- comparing designs under controlled assumptions;
- identifying sensitivity to geometry;
- generating forward operators;
- testing whether a proposed mechanism is plausible.

### What it does not determine

A simulation does not prove deployment performance.

Deployment adds uncontrolled variables: geometry changes, material uncertainty, blockage, aging, fabrication tolerance, calibration error, and environmental variation.

### Failure mode I need to remember

A single visually convincing simulation can be overread.

In the port metasurface project, full-port simulations were too dependent on container geometry assumptions. That made broad coverage claims weak. The project became stronger after narrowing to operator conditioning in a controlled geometry.

### Trust more when

- simulation is validated against measurement;
- geometry assumptions are varied;
- results are reported over an ensemble of scenarios;
- hardware nonidealities are included;
- deployment metrics are separated from model metrics.

### Trust less when

- one scenario is treated as representative;
- ideal PEC or ideal metasurface behavior is assumed without caveat;
- performance is optimized for one geometry;
- field improvement is treated as service-level improvement.

### Used in

- [Port Metasurface](/case-studies/port-metasurface/)

---

## How this ledger connects to the site

The ledger supports three site layers:

- [/method/](/method/) — the general framework.
- [/case-studies/](/case-studies/) — projects where the methods were applied.
- [/notes/](/notes/) — specific inference errors that recur across projects.

The entries here are intentionally bounded. They say what I learned from using these methods, not everything the methods can do.

---

## Current gaps

Methods I may add later if they become central:

- ellipsometry;
- impedance spectroscopy;
- EXAFS / XANES;
- GW–BSE;
- cluster expansion;
- Monte Carlo sampling;
- Bayesian posterior sampling;
- adjoint optimization;
- experimental uncertainty propagation.

I am not adding them yet unless they become part of a project rather than just something I know exists.

---

[Back to top](#quick-reference)