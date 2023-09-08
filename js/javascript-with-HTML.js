"use strict";

// let userChoice = confirm("wait up!!");
// if (userChoice === true){
//     console.log("yay!")
// } else {
//     console.log("boooo");
// }
let currentSpeed = prompt("How fast are you driving?");
let plannedSpeed = prompt("How fast do you want to drive?");
let distanceleft = prompt("How many miles do you have left?");

let timeAtCurrentSpeed = (distanceleft/currentSpeed) * 60;
let timeAtPlannedSpeed = (distanceleft/plannedSpeed) * 60
let timeSaved = timeAtCurrentSpeed - timeAtPlannedSpeed;

console.log(`At your current speed you will take ${timeAtCurrentSpeed.toFixed(0)} minutes. At your planned speed you will take ${timeAtPlannedSpeed.toFixed(0)} minutes. You will save ${timeSaved.toFixed(0)} minutes.`);