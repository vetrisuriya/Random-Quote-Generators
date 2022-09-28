const quoteText = document.getElementById("quoteText");
const quoteTitle = document.getElementById("quoteTitle");
const newQuote = document.getElementById("newQuote");

const quoteUrl = "https://zenquotes.io/api/random";


(function nQ() {
    
    const xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this.responseText);
        }
    };
    xmlHttp.open("GET", quoteUrl, true);
    xmlHttp.setRequestHeader("content-type", "application/json");
    xmlHttp.send();

})();