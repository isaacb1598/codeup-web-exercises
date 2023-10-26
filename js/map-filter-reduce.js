const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];
// Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.
const threeLanguages = users.filter(user => user.languages.length > 2);
console.log(threeLanguages);

/*
Use .map to create an array of strings where each element is a user's email address
*/
const emails = users.map(user => user.email);
console.log(emails);
// const emails = users.map(function (user) {
//     return user.email;
// });
/*Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result to calculate the average.*/
const experience = users.map(user => user.yearsOfExperience);
const totalExperience = experience.reduce((total, userExperience) => {
    return total + userExperience;
}, 0);
console.log(totalExperience);

const average = totalExperience/experience.length
console.log(average);

// const totalYears = users.reduce(function (totalSoFar, user) {
//     return totalSoFar + user.yearsOfExperience;
// }, 0);
// console.log(totalYears);
// console.log(totalYears / users.length);

/*Use .reduce to get the longest email from the list of users.*/

// function findLongestEmail(maxSoFar, currentEmail) {
//     if(emails.length < maxSoFar.email.length) {
//         return currentEmail;
//     }
//     return maxSoFar;
// }
// const longestEmail = users.reduce(findLongestEmail, users);
// console.log(longestEmail);

const longestEmail = users.reduce(function (longestSoFar, user) {
    if (user.email.length > longestSoFar.length) {
        return user.email;
    }
    return longestSoFar;
}, users[0].email);
console.log(longestEmail);

/*Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.*/

const names = users.reduce( function (namesSoFar, user) {
    if (namesSoFar.length > 0) {
        namesSoFar += ', ';
    }
    return namesSoFar + user.name;
}, '');
console.log('Your instructors are: ' + names)

const names2 = users.map(function (user) {
    return user.name;
});
console.log(names2.join(", "));