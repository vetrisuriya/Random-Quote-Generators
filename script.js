const quoteText = document.getElementById("quoteText");
const quoteTitle = document.getElementById("quoteTitle");
const newQuote = document.getElementById("newQuote");
const quoteShare = document.getElementById("quoteShare");


async function nQ() {
    const response = await fetch("https://api.quotable.io/random");
    const data = await response.json();
    if (response.ok) {
        quoteText.textContent = data.content;
        quoteTitle.textContent = data.author;

        quoteShare.href="https://twitter.com/intent/tweet/?text="+data.content;
    } else {
        quoteText.textContent = "An error occured";
        console.log(data);
    }
}

newQuote.addEventListener("click", nQ);
nQ();