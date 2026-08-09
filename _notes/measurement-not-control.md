---
layout: page
title: Measurement Is Not Control
permalink: /notes/measurement-not-control/
---

## Rule

A measurement can be sensitive without being useful for process control.

---

## Failure mode

The signal changes, so the metric is treated as actionable.

Wrong inference.

Process control asks a stronger question:

> can the signal support a decision?

That requires:

```text
repeatability
stability
calibration
known nuisance variables
bounded interpretation
failure detection
```

---

## Why sensitivity is not enough

A sensitive measurement can still fail if:

```text
multiple parameters produce the same signal
tool drift matches the process signal
repeatability is weak
the calibration envelope is narrow
the monitored parameter is not the physically important one
the metric cannot trigger a clear decision
```

---

## Examples

**RCWA metrology**  
Trench depth was more useful than secondary geometry because it was more identifiable under bounds.

**Port metasurface**  
Simulated field redistribution is not a control metric until fabrication variation and measured $S_{21}$ repeatability are understood.

---

## Check

Before calling a measurement process-useful, ask:

```text
What parameter is being monitored?
What nuisance variables mimic it?
How repeatable is the metric?
What is the calibration envelope?
What decision would this measurement support?
When should the metric be rejected?
```

---

## Appears in

[Inverse RCWA Metrology](/work/inverse-rcwa/)  
[Port Metasurface](/work/port-metasurface/)

[Back to notes](/notes/)