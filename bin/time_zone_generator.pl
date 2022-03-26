#!/usr/bin/perl -w
use v5.10;
use strict;

use DateTime::TimeZone::Catalog;

say '<select id="form-timezone" name="fields[timezone]" required>';
say "\t" . '<option disabled="disabled" selected="selected">Select an option.</option>';

for my $cont ( sort keys %DateTime::TimeZone::Catalog::CATEGORIES ) {
    say "\t" . '<optgroup label="' . $cont . '">';
    for my $zone ( @{ $DateTime::TimeZone::Catalog::CATEGORIES{$cont} } ) {

        say "\t\t"
          . '<option name="'
          . $cont . '/'
          . $zone . '">'
          . $zone
          . '</option>';
    }
    say "\t" . '</optgroup>';
}

say '</select>';