
function toEnglish(num){

    const tens = { '1': 'ten', '2' : 'twenty', '3' : 'thirty', '4': 'forty', '5': 'fifty', '6': 'sixty', '7' : 'seventy', '8' : 'eighty', '9' : 'ninety'}

    const number = num.toString()
    return number;

}


let ans = toEnglish(123)
console.log( ans )