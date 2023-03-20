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

async function getWeather(city) {
  let response = await fetch(
    `https://api.weatherapi.com/v1/current.json?key=7c6fdbf7f5714df984393840232003&q=${city}&aqi=no`
  );
  let data = await response.json();
  console.log(data);
}
