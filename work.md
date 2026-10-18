---
layout: page
title: Work
permalink: /work/
lede: Projects as evidence. The common test is whether the measurement can support the claim.
---

My current direction is fab metrology process engineering, which changes how I read these projects. A result matters more when it can help monitor a parameter, detect drift, bound a tolerance, expose a failure mode, or support a process decision.

## Reading the tiers

Every project gets two readings: what it found and where it stopped. Each reading sits on one scale of what the measurement actually identified. The assignments are my own judgment, and they change when the evidence does.

<div class="scale">
{%- for t in site.data.tiers %}
<div class="srow"><span>{% include tier.html id=t.id bar=false %}</span><span class="bar tier-{{ t.id }}" aria-hidden="true"><span class="track">{% if t.pct > 0 %}<span class="fill {{ t.side }}" style="width:{{ t.pct }}%"></span>{% endif %}</span></span><span class="m">{{ t.meaning }}</span></div>
{%- endfor %}
</div>

{% for g in site.data.work %}
## {{ g.group }}

{% include work-rows.html items=g.items lesson=true %}
{% endfor %}
