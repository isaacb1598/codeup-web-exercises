console.log("Hello from external JavaScript.")
alert("Welcome to my website!");
let color = prompt("What's your favorite color?");
alert(`Cool ${color} is my favorite too!`);

// previous lesson exercises
let TLM = prompt("How many days are you renting The Little mermaid for?");
let BB = prompt("How many days are you renting Brother Bear for?");
let H = prompt("How many days are you renting Hercules for?");
price = (TLM*3)+(BB*3)+(H*3);
alert(`You will have to pay $${price} for the movies.`)

//pay exercise
let google = prompt("What's your hourly wage at Google?");
let amazon = prompt("Whats your hourly wage at Amazon?");
let facebook = prompt("Whats your hourly wage at Facebook?");
let ghours = prompt("How many hours did you work at Google");
let ahours = prompt("How many hours did you work at Amazon?");
let fbhours = prompt("How many hours did you work at Facebook?");
let payday = (google*ghours)+(amazon*ahours)+(facebook*fbhours);
alert(`Your pay for this week is $${payday}`);

//enrollment exercise
let classfull = confirm("Is this class full?");
let conflict = confirm("Does this class conflict with your schedule?");
if (classfull === false && conflict === false){
    alert("you can enroll in this class!")
} else {
    alert("you can't enroll in this class.")
}

//produce exercise
let morethantwo = confirm("Did you buy more than two items?");
let offerexpired = confirm("Has the offer expired?");
let premiummember = confirm("Are you a premium member?");
let productoffer = (morethantwo || premiummember) && !offerexpired;
alert(`It is ${productoffer} that we can apply the offer.`)