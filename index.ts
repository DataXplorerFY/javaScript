// Write a program to convert the temperature from Celsius to Fahrenheit and vice verse


var Celcius_temp:number= 70;

var C_to_F:number= (Celcius_temp*9/5)+32;
console.log("Clecius to Fahrenhiet tempreture is: ",C_to_F);

var Fahrenheit_temp:number=80;
var F_to_C:number= (Fahrenheit_temp-32)*5/9;
console.log("Fahrenhiet  to Clecius  tempreture is: ",F_to_C);

// Write a program that calculates the percentage
var totall_Marks:number=100;
var obtained_marks:number=80;

var percentage:number= obtained_marks/totall_Marks*100;
console.log("The percentage of given number is: ", percentage)

// Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

var given_days:number= 35;
var week:number=7;

var days_to_week:number=given_days/week;
var remaining_days:number= given_days%week
console.log(given_days,"Days = ",days_to_week.toFixed(0),"weeks and",remaining_days, "days"); 

// var days_to_week:number=given_days/week;


// if(given_days%week==0){
//     console.log(days_to_week)
// }else if(given_days%week != 0){
//     console.log(days_to_week.toFixed(0), "Weeks and", given_days%week, "Days")
// }



var months:number=18;

var year:number=12;


var months_to_year:number= months/year;
var remaining_months:number= months%year;
console.log(months,"Months= ", Math.floor(months_to_year),"Years and", remaining_months, "months");


// Write a program that calculates the discount for a product based on its price. If the price is above $100, apply a 10% discount; otherwise, apply a 5% discount.



var product_price:number=10;

// var discount_10_percent: number= product_price *0.1;
// console.log("Congratulations! your origional  discounted is ",discount_10_percent)


if(product_price>100){
    var discount_10_percent:number=product_price*0.1;
    console.log("Your Discount on this product is: ","$", discount_10_percent )
}else{
    var discount_5_percent:number=product_price*0.05;
    console.log("Your Discount on this product is: ","$", discount_5_percent )
}



// Create a program that determines the category of a user-provided age. If the age is between 0 and 12, print "Child." If it's between 13 and 19, print "Teenager." Otherwise, print "Adult."




var age:number= 6;

if(age<=12){
    console.log("You Are a Child!");
    
}else if(age>=13 && age<=19){
    console.log("You are Teenager!");
}else{
    console.log("You are Adult");
}


// Write a program that takes temperature and check it. If it is cold then suggest the user to wear warm clothes and so on according to the weather.

var temperature:number= 8.8;


if(temperature<=20){
    console.log("You shold wear Jackets coats, shawls, etc etc");
}else if(temperature>20 && temperature<=30){
    console.log("Tempreture is normal so you can wear Summer clothes or winter as you wish");
}else if(temperature>30){
    console.log("You can wear Summer clothes BCZ tem is too high");
}


// • Write a program that checks if the given number is divisible by 3 or 5 or both or not divisible by anyone show output accordingly

var num: number= 22;

if(num%3==0){
    console.log("The number is Divisible by 3");
}else if(num%5==0){
    console.log("The number is Divisible by 5");
}else if(num%3==0 && num%5==0){
    console.log("The numnber is divisible by 3 and 5 both");
}else{
    console.log("The number is not divisible by any number")
}


// Write a program that checks if the given year is leap year or not.

var year:number= 1988;
 if(year%4==0){
    console.log("The Provided year is leap year");
 }else{
    console.log("The year is not leap year");
 }




 //Develop a program that determines the day of the week. Ask the user for a number (1-7) and use nested if statements to print the corresponding day's name.



var userInput:number= 3;
 if(userInput==1){
    console.log("The Day is Monday!");

    if(userInput==2){
        
    }
 }