"use strict"

const  ghOptions = {
    method: "GET",
    headers: {
        "Authorization": "token" + github_API_KEY
    }
}
const eventsPromise = fetch("https://api.github.com/users/isaacb1598/events/public", ghOptions)
    .then(response => response.json())
    .then(data => console.log(data));


function getLastCommitDate(userName) {
    return fetch(`https://api.github.com/users/${userName}/events/public`, ghOptions)
        .then(response => response.json())

}

getLastCommitDate("isaacb1598")
    .then(data => {
        for (let i = 0; i < data.length; i++) {
            if(data[i].type === "PushEvent") {
                console.log("last commit " + data[i].created_at);
                break;
            }
            console.log("user must be lazy");
        }
    });