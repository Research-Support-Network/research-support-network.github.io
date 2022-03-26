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
    <input id="form-name" name="fields[name]" type="text" maxlength=100 required>
  </div>

<div class="mb-3 row">
    <label for="form-affiliation" class="form-label">Affiliation</label>
    <input id="form-affiliation" name="fields[affiliation]" type="text" maxlength=100 required>
  </div>

<div class="mb-3 row">
    <label for="form-timezone" class="form-label">Timezone</label><br>
    <select id="form-timezone" name="fields[timezone]" required>
        <option disabled="disabled" selected="selected" name="">Select an option.</option>
        <optgroup label="Africa">
            <option name="Africa/Abidjan">Abidjan</option>
            <option name="Africa/Accra">Accra</option>
            <option name="Africa/Algiers">Algiers</option>
            <option name="Africa/Bissau">Bissau</option>
            <option name="Africa/Cairo">Cairo</option>
            <option name="Africa/Casablanca">Casablanca</option>
            <option name="Africa/Ceuta">Ceuta</option>
            <option name="Africa/El_Aaiun">El_Aaiun</option>
            <option name="Africa/Johannesburg">Johannesburg</option>
            <option name="Africa/Juba">Juba</option>
            <option name="Africa/Khartoum">Khartoum</option>
            <option name="Africa/Lagos">Lagos</option>
            <option name="Africa/Maputo">Maputo</option>
            <option name="Africa/Monrovia">Monrovia</option>
            <option name="Africa/Nairobi">Nairobi</option>
            <option name="Africa/Ndjamena">Ndjamena</option>
            <option name="Africa/Sao_Tome">Sao_Tome</option>
            <option name="Africa/Tripoli">Tripoli</option>
            <option name="Africa/Tunis">Tunis</option>
            <option name="Africa/Windhoek">Windhoek</option>
        </optgroup>
        <optgroup label="America">
            <option name="America/Adak">Adak</option>
            <option name="America/Anchorage">Anchorage</option>
            <option name="America/Araguaina">Araguaina</option>
            <option name="America/Argentina/Buenos_Aires">Argentina/Buenos_Aires</option>
            <option name="America/Argentina/Catamarca">Argentina/Catamarca</option>
            <option name="America/Argentina/Cordoba">Argentina/Cordoba</option>
            <option name="America/Argentina/Jujuy">Argentina/Jujuy</option>
            <option name="America/Argentina/La_Rioja">Argentina/La_Rioja</option>
            <option name="America/Argentina/Mendoza">Argentina/Mendoza</option>
            <option name="America/Argentina/Rio_Gallegos">Argentina/Rio_Gallegos</option>
            <option name="America/Argentina/Salta">Argentina/Salta</option>
            <option name="America/Argentina/San_Juan">Argentina/San_Juan</option>
            <option name="America/Argentina/San_Luis">Argentina/San_Luis</option>
            <option name="America/Argentina/Tucuman">Argentina/Tucuman</option>
            <option name="America/Argentina/Ushuaia">Argentina/Ushuaia</option>
            <option name="America/Asuncion">Asuncion</option>
            <option name="America/Atikokan">Atikokan</option>
            <option name="America/Bahia">Bahia</option>
            <option name="America/Bahia_Banderas">Bahia_Banderas</option>
            <option name="America/Barbados">Barbados</option>
            <option name="America/Belem">Belem</option>
            <option name="America/Belize">Belize</option>
            <option name="America/Blanc-Sablon">Blanc-Sablon</option>
            <option name="America/Boa_Vista">Boa_Vista</option>
            <option name="America/Bogota">Bogota</option>
            <option name="America/Boise">Boise</option>
            <option name="America/Cambridge_Bay">Cambridge_Bay</option>
            <option name="America/Campo_Grande">Campo_Grande</option>
            <option name="America/Cancun">Cancun</option>
            <option name="America/Caracas">Caracas</option>
            <option name="America/Cayenne">Cayenne</option>
            <option name="America/Chicago">Chicago</option>
            <option name="America/Chihuahua">Chihuahua</option>
            <option name="America/Costa_Rica">Costa_Rica</option>
            <option name="America/Creston">Creston</option>
            <option name="America/Cuiaba">Cuiaba</option>
            <option name="America/Curacao">Curacao</option>
            <option name="America/Danmarkshavn">Danmarkshavn</option>
            <option name="America/Dawson">Dawson</option>
            <option name="America/Dawson_Creek">Dawson_Creek</option>
            <option name="America/Denver">Denver</option>
            <option name="America/Detroit">Detroit</option>
            <option name="America/Edmonton">Edmonton</option>
            <option name="America/Eirunepe">Eirunepe</option>
            <option name="America/El_Salvador">El_Salvador</option>
            <option name="America/Fort_Nelson">Fort_Nelson</option>
            <option name="America/Fortaleza">Fortaleza</option>
            <option name="America/Glace_Bay">Glace_Bay</option>
            <option name="America/Goose_Bay">Goose_Bay</option>
            <option name="America/Grand_Turk">Grand_Turk</option>
            <option name="America/Guatemala">Guatemala</option>
            <option name="America/Guayaquil">Guayaquil</option>
            <option name="America/Guyana">Guyana</option>
            <option name="America/Halifax">Halifax</option>
            <option name="America/Havana">Havana</option>
            <option name="America/Hermosillo">Hermosillo</option>
            <option name="America/Indiana/Indianapolis">Indiana/Indianapolis</option>
            <option name="America/Indiana/Knox">Indiana/Knox</option>
            <option name="America/Indiana/Marengo">Indiana/Marengo</option>
            <option name="America/Indiana/Petersburg">Indiana/Petersburg</option>
            <option name="America/Indiana/Tell_City">Indiana/Tell_City</option>
            <option name="America/Indiana/Vevay">Indiana/Vevay</option>
            <option name="America/Indiana/Vincennes">Indiana/Vincennes</option>
            <option name="America/Indiana/Winamac">Indiana/Winamac</option>
            <option name="America/Inuvik">Inuvik</option>
            <option name="America/Iqaluit">Iqaluit</option>
            <option name="America/Jamaica">Jamaica</option>
            <option name="America/Juneau">Juneau</option>
            <option name="America/Kentucky/Louisville">Kentucky/Louisville</option>
            <option name="America/Kentucky/Monticello">Kentucky/Monticello</option>
            <option name="America/La_Paz">La_Paz</option>
            <option name="America/Lima">Lima</option>
            <option name="America/Los_Angeles">Los_Angeles</option>
            <option name="America/Maceio">Maceio</option>
            <option name="America/Managua">Managua</option>
            <option name="America/Manaus">Manaus</option>
            <option name="America/Martinique">Martinique</option>
            <option name="America/Matamoros">Matamoros</option>
            <option name="America/Mazatlan">Mazatlan</option>
            <option name="America/Menominee">Menominee</option>
            <option name="America/Merida">Merida</option>
            <option name="America/Metlakatla">Metlakatla</option>
            <option name="America/Mexico_City">Mexico_City</option>
            <option name="America/Miquelon">Miquelon</option>
            <option name="America/Moncton">Moncton</option>
            <option name="America/Monterrey">Monterrey</option>
            <option name="America/Montevideo">Montevideo</option>
            <option name="America/Nassau">Nassau</option>
            <option name="America/New_York">New_York</option>
            <option name="America/Nipigon">Nipigon</option>
            <option name="America/Nome">Nome</option>
            <option name="America/Noronha">Noronha</option>
            <option name="America/North_Dakota/Beulah">North_Dakota/Beulah</option>
            <option name="America/North_Dakota/Center">North_Dakota/Center</option>
            <option name="America/North_Dakota/New_Salem">North_Dakota/New_Salem</option>
            <option name="America/Nuuk">Nuuk</option>
            <option name="America/Ojinaga">Ojinaga</option>
            <option name="America/Panama">Panama</option>
            <option name="America/Pangnirtung">Pangnirtung</option>
            <option name="America/Paramaribo">Paramaribo</option>
            <option name="America/Phoenix">Phoenix</option>
            <option name="America/Port-au-Prince">Port-au-Prince</option>
            <option name="America/Port_of_Spain">Port_of_Spain</option>
            <option name="America/Porto_Velho">Porto_Velho</option>
            <option name="America/Puerto_Rico">Puerto_Rico</option>
            <option name="America/Punta_Arenas">Punta_Arenas</option>
            <option name="America/Rainy_River">Rainy_River</option>
            <option name="America/Rankin_Inlet">Rankin_Inlet</option>
            <option name="America/Recife">Recife</option>
            <option name="America/Regina">Regina</option>
            <option name="America/Resolute">Resolute</option>
            <option name="America/Rio_Branco">Rio_Branco</option>
            <option name="America/Santarem">Santarem</option>
            <option name="America/Santiago">Santiago</option>
            <option name="America/Santo_Domingo">Santo_Domingo</option>
            <option name="America/Sao_Paulo">Sao_Paulo</option>
            <option name="America/Scoresbysund">Scoresbysund</option>
            <option name="America/Sitka">Sitka</option>
            <option name="America/St_Johns">St_Johns</option>
            <option name="America/Swift_Current">Swift_Current</option>
            <option name="America/Tegucigalpa">Tegucigalpa</option>
            <option name="America/Thule">Thule</option>
            <option name="America/Thunder_Bay">Thunder_Bay</option>
            <option name="America/Tijuana">Tijuana</option>
            <option name="America/Toronto">Toronto</option>
            <option name="America/Vancouver">Vancouver</option>
            <option name="America/Whitehorse">Whitehorse</option>
            <option name="America/Winnipeg">Winnipeg</option>
            <option name="America/Yakutat">Yakutat</option>
            <option name="America/Yellowknife">Yellowknife</option>
        </optgroup>
        <optgroup label="Antarctica">
            <option name="Antarctica/Casey">Casey</option>
            <option name="Antarctica/Davis">Davis</option>
            <option name="Antarctica/DumontDUrville">DumontDUrville</option>
            <option name="Antarctica/Macquarie">Macquarie</option>
            <option name="Antarctica/Mawson">Mawson</option>
            <option name="Antarctica/Palmer">Palmer</option>
            <option name="Antarctica/Rothera">Rothera</option>
            <option name="Antarctica/Syowa">Syowa</option>
            <option name="Antarctica/Troll">Troll</option>
            <option name="Antarctica/Vostok">Vostok</option>
        </optgroup>
        <optgroup label="Asia">
            <option name="Asia/Almaty">Almaty</option>
            <option name="Asia/Amman">Amman</option>
            <option name="Asia/Anadyr">Anadyr</option>
            <option name="Asia/Aqtau">Aqtau</option>
            <option name="Asia/Aqtobe">Aqtobe</option>
            <option name="Asia/Ashgabat">Ashgabat</option>
            <option name="Asia/Atyrau">Atyrau</option>
            <option name="Asia/Baghdad">Baghdad</option>
            <option name="Asia/Baku">Baku</option>
            <option name="Asia/Bangkok">Bangkok</option>
            <option name="Asia/Barnaul">Barnaul</option>
            <option name="Asia/Beirut">Beirut</option>
            <option name="Asia/Bishkek">Bishkek</option>
            <option name="Asia/Brunei">Brunei</option>
            <option name="Asia/Chita">Chita</option>
            <option name="Asia/Choibalsan">Choibalsan</option>
            <option name="Asia/Colombo">Colombo</option>
            <option name="Asia/Damascus">Damascus</option>
            <option name="Asia/Dhaka">Dhaka</option>
            <option name="Asia/Dili">Dili</option>
            <option name="Asia/Dubai">Dubai</option>
            <option name="Asia/Dushanbe">Dushanbe</option>
            <option name="Asia/Famagusta">Famagusta</option>
            <option name="Asia/Gaza">Gaza</option>
            <option name="Asia/Hebron">Hebron</option>
            <option name="Asia/Ho_Chi_Minh">Ho_Chi_Minh</option>
            <option name="Asia/Hong_Kong">Hong_Kong</option>
            <option name="Asia/Hovd">Hovd</option>
            <option name="Asia/Irkutsk">Irkutsk</option>
            <option name="Asia/Jakarta">Jakarta</option>
            <option name="Asia/Jayapura">Jayapura</option>
            <option name="Asia/Jerusalem">Jerusalem</option>
            <option name="Asia/Kabul">Kabul</option>
            <option name="Asia/Kamchatka">Kamchatka</option>
            <option name="Asia/Karachi">Karachi</option>
            <option name="Asia/Kathmandu">Kathmandu</option>
            <option name="Asia/Khandyga">Khandyga</option>
            <option name="Asia/Kolkata">Kolkata</option>
            <option name="Asia/Krasnoyarsk">Krasnoyarsk</option>
            <option name="Asia/Kuala_Lumpur">Kuala_Lumpur</option>
            <option name="Asia/Kuching">Kuching</option>
            <option name="Asia/Macau">Macau</option>
            <option name="Asia/Magadan">Magadan</option>
            <option name="Asia/Makassar">Makassar</option>
            <option name="Asia/Manila">Manila</option>
            <option name="Asia/Nicosia">Nicosia</option>
            <option name="Asia/Novokuznetsk">Novokuznetsk</option>
            <option name="Asia/Novosibirsk">Novosibirsk</option>
            <option name="Asia/Omsk">Omsk</option>
            <option name="Asia/Oral">Oral</option>
            <option name="Asia/Pontianak">Pontianak</option>
            <option name="Asia/Pyongyang">Pyongyang</option>
            <option name="Asia/Qatar">Qatar</option>
            <option name="Asia/Qostanay">Qostanay</option>
            <option name="Asia/Qyzylorda">Qyzylorda</option>
            <option name="Asia/Riyadh">Riyadh</option>
            <option name="Asia/Sakhalin">Sakhalin</option>
            <option name="Asia/Samarkand">Samarkand</option>
            <option name="Asia/Seoul">Seoul</option>
            <option name="Asia/Shanghai">Shanghai</option>
            <option name="Asia/Singapore">Singapore</option>
            <option name="Asia/Srednekolymsk">Srednekolymsk</option>
            <option name="Asia/Taipei">Taipei</option>
            <option name="Asia/Tashkent">Tashkent</option>
            <option name="Asia/Tbilisi">Tbilisi</option>
            <option name="Asia/Tehran">Tehran</option>
            <option name="Asia/Thimphu">Thimphu</option>
            <option name="Asia/Tokyo">Tokyo</option>
            <option name="Asia/Tomsk">Tomsk</option>
            <option name="Asia/Ulaanbaatar">Ulaanbaatar</option>
            <option name="Asia/Urumqi">Urumqi</option>
            <option name="Asia/Ust-Nera">Ust-Nera</option>
            <option name="Asia/Vladivostok">Vladivostok</option>
            <option name="Asia/Yakutsk">Yakutsk</option>
            <option name="Asia/Yangon">Yangon</option>
            <option name="Asia/Yekaterinburg">Yekaterinburg</option>
            <option name="Asia/Yerevan">Yerevan</option>
        </optgroup>
        <optgroup label="Atlantic">
            <option name="Atlantic/Azores">Azores</option>
            <option name="Atlantic/Bermuda">Bermuda</option>
            <option name="Atlantic/Canary">Canary</option>
            <option name="Atlantic/Cape_Verde">Cape_Verde</option>
            <option name="Atlantic/Faroe">Faroe</option>
            <option name="Atlantic/Madeira">Madeira</option>
            <option name="Atlantic/Reykjavik">Reykjavik</option>
            <option name="Atlantic/South_Georgia">South_Georgia</option>
            <option name="Atlantic/Stanley">Stanley</option>
        </optgroup>
        <optgroup label="Australia">
            <option name="Australia/Adelaide">Adelaide</option>
            <option name="Australia/Brisbane">Brisbane</option>
            <option name="Australia/Broken_Hill">Broken_Hill</option>
            <option name="Australia/Darwin">Darwin</option>
            <option name="Australia/Eucla">Eucla</option>
            <option name="Australia/Hobart">Hobart</option>
            <option name="Australia/Lindeman">Lindeman</option>
            <option name="Australia/Lord_Howe">Lord_Howe</option>
            <option name="Australia/Melbourne">Melbourne</option>
            <option name="Australia/Perth">Perth</option>
            <option name="Australia/Sydney">Sydney</option>
        </optgroup>
        <optgroup label="Europe">
            <option name="Europe/Amsterdam">Amsterdam</option>
            <option name="Europe/Andorra">Andorra</option>
            <option name="Europe/Astrakhan">Astrakhan</option>
            <option name="Europe/Athens">Athens</option>
            <option name="Europe/Belgrade">Belgrade</option>
            <option name="Europe/Berlin">Berlin</option>
            <option name="Europe/Brussels">Brussels</option>
            <option name="Europe/Bucharest">Bucharest</option>
            <option name="Europe/Budapest">Budapest</option>
            <option name="Europe/Chisinau">Chisinau</option>
            <option name="Europe/Copenhagen">Copenhagen</option>
            <option name="Europe/Dublin">Dublin</option>
            <option name="Europe/Gibraltar">Gibraltar</option>
            <option name="Europe/Helsinki">Helsinki</option>
            <option name="Europe/Istanbul">Istanbul</option>
            <option name="Europe/Kaliningrad">Kaliningrad</option>
            <option name="Europe/Kiev">Kiev</option>
            <option name="Europe/Kirov">Kirov</option>
            <option name="Europe/Lisbon">Lisbon</option>
            <option name="Europe/London">London</option>
            <option name="Europe/Luxembourg">Luxembourg</option>
            <option name="Europe/Madrid">Madrid</option>
            <option name="Europe/Malta">Malta</option>
            <option name="Europe/Minsk">Minsk</option>
            <option name="Europe/Monaco">Monaco</option>
            <option name="Europe/Moscow">Moscow</option>
            <option name="Europe/Oslo">Oslo</option>
            <option name="Europe/Paris">Paris</option>
            <option name="Europe/Prague">Prague</option>
            <option name="Europe/Riga">Riga</option>
            <option name="Europe/Rome">Rome</option>
            <option name="Europe/Samara">Samara</option>
            <option name="Europe/Saratov">Saratov</option>
            <option name="Europe/Simferopol">Simferopol</option>
            <option name="Europe/Sofia">Sofia</option>
            <option name="Europe/Stockholm">Stockholm</option>
            <option name="Europe/Tallinn">Tallinn</option>
            <option name="Europe/Tirane">Tirane</option>
            <option name="Europe/Ulyanovsk">Ulyanovsk</option>
            <option name="Europe/Uzhgorod">Uzhgorod</option>
            <option name="Europe/Vienna">Vienna</option>
            <option name="Europe/Vilnius">Vilnius</option>
            <option name="Europe/Volgograd">Volgograd</option>
            <option name="Europe/Warsaw">Warsaw</option>
            <option name="Europe/Zaporozhye">Zaporozhye</option>
            <option name="Europe/Zurich">Zurich</option>
        </optgroup>
        <optgroup label="Indian">
            <option name="Indian/Chagos">Chagos</option>
            <option name="Indian/Christmas">Christmas</option>
            <option name="Indian/Cocos">Cocos</option>
            <option name="Indian/Kerguelen">Kerguelen</option>
            <option name="Indian/Mahe">Mahe</option>
            <option name="Indian/Maldives">Maldives</option>
            <option name="Indian/Mauritius">Mauritius</option>
            <option name="Indian/Reunion">Reunion</option>
        </optgroup>
        <optgroup label="Pacific">
            <option name="Pacific/Apia">Apia</option>
            <option name="Pacific/Auckland">Auckland</option>
            <option name="Pacific/Bougainville">Bougainville</option>
            <option name="Pacific/Chatham">Chatham</option>
            <option name="Pacific/Chuuk">Chuuk</option>
            <option name="Pacific/Easter">Easter</option>
            <option name="Pacific/Efate">Efate</option>
            <option name="Pacific/Enderbury">Enderbury</option>
            <option name="Pacific/Fakaofo">Fakaofo</option>
            <option name="Pacific/Fiji">Fiji</option>
            <option name="Pacific/Funafuti">Funafuti</option>
            <option name="Pacific/Galapagos">Galapagos</option>
            <option name="Pacific/Gambier">Gambier</option>
            <option name="Pacific/Guadalcanal">Guadalcanal</option>
            <option name="Pacific/Guam">Guam</option>
            <option name="Pacific/Honolulu">Honolulu</option>
            <option name="Pacific/Kiritimati">Kiritimati</option>
            <option name="Pacific/Kosrae">Kosrae</option>
            <option name="Pacific/Kwajalein">Kwajalein</option>
            <option name="Pacific/Majuro">Majuro</option>
            <option name="Pacific/Marquesas">Marquesas</option>
            <option name="Pacific/Nauru">Nauru</option>
            <option name="Pacific/Niue">Niue</option>
            <option name="Pacific/Norfolk">Norfolk</option>
            <option name="Pacific/Noumea">Noumea</option>
            <option name="Pacific/Pago_Pago">Pago_Pago</option>
            <option name="Pacific/Palau">Palau</option>
            <option name="Pacific/Pitcairn">Pitcairn</option>
            <option name="Pacific/Pohnpei">Pohnpei</option>
            <option name="Pacific/Port_Moresby">Port_Moresby</option>
            <option name="Pacific/Rarotonga">Rarotonga</option>
            <option name="Pacific/Tahiti">Tahiti</option>
            <option name="Pacific/Tarawa">Tarawa</option>
            <option name="Pacific/Tongatapu">Tongatapu</option>
            <option name="Pacific/Wake">Wake</option>
            <option name="Pacific/Wallis">Wallis</option>
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
