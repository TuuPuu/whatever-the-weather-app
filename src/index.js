/* ADDING DEFAULT TIME INTO CODE */

/*function addTimeOnPage() {
  // function to get the time and date data
  function getDateAndTime() {
    let newDate = new Date();

    // GETTING THE DAY
    let listOfDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    // here is the current day
    let currentDay = listOfDays[newDate.getDay()];

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
    let currentHour = listOfHours[newDate.getHours()];
    let currentMinute = newDate.getMinutes();

    // code to fix minute print error
    if (currentMinute <= 9) {
      currentMinute = listOfMinutes[currentMinute];
    }

    // here is the current time
    let currentTime = `${currentHour}:${currentMinute}`;

    // FULL TIME AND DATE HERE
    let dateAndTime = `${currentDay} ${currentTime}`;
    return dateAndTime;
  }
  let fetchedDate = getDateAndTime();

  // ________________________________________________________________
  // code to edit HTML
  let currentDate = document.querySelector("#current-date");
  currentDate.innerHTML = `${fetchedDate}`;
}
addTimeOnPage();*/

// ______________________________________________________________________________________________________________

/*SEARCH FORM CODE*/

// FUNCTION TO ACCESS INPUT AND CHANGE CITY NAME ELEMENT BASED ON INPUT
function handleSearch(event) {
  event.preventDefault();

  // FUNCTION TO CAPITALISE ACCESED USER INPUTß
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
      // Time manipulation
      function changeTimeInfo() {
        // OK SO THE TIME CODE FROM ARRAY IS NOT CURRENT TIME, ITS FORECAST TIME, SO USE A NEW API TO CALCULATE WORLD TIME- this is still broken

        function getTime(thirdResponse) {
          let data = thirdResponse.data;
          let timestamp = thirdResponse.data.time;
          let date = new Date(timestamp * 1000); // Convert seconds to milliseconds
          let dateString = date.toLocaleString(); // Convert date to local date and time string
          const [datePart, timePart] = dateString.split(", ");
          const time = timePart.split(":").slice(0, 2).join(":");
          console.log(time);

          // console.log(data);
        }

        // NEW API CALL FOR TIME
        let timeApiKey = "f83ea03eaec86b89t28973b8846f30o5";
        let apiUrlTime = `https://api.shecodes.io/weather/v1/current?lon=${fetchedLonCode}&lat=${fetchedLatCode}&key=${timeApiKey}`;

        // Axios call for Time
        axios.get(apiUrlTime).then(getTime);
      }

      // DOM manipulation function
      function changeTemperatureInfo() {
        cityName.innerHTML = updatedInput;

        humidityElement.innerHTML = humidity;
        windElement.innerHTML = wind;

        temperatureOne.innerHTML = dayOneTemperature;
        temperatureTwo.innerHTML = dayTwoTemperature;
        temperatureThree.innerHTML = dayThreeTemperature;
        temperatureFour.innerHTML = dayFourTemperature;

        temperatureElement.innerHTML = mainTemperature;
        weatherDescriptionElement.innerHTML = weatherDescription;
      }

      // current day data
      // let data = secondResponse.data;
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
      let dayOneTemperature = `${Math.round(
        secondResponse.data.list[8].main.temp
      )}&deg;C`;
      let dayOneWeatherConditionMain =
        secondResponse.data.list[8].weather[0].main;
      let dayOneWeatherConditionId = secondResponse.data.list[8].weather[0].id;

      // day +2 data
      let dayTwoTemperature = `${Math.round(
        secondResponse.data.list[16].main.temp
      )}&deg;C`;
      let dayTwoWeatherConditionMain =
        secondResponse.data.list[16].weather[0].main;
      let dayTwoWeatherConditionId = secondResponse.data.list[16].weather[0].id;

      // day +3 data
      let dayThreeTemperature = `${Math.round(
        secondResponse.data.list[24].main.temp
      )}&deg;C`;
      let dayThreeWeatherConditionMain =
        secondResponse.data.list[24].weather[0].main;
      let dayThreeWeatherConditionId =
        secondResponse.data.list[24].weather[0].id;

      // day +4 data
      let dayFourTemperature = `${Math.round(
        secondResponse.data.list[32].main.temp
      )}&deg;C`;
      let dayFourWeatherConditionMain =
        secondResponse.data.list[32].weather[0].main;
      let dayFourWeatherConditionId =
        secondResponse.data.list[32].weather[0].id;

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
      let temperatureOne = document.querySelector("#temperature-one");
      let temperatureTwo = document.querySelector("#temperature-two");
      let temperatureThree = document.querySelector("#temperature-three");
      let temperatureFour = document.querySelector("#temperature-four");

      changeTimeInfo();
      changeTemperatureInfo();
      // console.log(data);
      // console.log(dayFourWeatherConditionId);
      // console.log(wind);
      // console.log(humidity);
    }

    let fetchedLonCode = response.data[0].lon;
    let fetchedLatCode = response.data[0].lat;

    let apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
    let apiUrlMain = `https://api.openweathermap.org/data/2.5/forecast?lat=${fetchedLatCode}&lon=${fetchedLonCode}&appid=${apiKey}&units=metric`;

    axios.get(apiUrlMain).then(getTemperatureData);
  }

  // list of main variables
  let userInput = document.querySelector("#search-form-input");
  let cityName = document.querySelector("#city-heading");
  let updatedInput = capitaliseLetter();
  let citySearch = userInput.value;
  let apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
  let apiUrlGeocode = `https://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&appid=${apiKey}`;

  // FIRST API CALL - to get geo codes
  axios.get(apiUrlGeocode).then(accessWeather);
}

//______________________________________________________________________________________________________________

/*DOM LISTEN OUT FOR USER SEARCH*/
let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

//______________________________________________________________________________________________________________

/* RUN SEARCH FOR LONDON ON LOADUP - Code to run a search for "London" on load*/
function loadup() {
  // console.log("working");

  // list of main variables

  let cityName = document.querySelector("#city-heading");
  let citySearch = "London";
  let apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
  let apiUrlGeocode = `http://api.openweathermap.org/geo/1.0/direct?q=${citySearch}&appid=${apiKey}`;

  axios.get(apiUrlGeocode).then(accessWeather);

  function accessWeather(response) {
    // SECOND API CALL- to get temp
    function getTemperatureData(secondResponse) {
      // DOM manipulation function
      function changeTemperatureInfo() {
        cityName.innerHTML = citySearch;

        humidityElement.innerHTML = humidity;
        windElement.innerHTML = wind;

        temperatureOne.innerHTML = dayOneTemperature;
        temperatureTwo.innerHTML = dayTwoTemperature;
        temperatureThree.innerHTML = dayThreeTemperature;
        temperatureFour.innerHTML = dayFourTemperature;

        temperatureElement.innerHTML = mainTemperature;
        weatherDescriptionElement.innerHTML = weatherDescription;
      }

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
      let dayOneTemperature = `${Math.round(
        secondResponse.data.list[8].main.temp
      )}&deg;C`;
      let dayOneWeatherConditionMain =
        secondResponse.data.list[8].weather[0].main;
      let dayOneWeatherConditionId = secondResponse.data.list[8].weather[0].id;

      // day +2 data
      let dayTwoTemperature = `${Math.round(
        secondResponse.data.list[16].main.temp
      )}&deg;C`;
      let dayTwoWeatherConditionMain =
        secondResponse.data.list[16].weather[0].main;
      let dayTwoWeatherConditionId = secondResponse.data.list[16].weather[0].id;

      // day +3 data
      let dayThreeTemperature = `${Math.round(
        secondResponse.data.list[24].main.temp
      )}&deg;C`;
      let dayThreeWeatherConditionMain =
        secondResponse.data.list[24].weather[0].main;
      let dayThreeWeatherConditionId =
        secondResponse.data.list[24].weather[0].id;

      // day +4 data
      let dayFourTemperature = `${Math.round(
        secondResponse.data.list[32].main.temp
      )}&deg;C`;
      let dayFourWeatherConditionMain =
        secondResponse.data.list[32].weather[0].main;
      let dayFourWeatherConditionId =
        secondResponse.data.list[32].weather[0].id;

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
      let temperatureOne = document.querySelector("#temperature-one");
      let temperatureTwo = document.querySelector("#temperature-two");
      let temperatureThree = document.querySelector("#temperature-three");
      let temperatureFour = document.querySelector("#temperature-four");

      changeTemperatureInfo();
    }

    let fetchedLonCode = response.data[0].lon;
    let fetchedLatCode = response.data[0].lat;

    let apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
    let apiUrlMain = `https://api.openweathermap.org/data/2.5/forecast?lat=${fetchedLatCode}&lon=${fetchedLonCode}&appid=${apiKey}&units=metric`;

    axios.get(apiUrlMain).then(getTemperatureData);
  }
}
window.onload = loadup();

//______________________________________________________________________________________________________________
