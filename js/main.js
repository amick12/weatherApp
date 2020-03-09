const API = {
    baseUrl: 'https://api.openweathermap.org/data/2.5/weather?',
    zipUrl: 'https://api.openweathermap.org/data/2.5/weather?zip=',
    key: '&appid=9455c9bb4897f5743020439d84f7137b'
}

let alert = document.getElementById('alertId');
let form = document.getElementById('form');

let city = document.getElementById('city');
let temperature = document.getElementById('temperature');
let conditions = document.getElementById('conditions');
let wind = document.getElementById('wind');
let humidity = document.getElementById('humidity');
let image = document.getElementById('image');

// window.addEventListener('load', () => {

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(position => {
//             console.log(position);
//             let longitude, latitude;

//             longitude = position.coords.longitude;
//             latitude = position.coords.latitude;

//             let coordURL = API.baseUrl + `lat=${latitude}&lon=${longitude}&appid=${API.key}`;

//             fetch(coordURL)

//                 .then((results) => {
//                     return results.json();
//                 })
//                 .then((data) => {
//                     display(data);

//                 })
//                 .catch(error => console.log('No Geolocation Enabled'));
//         })
//     }
// });
document.getElementById('zipBtn').addEventListener('click', getWeather);

function getWeather() {
    let zipInp = document.getElementById('zipInp').value;

    fetch(API.zipUrl + zipInp + API.key)

        .then((results) => {
            return results.json();
        })
        .then((data) => {
            display(data);

        })
        .catch(error => console.log('Bad Response'));
}



function display(data) {

    //TODO: toUpperCase description[0]
    //TODO: Icons
    //TODO: F & C
    //convert temp K to F
    // T(°F) = T(K) × 9/5 - 459.67

    let f = Math.floor(data.main.temp * (9 / 5) - 459.67);

    city.innerText = `${data.name}, ${data.sys.country}`;
    temperature.innerHTML = f + "&deg";
    conditions.innerHTML = `${data.weather[0].description}`;
    humidity.innerHTML = `${data.main.humidity}%`;
    wind.innerHTML = `${data.wind.speed}m/s`;
}


