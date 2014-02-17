// author: Charles "Barbatos" Duprey <barbatos@f1m.fr>
// http://barbatos.fr

function getDogecoinValue() {
    var query = "https://www.dogeapi.com/wow/?a=get_current_price";
    var xhr = new XMLHttpRequest();
    xhr.open("GET", query, false);
    xhr.send();
    var dogeValue = "--";
    if (xhr.responseText.length < 15) {
        dogeValue = xhr.responseText.split(".")[1].split("00")[1]
    } else {
        dogeValue = "0"
    }
    return dogeValue
}

(function updateCounter() {
    var value = getDogecoinValue()

    chrome.browserAction.setBadgeText({
        text: value
    });

    setTimeout(updateCounter, (1000*10));
})();

chrome.browserAction.onClicked.addListener(updateCounter);
