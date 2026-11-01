---
layout: page
title: Anuraag Sharma
permalink: /
lede: Metrology process engineer at Samsung's Taylor fab. Microelectronics background, with research in optics, electromagnetics and DFT.
description: Metrology process engineer at Samsung Taylor. Projects, notes and derivations in optics, electromagnetics and materials modeling.
---

## Work

<ul class="list">
{%- for g in site.data.work %}{% for it in g.items %}
  <li><a href="{{ it.url | relative_url }}">{{ it.title }}</a><span class="d">{{ it.summary }}</span></li>
{%- endfor %}{% endfor %}
</ul>

## Notes

<ul class="list">
{%- for n in site.notes %}
  <li><a href="{{ n.url | relative_url }}">{{ n.title }}</a>{% if n.summary %}<span class="d">{{ n.summary }}</span>{% endif %}</li>
{%- endfor %}
</ul>

## Elsewhere on the site

<ul class="list">
  <li><a href="/reading-ledger/">Reading ledger</a><span class="d">Methods I have used or had to interpret.</span></li>
  <li><a href="/market-brief/">Market Brief</a><span class="d">A daily and weekly read on markets, kept as a separate site.</span></li>
  <li><a href="/cv/elsewhere/">Elsewhere</a><span class="d">Photography, music, fiction, and some opinions.</span></li>
  <li><a href="/cv/">CV</a></li>
  <li><a href="/about/">About</a></li>
</ul>
