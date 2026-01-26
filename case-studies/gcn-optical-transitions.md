---
layout: page
title: Optical Transitions in g-C₃N₄
permalink: /case-studies/gcn-optical-transitions/
---

## The question

What information about microscopic electronic structure is actually encoded in the optical spectra of graphitic carbon nitride (g-C₃N₄)?

Where does that mapping stop being identifiable?

The goal was not bandgap extraction.
It was internal consistency:
given a structure, what optical response should exist,
and given a spectrum, what can legitimately be inferred?

---

## The forward assumption

The working assumption was a forward chain:

structure → electronic states → dielectric response → optical spectrum

In polymeric and disordered semiconductors, this mapping is many-to-one.
Optical spectra are projections of electronic structure, not direct structural measurements.

The task was to identify which features survive structural variation,
and which degrees of freedom collapse under inversion.

---

## Where ambiguity enters

g-C₃N₄ is a layered, polymeric semiconductor built from heptazine units linked by planar nitrogen bridges.

Key features:

- strong in-plane π conjugation  
- weak interlayer coupling  
- large freedom in stacking, spacing, vacancies, termination, and polymerization  

There is no unique structure representative of experiment.

Distinct microscopic configurations can therefore produce nearly identical optical spectra once disorder, thickness, and experimental resolution are accounted for.

---

## What was constrained

Electronic structure was analyzed using density functional theory with hybrid exchange–correlation functionals to reduce bandgap underestimation.

The Kohn–Sham equation,

$$
\left[
-\frac{\hbar^2}{2m}\nabla^2
+ V_{\text{ext}}
+ V_{\text{H}}[\rho]
+ V_{\text{xc}}[\rho]
\right]\psi
= \varepsilon \psi,
$$

was used to examine orbital character near the band edges and its sensitivity to structural perturbations.

Optical response was treated at the independent-particle level.
The imaginary part of the dielectric function,

$$
\varepsilon_2(\omega)
\propto
\sum_{v,c,\mathbf{k}}
\left|
\langle \psi_c | \mathbf{r} | \psi_v \rangle
\right|^2
\delta(\varepsilon_c - \varepsilon_v - \hbar\omega),
$$

makes explicit that optical intensity depends on transition dipole matrix elements, not eigenvalues alone.

---

## What survived

Across plausible configurations, several features were robust:

- a near-UV absorption onset  
- dominance of $\pi \rightarrow \pi^\*$ transitions  
- strong in-plane versus out-of-plane anisotropy  
- progressive spectral broadening with disorder  

These define the material class rather than any specific configuration.

---

## What collapsed under inversion

Distinct structural changes mapped to nearly indistinguishable spectra:

- stacking and interlayer spacing  
- vacancy density versus termination  
- planar distortion versus electronic localization  
- band curvature changes versus apparent excitonic shifts  
- thickness versus intrinsic disorder  

The dominant constraint reduced to the transition dipole moment,

$$
\mathbf{d}_{vc} = \langle \psi_v | \mathbf{r} | \psi_c \rangle.
$$

Disorder primarily redistributes oscillator strength.
Peak positions alone did not constrain structure.

---

## What generalized

Optical spectra of g-C₃N₄ constrain families of admissible structures, not unique configurations.

Near-UV absorption and $\pi \rightarrow \pi^\*$ character are robust.
Many structure–property claims inferred from UV–Vis data alone are underdetermined.

Non-identifiability is not a modeling failure.
It is the correct outcome of the inverse problem.

Absent orthogonal probes or deliberately engineered spectral discriminants,
optical spectroscopy must be treated as a bounded inference problem,
not a structural measurement.
