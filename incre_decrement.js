// increment 
// post increment
var a=10;
a++
console.log(a); // output will be 11
// prefix increment
var b= 20;
++b
console.log(b); //output will be 21


// decrement 
// post decrement
var c= 9;
c--
console.log(c); // output will be 8

//  prefix decrement

var d=5;
--d
console.log(d);


// When we use the another vvariable to store the value of increment or decreement then ot will gives different results
// Example 1 by post increment
var age=23;
var newAge= age++;
console.log(age); // output will be 24
console.log(newAge);  // output will be 23


// Example 2 by prefix increment

var height= 6;
var newHeight= ++height; 
console.log(height); // output will be 7
console.log(newHeight);// output will be 7 


// Example 3 by post decrement

var marks=30;
var newMarks= marks--;
console.log(marks); // output will be 29
console.log(newMarks); // output will be 30


// Example 4 by prefix decrement

var sub=100;
var newSubject= --sub;
console.log(sub);// output will be 99

console.log(newSubject);// output will be 99

// Complicated Examples

var a= 6;
var b = 3;
var c = ++a - --b + --a;
console.log(c); // outputt will be 






// Another Example:


var x= 20;
var y= 50;
var z = x++ - --y + --x - ++y;
console.log(x); // output will be  21 ---> 20
console.log(y); // output will be 49 --> 50
console.log(z); // output will be 20 - 49 + 20 - 50 = -59

