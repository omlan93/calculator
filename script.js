let ans = 0;
let signPressed = false;
let signType;
let firstOperand = {
    value: 0,
    state: false,
};

let secondOperand = {
    value: 0,
    state: false,
};

let equalPressed = false;

// Helper function to fix floating-point precision issues
const fixPrecision = (num) => {
    return Math.round((num + Number.EPSILON) * 100000000) / 100000000;
};

const buttons = document.querySelectorAll("button")
const display = document.querySelector(".display")
console.log(buttons);
console.log("object");

const showOnDisplay = function (e) {
    if (e.target.textContent === "DEL") {
        display.textContent = display.textContent.replace(display.textContent[display.textContent.length - 1], '')
    }

    else if (e.target.textContent === "AC") {
        display.textContent = '';
        ans = 0;
        signPressed = false;
        equalPressed = false;
        firstOperand.value = 0;
        secondOperand.value = 0;
        firstOperand.state = false;
        secondOperand.state = false;
    }

    else if (e.target.textContent === "=") {
        equalPressed = true;

        if ((firstOperand.state === true) && (signPressed === false)) {
            secondOperand.value = parseFloat(display.textContent)
            secondOperand.state = true;
            console.log(firstOperand.value);
            console.log(secondOperand.value);
            console.log(typeof (firstOperand.value));
            console.log(typeof (secondOperand.value));
            const result = fixPrecision(firstOperand.value + secondOperand.value);
            display.textContent = result;
            firstOperand.state = false;
        }
        ans = parseFloat(display.textContent);

    }

    else if (e.target.textContent === "+") {

        if ((firstOperand.state === true) && (signPressed === false)) {
            secondOperand.value = parseFloat(display.textContent)
            secondOperand.state = true;

            const result = fixPrecision(firstOperand.value + secondOperand.value);
            display.textContent = result;
            signPressed = false;
        }

        signType = "+";
        firstOperand.value = parseFloat(display.textContent);
        firstOperand.state = true;
        console.log(firstOperand.value);
        console.log(secondOperand.value);
        signPressed = true;
    }

    else {
        if ((signPressed === true) || (equalPressed === true)) {
            console.log("enter");
            display.textContent = '';
            signPressed = false;
            equalPressed = false;
        }
        display.textContent += e.target.textContent;
    }
}

buttons.forEach(btn => btn.addEventListener('click', showOnDisplay))