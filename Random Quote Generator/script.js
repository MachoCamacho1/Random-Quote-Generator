const quotes = [ 
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The harder the conflict, the more glorious the triumph. - Thomas Paine",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "Do not watch the clock; do what it does. Keep going. - Sam Levenson",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "You miss 100% of the shots you dont take. - Wayne Gretzky",
    "It does not matter how slowly you go as long as you do not stop. - Confucius",
    "Start where you are. Use what you have. Do what you can. - Arthur Ashe",
    "The best way to predict the future is to create it. - Peter Drucker"
    ];

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote");

function generateQuote() {
// if statement makes sure we can continue to generate quote(doesn't freeze up)    
    if(usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }
//while loop makes sure quotes do not repeat same quote
    while (true) {
        const randomIdx = Math.floor(Math.random() * quotes.length);

        if(usedIndexes.has(randomIdx)) continue

        const quote = quotes[randomIdx];
        quoteElement.innerHTML = quote;
        usedIndexes.add(randomIdx)
        break;
    }
}