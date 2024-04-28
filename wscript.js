async function fetchWeatherData() {
    var city = document.getElementById("city").value;
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${"4b93e19ab52fcb74f0502165db2b9563"}&units=metric`);
    const data = await response.json();
    displayWeather(data);
}
function displayWeather(data) {
    const weather_detail = document.getElementById("weather_detail");
    city_name.innerHTML = "Weather Today in " + data.name + ", " + data.sys.country;
    city_temp2.innerHTML = data.main.temp + "°C";
    feels_like.innerHTML = data.main.feels_like + "°C"; max_min_temp.innerHTML = data.main.temp_max + "°C" + "/" + data.main.temp_min + "°C";
    humidity.innerHTML = data.main.humidity + "%"; pressure.innerHTML = data.main.pressure + "mb"; wind.innerHTML = data.wind.speed + "km/h";
    sunrise.innerHTML = data.sys.sunrise; sunset.innerHTML = data.sys.sunset; sys.innerHTML = data.sys;
}
fetchWeatherData();