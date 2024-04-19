document.addEventListener('DOMContentLoaded', function () {

const APIKEY = "52d715a38a59fbac4681e4ef016af901";
const APIURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
    
async function checkweather(city) {
    const response = await fetch(APIURL + city + `&appid=${APIKEY}`);
    const data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%"
    document.querySelector(".wind").innerHTML = data.wind.speed + " Km/h"
}

searchBtn.addEventListener("click", ()=>{
    checkweather(searchbox.value); 
})
});
