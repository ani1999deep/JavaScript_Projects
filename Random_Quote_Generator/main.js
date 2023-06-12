let btn = document.getElementById("btn");
let output = document.getElementById("output");
let quotes = [
  "Nelson Mandela:Education is the most powerful weapon which you can use to change the world.",
  "Winston Churchill: Attitude is the 'little' thing that makes a big difference.",
  "Walt Disney:All our dreams can come true — if we have the courage to pursue them.",
  "Thomas Edison: Opportunity is missed by most people because it is dressed in overalls and looks like work.",
  "Steve Jobs:The people who are crazy enough to think they can change the world are the ones who do.",
  "Esteé Lauder: I never dreamed about success. I worked for it.",
  "Albert Einstein:A person who never made a mistake never tried anything new.",
  "Anne Heche: We do not fall in love with the package of the person; we fall in love with the inside of a person.",
  "James Caan: My least favorite phrase in the English language is 'I don't care.'",
  "The Dalai Lama: Happiness is not something readymade; it comes from your own actions.",
];

btn.addEventListener('click',function(){

      var randomQuote=quotes[Math.floor(Math.random()*quotes.length)]
      output.innerHTML=randomQuote;
})