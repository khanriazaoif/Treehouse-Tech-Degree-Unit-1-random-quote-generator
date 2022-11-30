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
        quote: 'Programming isn\'t about what you know; it\'s about what you can figure out.',
        source: 'Chris Pine',
        citation: 'Learn to Program',
        year: 1986
    },
    {
        quote: 'The only way to learn a new programming language is by writing programs in it.',
        source: 'Dennis Richie',
        citation: 'C Programming Language',
        year: 1988

    },
    {
        quote: `Sometimes it's better to leave something alone, to pause, and that's very true of programming.`,
        source: 'Joyce Wheeler',
        citation: 'Random Programming Book',
        year: 1976

    },
    {
        quote: 'Truth can only be found in one place: the code',
        source: 'Robert C. Martin',
        citation: 'Learn to Program with me',
        year: 1989
    },
    {
        quote: 'Testing leads to failure, and failure leads to understanding.',
        source: 'Burt Rutan',
        citation:  `He's smart`,
        year: 1986
    }
];

// console.log(`This log is on line #48 (${quotes})`);
// console.log(quotes);
/***
 * `getRandomQuote` function
***/
let getRandomQuote = function(){
    const randomNumber = Math.floor(Math.random() * quotes.length);
    // console.log(randomNumber);
    return quotes[randomNumber].quote;
}

// console.log(quotes[0].citation); //Always returns Learn to Program

// console.log(getRandomQuote()); // Always returns a number

console.log(getRandomQuote());
// console.log(getRandomQuote()); // Always returns a number

const randomNumber = getRandomQuote();


// console.log(getRandomQuote());
/***
 * `printQuote` function
***/
<<<<<<< Updated upstream

console.log(getRandomQuote());
=======



let printQuote = function(){
    const randomQuote = getRandomQuote;
    let stringElements = `
        <p className="quote">  </p>
        <p className="source"> quote source
        `
    // console.log(getRandomQuote()); // Always returns a number
    // console.log(quotes[getRandomQuote()].citation); // DOESN'T Always returns a citation looping through. Sometimes it works, others it doesn't.
    if (quotes[getRandomQuote()].citation) {
        // console.log(`${stringElements}`);

            stringElements+= `<span class="citation"> quote citation </span>`
    // console.log(stringElements);
    } else {
        // console.log('no citation');
    }

    if (quotes[getRandomQuote()].year) {
        stringElements+= `<span class="year"> quote year </span></p>`
        console.log(stringElements);
    }
    document.getElementById('quote-box').innerHTML = stringElements;
    return stringElements;
}
const quote = printQuote();
console.log(printQuote());

printQuote()

// document.getElementById('quote-box').innerHTML = printQuote();

>>>>>>> Stashed changes

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

// document.getElementById('load-quote').addEventListener("click", printQuote, false);


















