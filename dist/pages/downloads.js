"use strict";(function(){var HYPERIUM_LATEST_VERSION_URL="https://api.hyperium.cc/versions";var showHyperiumLatestVersion=function showHyperiumLatestVersion(latestVersion){document.querySelector("div#latest-version-card a.mdc-button").setAttribute("href","https://sk1er.club/file_download?url="+latestVersion.url);var versionString="Version "+latestVersion.build;versionString+=" build "+latestVersion.id;document.querySelector("div#latest-version-card .hyperium-card__secondary").textContent=versionString};fetchJson(HYPERIUM_LATEST_VERSION_URL,function(data,error){if(error){var cachedObject=localStorage.getItem("hyperiumLatestVersion");if(cachedObject&&cachedObject.length>0){showHyperiumLatestVersion(JSON.parse(cachedObject))}return}localStorage.setItem("hyperiumLatestVersion",JSON.stringify(data.latest));showHyperiumLatestVersion(data.latest)})})();