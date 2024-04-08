function initializeSearchForm(cb, cb1) {
  const searchForm = document.querySelector("form");

  searchForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const form = e.currentTarget;
    const searchField = form.querySelector('[type="search"]');

    if (!searchField.value) {
      const errorDiv = document.querySelector(".error");
      errorDiv.textContent = "This field is required!";
      setTimeout(() => {
        errorDiv.textContent = "";
      }, 10000);
    } else {
      cb(searchField.value, cb1);
    }

    searchField.value = "";
  });
}

function showWeatherData(data) {
  const weatherDiv = document.querySelector(".weather");
  weatherDiv.textContent = "";

  weatherDiv.classList.remove("day", "night");
  if (data.is_day) {
    weatherDiv.classList.add("day");
  } else {
    weatherDiv.classList.add("night");
  }

  const icon = new Image();
  icon.src = data.weather_icon;
  icon.classList.add("icon");

  const cityCountry = document.createElement("div");
  cityCountry.textContent = `${data.city}, ${data.country}`;

  const dayTime = document.createElement("div");
  dayTime.textContent = `${data.day}, ${data.time}`;

  const weatherInfo = document.createElement("div");
  weatherInfo.textContent = `Weather: ${data.weather_info}`;

  const temp = document.createElement("div");
  temp.textContent = `Temperature: ${data.temp}`;

  const feelslike = document.createElement("div");
  feelslike.textContent = `Feels like: ${data.feelslike}`;

  const humidity = document.createElement("div");
  humidity.textContent = `Humidity: ${data.humidity}`;

  const uv = document.createElement("div");
  uv.textContent = `UV index: ${data.uv}`;

  const wind = document.createElement("div");
  wind.textContent = `Wind: ${data.wind_speed}, direction: ${data.wind_dir}`;

  weatherDiv.appendChild(icon);
  weatherDiv.appendChild(cityCountry);
  weatherDiv.appendChild(dayTime);
  weatherDiv.appendChild(weatherInfo);
  weatherDiv.appendChild(temp);
  weatherDiv.appendChild(feelslike);
  weatherDiv.appendChild(humidity);
  weatherDiv.appendChild(uv);
  weatherDiv.appendChild(wind);
}

export { initializeSearchForm, showWeatherData };
