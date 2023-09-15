//exercise 1

function isEven (number){
         return number % 2 === 0
}

let numFromUser;

do {
    numFromUser = parseInt(prompt("Please enter an odd number between 1 & 50"));

    if (isEven(numFromUser)) {
        alert("Nah try again")
        continue;
    }

    if (numFromUser<1 || numFromUser> 50) {
        alert(`${numFromUser} isn't between 1 and 50 try again`)
        continue;
    }

    if (!isFinite(numFromUser)){
        alert(`${numFromUser} isn't a number try again`)
        continue;
    }
    break;

} while(true);

console.log(`Number to skip is ${numFromUser}`)

for (let i = 1; i < 50; i++) {
    if (isEven(i)) {
        continue;
    }
    if (i === numFromUser) {
        console.log(`Skipping ${numFromUser}`)
        continue
    }
    console.log(`Here's an odd number ${i}`)
}