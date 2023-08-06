// function getSum(numbers){
//     console.log(numbers);
// }

// 
// const myNumbers =[12,65,45,78,32,42,11];
// getSum(myNumbers);


function getSumOfAnArray(numbers){
    let sum = 0;
    for(let i= 0; i < numbers.length; i++){
        const index = i ;
        const element = numbers[index];
        // console.log(index, element);
    }
    return sum;
}

function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
        }
    }
}

const myNumbers =[12,65,45,78,32,42,11];
getOddNumbersOfAnArray(myNumbers);
getSumOfAnArray(myNumbers);