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
    <small class="text-muted">You may wish to obscure your email (e.g. "jane [dot] doe [at] uni.org") to make it harder for bots to read.</small>
    <input id="form-email" name="fields[email]" type="email">
  </div>

<div class="mb-3 row">
    <label for="form-website" class="form-label">Website (optional)</label>
    <input id="form-website" name="fields[website]" type="text">
  </div>

<div class="mb-3 row">
    <label for="form-expertise" class="form-label">Expertise</label>
    <small class="text-muted">Please use keywords to indicate the fields of research, types of data, computational techniques, software and/or programming languages that you have expertise in.</small>
  <small class="text-muted">To facilitate moderation, only entries in English are accepted.</small>
    <textarea id="form-expertise" name="fields[expertise]"></textarea>
  </div>

By clicking "submit", you agree that the data you have entered will be incorporated in our openly accessible list of volunteer experts willing to be contacted by  scientists forced to refocus on computational work due to a crisis.

Your entry will appear in the list following moderator approval. You will not receive any confirmation when your entry is approved, nor if it is rejected as spam. 

If you wish to have your entry removed at a later point, please open an issue on the project's [GitHub repo](https://github.com/Research-Support-Network/research-support-network.github.io) or write to <font color=red>(email)</font>.

<div class="mb-3 row">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
</form>
