/* INFO MODAL CODE */
function openInfoBox() {
  // Get the modal
  let modal = document.getElementById("infoModal");

  // Get the button that opens the modal
  var button = document.getElementById("openModalButton");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  button.onclick = function () {
    modal.style.display = "block";
  };

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
}
openInfoBox();

//______________________________________________________________________________________________________________

/* SEARCH FORM CODE */

// FUNCTION TO ACCESS INPUT AND CHANGE CITY NAME ELEMENT BASED ON INPUT
function handleSearch(event) {
  event.preventDefault();

  // FUNCTION TO CHANGE DATE AND TIME
  function accessTime() {
    // FUNCTION TO GET SEARCHED TIME AND MANIPULATE DOM
    function getSearchedTime(thirdResponse) {
      let date = new Date(thirdResponse.data.time * 1000);
      let dateElement = document.querySelector("#current-date");
      let dayOne = document.querySelector("#day-one");
      let dayTwo = document.querySelector("#day-two");
      let dayThree = document.querySelector("#day-three");
      let dayFour = document.querySelector("#day-four");

      let minutes = date.getMinutes();
      let hours = date.getHours();
      let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      // GETTING THE TIME
      let listOfHours = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
      ];

      let listOfMinutes = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
      ];

      let currentHour = listOfHours[hours];
      let currentMinute = minutes;

      // code to fix minute print error
      if (currentMinute <= 9) {
        currentMinute = listOfMinutes[currentMinute];
      }

      // here is the current time
      let currentTime = `${currentHour}:${currentMinute}`;

      let day = days[date.getDay()];
      let shortDays = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
      let mainDayArrayNumber = days.indexOf(day);
      let searchedDate = `${day} ${currentTime}`;

      // DOM manipulation
      dateElement.innerHTML = searchedDate;
      dayOne.innerHTML = shortDays[mainDayArrayNumber + 1];
      dayTwo.innerHTML = shortDays[mainDayArrayNumber + 2];
      dayThree.innerHTML = shortDays[mainDayArrayNumber + 3];
      dayFour.innerHTML = shortDays[mainDayArrayNumber + 4];
    }

    let timeApiKey = "f83ea03eaec86b89t28973b8846f30o5";
    let timeApiUrl = `https://api.shecodes.io/weather/v1/current?query=${citySearch}&key=${timeApiKey}&units=metric
    `;

    // THIRD API CALL FOR TIME
    axios.get(timeApiUrl).then(getSearchedTime);
  }

  // FUNCTION TO CAPITALISE ACCESED USER INPUT
  function capitaliseLetter() {
    let submittedUserInput = userInput.value;
    const trimmedInput = submittedUserInput.trim();
    const firstLetter = trimmedInput.charAt(0);
    const firstLetterCap = firstLetter.toUpperCase();
    const remainingLetters = trimmedInput.slice(1);
    const updatedRemainingLetters = remainingLetters.toLowerCase();
    const updatedTrimmedInput = firstLetterCap + updatedRemainingLetters;

    return updatedTrimmedInput;
  }

  // FUNCTION TO GET LON AND LAT GEO CODES IN ORDER TO USE IN SECOND API CALL FOR TEMP
  function accessWeather(response) {
    // SECOND API CALL- to get temp
    function getTemperatureData(secondResponse) {
      // DOM manipulation function
      function changeTemperatureInfo() {
        cityName.innerHTML = updatedInput;

        humidityElement.innerHTML = humidity;
        windElement.innerHTML = wind;

        temperatureOneMax.innerHTML = dayOneTemperatureMax;
        temperatureTwoMax.innerHTML = dayTwoTemperatureMax;
        temperatureThreeMax.innerHTML = dayThreeTemperatureMax;
        temperatureFourMax.innerHTML = dayFourTemperatureMax;

        temperatureOneMin.innerHTML = dayOneTemperatureMin;
        temperatureTwoMin.innerHTML = dayTwoTemperatureMin;
        temperatureThreeMin.innerHTML = dayThreeTemperatureMin;
        temperatureFourMin.innerHTML = dayFourTemperatureMin;

        temperatureElement.innerHTML = mainTemperature;
        weatherDescriptionElement.innerHTML = weatherDescription;
      }
      // Function to change Temperature Teddy
      function changeTempTeddy() {
        // changing the main weather icon - Temperature Teddy
        if (weatherConditionMain === "Thunderstorm") {
          document.getElementById("temp-teddy").src =
            "./assets/thunderstorm.png";
        } else if (weatherConditionMain === "Drizzle") {
          document.getElementById("temp-teddy").src = "./assets/showerrain.png";
        } else if (weatherConditionMain === "Rain") {
          document.getElementById("temp-teddy").src = "./assets/rain.png";
        } else if (weatherConditionMain === "Snow") {
          document.getElementById("temp-teddy").src = "./assets/snow.png";
        } else if (weatherConditionMain === "Clear") {
          document.getElementById("temp-teddy").src = "./assets/clearsky.png";
        } else if (
          weatherConditionMain === "Haze" ||
          weatherConditionMain === "Mist" ||
          weatherConditionMain === "Smoke" ||
          weatherConditionMain === "Dust" ||
          weatherConditionMain === "Fog" ||
          weatherConditionMain === "Sand" ||
          weatherConditionMain === "Ash" ||
          weatherConditionMain === "Squall" ||
          weatherConditionMain === "Tornado"
        ) {
          document.getElementById("temp-teddy").src = "./assets/fog.png";
        } else if (
          weatherConditionMain === "Clouds" &&
          weatherConditionId === 801
        ) {
          document.getElementById("temp-teddy").src = "./assets/fewclouds.png";
        } else if (
          weatherConditionMain === "Clouds" &&
          weatherConditionId === 802
        ) {
          document.getElementById("temp-teddy").src =
            "./assets/brokenclouds.png";
        } else if (
          weatherConditionMain === "Clouds" &&
          weatherConditionId === 803
        ) {
          document.getElementById("temp-teddy").src =
            "./assets/brokenclouds.png";
        } else if (
          weatherConditionMain === "Clouds" &&
          weatherConditionId === 804
        ) {
          document.getElementById("temp-teddy").src = "./assets/cloudy.png";
        } else {
          document.getElementById("temp-teddy").src = "./assets/clearsky.png";
        }
      }

      // FETCHING CURRENT DATA
      let data = secondResponse.data;
      console.log(data);

      let mainTemperature = Math.round(secondResponse.data.list[0].main.temp);
      let fetchedWind =
        Math.round(secondResponse.data.list[0].wind.speed * 10) / 10;
      let fetchedHumidity = secondResponse.data.list[0].main.humidity;
      let wind = `${fetchedWind}m/s`;
      let humidity = `${fetchedHumidity}%`;
      let weatherDescription =
        secondResponse.data.list[0].weather[0].description;
      let weatherConditionMain = secondResponse.data.list[0].weather[0].main;
      let weatherConditionId = secondResponse.data.list[0].weather[0].id;

      // day +1 data
      let dayOneTemperatureMax = `${Math.round(
        secondResponse.data.list[8].main.temp_max
      )}&deg;C`;
      let dayOneTemperatureMin = `${Math.round(
        secondResponse.data.list[8].main.temp_min
      )}&deg;C`;
      let dayOneWeatherConditionMain =
        secondResponse.data.list[8].weather[0].main;

      if (
        dayOneWeatherConditionMain === "Thunderstorm" ||
        dayOneWeatherConditionMain === "Drizzle" ||
        dayOneWeatherConditionMain === "Rain"
      ) {
        document.getElementById("day-one-icon").innerHTML = "rainy";
      } else if (dayOneWeatherConditionMain === "Snow") {
        document.getElementById("day-one-icon").innerHTML = "cloudy_snowing";
      } else if (dayOneWeatherConditionMain === "Clear") {
        document.getElementById("day-one-icon").innerHTML = "sunny";
      } else if (
        dayOneWeatherConditionMain === "Haze" ||
        dayOneWeatherConditionMain === "Mist" ||
        dayOneWeatherConditionMain === "Smoke" ||
        dayOneWeatherConditionMain === "Dust" ||
        dayOneWeatherConditionMain === "Fog" ||
        dayOneWeatherConditionMain === "Sand" ||
        dayOneWeatherConditionMain === "Ash" ||
        dayOneWeatherConditionMain === "Squall" ||
        dayOneWeatherConditionMain === "Tornado"
      ) {
        document.getElementById("day-one-icon").innerHTML = "foggy";
      } else if (dayOneWeatherConditionMain === "Clouds") {
        document.getElementById("day-one-icon").innerHTML = "cloud";
      }

      // day +2 data
      let dayTwoTemperatureMax = `${Math.round(
        secondResponse.data.list[16].main.temp_max
      )}&deg;C`;
      let dayTwoTemperatureMin = `${Math.round(
        secondResponse.data.list[16].main.temp_min
      )}&deg;C`;
      let dayTwoWeatherConditionMain =
        secondResponse.data.list[16].weather[0].main;

      if (
        dayTwoWeatherConditionMain === "Thunderstorm" ||
        dayTwoWeatherConditionMain === "Drizzle" ||
        dayTwoWeatherConditionMain === "Rain"
      ) {
        document.getElementById("day-two-icon").innerHTML = "rainy";
      } else if (dayTwoWeatherConditionMain === "Snow") {
        document.getElementById("day-two-icon").innerHTML = "cloudy_snowing";
      } else if (dayTwoWeatherConditionMain === "Clear") {
        document.getElementById("day-two-icon").innerHTML = "sunny";
      } else if (
        dayTwoWeatherConditionMain === "Haze" ||
        dayTwoWeatherConditionMain === "Mist" ||
        dayTwoWeatherConditionMain === "Smoke" ||
        dayTwoWeatherConditionMain === "Dust" ||
        dayTwoWeatherConditionMain === "Fog" ||
        dayTwoWeatherConditionMain === "Sand" ||
        dayTwoWeatherConditionMain === "Ash" ||
        dayTwoWeatherConditionMain === "Squall" ||
        dayTwoWeatherConditionMain === "Tornado"
      ) {
        document.getElementById("day-two-icon").innerHTML = "foggy";
      } else if (dayTwoWeatherConditionMain === "Clouds") {
        document.getElementById("day-two-icon").innerHTML = "cloud";
      }

      // day +3 data
      let dayThreeTemperatureMax = `${Math.round(
        secondResponse.data.list[24].main.temp_max
      )}&deg;C`;
      let dayThreeTemperatureMin = `${Math.round(
        secondResponse.data.list[24].main.temp_min
      )}&deg;C`;
      let dayThreeWeatherConditionMain =
        secondResponse.data.list[24].weather[0].main;

      if (
        dayThreeWeatherConditionMain === "Thunderstorm" ||
        dayThreeWeatherConditionMain === "Drizzle" ||
        dayThreeWeatherConditionMain === "Rain"
      ) {
        document.getElementById("day-three-icon").innerHTML = "rainy";
      } else if (dayThreeWeatherConditionMain === "Snow") {
        document.getElementById("day-three-icon").innerHTML = "cloudy_snowing";
      } else if (dayThreeWeatherConditionMain === "Clear") {
        document.getElementById("day-three-icon").innerHTML = "sunny";
      } else if (
        dayThreeWeatherConditionMain === "Haze" ||
        dayThreeWeatherConditionMain === "Mist" ||
        dayThreeWeatherConditionMain === "Smoke" ||
        dayThreeWeatherConditionMain === "Dust" ||
        dayThreeWeatherConditionMain === "Fog" ||
        dayThreeWeatherConditionMain === "Sand" ||
        dayThreeWeatherConditionMain === "Ash" ||
        dayThreeWeatherConditionMain === "Squall" ||
        dayThreeWeatherConditionMain === "Tornado"
      ) {
        document.getElementById("day-three-icon").innerHTML = "foggy";
      } else if (dayThreeWeatherConditionMain === "Clouds") {
        document.getElementById("day-three-icon").innerHTML = "cloud";
      }

      // day +4 data
      let dayFourTemperatureMax = `${Math.round(
        secondResponse.data.list[32].main.temp_max
      )}&deg;C`;
      let dayFourTemperatureMin = `${Math.round(
        secondResponse.data.list[32].main.temp_min
      )}&deg;C`;
      let dayFourWeatherConditionMain =
        secondResponse.data.list[32].weather[0].main;

      if (
        dayFourWeatherConditionMain === "Thunderstorm" ||
        dayFourWeatherConditionMain === "Drizzle" ||
        dayFourWeatherConditionMain === "Rain"
      ) {
        document.getElementById("day-four-icon").innerHTML = "rainy";
      } else if (dayFourWeatherConditionMain === "Snow") {
        document.getElementById("day-four-icon").innerHTML = "cloudy_snowing";
      } else if (dayFourWeatherConditionMain === "Clear") {
        document.getElementById("day-four-icon").innerHTML = "sunny";
      } else if (
        dayFourWeatherConditionMain === "Haze" ||
        dayFourWeatherConditionMain === "Mist" ||
        dayFourWeatherConditionMain === "Smoke" ||
        dayFourWeatherConditionMain === "Dust" ||
        dayFourWeatherConditionMain === "Fog" ||
        dayFourWeatherConditionMain === "Sand" ||
        dayFourWeatherConditionMain === "Ash" ||
        dayFourWeatherConditionMain === "Squall" ||
        dayFourWeatherConditionMain === "Tornado"
      ) {
        document.getElementById("day-four-icon").innerHTML = "foggy";
      } else if (dayFourWeatherConditionMain === "Clouds") {
        document.getElementById("day-four-icon").innerHTML = "cloud";
      }

      // DOM variables
      let temperatureElement = document.querySelector("#temperature");
      let weatherDescriptionElement = document.querySelector(
        "#weather-description"
      );
      let humidityElement = document.querySelector("#humidity");
      let windElement = document.querySelector("#wind");

      let temperatureOneMax = document.querySelector("#temperature-one-max");
      let temperatureTwoMax = document.querySelector("#temperature-two-max");
      let temperatureThreeMax = document.querySelector(
        "#temperature-three-max"
      );
      let temperatureFourMax = document.querySelector("#temperature-four-max");

      let temperatureOneMin = document.querySelector("#temperature-one-min");
      let temperatureTwoMin = document.querySelector("#temperature-two-min");
      let temperatureThreeMin = document.querySelector(
        "#temperature-three-min"
      );
      let temperatureFourMin = document.querySelector("#temperature-four-min");

      changeTemperatureInfo();
      changeTempTeddy();
    }

    let fetchedLonCode = response.data[0].lon;
    let fetchedLatCode = response.data[0].lat;

    let apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
    let apiUrlMain = `https://api.openweathermap.org/data/2.5/forecast?lat=${fetchedLatCode}&lon=${fetchedLonCode}&appid=${apiKey}&units=metric`;

    axios.get(apiUrlMain).then(getTemperatureData);
  }

  // list of main global variables
  let userInput = document.querySelector("#search-form-input");
  let cityName = document.querySelector("#city-heading");
  let updatedInput = capitaliseLetter();
  let citySearch = userInput.value;
  let apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
  let apiUrlGeocode = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&appid=${apiKey}`;

  // FIRST API CALL - to get geo codes
  axios.get(apiUrlGeocode).then(accessWeather);

  // SECOND API CALL - found in accessWeather function

  // THIRD API CALL FOR TIME - found in accessTime function
  accessTime();
}

//______________________________________________________________________________________________________________

/* DOM LISTEN OUT FOR USER SEARCH */
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

//______________________________________________________________________________________________________________

/* RUN SEARCH FOR LONDON ON LOADUP - Code to run a search for "London" on load */

function loadup() {
  // console.log("working");

  // list of main variables

  let cityName = document.querySelector("#city-heading");
  let citySearch = "London";
  let apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
  let apiUrlGeocode = `http://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&appid=${apiKey}`;

  axios.get(apiUrlGeocode).then(accessWeather);

  // FUNCTION TO GET SEARCHED TIME AND MANIPULATE DOM
  function getSearchedTime(thirdResponse) {
    let date = new Date(thirdResponse.data.time * 1000);
    let dateElement = document.querySelector("#current-date");
    let dayOne = document.querySelector("#day-one");
    let dayTwo = document.querySelector("#day-two");
    let dayThree = document.querySelector("#day-three");
    let dayFour = document.querySelector("#day-four");

    let minutes = date.getMinutes();
    let hours = date.getHours();
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // GETTING THE TIME
    let listOfHours = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
      "10",
      "11",
      "12",
      "13",
      "14",
      "15",
      "16",
      "17",
      "18",
      "19",
      "20",
      "21",
      "22",
      "23",
    ];

    let listOfMinutes = [
      "00",
      "01",
      "02",
      "03",
      "04",
      "05",
      "06",
      "07",
      "08",
      "09",
    ];

    let currentHour = listOfHours[hours];
    let currentMinute = minutes;

    // code to fix minute print error
    if (currentMinute <= 9) {
      currentMinute = listOfMinutes[currentMinute];
    }

    // here is the current time
    let currentTime = `${currentHour}:${currentMinute}`;

    let day = days[date.getDay()];
    let shortDays = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    let mainDayArrayNumber = days.indexOf(day);
    let searchedDate = `${day} ${currentTime}`;

    // DOM manipulation
    dateElement.innerHTML = searchedDate;
    dayOne.innerHTML = shortDays[mainDayArrayNumber + 1];
    dayTwo.innerHTML = shortDays[mainDayArrayNumber + 2];
    dayThree.innerHTML = shortDays[mainDayArrayNumber + 3];
    dayFour.innerHTML = shortDays[mainDayArrayNumber + 4];

    // Time format fix
    if (minutes < 10) {
      minutes = `0${minutes}`;
    }
  }

  let timeApiKey = "f83ea03eaec86b89t28973b8846f30o5";
  let timeApiUrl = `https://api.shecodes.io/weather/v1/current?query=${citySearch}&key=${timeApiKey}&units=metric
    `;

  // THIRD API CALL FOR TIME
  axios.get(timeApiUrl).then(getSearchedTime);

  function accessWeather(response) {
    // SECOND API CALL- to get temp
    function getTemperatureData(secondResponse) {
      // DOM manipulation function

      // current day data
      let data = secondResponse.data;
      let mainTemperature = Math.round(secondResponse.data.list[0].main.temp);
      let fetchedWind =
        Math.round(secondResponse.data.list[0].wind.speed * 10) / 10;
      let fetchedHumidity = secondResponse.data.list[0].main.humidity;
      let wind = `${fetchedWind}m/s`;
      let humidity = `${fetchedHumidity}%`;
      let weatherDescription =
        secondResponse.data.list[0].weather[0].description;
      let weatherConditionMain = secondResponse.data.list[0].weather[0].main;
      let weatherConditionId = secondResponse.data.list[0].weather[0].id;

      // day +1 data
      let dayOneTemperatureMax = `${Math.round(
        secondResponse.data.list[8].main.temp_max
      )}&deg;C`;
      let dayOneTemperatureMin = `${Math.round(
        secondResponse.data.list[8].main.temp_min
      )}&deg;C`;
      let dayOneWeatherConditionMain =
        secondResponse.data.list[8].weather[0].main;

      if (
        dayOneWeatherConditionMain === "Thunderstorm" ||
        dayOneWeatherConditionMain === "Drizzle" ||
        dayOneWeatherConditionMain === "Rain"
      ) {
        document.getElementById("day-one-icon").innerHTML = "rainy";
      } else if (dayOneWeatherConditionMain === "Snow") {
        document.getElementById("day-one-icon").innerHTML = "cloudy_snowing";
      } else if (dayOneWeatherConditionMain === "Clear") {
        document.getElementById("day-one-icon").innerHTML = "sunny";
      } else if (
        dayOneWeatherConditionMain === "Haze" ||
        dayOneWeatherConditionMain === "Mist" ||
        dayOneWeatherConditionMain === "Smoke" ||
        dayOneWeatherConditionMain === "Dust" ||
        dayOneWeatherConditionMain === "Fog" ||
        dayOneWeatherConditionMain === "Sand" ||
        dayOneWeatherConditionMain === "Ash" ||
        dayOneWeatherConditionMain === "Squall" ||
        dayOneWeatherConditionMain === "Tornado"
      ) {
        document.getElementById("day-one-icon").innerHTML = "foggy";
      } else if (dayOneWeatherConditionMain === "Clouds") {
        document.getElementById("day-one-icon").innerHTML = "cloud";
      }

      // day +2 data
      let dayTwoTemperatureMax = `${Math.round(
        secondResponse.data.list[16].main.temp_max
      )}&deg;C`;
      let dayTwoTemperatureMin = `${Math.round(
        secondResponse.data.list[16].main.temp_min
      )}&deg;C`;
      let dayTwoWeatherConditionMain =
        secondResponse.data.list[16].weather[0].main;

      if (
        dayTwoWeatherConditionMain === "Thunderstorm" ||
        dayTwoWeatherConditionMain === "Drizzle" ||
        dayTwoWeatherConditionMain === "Rain"
      ) {
        document.getElementById("day-two-icon").innerHTML = "rainy";
      } else if (dayTwoWeatherConditionMain === "Snow") {
        document.getElementById("day-two-icon").innerHTML = "cloudy_snowing";
      } else if (dayTwoWeatherConditionMain === "Clear") {
        document.getElementById("day-two-icon").innerHTML = "sunny";
      } else if (
        dayTwoWeatherConditionMain === "Haze" ||
        dayTwoWeatherConditionMain === "Mist" ||
        dayTwoWeatherConditionMain === "Smoke" ||
        dayTwoWeatherConditionMain === "Dust" ||
        dayTwoWeatherConditionMain === "Fog" ||
        dayTwoWeatherConditionMain === "Sand" ||
        dayTwoWeatherConditionMain === "Ash" ||
        dayTwoWeatherConditionMain === "Squall" ||
        dayTwoWeatherConditionMain === "Tornado"
      ) {
        document.getElementById("day-two-icon").innerHTML = "foggy";
      } else if (dayTwoWeatherConditionMain === "Clouds") {
        document.getElementById("day-two-icon").innerHTML = "cloud";
      }

      // day +3 data
      let dayThreeTemperatureMax = `${Math.round(
        secondResponse.data.list[24].main.temp_max
      )}&deg;C`;
      let dayThreeTemperatureMin = `${Math.round(
        secondResponse.data.list[24].main.temp_min
      )}&deg;C`;
      let dayThreeWeatherConditionMain =
        secondResponse.data.list[24].weather[0].main;

      if (
        dayThreeWeatherConditionMain === "Thunderstorm" ||
        dayThreeWeatherConditionMain === "Drizzle" ||
        dayThreeWeatherConditionMain === "Rain"
      ) {
        document.getElementById("day-three-icon").innerHTML = "rainy";
      } else if (dayThreeWeatherConditionMain === "Snow") {
        document.getElementById("day-three-icon").innerHTML = "cloudy_snowing";
      } else if (dayThreeWeatherConditionMain === "Clear") {
        document.getElementById("day-three-icon").innerHTML = "sunny";
      } else if (
        dayThreeWeatherConditionMain === "Haze" ||
        dayThreeWeatherConditionMain === "Mist" ||
        dayThreeWeatherConditionMain === "Smoke" ||
        dayThreeWeatherConditionMain === "Dust" ||
        dayThreeWeatherConditionMain === "Fog" ||
        dayThreeWeatherConditionMain === "Sand" ||
        dayThreeWeatherConditionMain === "Ash" ||
        dayThreeWeatherConditionMain === "Squall" ||
        dayThreeWeatherConditionMain === "Tornado"
      ) {
        document.getElementById("day-three-icon").innerHTML = "foggy";
      } else if (dayThreeWeatherConditionMain === "Clouds") {
        document.getElementById("day-three-icon").innerHTML = "cloud";
      }

      // day +4 data
      let dayFourTemperatureMax = `${Math.round(
        secondResponse.data.list[32].main.temp_max
      )}&deg;C`;
      let dayFourTemperatureMin = `${Math.round(
        secondResponse.data.list[32].main.temp_min
      )}&deg;C`;
      let dayFourWeatherConditionMain =
        secondResponse.data.list[32].weather[0].main;

      if (
        dayFourWeatherConditionMain === "Thunderstorm" ||
        dayFourWeatherConditionMain === "Drizzle" ||
        dayFourWeatherConditionMain === "Rain"
      ) {
        document.getElementById("day-four-icon").innerHTML = "rainy";
      } else if (dayFourWeatherConditionMain === "Snow") {
        document.getElementById("day-four-icon").innerHTML = "cloudy_snowing";
      } else if (dayFourWeatherConditionMain === "Clear") {
        document.getElementById("day-four-icon").innerHTML = "sunny";
      } else if (
        dayFourWeatherConditionMain === "Haze" ||
        dayFourWeatherConditionMain === "Mist" ||
        dayFourWeatherConditionMain === "Smoke" ||
        dayFourWeatherConditionMain === "Dust" ||
        dayFourWeatherConditionMain === "Fog" ||
        dayFourWeatherConditionMain === "Sand" ||
        dayFourWeatherConditionMain === "Ash" ||
        dayFourWeatherConditionMain === "Squall" ||
        dayFourWeatherConditionMain === "Tornado"
      ) {
        document.getElementById("day-four-icon").innerHTML = "foggy";
      } else if (dayFourWeatherConditionMain === "Clouds") {
        document.getElementById("day-four-icon").innerHTML = "cloud";
      }

      // DOM variables
      let temperatureElement = document.querySelector("#temperature");
      let weatherDescriptionElement = document.querySelector(
        "#weather-description"
      );

      let humidityElement = document.querySelector("#humidity");
      let windElement = document.querySelector("#wind");
      let dayOne = document.querySelector("#day-one");
      let dayTwo = document.querySelector("#day-two");
      let dayThree = document.querySelector("#day-three");
      let dayFour = document.querySelector("#day-four");
      let temperatureOneMax = document.querySelector("#temperature-one-max");
      let temperatureTwoMax = document.querySelector("#temperature-two-max");
      let temperatureThreeMax = document.querySelector(
        "#temperature-three-max"
      );
      let temperatureFourMax = document.querySelector("#temperature-four-max");

      let temperatureOneMin = document.querySelector("#temperature-one-min");
      let temperatureTwoMin = document.querySelector("#temperature-two-min");
      let temperatureThreeMin = document.querySelector(
        "#temperature-three-min"
      );
      let temperatureFourMin = document.querySelector("#temperature-four-min");

      function changeTemperatureInfo() {
        cityName.innerHTML = "London";

        humidityElement.innerHTML = humidity;
        windElement.innerHTML = wind;

        temperatureOneMax.innerHTML = dayOneTemperatureMax;
        temperatureTwoMax.innerHTML = dayTwoTemperatureMax;
        temperatureThreeMax.innerHTML = dayThreeTemperatureMax;
        temperatureFourMax.innerHTML = dayFourTemperatureMax;

        temperatureOneMin.innerHTML = dayOneTemperatureMin;
        temperatureTwoMin.innerHTML = dayTwoTemperatureMin;
        temperatureThreeMin.innerHTML = dayThreeTemperatureMin;
        temperatureFourMin.innerHTML = dayFourTemperatureMin;

        temperatureElement.innerHTML = mainTemperature;
        weatherDescriptionElement.innerHTML = weatherDescription;
      }
      changeTemperatureInfo();
    }

    let fetchedLonCode = response.data[0].lon;
    let fetchedLatCode = response.data[0].lat;

    let apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
    let apiUrlMain = `https://api.openweathermap.org/data/2.5/forecast?lat=${fetchedLatCode}&lon=${fetchedLonCode}&appid=${apiKey}&units=metric`;

    axios.get(apiUrlMain).then(getTemperatureData);
  }
  openInfoBox();
}
window.onload = loadup;

//______________________________________________________________________________________________________________
