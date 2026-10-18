---
layout: page
title: Anuraag Sharma
permalink: /
hero: I study cases where physical measurements are easier to fit than to interpret.
description: Metrology process engineer working on inverse problems, statistical optics, and what a measurement can actually identify.
---

<dl class="readout" data-type>
  <dt>role</dt><dd>Metrology process engineer, Samsung Taylor</dd>
  <dt>research</dt><dd>statistical optics, inverse problems</dd>
  <dt>question</dt><dd>What did the measurement actually identify?</dd>
  <dt>based in</dt><dd>Taylor / Austin, Texas</dd>
</dl>

## Work

Each project, with what it identified and where it stopped. The colour is the tier; the scale is explained on the [work page](/work/#reading-the-tiers).

<table class="ledger">
<thead><tr><th>Project</th><th>Found</th><th>Limit</th></tr></thead>
<tbody>
{%- for g in site.data.work %}{% for it in g.items %}
<tr><td class="proj" data-label="Project"><a href="{{ it.url | relative_url }}">{{ it.title }}</a><span class="obj">{{ it.object }}</span></td><td data-label="Found"><span class="tier tier-{{ it.found.tier }}">{{ it.found.tier }}</span><span class="note">{{ it.found.text }}</span></td><td data-label="Limit"><span class="tier tier-{{ it.boundary.tier }}">{{ it.boundary.tier }}</span><span class="note">{{ it.boundary.text }}</span></td></tr>
{%- endfor %}{% endfor %}
</tbody>
</table>

<div class="pair" markdown="1">
<section markdown="1">

## Notes

Short rules from repeated inference failures.

<ul class="index">
  <li><a href="/notes/good-fits/">Good fits don't imply identifiability</a><span class="d">Low residual is not parameter uniqueness.</span></li>
  <li><a href="/notes/spectra-constraints/">Spectra are constraints, not fingerprints</a><span class="d">A spectrum supports mechanisms; it rarely identifies structure alone.</span></li>
  <li><a href="/notes/simulation-not-deployment/">Simulation is not deployment evidence</a><span class="d">A model result is not a field result.</span></li>
  <li><a href="/notes/measurement-not-control/">Measurement is not control</a><span class="d">A signal can be sensitive without being actionable.</span></li>
</ul>

[All notes](/notes/)

</section>
<section markdown="1">

## Reading

A ledger of methods I have used or had to interpret: what each one constrains, what it cannot determine, and where interpretation broke down.

[Reading ledger](/reading-ledger/)

</section>
</div>

<div class="pair" markdown="1">
<section markdown="1">

## Market Brief

A daily and weekly read on markets, kept as a separate site. Thresholds come from each instrument's own history, and names are compared against peers.

[About the brief](/market-brief/)

</section>
<section markdown="1">

## Elsewhere

Photography, music, fiction, and opinions on where current narratives about semiconductors and energy feel brittle.

[Elsewhere](/cv/elsewhere/)

</section>
</div>

## Contact

[CV](/cv/) for background and publications, [About](/about/) for how this site is meant to be read.
