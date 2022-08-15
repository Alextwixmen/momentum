const quote = document.querySelector('.quote');
const author = document.querySelector('.author');
let changeQuote = document.querySelector('.change-quote');
 export default async function getQuotes() {  
    const quotes = 'data.json';
    const res = await fetch(quotes);
    const data = await res.json(); 
    let randomNumber; 
    
    function getRandomNum() {
       return randomNumber = Math.floor(Math.random() * data.length);
       
    }
    
    function getRandomQuote() {
        quote.textContent = data[randomNumber].text;
        author.textContent = data[randomNumber].author;
    }
    
    function changeQuoteByWindow() {
        getRandomNum();
        getRandomQuote();
    }
    window.onload = changeQuoteByWindow();
    
    changeQuote.addEventListener('click', () => {
        getRandomNum();
        getRandomQuote();
    });
    
  }

 getQuotes();
