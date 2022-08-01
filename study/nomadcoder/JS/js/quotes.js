const quotes = [
  {
    quote:"You will face many defeats in life, but never let yourself be defeated.",
    author:"Maya Angelou",
  },
  {
    quote:"The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author:"Nelson Mandela",
  },
  {
    quote:"In the end, it’s not the years in your life that count. It’s the life in your years.",
    author:"Abraham Lincoln",
  },
  {
    quote:"Life is either a daring adventure or nothing at all. ",
    author:"elen Keller",
  },
  {
    quote:"Many of life’s failures are people who did not realize how close they were to success when they gave up.",
    author:"Thomas A. Edison",
  },
  {
    quote:"Life is either a great adventure or nothing.",
    author:"Helen Keller",    
  },
  {
    quote:"All progress takes place outside the comfort zone.",
    author:"Michael John Bobak",
  },
  {
    quote:"Do not be afraid to give up the good to go for the great. ",
    author:"John D. Rockefeller",
  },
  {
    quote:"If you spend too much time thinking about a thing, you’ll never get it done.",
    author:"Bruce Lee",
  },
  {
    quote:"The course of true love never did run smooth.",
    author:"William Shakespeare",
  },
 
]

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');


// get random quotes
// console.log(Math.floor(Math.random() *10)) ==> 0-9까지 반환
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    // ceil() => 올림
    // round() => 반올림
    // floor() => 버림 

quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author; 

