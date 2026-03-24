//  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
const apiKey = "56e3efd0161bd4924715340dbf2cafe4";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?";

const celsiusTemp = document.getElementById("celsiusTemp")
const city = document.getElementById("city")
const humanity = document.getElementById("humanity")
const windSpeed = document.getElementById("windSpeed")
const searchInput = document.getElementById("searchInput")
const searchBtn = document.getElementById("searchBtn")
// console.log(searchBtn);

const loadData = (city) => {
  fetch(`${apiUrl}&q=${city}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => displayData(data));
};

displayData = (data) => {
  // console.log(data);
  celsiusTemp.innerText = Math.round(data.main.temp)
  city.innerText = data.name
  humanity.innerText =data.main.humidity
  windSpeed.innerText = data.wind.speed
}

searchBtn.addEventListener("click" , () => {
  loadData(searchInput.value.trim());
})


