const apiKey = "a303435a00feb1cd99802f5cbb8ed2e6";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const cityName = document.querySelector(".city");
const temprator = document.querySelector(".temp");
const humidity = document.querySelector(".humidtiy");
const wind = document.querySelector(".wind");

const searchBox = document.querySelector(".search-input");
const searchBtn = document.querySelector(".img");
const weatherIcon = document.querySelector(".weather-icon");
const error = document.querySelector(".error");

const weather = document.querySelector(".weather");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

  if (response.status == 404) {
    error.style.display = "block";
    weather.style.display = "none";

  } else {
    let data = await response.json();

    cityName.innerHTML = data.name;
    temprator.innerHTML = Math.round(data.main.temp) + "°C";
    humidity.innerHTML = data.main.humidity + "%";
    wind.innerHTML = data.wind.speed + `<small>kh/h</small>`;
    console.log(data);

    if (data.weather[0].main == "Clouds") {
      weatherIcon.src = "images/clouds.png";
    } else if (data.weather[0].main == "Clear") {
      weatherIcon.src = "images/clear.png";
    } else if (data.weather[0].main == "rain") {
      weatherIcon.src = "images/Rain.png";
    } else if (data.weather[0].main == "Snow") {
      weatherIcon.src = "images/snow.png";
    } else if (data.weather[0].main == "Drizzle") {
      weatherIcon.src = "images/drizzle.png";
    } else if (data.weather[0].main == "Mist") {
      weatherIcon.src = "images/mist.png";
    }

    weather.style.display = "block";
    error.style.display = "none";
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
