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
if(ageJohn > ageMark)
{
    console.log("John ist älter");
}