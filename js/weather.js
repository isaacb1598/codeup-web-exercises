const date_1 = document.querySelector('#date_1')
const card_1 = document.querySelector('#list-1')
const date_2 = document.querySelector('#date_2')
const date_3 = document.querySelector('#date_3')
const date_4 = document.querySelector('#date_4')
const date_5 = document.querySelector('#date_5')

fetch(`https://api.openweathermap.org/data/2.5/forecast?` +
        `lat=29.426825118534886&lon=-98.48948239256946` +
        `&appid=${OPENWHEATHER_API_KEY}` +
        `&units=imperial`)
.then(data => data.json())
.then(forecast => {
    console.log(forecast);
    forecast.list.forEach((weather, index) => {
        if (index === 0) {
            date_1.innerText = weather.dt_txt;
            // card_1.firstElementChild.innerText = weather.weather.description

        }

    })
});

// const date = document.createElement('p');
// date.innerText = weather.dt_txt;
// dateOutput.appendChild(date);
