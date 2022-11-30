/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
    {
        quote: 'I am not afraid of storms, for I am learning how to sail my ship.',
        source: 'Louisa May Alcott',
        citation: 'Little Women',
        year: 1869,
        tag: 'Storm'
    },
    {
        quote: 'It\'s the possibility of having a dream come true that makes life interesting.',
        source: 'Paulo Coelho',
        citation: 'The Alchemist'
    },
    {
        quote: `What's the point of having a voice if you're gonna be silent in those moments you shouldn't be?`,
        source: 'Angie Thomas',
        citation: 'The Hate U Give'
    },
    {
        quote: 'Truth can only be found in one place: the code',
        source: 'Robert C. Martin',
        year: 1989
    },
    {
        quote: 'Anything worth dying for is certainly worth living for.',
        source: 'Joseph Heller',
        citation:  `Catch-22`
    }
];

/***
 * `getRandomQuote` function randomNumber variable collects a random number with the length of the quotes objects. I'm then returning one of the quote objects with the index of the random number
***/
function getRandomQuote(){
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber];
}

getRandomQuote();

/***
 * `printQuote` function. This function builds the string. Thre is always a quote and a source so they are together. If there is a citation or year they are also added. I am logging situations where there are no year or citation.
 * at the end Im taking my variable stringElements and injecting into the HTML of the 'quote-box'.
***/
function printQuote() {
    const randomQuote = getRandomQuote();
    let stringElements = `
        <p class="quote">${randomQuote.quote}</p>
        <p class="source">${randomQuote.source}
        `
    if (randomQuote.citation) {
        stringElements += `<span class="citation">${randomQuote.citation}</span>`;
    } else {
        console.log('no citation');
    }

    if (randomQuote.year) {
        stringElements += `<span class="year">${randomQuote.year}</span>`;
    } else {
        console.log('no year');
    }

    if (randomQuote.tag) {
        stringElements += `<span class="tag">${randomQuote.tag}</span>`;
    } else {
        console.log('no citation');
    }

    stringElements += `</p>`;

    document.getElementById('quote-box').innerHTML = stringElements;
}

printQuote();
/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);