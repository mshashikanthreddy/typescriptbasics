var num1Element = document.getElementById('num1');
var num2Element = document.getElementById('num2');
var buttonElement = document.querySelector('button'); // it recognizes HTML content , ! mark represents the expression is theoritically null but it isn't.
function add(num1, num2) {
    if (typeof num1 === 'number' && num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2; // if one is num and other string then we convert into num
}
buttonElement.addEventListener('click', function () {
    var num1 = num1Element.value; // value always return the string
    var num2 = num2Element.value;
    var result = add(+num1, +num2); // we forced to covert to integer
    var stringResult = add(num1, num2);
    console.log(stringResult);
    console.log(result);
});
