
//// Constructor Functions  
    
function Person(name , profession , hobbies){
    this.name = name;
    this.profession = profession;
    this.hobbies = hobbies;
}

var ram = new Person("Ram" , "Dancer" , ["Dancing"]);
var sita = new Person("Sita" , "Teacher" , ["Reading"]);

console.log(ram);
console.log(sita);

///////////////// Prototype ///////////////

Person.prototype.workingBio = function(experience , age) {
    console.log(this.name , " is " +  this.profession + " with experience of " + experience + " years and is " + age + " years old.");
}

Person.prototype.age = 27;

ram.workingBio(2,25);
sita.workingBio(3,26);

var shyam = new Person("Shyam" , "Singer" , ["Singing"]);
console.log(shyam);
shyam.workingBio(5,30);

console.log(shyam.__proto__ == Person.prototype);

console.log(shyam.hasOwnProperty("name"));
console.log(ram.hasOwnProperty("age"));


//////// Object.create() ///////////////

// var ruya = Object.create(null);
// console.log(ruya);

// var ruya = Object.create({});
// console.log(ruya);

// ruya.name = "Ruya";
// ruya.profession = "Engineer";

// console.log(ruya);

// ruya.workExp = ()=>{
//     console.log("Working from last 2 years");
// }
// console.log(ruya);

var kom = {
    name: "Komal",
    profession: "Employee" ,
    workinExp: function() {
        console.log(this.name + " is experienced");
    }
}



var ruya = Object.create(kom);
console.log(ruya);

ruya.name = "Ruyaa";
console.log(ruya.name);

ruya.workinExp = function(){
    console.log(this.name + " is working hard");
}
ruya.workinExp();


////////// Practice Questions/////////////////

// var arr = new Array(3);  
// console.log(arr.map(function(){return 0;}));  /// []

console.log(Array.apply(null, new Array(3)).map(function() { return 0; }));  //// [0,0,0]

// let arr = [2, 4, 6, 10];
// arr.filter(arr => arr > 5);
// console.log(arr);    /////////    [2,4,6,10]

// let arr = [1, 2, 3];
// console.log(arr.indexOf(0));  ///// -1



let obj = {a: 1, b: 2};
console.log(JSON.stringify(obj)); ///// {"a":1,"b":2}

// 'use strict'
// x = 5;
// console.log(x)

// foo();   //line 1
// function foo() {
//   a = 10;
//   let b = 20;
// }
// console.log('a', a);  //line 2
// console.log('b', b);  //line 3  error because let has block scope

const arr = [1, 2]
const [x, y] = arr; 
console.log(x, y); //// 1 2



const add = (a, b) => a + b;
console.log(add(2, 3));   // 5

(function() {
    let f = this ? class g { } : class h { };
    return [
      typeof f,
      typeof h
    ];
  })();    //// [function , undefined ]

  foo(1, 2, 3, 4);
function foo(a, ...b) {
  console.log('a:' + a + 'b:' + b);     /////////////  a:1b:2,3,4
}


// const para = document.querySelector('p');
