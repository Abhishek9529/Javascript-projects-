let totalBalance = 0; // its store total balance

// select all elements
const totalBalanceEl = document.getElementById("totalBalance")
const textInput = document.getElementById("textInput");
const amountInput = document.getElementById("amountInput");
const earningBtn = document.getElementById("earningBtn");
const expanseBtn = document.getElementById("expenseBtn");
const transactionList = document.getElementById("transactionList");
console.log(transactionList);

function updateTotalBalance(amount, isEarning) {
    if (isEarning) {
        totalBalance += amount;
    } else {
        totalBalance -= amount;
    }
    totalBalanceEl.textContent = totalBalance;
}

// function to add transaction
function addTransaction(text, amount, isEarning) {
    const li = document.createElement('li');
    li.textContent = `${text} : ${isEarning ? '+' : '-'} ${amount}`;
    transactionList.appendChild(li);
}


// event listiner for earning button
earningBtn.addEventListener('click', () => {
    const text = textInput.value;
    const amount = parseFloat(amountInput.value);

    if (text && amount) {
        updateTotalBalance(amount, true);
        addTransaction(text, amount, true);
        textInput.value = '';
        amountInput.value = '';
    }
});

// event listiner for expense button 
expanseBtn.addEventListener('click', () => {
    const text = textInput.value;
    const amount = parseFloat(amountInput.value);
    if (text && amount) {
        updateTotalBalance(amount, false);
        addTransaction(text, amount, false);
        textInput.value = '';
        amountInput.value = '';
    }
});



