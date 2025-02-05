const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'
const questionsEl = document.querySelector(".question");
const options = document.querySelector("#options");
const btn = document.querySelector("#btn")
const scoreEl  = document.querySelector(".score")
let score = 0;
let idx = 0;

let questionArr = [];
async function getQuestions() {
    try {
        const response = await fetch(url);
        const data = await response.json();
        const questions = data.results; // this is property of json object its return data in array
        questions.forEach((question) => {
            questionArr.push(question)
        });

        displayQuestions();
    } catch (error) {
        console.log(error);
    }
}


btn.addEventListener('click', displayQuestions)
function displayQuestions() {

    // fragment is temp memory its store all array elements
    let fragment = document.createDocumentFragment();

    options.innerHTML = ''
    // (...) sprade operator store multiple or single value in array
    let allOptions = [...questionArr[idx].incorrect_answers, questionArr[idx].correct_answer]

    // its change the position of array elements (randomdy sort elements...)
    allOptions.sort(() => Math.random() - 0.5);
    for (let i = 0; i < 4; i++) {
        let li = document.createElement('li');
        li.textContent = allOptions[i]
        li.classList.add('btn')
        li.textContent == questionArr[idx].correct_answer ?  li.id ='correct-option' :  li.id = 'incorrect-option';
        fragment.appendChild(li)
    }
    fragment.childNodes.forEach((item) =>{
     item.addEventListener('click', (e)=>{
       checkAnswer(item, e);
     })
   
    })
    
    options.appendChild(fragment);
    questionsEl.innerHTML = questionArr[idx].question;
    idx = (idx + 1) % questionArr.length;
}

function checkAnswer(item, e){
    item.id === 'correct-option' ? (item.id = 'right') : (item.id = 'wrong')
    const btns = document.querySelectorAll('.btn');
    btns.forEach(btn => {
        btn.disabled = true;
    })
    let correctAns = document.getElementById('correct-option')
    correctAns.id = 'right';
    
}

getQuestions()

