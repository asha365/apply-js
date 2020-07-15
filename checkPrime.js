/*var n = 18;
for(i= 2; i < n-1; i++){
    //console.log(i, n / i);
    console.log(i, n % i);
    if(n%i ==0){
        console.log('not a prime number')
        break;
    }
}*/

/*var n = 79;
for(i= 2; i < n; i++){
    //console.log(i, n % i);
    if(n % i == 0){
        console.log('not a prime number')
        break;
    }
}
console.log('Your number is a prime number')*/


/*var n = 97;
for(i= 2; i < n; i++){
    //console.log(i, n % i);
    if(n % i == 0){
        console.log('not a prime number')
        break;
    }
}
console.log('Your number is a prime number')*/

/*var n = 128;
for(i= 2; i < n; i++){
    //console.log(i, n % i);
    if(n % i == 0){
        console.log('not a prime number')
        break;
    }
}
console.log('Your number is a prime number')*/


function isPrime(n){
    for(i= 2; i < n; i++){
        if(n % i == 0){
           return 'not a prime number';
     
        }
    }
    return 'your number is a prime number'
}
var result = isPrime(129);
console.log(result);
