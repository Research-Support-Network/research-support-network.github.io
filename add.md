---
title: Add member to network
layout: default

---

**If you have computational expertise and are open to being contacted for providing remote help and advice to scientists affected by a crisis, please fill this form to be added to the list.**

Make sure you read the information on the [main page](https://research-support-network.github.io/) first.

<form method="POST" action="https://research-support-network.herokuapp.com/v3/entry/github/Research-Support-Network/research-support-network.github.io/main/member-submission">
  <input name="options[redirect]" type="hidden" value="https://research-support-network.github.io/submitted.html">
  <input name="options[slug]" type="hidden" value="{{ page.slug }}">

<div class="mb-3 row">
    <label for="form-name" class="form-label">Name</label>
    <input id="form-name" name="fields[name]" type="text" pattern="[A-Za-z.\-\(\)]{100}" maxlength=100 required>
</div>

<div class="mb-3 row">
    <label for="form-affiliation" class="form-label">Affiliation</label>
    <input id="form-affiliation" name="fields[affiliation]" type="text" pattern="[A-Za-z.\-\(\)]{100}" maxlength=100 required>
</div>

<div class="mb-3 row">
  <label for="form-timezone" class="form-label">Timezone</label><br>
  <select id="form-timezone" name="fields[timezone]" required>
    <option disabled="disabled" selected="selected" value>Select an option.</option>
    <optgroup label="Africa">
      <option name="Africa/Abidjan">Africa/Abidjan</option>
      <option name="Africa/Accra">Africa/Accra</option>
      <option name="Africa/Algiers">Africa/Algiers</option>
      <option name="Africa/Bissau">Africa/Bissau</option>
      <option name="Africa/Cairo">Africa/Cairo</option>
      <option name="Africa/Casablanca">Africa/Casablanca</option>
      <option name="Africa/Ceuta">Africa/Ceuta</option>
      <option name="Africa/El_Aaiun">Africa/El_Aaiun</option>
      <option name="Africa/Johannesburg">Africa/Johannesburg</option>
      <option name="Africa/Juba">Africa/Juba</option>
      <option name="Africa/Khartoum">Africa/Khartoum</option>
      <option name="Africa/Lagos">Africa/Lagos</option>
      <option name="Africa/Maputo">Africa/Maputo</option>
      <option name="Africa/Monrovia">Africa/Monrovia</option>
      <option name="Africa/Nairobi">Africa/Nairobi</option>
      <option name="Africa/Ndjamena">Africa/Ndjamena</option>
      <option name="Africa/Sao_Tome">Africa/Sao_Tome</option>
      <option name="Africa/Tripoli">Africa/Tripoli</option>
      <option name="Africa/Tunis">Africa/Tunis</option>
      <option name="Africa/Windhoek">Africa/Windhoek</option>
    </optgroup>
    <optgroup label="America">
      <option name="America/Adak">America/Adak</option>
      <option name="America/Anchorage">America/Anchorage</option>
      <option name="America/Araguaina">America/Araguaina</option>
      <option name="America/Argentina/Buenos_Aires">America/Argentina/Buenos_Aires</option>
      <option name="America/Argentina/Catamarca">America/Argentina/Catamarca</option>
      <option name="America/Argentina/Cordoba">America/Argentina/Cordoba</option>
      <option name="America/Argentina/Jujuy">America/Argentina/Jujuy</option>
      <option name="America/Argentina/La_Rioja">America/Argentina/La_Rioja</option>
      <option name="America/Argentina/Mendoza">America/Argentina/Mendoza</option>
      <option name="America/Argentina/Rio_Gallegos">America/Argentina/Rio_Gallegos</option>
      <option name="America/Argentina/Salta">America/Argentina/Salta</option>
      <option name="America/Argentina/San_Juan">America/Argentina/San_Juan</option>
      <option name="America/Argentina/San_Luis">America/Argentina/San_Luis</option>
      <option name="America/Argentina/Tucuman">America/Argentina/Tucuman</option>
      <option name="America/Argentina/Ushuaia">America/Argentina/Ushuaia</option>
      <option name="America/Asuncion">America/Asuncion</option>
      <option name="America/Atikokan">America/Atikokan</option>
      <option name="America/Bahia">America/Bahia</option>
      <option name="America/Bahia_Banderas">America/Bahia_Banderas</option>
      <option name="America/Barbados">America/Barbados</option>
      <option name="America/Belem">America/Belem</option>
      <option name="America/Belize">America/Belize</option>
      <option name="America/Blanc-Sablon">America/Blanc-Sablon</option>
      <option name="America/Boa_Vista">America/Boa_Vista</option>
      <option name="America/Bogota">America/Bogota</option>
      <option name="America/Boise">America/Boise</option>
      <option name="America/Cambridge_Bay">America/Cambridge_Bay</option>
      <option name="America/Campo_Grande">America/Campo_Grande</option>
      <option name="America/Cancun">America/Cancun</option>
      <option name="America/Caracas">America/Caracas</option>
      <option name="America/Cayenne">America/Cayenne</option>
      <option name="America/Chicago">America/Chicago</option>
      <option name="America/Chihuahua">America/Chihuahua</option>
      <option name="America/Costa_Rica">America/Costa_Rica</option>
      <option name="America/Creston">America/Creston</option>
      <option name="America/Cuiaba">America/Cuiaba</option>
      <option name="America/Curacao">America/Curacao</option>
      <option name="America/Danmarkshavn">America/Danmarkshavn</option>
      <option name="America/Dawson">America/Dawson</option>
      <option name="America/Dawson_Creek">America/Dawson_Creek</option>
      <option name="America/Denver">America/Denver</option>
      <option name="America/Detroit">America/Detroit</option>
      <option name="America/Edmonton">America/Edmonton</option>
      <option name="America/Eirunepe">America/Eirunepe</option>
      <option name="America/El_Salvador">America/El_Salvador</option>
      <option name="America/Fort_Nelson">America/Fort_Nelson</option>
      <option name="America/Fortaleza">America/Fortaleza</option>
      <option name="America/Glace_Bay">America/Glace_Bay</option>
      <option name="America/Goose_Bay">America/Goose_Bay</option>
      <option name="America/Grand_Turk">America/Grand_Turk</option>
      <option name="America/Guatemala">America/Guatemala</option>
      <option name="America/Guayaquil">America/Guayaquil</option>
      <option name="America/Guyana">America/Guyana</option>
      <option name="America/Halifax">America/Halifax</option>
      <option name="America/Havana">America/Havana</option>
      <option name="America/Hermosillo">America/Hermosillo</option>
      <option name="America/Indiana/Indianapolis">America/Indiana/Indianapolis</option>
      <option name="America/Indiana/Knox">America/Indiana/Knox</option>
      <option name="America/Indiana/Marengo">America/Indiana/Marengo</option>
      <option name="America/Indiana/Petersburg">America/Indiana/Petersburg</option>
      <option name="America/Indiana/Tell_City">America/Indiana/Tell_City</option>
      <option name="America/Indiana/Vevay">America/Indiana/Vevay</option>
      <option name="America/Indiana/Vincennes">America/Indiana/Vincennes</option>
      <option name="America/Indiana/Winamac">America/Indiana/Winamac</option>
      <option name="America/Inuvik">America/Inuvik</option>
      <option name="America/Iqaluit">America/Iqaluit</option>
      <option name="America/Jamaica">America/Jamaica</option>
      <option name="America/Juneau">America/Juneau</option>
      <option name="America/Kentucky/Louisville">America/Kentucky/Louisville</option>
      <option name="America/Kentucky/Monticello">America/Kentucky/Monticello</option>
      <option name="America/La_Paz">America/La_Paz</option>
      <option name="America/Lima">America/Lima</option>
      <option name="America/Los_Angeles">America/Los_Angeles</option>
      <option name="America/Maceio">America/Maceio</option>
      <option name="America/Managua">America/Managua</option>
      <option name="America/Manaus">America/Manaus</option>
      <option name="America/Martinique">America/Martinique</option>
      <option name="America/Matamoros">America/Matamoros</option>
      <option name="America/Mazatlan">America/Mazatlan</option>
      <option name="America/Menominee">America/Menominee</option>
      <option name="America/Merida">America/Merida</option>
      <option name="America/Metlakatla">America/Metlakatla</option>
      <option name="America/Mexico_City">America/Mexico_City</option>
      <option name="America/Miquelon">America/Miquelon</option>
      <option name="America/Moncton">America/Moncton</option>
      <option name="America/Monterrey">America/Monterrey</option>
      <option name="America/Montevideo">America/Montevideo</option>
      <option name="America/Nassau">America/Nassau</option>
      <option name="America/New_York">America/New_York</option>
      <option name="America/Nipigon">America/Nipigon</option>
      <option name="America/Nome">America/Nome</option>
      <option name="America/Noronha">America/Noronha</option>
      <option name="America/North_Dakota/Beulah">America/North_Dakota/Beulah</option>
      <option name="America/North_Dakota/Center">America/North_Dakota/Center</option>
      <option name="America/North_Dakota/New_Salem">America/North_Dakota/New_Salem</option>
      <option name="America/Nuuk">America/Nuuk</option>
      <option name="America/Ojinaga">America/Ojinaga</option>
      <option name="America/Panama">America/Panama</option>
      <option name="America/Pangnirtung">America/Pangnirtung</option>
      <option name="America/Paramaribo">America/Paramaribo</option>
      <option name="America/Phoenix">America/Phoenix</option>
      <option name="America/Port-au-Prince">America/Port-au-Prince</option>
      <option name="America/Port_of_Spain">America/Port_of_Spain</option>
      <option name="America/Porto_Velho">America/Porto_Velho</option>
      <option name="America/Puerto_Rico">America/Puerto_Rico</option>
      <option name="America/Punta_Arenas">America/Punta_Arenas</option>
      <option name="America/Rainy_River">America/Rainy_River</option>
      <option name="America/Rankin_Inlet">America/Rankin_Inlet</option>
      <option name="America/Recife">America/Recife</option>
      <option name="America/Regina">America/Regina</option>
      <option name="America/Resolute">America/Resolute</option>
      <option name="America/Rio_Branco">America/Rio_Branco</option>
      <option name="America/Santarem">America/Santarem</option>
      <option name="America/Santiago">America/Santiago</option>
      <option name="America/Santo_Domingo">America/Santo_Domingo</option>
      <option name="America/Sao_Paulo">America/Sao_Paulo</option>
      <option name="America/Scoresbysund">America/Scoresbysund</option>
      <option name="America/Sitka">America/Sitka</option>
      <option name="America/St_Johns">America/St_Johns</option>
      <option name="America/Swift_Current">America/Swift_Current</option>
      <option name="America/Tegucigalpa">America/Tegucigalpa</option>
      <option name="America/Thule">America/Thule</option>
      <option name="America/Thunder_Bay">America/Thunder_Bay</option>
      <option name="America/Tijuana">America/Tijuana</option>
      <option name="America/Toronto">America/Toronto</option>
      <option name="America/Vancouver">America/Vancouver</option>
      <option name="America/Whitehorse">America/Whitehorse</option>
      <option name="America/Winnipeg">America/Winnipeg</option>
      <option name="America/Yakutat">America/Yakutat</option>
      <option name="America/Yellowknife">America/Yellowknife</option>
    </optgroup>
    <optgroup label="Antarctica">
      <option name="Antarctica/Casey">Antarctica/Casey</option>
      <option name="Antarctica/Davis">Antarctica/Davis</option>
      <option name="Antarctica/DumontDUrville">Antarctica/DumontDUrville</option>
      <option name="Antarctica/Macquarie">Antarctica/Macquarie</option>
      <option name="Antarctica/Mawson">Antarctica/Mawson</option>
      <option name="Antarctica/Palmer">Antarctica/Palmer</option>
      <option name="Antarctica/Rothera">Antarctica/Rothera</option>
      <option name="Antarctica/Syowa">Antarctica/Syowa</option>
      <option name="Antarctica/Troll">Antarctica/Troll</option>
      <option name="Antarctica/Vostok">Antarctica/Vostok</option>
    </optgroup>
    <optgroup label="Asia">
      <option name="Asia/Almaty">Asia/Almaty</option>
      <option name="Asia/Amman">Asia/Amman</option>
      <option name="Asia/Anadyr">Asia/Anadyr</option>
      <option name="Asia/Aqtau">Asia/Aqtau</option>
      <option name="Asia/Aqtobe">Asia/Aqtobe</option>
      <option name="Asia/Ashgabat">Asia/Ashgabat</option>
      <option name="Asia/Atyrau">Asia/Atyrau</option>
      <option name="Asia/Baghdad">Asia/Baghdad</option>
      <option name="Asia/Baku">Asia/Baku</option>
      <option name="Asia/Bangkok">Asia/Bangkok</option>
      <option name="Asia/Barnaul">Asia/Barnaul</option>
      <option name="Asia/Beirut">Asia/Beirut</option>
      <option name="Asia/Bishkek">Asia/Bishkek</option>
      <option name="Asia/Brunei">Asia/Brunei</option>
      <option name="Asia/Chita">Asia/Chita</option>
      <option name="Asia/Choibalsan">Asia/Choibalsan</option>
      <option name="Asia/Colombo">Asia/Colombo</option>
      <option name="Asia/Damascus">Asia/Damascus</option>
      <option name="Asia/Dhaka">Asia/Dhaka</option>
      <option name="Asia/Dili">Asia/Dili</option>
      <option name="Asia/Dubai">Asia/Dubai</option>
      <option name="Asia/Dushanbe">Asia/Dushanbe</option>
      <option name="Asia/Famagusta">Asia/Famagusta</option>
      <option name="Asia/Gaza">Asia/Gaza</option>
      <option name="Asia/Hebron">Asia/Hebron</option>
      <option name="Asia/Ho_Chi_Minh">Asia/Ho_Chi_Minh</option>
      <option name="Asia/Hong_Kong">Asia/Hong_Kong</option>
      <option name="Asia/Hovd">Asia/Hovd</option>
      <option name="Asia/Irkutsk">Asia/Irkutsk</option>
      <option name="Asia/Jakarta">Asia/Jakarta</option>
      <option name="Asia/Jayapura">Asia/Jayapura</option>
      <option name="Asia/Jerusalem">Asia/Jerusalem</option>
      <option name="Asia/Kabul">Asia/Kabul</option>
      <option name="Asia/Kamchatka">Asia/Kamchatka</option>
      <option name="Asia/Karachi">Asia/Karachi</option>
      <option name="Asia/Kathmandu">Asia/Kathmandu</option>
      <option name="Asia/Khandyga">Asia/Khandyga</option>
      <option name="Asia/Kolkata">Asia/Kolkata</option>
      <option name="Asia/Krasnoyarsk">Asia/Krasnoyarsk</option>
      <option name="Asia/Kuala_Lumpur">Asia/Kuala_Lumpur</option>
      <option name="Asia/Kuching">Asia/Kuching</option>
      <option name="Asia/Macau">Asia/Macau</option>
      <option name="Asia/Magadan">Asia/Magadan</option>
      <option name="Asia/Makassar">Asia/Makassar</option>
      <option name="Asia/Manila">Asia/Manila</option>
      <option name="Asia/Nicosia">Asia/Nicosia</option>
      <option name="Asia/Novokuznetsk">Asia/Novokuznetsk</option>
      <option name="Asia/Novosibirsk">Asia/Novosibirsk</option>
      <option name="Asia/Omsk">Asia/Omsk</option>
      <option name="Asia/Oral">Asia/Oral</option>
      <option name="Asia/Pontianak">Asia/Pontianak</option>
      <option name="Asia/Pyongyang">Asia/Pyongyang</option>
      <option name="Asia/Qatar">Asia/Qatar</option>
      <option name="Asia/Qostanay">Asia/Qostanay</option>
      <option name="Asia/Qyzylorda">Asia/Qyzylorda</option>
      <option name="Asia/Riyadh">Asia/Riyadh</option>
      <option name="Asia/Sakhalin">Asia/Sakhalin</option>
      <option name="Asia/Samarkand">Asia/Samarkand</option>
      <option name="Asia/Seoul">Asia/Seoul</option>
      <option name="Asia/Shanghai">Asia/Shanghai</option>
      <option name="Asia/Singapore">Asia/Singapore</option>
      <option name="Asia/Srednekolymsk">Asia/Srednekolymsk</option>
      <option name="Asia/Taipei">Asia/Taipei</option>
      <option name="Asia/Tashkent">Asia/Tashkent</option>
      <option name="Asia/Tbilisi">Asia/Tbilisi</option>
      <option name="Asia/Tehran">Asia/Tehran</option>
      <option name="Asia/Thimphu">Asia/Thimphu</option>
      <option name="Asia/Tokyo">Asia/Tokyo</option>
      <option name="Asia/Tomsk">Asia/Tomsk</option>
      <option name="Asia/Ulaanbaatar">Asia/Ulaanbaatar</option>
      <option name="Asia/Urumqi">Asia/Urumqi</option>
      <option name="Asia/Ust-Nera">Asia/Ust-Nera</option>
      <option name="Asia/Vladivostok">Asia/Vladivostok</option>
      <option name="Asia/Yakutsk">Asia/Yakutsk</option>
      <option name="Asia/Yangon">Asia/Yangon</option>
      <option name="Asia/Yekaterinburg">Asia/Yekaterinburg</option>
      <option name="Asia/Yerevan">Asia/Yerevan</option>
    </optgroup>
    <optgroup label="Atlantic">
      <option name="Atlantic/Azores">Atlantic/Azores</option>
      <option name="Atlantic/Bermuda">Atlantic/Bermuda</option>
      <option name="Atlantic/Canary">Atlantic/Canary</option>
      <option name="Atlantic/Cape_Verde">Atlantic/Cape_Verde</option>
      <option name="Atlantic/Faroe">Atlantic/Faroe</option>
      <option name="Atlantic/Madeira">Atlantic/Madeira</option>
      <option name="Atlantic/Reykjavik">Atlantic/Reykjavik</option>
      <option name="Atlantic/South_Georgia">Atlantic/South_Georgia</option>
      <option name="Atlantic/Stanley">Atlantic/Stanley</option>
    </optgroup>
    <optgroup label="Australia">
      <option name="Australia/Adelaide">Australia/Adelaide</option>
      <option name="Australia/Brisbane">Australia/Brisbane</option>
      <option name="Australia/Broken_Hill">Australia/Broken_Hill</option>
      <option name="Australia/Currie">Australia/Currie</option>
      <option name="Australia/Darwin">Australia/Darwin</option>
      <option name="Australia/Eucla">Australia/Eucla</option>
      <option name="Australia/Hobart">Australia/Hobart</option>
      <option name="Australia/Lindeman">Australia/Lindeman</option>
      <option name="Australia/Lord_Howe">Australia/Lord_Howe</option>
      <option name="Australia/Melbourne">Australia/Melbourne</option>
      <option name="Australia/Perth">Australia/Perth</option>
      <option name="Australia/Sydney">Australia/Sydney</option>
    </optgroup>
    <optgroup label="Europe">
      <option name="Europe/Amsterdam">Europe/Amsterdam</option>
      <option name="Europe/Andorra">Europe/Andorra</option>
      <option name="Europe/Astrakhan">Europe/Astrakhan</option>
      <option name="Europe/Athens">Europe/Athens</option>
      <option name="Europe/Belgrade">Europe/Belgrade</option>
      <option name="Europe/Berlin">Europe/Berlin</option>
      <option name="Europe/Brussels">Europe/Brussels</option>
      <option name="Europe/Bucharest">Europe/Bucharest</option>
      <option name="Europe/Budapest">Europe/Budapest</option>
      <option name="Europe/Chisinau">Europe/Chisinau</option>
      <option name="Europe/Copenhagen">Europe/Copenhagen</option>
      <option name="Europe/Dublin">Europe/Dublin</option>
      <option name="Europe/Gibraltar">Europe/Gibraltar</option>
      <option name="Europe/Helsinki">Europe/Helsinki</option>
      <option name="Europe/Istanbul">Europe/Istanbul</option>
      <option name="Europe/Kaliningrad">Europe/Kaliningrad</option>
      <option name="Europe/Kiev">Europe/Kiev</option>
      <option name="Europe/Kirov">Europe/Kirov</option>
      <option name="Europe/Lisbon">Europe/Lisbon</option>
      <option name="Europe/London">Europe/London</option>
      <option name="Europe/Luxembourg">Europe/Luxembourg</option>
      <option name="Europe/Madrid">Europe/Madrid</option>
      <option name="Europe/Malta">Europe/Malta</option>
      <option name="Europe/Minsk">Europe/Minsk</option>
      <option name="Europe/Monaco">Europe/Monaco</option>
      <option name="Europe/Moscow">Europe/Moscow</option>
      <option name="Europe/Oslo">Europe/Oslo</option>
      <option name="Europe/Paris">Europe/Paris</option>
      <option name="Europe/Prague">Europe/Prague</option>
      <option name="Europe/Riga">Europe/Riga</option>
      <option name="Europe/Rome">Europe/Rome</option>
      <option name="Europe/Samara">Europe/Samara</option>
      <option name="Europe/Saratov">Europe/Saratov</option>
      <option name="Europe/Simferopol">Europe/Simferopol</option>
      <option name="Europe/Sofia">Europe/Sofia</option>
      <option name="Europe/Stockholm">Europe/Stockholm</option>
      <option name="Europe/Tallinn">Europe/Tallinn</option>
      <option name="Europe/Tirane">Europe/Tirane</option>
      <option name="Europe/Ulyanovsk">Europe/Ulyanovsk</option>
      <option name="Europe/Uzhgorod">Europe/Uzhgorod</option>
      <option name="Europe/Vienna">Europe/Vienna</option>
      <option name="Europe/Vilnius">Europe/Vilnius</option>
      <option name="Europe/Volgograd">Europe/Volgograd</option>
      <option name="Europe/Warsaw">Europe/Warsaw</option>
      <option name="Europe/Zaporozhye">Europe/Zaporozhye</option>
      <option name="Europe/Zurich">Europe/Zurich</option>
    </optgroup>
    <optgroup label="Indian">
      <option name="Indian/Chagos">Indian/Chagos</option>
      <option name="Indian/Christmas">Indian/Christmas</option>
      <option name="Indian/Cocos">Indian/Cocos</option>
      <option name="Indian/Kerguelen">Indian/Kerguelen</option>
      <option name="Indian/Mahe">Indian/Mahe</option>
      <option name="Indian/Maldives">Indian/Maldives</option>
      <option name="Indian/Mauritius">Indian/Mauritius</option>
      <option name="Indian/Reunion">Indian/Reunion</option>
    </optgroup>
    <optgroup label="Pacific">
      <option name="Pacific/Apia">Pacific/Apia</option>
      <option name="Pacific/Auckland">Pacific/Auckland</option>
      <option name="Pacific/Bougainville">Pacific/Bougainville</option>
      <option name="Pacific/Chatham">Pacific/Chatham</option>
      <option name="Pacific/Chuuk">Pacific/Chuuk</option>
      <option name="Pacific/Easter">Pacific/Easter</option>
      <option name="Pacific/Efate">Pacific/Efate</option>
      <option name="Pacific/Enderbury">Pacific/Enderbury</option>
      <option name="Pacific/Fakaofo">Pacific/Fakaofo</option>
      <option name="Pacific/Fiji">Pacific/Fiji</option>
      <option name="Pacific/Funafuti">Pacific/Funafuti</option>
      <option name="Pacific/Galapagos">Pacific/Galapagos</option>
      <option name="Pacific/Gambier">Pacific/Gambier</option>
      <option name="Pacific/Guadalcanal">Pacific/Guadalcanal</option>
      <option name="Pacific/Guam">Pacific/Guam</option>
      <option name="Pacific/Honolulu">Pacific/Honolulu</option>
      <option name="Pacific/Kiritimati">Pacific/Kiritimati</option>
      <option name="Pacific/Kosrae">Pacific/Kosrae</option>
      <option name="Pacific/Kwajalein">Pacific/Kwajalein</option>
      <option name="Pacific/Majuro">Pacific/Majuro</option>
      <option name="Pacific/Marquesas">Pacific/Marquesas</option>
      <option name="Pacific/Nauru">Pacific/Nauru</option>
      <option name="Pacific/Niue">Pacific/Niue</option>
      <option name="Pacific/Norfolk">Pacific/Norfolk</option>
      <option name="Pacific/Noumea">Pacific/Noumea</option>
      <option name="Pacific/Pago_Pago">Pacific/Pago_Pago</option>
      <option name="Pacific/Palau">Pacific/Palau</option>
      <option name="Pacific/Pitcairn">Pacific/Pitcairn</option>
      <option name="Pacific/Pohnpei">Pacific/Pohnpei</option>
      <option name="Pacific/Port_Moresby">Pacific/Port_Moresby</option>
      <option name="Pacific/Rarotonga">Pacific/Rarotonga</option>
      <option name="Pacific/Tahiti">Pacific/Tahiti</option>
      <option name="Pacific/Tarawa">Pacific/Tarawa</option>
      <option name="Pacific/Tongatapu">Pacific/Tongatapu</option>
      <option name="Pacific/Wake">Pacific/Wake</option>
      <option name="Pacific/Wallis">Pacific/Wallis</option>
    </optgroup>
  </select>
</div>

<div class="mb-3 row">
    <label for="form-email" class="form-label">E-mail</label><br>
    <small class="text-muted">You may wish to obscure your email (e.g. "jane [dot] doe [at] uni.org") to make it harder for bots to read.</small>
    <input id="form-email" name="fields[email]" type="text" maxlength=100 required>
  </div>

<div class="mb-3 row">
    <label for="form-website" class="form-label">Website (optional)</label>
    <input id="form-website" name="fields[website]" type="text" maxlength=100>
  </div>

<div class="mb-3 row">
    <label for="form-languages" class="form-label">Languages</label><br>
    <small class="text-muted">Please specify language(s) by order of preference and separated by commas (e.g. "English, French").</small>
    <input id="form-languages" name="fields[languages]" type="text" maxlength=100 required>
  </div>

<div class="mb-3 row">
    <label for="form-expertise" class="form-label">Expertise</label><br>
    <small class="text-muted">Please use keywords to indicate the fields of research, types of data, computational techniques, software and/or programming languages that you have expertise in. Maximum length is 400 characters.</small>
  <small class="text-muted">To facilitate moderation, only entries in English are accepted.</small>
    <textarea id="form-expertise" name="fields[expertise]" maxlength=400 required></textarea>
  </div>

<p>By clicking "submit", you agree that the data you have entered will be incorporated in our openly accessible list of volunteer experts willing to be contacted by  scientists forced to refocus on computational work due to a crisis. You further agree to follow our <a href="code-of-conduct.html">Code of Conduct</a> and accept that your entry will be removed from the list if any Code of Conduct violations are reported.</p>

<p>Your entry will appear in the list following moderator approval. You will not receive any confirmation when your entry is approved, nor if it is rejected as spam.</p>

<p>After submitting your entry, you will have the option of joining a mailing list, which we use to share important information with listed experts, in particular the names of scientists seeking support who have been reported by a fellow expert as having violated our Code of Conduct. We recommend that you do not respond if someone who has been reported tries to get in touch with you.</p>

<p>If you wish to have your entry removed at a later point, please open an issue on the project's <a href="https://github.com/Research-Support-Network/research-support-network.github.io">GitHub repo</a> or write to <a href="mailto:expertvolunteerlist@gmail.com">expertvolunteerlist@gmail.com</a>.</p>

<p><em>If you encounter an Application Error upon submission, please come back and try again in a few hours. If the problem persists, please let us know via <a href="https://github.com/Research-Support-Network/research-support-network.github.io">GitHub</a> or <a href="mailto:expertvolunteerlist@gmail.com">email</a>.</em></p>
  
<div class="mb-3 row">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div>
</form>
