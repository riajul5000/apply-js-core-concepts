function isLeapYear (year){
    const remainder = year % 4;
    if(remainder === 0){
        // console.log('your year is leap year', year);
        return true;
    
    }
    else{
        // console.log('your year is not leap year', year);
        return false;
    }
}

const isMyLeapYear = isLeapYear(1955);
console.log('my year:', isMyLeapYear);

const isHerLeapYear = isLeapYear(1968);
console.log('her year:', isHerLeapYear);