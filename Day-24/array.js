// Declaring and Initializing an array

// let marks = new Array(100, 200 , 40 , 68, 20);
// console.log(marks);
// console.log(marks.length);

// let num = Array(20, 35, 56, 10);
// console.log(num);
// console.log(num.length);


// let names = ["Akansha", "Rutvi", "Joey", "Mayank"];
// console.log(names);
// console.log(names.length);

// console.log(names[2]);
// names[0] = "Rachel";
// console.log(names);

// // Using length property
// marks = new Array(42);
// console.log(marks);
// console.log(marks.length);

// num = Array(10);
// console.log(num);
// console.log(num[0]);
// console.log(num.length);

// names = [];
// names.length = 30;
// console.log(names);
// console.log(names.length);

// Iterating over arrays

let marks = [100, 200 , 40 , 68, 20];
let totalMarks = 0;

// for (i=0;i<marks.length;i++)
// {
//     // console.log(marks[i]);
//     marks[i] =  marks[i]*2;
//     console.log(marks[i]);
//     totalMarks += marks[i];
// }
// console.log("Total : "+ totalMarks);

//  For Each and map
 
// marks.forEach((individualMarks) =>{
//     console.log(individualMarks);
//     totalMarks += individualMarks;
// })
// console.log("Total : " + totalMarks);

// marks.map((individualMarks) =>{
//     console.log(individualMarks);
// })


// We want to mutiply 2 to all elements of the array using forEach

    // marks.forEach((individualMarks, index)=>
    // {
    //     marks[index] = marks[index]*2;
    // })
    // console.log(marks);

// We want to mutiply 2 to all elements of the array using map

//  marks = marks.map((individualMarks)=>{
//     return individualMarks*2;
//  })
//  console.log(marks);


 // Concat and Join

//  let myArr = [1, 2, 3];
//  let newArr = myArr.concat(4,5,6,7);
//  console.log(myArr);
//  console.log(newArr);

//  let myArr = [1, 2, 3];
//  let newArr = [4,5,6,7];
//  console.log(myArr);
//  myArr = myArr.concat(newArr);
//  console.log(myArr);

// let myArr = ["Hi" , "How" , "Are" , "You" , "!"];
// myArr = myArr.join(' ');
// console.log(myArr);

//push and pop

// let myArr = [1, 2, 3, 4, 5];
// myArr.push(10);
// myArr.push(9);
// myArr.push(0);
// console.log(myArr);

// console.log(myArr.pop());
// console.log(myArr);

// Shift and Unshift

//     console.log(myArr.shift());
//     console.log(myArr);

//     myArr.unshift(12, 15, 16);
//     console.log(myArr);

// slice and splice

let myArr = [10, 12, 30, 46, 58, 78];
let newArr = myArr.slice(1,3);
console.log(newArr);
console.log(myArr);

myArr.splice(1,3, 'a', 'b', 'c', 'd');
console.log(myArr);

//  sort and reverse

let arr = [49, 98, 12, 49, 1 ,10];
let mystring = ["hello", "rutvi", "am"]
 mystring.sort();
console.log(mystring);

// myArr.reverse();
// console.log(myArr);

//indexof and lastIndexof
console.log(arr);
console.log(arr.indexOf(49));
console.log(arr.lastIndexOf(49));



// filter

let num = [5, 10, 45, 80, 42];
let newNum = num.filter(item=>{
    return (item%2 == 0);
})
console.log(newNum);

// some and every

let isSomeEven = num.some(item=>{
    return (item%2 == 0);
})
console.log(isSomeEven);

let isEveryEven = num.every(item=>{
    return (item%2 == 0);
})
console.log(isEveryEven);


/************************************** MAPS ***************************************/
console.log('MAPS')

let cityMap = new Map();
cityMap.set('Gurgaon', 'Haryana');
cityMap.set('Chennai', 'Tamil Nadu');
cityMap.set('Jamshedpur', 'Jharkhand');

// Initialized while creating the object

// let cityMap = new Map([
//     ['Gurgaon', 'Haryana'],
//     ['Chennai', 'Tamil Nadu'],
//     ['Jamshedpur', 'Jharkhand']
// ]);
console.log(cityMap);

console.log(cityMap.get('Jamshedpur'));
console.log(cityMap.get('Chennai'));

// We use 'size' in order to check the number of key value pairs inserted
console.log(cityMap.size);

// We use 'has' in order to check whether the key exists or not
console.log(cityMap.has('Chennai'));
console.log(cityMap.has('Bangalore'));

// To iterate through the keys and values present
for(let cityKey of cityMap.keys()){
    console.log(cityKey);
} 

console.log("Values")
for(let cityValues of cityMap.values()){
    console.log(cityValues);
} 

// Iterate through key and value pairs one by one
cityMap.forEach((key, value)=>{
    console.log(key + " = " + value);
})

for(let [key, value] of cityMap)
{
    console.log(key + " = " + value);
}

// Lets us iterate through the map we have.. [0] = access keys ,, [1] = access values
for(let mapEntry of cityMap.entries()){
    console.log(mapEntry);
    console.log(mapEntry[0] + " " + mapEntry[1]);
}

//  Delete particular entries

cityMap.delete('Chennai');

console.log(cityMap.size);

// Delte complete map
cityMap.clear();
console.log(cityMap.size);

/////////////////////////////////////////////////////// SET /////////////////////////////////////////////////////////

let solvedProblem = new Set();

solvedProblem.add("ABC");
solvedProblem.add("XYZ");
solvedProblem.add("HJM");
solvedProblem.add("ABC");

console.log(solvedProblem);

// To check whether a particular id exist or not

console.log (solvedProblem.has("ABC"));
console.log (solvedProblem.has("TRY"));

console.log(solvedProblem.size);
solvedProblem.delete("ABC");
console.log(solvedProblem.size);

for(let problemId of solvedProblem){
    console.log(problemId);
}

for(let [key, value] of solvedProblem.entries()){
    console.log(key + " " + value);
}

solvedProblem.forEach((key,value)=>{
    console.log(key + " " + value);
})

// Conversion of a set into an array
 //Way -1 (spread-operator)
let newArray =  [...solvedProblem];
console.log(newArray);
// Way-2 (using Array.from)
newArray = Array.from(solvedProblem);
console.log(newArray);




 






