const quotes = [
    {
        quoteText: 'I have learned over the years that when one’s mind is made up, this diminishes fear.',
        quoteAuthor: 'Rosa Parks'
    },
    {
        quoteText: 'All our dreams can come true, if we have the courage to pursue them.',
        quoteAuthor: 'Walt Disney'
    },
    {
        quoteText: 'The secret of getting ahead is getting started.',
        quoteAuthor: 'Mark Twain'
    },
    {
        quoteText: 'Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.',
        quoteAuthor: 'Mary Kay Ash'
    },
    {
        quoteText: 'Those who can imagine anything can create the impossible.',
        quoteAuthor: 'Alan Turing'
    }
]

window.onload = function(){
    
}


function fetchQuote() {
    let quoteIndex = getRandomInt(0, quotes.length - 1)
    let quoteText = quotes[quoteIndex].quoteText
    let quoteAuthor = quotes[quoteIndex].quoteAuthor

    let textCounainer = document.getElementById('text');
    let authorContainer = document.getElementById('author');
    textCounainer.innerHTML = quoteText;
    authorContainer.innerHTML = quoteAuthor;
    // console.log(quotes[quoteIndex].quoteText);
    // console.log(authorContainer)
    tweeterQuote(quoteText,quoteAuthor)
     
}

//generating random numbers in a limited max, because by default Math.random would get only (between 0-1);
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function tweeterQuote(text,author) {
    let quoteTweetLink = document.getElementById('tweet-quote')
    quoteTweetLink.setAttribute('href', `https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${text}${author}"`)
}

//to fill the quotes text and author for the first time
fetchQuote();