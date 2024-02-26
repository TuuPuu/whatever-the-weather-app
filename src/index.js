/* INFO MODAL CODE */
function openInfoBox() {
  // Get the modal
  const modal = document.getElementById("infoModal");

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
      const date = new Date(thirdResponse.data.time * 1000);
      const dateElement = document.querySelector("#current-date");
      const cityHeading = document.querySelector("#city-heading");
      const dayOne = document.querySelector("#day-one");
      const dayTwo = document.querySelector("#day-two");
      const dayThree = document.querySelector("#day-three");
      const dayFour = document.querySelector("#day-four");

      let minutes = date.getMinutes();
      const hours = date.getHours();
      const days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];

      // GETTING THE TIME
      const listOfHours = [
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

      const listOfMinutes = [
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

      const currentHour = listOfHours[hours];
      let currentMinute = minutes;

      // code to fix minute print error
      if (currentMinute <= 9) {
        currentMinute = listOfMinutes[currentMinute];
      }

      // here is the current time
      const currentTime = `${currentHour}:${currentMinute}`;

      const day = days[date.getDay()];
      const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
      const mainDayArrayNumber = days.indexOf(day);
      const searchedDate = `${day} ${currentTime}`;

      // DOM manipulation
      dateElement.innerHTML = searchedDate;
      dayOne.innerHTML = shortDays[mainDayArrayNumber + 1];
      dayTwo.innerHTML = shortDays[mainDayArrayNumber + 2];
      dayThree.innerHTML = shortDays[mainDayArrayNumber + 3];
      dayFour.innerHTML = shortDays[mainDayArrayNumber + 4];

      // DOM variables
      const temperatureElement = document.querySelector("#temperature");
      const weatherDescriptionElement = document.querySelector(
        "#weather-description"
      );
      const humidityElement = document.querySelector("#humidity");
      const windElement = document.querySelector("#wind");

      const temperatureOneMax = document.querySelector("#temperature-one-max");
      const temperatureTwoMax = document.querySelector("#temperature-two-max");
      const temperatureThreeMax = document.querySelector(
        "#temperature-three-max"
      );
      const temperatureFourMax = document.querySelector(
        "#temperature-four-max"
      );

      const temperatureOneMin = document.querySelector("#temperature-one-min");
      const temperatureTwoMin = document.querySelector("#temperature-two-min");
      const temperatureThreeMin = document.querySelector(
        "#temperature-three-min"
      );
      const temperatureFourMin = document.querySelector(
        "#temperature-four-min"
      );

      // DOM manipulation if country not found
      if (dateElement.innerHTML === "undefined undefined:NaN") {
        cityHeading.innerHTML = " Uh Oh...";
        dateElement.innerHTML =
          "Country not found. Please search again ʕ •ₒ• ʔ";
        document.getElementById("temp-teddy").src = "./assets/cloudy.png";

        temperatureElement.innerHTML = "";
        weatherDescriptionElement.innerHTML = "";
        humidityElement.innerHTML = "";
        windElement.innerHTML = "";
        temperatureOneMax.innerHTML = "";
        temperatureTwoMax.innerHTML = "";
        temperatureThreeMax.innerHTML = "";
        temperatureFourMax.innerHTML = "";
        temperatureOneMin.innerHTML = "";
        temperatureTwoMin.innerHTML = "";
        temperatureThreeMin.innerHTML = "";
        temperatureFourMin.innerHTML = "";
      }
    }

    const timeApiKey = "f83ea03eaec86b89t28973b8846f30o5";
    const timeApiUrl = `https://api.shecodes.io/weather/v1/current?query=${citySearch}&key=${timeApiKey}&units=metric
    `;

    // THIRD API CALL FOR TIME
    axios.get(timeApiUrl).then(getSearchedTime);
  }

  // FUNCTION TO CAPITALISE ACCESED USER INPUT
  function capitaliseLetter() {
    const submittedUserInput = userInput.value;
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
    //______________________________________________________________________________________________________________

    // SECOND API CALL- to get temp

    //______________________________________________________________________________________________________________

    function getTemperatureData(secondResponse) {
      // DOM manipulation function
      function changeTemperatureInfo() {
        cityName.innerHTML = updatedInput;

        humidityElement.innerHTML = humidity;
        windElement.innerHTML = wind;

        temperatureElement.innerHTML = mainTemperature;
        weatherDescriptionElement.innerHTML = weatherDescription;
      }
      //______________________________________________________________________________________________________________

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
      //______________________________________________________________________________________________________________

      // Function to change forecast

      function changeForecast(sheCodesResponse) {
        // day +1 data
        const dayOneTemperatureMax = `${Math.round(
          sheCodesResponse.data.daily[0].temperature.maximum
        )}&deg;C`;
        const dayOneTemperatureMin = `${Math.round(
          sheCodesResponse.data.daily[0].temperature.minimum
        )}&deg;C`;

        // day +2 data
        const dayTwoTemperatureMax = `${Math.round(
          sheCodesResponse.data.daily[1].temperature.maximum
        )}&deg;C`;
        const dayTwoTemperatureMin = `${Math.round(
          sheCodesResponse.data.daily[1].temperature.minimum
        )}&deg;C`;

        // day +3 data
        const dayThreeTemperatureMax = `${Math.round(
          sheCodesResponse.data.daily[2].temperature.maximum
        )}&deg;C`;
        const dayThreeTemperatureMin = `${Math.round(
          sheCodesResponse.data.daily[2].temperature.minimum
        )}&deg;C`;

        // day +4 data
        const dayFourTemperatureMax = `${Math.round(
          sheCodesResponse.data.daily[3].temperature.maximum
        )}&deg;C`;
        const dayFourTemperatureMin = `${Math.round(
          sheCodesResponse.data.daily[3].temperature.minimum
        )}&deg;C`;

        temperatureOneMax.innerHTML = dayOneTemperatureMax;
        temperatureTwoMax.innerHTML = dayTwoTemperatureMax;
        temperatureThreeMax.innerHTML = dayThreeTemperatureMax;
        temperatureFourMax.innerHTML = dayFourTemperatureMax;

        temperatureOneMin.innerHTML = dayOneTemperatureMin;
        temperatureTwoMin.innerHTML = dayTwoTemperatureMin;
        temperatureThreeMin.innerHTML = dayThreeTemperatureMin;
        temperatureFourMin.innerHTML = dayFourTemperatureMin;
      }
      //______________________________________________________________________________________________________________

      function changeForecastIcon() {
        const dayOneWeatherConditionMain =
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

        const dayTwoWeatherConditionMain =
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

        const dayThreeWeatherConditionMain =
          secondResponse.data.list[24].weather[0].main;

        if (
          dayThreeWeatherConditionMain === "Thunderstorm" ||
          dayThreeWeatherConditionMain === "Drizzle" ||
          dayThreeWeatherConditionMain === "Rain"
        ) {
          document.getElementById("day-three-icon").innerHTML = "rainy";
        } else if (dayThreeWeatherConditionMain === "Snow") {
          document.getElementById("day-three-icon").innerHTML =
            "cloudy_snowing";
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

        const dayFourWeatherConditionMain =
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
      }
      //______________________________________________________________________________________________________________

      // FETCHED DATA
      const mainTemperature = Math.round(secondResponse.data.list[0].main.temp);
      const fetchedWind =
        Math.round(secondResponse.data.list[0].wind.speed * 10) / 10;
      const fetchedHumidity = secondResponse.data.list[0].main.humidity;
      const wind = `${fetchedWind}m/s`;
      const humidity = `${fetchedHumidity}%`;
      const weatherDescription =
        secondResponse.data.list[0].weather[0].description;
      const weatherConditionMain = secondResponse.data.list[0].weather[0].main;
      const weatherConditionId = secondResponse.data.list[0].weather[0].id;

      //______________________________________________________________________________________________________________

      // DOM variables
      const temperatureElement = document.querySelector("#temperature");
      const weatherDescriptionElement = document.querySelector(
        "#weather-description"
      );
      const humidityElement = document.querySelector("#humidity");
      const windElement = document.querySelector("#wind");

      const temperatureOneMax = document.querySelector("#temperature-one-max");
      const temperatureTwoMax = document.querySelector("#temperature-two-max");
      const temperatureThreeMax = document.querySelector(
        "#temperature-three-max"
      );
      const temperatureFourMax = document.querySelector(
        "#temperature-four-max"
      );

      const temperatureOneMin = document.querySelector("#temperature-one-min");
      const temperatureTwoMin = document.querySelector("#temperature-two-min");
      const temperatureThreeMin = document.querySelector(
        "#temperature-three-min"
      );
      const temperatureFourMin = document.querySelector(
        "#temperature-four-min"
      );

      //______________________________________________________________________________________________________________

      const sheCodesApiKey = "f83ea03eaec86b89t28973b8846f30o5";
      const sheCodesApiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${fetchedLonCode}&lat=${fetchedLatCode}&key=${sheCodesApiKey}`;

      changeTemperatureInfo();
      changeTempTeddy();
      changeForecastIcon();

      axios.get(sheCodesApiUrl).then(changeForecast);
    }

    const fetchedLonCode = response.data[0].lon;
    const fetchedLatCode = response.data[0].lat;

    const apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
    const apiUrlMain = `https://api.openweathermap.org/data/2.5/forecast?lat=${fetchedLatCode}&lon=${fetchedLonCode}&appid=${apiKey}&units=metric`;

    if (fetchedLonCode === undefined) {
      alert("hey");
    }

    // FOURTH API CALL - to get forecast
    axios.get(apiUrlMain).then(getTemperatureData);
  }

  // list of main global variables
  const userInput = document.querySelector("#search-form-input");
  const cityName = document.querySelector("#city-heading");
  const updatedInput = capitaliseLetter();
  const citySearch = userInput.value;
  const apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
  const apiUrlGeocode = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&appid=${apiKey}`;

  // FIRST API CALL - to get geo codes
  axios.get(apiUrlGeocode).then(accessWeather);

  // SECOND API CALL - found in accessWeather function

  // THIRD API CALL FOR TIME - found in accessTime function
  accessTime();
}

//______________________________________________________________________________________________________________

/* DOM LISTEN OUT FOR USER SEARCH */
const searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

//______________________________________________________________________________________________________________

/* RUN SEARCH FOR LONDON ON LOADUP - Code to run a search for "London" on load */

function loadup() {
  // list of main variables
  const cityName = document.querySelector("#city-heading");
  const citySearch = "London";
  const apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
  const apiUrlGeocode = `http://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&appid=${apiKey}`;

  axios.get(apiUrlGeocode).then(accessWeather);

  //______________________________________________________________________________________________________________

  // FUNCTION TO GET SEARCHED TIME AND MANIPULATE DOM
  function getSearchedTime(thirdResponse) {
    const date = new Date(thirdResponse.data.time * 1000);
    const dateElement = document.querySelector("#current-date");
    const dayOne = document.querySelector("#day-one");
    const dayTwo = document.querySelector("#day-two");
    const dayThree = document.querySelector("#day-three");
    const dayFour = document.querySelector("#day-four");

    let minutes = date.getMinutes();
    const hours = date.getHours();
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // GETTING THE TIME
    const listOfHours = [
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

    const listOfMinutes = [
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

    const currentHour = listOfHours[hours];
    let currentMinute = minutes;

    // code to fix minute print error
    if (currentMinute <= 9) {
      currentMinute = listOfMinutes[currentMinute];
    }

    // here is the current time
    const currentTime = `${currentHour}:${currentMinute}`;

    const day = days[date.getDay()];
    const shortDays = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
    const mainDayArrayNumber = days.indexOf(day);
    const searchedDate = `${day} ${currentTime}`;

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

  //______________________________________________________________________________________________________________

  const timeApiKey = "f83ea03eaec86b89t28973b8846f30o5";
  const timeApiUrl = `https://api.shecodes.io/weather/v1/current?query=${citySearch}&key=${timeApiKey}&units=metric
    `;

  // THIRD API CALL FOR TIME
  axios.get(timeApiUrl).then(getSearchedTime);

  //______________________________________________________________________________________________________________

  function accessWeather(response) {
    // SECOND API CALL- to get temp
    function getTemperatureData(secondResponse) {
      //______________________________________________________________________________________________________________

      // current day data
      const mainTemperature = Math.round(secondResponse.data.list[0].main.temp);
      const fetchedWind =
        Math.round(secondResponse.data.list[0].wind.speed * 10) / 10;
      const fetchedHumidity = secondResponse.data.list[0].main.humidity;
      const wind = `${fetchedWind}m/s`;
      const humidity = `${fetchedHumidity}%`;
      const weatherDescription =
        secondResponse.data.list[0].weather[0].description;
      const weatherConditionMain = secondResponse.data.list[0].weather[0].main;
      const weatherConditionId = secondResponse.data.list[0].weather[0].id;

      //______________________________________________________________________________________________________________

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

      // Function to change forecast
      function changeForecast(sheCodesResponse) {
        // day +1 data
        const dayOneTemperatureMax = `${Math.round(
          sheCodesResponse.data.daily[0].temperature.maximum
        )}&deg;C`;
        const dayOneTemperatureMin = `${Math.round(
          sheCodesResponse.data.daily[0].temperature.minimum
        )}&deg;C`;

        // day +2 data
        const dayTwoTemperatureMax = `${Math.round(
          sheCodesResponse.data.daily[1].temperature.maximum
        )}&deg;C`;
        const dayTwoTemperatureMin = `${Math.round(
          sheCodesResponse.data.daily[1].temperature.minimum
        )}&deg;C`;

        // day +3 data
        const dayThreeTemperatureMax = `${Math.round(
          sheCodesResponse.data.daily[2].temperature.maximum
        )}&deg;C`;
        const dayThreeTemperatureMin = `${Math.round(
          sheCodesResponse.data.daily[2].temperature.minimum
        )}&deg;C`;

        // day +4 data
        const dayFourTemperatureMax = `${Math.round(
          sheCodesResponse.data.daily[3].temperature.maximum
        )}&deg;C`;
        const dayFourTemperatureMin = `${Math.round(
          sheCodesResponse.data.daily[3].temperature.minimum
        )}&deg;C`;

        //______________________________________________________________________________________________________________

        temperatureOneMax.innerHTML = dayOneTemperatureMax;
        temperatureTwoMax.innerHTML = dayTwoTemperatureMax;
        temperatureThreeMax.innerHTML = dayThreeTemperatureMax;
        temperatureFourMax.innerHTML = dayFourTemperatureMax;

        temperatureOneMin.innerHTML = dayOneTemperatureMin;
        temperatureTwoMin.innerHTML = dayTwoTemperatureMin;
        temperatureThreeMin.innerHTML = dayThreeTemperatureMin;
        temperatureFourMin.innerHTML = dayFourTemperatureMin;
      }

      //______________________________________________________________________________________________________________

      function changeForecastIcon() {
        const dayOneWeatherConditionMain =
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

        //______________________________________________________________________________________________________________

        const dayTwoWeatherConditionMain =
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

        //______________________________________________________________________________________________________________

        const dayThreeWeatherConditionMain =
          secondResponse.data.list[24].weather[0].main;

        if (
          dayThreeWeatherConditionMain === "Thunderstorm" ||
          dayThreeWeatherConditionMain === "Drizzle" ||
          dayThreeWeatherConditionMain === "Rain"
        ) {
          document.getElementById("day-three-icon").innerHTML = "rainy";
        } else if (dayThreeWeatherConditionMain === "Snow") {
          document.getElementById("day-three-icon").innerHTML =
            "cloudy_snowing";
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

        //______________________________________________________________________________________________________________

        const dayFourWeatherConditionMain =
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
      }

      //______________________________________________________________________________________________________________

      // DOM variables
      const temperatureElement = document.querySelector("#temperature");
      const weatherDescriptionElement = document.querySelector(
        "#weather-description"
      );

      const humidityElement = document.querySelector("#humidity");
      const windElement = document.querySelector("#wind");

      const temperatureOneMax = document.querySelector("#temperature-one-max");
      const temperatureTwoMax = document.querySelector("#temperature-two-max");
      const temperatureThreeMax = document.querySelector(
        "#temperature-three-max"
      );
      const temperatureFourMax = document.querySelector(
        "#temperature-four-max"
      );

      const temperatureOneMin = document.querySelector("#temperature-one-min");
      const temperatureTwoMin = document.querySelector("#temperature-two-min");
      const temperatureThreeMin = document.querySelector(
        "#temperature-three-min"
      );
      const temperatureFourMin = document.querySelector(
        "#temperature-four-min"
      );

      //______________________________________________________________________________________________________________

      function changeTemperatureInfo() {
        cityName.innerHTML = "London";

        humidityElement.innerHTML = humidity;
        windElement.innerHTML = wind;

        temperatureElement.innerHTML = mainTemperature;
        weatherDescriptionElement.innerHTML = weatherDescription;
      }

      //______________________________________________________________________________________________________________

      const sheCodesApiKey = "f83ea03eaec86b89t28973b8846f30o5";
      const sheCodesApiUrl = `https://api.shecodes.io/weather/v1/forecast?lon=${fetchedLonCode}&lat=${fetchedLatCode}&key=${sheCodesApiKey}`;

      //______________________________________________________________________________________________________________

      changeTemperatureInfo();
      changeTempTeddy();
      changeForecastIcon();

      axios.get(sheCodesApiUrl).then(changeForecast);
    }

    const fetchedLonCode = response.data[0].lon;
    const fetchedLatCode = response.data[0].lat;

    const apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
    const apiUrlMain = `https://api.openweathermap.org/data/2.5/forecast?lat=${fetchedLatCode}&lon=${fetchedLonCode}&appid=${apiKey}&units=metric`;

    axios.get(apiUrlMain).then(getTemperatureData);
  }
  openInfoBox();
}
window.onload = loadup;

//______________________________________________________________________________________________________________
