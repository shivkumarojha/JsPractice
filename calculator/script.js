const calculate = document.getElementsByClassName("calculate")
console.log(calculate)
 function calculator(operator) {
    const num1  = Number(document.getElementById("num1").value)
    const num2 = Number(document.getElementById("num2").value)

    let result
    switch (operator) {
        case "+":
            result = num1 + num2
            break;
        case "-":
            result = num1 - num2
            break;
        case "*":
            result = num1 * num2
            break
        case "/":
            result = num1 / num2
            break
    }

    document.getElementById("result").innerText = result
}