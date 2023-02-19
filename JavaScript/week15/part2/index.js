const input = document.getElementById('input');
const resultNumber = document.querySelector('.result_number');
const length = document.querySelector('.result_length');
const sum = document.querySelector('.result_sum');
const reverse = document.querySelector('.result_reverse');
const button = document.querySelector('.button');


button.onclick = () => {
    const numberValue = input.value;
    resultNumber.textContent = resultNumber.textContent + numberValue;

    let arrayNumbers = numberValue.split('');

    length.textContent=length.textContent + arrayNumbers.length;

    const sumNumbers = arrayNumbers.reduce(function (currentSum, item) {
        return Number(currentSum) + Number(item);
    });

    sum.textContent=sum.textContent + sumNumbers;

    arrayNumbers.reverse();
    reverse.textContent = reverse.textContent +  arrayNumbers.join('');
}