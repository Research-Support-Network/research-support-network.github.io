---
title: Our Volunteer Experts
layout: default
---

<link rel="stylesheet" href="/assets/css/shuffle-style.css" />
<link rel="stylesheet" href="/assets/css/shuffle-figure-style.css" />

**A list of researchers with computational expertise who are willing to provide virtual support and advice for scientists forced to refocus on computational work due to a crisis.**

See the [main page](https://research-support-network.github.io/) for more information on how best to contact the experts on this list.

Note that we expect users of this list to follow our [Code of Conduct](code-of-conduct.html).

<hr>

<section class="container">
  <div class="row">
    <div class="col-6@sm col-6@md">
      <div class="filters-group">
        <label for="filters-search-input" class="filter-label">Search</label>
        <input class="textfield filter__search js-shuffle-search" type="search" id="filters-search-input" />
      </div>
    </div>
  </div>
</section>

<div id="deck">
{% for member_name in site.data.members %}
{% assign member = member_name[1] %}

<figure class="col-6@xs col-6@sm col-6@md picture-item picture-item--h2" data-groups='["{{ member.country }}"]' data-title="{{ member.name | strip_html | escape }} {{ member.country | strip_html | escape }} {{ member.affiliation | strip_html | escape }} {{ member.languages | strip_html | escape }} {{ member.expertise | strip_html | escape }} ">
  <div class="picture-item__inner">
    <div class="picture-item__details">
      <figcaption class="picture-item__title"><em>{{ member.name | strip_html | escape }}</em></figcaption>
      <p class="picture-item__tags hidden@xs"><strong>{{ member.country | strip_html | escape }}</strong></p>
    </div>
    <p class="picture-item__description">
      <strong>Affiliation:</strong> {{ member.affiliation | strip_html | escape }}<br/>
      <strong>Country:</strong> {{ member.country | strip_html | escape }}<br/>
      <strong>E-mail:</strong> {{ member.email | strip_html | escape }}<br/>
      {% if member.website %}<strong>Website:</strong> {{ member.website | strip_html | escape }}<br/>{% endif %}
      {% if member.languages %}<strong>Languages:</strong> {{ member.languages | strip_html | escape }}<br/>{% endif %}
      <strong>Expertise:</strong> {{ member.expertise | strip_html | escape }}
    </p>
  </div>
</figure>

{% endfor %}

</div>

<script src="/assets/js/shuffle.min.js"></script>
<script src="/assets/js/shuffle_and_search.js"></script>
