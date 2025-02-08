const boxes = document.querySelectorAll('.btn')
const reset = document.querySelector('#reset')
console.log(boxes);
let trunO = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]
console.log(winPatterns[1]);


boxes.forEach((btn) => {
    btn.innerText = ''
    btn.addEventListener('click', (e) => {
        if (trunO) {
            btn.textContent = 'o';
            trunO = !trunO;

        }
        else {
            btn.textContent = 'x';
            trunO = !trunO;

        }
        btn.disabled = true
        checkWinner();
    })
})

function enableAll(){
    boxes.forEach((box)=>{
        box.textContent = '';
        box.disabled = false;
    })
}
function disableAll() {
    boxes.forEach((box) => {
        box.disabled = true;
    })
}

reset.addEventListener('click', ()=>{
    enableAll();
})

function checkWinner() {
    for (pattern of winPatterns) {
        let position1Val = boxes[pattern[0]].innerText;
        let position2Val = boxes[pattern[1]].innerText;
        let position3Val = boxes[pattern[2]].innerText;
        if (position1Val != '' && position2Val != '' && position3Val != '') {
            if (position1Val === position2Val && position2Val === position3Val) {
                console.log(`${position1Val} is winner `);
                disableAll()
            }

        }

    }

}