"use strict";

// Entscheidungsstrukturen | control flow

// Deklaration + Assigment
const ageJohn = 35;
const ageMark = 30;

// Deklaration
let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
isJohnOlder = (ageJohn > ageMark);
isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("age John: " + ageJohn);
// console.log("age Mark: " + ageMark);
// console.log("is John Older: " + isJohnOlder);
// console.log("is John Equal: " + isJohnEqual);
// console.log("------------------");

/********* IF ********/
// TINA  --> there is no alternitive!
// entweder Ja oder nix .... alternativlos

// if(true)
// if(false)
//if(isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John ist älter");
// }

/************* IF - ELSE  **********/
// mit Alternative
// entweder ja oder nein

//if(true)
//if(false)
// if(isJohnOlder)
//  {
//     // Ja -Zweig /true
//     console.log("John ist älter");
// } 
// else 
// {
//     // Nein Zweig false
//     console.log("John ist jünger");
// }

/******** Ternäre (ternary) Schreibweise  ********/
// console.log( (isJohnOlder) ? "John is older" : "Mark is oler");

/************* IF - ELSE - IF  *************/
// mit alternativen Fällen (älter, jünger, gleich alt)

// if(isJohnOlder)
//  {
//     console.log("John ist älter");
// } 
// // 1. Alternative
// else if(isJohnEqual)
// {
//     console.log("John ist gleich alt");
// }
// // evtl weitere Alternative(n) else if (){}
// // gemeinsame Alternative
// else
// {
//     console.log("john ist jünger");
// }

/*********** Fallunterscheidung / SWITCH/CASE 1 **************/

const firstName = "Jane";
let job;

job = "driver";     // .. fährt TAXI! / UBER
job = "diver";      // .. taucht im Rhein!
job = "artist";     // .. malt ein Bild!
job = "pilot";      // .. macht etwas anderes! --> default
job = "teacher";    // .. unterrichtet!
job = "instructor";  // .. unterrichtet!

// switch (job) { Test auf ==
//     case "driver":
//         console.log(firstName+ " fährt TAXI! / UBER");
//         break;
//     case "diver":
//         console.log(firstName+ " taucht im Rhein!");
//         break;
//     case "artist":
//         console.log(firstName+ " malt ein Bild!");
//         break;
//     case "teacher":
//     case "instructor":
//             console.log(firstName+ " unterrichtet");
//          break;
//     default:
//         console.log(firstName+ " machte was anderes!");
//         break;
// }

/********  Fallunterscheidung / SWITCH|CASE 2 *******/

const cond = true;
const a = 5;

switch (cond) {
    case (a == 1):
        console.log("a ist gleich 1")
        break;
    case (a == 2):
        console.log("a ist gleich 2")
        break;
    default:
        console.log("a hat einen anderen Wert")
        break;
}
