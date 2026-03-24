//  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
const apiKey = "56e3efd0161bd4924715340dbf2cafe4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const celsiusTemp = document.getElementById("celsiusTemp");
const city = document.getElementById("city");
const humanity = document.getElementById("humanity");
const windSpeed = document.getElementById("windSpeed");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const weatherIcon = document.getElementById("weatherIcon");
const weather1 = document.getElementById("weather1");
const weather2 = document.getElementById("weather2");
const errorDiv = document.getElementById("error");
// console.log(errorDiv);

const loadData = (city) => {
  fetch(`${apiUrl}&q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

displayData = (data) => {
  // console.log(data); // clouds, haze, clear, drizzle, mist, rain, snow
  celsiusTemp.innerText = Math.round(data.main.temp);
  city.innerText = data.name;
  humanity.innerText = data.main.humidity;
  windSpeed.innerText = data.wind.speed;

  if (data.cod === 404) {
    errorDiv.classList.remove("hidden");
    weather1.classList.add("hidden");
    weather2.classList.add("hidden");
  } else {
    if (data.weather[0].main === "Clouds")
      weatherIcon.src = "./weather-app-img/clouds.png";
    else if (data.weather[0].main === "Haze")
      weatherIcon.src = "./weather-app-img/haze.png";
    else if (data.weather[0].main === "Mist")
      weatherIcon.src = "./weather-app-img/mist.png";
    else if (data.weather[0].main === "Clear")
      weatherIcon.src = "./weather-app-img/clear.png";
    else if (data.weather[0].main === "Drizzle")
      weatherIcon.src = "./weather-app-img/drizzle.png";
    else if (data.weather[0].main === "Rain")
      weatherIcon.src = "./weather-app-img/rain.png";
    else if (data.weather[0].main === "Snow")
      weatherIcon.src = "./weather-app-img/snow.png";

    errorDiv.classList.add("hidden");
    weather1.classList.remove("hidden");
    weather2.classList.remove("hidden");
  }
};

searchBtn.addEventListener("click", () => {
  loadData(searchInput.value.trim());
});
