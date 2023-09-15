//1st exercise

let num = 1;
while (num < 65536){
    num *= 2;
    console.log(num)
}

// 2nd exercise

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}
let totalCones = getRandomInt(50,100);

let wantToBuy;

do{
    wantToBuy = getRandomInt(1,5);
    if (wantToBuy <= totalCones){
        console.log(`a customer wants to buy ${wantToBuy} cones.`)
        totalCones -= wantToBuy;
    }else{
        console.log(`A customer tries to buy ${wantToBuy} cones but you only have ${totalCones} left`)
    }
    console.log(`You now have ${totalCones} left.`)
    if (totalCones===0){
        console.log(`you sold all your cones. Go home `)
    }
}while(totalCones > 0)