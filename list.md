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
<strong>Affiliation:</strong> {{ member.affiliation }}<br/>
<strong>Country:</strong> {{ member.country }}<br/>
<strong>E-mail:</strong> {{ member.email }}<br/>
{% if member.website %}<strong>Website:</strong> {{ member.website }}<br/>{% endif %}
<strong>Expertise:</strong> {{ member.expertise }}
    </p>
  </div>
</div>

{% endfor %}
