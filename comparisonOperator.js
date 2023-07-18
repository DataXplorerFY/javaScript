var a=3;
console.log(a==3);

var b=10;
console.log(b!=10);


var c= "10";
console.log(c===10);

var d="20";
console.log("D == 20",d===20);

 var e = 50;
 console.log(e!==40);

// Check if two numbers are equal and print a message accordingly.
var a=10;
var b=20;
if(a===b){
    alert("The above two numbers are equal in data type and also value!");
}else{
    alert("The above two numbers are different in data type and valuses");
}


// Determine if a given string is longer than 10 characters.
var string=prompt("Enter a string?");

if (string.length>10){
    console.log("The above string GREATER then 10 character");
} else{
    console.log("Smaller then 10 characters");
}

// Check if a variable is a number and greater than 100.

var num= prompt("Enter your number?");
var intnum=parseInt(num);
if(typeof intnum ==="number" && intnum>100){
    console.log("Value entered is 'Number' and 'Greater' then 100")
}else {
    console.log("The value is either not a number or not greater than 100.");
  }


// Determine if a given year is a leap year.
var year= prompt("Enter your year?");
var intyear=parseInt(year);
if(intyear%4 == 0){
    console.log("The entered year is leap year!");
}else{
    console.log("The entered year is NOT  a leap year!");
}