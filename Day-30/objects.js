// var rutvi = {
//     name : "Rutvi",
//     profession: "Student",
//     age: 22,
//     hobbies: ['dancing', 'singing'],
//     bio: function(){
//         // console.log("Hi my name is " + rutvi.name , "By profession I am a " + rutvi.profession);
//         console.log("Hi my name is " + this.name , "By profession I am a " + this.profession);
//     }
// }

////////////////////////////////// Dot Notation \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// console.log(rutvi.name);
// console.log(rutvi.profession);
// console.log(rutvi.age);
// console.log(rutvi.hobbies);

////////////////////////////// Bracket Notation  \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
// var abc = "hobbies";
// console.log(rutvi["name"]);
// console.log(rutvi["profession"]);
// console.log(rutvi["age"]);
// console.log(rutvi[abc]);   
// console.log(rutvi.abc);  //We would be getting undefined in this case

// console.log(rutvi.bio);
// console.log(rutvi["bio"]);

// rutvi.bio();


/////////////////////// Functions in JS /////////////////////////////////////

var sayHello = function(){
    return "Hi! How are you?" ;
}

///////////////////////////// Passing the argument as a function ///////////////////////

function greetings(name , helloMsg){
    console.log(name + helloMsg())
}

greetings("Rutvi " , sayHello); // Here we are passing a function as a parameter and are tend to known as "CALL BACK FUNCTIONS"

// greetings("Rutvi" , ()=>{
//     return " Heya! How are you?";
// })
// sayHello();

/////////////////////////////////////// HIGHER ORDER FUNCTIONS \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

function promotionCalcualtor(designation){
    if(designation == "Manager") {
        return function(experience) {
            console.log("Promotion for " + designation + " with " + "experience of " + experience + " is Senior Manager");
        }
    }
    else {
        return function(experience) {
            console.log("Promotion for " + designation + " with " + "experience of " + experience + " is Based on experience");
        }
    }
}


// var Promotion = promotionCalcualtor("Manager");
// Promotion(5);

promotionCalcualtor("Manager")(5);
promotionCalcualtor("SDE")(5);

// Promotion = promotionCalcualtor("Anaylist");
// Promotion(2);


////////////// Call , Apply and Bind Methods \\\\\\\\\\\\\\\\\\\\\\\\

var rutvi = {
    name : "Rutvi",
    profession: "Student",
    hobbies: ['dancing', 'singing'],
    workingBio: function(experience , age){
        console.log(this.name , " is " +  this.profession + " with experience of " + experience + " years and is " + age + " years old.");
        
    }
}

function bioData(experience , age){
    console.log(this.name , " is " +  this.profession + " with experience of " + experience + " years and is " + age + " years old.");
    
}

var mayank = {
    name : "Mayank",
    profession: "Engineer"
}
var john = {
    name : "John",
    profession: "Dancer"
}

rutvi.workingBio.call(rutvi, 5 , 22 );
rutvi.workingBio.apply(mayank, [5 , 22 ]);

// var bio = rutvi.workingBio.bind(john)
// bio(6,25);

var bio = rutvi.workingBio.bind(john,6,25)
bio();

//////////////////////// Function defined outside an object ///////////////////////

bioData.call(mayank, 10, 25);

var o = new F();
 console.log(o.constructor === F);






