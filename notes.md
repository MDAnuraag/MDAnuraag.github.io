---
layout: page
title: Notes
permalink: /notes/
lede: Short working notes behind the projects.
redirect_from:
  - /notes/good-fits/
  - /notes/spectra-constraints/
  - /notes/averaging/
  - /notes/simulation-not-deployment/
  - /notes/measurement-not-control/
---

## Fitting

A fit finds a parameter vector $\theta$ with a small residual:

$$
\|y_{\mathrm{measured}} - y_{\mathrm{model}}(\theta)\|^2
$$

Another vector $\theta'$ can give the same model output:

$$
y_{\mathrm{model}}(\theta)
\approx
y_{\mathrm{model}}(\theta')
$$

When several parameter sets give indistinguishable signals, the parameters are non-identifiable under that measurement. Checks before reporting a fitted parameter:

```text
multi-start convergence
parameter covariance
singular values
sensitivity rank
posterior spread
independent validation
measurement diversity
```

If another parameter set fits equally well, the parameter is model-dependent.

## Spectra

A matching spectrum shows consistency under the model's assumptions.

$$
\text{structure} \rightarrow \text{spectrum}
$$

Many structures can lead to the same spectrum, because a spectrum averages over depth, time, angle, grain structure, disorder, dopant environment, instrument bandwidth and preprocessing choices. Before claiming a structure:

```text
list alternative mechanisms
state which measurements distinguish them
separate "consistent with" from "identified as"
state what remains open
```

## Averages

For a spatially varying quantity:

$$
\langle \alpha \rangle
=
\frac{1}{V}
\int_V
\alpha(\mathbf{r})\,dV
$$

Many different $\alpha(\mathbf{r})$ give the same average. In the AlN films, UV–Vis transmission measured a depth-averaged response. In alloy sampling, an optical gap reflects many configurations and local environments. In the g-C₃N₄ work, computed spectra come from idealized configurations while real samples average over disorder, stacking, defects and dopant environments.

When reporting an average, state what was averaged, which hidden variable was lost, and which measurement would resolve it.

## Simulation

A simulation result is evidence inside its assumptions:

$$
\text{simulation improvement}
\Rightarrow
\text{bounded model evidence}
$$

Simulations usually fix geometry, materials, alignment, boundary conditions, excitation, noise model, scatterers, environment, fabrication accuracy and calibration. The evidence ladder:

**Model result.** Works under the simulation assumptions.  
**Robustness result.** Holds when assumptions are perturbed.  
**Measurement result.** Works in a controlled physical setup.  
**Deployment result.** Works under field-representative conditions.

The port metasurface sits at the first level: CST shows that the boundary changes the sensing matrix, that the unit cell has an interpretable resonance, and that reconstruction survives synthetic noise. Next are the fabricated panel, measured S-parameters, repeatability, setup uncertainty and a simulation-to-measurement comparison.

## Process control

A signal that changes with a parameter is sensitive. Using it for process control takes repeatability, stability, calibration, known nuisance variables, bounded interpretation and failure detection.

A sensitive measurement can still fall short when multiple parameters produce the same signal, tool drift matches the process signal, repeatability is weak, the calibration envelope is narrow, the monitored parameter is a secondary one, or the metric cannot trigger a clear decision.

In the RCWA work, trench depth made a better monitoring parameter than secondary geometry because it held up under bounds. For the port metasurface, simulated field redistribution becomes a control metric once fabrication variation and measured $S_{21}$ repeatability are known.
