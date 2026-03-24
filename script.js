//  https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}&units=metric
const apiKey = "56e3efd0161bd4924715340dbf2cafe4";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?q=Dhaka";

const celsiusTemp = document.getElementById("celsiusTemp")
const city = document.getElementById("city")
const humanity = document.getElementById("humanity")
const windSpeed = document.getElementById("windSpeed")
console.log(windSpeed);

const loadData = () => {
  fetch(`${apiUrl}&appid=${apiKey}&units=metric`)
    .then((res) => res.json())
    .then((data) => console.log(data));
};
loadData();
