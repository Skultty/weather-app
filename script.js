// add event listener for cancel
document.getElementById("cancel").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("modal").classList.add("hidden");
});

// add event listener for submit
document.getElementById("submit").addEventListener("click", function (event) {
  event.preventDefault();
  let city = document.getElementById("city").value;
  getWeather(city);
  document.getElementById("modal").classList.add("hidden");
});

// add event listener for change location
document
  .getElementById("change-location")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("modal").classList.remove("hidden");
  });

async function getWeather(city) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=7c6fdbf7f5714df984393840232003&q=${city}&aqi=no`
  );
  let data = await response.json();
  console.log(data);
  displayWeather(data);
}

function displayWeather(data) {
  document.getElementById("city-name").textContent = data.location.name;
  console.log(document.getElementById("city-name"));
  document.getElementById("current-temp").textContent = data.current.temp_c;
  document.getElementById("weather-description").textContent =
    data.current.condition.text;
  document.getElementById("weather-icon").src =
    "https:" + data.current.condition.icon;
}
