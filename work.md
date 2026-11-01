---
layout: page
title: Work
permalink: /work/
lede: Research and internship projects, with the models and derivations behind them.
---

{% for g in site.data.work %}
## {{ g.group }}

<ul class="list">
{%- for it in g.items %}
  <li><a href="{{ it.url | relative_url }}">{{ it.title }}</a><span class="d">{{ it.summary }}</span></li>
{%- endfor %}
</ul>
{% endfor %}
