const text = document.querySelector("#text");
const amount = document.querySelector("#amount");
const earn = document.querySelector("#earnBtn");
const expanse = document.querySelector("#expBtn");
const form = document.querySelector("#transactionForm")
let balance = 0;
// let earning = 0;

const renderTransactions = () => {
    const transactionContainerEl = document.querySelector(".transactions")
    const netAmountEl = document.querySelector('#totalBalance')
    const earningEl = document.querySelector('#earning')
    const expenseEl = document.querySelector('#expanse')
    const transactios = state.transactions
    let earning = 0;
    let expense = 0;
    let net = 0;

    transactionContainerEl.innerHTML = ""
    transactios.forEach((transaction) => {
       const {id, amount, text, type} = transaction;
       const isCredit = type === "credit" ? true : false;
       const sign = isCredit ? "+" :  "-";
       

        const transactionEl = `
            <div class="transaction" id="${id}">
                <p>${text}</p>
                <h3> ${sign}  $ ${amount}</h4>
                <h3 id="status" class = "${isCredit ? "credit" : "debit"}">${isCredit ? "C" : "D"}</h3>
            </div>
        `;

        earning += isCredit ? amount :0;
        expense += !isCredit ? amount :0;
        net = earning - expense;
        transactionContainerEl.insertAdjacentHTML('afterbegin', transactionEl)
    })
     netAmountEl.textContent = Number(net);
     earningEl.innerHTML = `${earning}`;
     expenseEl.innerHTML = `${expense}`


}

function totalBalance(balance) {
    console.log(balance);
    document.querySelector('#totalBalance').textContent = balance;
}

function earning(amount) {
    let earning = amount;
    balance += Number(earning);
    console.log(earning);
    totalBalance(balance);
}

function expense(amount) {
    let expe = amount;
    balance -= Number(expe);
    console.log(balance);
    totalBalance(balance);
}

// global state


function transactionHistory(data, type) {
    let text = data.text;
    let amount = data.amount;
    let tType = type;
    console.log(`${text} : ${amount}, ${tType}`);
}

const addTransactions = ((e) => {
    e.preventDefault();
    let isEarn = true;

    const formData = new FormData(form);
    const tData = {};
    formData.forEach((value, key) => {
        tData[key] = value;
    });

    if (e.submitter.id === "earnBtn") {
        isEarn = true;
        // earning(tData.amount)
        // transactionHistory(tData, "Credit")
    }
    else {
        isEarn = false
        // expense(tData.amount)
        // transactionHistory(tData, "Debit")
    }

    const { text, amount } = tData;
    const transaction = {
        id: Math.floor(Math.random() * 9999),
        text: text,
        amount: +amount,
        type: isEarn ? "credit" : "debit"
    }

    state.transactions.push(transaction)
    renderTransactions()

    console.log({ state });

})

const state = {
    earnings: 0,
    expense: 0,
    net: 0,
    transactions: [
{
    id: Math.floor(Math.random() * 9999),
    text: "example",
    amount: 10,
    type: "credit" 
}
    ]
}

renderTransactions()

form.addEventListener('submit', addTransactions);

