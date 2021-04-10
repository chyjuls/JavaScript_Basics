

// convert celsius to fahrenheit using the formula c= f-(32*5)/9
// convert farenheit using the formula f= c*(9/5)+32

// key: ctoFahr means the variable in celsius to be converted to farenheit,
//while ftoCel is variable in fahrenheit to be converted to celsius.
// I have declared a function for each instance....



function cToF(celsius) 
{
  var cTemp = celsius;
  var cToFahr = cTemp * 9 / 5 + 32;
  var message = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';
    console.log(message);
}

function fToC(fahrenheit) 
{
  var fTemp = fahrenheit;
  var fToCel = (fTemp - 32) * 5 / 9;
  var message = fTemp+'\xB0F is ' + fToCel + '\xB0C.';
    console.log(message);
} 

//now  input to check code....
// using // will convert answer to a whole number.

cToF(100);
fToC(100);
