const counter = 0;

let profilePic = document.getElementById('profile-pic');

function profilePicChange() {
    profilePic.src = 'img/profile-pic.webp'
}

function profileNameChange() {
    document.getElementById('profile-name').innerHTML = "Isaac Bernal";
}

function descriptionChange() {
    document.getElementById('profile-desc').classList.add('font');
}

const colors = ['red', 'orange', 'yellow', 'blue', 'purple']

let colorIndex = -1;
function cardColor() {
    document.getElementById('profile-card').classList.toggle('card-color');
    colorIndex++;
    if(colorIndex >= colors.length) {
        colorIndex = 0;
    }
    document.getElementById('profile-card').style.backgroundColor = colors[colorIndex];
}

window.setTimeout(profilePicChange, 2000);
window.setTimeout(profileNameChange, 4000);
window.setTimeout(descriptionChange, 6000);

window.setInterval(cardColor, 2000);