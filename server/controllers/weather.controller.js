const axios = require("axios");
require("dotenv").config();

const titleDate = (date) => {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}/${month}/${year} at ${hours}:${minutes}`;
};

const CityName = (city) => {
  return city
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
};

const checkCityName = async (city) => {
  const apiKey = process.env.WEATHER_KEY;
  const apiUrl = `http://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${city}`;
  try {
    const response = await axios.get(apiUrl);
    const cityData = response.data;
    return cityData.some((data) => data.name === city || data.region === city);
  } catch (error) {
    console.error("Error checking city name:", error);
    return false;
  }
};

const getWeatherData = async (req, res) => {
  const city = req.query.city;
  const citynameFix = CityName(city);
  const isValidCity = await checkCityName(citynameFix);
  if (!isValidCity) {
    return res.status(400).json({ error: "Invalid city name" });
  }
  const apiKey = process.env.WEATHER_KEY;
  const apiUrl = `http://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${citynameFix}&days=2&aqi=no`;

  try {
    const response = await axios.get(apiUrl);
    const weatherData = response.data;
    const now = new Date();
    const fiveHoursLater = new Date(now.getTime() + 5 * 60 * 60 * 1000);
    const hoursData = weatherData.forecast.forecastday.flatMap(
      (day) => day.hour
    );

    const filterFiveHours = hoursData
      .filter(
        (hour) =>
          new Date(hour.time) > now && new Date(hour.time) <= fiveHoursLater
      )
      .map((hour) => ({
        time: new Date(hour.time).toLocaleTimeString("en-GB", {
          hour: "2-digit",
          minute: "2-digit",
        }),
        temperature: hour.temp_c,
      }));

    res.json({
      city: weatherData.location.name,
      region: weatherData.location.region,
      country: weatherData.location.country,
      date: titleDate(new Date(weatherData.location.localtime)),
      temperature: weatherData.current.temp_c,
      weather: weatherData.current.condition.text,
      precipitation: `${weatherData.current.precip_mm} mm`,
      humidity: `${weatherData.current.humidity}%`,
      wind: `${weatherData.current.wind_kph} km/h`,
      time: filterFiveHours,
      latitude: weatherData.location.lat,
      longitude: weatherData.location.lon,
    });
  } catch (error) {
    console.error("Error fetching weather data:", error);
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
};

module.exports = { getWeatherData };
