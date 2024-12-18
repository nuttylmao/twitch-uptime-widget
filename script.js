////////////////////
// URL PARAMETERS //
////////////////////

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const twitchUsername = urlParams.get("username") || '';

///////////////
// FUNCTIONS //
///////////////

async function UpdateUptime() {
    document.getElementById("uptimeLabel").innerHTML = await GetUptime();

    setTimeout(UpdateMetrics, 10000);
}

UpdateUptime();

async function GetUptime(url) {
    const response = await fetch(`https://decapi.me/twitch/uptime/${twitchUsername}`);
    const metric = await response.text();

    if (metric.includes("decapi.me"))
        return "-";
    else
        return metric;
}