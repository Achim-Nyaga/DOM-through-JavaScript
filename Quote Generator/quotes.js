// VARIABLES

let btn = document.querySelector('#new-quote');
let quote = document.querySelector('.quote');
let person = document.querySelector('.person');


const quotes = [{
    quote:'"The best way to find yourself is to lose yourslef in the service of others."',
    person: 'Mahatma Gandhi'
},{
    quote: '"If you want to live a happy life, tie it to a goal, not to people or things."',
    person: ' Albert Einstein'
},{
    quote:'"May the Force be with you."',
    person: 'Star Wars (Many characters)'
},{
    quote: '"Life is like riding a bicycle. To keep your balance, you must keep moving."',
    person: ' Albert Einstein'
},{
    quote:'No one can make you feel inferior without your consent."',
    person: 'Eleanor Roosevelt'
},{
    quote: '"Not all those who wander are lost."',
    person: ' J.R.R.Tolkein'
},{
    quote:'"Keep your friends close, but your enemies closer."',
    person: 'Michael Corleone'
},{
    quote: '"Two roads diverged in a wood, and I, I took the one less travelled by, and that has made all the difference."',
    person: ' Robert Frost'
},{
    quote: '"What doesn't kill us makes us stronger."',
    person: ' Freidrich Nietzsche'
},{
    quote: '"You must be the change you wish to see in the world."',
    person: ' Mahatma Gandhi'
}, ];

btn.addEventListener('click', function(){

    let random = Math.floor(Math.random() * quotes.length);

    quote.InnerText = quotes[random].quote;
    person.InnerText = quotes[random].person;

});