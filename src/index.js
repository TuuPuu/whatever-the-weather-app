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

  // FUNCTION TO CHANGE DATE AND TIME - IN TESTING
  function accessTime() {
    // FUNCTION TO GET TIMEZONE FOR THIRD API CALL
    function getTimezone() {
      // Array of API Timezones
      const apiTimezones = [
        "Africa/Abidjan",
        "Africa/Algiers",
        "Africa/Bissau",
        "Africa/Cairo",
        "Africa/Casablanca",
        "Africa/Ceuta",
        "Africa/El_Aaiun",
        "Africa/Johannesburg",
        "Africa/Juba",
        "Africa/Khartoum",
        "Africa/Lagos",
        "Africa/Maputo",
        "Africa/Monrovia",
        "Africa/Nairobi",
        "Africa/Ndjamena",
        "Africa/Sao_Tome",
        "Africa/Tripoli",
        "Africa/Tunis",
        "Africa/Windhoek",
        "America/Adak",
        "America/Anchorage",
        "America/Araguaina",
        "America/Argentina/Buenos_Aires",
        "America/Argentina/Catamarca",
        "America/Argentina/Cordoba",
        "America/Argentina/Jujuy",
        "America/Argentina/La_Rioja",
        "America/Argentina/Mendoza",
        "America/Argentina/Rio_Gallegos",
        "America/Argentina/Salta",
        "America/Argentina/San_Juan",
        "America/Argentina/San_Luis",
        "America/Argentina/Tucuman",
        "America/Argentina/Ushuaia",
        "America/Asuncion",
        "America/Bahia",
        "America/Bahia_Banderas",
        "America/Barbados",
        "America/Belem",
        "America/Belize",
        "America/Boa_Vista",
        "America/Bogota",
        "America/Boise",
        "America/Cambridge_Bay",
        "America/Campo_Grande",
        "America/Cancun",
        "America/Caracas",
        "America/Cayenne",
        "America/Chicago",
        "America/Chihuahua",
        "America/Ciudad_Juarez",
        "America/Costa_Rica",
        "America/Cuiaba",
        "America/Danmarkshavn",
        "America/Dawson",
        "America/Dawson_Creek",
        "America/Denver",
        "America/Detroit",
        "America/Edmonton",
        "America/Eirunepe",
        "America/El_Salvador",
        "America/Fort_Nelson",
        "America/Fortaleza",
        "America/Glace_Bay",
        "America/Goose_Bay",
        "America/Grand_Turk",
        "America/Guatemala",
        "America/Guayaquil",
        "America/Guyana",
        "America/Halifax",
        "America/Havana",
        "America/Hermosillo",
        "America/Indiana/Indianapolis",
        "America/Indiana/Knox",
        "America/Indiana/Marengo",
        "America/Indiana/Petersburg",
        "America/Indiana/Tell_City",
        "America/Indiana/Vevay",
        "America/Indiana/Vincennes",
        "America/Indiana/Winamac",
        "America/Inuvik",
        "America/Iqaluit",
        "America/Jamaica",
        "America/Juneau",
        "America/Kentucky/Louisville",
        "America/Kentucky/Monticello",
        "America/La_Paz",
        "America/Lima",
        "America/Los_Angeles",
        "America/Maceio",
        "America/Managua",
        "America/Manaus",
        "America/Martinique",
        "America/Matamoros",
        "America/Mazatlan",
        "America/Menominee",
        "America/Merida",
        "America/Metlakatla",
        "America/Mexico_City",
        "America/Miquelon",
        "America/Moncton",
        "America/Monterrey",
        "America/Montevideo",
        "America/New_York",
        "America/Nome",
        "America/Noronha",
        "America/North_Dakota/Beulah",
        "America/North_Dakota/Center",
        "America/North_Dakota/New_Salem",
        "America/Nuuk",
        "America/Ojinaga",
        "America/Panama",
        "America/Paramaribo",
        "America/Phoenix",
        "America/Port-au-Prince",
        "America/Porto_Velho",
        "America/Puerto_Rico",
        "America/Punta_Arenas",
        "America/Rankin_Inlet",
        "America/Recife",
        "America/Regina",
        "America/Resolute",
        "America/Rio_Branco",
        "America/Santarem",
        "America/Santiago",
        "America/Santo_Domingo",
        "America/Sao_Paulo",
        "America/Scoresbysund",
        "America/Sitka",
        "America/St_Johns",
        "America/Swift_Current",
        "America/Tegucigalpa",
        "America/Thule",
        "America/Tijuana",
        "America/Toronto",
        "America/Vancouver",
        "America/Whitehorse",
        "America/Winnipeg",
        "America/Yakutat",
        "Antarctica/Casey",
        "Antarctica/Davis",
        "Antarctica/Macquarie",
        "Antarctica/Mawson",
        "Antarctica/Palmer",
        "Antarctica/Rothera",
        "Antarctica/Troll",
        "Asia/Almaty",
        "Asia/Amman",
        "Asia/Anadyr",
        "Asia/Aqtau",
        "Asia/Aqtobe",
        "Asia/Ashgabat",
        "Asia/Atyrau",
        "Asia/Baghdad",
        "Asia/Baku",
        "Asia/Bangkok",
        "Asia/Barnaul",
        "Asia/Beirut",
        "Asia/Bishkek",
        "Asia/Chita",
        "Asia/Choibalsan",
        "Asia/Colombo",
        "Asia/Damascus",
        "Asia/Dhaka",
        "Asia/Dili",
        "Asia/Dubai",
        "Asia/Dushanbe",
        "Asia/Famagusta",
        "Asia/Gaza",
        "Asia/Hebron",
        "Asia/Ho_Chi_Minh",
        "Asia/Hong_Kong",
        "Asia/Hovd",
        "Asia/Irkutsk",
        "Asia/Jakarta",
        "Asia/Jayapura",
        "Asia/Jerusalem",
        "Asia/Kabul",
        "Asia/Kamchatka",
        "Asia/Karachi",
        "Asia/Kathmandu",
        "Asia/Khandyga",
        "Asia/Kolkata",
        "Asia/Krasnoyarsk",
        "Asia/Kuching",
        "Asia/Macau",
        "Asia/Magadan",
        "Asia/Makassar",
        "Asia/Manila",
        "Asia/Nicosia",
        "Asia/Novokuznetsk",
        "Asia/Novosibirsk",
        "Asia/Omsk",
        "Asia/Oral",
        "Asia/Pontianak",
        "Asia/Pyongyang",
        "Asia/Qatar",
        "Asia/Qostanay",
        "Asia/Qyzylorda",
        "Asia/Riyadh",
        "Asia/Sakhalin",
        "Asia/Samarkand",
        "Asia/Seoul",
        "Asia/Shanghai",
        "Asia/Singapore",
        "Asia/Srednekolymsk",
        "Asia/Taipei",
        "Asia/Tashkent",
        "Asia/Tbilisi",
        "Asia/Tehran",
        "Asia/Thimphu",
        "Asia/Tokyo",
        "Asia/Tomsk",
        "Asia/Ulaanbaatar",
        "Asia/Urumqi",
        "Asia/Ust-Nera",
        "Asia/Vladivostok",
        "Asia/Yakutsk",
        "Asia/Yangon",
        "Asia/Yekaterinburg",
        "Asia/Yerevan",
        "Atlantic/Azores",
        "Atlantic/Bermuda",
        "Atlantic/Canary",
        "Atlantic/Cape_Verde",
        "Atlantic/Faroe",
        "Atlantic/Madeira",
        "Atlantic/South_Georgia",
        "Atlantic/Stanley",
        "Australia/Adelaide",
        "Australia/Brisbane",
        "Australia/Broken_Hill",
        "Australia/Darwin",
        "Australia/Eucla",
        "Australia/Hobart",
        "Australia/Lindeman",
        "Australia/Lord_Howe",
        "Australia/Melbourne",
        "Australia/Perth",
        "Australia/Sydney",
        "CET",
        "CST6CDT",
        "EET",
        "EST",
        "EST5EDT",
        "Etc/GMT",
        "Etc/GMT+1",
        "Etc/GMT+10",
        "Etc/GMT+11",
        "Etc/GMT+12",
        "Etc/GMT+2",
        "Etc/GMT+3",
        "Etc/GMT+4",
        "Etc/GMT+5",
        "Etc/GMT+6",
        "Etc/GMT+7",
        "Etc/GMT+8",
        "Etc/GMT+9",
        "Etc/GMT-1",
        "Etc/GMT-10",
        "Etc/GMT-11",
        "Etc/GMT-12",
        "Etc/GMT-13",
        "Etc/GMT-14",
        "Etc/GMT-2",
        "Etc/GMT-3",
        "Etc/GMT-4",
        "Etc/GMT-5",
        "Etc/GMT-6",
        "Etc/GMT-7",
        "Etc/GMT-8",
        "Etc/GMT-9",
        "Etc/UTC",
        "Europe/Andorra",
        "Europe/Astrakhan",
        "Europe/Athens",
        "Europe/Belgrade",
        "Europe/Berlin",
        "Europe/Brussels",
        "Europe/Bucharest",
        "Europe/Budapest",
        "Europe/Chisinau",
        "Europe/Dublin",
        "Europe/Gibraltar",
        "Europe/Helsinki",
        "Europe/Istanbul",
        "Europe/Kaliningrad",
        "Europe/Kirov",
        "Europe/Kyiv",
        "Europe/Lisbon",
        "Europe/London",
        "Europe/Madrid",
        "Europe/Malta",
        "Europe/Minsk",
        "Europe/Moscow",
        "Europe/Paris",
        "Europe/Prague",
        "Europe/Riga",
        "Europe/Rome",
        "Europe/Samara",
        "Europe/Saratov",
        "Europe/Simferopol",
        "Europe/Sofia",
        "Europe/Tallinn",
        "Europe/Tirane",
        "Europe/Ulyanovsk",
        "Europe/Vienna",
        "Europe/Vilnius",
        "Europe/Volgograd",
        "Europe/Warsaw",
        "Europe/Zurich",
        "HST",
        "Indian/Chagos",
        "Indian/Maldives",
        "Indian/Mauritius",
        "MET",
        "MST",
        "MST7MDT",
        "PST8PDT",
        "Pacific/Apia",
        "Pacific/Auckland",
        "Pacific/Bougainville",
        "Pacific/Chatham",
        "Pacific/Easter",
        "Pacific/Efate",
        "Pacific/Fakaofo",
        "Pacific/Fiji",
        "Pacific/Galapagos",
        "Pacific/Gambier",
        "Pacific/Guadalcanal",
        "Pacific/Guam",
        "Pacific/Honolulu",
        "Pacific/Kanton",
        "Pacific/Kiritimati",
        "Pacific/Kosrae",
        "Pacific/Kwajalein",
        "Pacific/Marquesas",
        "Pacific/Nauru",
        "Pacific/Niue",
        "Pacific/Norfolk",
        "Pacific/Noumea",
        "Pacific/Pago_Pago",
        "Pacific/Palau",
        "Pacific/Pitcairn",
        "Pacific/Port_Moresby",
        "Pacific/Rarotonga",
        "Pacific/Tahiti",
        "Pacific/Tarawa",
        "Pacific/Tongatapu",
        "WET",
      ];
      // Check search city to find timezone in array
      const searchedTimezone = updatedInput;
      let timeZoneName = "";

      for (let i = 0; i < apiTimezones.length; i++) {
        if (apiTimezones[i].includes(searchedTimezone)) {
          const parts = apiTimezones[i];
          timeZoneName = parts;
          break; // Stop the loop once a match is found
        }
      }
      return timeZoneName;
    }

    // function to get the searched time and manipulate time DOM -
    function getSearchedTime(thirdResponse) {
      console.log("this world");
    }

    let timeZone = getTimezone();
    let timeApiUrl = `http://worldtimeapi.org/api/timezone/${timeZone}`;

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
