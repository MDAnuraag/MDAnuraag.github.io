---
layout: page
title: Reading Ledger
permalink: /reading-ledger/
---

# Reading Ledger

This tracks what I've learned about method capabilities and failure modes through direct use.

Each entry documents what a method constrains well, what it can't distinguish, and when I've seen it fail (or almost fail) in my own work.

**Not exhaustive**. Not authoritative. Just what I've encountered so far across 5 undergraduate projects and 1 industry internship.

---

## Contents

- [DFT (PBE)](#dft-pbe)
- [DFT (hybrid functionals)](#dft-hse06)
- [Optical response from electronic structure](#optics-from-dft)
- [RCWA](#rcwa)
- [XRD](#xrd)
- [UV–Vis spectroscopy](#uv-vis)
- [AFM](#afm)
- [Dispersion models](#dispersion)
- [Identifiability and uncertainty](#identifiability)
- [Configuration sampling](#config-sampling)
- [EM simulation in deployment settings](#em-sim)

**Last updated**: January 2026  
**My experience**: ~2 years computational materials science, 1 summer semiconductor metrology

---

## DFT (PBE) {#dft-pbe}

**Reference**: Perdew, Burke, Ernzerhof, *Phys. Rev. Lett.* **77**, 3865 (1996)

**Constrains well**:
- Relative energies of similar structures (<50 meV/atom when converged)
- Equilibrium geometries for covalent/ionic solids (~0.02 Å bond lengths)
- Qualitative orbital character and bonding trends

**Cannot distinguish**:
- Optical gaps from transport gaps (systematic 30-100% underestimation)
- Defect ionization energies (±0.5 eV uncertainty)
- Strongly vs. weakly correlated regimes (self-interaction error)

**Assumptions**:
- Ground-state density uniquely determines properties (Hohenberg-Kohn)
- Non-interacting quasiparticles in effective potential
- Semi-local exchange-correlation functional
- Born-Oppenheimer approximation (classical nuclei)

**Fails when**:
- Open-shell transition metals, stretched bonds (static correlation)
- van der Waals interactions dominate (unless dispersion-corrected)
- Predicting optical spectra without experimental calibration
- Energy differences <10 meV/atom used as definitive

**Trust when**:
- Comparing energies within same structure class
- Explicit convergence tests (k-points, cutoff, cell size, smearing)
- Cross-validated against experiment or higher-level methods for calibration

**Misleading when**:
- Band gap "agreement" within 0.5 eV claimed as validation (error cancellation)
- Single relaxed structure treated as representative under disorder
- Small energy differences used to rank mechanisms without uncertainty

**Used in**: [AlN electroabsorption](/constraints/aln-electroabsorption/), [g-C₃N₄ optical](/constraints/gcn-optical-transitions/), [Alloy sampling](/constraints/alloy-sampling/)

---

## DFT (hybrid functionals) {#dft-hse06}

**Reference**: Heyd, Scuseria, Ernzerhof, *J. Chem. Phys.* **118**, 8207 (2003)

**Constrains well**:
- Band gaps (typically within 0.2-0.5 eV of experiment for semiconductors)
- Band-edge placement relative to vacuum level
- Localized vs. delocalized state character in defect systems

**Cannot distinguish**:
- Excitonic effects (needs BSE or TDDFT)
- Correct gaps when structural model is wrong
- Optical vs. fundamental gaps (missing electron-hole interaction)

**Assumptions**:
- Screened exact exchange improves self-interaction error
- Mixing parameter (α = 0.25) and screening length (ω) are system-transferable
- Frozen-ion approximation (no vibronic coupling)

**Fails when**:
- Strong correlation remains (Mott insulators, f-electron systems)
- Computational cost forces small supercells (finite-size errors)
- Applied to systems where PBE structural prediction was already wrong

**Trust when**:
- Finite-size convergence demonstrated (supercell size, k-points)
- Structural model independently validated
- Calibrated against experiment for similar material class

**Misleading when**:
- Better numbers on wrong structure interpreted as improved physics
- Quantitative optical predictions made without excitonic corrections
- Computational cost prevents proper convergence testing

**Used in**: [g-C₃N₄ optical](/constraints/gcn-optical-transitions/), [AlN electroabsorption](/constraints/aln-electroabsorption/) (planned)

---

## Optical response from electronic structure {#optics-from-dft}

**Reference**: Gajdoš et al., *Phys. Rev. B* **73**, 045112 (2006) [for VASP implementation]

**Constrains well**:
- Qualitative trends: how symmetry breaking, doping, defects shift absorption onset
- Relative oscillator strength changes under perturbations
- Selection rule violations from symmetry breaking

**Cannot distinguish**:
- Specific peak assignments under structural disorder
- Contributions from different defect species with similar energetics
- Excitonic vs. single-particle transitions (independent-particle approximation)

**Assumptions**:
- Independent-particle transitions (no electron-hole interaction)
- Dipole approximation (long-wavelength limit)
- Frozen lattice (no vibronic coupling or thermal disorder)
- Structural model represents measured sample

**Fails when**:
- Excitonic effects dominate (requires BSE)
- Multiple structural motifs contribute to same spectral region
- Local-field effects are strong (needs full GW-BSE)
- Disorder averaging is significant but not sampled

**Trust when**:
- Structural model space tightly constrained by independent measurements
- Claims restricted to trends, not absolute peak positions
- Configuration sampling performed when disorder expected

**Misleading when**:
- Single-configuration spectrum treated as "the material's spectrum"
- Peak agreement used to validate structural model (circular reasoning)
- Effective parameters adjusted to match experiment without physical justification

**Used in**: [g-C₃N₄ optical](/constraints/gcn-optical-transitions/), [AlN electroabsorption](/constraints/aln-electroabsorption/) (defect level analysis)

---

## RCWA {#rcwa}

**Reference**: Moharam et al., *J. Opt. Soc. Am. A* **12**, 1068 (1995)

**Constrains well**:
- Forward spectral response of periodic structures (exact within numerical precision when converged)
- Sensitivity of reflectance/transmittance to geometric parameters
- Angle and polarization dependence for periodic media

**Cannot distinguish**:
- Multiple (geometry, index) pairs producing identical far-field spectra (inverse non-uniqueness)
- Material dispersion mechanisms (all effective models fit equally well)
- Sub-wavelength defects (spatial averaging over unit cell)

**Assumptions**:
- Perfect periodicity (Floquet-Bloch boundary conditions)
- Linear optical response (no saturation, no nonlinear effects)
- Local material response (no spatial dispersion)
- Layers laterally infinite (edge effects ignored)

**Fails when**:
- High aspect ratios without sufficient Fourier orders (need 50-100+)
- Plasmonic resonances near ε ≈ -1 (numerical instability)
- Real samples violate periodicity (roughness, line-edge roughness, thickness variation)
- Convergence not verified (under-resolved features mimic physical effects)

**Trust when**:
- Convergence explicitly tested (<1% change with added Fourier orders)
- Forward modeling with independently characterized materials
- Comparing relative trends (design A vs. B), not absolute parameter extraction

**Misleading when**:
- Inverse fitting without identifiability analysis (covariance, multi-start, posterior)
- Effective dispersion used to absorb modeling error, then interpreted physically
- Single best-fit geometry reported without uncertainty or degeneracy analysis

**Used in**: [Inverse RCWA metrology](/constraints/inverse-rcwa/)

---

## XRD {#xrd}

**Reference**: Standard X-ray diffraction technique

**Constrains well**:
- Presence/absence of crystalline phases (above detection limit)
- Lattice parameters and preferred orientation (well-crystallized samples)
- Phase identification via peak indexing against databases

**Cannot distinguish**:
- Amorphous structure details beyond "no crystalline peaks"
- Thin film crystallinity when substrate peaks dominate
- Nanocrystalline (<3-5 nm domains) from truly amorphous

**Assumptions**:
- Sufficient scattering volume and crystallite size
- Bragg condition satisfied (constructive interference from periodic lattices)
- Known reference phases for identification
- Negligible texture (or corrected for)

**Fails when**:
- Film thickness <50 nm without grazing-incidence geometry
- Low atomic number contrast (e.g., carbon-based materials, light-element compounds)
- Mixed amorphous/nanocrystalline regimes without complementary probes
- Substrate peaks misidentified as film phases

**Trust when**:
- Appropriate scan geometry for thin films (GIXRD, not symmetric θ-2θ)
- Detection limits explicitly stated (integration time, background level, signal-to-noise)
- Multiple reflections confirm phase assignment (not single-peak identification)

**Misleading when**:
- "No peaks observed = amorphous" without reporting detection limits
- Quantitative crystallinity claims without Rietveld refinement or calibrated standards
- Thin film measurements without accounting for substrate contribution

**Used in**: [AlN electroabsorption](/constraints/aln-electroabsorption/)

---

## UV–Vis spectroscopy {#uv-vis}

**Reference**: Standard optical transmission/reflection spectroscopy

**Constrains well**:
- Relative spectral changes under controlled perturbations (bias, temperature, processing)
- Absorption onset identification (when background stable)
- Spectral weight redistribution under systematic variations

**Cannot distinguish**:
- Depth-localized absorption mechanisms (averages over penetration depth)
- Surface vs. bulk contributions without angle-resolved measurements
- Absorption from scattering when both present

**Assumptions**:
- Beer-Lambert law applies (linear regime, uniform absorption)
- Baseline drift and instrument response stable
- Sample homogeneity over beam spot size
- Reflected/transmitted intensity accurately measured

**Fails when**:
- Scattering dominates (Mie scattering, surface roughness comparable to λ)
- Strong baseline drift or calibration errors mask real changes
- Film thickness variations across sample produce effective spectral broadening
- Absorption length << film thickness (saturation effects)

**Trust when**:
- Reproducibility demonstrated across multiple samples/cycles
- Baseline and instrument response carefully characterized
- Complementary structural probes verify no morphology changes
- Absorption changes >3× measurement noise

**Misleading when**:
- Spectral agreement claimed without uncertainty quantification
- Single measurement treated as definitive without reproducibility check
- Scattering-driven changes misinterpreted as absorption changes
- Depth-averaged signal used to infer depth-localized mechanism

**Used in**: [AlN electroabsorption](/constraints/aln-electroabsorption/)

---

## AFM {#afm}

**Reference**: Standard atomic force microscopy

**Constrains well**:
- Surface topography at nm-scale vertical resolution
- RMS roughness statistics (when sampling representative)
- Relative morphology changes across processing conditions

**Cannot distinguish**:
- Bulk vs. surface-localized features (surface-only probe)
- Material composition (purely topographic)
- Whether imaged region represents full sample

**Assumptions**:
- Tip-sample interaction well-modeled (contact, tapping, non-contact modes)
- Scan parameters (speed, setpoint, gain) properly optimized
- Surface features within tip bandwidth and z-range

**Fails when**:
- Tip convolution for high-aspect-ratio features (>3:1 typically)
- Limited scan area misses dominant length scales
- Surface contamination or adsorbates alter apparent topography
- Soft samples deform under tip force

**Trust when**:
- Multiple scan regions confirm representativity
- Roughness reported with uncertainty across regions
- Tip condition verified (sharp, not damaged or contaminated)
- Scan parameters stable and appropriate for sample

**Misleading when**:
- Single small-area scan claimed as representative
- Tip artifacts misidentified as sample features
- Surface roughness extrapolated to bulk structure claims
- Quantitative height measurements without calibration

**Used in**: [AlN electroabsorption](/constraints/aln-electroabsorption/)

---

## Dispersion models {#dispersion}

**Reference**: Various (Drude, Lorentz, Sellmeier, Tauc-Lorentz, Cauchy, etc.)

**Constrains well**:
- Compact parametric representation for interpolation within measured range
- Smooth refractive index/extinction vs. wavelength for forward modeling

**Cannot distinguish**:
- Physical mechanism uniquely (multiple model forms fit identically)
- Extrapolation behavior outside fitted range
- Whether parameters have physical meaning vs. being effective

**Assumptions**:
- Model functional form captures relevant physics
- Parameters are wavelength/angle-independent (within model domain)
- Kramers-Kronig consistency enforced (or assumed negligible violation)

**Fails when**:
- Over-parameterization hides non-uniqueness (more parameters → better fit, worse identifiability)
- Extrapolated beyond measurement range (unphysical behavior common)
- Model selection based only on χ² without complexity penalty

**Trust when**:
- Model comparison performed (AIC, BIC, or cross-validation)
- Parameters physically motivated, not just free fits
- Uncertainty propagated from measurement noise to model parameters
- Used only for interpolation within measured range

**Misleading when**:
- Best-fit parameters interpreted physically without justification
- Multiple models fit equally well but claimed to reveal different physics
- Dispersion model absorbs systematic errors (geometry, roughness, etc.)

**Used in**: [Inverse RCWA metrology](/constraints/inverse-rcwa/)

---

## Identifiability and uncertainty {#identifiability}

**Reference**: Sethian & Wiegmann (concept); Tarantola (inverse problems); see also "Practical identifiability" literature

**Constrains well**:
- Which parameters data can actually resolve
- Sensitivity and covariance structure
- Whether multiple solutions exist with similar fit quality

**Cannot distinguish**:
- Truth of model class itself (only parameters within chosen model)
- Out-of-sample generalization without new data

**Assumptions**:
- Forward model adequately represents system
- Measurement noise characterized correctly
- Parameter space explored sufficiently (local vs. global minima)

**Fails when**:
- Only single optimization run performed (misses multimodality)
- Covariance ignored (independent-parameter assumption breaks)
- Sensitivity calculated at single point (not representative of parameter space)

**Trust when**:
- Multi-start optimization or posterior sampling shows convergence
- Parameter sensitivity and covariance explicitly reported
- Failure cases documented (which parameters are non-identifiable)
- Priors stated explicitly and sensitivity to priors tested

**Misleading when**:
- Good fit quality equated with unique parameter recovery
- Uncertainty bars from fit statistics only (ignore model error)
- Identifiable parameters claimed without covariance analysis

**Used in**: [Inverse RCWA metrology](/constraints/inverse-rcwa/), [Port metasurface](/constraints/port-metasurface/)

---

## Configuration sampling {#config-sampling}

**Reference**: Various (special quasirandom structures, cluster expansion, Monte Carlo)

**Constrains well**:
- Representative trends within sampled configuration space
- Ensemble-averaged properties when sampling weighted by energy
- Sensitivity to structural motifs within model class

**Cannot distinguish**:
- Rare but important configurations (if not sampled)
- True equilibrium distribution without thermodynamic integration
- Whether sampled space captures experimental reality

**Assumptions**:
- Sampled configurations cover relevant configuration space
- Supercell size sufficient (no strong finite-size effects)
- Energy landscape adequately explored (no major metastable states missed)
- Boltzmann weighting appropriate (thermal equilibrium assumed)

**Fails when**:
- Configuration space grows faster than sampling can cover (combinatorial explosion)
- Rare motifs with high impact are systematically missed
- Kinetic barriers trap system in non-equilibrium configurations
- Supercell too small for target property (artificial periodicity artifacts)

**Trust when**:
- Sampling strategy justified by target property and system
- Convergence with sample size demonstrated
- Uncertainty quantified across sampled configurations
- Results compared to experimental distributions where available

**Misleading when**:
- Single configuration treated as ensemble representative
- Sample size inadequate for statistical claims (e.g., <10 for variance estimates)
- Equilibrium sampling applied to non-equilibrium synthesis

**Used in**: [Alloy sampling](/constraints/alloy-sampling/), [g-C₃N₄ optical](/constraints/gcn-optical-transitions/)

---

## EM simulation in deployment settings {#em-sim}

**Reference**: Various (CST, HFSS, COMSOL, custom FDTD/FEM codes)

**Constrains well**:
- Forward trends under assumed boundary conditions and material models
- Sensitivity to design parameters in idealized environments
- Relative performance comparisons (design A vs. B)

**Cannot distinguish**:
- Real-world performance under environment variability
- Whether simulated environment matches deployment
- Contributions from unmodeled effects (clutter, multipath, time-variation)

**Assumptions**:
- Environment geometry and materials known/assumed
- Boundary conditions representative of deployment
- Static or quasi-static scene (no rapid time variation)
- Linear material response (unless nonlinearity explicitly modeled)

**Fails when**:
- Environment approximation dominates error (unknown clutter, ground properties)
- Optimization overfits to specific simulated scenario
- Hardware nonidealities not captured (fabrication tolerances, losses, coupling)
- Dynamic scenes change faster than simulation update rate

**Trust when**:
- Simulations validated against controlled measurements
- Sensitivity to environment assumptions explicitly tested
- Performance reported across scene ensemble, not single case
- Hardware limitations included in model

**Misleading when**:
- Single-scenario simulation treated as deployment guarantee
- Environment idealized without justification or sensitivity analysis
- Optimization produces designs brittle to small deviations

**Used in**: [Port metasurface](/constraints/port-metasurface/)

---

## Notes on this ledger

**What this is**: My working reference for methods I've actually used. Built from mistakes I've made or almost made.

**What this isn't**: 
- A comprehensive methods review (I don't have that experience)
- Authoritative assessments (I'm 22, finishing undergrad)
- Static (I expect to revise as I learn more)

**How to use it**: If you're encountering similar problems, this might help. If you're an expert, you'll probably find things I got wrong—let me know.

**Contact**: anuraag.sharma22 [at] student.xjtlu.edu.cn

---

[Back to top](#contents)
