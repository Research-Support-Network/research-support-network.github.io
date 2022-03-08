---
title: Add member to network
layout: default
---

<form method="POST" action="https://research-support-network.herokuapp.com/v3/entry/github/Research-Support-Network/research-support-network.github.io/main/member-submission">
  <input name="options[redirect]" type="hidden" value="https://research-support-network.github.io">
  <input name="options[slug]" type="hidden" value="{{ page.slug }}">

  <div class="mb-3 row">
    <label for="form-name" class="form-label">Name</label>
    <input id="form-name" name="fields[name]" type="text">
  </div>

  <div class="mb-3 row">
    <label for="form-affiliation" class="form-label">Affiliation</label>
    <input id="form-affiliation" name="fields[affiliation]" type="text">
  </div>

  <div class="mb-3 row">
    <label for="form-country" class="form-label">Country</label>
    <input id="form-country" name="fields[country]" type="text">
  </div>

  <div class="mb-3 row">
    <label for="form-email" class="form-label">E-mail</label>
    <input id="form-email" name="fields[email]" type="email">
  </div>

  <div class="mb-3 row">
    <label for="form-website" class="form-label">Website (optional)</label>
    <input id="form-website" name="fields[website]" type="text">
  </div>

  <div class="mb-3 row">
    <label for="form-expertise" class="form-label">Expertise</label>
    <textarea id="form-expertise" name="fields[expertise]"></textarea>
  </div>

  <div class="mb-3 row">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
</form>
