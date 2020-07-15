//3! = 1*2*3
//4! = 1*2*3*4
//5! = 1*2*3*4*5

/*for(var i = 1; i < 10; i++){
    console.log(i);
}*/

var factorial = 1; 
for(var i = 1; i <= 10; i++){
    factorial = factorial * i; 
    console.log(i, factorial);
}

var factorial = 1; 
for(var i = 1; i <= 50; i++){
    factorial = factorial * i; 
    console.log(i, factorial);
} 

//using function
function factorial(n){
    var factorial = 1; 
    for(var i = 1; i <= n ; i++){
    factorial = factorial * i; 
    console.log(i, factorial);
} 
    return factorial;
}
 var result = factorial(10);
 console.log(result) ;