const url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple'
const questionsEl = document.querySelector(".question");
const options = document.querySelector("#options");
const btn = document.querySelector("#btn")
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
    if (idx <= 9) {
        options.innerHTML = ''
        for (let i = 0; i < 3; i++) {

            let li = document.createElement('li');
            li.textContent = `${questionArr[idx].incorrect_answers[i]}`;
            options.appendChild(li);
        }
        let li = document.createElement('li');
        li.textContent = `${questionArr[idx].correct_answer}`;
        options.appendChild(li);

        questionsEl.innerHTML = questionArr[idx].question;

        idx++;
    }
    else {
        idx = 0;
    }
}

getQuestions()

