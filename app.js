// 
const apiKey = "90204aec3b7c0d3589459a17ea2beb80";
const apiCountry = "https://countryflagsapi.com/png/";

const cityInput = document.querySelector("#city-input");
const searchBtn = document.querySelector('#search');

const showWeatherData = (city) => {
    console.log(city)
 }

searchBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const city = cityInput.value;

    console.log(showWeatherData);
})