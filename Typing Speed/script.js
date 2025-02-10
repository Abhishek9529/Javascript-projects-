let showParagraph = document.querySelector('#para')
let result = document.querySelector('#result')
let displayCurrentTime = document.querySelector('.timer')
let totalTimeEl = document.querySelector('#totalTime')
let timer = 0;
let interval;

let paragraph = ''
const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';
const options = { method: 'GET', headers: { accept: 'application/json' } };

const getdata = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (data && data.data && data.data.content) {
      paragraph = data.data.content
      showParagraph.textContent = paragraph
    }
    else{
      console.log('Paragraph Loading...');
    }
  } catch (error) {
    console.error(error);
  }
}
getdata()

const form = document.querySelector('form');
form.addEventListener('submit', (e) => {

  e.preventDefault();
  clearInterval(interval);

  totalTimeEl.textContent = timer

  let inputText = document.getElementById('inputtext').value.trim().toLowerCase()
  let originalText = paragraph.trim().toLowerCase()

  if (inputText === originalText) {
    result.textContent = 'Nice type'
    result.style.color = 'green'
  }
  else {
    result.textContent = 'Bad type'
    result.style.color = 'red'
  }

})

const startTime = () => {
  timer = 0;
  // displayCurrentTime.textContent = timer
  // displayCurrentTime.style.color = 'red'

  interval = setInterval(() => {
    displayCurrentTime.textContent = timer
    timer++;
    displayCurrentTime.style.color = 'red'
  }, 1000)
};

document.getElementById('inputtext').addEventListener('focus', startTime)

