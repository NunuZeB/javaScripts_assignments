//recursive function takes the base number and the exponential value as a parametre
function  power( base, exponent){
    if(exponent===0){
        return 1;    
    }
    //power function calls itself with minus one of the exponent number and multiply by base to get the result.
    //It returns the exponential result
   return  base * power(base, exponent-1);

};
console.log(power(-2, 5));
console.log(power(-7, 3));
console.log(power(-12, 2));
console.log(power(-9, 4));
console.log(power(-2, 4));






