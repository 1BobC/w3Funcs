//Attempt to reproduce functions



//w3 schools JavaScript Function Apply
//The Difference Between call() and apply() is: The apply() method takes arguments as an array.
    // const persong= {
    //     bigName: function(height, weight){
    //         return this.firstName + " " + this.lastName + " " + height + " " + weight;
    //     }
    // }
    // const personh= {
    //     firstName: "Bell",
    //     lastName: "Weather"
    // }
    // const g= persong.bigName.apply(personh, ["Very Tall", "Very Heavy"]);
    // console.log(g);
    // document.getElementById("bobR").innerHTML= "The apply() method takes arguments as an array to give: " + g;

//Simulate a Max Method on Arrays - ok. [] gives undefined, must use () for simulation
//    document.getElementById("bobS").innerHTML= "A one-liner to give the highest number in an array but (): " + Math.max(1, 123, 500, 8504, 115, 44, 88);
//This variation to use apply and []
//    document.getElementById("bobT").innerHTML= "Try this variation to use apply and []: " + Math.max.apply(null, [1, 123, 500, 8504, 115, 44, 88]);
//Try this variation
//    document.getElementById("bobU").innerHTML= "Try this variation with Math.max and Math!: " + Math.max.apply(Math, [1, 123, 500, 8504, 115, 44, 88])
//And yet another: 
//    document.getElementById("bobV").innerHTML= "And yet another: " + Math.max.apply("", [1, 123, 500, 8504, 115, 44, 88]);
//And one more for luck!: 
//    document.getElementById("bobW").innerHTML= "And one more for luck!: " + Math.max.apply(0, [1, 123, 500, 8504, 115, 44, 88]);

//w3 schools Javascript Function Call 
//All Functions are Objects Methods
//This example creates an object with 3 properties, firstName, lastName, fullName
// const bObject=  {
//     firstName: "Harry",
//     lastName: "Truman",
//     allName: function(){
//         return this.firstName + " " + this.lastName;
//     }
// }
//         t= bObject.allName();
//         console.log(t);
//         document.getElementById("bobO").innerHTML= "This example creates an object with 3 properties, firstName, lastName and fullName is: " + t;

//The JavaScript call() (and apply?) Methods
//With call(), an object can use a method belonging to another object.
    // const persona = {
    //     fullName: function(){
    //         return this.firstName + " " + this.lastName;
    //     }
    // }
    // const personb= {
    //     firstName: "Ben",
    //     lastName: "Jackson"
    // }
    // const personc= {
    //     firstName: "Freya",
    //     lastName: "Jackson"
    // }
    //     k= persona.fullName.apply(personb);
    //     j= persona.fullName.call(personc);
    //     console.log(k, j);
    //     document.getElementById("bobP").innerHTML= "With call() or apply(), an object can use a method belonging to another object, or even two! Like " + k  + " and " + j;

//The call() Method with Arguments
    // const persond= {
    //     allName: function(city, country){
    //         return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    //     }
    // }
    // const persone= {
    //     firstName: "Harry",
    //     lastName: "Secombe"
    // }
    // const personf= {
    //     firstName: "Googy",
    //     lastName: "Withers"
    // }
    // const l= persond.allName.call(persone, "Rhonda Valley", "Wales");
    // console.log(l);
    // document.getElementById("bobQ").innerHTML= "The call() method can accept arguments eg fullname, city and country, as in: " + l;



//w3 schools JavaScript Function Invocation
//Invoking a JavaScript Function as a Function
// function june(a, b){
//     return a + b;
// }
// console.log(june(150, 250));
// document.getElementById("bobE").innerHTML= "Invoking a global function 'june' gives result: " + june(150, 250);

// //using this keyword with global function
// function june1(){
//     return this;
// }
// console.log(june1());
// document.getElementById("bobF").innerHTML= "Using 'this' keyword with a global function gives result: " + june1()

// //More on 'this'
// //'this' in a Method
// const person= {
//     firstname: 'Benson',
//     lastname: 'Hedges',
//     ident: '07533',
//     fullName: function(){
//         return this.firstname + " " + this.lastname + ": ident " + this.ident;
//     }
// };
//     console.log(person.fullName());
//     document.getElementById("bobG").innerHTML= "'person' (this) owns the 'fullName' function, answer : " + person.fullName();

// //'this' alone
//     var m= this;
//     console.log(m);
//     document.getElementById("bobH").innerHTML= "'this' alone refers to the window object: " + m;

// //'this' in a Function (Default) 
//     document.getElementById("bobJ").innerHTML= "'this' represents the object that 'owns' freya(): " + freya();
//     function freya(){
//         return this;
// }
//     console.log(freya());

// // <p>In strict mode, <b>this</b> is <b>undefined</b>, because strict mode does not allow default binding:</p>    
//     function freyA(){
//         "use strict";
//         return this;
//     }
//     document.getElementById("bobK").innerHTML= "In strict mode, <b>this</b> is <b>undefined</b>, does not allow default binding and returns: " + freyA();
//     console.log(freyA());

// //"use strict" other example NB declare "use strict" locally!!!
// //    {"use strict";
// //     const x= 4.99;}
// //     console.log(x);

// //'this' in Event Handlers see indexA

// //'this' in Object Method Binding for Ben 1
// //create an object
//     const personA= {
//         firstname: "Ben",
//         lastname: "Jackson",
//         address: "37 Woodmuir",
//         fullPerson: function() {
//             return this;
//         }
//     };
//     console.log(personA.fullPerson());
//     document.getElementById("bobL").innerHTML= "this alone in Object Method Binding for Ben1 results: " + personA.fullPerson();
 
// //'this' in Object Method Binding for Ben 2
//     const personB= {
//         firstName: "Ben",
//         lastName: "Jackson",
//         address: "37 Woodmuir",
//         fullPerson: function() {
//         return this.firstName + " " + this.lastName;
//     }
// };
//     console.log(personB.fullPerson());
//     document.getElementById("bobM").innerHTML= "this in a method Object Method Binding for Ben2 result: " + personB.fullPerson();

// //use of call() and apply() in Explicit Function Binding
// //In the example below, when calling person1.fullName with person2 as argument, this will refer to person2, even if it is a method of person1 !!!
//     const person1= {
//         fullName: function(){
//             return this.firstName + " " + this.lastName;
//         }
//     }
//     const person2= {
//         firstName: "Harry",
//         lastName: "Lime",
//     }
//     const x= person1.fullName.apply(person2);

//     console.log(x);
//     document.getElementById("bobN").innerHTML= "So the answer must be: " + x + "!";



//w3 schools JavaScript Function Parameters
//Setting a default value to a parameter 1
// const f= function(x, y){
//     if(y=== undefined){
//         y= 2;
//     }
//     return x * y;
// }
//     console.log(f(x= 4));
//     document.getElementById("bobA").innerHTML= 'setting a default value 1 = ' + f(4);

// //Setting a default value to a parameter 2
// const g= function(x, y=2){
//     return x + y;
// }
//     console.log(g(6));
//     document.getElementById("bobB").innerHTML="setting a default value 2 = " + g(6);

// //Setting a default value to a parameter mine1
// //x or y can be unterchanged if correct position used when calling
// const h= function(x, y){
//     if(x=== undefined);
//     x= 2;
//     return x * y;
// }
//     console.log(h(x, 16));
//     document.getElementById("mine1").innerHTML="setting a default value mine 1 = " + h(x, 16);

// //Setting a default value to a parameter mine2
// //x or y can be unterchanged if correct position used when calling
// const j= function(x, y= 2){
//     return x * y;
// }
//     console.log(j(16));
//     document.getElementById("mine2").innerHTML="setting a default value mine 2 = " + j(16);

// //w3 schools JavaScript The Arguments Object
// //built-in object called the arguments object to find the highest value in a list of numbers
// //does not work with const for i and max - why?
// const findMax= function() {
//     let i;
//     let max= -Infinity;
//     for (i= 0; i < arguments.length; i++) {
//         if (arguments[i] > max){
//             max= arguments[i];
//         }        
//     }
//         return max;
// }
// console.log(findMax(1, 123, 500, 115, 44, 88));
// document.getElementById("bobC").innerHTML= "the arguments object 1  to find the highest value in a list of numbers = " + findMax(1, 123, 500, 115, 44, 88);

// //built-in object called the arguments object to sum all input values
// const sumAll= function() {
//     let i;
//     let sum= 0;
//     for(i=0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }
//         return sum;
// }
//     console.log(sumAll(1, 123, 500, 115, 44, 88));
//     document.getElementById("bobD").innerHTML= "the arguments object 2 to sum all input values = " + sumAll(1, 123, 500, 115, 44, 88);

// //mine 3 - built-in object called the arguments object to find the highest value in a list of numbers
// //does not work with const for i and max - why?
// const topNum= function(){
//     let i;
//     let max= -Infinity;
//     for(i= 0; i < arguments.length; i++){
//         if(arguments[i] > max){
//             max = arguments[i];
//         }
//     }
//         return max;
// }
//     console.log(topNum(1, 123, 500, 8504, 115, 44, 88));
//     document.getElementById("mine3").innerHTML= "the arguments object mine 3  to find the highest value in a list of numbers = " + topNum(1, 123, 500, 8504, 115, 44, 88);

// //mine 4 built-in object called the arguments object to sum all input values
// const addUp= function(){
//     let i;
//     let tot= 0;
//     for (i=0; i < arguments.length; i++){
//         tot += arguments[i];
//     }
//     return tot;
// }
//     console.log(addUp(1, 123, 500, 8504, 115, 44, 88));
//     console.log(addUp(1));
//     console.log(addUp(1, 123));
//     console.log(addUp(1, 123, 500));
//     console.log(addUp(1, 123, 500, 8504));
//     console.log(addUp(1, 123, 500, 8504, 115));
//     console.log(addUp(1, 123, 500, 8504, 115, 44));
//     console.log(addUp(1, 123, 500, 8504, 115, 44, 88));
//     document.getElementById("mine4").innerHTML= "the arguments object mine 4 to sum all input values = " + addUp(1, 123, 500, 8504, 115, 44, 88);

//w3 schools JavaScript Function Definitions
//Basic function
// function k(a, b){
//     return a - b;
// }
//     console.log(k(125, 2));
//     document.getElementById("bobs").innerHTML= "Basic function a - b = " + k(125, 2);


//function expression1 
// const a= function(b, c){
//     return b / c;
// }
// console.log(a(10, 2));
// document.getElementById("bob").innerHTML= "Function expression 1, b / c = " + a(10, 2);

// //function expression 2
// const phrase= function(d, e){
//     return d + e;
// }
// console.log(phrase("Hello, ", "World!"));
// document.getElementById("bob1").innerHTML= "Function expression 2, phrase is: " + phrase("Hello, ", "World!");

// //function expression 3
// const pchoice= function(rock){
//     return "rock";
// }
// console.log(pchoice());
// document.getElementById("bob2").innerHTML= "Function expression 3, the player's choice is: " + pchoice();
 
// //function expression 4
// const cchoice= function(paper){
//     return "paper"
// }
// console.log(cchoice());
// document.getElementById("bob3").innerHTML=  "Function expression 4 the computer's choice is: " + cchoice();

//  //function expression 5
//  const game= function(winner){
//     const x= pchoice();
//     const y= cchoice();
//     if ((x== "rock") && (y== "paper")){
//     return "The computer is the winner";
//     }else{return "void game"}
// }
// console.log(game());
// document.getElementById("bob4").innerHTML= "Function expression 5. " + game();