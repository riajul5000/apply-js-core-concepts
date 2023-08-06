function multiplicatonOfNumbers(number){
    let result= 1;
    for( let i = 1; i <= 7; i++){
        result = result*i;
    }
    return result;
}

let result = multiplicatonOfNumbers(7);
console.log(result);