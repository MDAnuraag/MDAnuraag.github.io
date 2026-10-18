---
layout: page
title: Work
permalink: /work/
lede: Projects as evidence. The common test is whether the measurement can support the claim.
---

My current direction is fab metrology process engineering, which changes how I read these projects. A result matters more when it can help monitor a parameter, detect drift, bound a tolerance, expose a failure mode, or support a process decision.

## Reading the tiers

Every project gets two readings: what it found and where it stopped. Each reading sits on one scale of what the measurement actually identified. The assignments are my own judgment, and they change when the evidence does.

<dl class="scale">
{%- for t in site.data.tiers %}
<dt><span class="tier tier-{{ t.id }}">{{ t.id }}</span></dt><dd>{{ t.meaning }}</dd>
{%- endfor %}
</dl>

{% for g in site.data.work %}
## {{ g.group }}

<table class="ledger">
<thead><tr><th>Project</th><th>Found</th><th>Limit</th><th>Lesson</th></tr></thead>
<tbody>
{%- for it in g.items %}
<tr><td class="proj" data-label="Project"><a href="{{ it.url | relative_url }}">{{ it.title }}</a><span class="obj">{{ it.object }}</span></td><td data-label="Found"><span class="tier tier-{{ it.found.tier }}">{{ it.found.tier }}</span><span class="note">{{ it.found.text }}</span></td><td data-label="Limit"><span class="tier tier-{{ it.boundary.tier }}">{{ it.boundary.tier }}</span><span class="note">{{ it.boundary.text }}</span></td><td data-label="Lesson" class="lesson">{{ it.lesson }}</td></tr>
{%- endfor %}
</tbody>
</table>
{% endfor %}
