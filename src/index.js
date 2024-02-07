/* ADDING TIME INTO CODE */

function addTimeOnPage() {
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
addTimeOnPage();

/*SEARCH FORM CODE*/

// function to access user input and change city based on input
function handleSearch(event) {
  event.preventDefault();

  // function to capitalise accessed user input
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

  // function to get Lon an Lat geo code for main api call
  function getGeoCode(response) {
    let fetchedLonCode = response.data[0].lon;
    let fetchedLatCode = response.data[0].lat;
    // let apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
    // let apiUrlMain = ``;

    console.log(fetchedLonCode);
    console.log(fetchedLatCode);
  }

  // list of variables
  let userInput = document.querySelector("#search-form-input");
  let cityHeading = document.querySelector("#city-heading");
  let updatedInput = capitaliseLetter();
  let cityName = userInput.value;
  let apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
  let apiUrlGeocode = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&appid=${apiKey}`;

  cityHeading.innerHTML = updatedInput;

  axios.get(apiUrlGeocode).then(getGeoCode);

  // this is the data that will be fed into the next function, the api call, which runs everytime we recieve this data
  // searchCity(userInput);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearch);

// function to get temperature based on api call

// function searchCity(city) {
//   let apiKey = "50850ed39d5e31cd4cb601304d3ee7c3";
//   let apiUrlGeocode = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName},{state code},{country code}&limit={limit}&appid={API key}`;
// }
