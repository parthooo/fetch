const quote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => loadQuote(data))
}

const loadQuote = (data) => {
   const quoteBlock = document.getElementById('quoteBlock');
   const h3 = document.createElement('h3')
   h3.innerHTML = `Current quote: <i>"${data.quote}"</i>`;
   quoteBlock.appendChild(h3)
} 


quote();