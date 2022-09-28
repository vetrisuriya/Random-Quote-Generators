const quoteText = document.getElementById("quoteText");
const quoteTitle = document.getElementById("quoteTitle");
const newQuote = document.getElementById("newQuote");

const quoteUrl = "https://zenquotes.io/api/random";


(function nQ() {
    
    fetch(quoteUrl)
    .then(res => res.json())
    .then(res => console.log(res));

})();