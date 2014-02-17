// author: Charles "Barbatos" Duprey <barbatos@f1m.fr>
// http://barbatos.fr

function getDogecoinValue() {
    var query = "https://www.dogeapi.com/wow/?a=get_current_price";
    var xhr = new XMLHttpRequest();

    xhr.open("GET", query, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var dogeValue = "--";
                if (xhr.responseText.length < 25) {
                    dogeValue = xhr.responseText
                } else {
                    dogeValue = "0"
                }
                var dogeValueDiv = document.getElementById("dogeValue");
                dogeValueDiv.innerHTML = "<strong>"+dogeValue+"</strong> USD";
            }
        }
    };
    xhr.send();
}

function getDogeBitcoinValue() {
    var query = "https://www.dogeapi.com/wow/?a=get_current_price&convert_to=BTC";
    var xhr = new XMLHttpRequest();

    xhr.open("GET", query, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var dogeBitcoin = "--";
                if (xhr.responseText.length < 25) {
                    dogeBitcoin = xhr.responseText
                } else {
                    dogeBitcoin = "0"
                }
                var dogeBitcoinDiv = document.getElementById("dogeBitcoin");
                dogeBitcoinDiv.innerHTML = "<strong>"+dogeBitcoin+"</strong> BTC";
            }
        }
    };
    xhr.send();
}

function onLoad() {
    var dogeValue = getDogecoinValue()
    var dogeBitcoinValue = getDogeBitcoinValue()
}

window.addEventListener('DOMContentLoaded', onLoad, false);
