// Write a function that checks if a given year is a leap year. A leap year is divisible by 4 but not divisible by 100, except when it is divisible by 400.

function leapyear(num: number) {


    if ((num % 4 == 0 && num % 100 != 0) || num % 400 == 0) {
        console.log("The entered year is a leap year!");
    } else {
        console.log("The entered year is not a leap year!");
    }

}

leapyear(1901);


// Create a function that takes a string as input and returns the string reversed.


function reverse_String(String: string) {
    var rev: string = String.split('').reverse().join('');
    console.log(rev);
}
reverse_String("leo");


// Write a function that calculates the average of all numbers in an array and returns the result.

function avg(array: number[]) {

    var sum: number = 0;
    for (var i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    var Avg: number = sum / array.length
    return Avg;
}

var result: number = avg([1, 2, 3, 4, 5, 6]);
console.log("The Average of given Array is ", result)

// Create a function that takes a base and an exponent as parameters and returns the result of raising the base to the exponent.



function exponentPower(base: number, exponent: number) {

    var result: number = Math.pow(base, exponent)
    return result;
}

var output: number = exponentPower(2, 4);
console.log("The raising the base to the exponent is: ", output)


// Write a function that counts the number of vowels (a, e, i, o, u) in a given string and returns the count.


function vowels_Count(String: string) {
    var sum: number = 0;
    var lowerCaseString: string = String.toLowerCase();


    for (var i = 0; i < String.length; i++) {
        var character: string = lowerCaseString[i]
        if (character == "a" || character == "e" || character == "i" || character == "o" || character == "u") {
            sum++
        }

    }
    return sum;
}

var FinalResult: number = vowels_Count("Hey i am Farhan younas A passionate Data Scientist");
console.log("The number of vowels in your string is ", FinalResult)


// Create a function that checks if a given number is prime (only divisible by 1 and itself) and returns true or false.


function primeNumberChecker(num: number) {
    if (num <= 1) {
        console.log("Not a Prime number");
        return;
    }

    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            console.log("Not a Prime number");
            return;
        }
    }

    console.log("Prime number");
}
function total(arr: number[]): number {
    var sum = 0
    for (let i = 0; i < arr.length; i++) { // Change i <= arr.length to i < arr.length
        sum = sum + arr[i]
    }
    return sum
}

var k: number = total([3, 9, 2, 6, 4, 9, 5])
console.log(k);

