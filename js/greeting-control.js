import randomGreeting from "./greeting-logic.js";
function completeGreeting() {
    const greetingOutput = document.querySelector('#container');

    const name = String(prompt('What is your name?'));

    const nameGreeting = document.createElement('p');
    nameGreeting.innerText = randomGreeting() +` ${name}`;
    greetingOutput.appendChild(nameGreeting);
}
completeGreeting()