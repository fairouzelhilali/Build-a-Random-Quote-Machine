const quotes = [
  { text: "Be yourself; everyone else is already taken.", author: "Oscar Wilde" },
  { text: "So many books, so little time.", author: "Frank Zappa" },
  { text: "Be the change that you wish to see in the world.", author: "Mahatma Gandhi" },
  { text: "In the middle of difficulty lies opportunity.", author: "Albert Einstein" },
  { text: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" }
];

const text = document.getElementById("text");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const tweetQuote = document.getElementById("tweet-quote");

function randomColor() {
  const colors = ["#16a085", "#2980b9", "#8e44ad", "#e74c3c", "#2ecc71", "#f39c12"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function setQuote() {
  const q = quotes[Math.floor(Math.random() * quotes.length)];

  text.textContent = `"${q.text}"`;
  author.textContent = `- ${q.author}`;

  const color = randomColor();
  document.body.style.background = color;
  document.getElementById("quote-box").style.color = color;

  tweetQuote.href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    q.text + " - " + q.author
  )}`;
}

setQuote();

newQuoteBtn.addEventListener("click", setQuote);
