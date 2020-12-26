let Btn = document.getElementById("generate-btn");
let quote = document.getElementById("quote");

const quotes = [
    {   quote: "Imperfection is beauty; madness is genius. And it's better to be absolutely ridiculous than boring.",
        author: "Marilyn Monroe"},
    {   quote: "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway.",
        author: "Earl Nightingale"},
    {   quote: "They say that the best blaze burns brightest, when circumstances are at their worst.",
        author: "Sohpie Hatter (Howl's Moving Castle"},
    {   quote: "Life is suffering. It is hard. The world is cursed. But still you find reasons to keep living.",
        author: "Osa (Princess Monoke)"}
];

//separate the quote and author, use .textcontent for each

document.querySelector("author");
Btn.addEventListener("click", generateBtn);

function generateBtn() {

    let numOfQuotes = quotes.length;
    let RandomFloat = (Math.random() * numOfQuotes);
    let RandomWholeNum = Math.floor(RandomFloat);
    console.log(quotes[RandomWholeNum]);

}

