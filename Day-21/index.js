// Operators

// Arithemtic Operators
console.log("Arithemtic Operators")
var num1 , num2 , result
num1 = 2;
num2 = 31;
result = num1+num2;
console.log(result);

result = num1-num2;
console.log(result);

result = Math.floor(num2/num1);
console.log(result);

result = num2%num1;
console.log(result);

result = num1*num2;
console.log(result);

result = num2**num1;
console.log(result);
/************************************************* */


// Comparison Operator
console.log("Comparison Operators")
var num1, num2
num1 = 30;
num2 = '35';

console.log(num1== num2);
console.log(num1===num2);

var no1 = 1998 , no2=30;
if(num1>num2)
    console.log(no1 + " is greater than " + no2);
else
    console.log(no2 + " is greater than " + no1);

if(no1 <=1995)
    console.log("Valid");
else
    console.log("Not Valid");

if(num1 != num2)
    console.log("Not equal");

if(num1 !== num2)
    console.log(" Strict Not equal");

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

//Logical Operator

console.log("Logical Operators");

var maths, science, english , hindi , cutoff;
result= false;
cutoff = 80;

var newResult = !result;
console.log(newResult);
console.log(result);

if(!result)
    console.log("Drop Email");

maths = 70;
english = 88;
science = 80;
hindi = 90;

if((hindi>= cutoff) && (science>= cutoff) && (maths>= cutoff) && (english>= cutoff))
    result = true
    console.log(result)

if((hindi>= cutoff) || (science>= cutoff) || (maths>= cutoff) || (english>= cutoff))
    result = true
    console.log(result)

// // Ternary Operator

// console.log("Ternary Operator")

// var marks =70, grade, cutoff =60;

// //  if(marks>=cutoff)
// //     console.log("Great job");
// // else
// //     console.log("Good Job");

// marks >= cutoff?console.log("Great job") :console.log("Good job");

// grade = marks>=cutoff ? 'A' : 'B';
// console.log(grade);

// //String Operator

// // var myString = "Rutvi";
// // myString += " Kumawat";

// var myString = "Hello" + "!" + " Rutvi" + " Kumawat";

// console.log(myString);


// //Increment / Decrement Operator  

// console.log("Increment/Decrement Operator")

// // let a = 6;
// // let x = a++;

// // console.log(x + " " + a);
// //  x = ++a;

// //  console.log(x + " " + a);

// //  a = 6;
// //  x = a--;

// // console.log(x + " " + a);
// //  x = --a;

// //  console.log(x + " " + a);


// //Bitwise Operator

// console.log("Bitwise Operators")

// const a =5;
// const b= 2;
// const c = -5;

// // const a = 8;
// // const b= 9;

// // console.log(a & b);
// // console.log(a | b);
// // console.log(a^b);
// // console.log(~b);

// console.log(a << b);
// console.log(c << b);
// console.log(a >> b);
// console.log(c >> b);
// console.log(a >>> b);
// console.log(c >>> b);   


// // Decision Making

// console.log("Decision Making")

// let weather;
// weather = "raining";
// if(weather === "raining")
// {
//     console.log("I wont go to the party");
//     console.log(" Will Eat at home");
// }
// else{
//     console.log("I will go to the party");
//     console.log("Will Dance");
// }

// // If Block
// var salary, employee;
// salary = 90000;
// employee = "star";

// if(employee === "star")
// {
//     salary +=30000;
//     console.log(salary);
// }

// // If else if block

// // > 80 = Distinction , 60-79 = Grade A, 40-59 = Grade B, < 40 = Fail

// var marks=30 , grade;

// if(marks >= 80)
// {
//     console.log("Distinction");
// }
// else if(marks >=60 && marks < 80)
// {
//     console.log("Grade A");
// }
// else if(marks >=40 && marks <60)
// {
//     console.log("Grade B");
// }
// else{
//     console.log("Fail");
// }

// // Switch Statement

// let num = 2;
// let day;

// switch(num){
//     case 1:
//         day = "Monday";
//         break;
//     case 2:
//         day = "Tuesday";
//     case 3:
//         day = "Wednesday";
//         break;
//     case 4:
//         day ="Thursday";
//     case 5:
//         day = "Friday";
//         break;
//     case 6:
//         day = "Saturday";
//     case 7:
//         day ="Sunday";
//         break;
//     default:
//         day = "Invalid";
// }

//     console.log(day);

// marks = 90;
// var bool = true;

// switch(bool)
// {
//     case marks > 80:
//         console.log("Distinction");
//         break;
//     default:
//         console.log("Invalid Marks");
// }

// // Loops
// // For Loops

// // for(var i=1; i<=10; i++)
// // {
// //     console.log(i);
// // }

// //While loop

// // var i=1;
// // while(i<=100)
// // {
// //     console.log(i);
// //     i++;
// // }
// // console.log("Loop terminated");

// //Do while

// var i=100;
// do{
//     console.log(i);
//     i++;
// }
// while(i<=100)

// // Continue
// console.log("Continue Statement")
// for(var i=1; i<=10; i++)
// {
//     if(i==5)
//         continue;
//     console.log(i);
// }
// //Break
// console.log("Break Statement")
// for(var i=1; i<=10; i++)
// {
//     if(i==6)
//         break;
//     console.log(i);
// }

// //label
// // LabelExample :for(var i=1; i<=10; i++)
// // {
// //     if(i==5)
// //         continue;
// //     console.log(i);
// // }

// // Nested Loops
// console.log("Nested Loops")
//     for(var i=1 ;i<5;i++)
//     {
//         for(var j=i;j<=5;j++)
//         {
//             console.log(j);
//         }
//     }

//     //  breaks the outer loop as well
//  console.log("Nested Loops using outLabel break")
//  outLabel:  for(var i=1 ;i<=5;i++)
//     {
//         for(var j=i;j<=5;j++)
//         {
//             if(j==3)
//             break outLabel;
//             console.log(j);
//         }
        
//     }

//        //  continues the outer loop as well
//  console.log("Nested Loops using outLabel continue")
//  outLabel:  for(var i=1 ;i<=5;i++)
//     {
//         for(var j=i;j<=5;j++)
//         {
//             if(j==3)
//             continue outLabel;
//             console.log(j);
//         }
//         console.log("i" +i);
//     }

//     // Functions
//     console.log("Functions");
//     let length, breadth, area;
// //definig functions Way-1
//     function calculateArea(length , breadth) {
//         console.log("Length is " + length);
//         console.log("Breadth is " + breadth);
//          area = length*breadth;
//          console.log("Area of rectangle is " + area);
//          if(area > 500)
//          console.log("Big Rectangle");
//          else
//          console.log("Small Rectangle");
//          return area;
//        }
// // Way-2
//     // let calculateArea = function() {
//     //     console.log("Area is 500");
//     // }

//     let areaRect = calculateArea(20,40);
//     console.log("Area is " + areaRect);
//      areaRect =  calculateArea(20,10);
//     console.log("Area is " + areaRect);

//     // Way-3
//        console.log("Way-3")
//     let areaRectangle = (length, breadth) =>{
//         console.log("Length is " + length);
//         console.log("Breadth is " + breadth);
//         area = length*breadth;
//         console.log(area);
//     }
//      areaRectangle(20,30);