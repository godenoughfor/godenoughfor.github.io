---
layout: archive
permalink: /
title: ""
---

<div id="landing-content">
    <h1 class="landing-site-title">Enoughmind</h1>
    <h2 class="landing-site-subtitle">Psicología y tecnología</h2>
</div>
<div class="post-list">
<h2>Últimas Entradas</h2>
{% for post in site.posts %}
	{% include post-list.html %}
{% endfor %}
</div><!-- /.tiles -->