//inch to feet convert useing variable & function
var inch = 156;
var feet = inch / 12;
console.log(feet);
console.log(feet);
console.log(feet);

//using function
function inchToFeet(inch){
    var feet = inch / 12; 
    return feet;
}
var parsonOneFeet = inchToFeet(156);
console.log(parsonOneFeet);

var parsonTwoFeet = inchToFeet(288);
console.log(parsonTwoFeet);

var parsonThreeFeet = inchToFeet(300);
console.log(parsonThreeFeet);