---
layout: page
title: Measurement is not control
permalink: /_notes/measurement-not-control/
---

A measurement can respond to a physical parameter without being useful for process control.

For process control, the question is not only:

> does the signal change?

The stronger question is:

> can the signal support a decision?

That requires stability, repeatability, calibration, known nuisance variables, and a bounded interpretation.

A sensitive measurement can still fail as a control metric if:

- multiple parameters produce the same signal change;
- tool drift is comparable to the process signal;
- the measurement is not repeatable across conditions;
- the model only works inside a narrow calibration envelope;
- the parameter being monitored is not the parameter that matters physically.

This connects my student projects to fab metrology. In RCWA metrology, trench depth was more usable than secondary geometry. In the port-metasurface project, simulated field redistribution is not yet a control metric until fabrication and measurement variation are understood.

[Back to notes](/notes/)