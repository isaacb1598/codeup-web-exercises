// 1st exercise

function showMultiplicationTable (number) {
    for (let i = 1; i <= 10; i++) {
        const number =7
        let result = i * number;
        console.log(`${number} * ${i} = ${result}`);
    }
}
showMultiplicationTable()

// 2nd exercise

for (let i = 0; i < 10; i++) {
    const randomNumber = Math.floor(Math.random() * (200 - 20 + 1)) + 20
    if (isEven(randomNumber)) {
        console.log(`${randomNumber} is an even number`);
    } else {
        console.log(`${randomNumber} is an odd number`);
    }
    function isEven (number){
        return number % 2 === 0
    }
}

// 3rd exercise

for (let i = 1; i < 10; i++) {
    let repeatNumber = "" + i;
    console.log(repeatNumber.repeat(repeatNumber));
}

// 4th exercise

for (var i = 100; i > 0; i = i - 5) {
    console.log('' + i);
}