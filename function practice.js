// Write a function that takes a name as a parameter and returns a greeting message. For example, if the name is "Alice," the function should return "Hello, Alice!"


function Greeting_message(name) {
    console.log("Hello", name);
}


Greeting_message("Farhan");
Greeting_message("Ali");
Greeting_message("Hamza");
Greeting_message("Hassan");



// Create a function that accepts two numbers as parameters and returns their sum.

function sum(num1, num2) {
    var result = num1 + num2;
    return result;
}

var Final = sum(10, 20);
console.log("The Sum is :", Final);

// Write a function that takes three numbers as input and returns their product.

function product(num1, num2, num3) {
    return num1 * num2 * num3;
}

var result = product(2, 2, 2);
console.log("The product of these three number is ", result);



// Create a function that checks if a given number is even or odd and returns "Even" or "Odd" accordingly.


function number_checker(num) {
    if (num % 2 == 0) {
        console.log("The Number is Even", num);
    } else {
        console.log("The number is odd ", num);
    }
}

number_checker(10);
number_checker(11);
number_checker(4);



// Write a function that takes a string and a number as parameters and returns a new string that repeats the original string that many times. For example, if given "hello" and 3, it should return "hellohellohello."

function string_repeater(string, Number) {
    var result = string.repeat(Number);
    console.log(result);
}

string_repeater("Leo", 5);



// Write a function that calculates the sum of all numbers in an array and returns the result.

var sum = 0;
function Array_sum(arr) {
    for (i = 0; i <= arr.length; i++) {
        sum = sum + i;

    }
    console.log("The Sum of array number is: ", sum);

}

Array_sum([1, 2, 3, 4, 5, 6])


// Create a function that takes three numbers as input and returns the largest of them.
function largest_number(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        console.log("The Greatest Number is:", num1);

    } else if (num2 > num1 && num2 > num3) {
        console.log("The Greatest Number is:", num2);

    } else if (num3 > num1 && num3 > num2) {
        console.log("The Greatest Number is:", num3);

    }
}

largest_number(104, 203, 130)

// Write a function that calculates the factorial of a given number. The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.


function factorial(num) {
    var fact = 1;
    for (i = 1; i <= num; i++) {
        fact = fact * i;
    }
    return fact
}
var result = factorial(5);
console.log("The factorial of given number is:", result)

// Create a function that checks if a given string is a palindrome (reads the same forwards and backwards) and returns true or false.




function palindrome(word) {
    var palin = word.split('').reverse().join('');
    if (palin == word) {
        console.log(true);
    } else {
        console.log(false);
    }

}

palindrome("civic");



// Write a function that generates the Fibonacci sequence up to a specified number of terms. The Fibonacci sequence starts with 0 and 1, and each subsequent number is the sum of the previous two (0, 1, 1, 2, 3, 5, 8, ...).


function Fibonacci(num1) {
    fib1 = 0;
    fib2 = 1
    for (i = 0; i <= num1; i++) {
        var result = fib1;
        console.log(result);


        var nextfib = fib1 + fib2;
        fib1 = fib2;
        fib2 = nextfib;
    }

}

Fibonacci(10);
