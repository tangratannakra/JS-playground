const quotes = [{
    author: 'Stephen King',
    quote: 'Get busy living or get busy dying'
},
{
    author: 'John F.Kennedy',
    quote: 'Those who dare to fail miserably can achieve greatly'
},
{
    author: 'Leonardo Da Vinci',
    quote: 'It had come to my attention that people of accomplishment rarely sat back and let things happen to them. They went out and happened to things'
}
];

//selecting html elements
const quotesBtn = document.getElementById('quoteBtn');
const quoteAuthor = document.querySelector('.author');
const quote = document.querySelector('.quote');


function randomQuote(){
    //randomly select the object
    let selectQuote = Math.floor(Math.random() * quotes.length );
    let randomQuote = quotes[selectQuote];
    
    //adding the quote to the screen
    quoteAuthor.innerHTML = randomQuote.author;
    quote.innerHTML = randomQuote.quote;

}
//when clicked the button should execute the function randomQuote
quotesBtn.addEventListener('click', randomQuote);