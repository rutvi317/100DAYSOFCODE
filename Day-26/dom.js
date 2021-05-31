/******************************* Accessing DOM Elements *******************************/

// console.log(document.getElementsByTagName("h1"));

// console.log(document.getElementsByClassName("list-item"));

// console.log(document.getElementsByClassName("list")[0]);

// console.log(document.getElementById("main-heading"));

// console.log(document.querySelector("li"));

// console.log(document.querySelector("button"));
// console.log(document.querySelectorAll("button"));

// console.log(document.querySelector(".list"));
// console.log(document.querySelectorAll(".list .list-item"));
// console.log(document.querySelectorAll("p.list-item"));

/******************************* Manipulating DOM Elements *******************************/

var heading = document.querySelector("#main-heading");
// heading.style.color = "red";
// heading.style.backgroundColor = "yellow";
// heading.style.fontSize = "30px";

// console.log(heading.classList)
// heading.classList.add("page-heading");
console.log(heading.attributes);
console.log(heading.getAttribute("class")); //manipulating text and attributes
// heading.classList.remove("xyz");
heading.classList.toggle("xyz"); //if class is not their it adds it and if it is their it removes it.
console.log(heading.classList);
// heading.style.visibility = "hidden";

var button = document.querySelector(".btn-1");
button.style.visibility = "visible";


var listItem = document.querySelectorAll(".list-item");
// listItem[0].style.color = "blue";
// listItem[1].style.color = "blue";
// listItem[2].style.color = "blue";

listItem.forEach(item=>{
    item.style.color = "blue";
})

/******************************* Manipulating Text and attributes *******************************/

var link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href","https://www.prepbytes.com");
console.log(link.getAttribute("href"));

// console.log(link.innerHTML);
// console.log(link.textContent);
// console.log(link.innerText);
// link.innerHTML = "<em>Prepbytes</em>";
link.textContent = "Prepbytes";

/******************************* Adding or Handling Events *******************************/

// heading.addEventListener("mouseover", ()=>{
//     console.log("Mouse Hover Event");
// })

// heading.addEventListener("mouseover", function(){
//     console.log("Mouse Hover Event");
// })



// heading.addEventListener("mouseover", mouseEvent)

// heading.addEventListener("mouseleave", mouseEvent)

// function mouseEvent()
// {
//     console.log("Mouse Hover Event");
//     // heading.classList.add("page-heading");
//     heading.classList.toggle("page-heading");
// }

// var button = document.querySelector(".btn-1");
// button.addEventListener("click", ()=>{
//     console.log("Click Event");
//     document.querySelector(".btn-2").style.visibility = "visible";
// })

// document.addEventListener("keydown",()=>{
//     console.log("Key is pressed");
// })

// document.addEventListener("keydown",(event)=>{
//     console.log(event);
//     console.log(event.key);
// })


// document.querySelectorAll(".list-item").forEach((listItem)=>{
//     listItem.addEventListener("mouseover", ()=>{
//         console.log("List is hovered");
//         listItem.style.color = "green";
//         // listItem.style.fontSize = "42px";
//     })
// })


/******************************* Using jQuery *******************************/


// document.querySelectorAll(".list-item").forEach((listItem)=>{
//     listItem.addEventListener("mouseover", ()=>{
//         console.log("List is hovered");
//         listItem.style.color = "green";
//         listItem.style.fontSize = "42px";
//     })
// })


/******************************* Accessing DOM Elements using jQuery*******************************/

// for the code above we will write with the help od jQuery
console.log($(".list-item").text());

console.log($("#main-heading"));
console.log($("li"));
console.log($(".text-item"));

console.log($("h1").text());
console.log($(".btn-2").text());


/******************************* Manipulating DOM Elements using jQuery*******************************/

$("h1").text("Jquery is a Javascript Library");

$("h1").css("background-color", "yellow");
// $("h1").css("background-color", "red";
$("h1").css("font-size", "3rem");

$("button.btn-2").css({"background-color" :"blue", "font-size" : "2em", "color" : "white"});

$("button#cta-1").addClass("no1");
// $("button#cta-1").removeClass("no1");

///////////////////////////////////To add stlying to all buttons\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// $("button").addClass("no1");

$("h1").html("<em>We are learning Jquery</em>");

// $("a").attr("href", "https://www.google.com");
// $("a").text("New Text");

/////////////////////////////// How to Add anything after or before some elements...\\\\\\\\\\\\\\\\\\\\\\\\

// $("h1").before("<button>Hey There</button>");
// $("h1").after("<button>Hey There</button>");

// $("h1").append("<button>Hey There</button>");
// $("h1").prepend("<button>Hey There</button>");

/////////// How To use Event Listners in jQuery \\\\\\\\\\\\\\\\\\\\\\\\\\

// $("h1").mouseenter(function(){
//     $("h1").css("background-color", "red");
//     console.log("Mouse Has Entered")
// })

// $("h1").mouseleave(()=>{
//     $("h1").css("background-color", "yellow");
//     console.log("Mouse Has Left");
// })

$(document).keypress((event)=>{
    console.log("Key pressed is " + event.key);
})

$("h1").on("mouseenter", ()=>{
    $("h1").css("background-color", "red");
})

$("h1").on("mouseleave", ()=>{
    $("h1").css("background-color", "yellow");
})

// $("button").click(()=>{
//     console.log("Button is Clicked");
// })

$("button").on("click",()=>{
    console.log("Clicked");
    // $("h1").addClass("heading1 heading2");
    // $("button").removeClass("heading1 heading2");
    $("h1").toggleClass("heading1 heading2");
})