"use strict";

/* Sam Culp */

var randomQ = randomInt(0,7);

var quoteElem = document.getElementsByTagName("quote")[0]

quoteElem.innerHTML = getQuote(randomQ);

function randomInt(lowest,size) {
   return Math.floor(lowest+size*Math.random());
}

function getQuote(n) {
   var quote = [
   "Welcome to Our Zoo!",
   "Have a Whale of a time!",
   "Watch out for the Tigers!",
   "Come on Down any Day!",
   "Hope you have a Great Day!",
   "Check out the Animals page to learn more about our Animals!",
   "Plan A trip Today!"
   ];
   
   return quote[n];
}