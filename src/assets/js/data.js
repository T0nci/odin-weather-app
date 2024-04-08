function handleError(error) {
  const errorDiv = document.querySelector(".error");
  errorDiv.textContent = error;
}

// eslint-disable-next-line consistent-return
async function fetchWeatherData(city) {
  try {
    const API_KEY = "9eaca488af0b425a9e5175439240304";

    const response = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}`,
    );

    return response.json();
  } catch (err) {
    handleError(err);
  }
}

function formatData(data) {
  const [date, time] = data.location.localtime.split(" ");
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[new Date(date).getDay()];

  return {
    city: data.location.name,
    country: data.location.country,
    day,
    time,
    weather: data.current.condition.text,
    weather_icon: `https:${data.current.condition.icon}`,
    temp: `${data.current.temp_c}°C`,
    feelslike: `${data.current.feelslike_c}°C`,
    is_day: data.current.is_day,
    humidity: data.current.humidity,
    uv: data.current.uv,
    wind: `${data.current.wind_kph}kph`,
    wind_dir: data.current.wind_dir,
  };
}

function getWeatherData(location) {
  let city;
  if (!location) {
    city = "london";
  } else {
    city = location;
  }

  fetchWeatherData(city)
    .then((data) => {
      console.log(formatData(data));
    })
    .catch(handleError); // for response.json();
}

export default getWeatherData;
