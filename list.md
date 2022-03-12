---
title: Our Volunteer Experts
layout: default
---

**A list of researchers with computational expertise who are willing to provide virtual support and advice for scientists forced to refocus on computational work due to a crisis.**

See the [main page](https://research-support-network.github.io/) for more information on how best to contact the experts on this list.

<hr>

{% for member_name in site.data.members %}
{% assign member = member_name[1] %}

<div class="card" style="width: 27rem;">
  <div class="card-body">
    <h4 class="card-title">{{ member.name }}</h4>
    <p class="card-text">
<strong>Affiliation:</strong> {{ member.affiliation }}<br/>
<strong>Country:</strong> {{ member.country }}<br/>
<strong>E-mail:</strong> {{ member.email }}<br/>
{% if member.website %}<strong>Website:</strong> {{ member.website }}<br/>{% endif %}
{% if member.languages %}<strong>Languages:</strong> {{ member.languages }}<br/>{% endif %}
<strong>Expertise:</strong> {{ member.expertise }}
    </p>
  </div>
</div>

{% endfor %}
