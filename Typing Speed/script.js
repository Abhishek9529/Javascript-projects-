let showParagraph = document.querySelector('#originalText');
let result = document.querySelector('#result');
let displayCurrentTime = document.querySelector('.timer');
let totalTimeEl = document.querySelector('#totalTime');
let accuracyEl = document.querySelector('#accuracy');
let outputEl = document.querySelector('.output')
let typingSpeedEl = document.querySelector('#typingSpeed');
let timer = 0;
let interval;
let sTime, eTime;

let paragraph = ''
const url = 'https://api.freeapi.app/api/v1/public/quotes/quote/random';
const options = { method: 'GET', headers: { accept: 'application/json' } };

const getdata = async () => {
  try {
    const response = await fetch(url, options);
    const data = await response.json();

    if (data && data.data && data.data.content) {

      paragraph = await data.data.content
      if (!showParagraph) {
        console.log('paragraph not found...');

      }
      showParagraph.textContent = paragraph
    }
    else {
      console.log('Paragraph Loading...');
    }
  } catch (error) {
    console.error(error);
  }
}
getdata()

const form = document.querySelector('form');


if (form) {
  form.addEventListener('submit', (e) => {
    let correctWord = 0;
    let totalWord;
    eTime = Date.now();
    e.preventDefault();
    clearInterval(interval);


    let inputText = document.getElementById('inputtext').value.trim().toLowerCase().split(" ").filter(word => word !== "")

    let originalText = paragraph.trim().toLowerCase().split(" ").filter(word => word !== "")
    totalWord = originalText.length;


    let output = "";
    for (let i = 0; i < originalText.length; i++) {

      if (inputText[i] === originalText[i]) {
        output += inputText[i] + " ";
        correctWord += 1;
      }
      else {
        output += `<span id = "red">${inputText[i]}</span>` + " ";
      }
    }
    outputEl.innerHTML = output;
    let totalTime = ((eTime - sTime) / 1000).toFixed(2)

    let wpm = (inputText.length / totalTime) * 60;
    typingSpeedEl.textContent = wpm.toFixed(2);

    totalTimeEl.textContent = totalTime;
    accuracyEl.textContent = ((correctWord / totalWord) * 100).toFixed(2)

  })

}
else {
  console.log('form not found...');
}

const startTime = () => {
  sTime = Date.now()
};

document.getElementById('inputtext').addEventListener('focus', startTime)




