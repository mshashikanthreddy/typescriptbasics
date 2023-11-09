const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement = document.querySelector('button') !; // it recognizes HTML content , ! mark represents the expression is theoritically null but it isn't.

const numResults: Array<number> = [];
const textResults:  string[]= [];

type NumOrString = number | string ; //type alias
type Result = { val : number ; timestamp : Date};

//interfaces
interface resultObj {
    val : number;
    timestamp : Date;
}

function  add(num1: NumOrString, num2: NumOrString) {
    if(typeof num1 === 'number' && num2 === 'number')
    {
        return num1 + num2;
    }
    else if(typeof num1 === 'string' && typeof num2 === 'string')
    {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2; // if one is num and other string then we convert into num
}

function printResult(resultObj : Result) {

    console.log(resultObj.val);
}


 buttonElement.addEventListener('click' , () => {

    const num1 = num1Element.value ; // value always return the string
    const num2 = num2Element.value ;
    const result = add(+num1 , +num2); // we forced to covert to integer
    numResults.push(result as number);
    const stringResult = add(num1,num2);
    textResults.push(stringResult as string);
    console.log(stringResult);
    console.log(result);
    printResult({val : result as number , timestamp : new Date()})
    console.log(numResults , textResults);
});


const myPromise = new Promise<string>((resolve ,reject) => {
    setTimeout(() => {
        resolve('IT worked!')
    },1000);
})

myPromise.then((result) => {
    console.log(result.split('w'));
})