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
// console.log(weatherIcon);

const loadData = (city) => {
  fetch(`${apiUrl}&q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

displayData = (data) => {
  console.log(data.weather[0].main); // clouds, haze, clear, drizzle, mist, rain, snow
  celsiusTemp.innerText = Math.round(data.main.temp);
  city.innerText = data.name;
  humanity.innerText = data.main.humidity;
  windSpeed.innerText = data.wind.speed;

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
};

searchBtn.addEventListener("click", () => {
  loadData(searchInput.value.trim());
});
