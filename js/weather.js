import API_KEY from "./apikey.js";

function onGeo(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      const temperature = document.querySelector("#weather span:first-child");
      const city = document.querySelector("#weather span:last-child");
      const roundedTemp = Math.round(data.main.temp);

      temperature.innerText = `${roundedTemp}°`;
      city.innerText = data.name;
    });
}

function onGeoErr() {
  alert(`Error!, Can't find you`);
}

navigator.geolocation.getCurrentPosition(onGeo, onGeoErr);
