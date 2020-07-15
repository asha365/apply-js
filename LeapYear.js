//console.log(2020/4)
/*const year = 3566; 
console.log(3566/4);    // not leap year
console.log(3566 % 4);   //not leap year
console.log(3544 % 4);   //this is leap year*/ 

//const year = 3544; 
//console.log(year % 4);


//const year = 3996; 
//const remainder = year % 4;
//console.log(remainder==0);


/*const year = 3996; 
const remainder = year % 4; 
if(remainder == 0){
    console.log('Your year is a leap year');
}
else{
    console.log('Your year is not a leap year');

}*/

 /*const year = 3995; 
const remainder = year % 4; 
if(remainder == 0){
    console.log('Your year is a leap year');
}
else{
    console.log('Your year is not a leap year');

}*/ 

function isLeapYear(year){
        const remainder = year % 4; 
        if(remainder == 0){
            return true;
        }
        else{
            return false;
    
    }  
}

const check2000 = isLeapYear(1700); 
console.log(check2000);