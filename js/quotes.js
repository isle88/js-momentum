const quotes = [
  {
    quote:
      "Love yourself first, and everything else falls in line. You really have to love yourself to get anything done in this world.",
    author: "Lucille Ball",
  },
  {
    quote: "Talk to yourself like someone you love.",
    author: "Brene Brown",
  },
  {
    quote: "You alone are enough, you have nothing to prove to anybody.",
    author: "Dr. Maya Angelou",
  },
  {
    quote:
      "Love yourself. Be clear on how you want to be treated. Know your worth. Always.",
    author: "Maryam Hasnaa",
  },
  {
    quote: "How you love yourself is how you teach others to love you.",
    author: "Rupi Kaur",
  },
  {
    quote:
      "If you are always trying to be normal, you will never know how amazing you can be.",
    author: "Dr. Maya Angelou",
  },
  {
    quote: "If you have the ability to love, love yourself first.",
    author: "Charles Bukowski",
  },
  {
    quote: "Seek to be whole, not perfect.",
    author: "Oprah",
  },
  {
    quote:
      "I am somebody. I am me. I like being me. And I need nobody to make me somebody.",
    author: "Louis L’Amour",
  },
  {
    quote: "Do things that make you feel good: mind, body, and soul",
    author: "Robyn Conley Downs",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = `"${randomQuote.quote}"`
author.innerText = `By ${randomQuote.author}`