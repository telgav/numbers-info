const fact = document.querySelector('#fact');
const inputWrapper = document.querySelector('#inputWrapper');
const labelForInput = document.querySelector('#labelForInput');
let isNumberInput = true;

const generateFact = () => {
    let val;
    const type = document.querySelector('input[name="types"]:checked').value;
    if (isNumberInput) {
        val = document.querySelector('#numberInput').value;
    }
    else {
        val = document.querySelector('#dateInput').value;
        let tempDate = val.split('-');
        val = tempDate[1] + '/' + tempDate[2];
    }
    const url = `https://numbersapi.com/${val}/${type}`;
    fetch(url)
        .then(response => response.text())
        .then(data => {
            fact.textContent = data;
        });
}

const checkDateType = () => {
    if (isNumberInput) {
        const year = new Date().getFullYear();
        const number = document.querySelector('#numberInput');
        let dateInput = document.createElement("input");
        dateInput.setAttribute('type', 'date');
        dateInput.setAttribute('class', 'form-control');
        dateInput.setAttribute('id', 'dateInput');
        dateInput.setAttribute('placeholder', 'Pick a date');
        dateInput.setAttribute("min", year + "-01-01");
        dateInput.setAttribute("max", year + "-12-31");
        number.remove();
        inputWrapper.appendChild(dateInput);
        labelForInput.textContent = 'Pick a date';
        isNumberInput = false;
    }
}

const checkNumberType = () => {
    if (!isNumberInput) {
        const date = document.querySelector('#dateInput');
        let numberInput = document.createElement("input");
        numberInput.setAttribute('type', 'number');
        numberInput.setAttribute('class', 'form-control');
        numberInput.setAttribute('id', 'numberInput');
        numberInput.setAttribute('placeholder', 'Enter a number');
        date.remove();
        inputWrapper.appendChild(numberInput);
        labelForInput.textContent = 'Enter a number';
        isNumberInput = true;
    }
}