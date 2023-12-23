const container = document.querySelector(".container");
const search = document.querySelector(".search-box button");
const weatherBox = document.querySelector(".weather-box");
const weatherDetails = document.querySelector(".weather-details");

search.addEventListener("click", () => {
  const APIKey = "b3fd849da92d6e0cade1d258c717f6b0";
  const city = document.querySelector(".search-box input").value;
  if (city == "") return;

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((json) => {
      const image = document.querySelector(".weather-box img");
      const temperature = document.querySelector(".weather-box .temperature");
      const description = document.querySelector(".weather-box .description");
      const humidity = document.querySelector(
        ".weather-details .humidity span"
      );
      const wind = document.querySelector(".weather-details .wind span");

      switch (json.weather[0].main) {
        case "Clear":
          image.src = "/img/gunesli.png";
          break;
        case "Rain":
          image.src = "/img/yagmurlu.png";
          break;

        case "Snow":
          image.src = "/img/kar.png";
          break;

        case "Clouds":
          image.src = "/img/parcalı-bulut.png";
          break;

        case "Mist":
          image.src = "/img/sisli.png";
          break;

        case "Thunderstorm":
          image.src = "/img/simsekli-yagmur.png";
          break;

        default:
          image.src = "img/asirisoguk.png";
      }

      temperature.innerHTML = `${parseInt(json.main.temp)}<span>°C</span>`;
      description.innerHTML = `${json.weather[0].description}`;
      humidity.innerHTML = `${json.main.humidity}%`;
      wind.innerHTML = `${parseInt(json.wind.speed)} Km/h`;
    });
});
