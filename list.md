---
title: Our supporters
layout: default
---

{% for member_name in site.data.members %}
{% assign member = member_name[1] %}

<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h4 class="card-title">{{ member.name }}</h4>
    <p class="card-text">
Affiliation: {{ member.affiliation }}<br/>
Country: {{ member.country }}<br/>
E-mail: {{ member.email }}<br/>
{% if member.website %}Website: {{ member.website }}<br/>{% endif %}
Expertise: {{ member.expertise }}
    </p>
  </div>
</div>

{% endfor %}
